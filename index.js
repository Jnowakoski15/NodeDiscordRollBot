const Discord = require('discord.js');
const client = new Discord.Client();

let messageMap = new Map();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

messageMap.set('ping', (msg) => msg.reply('pong'));
messageMap.set('pong', (msg) => msg.reply('ping'));
messageMap.set('!flip', (msg) => {
    var rndInt = getRandomInt(2);
    if (rndInt) {
        msg.reply('**heads**');
    }
    else {
        msg.reply('**tails**')
    }
})

messageMap.set('!roll', (msg) => {
    var rndInt = getRandomInt(20) + 1;
    msg.reply(" you rolled **" + rndInt + "**")
})



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    let messenger = messageMap.get(msg.content);
    if (messenger != null) {
        messenger(msg)
    }
});

client.login(process.env.DISCORD_TOKEN);
