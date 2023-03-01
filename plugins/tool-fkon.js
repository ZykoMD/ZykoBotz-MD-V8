import { readFileSync } from 'fs'

let handler = async (m, { conn }) => {
let fkon = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': readFileSync('./thumbnail.jpg'), thumbnail: readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
await conn.reply(m.chat, 'Kontak Tes', fkon)
}
handler.command = /^fkon$/i

export default handler