// • By Zyko-MD

import fetch from 'node-fetch'
let handler = async (m, { conn, text, command, args }) => {
if (!args[0]) throw `Membuat gambar dari AI.\n\nContoh:\n${command} Wooden house on snow mountain`
await m.reply('Searching...')
  let res = `https://api.lolhuman.xyz/api/dall-e?apikey=SGWN&text=${text}`
  
  conn.sendHydrated2(m.chat, 'Nih', wm3, res,  'https://instagram.com/kabulsaputra21', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', 'https://youtube.com/@zykobotz', 'ʏ ᴏ ᴜ ᴛ ᴜ ʙ ᴇ', [['Donasi', `.donasi`],
  ['Owner', `.owner`]], m)
  
}
handler.help = ['ai-image', 'aidraw']
handler.tags = ['fun']
handler.command = /^(ai-image|aidraw)$/i
handler.limit = false

export default handler
       