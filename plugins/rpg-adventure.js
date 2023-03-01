import fetch from 'node-fetch'

const cooldown = 300000
let handler = async (m, { usedPrefix }) => {
let ke = await fetch('https://random-data-api.com/api/v2/addresses')
let v = await ke.json()
let imgr = flaaa2
    let user = global.db.data.users[m.sender]
    let timers = (cooldown - (new Date - user.lastadventure))
    if (user.health < 80) return conn.sendButton(m.chat,
`${htki} LOW HEALTH ${htka}`,
`ʏᴏᴜʀ ʜᴇᴀʟᴛʜ ɪs ʙᴇʟᴏᴡ 80﹗
ᴩʟᴇᴀsᴇ ʜᴇᴀʟ ❤ ғɪʀsᴛ ᴛᴏ ᴀᴅᴠᴇɴᴛᴜʀᴇ ᴀɢᴀɪɴ.`.trim(), imgr + 'lowhealth', [
[`ʜᴇᴀʟ ❤`, `${usedPrefix}heal`]
], m)
    if (new Date - user.lastadventure <= cooldown) return conn.sendButton(m.chat, 
`${htki} COOLDOWN ${htka}`,
`ʏᴏᴜ'ᴠᴇ ᴀʟʀᴇᴀᴅʏ *ᴀᴅᴠᴇɴᴛᴜʀᴇ*, ᴩʟᴇᴀsᴇ ᴡᴀɪᴛ ᴛɪʟʟ ᴄᴏᴏʟᴅᴏᴡɴ ғɪɴɪsʜ.

⏱️ ${timers.toTimeString()}`.trim(), imgr + 'cooldown', [
[`ɪɴᴠᴇɴᴛᴏʀʏ`, `${usedPrefix}inventory`],
[`ᴅᴀɪʟʏ`, `${usedPrefix}daily`]
], m)
    const rewards = reward(user)
    let text = `🔖 ᴀᴅᴠᴇɴᴛᴜʀᴇ ᴛᴏ *${v.street_name}*

${cmenut}
${cmenub} *building number:* ${v.building_number}
${cmenub} *city:* ${v.city}
${cmenub} *uid:* ${v.uid}
${cmenub} *city prefix:* ${v.city_prefix}
${cmenub} *city suffix:* ${v.city_suffix}
${cmenub} *community:* ${v.community}
${cmenub} *country:* ${v.country}
${cmenub} *country code:* ${v.country_code}
${cmenub} *full address:* ${v.full_address}
${cmenub} *id:* ${v.id}
${cmenub} *latitude:* ${v.latitude}
${cmenub} *longitude:* ${v.longitude}
${cmenub} *mail box:* ${v.mail_box}
${cmenub} *postcode:* ${v.postcode}
${cmenub} *secondary address:* ${v.secondary_address}
${cmenub} *state:* ${v.state}
${cmenub} *state abbr:* ${v.state_abbr}
${cmenub} *street address:* ${v.street_address}
${cmenub} *street name:* ${v.street_name}
${cmenub} *street suffix:* ${v.street_suffix}
${cmenub} *time zone:* ${v.time_zone}
${cmenub} *zip:* ${v.zip}
${cmenub} *zip code:* ${v.zip_code}
${cmenuf}

ᴀᴅᴠᴇɴᴛᴜʀᴇ ғɪɴɪsʜ (. ❛ ᴗ ❛.)
${cmenua}`
    for (const lost in rewards.lost) if (user[lost]) {
        const total = rewards.lost[lost].getRandom()
        user[lost] -= total * 1
        if (total) text += `\n${global.rpg.emoticon(lost)}${lost}: ${total}`
    }
    text += '\n\n🔖 ᴀᴅᴠᴇɴᴛᴜʀᴇ ʀᴇᴡᴀʀᴅ ʀᴇᴄᴇɪᴠᴇᴅ :'
    for (const rewardItem in rewards.reward) if (rewardItem in user) {
        const total = rewards.reward[rewardItem].getRandom()
        user[rewardItem] += total * 1
        if (total) text += `\n⮕ ${global.rpg.emoticon(rewardItem)}${rewardItem}: ${total}`
    }
    conn.sendButton(m.chat, 
    `${htki} ADVENTURE ${htka}`, 
    text.trim(), `https://static-maps.yandex.ru/1.x/?lang=id-ID&ll=${v.longitude},${v.latitude}&z=12&l=map&size=600,300`, [
[`ɪɴᴠᴇɴᴛᴏʀʏ`, `${usedPrefix}inventory`],
[`ᴅᴀɪʟʏ`, `${usedPrefix}daily`]
], m)
    user.lastadventure = new Date * 1
}
handler.help = ['adventure']
handler.tags = ['rpg']
handler.command = /^adv(entur(es?)?)?$/i

handler.cooldown = cooldown
handler.disabled = false

export default handler

function reward(user = {}) {
    let rewards = {
        reward: {
            money: 201,
            exp: 301,
            trash: 101,
            potion: 2,
            rock: 2,
            wood: 2,
            string: 2,
            common: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
            uncommon: [0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                )).fill(0)
            ),
            mythic: [0, 0, 0, 0, 0, 1, 0, 0, 0].concat(
                new Array(8 - (
                    (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                )).fill(0)
            ),
            legendary: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0].concat(
                new Array(10 - (
                    (user.dog > 8 && user.dog) || 4
                )).fill(0)
            ),
            cat: [0, 1, 0, 0, 0],
            centaur: [0, 1, 0, 0, 0],
            dog: [0, 1, 0, 0, 0],
            dragon: [0, 1, 0, 0, 0],
            emerald: [0, 1, 0, 0, 0],
            fox: [0, 1, 0, 0, 0],
            griffin: [0, 1, 0, 0, 0],
            horse: [0, 1, 0, 0, 0],
            kyubi: [0, 1, 0, 0, 0],
            lion: [0, 1, 0, 0, 0],
            pet: [0, 1, 0, 0, 0],
            phonix: [0, 1, 0, 0, 0],
            rhinoceros: [0, 1, 0, 0, 0],
            robo: [0, 1, 0, 0, 0],
            wolf: [0, 1, 0, 0, 0],
            iron: [0, 0, 0, 1, 0, 0],
            gold: [0, 0, 0, 0, 0, 1, 0],
            diamond: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            health: 101 - user.cat * 4,
            armordurability: (15 - user.armor) * 7
        }
    }
    return rewards
}