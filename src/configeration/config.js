//Holds all the confgeration data for the server
module.exports = {
    port: process.env.PORT || 3000,
    db:{    
        host     : 'http://dab3e029.ngrok.io',
        user     : 'root',
        password : '',
        database: 'lora_console'
    },
    authentication:{
        jwtSecret: 'project'
    },
    email:{
        service: 'gmail',
        auth: {
            user: 'lorawanconsole@gmail.com',
            pass: 'LoRaWAN1234'
        }

    }
}