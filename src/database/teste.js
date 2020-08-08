const Database = require('./db')
const createProffy = require('./createProffy')


Database.then( async (db) =>{
    //Inserir dados
    proffyValue = {
        name: "Thiago Gaitkoski",
        avatar: "https://avatars2.githubusercontent.com/u/68345301?s=460&v=4",
        whatsapp: "8998775565",
        bio: "instrutor de Física",
    }

    classValue = {
        subject: 1,
        cost: "20",
    }

    classScheduleValues = [
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

    //await createProffy(db,{proffyValue, classValue, classScheduleValues})

    //Consultar dados

    //Todos proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado proffy
    //e trazer junto os dados do mesmo
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    //Horário das 8h - 18h
    //Horário do tim_from(8h) <= ao horario solicitado
    //time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    //console.log(selectClassesSchedules)
})