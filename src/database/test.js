const Database = require('./db');
const createProffy = require('./createProffy')

Database.then(async (db) => {
  proffyValue = {
    name: "Claudenizio Dias Alves Filho",
    avatar: "https://avatars2.githubusercontent.com/u/69214919?s=460&u=d4c0303295fb765ba65c0818cf01456b650e21b9&v=4",
    whatsapp: 99123456789,
    bio: "Desenvolvedor de programação mais famoso do Brasil, com cerca de 500.000 pessoas já se formaram no mundo todo.",
  }
  classValue = {
    subject: 11, 
    cost: "500", 
  }
  classScheduleValues = [
    {
      weekday: 1,
      time_from: 1200,
      time_to: 1800
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  const selectedProffys = await db.all("SELECT * FROM proffys")

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1;
  `)
  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
  `)
})