/*let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
const axios = require ("axios")
const fetch = require("node-fetch")
*/
// • record zyko-md jangan hapus kalau mau ambil ambil aja credit record jangan hapus 😅
import PhoneNumber from 'awesome-phonenumber'
import { xpRange } from '../lib/levelling.js'
import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	function no(number){
    return number.replace(/\s/g,'').replace(/([@+-])/g,'')
  }

	text = no(text)

  if(isNaN(text)) {
		var number = text.split`@`[1]
  } else if(!isNaN(text)) {
		var number = text
  }
  
   if(!text && !m.quoted) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• \`\`\`\Tag user:\`\`\`\ *${usedPrefix}profile @Tag*\n• \`\`\`\Type number:\`\`\`\ *${usedPrefix}profile 6283133329293*\n• \`\`\`\Check my profile:\`\`\`\ *(Reply Your Self)*\n• \`\`\`\Reply user which want in\`\`\`\  _*STALKING*_`, m)
    if(isNaN(number)) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• \`\`\`\Tag user:\`\`\`\ *${usedPrefix}profile @Tag*\n• \`\`\`\Type number:\`\`\`\ *${usedPrefix}profile 6283133329293*\n• \`\`\`\Check my profile:\`\`\`\ *(Reply Your Self)*\n• \`\`\`\Reply user which want in\`\`\`\  _*STALKING*_`, m)
    if(number.length > 15) return conn.reply(m.chat, `*❏ GET NUMBER*\n\n• \`\`\`\Tag user:\`\`\`\ *${usedPrefix}profile @Tag*\n• \`\`\`\Type number:\`\`\`\ *${usedPrefix}profile 6283133329293*\n• \`\`\`\Check my profile:\`\`\`\ *(Reply Your Self)*\n• \`\`\`\Reply user which want in\`\`\`\  _*STALKING*_`, m) 
 let pp = './src/avatar_contact.png'
  try {
  	//pp = await conn.updateProfilePicture(text)
		if(text) {
			var who = number + '@s.whatsapp.net'
		} else if(m.quoted.sender) {
			var who = m.quoted.sender
		} else if(m.mentionedJid) {
  		  var who = number + '@s.whatsapp.net'
			} 
			//let pp = './src/avatar_contact.png'
			pp = await conn.profilePictureUrl(who, 'image')
		} catch (e) {
					//pp = 'https://telegra.ph/file/32ffb10285e5482b19d89.jpg'
		//} catch (e) {
  } finally {
  	if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
	let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
    let participants = m.isGroup ? groupMetadata.participants : []
	let users = m.isGroup ? participants.find(u => u.jid == who) : {}
	let number = who.split('@')[0]
	//let pp = await conn.updateProfilePicture(who)
	let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
    let { name, pasangan, limit, exp, money, bank, lastclaim, premiumDate, premium, registered, regTime, age, level, role } = global.db.data.users[who]
    let now = new Date() * 1
    let { min, xp, max } = xpRange(level, global.multiplier)
    let username = conn.getName(who)
   // let buffer = await getBuffer(pp)
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])
    let jodoh = `Berpacaran @${pasangan.split`@`[0]}`
    let str = `
│📛 Name : ${username} 
│💢 Tag : ${registered ? '' + name + ' ': ''} ${about ? '\n│🗯 About: ' + about : ''}
│🏷️ Status : ${pasangan ? jodoh : 'Single' }
│🔗 Number : ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
│💥 Link : https://wa.me/${who.split`@`[0]}${registered ? '\n│🐣 Age: ' + age : ''}
├───────────────────⬡
│🏦 XP : TOTAL ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Ready to *${usedPrefix}levelup*` : `${math} XP left to levelup`}]
│🏧 Level : ${level}
│💱 Role : *${role}*
│💹 Limit : ${limit}
│💸 Money : ${money}
├───────────────────⬡
│👨‍ Register : ${registered ? 'Sudah Terdaftar' : 'Belum Terdaftar'}
│♨️ Date Register : ${registered ? ' (' + new Date(regTime).toLocaleString() + ')' : ''}
│💌 Premium : ${premium ? 'Premium' : 'Free'}
│⌛ Expired Premium : ${(premiumDate - now) > 1 ? msToDate(premiumDate - now) : '*No setting expired*'}${lastclaim > 0 ? '\nLast Claim: ' + new Date(lastclaim) : ''}
└───────────────────⬡
`.trim()
     let mentionedJid = [who]
 	await conn.sendButton(m.chat, '┌───❑〘 I N F O  U S E R 〙─────', str, pp, [[`Menu`, `.menuv3`],
[`Owner`, `.owner`]], m)
 }
}
handler.help = ['profile [@user]']
handler.tags = ['exp']
handler.command = /^profile|pp$/i
handler.limit = false
handler.register = false

export default handler 

function msToDate(ms) {
		temp = ms
		days = Math.floor(ms / (24*60*60*1000));
		daysms = ms % (24*60*60*1000);
		hours = Math.floor((daysms)/(60*60*1000));
		hoursms = ms % (60*60*1000);
		minutes = Math.floor((hoursms)/(60*1000));
		minutesms = ms % (60*1000);
		sec = Math.floor((minutesms)/(1000));
		return days+" Hari "+hours+" Jam "+ minutes + " Menit";
		// +minutes+":"+sec;
  }
  
  const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
                    'User-Agent': 'GoogleBot',
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}
