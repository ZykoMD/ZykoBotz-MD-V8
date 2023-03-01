import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
const { WAMessageStubType } = (await import('@adiwajshing/baileys')).default
let handler = async(m, { conn }) => {
  let res = await fetch(global.API('https://api.waifu.pics', '/sfw/kiss'))
  let json = await res.json()
  let stiker = await sticker(null, json.url, global.packname, global.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
}
handler.help = ['stickerkiss']
handler.tags = ['sticker','premium']
handler.command = /^kiss|stickerkiss|stikerkis$/i
handler.premium = true

export default handler 
