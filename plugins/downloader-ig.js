import instagramGetUrl from "instagram-url-direct"
import spit from 'performance-now'
const times = spit();
const latensi = spit() - times
const fetching = latensi.toFixed(4) + ' ms'

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw 'Masukan URL Instagram...'
let res = await instagramGetUrl(text)
m.reply(`Mengirim ${res.results_number} Media...`)
for(var media of res.url_list) { 
conn.sendFile(m.chat, media, 'ig.mp4', '🍟 Fetching : ' + fetching, m)
}
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig|instagram(dl))$/i

handler.limit = 3

export default handler