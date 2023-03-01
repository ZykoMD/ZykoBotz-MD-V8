let { MessageType } = (await import('@adiwajshing/baileys')).default
import moment from 'moment-timezone'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

  let teks = `Pilih Dibawah kak Model Totalfitur Nya ! o(〃＾▽＾〃)o`
const sections = [
   {
	title: `${htjava} SOUND MENU –––––––––·•`,
	rows: [
	{title: "Totalfitur V1", rowId: ".totav1"},
    {title: "Totalfitur V2", rowId: ".totav2"},
	{title: "Totalfitur V3", rowId: ".totav3"},
	{title: "Totalfitur V4", rowId: ".totav4"},
	]
  },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".owner nomor"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: ` `,
  footer: teks,
  title: `${htki} *TOTALFITUR* ${htka}`,
  buttonText: "Click Here !",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(teks), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = /^(totalfitur)/i
export default handler
