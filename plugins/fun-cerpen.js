 import fetch from 'node-fetch'
let handler = async (m, { text,  usedPrefix,  command }) => {
let res = await fetch(`https://api.lolhuman.xyz/api/cerpen?apikey=2da1fcd209f20ae428d8482f`)
let hasil = await res.json()
 m.reply(` 
*title:* ${hasil.result.title}

*creator:* ${hasil.result.creator}

*cerpen:* ${hasil.result.cerpen}`.trim())
    }  
handler.help = ['cerpen']
handler.tags = ['fun']
handler.command = /^(cerpen)$/i
export default handler