import fs from 'fs';
import crypto from 'crypto'
import { youtubeSearch } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!text) throw `Use example ${usedPrefix}${command} naruto blue bird`
   let vid = (await youtubeSearch(text)).video[0] 
   if (!vid) throw 'ᴀᴜᴅɪᴏ ᴏʀ ᴠɪᴅᴇᴏ ɴᴏᴛ ғᴏᴜɴᴅ﹗' 
   let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid 
   const url = 'https://www.youtube.com/watch?v=' + videoId 

    let sewa = `
 🔖 judul: ${title}
 
 📡 Upload: ${publishedTime} 
 ⌛ Durasi: ${durationH} 
 👀️ Views: ${viewH} 
 
 📃 ᴅᴇsᴄʀɪᴩᴛɪᴏɴ: ${description} 
`

    let img1 = fs.readFileSync('./src/yt.png');
    let img2 = fs.readFileSync('./media/zyko.jpg');
    return conn.sendButton(m.chat, `${htki} YT PLAY ${htka}`, sewa, thumbnail, [['🎶 Audio', `${usedPrefix}yta ${url} yes`],['🎥 Video', `${usedPrefix}ytv ${url} yes`],['🔎 Youtube Search', `${usedPrefix}yts ${text}`]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: url,
                mediaType: "VIDEO",
                title: 'Click video di atas untuk melihat',
                body: bottime,
                previewType: 0,
                thumbnail: img1
            }
        }
    })
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play$/i
  
 handler.exp = 0 
 handler.limit = true
  
 export default handler