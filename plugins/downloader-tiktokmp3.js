import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://tiktok.com/xxxx`
 let res = await fetch(`https://saipulanuar.ga/api/download/tiktok?url=${args[0]}`)
let data = await res.json()
let json = data.result

conn.reply(`Proses kak @${m.sender.split(`@`)[0]}`)
 await conn.sendFile(m.chat, json.audio, 'error.mp3', null, m, true, {
type: 'audioMessage',  
ptt: false, seconds: 0,contextInfo: { 
forwardingScore: fsizedoc, 
externalAdReply: { 
body: null, 
containsAutoReply: true, 
mediaType: 1, 
mediaUrl: hwaifu.getRandom(), 
renderLargerThumbnail: true, 
showAdAttribution: true, 
sourceId: null, 
sourceType: 'PDF', 
previewType: 'PDF', 
sourceUrl: null, 
thumbnail: await (await fetch(json.pp)).buffer(),
 thumbnailUrl: sgc,
 title: json.username }}})
}
handler.help = ['tiktokmp3'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tikaudio|tiktokmp3|ttdlmp3|ttmp3|tiktokdlmp3|gettt)$/i
export default handler