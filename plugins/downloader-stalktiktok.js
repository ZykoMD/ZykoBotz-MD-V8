import fetch from 'node-fetch'
let handler = async(m, { conn, usedPrefix, text, args, command }) => {
if (!text) throw `Contoh:\n${usedPrefix + command} lisaamelia09_`
let f = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=2da1fcd209f20ae428d8482f`)
let x = await f.json()
     let cap = `${cmenut} Info Detail Tiktok ${htka}
${cmenub} Usename : @${x.result.username}
${cmenub} Name : ${x.result.nickname}
${cmenub} followers : ${x.result.followers}
${cmenub} followings : ${x.result.followings}
${cmenub} likes : ${x.result.likes}
${cmenub} video : ${x.result.video}
${cmenub} Bio : ${x.result.bio}
${cmenuf}`
conn.sendHydrated2(m.chat, cap, botdate, `${x.result.user_picture}`, 'https://youtu.be/E1Cb97Rb-8U', 's ᴄ ʀ ɪ ᴘ ᴛ', 'https://www.tiktok.com/@lisaamelia09_', 'ᴛ ɪ ᴋ ᴛ ᴏ ᴋ ', [['Profile', `.profile`],
  ['Donasi', `.donasi`],['Sewa', `.sewa`]], m)
  }
  handler.help = ['stalktiktok'].map(v => v + ' <username>')
  handler.tags = ['downloader']

  handler.command = /^(stalktiktok)$/i

   export default handler
