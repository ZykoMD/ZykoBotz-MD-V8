import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api-fgmods.ddns.net/api/girl?apikey=6sotNhAL'
	conn.sendButton(m.chat, 'Nih', botdate, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(girl)$/i
handler.tags = ['asupan']
handler.help = ['girl']
handler.premium = false
handler.limit = true

export default handler