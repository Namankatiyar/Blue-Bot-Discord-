const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () =>{
    console.log(`Loggend in as ${client.user.tag}`)
})

client.login(process.env.TOKEN)