let handler = async (m, { conn, participants }) => {
    m.reply(` *『 𝐈𝐧𝐟𝐨 𝐑𝐚𝐧𝐤 』*
    
𖤍 Member = User Gratisan
𖤍 Premium = User Premium
𖤍 Police = Police Bot
𖤍 Owner = Owner Bot
𖤍 Owner & Premium = Owner Bot & User Premium`) 
}
handler.help = ['rank']
handler.tags = ['main']
handler.command = /^rank$/i
handler.premium = false

export default handler