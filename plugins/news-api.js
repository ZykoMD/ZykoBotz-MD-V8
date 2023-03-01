import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
  if (!text) throw `Contoh penggunaan ${usedPrefix}${command} Naruto`
  
  if (command == 'newsapi') {
let f = await fetch(`https://newsapi.org/v2/top-headlines?country=${text}&apiKey=916be7f6341f4cd3991d4c3937707d30`)
let xx = await f.json()
let dapet = xx.articles
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nAuthor: ' + v.author + '\nSource: ' + v.source.name + '\nDescription: ' + v.description + '\nLink: ' + v.url + '\nThumbnail: ' + v.urlToImage + '\nPublished: ' + v.publishedAt,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'newsapi2') {
if (!args[0]) throw `Contoh:
${usedPrefix + command} category
*List:*
• antara
• bbc
• cnbc
• cnn
• daily
• detik
• fajar
• idn
• indozone
• inews
• kompas
• kontan
• liputan6
• merdeka
• metro
• okezone
• republika
• sindo
• tempo
• tribun
• viva`
let f = await fetch(`https://dhn-api.herokuapp.com/api/news/${text}?apikey=4ca83deeb14d61d16cf0`)
let xx = await f.json()
let dapet = xx.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.title,
		description: '\nBerita: ' + v.berita,
		rowId: usedPrefix + 'ss ' + v.berita_url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

if (command == 'news') {
if (!args[0]) throw `Contoh:
${usedPrefix + command} category
*List:*
• antara
• bbc
• cnbc
• cnn
• daily
• detik
• fajar
• idn
• indozone
• inews
• kompas
• kontan
• liputan6
• merdeka
• metro
• okezone
• republika
• sindo
• tempo
• tribun
• viva`
let res = await axios('https://violetics.pw/api/news/' + args[0] + '?apikey=beta')
let json = res.data
let dapet = json.result
	let row = Object.values(dapet).map((v, index) => ({
		title: index + ' ' + v.category,
		description: '\nDate: ' + v.date + '\nNews: ' + v.news + '\nUrl: ' + v.url + '\nThumb: ' + v.thumbnail,
		rowId: usedPrefix + 'ss ' + v.url
	}))
	let button = {
		buttonText: `☂️ ${command} Search Disini ☂️`,
		description: `⚡ Hai ${name}, Silakan pilih ${command} Search di tombol di bawah...\n*Teks yang anda kirim:* ${text}\n\nKetik ulang *${usedPrefix + command}* teks anda untuk mengubah teks lagi`,
		footerText: wm
	}
	return conn.sendListM(m.chat, button, row, m)
}

}
handler.help = ['newsapi', 'newsapi2', 'news'].map(v => v + ' <app>')
handler.command = ['newsapi', 'newsapi2', 'news']
handler.tags = ['internet']

export default handler