import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, usedPrefix, args, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
  let res = await fetch(`https://api.zahwazein.xyz/randomanime/animeme?apikey=85345ee3d9de`)
  let x = await res.json() 
  let cap = `🐦Caption: ${x.result.caption}`
conn.sendHydrated2(m.chat, `DONE` + ' ' + name, cap, x.result.image, 'https://instagram.com/kabulsaputra21', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', sgc, 'ɢ ʀ ᴏ ᴜ ᴘ ᴏ ғ ғ ɪ ᴄ ɪ ᴀ ʟ', [['Donasi', `.donasi`],
  ['Owner', `.owner`]], m)
}
handler.help = ['animeme']
handler.tags = ['anime']
handler.command = /^(animeme)$/i
export default handler
