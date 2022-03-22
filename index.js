const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () =>{
    console.log(`Loggend in as ${client.user.tag}`)
})

const welcomechannelid = "954714592624382016"

client.on("guildMemberAdd", async (member) =>{
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomechannelid).send({
     content: `<@${member.id}> Welcome to our Friends Club, hope you enjoy a lot !!!`,
     files: [img]   
    })
})

client.login(process.env.TOKEN)