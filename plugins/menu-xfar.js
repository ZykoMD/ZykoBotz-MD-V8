import fetch from 'node-fetch'
import xa from 'xfarr-api'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw '*Enter a Link Query!*'

if (args[0] == 'scdl') {
                await xa.SoundCloud(args[1]).then(async (data) => {
                    let txt = `*▊▊▊SOUNDCLOUD DL▊▊▊*\n\n`
                    txt += `*⬤Title :* ${data.title}\n`
                    txt += `*⬤Quality :* ${data.medias[0].quality}\n`
                    txt += `*⬤Type :* ${data.medias[0].extension}\n`
                    txt += `*⬤Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*⬤Url Source :* ${data.url}\n\n`
                    txt += `*${author}*`
                let buf = await(await fetch(data.thumbnail)).buffer()   
                conn.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => m.reply('link error'))    
                conn.sendMessage(m.chat, { audio: { url: data.medias[0].url }, mimetype: 'audio/mpeg', fileName: data.title+'.m4a' }, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed to download media and send audio*`)
                })
                }
                if (args[0] == 'twit') {
                await xa.Twitter(args[1]).then(async (data) => {                    
                    let txt = `*▊▊▊TWITTER DL▊▊▊*\n\n`
                    txt += `*⬤TITLE :* ${data.title}\n`
                    txt += `*⬤QUALITY :* ${data.medias[1].quality}\n`
                    txt += `*⬤TYPE :* ${data.medias[1].extension}\n`
                    txt += `*⬤SIZE :* ${data.medias[1].formattedSize}\n`
                    txt += `*⬤DURATION :* ${data.medias.length}\n`
                    txt += `*⬤URL :* ${data.url}\n\n`
                    txt += `*${author}*`
                let buf = await(await fetch(data.thumbnail)).buffer()    
                conn.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
                for (let i of data.medias) {
                conn.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Downloading From ${text}*`}, { quoted: m })
                }
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
                }
                if (args[0] == 'fb') {
                await xa.Facebook(args[1]).then(async (data) => {                   
                    let txt = `*▊▊▊FB6 DOWNLOAD▊▊▊*\n\n`
                    txt += `*⬤TITLE :* ${data.title}\n`
                    txt += `*⬤QUALITY :* ${data.medias[1].quality}\n`
                    txt += `*:⬤TYPE* ${data.medias[1].extension}\n`
                    txt += `*⬤SIZE :* ${data.medias[1].formattedSize}\n`
                    txt += `*⬤URL :* ${data.url}\n\n`
                    txt += `*${author}*`
                let buf = await(await fetch(data.thumbnail)).buffer()    
                conn.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })              
                conn.sendMessage(m.chat, { video: { url: data.medias[1].url }, jpegThumbnail:buf, caption: `*⬤ Quality :* ${data.medias[1].quality}`}, { quoted: m })                
                }).catch((err) => {
                    m.reply(`*Failed When Downloading Media and Sending Files*`)
                })
                }
}
handler.help = ['xfr']
handler.tags = ['downloader']
handler.command = /^(xfr)$/i
handler.limit = true

export default handler
