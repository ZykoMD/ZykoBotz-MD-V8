import fetch from 'node-fetch'
import fs from 'fs'
import { promises, readFileSync } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'

let handler = async(m, { conn, groupMetadata, usedPrefix, text, args, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss') 
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let { exp, limit, level, role, money, lastclaim, lastweekly, registered, regTime, age, banned, pasangan } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let pp = hwaifu.getRandom()
    let name = await conn.getName(who)
    let tag = `@${m.sender.replace(/@.+/, '')}`
    let ucpn = `${ucapan()}`
    let emot = `${pickRandom(['⎔', '◈▻', '✦', 'ᯬ', '⭔', '◉', '⬟', '᭻', '〆', '々', '⛥', '✗',])}`
    let users = Object.entries(global.db.data.users).filter(user => user[1].banned)
    
    let totalf = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
        if (typeof global.db.data.users[who] == "undefined") {
      global.db.data.users[who] = {
        exp: 0,
        limit: 10,
        lastclaim: 0,
        registered: false,
        name: conn.getName(m.sender),
        age: -1,
        regTime: -1,
        afk: -1,
        afkReason: '',
        banned: false,
        level: 0,
        lastweekly: 0,
        role: 'Warrior V',
        autolevelup: false,
        money: 0,
        pasangan: "",
      }
     }
  
  let cap = `
❍⃕  「 ${name} 」

❍⃕  *I N F O - B O T*\n\n${emot} Sistem otomatis (WhatsApp Bot) yang dapat membantu untuk melakukan sesuatu, mencari dan mendapatkan data/informasi hanya melalui WhatsApp.\n\n❍⃕   *N O T E* \n\n${emot} Gunakan bot di private message agar bot merespon dengan cepat, \n\n${emot} Beri jeda yah agar terhindar dari banned😇\n\n📮 *Note:* _Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner dengan cara ketik .report banh tik tok audio error_
  \n\n${botdate}`
  let ucp = `${ucapan()}, ${tag} 👋`
let fpayment = {
  "key": {
    "remoteJid": "0@s.whatsapp.net",
    "fromMe": false,
    "id": "BAE595C600522C9C",
    "participant": "0@s.whatsapp.net"
  },
  "message": {
    "requestPaymentMessage": {
      "currencyCodeIso4217": "USD",
      "amount1000": fsizedoc,
      "requestFrom": "0@s.whatsapp.net",
      "noteMessage": {
        "extendedTextMessage": {
          "text": "ZYKOBOTZ MD"
        }
      },
      "expiryTimestamp": fsizedoc,
      "amount": {
        "value": fsizedoc,
        "offset": fsizedoc,
        "currencyCode": "USD"
      }
    }
  }
}
let fliveLoc = {
            key: {
            participant : '0@s.whatsapp.net'},
            message: { "liveLocationMessage": { "caption": wm,"h": `${bottime}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
               
let info = fs.readFileSync('./mp3/Bot.opus')
let fliveLoc22 = {
            key: {
            participant : '0@s.whatsapp.net'},
            message: { "liveLocationMessage": { "title": gcname,"h": bottime, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
conn.send2ButtonDoc(m.chat, ucp, cap, 'ALL MENU', '.? all', 'LIST MENU', '.listmenu', ftoko, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: bottime,
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: false,
    sourceId: wm,
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await (await fetch(thumb)).buffer(),
    thumbnailUrl: sgc,
    title: gcname,
				}
			}
})
await conn.reply(m.chat, info, fvn, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: syt,
    mediaType: 1, 
    description: syt,
    title: `Hallo ${name}, 👋`,
    body: `⚠️ 𝐃𝐀𝐍𝐆𝐄𝐑 ⚠️`,
    thumbnail: await (await fetch(thumb)).buffer(),
    sourceUrl: syt
  }
  } }) 
          }
handler.help = ['menuv3']
handler.tags = ['main']
handler.command = /^(menuv3)$/i

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 10) {
    res = "Selamat Siang️"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}

function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }
