import fetch from 'node-fetch'
import fs from 'fs'
import axios from 'axios'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:\n${usedPrefix + command} Naruto`
let f = await fetch(`https://api.zahwazein.xyz/searching/animequotes?query=${text}&apikey=85345ee3d9de`)
let x = await f.json()
     let cap = `
${cmenub} Anime : @${x.result.anime}
${cmenub} Character : ${x.result.character}
${cmenub} Episode : ${x.result.episode}
${cmenuf}
Quotes : ${x.result.quotes}

${botdate}`
   let ucp =  `${cmenut} Anime Quotes ${htka}`
conn.sendHydrated2(m.chat, ucp, cap, `${x.result.thumb}`, 'https://youtu.be/E1Cb97Rb-8U', 's ᴄ ʀ ɪ ᴘ ᴛ', 'https://instagram.com/kabulsaputra21', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', [['Menu', `.menuv1`],
  ['Donasi', `.donasi`],['Sewa', `.sewa`]], m)
  }
  handler.help = ['image-anime-quotes'].map(v => v + ' <text>')
  handler.tags = ['quotes']
  handler.limit = true
  handler.command = /^(image-anime-quotes)$/i

   export default handler
