import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let handler = async(m,{text, conn}) => {
let res = 'https://api.zeeoneofc.my.id/api/telegram-sticker/patrick?apikey=RCo6vEcS'
m.reply('_Sedang membuat..._\n*Mohon tunggu sekitar 3/4 menit*')
let stiker = await sticker(null, res, global.stickpack, global.stickauth)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
}
handler.help = ['patrick']
handler.tags = ['sticker']
handler.command = /^(patrick)$/i

export default handler