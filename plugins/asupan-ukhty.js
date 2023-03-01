/*let handler = async(m,{text, conn}) => {
let supa = 'https://api.zacros.my.id/asupan/ukhty'
conn.sendFile(m.chat, supa, null, 'Nih', m)
}
handler.help = ['ukhty']
handler.tags = ['asupan']
handler.command = /^(ukhty)$/i

module.exports = handler*/
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zacros.my.id/asupan/ukhty'
	conn.sendButton(m.chat, 'Nih', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(ukhty1)$/i
handler.tags = ['asupan', 'kabul']
handler.help = ['ukhty1']
handler.limit = true
export default handler

