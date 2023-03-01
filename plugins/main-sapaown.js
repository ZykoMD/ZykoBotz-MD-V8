import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let zykomd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let stiker = await sticker(null, global.API(`https://telegra.ph/file/0649bab19ab4cc79a7ce0.mp4`), global.packname, global.author)
    if (stiker) return await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, null, { fileLength: 100, contextInfo: {
          externalAdReply :{
          showAdAttribution: true,
    mediaUrl: tautanwa,
    mediaType: tautanwa,
    description: 'SUBCRIBE YT', 
    title: 'Hai, ' + name + ' ' + ucapan,
    body: bottime,
    thumbnail: await(await fetch(zykomd)).buffer(),
    sourceUrl: syt
     }}
  })
    throw stiker.toString()
   
}

handler.customPrefix = /^(sapaown)$/i
handler.command = new RegExp

export default handler