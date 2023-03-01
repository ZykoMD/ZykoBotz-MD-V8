//let { MessageType } = require('@adiwajshing/baileys')
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + 'MAKASIH KA UDH MAU SUBSCRIBE', null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.customPrefix = /^(ombaik)$/i
handler.command = new RegExp
export default handler
