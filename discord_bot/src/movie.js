function checkUser(x, y, z, user, content) {
    if (user.key == x.key) {
        delete z[y]
        movieDB.push({
            key: user,
            value: content,
        })
    } else {
        movieDB.push({
            key: user,
            value: content,
        })
    }
}

var movieDB = []
client.on('message', message => {

    if (message.author.bot) return;
    console.log(message.author.username, message.content)

    if (message.content === '!movietime') {
        message.reply('Initiating movietime, please type @ and then the name of the movie title of your preference!')
        client.on('message', message1 => {
            if (message1.author.bot) return;
            var user = message1.author.tag
            var content = message1.content
            var splitContent = content.split('')
            if (splitContent[0] == '@') {
                // movieDB.forEach(checkUser, user, content)
                movieDB.push({
                    key: user,
                    value: content,
                })
            } else if (message1.content === '!endm') {
                return;
            }
            console.log(movieDB)
        })
    }


});