const express = require('express')
const app = express()
const path = require('path')
const ReactDOMServer = require('react-dom/server')
const fs = require('fs')
const ServerApp = require('../../dist/ServerApp.js').default
const AppString = ReactDOMServer.renderToString(ServerApp)

const htmlTemplate = fs.readFileSync(path.join(__dirname,"../client/index.html"),"utf8")

const newHtml =htmlTemplate.replace('<!-- app -->',AppString)

app.use('public',express.static(path.join(__dirname,'../../dist')))
app.get('/',(req,res)=>{
    res.send(newHtml)
})

const port = process.env.PORT || 5000
app.listen(port,()=>console.log(`server on port ${port}`))