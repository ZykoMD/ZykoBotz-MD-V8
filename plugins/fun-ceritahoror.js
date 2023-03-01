import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  
let res = await fetch('https://api.lolhuman.xyz/api/ceritahoror?apikey=SGWN')
    let json = await res.json()
    
    await m.reply(`${md}`)
await conn.sendButtonImg(m.chat, json.result.thumbnail, `Judul: ${json.result.title}

Desc: ${json.result.desc}
Cerita: ${json.result.story}`, wm, 'Next', '.ceritahoror', m)
 //   await conn.sendButtonImg(m.chat, json.result.thumbnail, txt, wm, `Again`, `.ceritahoror`, m)
}
handler.help = ['ceritahoror']
handler.tags = ['internet']
handler.command = /^ceritahoror$/i


export default handler