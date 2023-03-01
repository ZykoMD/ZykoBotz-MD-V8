import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = m => m
handler.all = async function (m) {
    let name = await conn.getName(m.sender) 
    let totalreg = Object.keys(global.db.data.users).length
	let pp
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	pp = hwaifu.getRandom()
	} finally {
		
		
		// Uptime Bot 
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
    
        // Doc
        let pdoc = ["application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-excel","application/msword","application/pdf","text/rtf"]
		global.doc = pdoc.getRandom()
       global.fetch = import('node-fetch')
		
		// Fake Random
        let pft = ["fpayment","ftroli","fkontak","fvn","fvid","ftextt","fliveLoc","fliveLoc2","ftoko","fdocs","fgclink","fgif"]
		global.fakes = pft.getRandom()
		
		// Module 
		global.fetch = import('node-fetch')
		global.bochil = import('@bochilteam/scraper')
        
		// Ini untuk command crator/owner
		global.kontak2 = [
         [owner[0], await this.getName(owner[0] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'aldashakila23@mail.com', true],
         [owner[1], await this.getName(owner[1] + '@s.whatsapp.net'), 'ᴅᴇᴠᴇʟᴏᴩᴇʀ ʙᴏᴛ', 'aldashakila23@mail.com', true], // Kalo mau di tambah tinggal copy 1baris ini di tempel di bawahnya trs di edit dikit!
        ]
        
		// ucapan ini mah
		global.ucapan = ucapan()
		
		// pesan sementara
		global.ephemeral = '86400' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
		
		// externalAdReply atau text with thumbnail. gatau bahasa Inggris? coba translate!
		global.adReply = {
			contextInfo: {
				forwardingScore: fsizedoc,
				//isForwarded: true, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
				externalAdReply: { // Bagian ini sesuka kalian berkreasi :'v
                    showAdAttribution: true,
					title: '𝑼𝑷𝑻𝑰𝑴𝑬 : ' + uptime,
					body: bottime,
					mediaUrl: sgc,
					description: 'simple bot esm',
					previewType: "PHOTO",
					thumbnail: await (await fetch(pp)).buffer(),
					sourceUrl: "https://www.youtube.com/@zykobotz",					
				}
			}
		}
		global.fakeig = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            mediaUrl: sig,
            mediaType: "VIDEO",
            description: "Follow: " + sig,
            title: wm,
            body: botdate,
            thumbnailUrl: await (await fetch(pp)).buffer(),
            sourceUrl: sgc
    }
    } }
    global.fakefb = {
			contextInfo: {
					externalAdReply: {
						showAdAttribution: true,
						mediaUrl: sfb,
						mediaType: "VIDEO",
						description: "Follow: " + sfb,
					     title: "👋 Hay Kak :> " + name,
						body: botdate,
						thumbnailUrl: await (await fetch(pp)).buffer(),
						sourceUrl: sgc
                 	}
				}
			}
			
    // Fake 🤥
		global.fpayment = {
  "key": {
    "remoteJid": "0@s.whatsapp.net",
    "fromMe": false,
    "id": "BAE595C600522C9C",
    "participant": "0@s.whatsapp.net"
  },
  "message": {
    "requestPaymentMessage": {
      "currencyCodeIso4217": "USD",
      "amount1000": fsizedoc,
      "requestFrom": "0@s.whatsapp.net",
      "noteMessage": {
        "extendedTextMessage": {
          "text": "\nHay Kak :> 👋 \n"
        }
      },
      "expiryTimestamp": fsizedoc,
      "amount": {
        "value": fsizedoc,
        "offset": fsizedoc,
        "currencyCode": "USD"
      }
    }
  }
}
		// Fake 🤥
		global.ftroli = { key: {participant : '0@s.whatsapp.net'}, message: { orderMessage: { itemCount: fsizedoc, status: 1, surface: 1, message: botdate, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
		global.fkontak = { key: {participant : '0@s.whatsapp.net'}, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg'), thumbnail: fs.readFileSync('./thumbnail.jpg'),sendEphemeral: true}}}
		global.fkon = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./src/logo.jpg'), thumbnail: fs.readFileSync('./src/logo.jpg'),sendEphemeral: true}}}
        global.fvn = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
               "audioMessage": {
                        "mimetype":"audio/ogg; codecs=opus",
                        "seconds": fsizedoc,
                        "ptt": "true"
                               }
                             } 
                            }
                            global.fvid = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { "videoMessage": { "title":wm, "h": `Hmm`,'seconds': fsizedoc, 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
                            }
                            
               
                global.ftextt = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
               "extendedTextMessage": {
                        "text":wm,
                        "title": bottime,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                             } 
                            }
               
                  global.fliveLoc = {
            key: {
            participant : '0@s.whatsapp.net'},
            message: { "liveLocationMessage": { "caption": wm,"h": `${bottime}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
               
                  global.fliveLoc2 = {
            key: {
            participant : '0@s.whatsapp.net'},
            message: { "liveLocationMessage": { "title": wm,"h": bottime, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
               
                   global.ftoko = {
       key: {
                   participant : '0@s.whatsapp.net'},
               message: {
                   "productMessage": {
                       "product": {
                           "productImage":{
                               "mimetype": "image/jpeg",
                               "jpegThumbnail": fs.readFileSync('./thumbnail.jpg') //Gambarnye
                           },
                           "title": wm, //Kasih namalu 
                           "description": bottime, 
                           "currencyCode": "IDR",
                           "priceAmount1000": fsizedoc,
                           "retailerId": "Ghost",
                           "productImageCount": 1
                       },
                           "businessOwnerJid": `0@s.whatsapp.net`
               }
           }
       }
               
                     global.fdocs = {
           key : {
                  participant : '0@s.whatsapp.net'},
              message: {
                           documentMessage: {
                           title: wm, 
                           jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
                                 }
                               }
                             }
               
                    global.fgclink = {
           key: {
               participant : '0@s.whatsapp.net'},
           message: {
               groupInviteMessage: {
                   groupJid: "17608914335-1625305606@g.us",
                   inviteCode: null,
                   groupName: wm, 
                   caption: bottime, 
                   jpegThumbnail: fs.readFileSync('./thumbnail.jpg')
               }
           }
       }
       
                    global.fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': fsizedoc, 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')
                               }
                              }
                             }
	}
}

export default handler 

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 1) {
        res = "Selamat Pagi 🗿"
    }
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    if (time >= 24) {
        res = "Selamat Begadang 🌌"
    }
    return res
}

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}