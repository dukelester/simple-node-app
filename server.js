const ronin = require('ronin-server');
const mock = require('ronin-mocks');
const database = require('ronin-database');
require('dotenv').config()
// const server = ronin.server()

// server.use('/', mock.server(server.Router(), false, true))
// console.log("hello")
// server.start()

async function main(){
    try {
        await database.connect(process.env.CONNECTIONSTRING)
        const server = ronin.server({port: process.env.SERVER_PORT})
        console.info("The server started and connected to the database success")

        server.use("/foo", (req, res)=>{
            return res.json({"hello duke": "hello am duke lester"})
        })
        server.use('/', mock.server(server.Router()))
        const result = await server.start()
        console.info( result )
    } catch(error){
        console.log(error, error.message)
    }
}

main()