import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  
let res = await fetch('https://api.zahwazein.xyz/islami/kisahnabi/muhammad?apikey=85345ee3d9de')
    let x = await res.json()    
    await m.reply(`${md}`)
    let ucp = `*name:* ${x.result.name}
*lahir:* ${x.result.lahir}
*age:* ${x.result.age}
*place:* ${x.result.place}


*story:* 
${x.result.story}

${wm}`
let cap = '*Kisah Nabi*'
conn.sendButton(m.chat, cap, ucp, await(await fetch(x.result.image)).buffer(),[['Menu', '.menuv1'],[ 'Next', '.kisahnabi']], m)
 //   await conn.sendButtonImg(m.chat, json.result.thumbnail, txt, wm, `Again`, `.ceritahoror`, m)
}
handler.help = ['kisahnabi']
handler.tags = ['quran']
handler.command = /^kisahnabi$/i


export default handler