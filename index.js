const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', (client) => {
    console.log(`logged in as ${client.user.tag}!`)
});

client.on('messageCreate', (message) => {
    if (message.content === 'ping') {
        message.reply({
            content: 'pong'
        })
    }
});

client.login(process.env.TOKEN);