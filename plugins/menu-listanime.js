import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
//-----PRICE
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}:${wibm}:${wibs} WIB`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)
//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let wibb = `${wktuwib}`
let info = `
*${ucapann()}:${conn.getName(m.sender)}*
sɪʟᴀʜᴋᴀɴ ᴘɪʟɪʜ ʟɪsᴛᴀɴɪᴍᴇ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪʜ ᴋᴀᴋ
Nomor Developer : wa.me/6283133329293
Nomor Owner Bot : wa.me/${nomorown}`
  /*    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	{title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },*/
const sections = [{
title: `⟥⟝⟢⟨🌸 LISTANIME ⟩⟣⟞⟤`,
rows: [
        {title: "🌸 • AKIRA", rowId: ".akira"},
      	{title: "🌸 • AKIYAMA", rowId: ".akiyama"},
        {title: "🌸 • ANNA", rowId: ".anna"},
        {title: "🌸 • ASUNA", rowId: ".asuna"},
        {title: "🌸 • AYUZAMA", rowId: ".ayuzawa"},
        {title: "🌸 • BORUTO", rowId: ".boruto"},
        {title: "🌸 • CHIHO", rowId: ".chiho"},
        {title: "🌸 • CHITOGE", rowId: ".chitoge"},
        {title: "🌸 • DEIDARA", rowId: ".deidara"},
        {title: "🌸 • ERZA", rowId: ".erza"},
        {title: "🌸 • ELAINA", rowId: ".elaina"},
        {title: "🌸 • EBA", rowId: ".eba"},
        {title: "🌸 • EMILIA", rowId: ".emilia"},
        {title: "🌸 • HESTIAN", rowId: ".hestia"},
        {title: "🌸 • HINATA", rowId: ".hinata"},       
        {title: "🌸 • INORI", rowId: ".inori"},
        {title: "🌸 • ISUZU", rowId: ".isuzu"},    
        {title: "🌸 • ITACHI", rowId: ".itachi"},
      	{title: "🌸 • ITORI", rowId: ".itori"},
        {title: "🌸 • KAGA", rowId: ".kaga"},
        {title: "🌸 • KAGURA", rowId: ".kagura"},   
        {title: "🌸 • KAORI", rowId: ".kaori"},
        {title: "🌸 • KENEKI", rowId: ".keneki"},
        {title: "🌸 • KOTORI", rowId: ".kotori"},       
        {title: "🌸 • KORUMI", rowId: ".kurumi"},
        {title: "🌸 • MADARA", rowId: ".madara"},    
        {title: "🌸 • MIKASA", rowId: ".mikasa"},       
        {title: "🌸 • MIKU", rowId: ".miku"},       
        {title: "🌸 • MINATO", rowId: ".minato"},
        {title: "🌸 • NARUTO", rowId: ".naruto"},    
        {title: "🌸 • NEZOKU", rowId: ".nezuko"},
        {title: "🌸 • SAGIRI", rowId: ".sagiri"},      
      	{title: "🌸 • SASUKE", rowId: ".sasuke"},
        {title: "🌸 • SAKURA", rowId: ".sakura"},
        {title: "🌸 • COSPLAY", rowId: ".cosplay"},                    
]},
]

const listMessage = {
  text: info,
  footer:  `⌚ : ${wibb}\n📆 : ${week} ${date}`,
  title: '⬒ ───⟢⟨ *🌸 LISTANIME* ⟩⟣─── ⬒',
  buttonText: "Click Here!",
  sections
}

let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  
  case 'sewabottt': 
  let teks = `*${htki} ${command.toUpperCase()} ${htka}*\n📮 : ${text}\n*- @${m.sender.split`@`[0]}*`
conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
   /* m.reply('☑️ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')*/
  break
  
  default:
  if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
  throw false
  }
   m.reply('☑️ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')
}

handler.help = ['listanime',]
handler.tags = ['anime' ]
handler.command = /^(listanime)$/i
handler.register = false
handler.group = true
export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}
function ucapann() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "malam"
  if (time >= 4) {
    res = "Pagi"
  }
  if (time >= 10) {
    res = "Siang"
  }
  if (time >= 15) {
    res = "Selamat"
  }
  if (time >= 18) {
    res = "Malam"
  }
  return res
}