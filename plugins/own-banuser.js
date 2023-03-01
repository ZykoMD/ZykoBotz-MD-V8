let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, usedPrefix }) => {
  function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

  var hl = []
  hl[0] = text.split('|')[0]
  hl[0] = no(hl[0]) + "@s.whatsapp.net"
  hl[1] = text.split('|')[1]
  
  if (!text) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• ${usedPrefix}ban number|days\n*Example:* ${usedPrefix}ban 6283133329293|99\n\n• ${usedPrefix}ban @tag|days\n*Example:* ${usedPrefix}ban @6283133329293|99`, m)
  if (typeof db.data.users[hl[0]] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  var jumlahHari = 86400000 * hl[1]
  // var jumlahHari = 1000 * text
  var now = new Date() * 1
  global.db.data.users[hl[0]].banned = true
  if (now < global.db.data.users[hl[0]].bannedDate) global.db.data.users[hl[0]].bannedDate += jumlahHari
  else global.db.data.users[hl[0]].bannedDate = now + jumlahHari
  conn.reply(m.chat,`*TERBANNED*\n\nKamu di banned *@${hl[0].split('@')[0]}* selama *${hl[1]} hari*.\n\n*Banned : ${clockString(global.db.data.users[hl[0]].bannedDate - now)}*`,m,{ contextInfo: { mentionedJid: [hl[0]] } })
  conn.reply(hl[0],`*TERBANNED*\n\nKamu di banned *@${hl[0].split('@')[0]}* selama *${hl[1]} hari*.\n\n*Banned : ${clockString(global.db.data.users[hl[0]].bannedDate - now)}*`,m,{ contextInfo: { mentionedJid: [hl[0]] } }) 

}
handler.help = ['ban *@tag|days*']
handler.tags = ['owner']
handler.command = /^ban(user)?$/i
handler.owner = true
export default handler 

//function clockString(ms) {


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}