let handler = async (m, { conn, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`
    conn.sendButtonImg(m.chat, nyenye, 'Nih', botdate, 'Next', `.${command}`, m) 
}
handler.help = ['hollolewd', 'sideoppai', 'animefeets', 'animebooty', 'animethighss', 'animearmpits', 'lewdanimegirls', 'biganimetiddies']
handler.tags = ['nsfw']
handler.command = /^(hollolewd|sideoppai|animefeets|animebooty|animethighss|animearmpits|lewdanimegirls|biganimetiddies)$/i
handler.premium = true
//buatan hyzer, jgn hapus atuh 😊
export default handler