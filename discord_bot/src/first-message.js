const addReactions = (message, reactions) => {
    message.react(reactions[0])
    reactions.shift()
    if (reactions.lenght > 0) {
        setTimeout(() => addReactions(message, reactions), 750)
    }
}


module.exports = async(client, id, text, reactions = []) => {
    const channel = await client.channels.fetch(id)
    console.log(reactions)
        // if (text.includes(':')) {
        //     text = text.substring(0, text.length - 1)
        // }
    channel.messages.fetch().then((messages) => {
        if (messages.size === 0) {
            channel.send(text).then(message => {
                addReactions(message, reactions)
            })
        } else {
            for (const message of messages) {
                const { guild } = message
                if (text.includes(':')) {
                    const split = text.split(':')
                    const emojiName = split[1]

                    text = guild.emojis.cache.find((emoji) => {
                        return emojiName === emoji.name
                    })
                }

                message[1].edit(text)
                addReactions(message[1], reactions)
            }
        }
    })
}