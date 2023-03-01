import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api-fgmods.ddns.net/api/girl?apikey=6sotNhAL'
	conn.sendButton(m.chat, '© nih gril random nya jangan lupa subscribe channel ZYKOBOTZ MD👍', botdate, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(girlrandom)$/i
handler.tags = ['internet']
handler.help = ['girlrandom']
handler.premium = false
handler.limit = true

export default handler