//SERVIDOR
const express = require("express")
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require("./pages")

//configurar nunjucks (template engine)
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true,
})


//Inicio e configuração do servidor
server
.use(express.urlencoded({ extended: true }))
server.use(express.static("public"))//configurar arquivos estáticos (css, scripts, imagens)
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses) 
//Start servidor
.listen(5500)