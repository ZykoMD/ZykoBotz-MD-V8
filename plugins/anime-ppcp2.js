import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let anu = await fetch('https://api.akuari.my.id/randomimage/ppcouple')
let url = await anu.json()
let { hasil } = url 
let weem = '𝐑𝐚𝐧𝐝𝗼𝗺 𝐏𝐫𝗼𝐟𝐢𝐥𝐞 𝐂𝗼𝐮𝐩𝐥𝐞'
m.reply(wait)
await conn.sendButton(m.chat, '𝙱𝚘𝚢𝚜', weem, hasil.cowok, [['⇄ Next ⇄', `${usedPrefix + command}`]], m)
await conn.sendButton(m.chat, '𝙶𝚒𝚛𝚕𝚜', weem, hasil.cewek, [['⇄ Next ⇄', `${usedPrefix + command}`]], m)
}
handler.help = ['ppcp2']
handler.tags = ['internet']
handler.command = /^(ppcp2)$/i

export default handler