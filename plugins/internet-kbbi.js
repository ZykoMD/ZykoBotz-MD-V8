
import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
  if (!text) throw `Example use ${usedPrefix}${command} bumi

Note:
p = Partikel: kelas kata yang meliputi kata depan, kata sambung, kata seru, kata sandang, ucapan salam
n = Nomina: kata benda 
`
await m.reply('Searching...')
let zykomd = await fetch(`https://api.zahwazein.xyz/information/kbbi?query=${text}&apikey=85345ee3d9de`)
let hasil = await zykomd.json()
 m.reply(`*title:* ${hasil.result.title}\n*arti:* ${hasil.result.arti}
 `.trim())
    }  

handler.help = ['kbbi <teks>']
handler.tags = ['internet']
handler.command = /^kbbi$/i

export default handler