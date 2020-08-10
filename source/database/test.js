const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {
    // insert datas
    proffyValue = {
        name: "Beatriz Lira",
        avatar: "https://avatars2.githubusercontent.com/u/52337462?s=460&u=5a8988f15974b32b0a4bcd8ac7a1ffeb84d7a6f2&v=4",
        whatsapp: '11963087264',
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
        subject: "Química",
        cost: "35,00"
        // o proffy id virá pelo bd
    }

    classScheduleValues = [
        // class id virá pelo bd após cadastrar a aula(class)
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValues })

    // consult all proffys
    const selectedProffys = await db.all("SELECT * FROM proffys");
    // console.log(selectedProffys);

    // consult classes
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1; 
    `)
    // console.log(selectClassesAndProffys);

    // o horário do time_from precisa ser antes ou igual ao horário solicitado
    // o time_to precisa ser acima
})