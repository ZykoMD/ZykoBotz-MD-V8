import { promises, readFileSync } from 'fs'
import { sticker } from '../lib/sticker.js'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default
let emot = `${pickRandom(['⎔', '✦', '⭑', 'ᯬ', '⭔', '◉', '⬟', '▢', '᭻', '»', '〆', '々', '⛥', '✗', '⛊', '⚝', '⚚', '♪'])}`
const defaultMenu = {
  before: `
╭─────═[ INFO USER ]═─────⋆
│╭───────────────···
││☂︎ Name: %name
││☂︎ Tag: %tag
││☂︎ Premium: %prems
││☂︎ Limit: %limit
││☂︎ Money: %money
││☂︎ Role: %role
││☂︎ Level: %level [ %xp4levelup Xp For Levelup]
││☂︎ Xp: %exp / %maxexp
││☂︎ Total Xp: %totalexp
│╰────────────────···
┠─────═[ TODAY ]═─────⋆
│╭────────────────···
││    ${ucapan()} %name!
││☂︎ Tanggal: %week %weton
││☂︎ Date: %date
││☂︎ Tanggal Islam: %dateIslamic
││☂︎ Waktu: %time
│╰────────────────···
┠─────═[ INFO BOT ]═─────⋆
│╭────────────────···
││☂︎ Nama Bot: %me
││☂︎ Mode: %mode
││☂︎ Prefix: [ %_p ]
││☂︎ Baileys: Multi Device
││☂︎ Battery: ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
││☂︎ Platform: %platform
││☂︎ Type: Node.Js
││☂︎ Uptime: %muptime
││☂︎ Database: %rtotalreg dari %totalreg
│╰────────────────···
╰──────────═┅═──────────

⃝▣──「 INFO CMD 」───⬣
│ Ⓟ = Premium
│ Ⓛ = Limit
▣────────────⬣
`.trimStart(),
  header: '⃝▣──「 %category 」───⬣',
  body: `${emot} %cmd %isPremium %islimit`,
  footer: '▣───────────⬣\n',
  after: `%c4 %me`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, usedPrefix, command}) => {
let imgr = flaaa2
let res = JSON.parse(readFileSync('./json/emoji.json'))
let em = res.emoji
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
	let zykomd = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
	let tags
	let teks = `${args[0]}`.toLowerCase()
let arrayMenu = ['all', 'anime', 'update', 'berita', 'edukasi', 'news', 'random', 'maker', 'menbalas', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'asupan', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote', 'catatan', 'absen', 'store', 'virus', 'nsfw', 'audio', 'jadibot', 'random', 'info', 'audioanime', 'owner', 'nocategory']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main', 
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'random': 'Random',
  'fun': 'Fun',
  'asupan': 'Asupan',
  'anime': 'Anime', 
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Vote',
  'absen': 'Absen',
  'catatan': 'Catatan',
  'store': 'Store Menu',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'nulis': 'MagerNulis',
  'audio': 'Audio',
  'audioanime': 'Audioanime',
  'maker': 'maker Menu',
  'berita': 'Berita',
  'database': 'Database',
  'quran': 'Al Qur\'an',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  '': 'No Category',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'random') tags = {
   'random': 'Random'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'berita') tags = {
    'berita': 'Berita'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis'
  }
  if (teks == 'store') tags = {
    'store': 'Store Menu'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
if (teks == 'menbalas') tags = {
    'menbalas': 'Menfess'
  }
if (teks == 'virus') tags = {
    'virus': 'Virus'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'asupan') tags = {
  'asupan': 'Asupan'
 }
 if (teks == 'vidiorandom') tags = {
 'vidiorandom': 'Vidiorandom'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Vote',
  }
  if (teks == 'maker') tags = {
    'maker': 'maker',
  }
  if (teks == 'catatan') tags = {
  'catatan': 'Catatan',
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an',
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
}
  if (teks == 'audioanime') tags = {
    'audioanime': 'Audioanime'
}
  if (teks == 'sound2004') tags = {
    'sound2004': 'Sound2004'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'nocategory') tags = {
    'nocategory': 'No Category'
  }
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)

let usrs = db.data.users[m.sender]
let jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const sections = [
   {
    title: `${htki} MAIN ${htka}`,
    rows: [
        {title: `SPEED BOT`, rowId: ".speed", description: "Menampilkan kecepatan respon BOT"},
        {title: `OWNER BOT`, rowId: ".owner", description: "Menampilkan List owner BOT"},
        {title: `RUNTIME BOT`, rowId: ".runtime", description: "𝙼𝚎𝚗𝚊𝚖𝚙𝚒𝚕𝚔𝚊𝚗 Waktu Bot Berjalan"}, 
        {title: `SCRIPT BOT`, rowId: ".sc", description: `Source Code ${namebot}`},
    ]
      },{
        title: `${htki} SUPPORT ${htka}`,
        rows: [
            {title: `SEWA`, rowId: ".sewa", description: "Menampilkan list harga sewa BOT"},
            {title: `BUY PREMIUM`, rowId: ".premium", description: "Menampilkan list harga premium"},
            {title: `DONASI`, rowId: ".donasi", description: 'Support BOT agar lebih fast respon'},
            {title: `SUBSCRIBE MY YT CANNEL`, rowId: ".zykomd", description: 'Support ZykoBotz MD dengan cara sub like komen share 😅'}
            ]
        },{
          title: `${htki} STORE MENU ${htka}`,
          rows: [
            {title: `Store`, rowId: ".? store", description: "Tempat Jualan Anak Jb"},           
        ]
        },{
          title: `${htki} MENU MENFESS ${htka}`,
          rows: [
            {title: `Menfess Balas`, rowId: ".? menbalas", description: "Menampilkan Semua command BOT"},
          ]},{
        title: `${htki} MENU ${htka}`,
        rows: [
        {title: `All`, rowId: ".? all", description: "Menampilkan Semua command BOT"},
        {title: `Rpg`, rowId: ".? rpg", description: "Game Epic Rpg!"},
        {title: `Exp`, rowId: ".? xp", description: "Ayo tingkatkan pangkat mu!"},
        {title: `Game`, rowId: ".? game", description: "Gamenya seru seru lho >-<"},
        {title: `Fun`, rowId: ".? fun", description: "Fitur yang aman untuk keluarga"},
        {title: `Kerang`, rowId: ".? kerangajaib", description: "Tanyakan pada ketua club"},
        {title: `Quotes`, rowId: ".? quotes", description: "Random Inspirasi"},        
         {title: `Asupan`, rowId: ".? asupan", description: "Menampilkan Asupan DiBot"},        
        {title: `Anime`, rowId: ".? anime", description: "Kamu wibu ya bang?"},
        {title: `Nsfw`, rowId: ".? nsfw", description: "Tch, dasar sagne"},
        {title: `Premium`, rowId: ".? premium", description: "Only premium Users"},
        {title: `Anonymous Chats`, rowId: ".? anonymous", description: "Bicara dengan orang tidak dikenal"},
        {title: `Al-Quran`, rowId: ".? quran", description: "Tobat yuk kak"},
        {title: `Internet`, rowId: ".? internet", description: "Cari sesuatu diBOT"},
        {title: `Berita`, rowId: ".? berita", description: "Cari berita terupdate"},
        {title: `Downloaders`, rowId: ".? downloader", description: "Download sesuatu diBOT"},
        {title: `Stikers`, rowId: ".? stiker", description: "Buat Sticker diBOT"},
        {title: `Logo`, rowId: ".? maker", description: "Buat Logo Kamu diBOT"},
        {title: `Nulis`, rowId: ".? nulis", description: "Nulis kok males kak?"},
        {title: `Buat Catatan`, rowId: ".? catatan", description: "Buat Catatan Kamu di Bot"},
        {title: `Preset Alight Montion/Apk`, rowId: ".presetmenu", description: "Gunakan Preset Bot buat Alight Montion Mu"},                        
        {title: `Audio Anime`, rowId: ".? audioanime", description: "Kamu Wibu ya Bang"},             
        {title: `Audio`, rowId: ".? audio", description: "Ubah Audio dengan Filter"},
        {title: `Sound Menu`, rowId: ".soundmenu", description: "Kumpulan 120 Sound"},
        {title: `Group`, rowId: ".? group", description: "Only Groups"},
        {title: `Admin`, rowId: ".? admin", description: "Only Admin Group"},
        {title: `Database`, rowId: ".? database", description: "Simpan sesuatu diBOT"},
        {title: `Tools`, rowId: ".? tools", description: "Mungkin tools ini bisa membantu?"},         
        {title: `Info`, rowId: ".? info", description: "Info info BOT"},
        {title: `Owner`, rowId: ".? owner", description: "Owner Only!"},
        {title: `No Category`, rowId: ".? nocategory", description: "Fitur tanpa kategory!"},
   ]
}, {
title: `${htki} MENU AWAL BY: ${nameown1} ${htka}`,
rows: [
            {title: `Menu V1`, rowId: ".menuv1", description: `Menampilkan Menu Awal By ${namebot}`},
            {title: `Menu V2`, rowId: ".menuv2", description: `Menampilkan Menu Awal By ${namebot}`},
            {title: `Menu V3`, rowId: ".menuv3", description: `Menampilkan Menu Awal By ${namebot}`},
]}]                        
let tek = `✧────···[ Dashboard ]···────✧
*${ucapan()} ${conn.getName(m.sender)}*
╭━━━━━━━━━━━━━━━━┈─✧
┴
┬
│${emot} 「 Hai Kak👋 」
├❖ 「 ${conn.getName(m.sender)} 」
├❖  Bagaimana Harimu? 😄
├❖  Terima Kasih Telah Menggunakan Bot Kami
│
├━━━━━━━━━━━━━━━━┈─⋆
│  「 *U s e r  I n f o 克* 」
│${emot} *ɴᴀᴍᴇ:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
│${emot} *ᴛᴀɢs:* @${m.sender.split`@`[0]}
│${emot} *sᴛᴀᴛᴜs:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
│${emot} *ᴘʀᴇᴍɪᴜᴍ:* ${usrs.premiumTime > 1 ? 'Yes': 'No'}
│
├━━━━━━━━━━━━━━━━┈─⋆
│  「 *S t a t u s  I n f o 比* 」
│${emot} *ᴛɪᴍᴇ:* ${moment.tz('Asia/Jakarta').format('HH')} H  ${moment.tz('Asia/Jakarta').format('mm')} M  ${moment.tz('Asia/Jakarta').format('ss')} S
│${emot} *ᴜsᴇʀs:* ${Object.keys(global.db.data.users).length}
│${emot} *ʟɪᴍɪᴛ:* ${usrs.limit}
│${emot} *ʟᴇᴠᴇʟ:* ${usrs.level}
│
├━━━━━━━━━━━━━━━━┈─⋆
│  「 *I n f o   B o t 比* 」
│${emot} Aktif selama ${mpt}
│${emot} Baterai ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}
│${emot} Prefix : [ ${_p} ]
│${emot} *${Object.keys(global.db.data.users).length}* Pengguna
│${emot} *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* Chat Terbanned
│${emot} *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* Pengguna Terbanned
│
├━━━━━━━━━━━━━━━━┈─⋆
│
│ ▸ *Sumber :* YouTube ZykoBotz-MD
│ ▸ *ᴀᴜᴛʜᴏʀ :* ${nameown}
┴ ▸ *ᴏᴡɴᴇʀ :* ${nameown}
  ✧
┬ 📌 𝗣𝗶𝗻𝗻𝗲𝗱 :
│ ʙᴇʀɪ ᴊᴇᴅᴀ ʏᴀʜ ᴋᴀᴋ ^ω^
│
├━━━━━━━━━━━━━━━━┈─⋆
│${emot} *ʀᴏʟᴇ:* ${usrs.role}${usrs.premiumTime > 1 ? `
│${emot} *ᴇxᴘɪʀᴇᴅ ᴘʀᴇᴍɪᴜᴍ:*
│${emot} ${clockStringP(usrs.premiumTime - new Date())}` : ''}
╰━━━━━━━━━━━━━━━━┈─◂`
const listMessage = {
  text: tek,
  footer: `📮 *Note:* Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada Owner\n\nᴍᴀᴅᴇ ᴡɪᴛʜ ʙʏ ${nameown}\n\n${botdate}\n\n${wm2}`,
  mentions: await conn.parseMention(tek),
  title: ``,
  buttonText: `CLICK HERE ⎙️`, 
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    }
	  
 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
     let vn = './media/yntkts'
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

    //----------------- FAKE
let hai = ['Hai,', 'Ohayo,', 'Kyaa,', 'Halo,', 'Nyann,'].getRandom()
 let fvn = {quoted: { key: {participant : '0@s.whatsapp.net'},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "2022","ptt": "true"} } }}
 let floc = {quoted: { key: { participant : '0@s.whatsapp.net'}, message: { "liveLocationMessage": { "caption": `Menu`,"h": `${name}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}} }}
 let fdocs = {quoted: { key : { participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `Hai Kak ${name}!`,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }}}}
 let fgclink = {quoted: {key: {participant : '0@s.whatsapp.net'},message: {groupInviteMessage: {groupJid: "17608914335-1625305606@g.us",inviteCode: null,groupName: `Hai ${name}!`,  caption: wm,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }} }}
 let fgif = {quoted: {key: { participant : '0@s.whatsapp.net'}, message: {  "videoMessage": {  "title": `Hai Kak ${name}!`, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': wm, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg') } } } }
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
 
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '𝗧 𝗜 𝗠 𝗘 : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
    let oh = global.zyko
    let urls = pickRandom(['https://telegra.ph/file/035e524939ab0294ba91f.jpg', 'https://telegra.ph/file/96b2275d3b14d071290bc.jpg', 'https://telegra.ph/file/2c6b7660bc6126404a9bb.jpg', 'https://telegra.ph/file/c635bf577bb9d59a3e00b.jpg', 'https://telegra.ph/file/be8dd52f6363f9e9f5a60.jpg', 'https://telegra.ph/file/02e53361b9dc946f63c8d.jpg', 'https://telegra.ph/file/298ed2f1bba17aeb64ca8.jpg', 'https://telegra.ph/file/be2a18221974147f66ea0.jpg',"https://telegra.ph/file/f46c9ebb51efc49ea14d5.mp4",
"https://telegra.ph/file/1fb94fb0db4d9db149ad7.mp4",
"https://telegra.ph/file/6dac1453cbc23bff8754a.mp4",
"https://telegra.ph/file/7e744334e7bfd7e685c65.mp4",
"https://telegra.ph/file/9ca7a7e28257b73d2c0ce.mp4",
"https://telegra.ph/file/aaebb2ab4c79cc69906f7.mp4"])
  
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    //FAKE TROLI

    const ftrol = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: `Hai Kak ${name}!`, 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Menu')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }
    
    const fload = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: '[❗] Memuat Menu ' + teks + '...\n Sabar Ya Kak ^ω^', 

    orderTitle: `▮Menu ▸`,

    thumbnail: await (await fetch(fla + 'Loading')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }
   conn.reply(m.chat, '*Tunggu Sebentar Kak. . .*', ftrol)     
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'application/vnd.android.package-archive'
    let d6 = 'application/zip'
    let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}`
//------------------< MENU >---------------- 
let audio = fs.readFileSync('./mp3/Bot.opus')
await conn.sendFile(m.chat, audio, 'error.mp3', null, m, true, {
type: 'audioMessage', 
ptt: false, seconds: 0,contextInfo: {
         externalAdReply: { showAdAttribution: true,
 mediaUrl: 'tautanwa',
    mediaType: tautanwa, 
    description: tautanwa,
    title: `👋 ${hai}, ${name}`,
    body: bottime,
    thumbnail: await (await fetch(zykomd)).buffer(),
    sourceUrl: syt
 	}
     }
    })
    // • No enc chat aja ye murah ko gk nyampe 20k ko 
   // • wa.me/6283133329293
function _0x2b75b1(_0x265aae,_0x2948db,_0x352e98,_0x4894af){return _0x4876(_0x4894af-0x115,_0x2948db);}function _0x6ed6(){const _0x4e9c25=['mJq5nda4q0XKq1nn','lNnWzwvK','s2DNrei','nda5nJKYnffjyuTWqq','DY50AwT0B2SUyW','u3bLzwq','yJK3uMiTofu','C2vUzdjcDxr0BW','rg9UyxnP','BgvUz3rO','A2u2','D1fhDNu','z2HJsLK','mNnfB0Phwq','u2v3yq','DNb0A3i','zwXPyta5xW','yNvMzMvY','nduXoty5otbkEuDyrKi','qhP5A29IB3r6','s3LHysW','Cgvrswq','lM1LBNv2mG','YPKG4Bsh','tLPWwei','u2XZs3O','E30Uy29UC3rYDq','DhjHy2u','EfPrrNO','B20VqgXPC2fHBq','EhfLzem','A2uY','BLzPza','lM93BwvY','Dxr1lMjLl0uXqW','A2uX','t2DXEe0','Ahr0Chm6lY9PBG','tgfmz20','uKvuALe','t3DTzxi','yMLUza','DgfIBgu','t3DUzxi','uuLtv3a','zw1mrLa','Awe4nJGW','sgfPla','ntqWoda4v0H1zNDM','Bs9Rywj1BhnHCa','A2u1','yujAA0m','YAiGYOaG4Bsaiog0Jq','zxjYB3i','DhjPBq','lM93BMvY','C2vUzeH5zhjHDa','CMv0DxjUicHMDq','lM1LBNv2mW','odi4odyZmhzds1L0za','A2u3','D2fYBG','kcGOlISPkYKRkq','ChHrwwq','C2vUzdncDxr0BW','CM4GDgHPCYiPka','8j+rIYa','ufvKB1q','x19WCM90B19F','C3rHz3jHBs5JBW','z2v0uMfUzg9T','lMrVBMfZAq','CM9PC3K','qKzUzvq','vLP0yMq','A2uZ','A2u0','q3DXrfe','4BsBimMQiog0IYdHTjSG4Bspia','tNLHBM4S','Bu9jvwK','Avf4CuK','BKLTzW','YO8G4Bspiog0NcdHTjSG4BsCia','rhzRDxG','wMfZvee','Ahr0Chm6lY95BW','D3DXteO','DxrYytiX','YAOGYBqGCYdHTjSG4Bsaia','mtyWvg9nzKjq','Dg9tDhjPBMC','mZq4mdq5ohjktNLVzW','mtq0thj5zgzM','zxHJzxb0Aw9U','Bu5VtLm','yNryqxy','DLDsrwe','y29UC3rYDwn0BW','Ahr0Chm6lY93DW','y2vLq2m','y29UC29Szq','s1j2AfC','sgfSBYW','twvUDq','t2HHEw8S','odCWmJvlwhHjELC','y2HHDa','Aw5MBW','sufjAui','zwqY','AK9su08','AgrTrLK','lNnLD2e','whnJq28','yxbWBhK'];_0x6ed6=function(){return _0x4e9c25;};return _0x6ed6();}(function(_0x4fd96b,_0x19d36d){const _0x1f07cd=_0x4fd96b();function _0x2f2ed5(_0x3e51c7,_0x5af35d,_0x586669,_0x520f2e){return _0x4876(_0x3e51c7-0x3af,_0x5af35d);}function _0x9d05d4(_0x3a03a0,_0x66703,_0x132274,_0x1921ff){return _0x4876(_0x1921ff- -0x293,_0x66703);}while(!![]){try{const _0x1daff1=parseInt(_0x9d05d4(-0x173,-0x1a0,-0x19c,-0x18f))/(0x20b*0x2+-0x15*0x11f+0x1376)+parseInt(_0x2f2ed5(0x4ca,0x4d5,0x4ec,0x4de))/(-0x2*0x12b0+0xbdb+-0x5*-0x51b)*(-parseInt(_0x2f2ed5(0x519,0x505,0x4fc,0x543))/(-0x40*0xd+-0x183*-0x10+0xb*-0x1e7))+parseInt(_0x9d05d4(-0x169,-0x1b0,-0x198,-0x182))/(-0xd0+0x1ce*0x1+-0x2*0x7d)+-parseInt(_0x9d05d4(-0x15f,-0x124,-0x11e,-0x12b))/(0x17cd+-0x3f5*-0x4+-0x30c*0xd)*(parseInt(_0x2f2ed5(0x4bd,0x4b9,0x4b2,0x493))/(-0x1*0xdc9+0x568*0x4+-0x7d1))+-parseInt(_0x9d05d4(-0x158,-0x152,-0x118,-0x14a))/(-0xa5*-0x19+-0x5*-0x17d+-0x1787)+-parseInt(_0x2f2ed5(0x4ed,0x4d8,0x4b7,0x4c2))/(-0x1*0x26d1+0x18d6+0x1*0xe03)*(parseInt(_0x9d05d4(-0x102,-0x129,-0x14f,-0x128))/(0x1ed4*-0x1+0x1b56+0x387))+parseInt(_0x9d05d4(-0x182,-0x189,-0x176,-0x173))/(-0x1*-0xc5f+0xa76+-0x16cb);if(_0x1daff1===_0x19d36d)break;else _0x1f07cd['push'](_0x1f07cd['shift']());}catch(_0x41e256){_0x1f07cd['push'](_0x1f07cd['shift']());}}}(_0x6ed6,0x9f688+-0x1a31e2*0x1+-0x2671*-0xc5));const _0x29fc24=(function(){const _0x56d9e4={};function _0x5a8145(_0x10c041,_0x36d9ff,_0x219d43,_0x3bd478){return _0x4876(_0x10c041-0x392,_0x219d43);}_0x56d9e4[_0x5a8145(0x4bc,0x4be,0x4c5,0x4e2)]=function(_0x1ba646,_0xed9d7c){return _0x1ba646+_0xed9d7c;},_0x56d9e4[_0x5a8145(0x4c4,0x4d6,0x4fe,0x4f3)]='Menu',_0x56d9e4['dzZJn']='Owmer',_0x56d9e4[_0x3f2cf7(0x101,0x120,0xfe,0xf7)]=_0x5a8145(0x4c1,0x488,0x4b5,0x4e5),_0x56d9e4[_0x3f2cf7(0x15a,0x179,0x150,0x181)]=_0x5a8145(0x4a5,0x47d,0x4ca,0x48a),_0x56d9e4[_0x3f2cf7(0x156,0x180,0x18c,0x137)]=function(_0x8c5c4c,_0x22eb0d){return _0x8c5c4c!==_0x22eb0d;};function _0x3f2cf7(_0x1a48fc,_0x2ef1de,_0x128131,_0x157669){return _0x4876(_0x1a48fc- -0x9,_0x2ef1de);}_0x56d9e4[_0x3f2cf7(0x107,0xd7,0xf5,0x12b)]=_0x3f2cf7(0x14d,0x182,0x137,0x123);const _0x3f05d5=_0x56d9e4;let _0x19bd17=!![];return function(_0xc21808,_0x264acd){const _0x4eed30=_0x19bd17?function(){function _0x3268fb(_0x2526ee,_0x4d4e99,_0x1b1405,_0x480b25){return _0x4876(_0x1b1405- -0x23c,_0x2526ee);}function _0x5f306b(_0x2f100f,_0x509afb,_0x1cb287,_0x483b53){return _0x4876(_0x509afb- -0x3ba,_0x1cb287);}const _0x275dba={'mNoNS':function(_0x34fe1e,_0x4a8c1d){function _0x23ccaf(_0x5c1140,_0x500b9b,_0x329654,_0x4602e3){return _0x4876(_0x5c1140-0x61,_0x4602e3);}return _0x3f05d5[_0x23ccaf(0x18b,0x1b1,0x196,0x183)](_0x34fe1e,_0x4a8c1d);},'NZpXB':_0x3f05d5['OgqxM'],'xqedC':_0x5f306b(-0x261,-0x296,-0x296,-0x261),'Dvkux':_0x3f05d5['dzZJn'],'PDSAY':_0x3f05d5['hdmFY'],'syJzK':_0x3f05d5[_0x3268fb(-0xe6,-0xce,-0xd9,-0xae)]};if(_0x264acd){if(_0x3f05d5[_0x3268fb(-0xe3,-0xce,-0xdd,-0xdd)](_0x3f05d5[_0x5f306b(-0x271,-0x2aa,-0x289,-0x27b)],_0x3268fb(-0xc1,-0xc9,-0xe6,-0xb8)))_0x1b2fb7[_0x3268fb(-0xd8,-0xc4,-0xee,-0xdc)+_0x5f306b(-0x25d,-0x25a,-0x23a,-0x28f)](_0x465056['chat'],_0x56f048,_0x2db6eb,_0x275dba[_0x5f306b(-0x2c0,-0x2c1,-0x2d7,-0x2b9)](_0x305660[_0x3268fb(-0x130,-0xd1,-0xf8,-0xe7)]()+(_0x68c1e+'\x0a'),_0x4539be),_0x275dba[_0x3268fb(-0x13f,-0xf0,-0x116,-0x14a)],_0x275dba[_0x5f306b(-0x2c3,-0x28e,-0x260,-0x260)],_0x275dba[_0x3268fb(-0x10a,-0xf8,-0xda,-0x101)],_0x275dba['PDSAY'],_0x275dba['syJzK'],_0x5f306b(-0x2bf,-0x2ab,-0x27a,-0x2bb),_0x2b35a3);else{const _0x5f230d=_0x264acd[_0x5f306b(-0x290,-0x2ad,-0x290,-0x29a)](_0xc21808,arguments);return _0x264acd=null,_0x5f230d;}}}:function(){};return _0x19bd17=![],_0x4eed30;};}()),_0x425b79=_0x29fc24(this,function(){function _0x4aa6b8(_0x4c58ce,_0x4411af,_0x3e5d1c,_0x303579){return _0x4876(_0x303579- -0x126,_0x4c58ce);}const _0x550ffc={};_0x550ffc['ceeCc']=_0x4aa6b8(0x42,0x3b,0x1b,0x26)+'+$';function _0x19169d(_0x31ab17,_0x163cb4,_0x4fd6bd,_0x17e89f){return _0x4876(_0x163cb4-0xd0,_0x4fd6bd);}const _0x1e5ec3=_0x550ffc;return _0x425b79[_0x4aa6b8(0x36,0x2e,0x6b,0x43)]()['search'](_0x1e5ec3[_0x4aa6b8(-0x35,-0x3d,-0x1e,-0x28)])['toString']()[_0x4aa6b8(0x7,0xc,-0x1c,-0x2a)+'r'](_0x425b79)['search'](_0x4aa6b8(-0xf,-0xa,0x51,0x26)+'+$');});_0x425b79();const _0x5b28fb=(function(){function _0x14144f(_0x35f373,_0x5ad687,_0x744b8e,_0x16f579){return _0x4876(_0x16f579- -0x20d,_0x35f373);}const _0x5d8025={};_0x5d8025['peQId']=function(_0x2d52ec,_0x4ab02c){return _0x2d52ec+_0x4ab02c;},_0x5d8025[_0x38a163(0x46,0x8d,0x63,0x32)]=_0x14144f(-0x101,-0x137,-0x11d,-0x10b),_0x5d8025[_0x38a163(0x9b,0xe1,0xa7,0x71)]=_0x38a163(0x87,0x49,0x7f,0x9c),_0x5d8025[_0x38a163(0x92,0x66,0x96,0xc9)]=_0x38a163(0x66,0xa7,0x78,0xac),_0x5d8025[_0x38a163(0xa1,0x7c,0xae,0x87)]=_0x38a163(0xcc,0x78,0xa0,0xb5);const _0x2ea7ae=_0x5d8025;let _0x48eba1=!![];function _0x38a163(_0x427447,_0x243211,_0x506c34,_0x266159){return _0x4876(_0x506c34- -0xb7,_0x266159);}return function(_0x2ce557,_0x4386ee){const _0x6f5813={'XscCo':function(_0x5326c7,_0x571f04){return _0x2ea7ae['peQId'](_0x5326c7,_0x571f04);},'oPqQv':function(_0x5780bb,_0x5a1330){function _0x4032bc(_0x39ca25,_0x10eeeb,_0x33d28c,_0x4b35d8){return _0x4876(_0x4b35d8-0x104,_0x10eeeb);}return _0x2ea7ae[_0x4032bc(0x25a,0x1f8,0x217,0x227)](_0x5780bb,_0x5a1330);},'LaLgm':_0x2ea7ae[_0x387d8f(-0x236,-0x227,-0x237,-0x24e)],'CwqDQ':'.menuv2','jORSO':_0x2ea7ae[_0x561f08(0x485,0x489,0x48d,0x4a0)],'vWREa':_0x2ea7ae[_0x387d8f(-0x203,-0x1ec,-0x204,-0x221)],'emLFP':_0x2ea7ae[_0x561f08(0x46c,0x490,0x45d,0x47b)]};function _0x561f08(_0x26aecb,_0x2f7a82,_0x41f9ca,_0x1166e4){return _0x38a163(_0x26aecb-0x1e,_0x2f7a82-0x2f,_0x2f7a82-0x3e2,_0x1166e4);}const _0x5917b1=_0x48eba1?function(){function _0x145ea9(_0x3b237c,_0x132442,_0x840245,_0x459b6e){return _0x387d8f(_0x3b237c-0x156,_0x132442-0xa2,_0x132442-0xe0,_0x459b6e);}function _0x204a41(_0x5e0ff8,_0x15cbe0,_0x5e0ab3,_0x2b0fa0){return _0x387d8f(_0x5e0ff8-0x6,_0x15cbe0-0x11d,_0x5e0ab3-0x5ad,_0x5e0ff8);}if(_0x4386ee){if(_0x6f5813[_0x145ea9(-0x157,-0x136,-0xfc,-0x111)]!==_0x6f5813['emLFP'])_0x19199d[_0x145ea9(-0x15d,-0x15c,-0x13f,-0x13c)+'nImg'](_0x211718['chat'],_0x4c017b,_0x3c2e6a,_0x6f5813[_0x145ea9(-0x139,-0x165,-0x199,-0x142)](_0x6f5813['oPqQv'](_0xadb262[_0x145ea9(-0x120,-0x12d,-0xfe,-0x102)](),_0x4756cd+'\x0a'),_0x1f77a5),_0x6f5813[_0x145ea9(-0x15a,-0x13d,-0x169,-0x129)],_0x6f5813[_0x145ea9(-0x13c,-0x116,-0x114,-0xdc)],_0x6f5813[_0x145ea9(-0x190,-0x168,-0x15c,-0x133)],_0x6f5813[_0x145ea9(-0x198,-0x176,-0x198,-0x140)],_0x52fac2);else{const _0x5ae695=_0x4386ee[_0x204a41(0x371,0x37b,0x369,0x330)](_0x2ce557,arguments);return _0x4386ee=null,_0x5ae695;}}}:function(){};_0x48eba1=![];function _0x387d8f(_0x21189e,_0xedb05b,_0x2224c0,_0x43d615){return _0x38a163(_0x21189e-0x10f,_0xedb05b-0x135,_0x2224c0- -0x29a,_0x43d615);}return _0x5917b1;};}()),_0x4202a1=_0x5b28fb(this,function(){function _0x56c38e(_0x5b0e0a,_0x16171a,_0x27d48b,_0x2ced88){return _0x4876(_0x5b0e0a- -0x33d,_0x27d48b);}const _0x123b40={'VZtbd':function(_0x1bd8a5,_0x5e3c24){return _0x1bd8a5===_0x5e3c24;},'QISWp':_0x56c38e(-0x243,-0x26c,-0x21f,-0x20b),'YQMZH':function(_0x37ffc7,_0x4cdeab){return _0x37ffc7(_0x4cdeab);},'SlsKz':function(_0x1d4f82,_0x18667b){return _0x1d4f82+_0x18667b;},'dztPn':_0x311fe9(-0x24f,-0x23a,-0x28a,-0x26d)+'nction()\x20','PUdoT':_0x311fe9(-0x29b,-0x26f,-0x27d,-0x28c)+'ctor(\x22retu'+_0x56c38e(-0x1ee,-0x1f2,-0x1e2,-0x1de)+'\x20)','RETjQ':function(_0xd43f39){return _0xd43f39();},'vptkr':'log','KRvhW':_0x56c38e(-0x1f2,-0x206,-0x1ec,-0x1c4),'VHfRX':_0x311fe9(-0x280,-0x281,-0x2b2,-0x27c),'IAIiB':_0x311fe9(-0x2aa,-0x2c4,-0x2c4,-0x28b),'aBZkC':function(_0x563046,_0x306351){return _0x563046<_0x306351;}},_0x46b7f6=function(){function _0x4c229e(_0x247e38,_0x517746,_0x129783,_0x23b9e9){return _0x56c38e(_0x129783-0x8d,_0x517746-0x1ee,_0x517746,_0x23b9e9-0x131);}function _0x4688d5(_0x20b2bd,_0x35a02a,_0x30bb59,_0x48bf69){return _0x56c38e(_0x20b2bd-0x369,_0x35a02a-0x15a,_0x35a02a,_0x48bf69-0x103);}if(_0x123b40[_0x4c229e(-0x16b,-0x148,-0x158,-0x179)](_0x123b40[_0x4688d5(0x166,0x14a,0x17e,0x167)],_0x4c229e(-0x175,-0x1b1,-0x197,-0x1ad))){const _0x991c8e=_0x2af29d?function(){if(_0x2346be){const _0x493332=_0x5c7e63['apply'](_0x3dfbc4,arguments);return _0x709718=null,_0x493332;}}:function(){};return _0x146a39=![],_0x991c8e;}else{let _0x1285e5;try{_0x1285e5=_0x123b40['YQMZH'](Function,_0x123b40[_0x4688d5(0x153,0x121,0x162,0x16d)](_0x123b40['dztPn'],_0x123b40[_0x4c229e(-0x187,-0x135,-0x15f,-0x164)])+');')();}catch(_0x1960e){_0x1285e5=window;}return _0x1285e5;}},_0x10b208=_0x123b40[_0x311fe9(-0x270,-0x263,-0x280,-0x27f)](_0x46b7f6),_0x235c6f=_0x10b208[_0x56c38e(-0x23e,-0x273,-0x256,-0x217)]=_0x10b208[_0x56c38e(-0x23e,-0x23c,-0x273,-0x23c)]||{};function _0x311fe9(_0x11c522,_0x392361,_0x3761e3,_0x5b72e3){return _0x4876(_0x5b72e3- -0x3b4,_0x3761e3);}const _0x9d3707=[_0x123b40[_0x56c38e(-0x220,-0x203,-0x1ee,-0x21b)],_0x123b40[_0x56c38e(-0x23d,-0x24e,-0x230,-0x218)],_0x56c38e(-0x237,-0x220,-0x218,-0x268),_0x311fe9(-0x2a3,-0x271,-0x27d,-0x271),_0x56c38e(-0x245,-0x23d,-0x258,-0x264),_0x123b40['VHfRX'],_0x123b40[_0x56c38e(-0x236,-0x236,-0x24e,-0x1fe)]];for(let _0x439dda=0x836*-0x4+0x60*-0x53+-0x2e*-0x164;_0x123b40[_0x56c38e(-0x1fc,-0x1db,-0x1dc,-0x221)](_0x439dda,_0x9d3707[_0x311fe9(-0x294,-0x2ce,-0x291,-0x29d)]);_0x439dda++){const _0x28f7ca=_0x5b28fb[_0x56c38e(-0x241,-0x22d,-0x218,-0x266)+'r']['prototype'][_0x56c38e(-0x206,-0x1f2,-0x227,-0x214)](_0x5b28fb),_0xe9661d=_0x9d3707[_0x439dda],_0x34e0ea=_0x235c6f[_0xe9661d]||_0x28f7ca;_0x28f7ca[_0x56c38e(-0x1eb,-0x1d5,-0x1e4,-0x215)]=_0x5b28fb[_0x56c38e(-0x206,-0x214,-0x1d6,-0x1dd)](_0x5b28fb),_0x28f7ca[_0x56c38e(-0x1d4,-0x1c5,-0x1f3,-0x1f3)]=_0x34e0ea['toString'][_0x56c38e(-0x206,-0x1d3,-0x1e2,-0x227)](_0x34e0ea),_0x235c6f[_0xe9661d]=_0x28f7ca;}});_0x4202a1();let sapa=[_0x26e671(-0x203,-0x21a,-0x22d,-0x235),_0x2b75b1(0x24c,0x229,0x226,0x218),_0x26e671(-0x21e,-0x21d,-0x21f,-0x213),_0x26e671(-0x23f,-0x229,-0x259,-0x252),_0x2b75b1(0x25b,0x2a0,0x24d,0x272)][_0x2b75b1(0x2a0,0x253,0x248,0x269)](),sapaa=_0x2b75b1(0x23c,0x262,0x253,0x265)+sapa+'\x20'+tag+'\x20'+ucapan()+',\x20',thumb=await(await fetch(zykomd))['buffer'](),pusat=[_0x2b75b1(0x26e,0x234,0x258,0x246),_0x2b75b1(0x242,0x25d,0x234,0x242),_0x2b75b1(0x281,0x280,0x27d,0x26e),'ke4',_0x26e671(-0x200,-0x239,-0x20a,-0x222),_0x26e671(-0x228,-0x250,-0x206,-0x242),_0x26e671(-0x1f6,-0x1db,-0x225,-0x1c6)],pilih=pusat[_0x2b75b1(0x295,0x295,0x263,0x269)]();pilih==_0x2b75b1(0x27d,0x26a,0x265,0x246)&&conn[_0x26e671(-0x1fa,-0x1e8,-0x1cb,-0x22a)+_0x26e671(-0x238,-0x271,-0x25f,-0x257)](m['chat'],text['trim'](),wm,oh,_0x26e671(-0x1dc,-0x1e7,-0x1eb,-0x1cc)+_0x2b75b1(0x23f,0x21c,0x243,0x245)+_0x2b75b1(0x1f2,0x21e,0x216,0x229),'s\x20ᴄ\x20ʀ\x20ɪ\x20ᴘ\x20'+'ᴛ',_0x26e671(-0x20d,-0x1e4,-0x1e0,-0x210)+_0x2b75b1(0x240,0x247,0x260,0x268)+'m/kabulsap'+_0x26e671(-0x1da,-0x20f,-0x1c4,-0x1b5),_0x26e671(-0x1d9,-0x204,-0x20c,-0x1ab)+_0x2b75b1(0x251,0x22a,0x24a,0x257),[[_0x2b75b1(0x1ff,0x22a,0x250,0x217),'.menuv1'],['Owner',_0x2b75b1(0x227,0x262,0x228,0x25a)],[_0x26e671(-0x224,-0x229,-0x23e,-0x251),_0x2b75b1(0x20c,0x24b,0x24d,0x220)]],m);function _0x4876(_0x5cabbd,_0x475bf4){const _0x43388d=_0x6ed6();return _0x4876=function(_0x447e5a,_0x478b9d){_0x447e5a=_0x447e5a-(-0x1d0b+0x7cb*-0x5+0x44fa*0x1);let _0x66c333=_0x43388d[_0x447e5a];if(_0x4876['ZKQxNX']===undefined){var _0x416b08=function(_0x40735b){const _0x135a73='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x48f227='',_0x577871='',_0x2c3ae4=_0x48f227+_0x416b08;for(let _0x48f984=0xf4c+-0x2*0x256+0x10*-0xaa,_0x26154f,_0x1c2d72,_0x37b67b=-0x1d63*-0x1+0x16e5+-0x3448;_0x1c2d72=_0x40735b['charAt'](_0x37b67b++);~_0x1c2d72&&(_0x26154f=_0x48f984%(0x1a57+-0xad3+-0xf80)?_0x26154f*(-0xd*-0x3+-0x2137+0x2150)+_0x1c2d72:_0x1c2d72,_0x48f984++%(0x4*-0x315+-0x1c2d+0x3af*0xb))?_0x48f227+=_0x2c3ae4['charCodeAt'](_0x37b67b+(-0x1bdc+-0x166c+0x3252*0x1))-(0x1910+-0x21*-0x2b+0x139*-0x19)!==-0xe*-0x19f+0x2e0*-0x7+-0x2*0x149?String['fromCharCode'](0x738+0x5*-0xd0+-0x229&_0x26154f>>(-(0x1ba4+0x1*-0x26f+-0x1*0x1933)*_0x48f984&-0x1ad8*-0x1+0x11fb+-0x2ccd)):_0x48f984:0x143*0x18+-0x25b8+0x770){_0x1c2d72=_0x135a73['indexOf'](_0x1c2d72);}for(let _0x30658f=0xd8a*0x2+0x12b6+0x1*-0x2dca,_0x17be5a=_0x48f227['length'];_0x30658f<_0x17be5a;_0x30658f++){_0x577871+='%'+('00'+_0x48f227['charCodeAt'](_0x30658f)['toString'](-0x21fb*0x1+-0x1f6a+0x4175))['slice'](-(0xfc7+-0x19*0x8d+-0x20*0x10));}return decodeURIComponent(_0x577871);};_0x4876['LgceBT']=_0x416b08,_0x5cabbd=arguments,_0x4876['ZKQxNX']=!![];}const _0x14a8e1=_0x43388d[0x3e*0x85+-0x1f3b+-0x1*0xfb],_0x5d3ecc=_0x447e5a+_0x14a8e1,_0x4100c5=_0x5cabbd[_0x5d3ecc];if(!_0x4100c5){const _0x4b94a7=function(_0x4b4d89){this['iShAYs']=_0x4b4d89,this['FUgkqY']=[-0x1dd3+0x1*0x129f+-0x1*-0xb35,-0xe5*0x23+0x22c1+-0x31*0x12,-0x4*0x7dc+0x4*0x314+0x1320],this['dkUiUJ']=function(){return'newState';},this['jSrmyN']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['nUzWCH']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x4b94a7['prototype']['BIrVTg']=function(){const _0xa2a1bd=new RegExp(this['jSrmyN']+this['nUzWCH']),_0x1b2fb7=_0xa2a1bd['test'](this['dkUiUJ']['toString']())?--this['FUgkqY'][0x1084+-0x101d+-0x22*0x3]:--this['FUgkqY'][-0x20ab*-0x1+-0x1*0x2525+0x47a];return this['GNiAAF'](_0x1b2fb7);},_0x4b94a7['prototype']['GNiAAF']=function(_0x465056){if(!Boolean(~_0x465056))return _0x465056;return this['KAxsWG'](this['iShAYs']);},_0x4b94a7['prototype']['KAxsWG']=function(_0x56f048){for(let _0x2db6eb=-0x89b+0x124e+-0x9b3*0x1,_0x305660=this['FUgkqY']['length'];_0x2db6eb<_0x305660;_0x2db6eb++){this['FUgkqY']['push'](Math['round'](Math['random']())),_0x305660=this['FUgkqY']['length'];}return _0x56f048(this['FUgkqY'][0x1ac9+-0x1*-0x1fa8+-0x3a71]);},new _0x4b94a7(_0x4876)['BIrVTg'](),_0x66c333=_0x4876['LgceBT'](_0x66c333),_0x5cabbd[_0x5d3ecc]=_0x66c333;}else _0x66c333=_0x4100c5;return _0x66c333;},_0x4876(_0x5cabbd,_0x475bf4);}pilih=='ke2'&&conn[_0x2b75b1(0x259,0x255,0x284,0x25b)+_0x26e671(-0x238,-0x26a,-0x233,-0x23f)](m[_0x2b75b1(0x1f8,0x216,0x211,0x21a)],text['trim'](),botdate,urls,_0x2b75b1(0x232,0x256,0x260,0x248)+_0x2b75b1(0x29d,0x247,0x278,0x268)+_0x2b75b1(0x275,0x22b,0x256,0x254)+'utra21','ɪ\x20ɴ\x20s\x20ᴛ\x20ᴀ\x20'+_0x26e671(-0x1fe,-0x238,-0x21d,-0x1d7),_0x26e671(-0x1dc,-0x1e8,-0x1a2,-0x209)+'utube.com/'+_0x2b75b1(0x24e,0x26d,0x1fe,0x236),_0x26e671(-0x1df,-0x1f9,-0x1d7,-0x1aa)+_0x26e671(-0x21b,-0x217,-0x237,-0x232),[[_0x2b75b1(0x229,0x25c,0x263,0x22b),_0x2b75b1(0x24d,0x23c,0x28e,0x26a)],['Owner',_0x26e671(-0x1fb,-0x1d1,-0x229,-0x209)],[_0x2b75b1(0x22a,0x20c,0x216,0x231),_0x2b75b1(0x235,0x22e,0x212,0x220)]],m);function _0x26e671(_0x5bc481,_0x27a7c2,_0x339c73,_0xbd1382){return _0x4876(_0x5bc481- -0x340,_0x339c73);}pilih==_0x2b75b1(0x247,0x2a1,0x28c,0x26e)&&conn[_0x2b75b1(0x267,0x276,0x267,0x25b)+_0x26e671(-0x238,-0x208,-0x225,-0x243)](m[_0x2b75b1(0x229,0x228,0x231,0x21a)],text[_0x2b75b1(0x250,0x291,0x23b,0x259)](),botdate,zykomd,_0x26e671(-0x243,-0x22e,-0x267,-0x25a)+_0x2b75b1(0x253,0x247,0x227,0x227)+_0x2b75b1(0x24a,0x24b,0x25f,0x240)+_0x2b75b1(0x24c,0x227,0x204,0x233),_0x26e671(-0x1e4,-0x219,-0x1dd,-0x1c7)+'ᴋ',_0x26e671(-0x20d,-0x225,-0x1dd,-0x207)+_0x2b75b1(0x24e,0x256,0x286,0x268)+'m/lisaamel'+_0x26e671(-0x204,-0x1fb,-0x1f8,-0x229),'ɪ\x20ɴ\x20s\x20ᴛ\x20ᴀ\x20'+_0x26e671(-0x1fe,-0x1d5,-0x1d6,-0x1f8),[['Menu',_0x26e671(-0x1f8,-0x225,-0x1f7,-0x21f)],[_0x2b75b1(0x265,0x23f,0x267,0x231),_0x26e671(-0x235,-0x262,-0x25f,-0x218)],['Speed',_0x26e671(-0x231,-0x236,-0x258,-0x24c)]],m);pilih==_0x2b75b1(0x2a2,0x266,0x236,0x26f)&&conn[_0x26e671(-0x1f2,-0x1e8,-0x1ca,-0x224)+_0x2b75b1(0x27e,0x2ac,0x23b,0x275)](m[_0x26e671(-0x23b,-0x25e,-0x230,-0x235)],thumb,sapaa,text[_0x2b75b1(0x246,0x288,0x264,0x259)]()+(nameown+'\x0a')+botdate,_0x2b75b1(0x201,0x1f7,0x246,0x217),_0x2b75b1(0x235,0x26d,0x216,0x239),_0x2b75b1(0x221,0x244,0x23a,0x24b),_0x26e671(-0x211,-0x218,-0x223,-0x229),_0x2b75b1(0x235,0x23e,0x217,0x228),_0x26e671(-0x231,-0x202,-0x211,-0x234),fkontak);pilih==_0x26e671(-0x200,-0x1d1,-0x22f,-0x1d0)&&conn[_0x26e671(-0x22b,-0x251,-0x235,-0x1f5)+_0x26e671(-0x1e0,-0x1cc,-0x1bc,-0x1b8)](m[_0x26e671(-0x23b,-0x25f,-0x26f,-0x214)],thumb,sapaa,text[_0x2b75b1(0x26f,0x28d,0x261,0x259)]()+(nameown+'\x0a')+botdate,'Menu',_0x2b75b1(0x20d,0x24e,0x232,0x239),_0x2b75b1(0x25a,0x23c,0x21b,0x24b),_0x26e671(-0x211,-0x1f9,-0x248,-0x223),m);pilih==_0x26e671(-0x228,-0x256,-0x211,-0x1f6)&&conn[_0x2b75b1(0x251,0x22c,0x207,0x22a)+_0x26e671(-0x212,-0x21d,-0x220,-0x1e2)](m[_0x2b75b1(0x24b,0x242,0x23c,0x21a)],oh,sapaa,text[_0x2b75b1(0x246,0x246,0x293,0x259)]()+(nameown+'\x0a')+botdate,_0x2b75b1(0x24f,0x23b,0x22e,0x217),'.menu',_0x26e671(-0x22d,-0x25b,-0x20f,-0x255),_0x2b75b1(0x1f5,0x21e,0x1ee,0x224),m);pilih==_0x2b75b1(0x269,0x26b,0x281,0x25f)&&conn[_0x2b75b1(0x299,0x274,0x29c,0x263)+_0x26e671(-0x212,-0x1f5,-0x248,-0x1fc)](m[_0x26e671(-0x23b,-0x24b,-0x24a,-0x23c)],''+sad,sapaa,text[_0x26e671(-0x1fc,-0x1ca,-0x224,-0x1e0)]()+(nameown+'\x0a')+botdate,_0x2b75b1(0x1fb,0x239,0x229,0x217),'.menuv2',_0x26e671(-0x207,-0x213,-0x1d2,-0x205),_0x26e671(-0x1fb,-0x218,-0x1f7,-0x218),'Credit','.credit',m,{'contextInfo':{'externalAdReply':{'showAdAttribution':!![],'mediaUrl':_0x26e671(-0x20d,-0x1ef,-0x1d4,-0x234)+_0x2b75b1(0x240,0x245,0x257,0x268)+_0x2b75b1(0x244,0x280,0x269,0x254)+_0x2b75b1(0x28f,0x25d,0x292,0x27b),'mediaType':0x2,'description':sgc,'title':'👋\x20'+sapa+',\x20'+name,'body':bottime,'thumbnail':await(await fetch(zykomd))[_0x2b75b1(0x207,0x202,0x240,0x234)](),'sourceUrl':sig}}});    

  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['listmenu', 'menulist']

handler.command = /^(listmenu|menulist|tesm|\?)$/i

handler.register = false
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Siang Lord ☀️"
  }
  if (time >= 15) {
    res = "Sore Lord 🌇"
  }
  if (time >= 18) {
    res = "Malam Lord 🌙"
  }
  return res
}