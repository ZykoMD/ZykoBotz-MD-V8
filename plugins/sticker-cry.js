/*let fetch = require("node-fetch")
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
*/
import fetch from 'node-fetch'
let { MessageType } = (await import('@adiwajshing/baileys')).default
import { sticker } from '../lib/sticker.js'

let handler = async(m, { conn }) => {
  let res = await fetch(global.API('https://api.waifu.pics', '/sfw/cry'))
  let json = await res.json()
  let stiker = await sticker(null, json.url, global.packname, global.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
}
handler.help = ['stickercry']
handler.tags = ['sticker']
handler.command = /^cryy|stickercry|stikercry$/i
handler.limit = true

export default handler 
