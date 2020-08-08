const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-feira",
    "Sexta-Feira",
    "Sábado",
]

//FUNCIONALIDADES

function getSubjects(subjectNumber){

    const position = +subjectNumber - 1

    return subjects[position]
}

function convertHoursToMinutes(time){
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = { 
    subjects,
    weekdays,
    getSubjects,
    convertHoursToMinutes
}