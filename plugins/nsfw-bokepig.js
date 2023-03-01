import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.saipulanuar.my.id/api/bokepig?apikey=9vxw5GqJ'
	conn.sendButton(m.chat, 'Nih', botdate, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(bokepig)$/i
handler.tags = ['nsfw']
handler.help = ['bokepig']
handler.premium = true
handler.limit = true

export default handler