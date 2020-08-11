const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages');

nunjucks.configure('source/views', {
    express: server,
    noCache: true
})

server
    // receber dados do req.body
    .use(express.urlencoded({ extended: true }))
    // configurar arquivos estáticos (css, scripts, images)
    .use(express.static("public"))
    // definindo rotas de aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    // start on server
    .listen(5500);