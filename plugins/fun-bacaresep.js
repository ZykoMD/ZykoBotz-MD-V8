import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:\n${usedPrefix + command} bubur`
let f = await fetch(`https://api.zahwazein.xyz/searching/bacaresep?query=${text}&apikey=85345ee3d9de`)
let x = await f.json()
 let cap = `${cmenut} Baca Resep ${htka}
${cmenub} judul : ${x.result.judul}
${cmenub} waktu_masak : ${x.result.waktu_masak}
${cmenub} hasil : ${x.result.hasil}
${cmenub} tingkat_kesulitan : ${x.result.tingkat_kesulitan}
${cmenuf}
bahan : 
${x.result.bahan} `
conn.sendHydrated2(m.chat, cap, wm, x.result.thumb, 'https://youtu.be/E1Cb97Rb-8U', 's ᴄ ʀ ɪ ᴘ ᴛ', 'https://instagram.com/kabulsaputra21', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', [['Menu', `.menuv3`],
  ['Donasi', `.donasi`],['Sewa', `.sewa`]], m)
  }
  handler.help = ['bacaresep'].map(v => v + ' <text>')
  handler.tags = ['fun','internet']

  handler.command = /^(bacaresep)$/i

   export default handler
