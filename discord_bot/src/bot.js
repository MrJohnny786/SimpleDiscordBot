const express = require("express");
// require('dotenv').config();
const result = require('dotenv').config()

const { Client, MessageAttachment, MessageEmbed } = require('discord.js');
const client = new Client();
const PREFIX = '$'
const command = require('./command');
const firstMessage = require("./first-message");
const privateMessage = require('./private-message')
    // const fetchUsers = require('./fetch-users')



client.on('ready', () => {
    console.log(`${client.user.username}`, 'has logged in');

    // command(client, ['ping', 'test'], (message) => {
    //     message.channel.send('Pong!')
    // })


    // command(client, 'servers', (message) => {
    //     client.guilds.cache.forEach((guild) => {
    //         message.channel.send(
    //             `${guild.name} has a total of ${guild.memberCount} apes.`
    //         )
    //     })
    // })

    // command(client, 'servers', (message) => {
    //     client.guilds.cache.forEach((guild) => {
    //         message.channel.send(
    //             `${guild.name} has a total of ${guild.memberCount} apes.`
    //         )
    //     })
    // })

    // command(client, 'status', (message) => {
    //     const content = message.content.replace('!status', '')
    //     client.user.setPresence({
    //         activity: {
    //             name: content,
    //             type: 0,
    //         },
    //     })
    // })




    command(client, ['cc', 'clearchannel'], message => {
        if (message.channel.name != 'test_channel') return;
        console.log(message.member.hasPermission('ADMINISTRATOR'), message.member.user.username)
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch()
                .then(results => {
                    message.channel.bulkDelete(results)
                })
        }
    })

    // command(client, 'createtextchannel', (message) => {
    //     const name = message.content.replace('!createtextchannel ', '')
    //     message.guild.channels
    //         .create(name, {
    //             type: 'text',
    //         })
    //         .then((channel) => {
    //             console.log(channel)
    //         })
    // })

    command(client, 'apes', (message) => {
        const embed = new MessageEmbed().setTitle('APES TOGETHER STRONG')
        message.channel.send(embed)
    })





    // firstMessage(client, '793160977751343134', 'hello world', ['🥱'])  // It has it's issues :)

    // privateMessage(client, 'ping', 'Pong!')

    // fetchUsers(client, 'users!', )

});





client.on('message', async(message) => {
    // console.log(message.fetchWebhook())
    //  console.log(message.channel.name)  //Shows the channel name
    // console.log(message.createdAt) //createdAt
    // console.log(message.member.user) // user
    lower_message = message.content.toLowerCase()
        //if (message.channel.name != 'test_channel') return;
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
        const [CMD_NAME, ...args] = message.content
            .trim()
            .substring(PREFIX.length)
            .split(/\s+/);
    }
    // console.log(`[${message.author.tag}]: ${message.content}`)
    if (message.content.includes('TSM')) {
        const attachment = await new MessageAttachment('https://media1.tenor.com/images/6439a5c330b8616ce636824f54c9842f/tenor.gif');
        // Send the attachment in the message channel with a content
        await message.channel.send(`${message.author},`, attachment);
    }
    if (lower_message === 'alekos') {
        const attachment1 = await new MessageAttachment('https://media.tenor.com/images/699a4215913e830581b1fc5846c5c32d/tenor.gif');
        // Send the attachment in the message channel with a content
        await message.channel.send(`${message.author},`, attachment1);
    }
    if (lower_message === 'loli' || lower_message === 'nigger' || lower_message.includes('loli')) {
        message.channel.send('Its 2021 my dudes! Also stfu kwsta');
    }

    if (lower_message === 'spices') {
        message.channel.send('Spices bliaaaaaaaaaaaaaaah!! ᴬˡᵉˣᵃⁿᵈʳᵃ ᵖʳᵒᵇᵃᵇˡʸ');
    }
})


client.login(process.env.DISCORDJS_BOT_TOKEN);