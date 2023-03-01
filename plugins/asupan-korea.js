import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://violetics.pw/api/asupan/korea?apikey=0a5f-75fe-5ea4'
	conn.sendButton(m.chat, `Nih ${command}`, botdate, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(korea)$/i
handler.tags = ['asupan']
handler.help = ['korea']
handler.premium = false
handler.limit = true

export default handler