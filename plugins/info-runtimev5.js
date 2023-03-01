import fs from 'fs'

function runtime(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " *Day* \n" : " *Days* \n") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " *Hour* \n" : " *Hours* \n") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " *Minute* \n" : " *Minutes* \n") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " *Second*" : " *Seconds*") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

let handler = async (m, { conn, args, command }) => {
	let muptime = runtime(process.uptime()).trim()
	let cap = `${htki} RUNTIME ${htka}

${muptime}`
 await conn.sendButton(m.chat, cap, author, [['Owner', '.owner']], fkontak)
}
handler.command = ['rt5', 'runtime5']

export default handler