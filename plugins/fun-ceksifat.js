import fetch from 'node-fetch'

let handler = async (m, { conn, command, text }) => {

	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
    if (!text) return conn.reply(m.chat, 'Masukan Namamu Udin!', m)
    let nm = 100
    let a = nm.getRandom()
    let b = nm.getRandom()
    let e = nm.getRandom()
    let f = nm.getRandom()
    let g = nm.getRandom()
    let h = nm.getRandom()
    let c = ['Baik Hati','Sombong','Pelit','Dermawan','Rendah Hati','Rendah Diri','Pemalu','Penakut','Pengusil','Cengeng'].getRandom()
    let d = ['Rajin','Malas','Membantu','Ngegosip','Jail','Gak jelas','Shoping','Chattan sama Doi','Chattan di WA karna Jomblo','Sedih','Kesepian','Bahagia'].getRandom()

let cksft = `${cmenut} *SIFAT ${text}* 🔖
│
${cmenub} Nama : *${text}*
${cmenub} Ahlak Baik : *${a}%*
${cmenub} Ahlak Buruk : *${b}%*
${cmenub} Orang yang : *${c}*
${cmenub} Selalu : *${d}*
${cmenub} Kecerdasan : *${e}%*
${cmenub} Kenakalan : *${f}%*
${cmenub} Keberanian : *${g}%*
${cmenub} Ketakutan : *${h}%*
${cmenuf}
`
let msdpn = ['Anda akan menjadi orang yang Kaya, keluarga yang harmonis, memiliki ' + b + ' memiliki anak, memiliki ' + d + ' memiliki kendaraan, memiliki ' + b + ' rumah','Anda akan menjadi orang yang Sederhana, keluarga yang harmonis, memiliki ' + c + ' memiliki anak, memiliki ' + a + ' memiliki kendaraan, memiliki ' + a + ' rumah','Anda akan menjadi orang yang Miskin, keluarga yang Sederhana, memiliki ' + a + ' anak, tidak memiliki kendaraan, rumah ngontrak','Anda akan menjadi orang yang Sederhana, keluarga yang dicerai, memiliki ' + e + ' anak, memiliki ' + b + ' kendaraan, memiliki ' + b + ' rumah','Anda akan menjadi orang yang Sederhana, keluarga yang Sederhana, memiliki ' + b + ' anak, memiliki ' + b + ' kendaraan, memiliki ' + a + ' rumah','Anda akan menjadi orang yang Miskin, keluarga yang dicerai memiliki ' + b + ' anak, memiliki ' + a + ' kendaraan, memiliki ' + a + ' rumah','Anda akan menjadi orang yang Kaya, keluarga yang Sederhana, memiliki ' + a + ' anak, memiliki ' + a + ' kendaraan, memiliki ' + b + ' rumah','Anda akan menjadi orang yang Sederhana, keluarga yang Harmonis, memiliki ' + a + ' anak, memiliki ' + c + ' kendaraan, memiliki ' + a + ' rumah','Anda akan menjadi orang yang Miskin, tidak memiliki keluarga (jomblo), tidak memiliki anak, tidak memiliki kendaraan, tidak memiliki rumah','Anda akan menjadi orang yang Sederhana, keluarga yang Sederhana, memiliki ' + d + ' anak, memiliki ' + a + ' kendaraan, memiliki ' + b + ' rumah','Anda akan menjadi orang yang Sederhana, keluarga yang kacau, tidak memiliki anak (Gugur), memiliki ' + b + ' kendaraan, memiliki ' + a + ' rumah','Anda akan menjadi orang yang Sangat Kaya, keluarga yang Sangat Harmonis, memiliki ' + e + ' anak, memiliki ' + f + ' kendaraan, memiliki ' + g + ' rumah','Anda akan menjadi orang yang Sangat Miskin, keluarga yang Sederhana, memiliki ' + g + ' anak, tidak memiliki kendaraan, rumah ngontrak','Anda akan menjadi orang yang Kaya, keluarga yang Pelit, memiliki ' + b + ' anak, memiliki ' + b + ' kendaraan, memiliki ' + b + ' rumah','Anda akan menjadi orang yang Sederhana, keluarga yang Pelit, memiliki ' + a + ' anak, memiliki ' + a + ' kendaraan, memiliki ' + a + ' rumah','Anda akan menjadi orang yang Sederhana, keluarga yang dicerai, memiliki ' + b + ' anak, memiliki ' + a + ' kendaraan, rumah ngontrak','Anda akan menjadi orang yang Sangat Sederhana, keluarga yang Sakinah, memiliki ' + a + ' anak, memiliki ' + a + ' kendaraan, memiliki ' + a + ' rumah','Anda akan menjadi orang yang Sederhana, keluarga yang Sangat Sederhana, memiliki ' + a + '' + a + ' anak, memiliki ' + a + ' kendaraan, memiliki ' + a + ' rumah','Anda akan menjadi orang yang Sederhana, keluarga yang Sangat Sederhana, memiliki ' + b + ' anak kembar, memiliki ' + c + ' kendaraan, memiliki ' + b + ' rumah','Anda akan menjadi orang yang Sederhana keluarga yang Sederhana, memiliki ' + b + ' anak kembar dan ' + a + ' anak lagi, memiliki ' + a + ' kendaraan, memiliki ' + a + ' rumah'].getRandom()

if (command == 'ceksifat') {
await conn.sendButton(m.chat, cksft, author, await(await fetch(thumbnailUrl.getRandom())).buffer(), [['MENU', '/menu'],['OK', 'Ok']], m, { mentions: conn.parseMention(cksft), fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sig
     }}
  })
  }
  if (command == 'masadepannya') {
  await conn.sendButton(m.chat, msdpn, author, await(await fetch(thumbnailUrl.getRandom())).buffer(), [['MENU', '/menu'],['OK', 'Ok']], m, { mentions: conn.parseMention(msdpn), fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sig
     }}
  })
  }
}
handler.help = ['ceksifat', 'masadepannya'].map(v => v + ' <nama>')
handler.tags = ['kerang', 'fun']
handler.command = ['ceksifat', 'masadepannya']

export default handler
