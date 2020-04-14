const Discord = require('discord.js');
const client = new Discord.Client();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong')
    }

    if (msg.content === '!flip') {
        var rndInt = getRandomInt(2);
        console.log(rndInt);
        if (rndInt) {
            msg.reply('**heads**');
        }
        else {
            msg.reply('**tails**')
        }
    }

    if (msg.content === '!roll') {
        var rndInt = getRandomInt(20) + 1;
        console.log(rndInt);
        msg.reply(" you rolled **" + rndInt + "**")
    }
});

client.login('Fail');
