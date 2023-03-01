import fs from 'fs'
import fetch from 'node-fetch'
import os from 'os'


let handler = async (m, { conn, args, usedPrefix, command }) => {
	let _muptime
		if (process.send) {
			process.send('uptime')
			_muptime = await new Promise(resolve => {
				process.once('message', resolve)
				setTimeout(resolve, 1000)
			}) * 1000
		}
		let muptime = runtime(process.uptime())
		let cap = `━━━ ❨ 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 ❩ ━━┄┈
		
${muptime}

${global.author}`
 await m.reply(cap)
}

handler.help = ['runtime6']
handler.command = ['runtime6']

export default handler

function runtime(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
	return [dDisplay, ' *Days ☀️*\n ', hDisplay, ' *Hours 🕐*\n ', mDisplay, ' *Minute ⏰*\n ', sDisplay, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}