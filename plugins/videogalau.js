let handler = async (m, { conn, usedPrefix, command }) => {
  await m.reply(`*_${md} @${m.sender.split(`@`)[0]}..._*`)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  conn.sendButton(m.chat, `Nih *${name}* Video Galaunya..`, botdate, pickRandom(galau), [['Next', `/videogalau`]],m)
}
handler.help = ['vidiogalau']
handler.tags = ['quotes']
handler.command = /^(vgalau|videogalau|vidiogalau)$/i

handler.premium = false
handler.limit = false

handler.fail = null
handler.register = false

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const galau = [

"https://telegra.ph/file/c83205eeeecceb9e4db87.mp4",
"https://telegra.ph/file/a001c30cafa587a3bef2c.mp4",
"https://telegra.ph/file/09cf5ac786cbfda551617.mp4",
"https://telegra.ph/file/e696afd2cfe29a199be11.mp4",
"https://telegra.ph/file/5be5e3696c03edff2772b.mp4",
"https://telegra.ph/file/b9b3dece43e557b4addc1.mp4",
"https://telegra.ph/file/a33e23d6736f8cb40b4fb.mp4",
"https://telegra.ph/file/3426da3a67bdc0238bd46.mp4",
"https://telegra.ph/file/394386e5dff94ccff2323.mp4",
"https://telegra.ph/file/1a1cf22235249f0a459e5.mp4",
"https://telegra.ph/file/a5578746d1abf176894ed.mp4",
"https://telegra.ph/file/99dcebf89c97f13f4f657.mp4",
"https://telegra.ph/file/6a808e89640f23ecfc936.mp4",
"https://telegra.ph/file/2e35480077a5eae3b2a1e.mp4",
"https://telegra.ph/file/6c5ba9ed473f188a963b2.mp4",
"https://telegra.ph/file/2c8b0621331ae3bf218ca.mp4",
"https://telegra.ph/file/9b29557891f4d54b3795e.mp4",
"https://telegra.ph/file/b58512a3c4d0c35f42f70.mp4",
"https://telegra.ph/file/170043b1cb8efdb426097.mp4",
"https://telegra.ph/file/dec14d04b1b1081083f47.mp4",
"https://telegra.ph/file/2007555d16ebf8891f779.mp4",
"https://telegra.ph/file/3545cd47fb10f37bf43ab.mp4",
"https://telegra.ph/file/9a326ca62eca4e60c0b93.mp4",
"https://telegra.ph/file/027939516ecafb976d67c.mp4",
"https://telegra.ph/file/1ee2a3ceb9eafaf80a426.mp4",
"https://telegra.ph/file/841c7f0d7be86f925cf8f.mp4",
]
