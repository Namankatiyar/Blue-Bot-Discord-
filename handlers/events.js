const {getFiles} = require("../util/function")

module.exports = (bot, reload) =>{
    const {client} = bot

    let events = getFiles("../event/",".js")

    if (events.length == 0){
        console.log("No events to load")
    }

    events.forEach((f, i) => {
        if (reload)
            delete require.cache[require.resolve('../event/${f}')]
        const events = require('../events/${f}')
        client.events.set(events.name, event)

        if (!reload)
            console.log('${i * 1}. ${f} loaded')
    })

    if (!reload)
        initEvents(bot)
}

function triggerEventHandler(bot,event, ...args){
    const {client} = bot

    try{
        if(client.event.has(event))
            client.events.get(event).run(bot, ...args)
        else
            throw new Error('Event ${event} does not exsist')

    }
    catch(err){
        console.error(err)
    }
}

function initEvents(bot){

}