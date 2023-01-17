//import telegram from './node_modules/node-telegram-bot-api'; // telegram bot node api


//import TelegramApi from './node_modules/node-telegram-bot-api'
const express = require('express')
const path = require('path')
const TelegramApi = require("node-telegram-bot-api")
const nodemailer = require('nodemailer')


const app = express()

const PORT = process.env.PORT ?? 3000

const token = '1858844290:AAG4xVcUFcD6nNnKqz1biKvcGrhwNCsOHMk'
const chatId = '-519873227'



let transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'yarosh.vlad76@gmail.com',
    pass: 'rjafoskedcmmqqzy'
  },
})

app.use(express.static(__dirname))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname + '/index.html'));
} )

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})



const bot = new TelegramApi(token, {polling:true})

app.post('/', (req, res) => {

    
    let{user, score, max, average} = req.headers
    
    transporter.sendMail({
      from: 'yarosh.vlad76@gmail.com',
      to: 'webkpi21@gmail.com',
      subject: 'Основи JS. Робота з об’єктами.Тест',
      html:
        `<h1>Тест виконав: ${user}</h1>
        <h1>Результат: ${score} / ${max}</h1>
        <h2>Середній результат: ${average}</h2>`,
  }, (error, info) => {
      if (error) {
     console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
  })

    bot.sendMessage(chatId, `Основи JS. Робота з об’єктами\nПройшов ${user}\nРезультат: ${score} / ${max}\nСередній результат: ${average}`)
})










