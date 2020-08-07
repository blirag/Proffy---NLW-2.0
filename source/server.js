const proffys = [
    {
        name: "Beatriz Lira",
        avatar: "https://avatars2.githubusercontent.com/u/52337462?s=460&u=5a8988f15974b32b0a4bcd8ac7a1ffeb84d7a6f2&v=4",
        whatsapp: 11963087264,
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "35,00",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4",
        whatsapp: 11963087264,
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Física",
        cost: "30,00",
        weekday: [1],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Biologia",
    "Artes",
    "Filosofia",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
]

function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1;
    return subjects[arrayPosition];
}

function pageLanding(req, res) {
    return res.render("index.html");
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
    const data = req.query;

    const isNotEmpty = Object.keys(data).length > 0; // transformando em um array e checando se não está vazio

    if (isNotEmpty) {
        data.subject = getSubject(data.subject);

        proffys.push(data);

        return res.redirect("/study");
    }

    return res.render("give-classes.html", { subjects, weekdays });
}

const express = require('express');
const server = express();
const nunjucks = require('nunjucks');

nunjucks.configure('source/views', {
    express: server,
    noCache: true
})

server.use(express.static("public")) // configurar arquivos estáticos (css, scripts, images)
    // definindo rotas de aplicação
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .listen(5500);