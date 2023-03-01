import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, args, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://www.facebook.com/officialflexluther/videos/856614835575746/`
  let res = await fetch(`https://api.botcahx.biz.id/api/dowloader/fbdown?url=${args[0]}&apikey=954984e8`)
  m.reply(md)
  let x = await res.json()
  let cap = `${global.author}`
conn.sendHydrated2(m.chat, `DONE:` + ' ' + name, cap, x.result.Normal_video, 'https://instagram.com/kabulsaputra21', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', 'https://youtube.com/@zykobotz', 'ʏ ᴏ ᴜ ᴛ ᴜ ʙ ᴇ', [['Donasi', `.donasi`],
  ['Owner', `.owner`]], m)
}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}