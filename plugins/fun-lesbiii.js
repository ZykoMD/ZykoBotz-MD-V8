let handler = async (m, { conn, participants, command, usedPrefix }) => {
    let member = participants.map(u => u.id)
    let orang
    if (/ku/i.test(command)) orang = m.sender
    else orang = member[Math.floor(Math.random() * member.length)]
    let jawab = `Sialan dia lesbi @${orang.replace(/@.+/, '')} 😖`.trim()
    let mentionedJid = [orang]
    await conn.sendBut(m.chat, jawab, '📮 Silahkan Klik Button dibawah ini', `Tobat Woy😭`, usedPrefix + command, m, { contextInfo: { mentionedJid } })
}
handler.help = ['Lesbi']
handler.tags = ['fun', 'kabul']
handler.command = /^lesbi$/i
handler.group = true

export default handler 
