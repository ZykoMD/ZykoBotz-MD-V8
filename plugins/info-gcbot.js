import fs from 'fs'
import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)


let str = `
*Klik bacaan "Jᴏɪɴ Sɪɴɪ Cᴜʏ*"
`

conn.sendButtonDoc(m.chat, str, wm,' ᴏᴋᴇ ','huuu', m, { contextInfo: { externalAdReply: { showAdAttribution: false,
    mediaUrl: 'https://instagram/kabulsaputra21',
    mediaType: 2, 
    description: sgc,
    title: '≪ Jᴏɪɴ Sɪɴɪ Cᴜʏ ⋟',
    body: wm,
    thumbnail: await(await fetch("https://telegra.ph/file/1b9a0b9f349c927ea390b.jpg")).buffer(),
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['gczyko']

handler.tags = ['info']

handler.command = /^gczyko|gcbot$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.exp = 3

export default handler
