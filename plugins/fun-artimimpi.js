import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `*Contoh:*\n${usedPrefix + command} mandi`
await m.reply('Searching...')
let zykomd = await fetch(`https://api.zahwazein.xyz/primbon/artimimpi?query=${text}&apikey=85345ee3d9de`)
let hasil = await zykomd.json()
 m.reply(`*Arti dari Mimpi ${text} adalah*
----------------------------------- 
Mimpi ${text} 

${hasil.result.arti}`.trim())
    }  
handler.help = ['artimimpi'].map(v => v + ' <text>')
handler.tags = ['fun']
handler.command = /^(artimimpi)$/i
export default handler