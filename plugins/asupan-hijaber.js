/*let handler = async (m, { conn }) => {
let api-hyzer = 'https://api.zacros.my.id/asupan/hijaber'
    conn.sendButtonImg(m.chat, api-hyzer, 'Nih', wm2, 'NEXT', '.hijaber', m)
}
handler.help = ['hijaber']
handler.tags = ['asupan']
handler.command = /^(hijaber)$/i

module.exports = handler*/
import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zacros.my.id/asupan/hijaber'
	conn.sendButton(m.chat, 'Nih', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(hijaber)$/i
handler.tags = ['asupan', 'kabul']
handler.help = ['hijaber']
handler.limit = true
export default handler

