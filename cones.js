//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const {
default: AnyWASocket,
MessageType,
Presence,
GroupSettingChange,
WA_MESSAGE_STUB_TYPES,
Mimetype,
relayWAMessage,
makeInMemoryStore,
useSingleFileAuthState,
useMultiFileAuthState,
BufferJSON, 
jidDecode, 
DisconnectReason, 
fetchLatestBaileysVersion,
downloadContentFromMessage,
delay,
WA_DEFAULT_EPHEMERAL ,
generateWAMessageFromContent ,
proto ,
generateWAMessageContent ,
generateWAMessage ,
WAMessageContent ,
prepareWAMessageMedia ,
prepareMessageFromContent ,
areJidsSameUser ,
getContentType

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
} = require("@adiwajshing/baileys")
const fs = require("fs")
const chalk = require("chalk")
const P = require("pino")
const p = require("pino")
const Pino = require("pino")
const axios = require('axios')
const clui = require("clui")
const util = require("util")
const fetch = require("node-fetch")
const yts = require("yt-search")
const Crypto = require("crypto")
const ff = require('fluent-ffmpeg')
const webp = require("node-webpmux")
const path = require("path")
const cheerio = require("cheerio")
const cfonts = require("cfonts")
const BodyForm = require("form-data")
const mimetype = require("mime-types")
const speed = require("performance-now")
const { exec, spawn, execSync } = require("child_process")
const { color } = require("./database/arquivos/lib/color")
const { fetchJson } = require("./database/arquivos/lib/fetcher")
const { fromBuffer } = require("file-type")
const { tmpdir } = require("os")
const { palavrasANA } = require('./database/funções/anagrama/jogos.js');
const { getLevelingXp, getLevelingLevel, getLevelingId, Telesticker, addLevelingXp, addLevelingLevel, addLevelingId, smsg, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, jsonformat, format, parseMention } = require('./database/funções/myfunc.js')
let _level = JSON.parse(fs.readFileSync('./database/funções/level.json'))
let leveling = JSON.parse(fs.readFileSync('./database/funções/leveling.json'))
const antinotas = JSON.parse(fs.readFileSync('./database/funções/grupos/antinotas.json'))
const sotoy = JSON.parse(fs.readFileSync('./database/funções/sotoy.json'));
const premium = JSON.parse(fs.readFileSync('./database/funções/usuarios/premium.json'));
const setting = require('./database/funções/funcsion.js')
const forca = JSON.parse(fs.readFileSync('database/funções/grupos/forca.json'))
const puppet = JSON.parse(fs.readFileSync('database/funções/grupos/puppet_forca.json'))
const registros = JSON.parse(fs.readFileSync('./database/funções/usuarios/registros.json'))

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const moment = require("moment-timezone")
const hora = moment.tz("America/Sao_Paulo").format("HH:mm:ss")
const data = moment.tz("America/Sao_Paulo").format("DD/MM/YY")

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const { addFlod , isFlod } = require('./database/funções/spam.js')
const { isFiltered, addFilter } = require('./database/funções/spam.js')
const palavra = JSON.parse(fs.readFileSync('./database/funções/grupos/palavras.json'))
const palavrao = JSON.parse(fs.readFileSync('./database/funções/grupos/palavrao.json'))

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const { banner, banner2, getGroupAdmins, getBuffer, getExtension, getRandom, upload, log } = require("./database/lib/functions.js")
const config = JSON.parse(fs.readFileSync("./database/files/config/data.json"))
const dono = config.numeroDono
prefix = config.prefix
prefixo = config.prefix
nomeBot = config.nomeBot
NomeBot = config.nomeBot
numeroBot = config.numeroBot
nomeDono = config.nomeDono
NomeDono = config.nomeDono
emoji = config.emoji
numeroDono = config.numeroDono
reagir = config.reação

const fotoaleatoria = JSON.parse(fs.readFileSync('./database/files/fotos/teste.json'))
result = fotoaleatoria.result
//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const logosss = JSON.parse(fs.readFileSync('./database/files/fotos/logos.json'))
logo1 = logosss.logo1
logo2 = logosss.logo2
logo3 = logosss.logo3
logo4 = logosss.logo4
logo5 = logosss.logo5
logo6 = logosss.logo6
logo7 = logosss.logo7

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const { menu } = require('./database/files/menu/menu.js');

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
async function startyniakami () {
const store = makeInMemoryStore({ logger: P().child({ level: "debug", stream: "store" }) })

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const { state, saveCreds } = await useMultiFileAuthState('./database/qr-code/qr-aqui')
console.log(banner.string)
console.log(banner2.string)
const dk = AnyWASocket({
logger: P({ level: "silent" }),
printQRInTerminal: true,
auth: state
})
dk.ev.on('creds.update', saveCreds);
store.bind(dk.ev)
dk.ev.on("chats.set", () => {
console.log("Tem conversas", store.chats.all())
})
dk.ev.on("contacts.set", () => {
console.log("Tem contatos", Object.values(store.contacts))
})
dk.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);
if(shouldReconnect) {
startyniakami()
}
} else if(connection === "open") {
console.log(`${color(`Bot Conectado Com Sucesso!`,'white')}`)
}
})
console.log(`${color(`Nome Do Dono: ${nomeDono}`,'white')}`)
console.log(`${color(`Criador Do Bot: Goldziin`,'red')}`)

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈

dk.ev.on("messages.upsert", async m => {
try {
const info = m.messages[0]
if (!info.message) return 
await dk.readMessages([info.key]);
if (info.key && info.key.remoteJid == "status@broadcast") return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextinfo" ? altpdf[2] : altpdf[1] : altpdf[0]
global.prefixo

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈

const msg = m.messages[0]
if (!msg.message) return 

const getBuffer = (url, options) => new Promise(async (resolve, reject) => { 
options ? options : {}
await axios({method: "get", url, headers: {"DNT": 1, "Upgrade-Insecure-Request": 1}, ...options, responseType: "arraybuffer"}).then((res) => {
resolve(res.data)
}).catch(reject)
})
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
const getExtension = async (type) => {
return await mimetype.extension(type)
}
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
var body = (type === 'conversation') ? msg.message.conversation : (type == 'imageMessage') ? msg.message.imageMessage.caption : (type == 'videoMessage') ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? msg.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (msg.message.buttonsResponseMessage?.selectedButtonId || msg.message.listResponseMessage?.singleSelectReply.selectedRowId || msg.text) : ''                                                                           
budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefixo)
const yniakami = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
//bady = (type === "conversation") ? info.message.conversation : (type == "imageMessage") ? info.message.imageMessage.caption : (type == "videoMessage") ? info.message.videoMessage.caption : (type == "extendedTextMessage") ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectenviar.selectedRowId) ? info.message.listResponseMessage.singleSelectenviar.selectedRowId: ""
budy = (type === "conversation") ? info.message.conversation : (type === "extendedTextMessage") ? info.message.extendedTextMessage.text : ""
button = (type == "buttonsResponseMessage") ? info.message.buttonsResponseMessage.selectedDisplayText : ""
button = (type == "buttonsResponseMessage") ? info.message.buttonsResponseMessage.selectedButtonId : ""
listMessage = (type == "listResponseMessage") ? info.message.listResponseMessage.title : ""
var pes = (type === "conversation" && info.message.conversation) ? info.message.conversation : (type == "imageMessage") && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == "videoMessage") && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == "extendedTextMessage") && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ""
bidy =  budy.toLowerCase()
//onst stream = await downloadContentFromMessage(mediakey, MediaType)

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const getFileBuffer = async (mediakey, MediaType) => { 
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? dk.sendMessage(from, {text: teks.trim(), mentions: memberr}) : dk.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {
if(i.admin == "admin") admins.push(i.id)
if(i.admin == "superadmin") admins.push(i.id)
}
return admins
}
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const arg = body.substring(body.indexOf(" ") + 1)
const numeroBot = dk.user.id.split(":")[0]+"@s.whatsapp.net"
const argss = body.split(/ +/g)
const testat = body
const ants = body
const isGroup = info.key.remoteJid.endsWith("@g.us")
const tescuk = ["0@s.whatsapp.net"]
const q = args.join(" ")
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const sender = isGroup ? info.key.participant : info.key.remoteJid
const pushname = info.pushName ? info.pushName : ""
const groupMetadata = isGroup ? await dk.groupMetadata(from) : ""
const groupName = isGroup ? groupMetadata.subject : ""
const groupDesc = isGroup ? groupMetadata.desc : ""
const groupMembers = isGroup ? groupMetadata.participants : ""
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ""
const canal = config.canal
const grupo = config.grupo
const participants = isGroup ? await groupMetadata.participants : ''
const text = args.join(" ")
const c = args.join(' ')
const enviar = (texto) => {
dk.sendMessage(from, { text: texto }, {quoted: info})
}

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const selo = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}
const selo1 = {"key": {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "5514997128882@g.us" }, "message": {orderMessage: {itemCount: 0,status: 4, thumbnail: fs.readFileSync(`./database/files/fotos/verificado.png`) ,message: `Nick : ${pushname}`,surface: 100, sellerJid: "0@s.whatsapp.net"}}}
const selo2 = { key: {participant: `0@s.whatsapp.net`, mentionedJid: `Dacoro`, ...(m.from ?{ remoteJid: `${m.from}` } : {}) },message: { "extendedTextMessage": {"text":`𝘋𝘬 𝘕𝘰 𝘊𝘰𝘯𝘵𝘳𝘰𝘭𝘦 😈` }} }       
       
//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const isAntiNotas = isGroup ? antinotas.includes(from) : false
const isLevelingOn = isGroup ? leveling.includes(from) : false
const isPalavrao = isGroup ? palavrao.includes(from) : false	
const isPremium = premium.includes(sender)
const isRegistro = registros.includes(sender)
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).mimetype || ""
const isBot = info.key.fromMe ? true : false
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isOwner = sender.includes(numeroDono)
const groupId = isGroup ? groupMetadata.jid : ''
banChats = true
const allForcaId = []
for(let obj of forca) allForcaId.push(obj.id)
const isPlayForca = allForcaId.indexOf(sender) >= 0 ? true : false

async function randompalavra() {
    return new Promise(async (resolve, reject) => {
fetch('https://www.palabrasaleatorias.com/palavras-aleatorias.php?fs=1&fs2=0&Submit=Nova+palavra',).then(async function (res, err) {
if(err) reject(err)    
var $ = cheerio.load(await res.text())
resolve($('body > center > center > table:nth-child(4) > tbody > tr > td > div')[0].children[0].data)
})
    }) 
}

var budy2 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null


//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage")
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")



const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00"){
var tempo = 'Boa madrugada' 
} 
if(time2 > "06:00:00"){
var tempo = 'Bom dia' 
}
if(time2 > "12:00:00"){
var tempo = 'Boa tarde' 
}
if(time2 > "18:00:00"){
var tempo = 'Boa noite' 
}
//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
if(isAntiNotas && body.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins) {
if(type == 'stickerMessage') return
let verificar = body.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if (verificar && body.length < 100) return  
await dk.sendMessage(from, {text: '*mensagem proibida detectada, banindo...*'}, {quoted: m})
setTimeout(async function () {
dk.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
const nivelAtual = getLevelingLevel(sender)
var patt = 'Graduado I '
if (nivelAtual === 1) {patt = 'Graduado  I ' } else if (nivelAtual === 2) {patt = 'Graduado II '} else if (nivelAtual === 3) {patt = 'Graduado  III '} else if (nivelAtual === 4) {patt = 'Graduado  IV  '} else if (nivelAtual === 5) {patt = 'Graduado  V '} else if (nivelAtual === 6) {patt = 'Oficiais Subalternos I'} else if (nivelAtual === 7) {patt = 'Oficiais Subalternos II'} else if (nivelAtual === 8) {patt = 'Oficiais Subalternos III'} else if (nivelAtual === 9) {patt = 'Oficiais Subalternos IV'} else if (nivelAtual === 10) {patt = 'Oficiais Subalternos V'} else if (nivelAtual === 11) {patt = 'Oficiais Intermediários I'} else if (nivelAtual === 12) {patt = 'Oficiais Intermediários II'} else if (nivelAtual === 13) {patt = 'Oficiais Intermediários III'} else if (nivelAtual === 14) {patt = 'Oficiais Intermediários IV'} else if (nivelAtual === 15) {patt = 'Oficiais Intermediários V'} else if (nivelAtual === 16) {patt = 'Oficiais Superioses I'} else if (nivelAtual === 17) {patt = 'Oficiais Superioses II'} else if (nivelAtual === 18) {patt = 'Oficiais Superioses III'} else if (nivelAtual === 19) {patt = 'Oficiais Superioses IV'} else if (nivelAtual === 20) {patt = 'Oficiais Superioses V'} else if (nivelAtual === 21) {patt = 'Major I '} else if (nivelAtual === 22) {patt = 'Major II '} else if (nivelAtual === 23) {patt = 'Major III '} else if (nivelAtual === 24) {patt = 'Major IV '} else if (nivelAtual === 25) {patt = 'Major V '} else if (nivelAtual === 26) {patt = 'Tenente Coronel I '} else if (nivelAtual === 27) {patt = 'Tenente Coronel II '} else if (nivelAtual === 28) {patt = 'Tenente Coronel III '} else if (nivelAtual === 29) {patt = 'Tenente Coronel IV '} else if (nivelAtual === 30) {patt = 'Tenente Coronel V '} else if (nivelAtual === 31) {patt = 'Coronel I '} else if (nivelAtual === 32) {patt = 'Coronel II '} else if (nivelAtual === 33) {patt = 'Coronel III '} else if (nivelAtual === 34) {patt = 'Coronel IV '} else if (nivelAtual === 35) {patt = 'Coronel V '} else if (nivelAtual === 36) {patt = 'Oficiais Generais I'} else if (nivelAtual === 37) {patt = 'Oficiais Generais II'} else if (nivelAtual === 38) {patt = 'Oficiais Generais III'} else if (nivelAtual === 39) {patt = 'Oficiais Generais IV'} else if (nivelAtual === 40) {patt = 'Oficiais Generais V'} else if (nivelAtual > 41) {patt = 'O Grande Marechal 🫡'}
//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
if(isGroup && fs.existsSync(`./database/funções/anagrama/anagrama-${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./database/funções/anagrama/anagrama-${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return enviar('está perto')
xp = Math.floor(Math.random() * 14) + 3000
if(budy.toUpperCase() == dataAnagrama.original) { dk.sendMessage(from, {text: `parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos...`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./database/funções/anagrama/anagrama-${from}.json`)		
addLevelingXp(sender, xp)
recompensa = `Você Mereceu Aqui Vai Um Bonus\nVocê ganhou ${xp} em *xp*`
enviar(recompensa)
		setTimeout(async() => {
fs.writeFileSync(`./database/funções/anagrama/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./database/funções/anagrama/anagrama-${from}.json`))
dk.sendMessage(from, {text:`
╭═─────── ⟮ ۝ ⟯ ───────═༻
┃               Descubra A Palavra 
┃
┃               ANAGRAMA: ${dataAnagrama2.embaralhada}
┃
┃               DICA: ${dataAnagrama2.dica}
╰──────── ⟮ ۝ ⟯ ─────────═༻
`}) 
}, 5000)
}}

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
if (isGroup) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 10) + 500
const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
}
} catch (err) {
console.error(err)
}
}

dialogo = {
calma: `𝘊𝘢𝘭𝘮𝘢 𝘈𝘦 𝘑𝘢 𝘌𝘴𝘵𝘰𝘶 𝘌𝘯𝘷𝘪𝘢𝘯𝘥𝘰!`,
erro: `𝘌𝘪𝘵𝘢 𝘋𝘦𝘶 𝘌𝘳𝘳𝘰 𝘢𝘪!`,
admin: `𝘊𝘰𝘮𝘢𝘯𝘥𝘰 𝘚𝘰́ 𝘗𝘢𝘳𝘢 𝘚𝘦𝘳𝘦𝘴 𝘚𝘶𝘱𝘦𝘳𝘪𝘰𝘳𝘦𝘴!`,
botadm: `𝘚𝘰́ 𝘗𝘰𝘴𝘴𝘰 𝘌𝘹𝘦𝘤𝘶𝘵𝘢𝘳 𝘚𝘦 𝘌𝘶 𝘍𝘰𝘳 𝘈𝘥𝘮`,
login: `𝘕𝘢̃𝘰 𝘈𝘤𝘩𝘦𝘪 𝘚𝘦𝘶 𝘓𝘰𝘨𝘪𝘯 𝘋𝘪𝘨𝘪𝘵𝘦 "${prefixo}𝘙𝘦𝘨𝘪𝘴𝘵𝘳𝘰 "`,
grupo: `𝘊𝘰𝘮𝘢𝘥𝘰 𝘗𝘳𝘪𝘷𝘢𝘥𝘰 𝘚𝘰́𝘮𝘦𝘯𝘵𝘦 𝘌𝘮 𝘎𝘳𝘶𝘱𝘰𝘴!`,
semnull: `𝘋𝘪𝘨𝘪𝘵𝘦 "${prefixo + command}" "1" 𝘖𝘶 "0"`,
ativo: `𝘖𝘭𝘢́ "${pushname}" 𝘖 𝘙𝘦𝘤𝘶𝘳𝘴𝘰 𝘍𝘰𝘪 "${command}" 𝘈𝘵𝘪𝘷𝘰 𝘊𝘰𝘮 𝘚𝘶𝘤𝘦𝘴𝘴𝘰!`,
desativo: `𝘖𝘭𝘢́ "${pushname}" 𝘖 𝘙𝘦𝘤𝘶𝘳𝘴𝘰 "${command}" 𝘍𝘰𝘪 𝘋𝘦𝘴𝘢𝘵𝘪𝘷𝘢𝘥𝘰 𝘊𝘰𝘮 𝘚𝘶𝘤𝘦𝘴𝘴𝘰!`,
jaatv: `𝘖 𝘙𝘦𝘤𝘶𝘳𝘴𝘰 𝘑𝘢 𝘌𝘴𝘵𝘢 𝘈𝘵𝘪𝘷𝘰!`,
jadstv: `𝘖 𝘙𝘦𝘤𝘶𝘳𝘴𝘰 𝘑𝘢 𝘌𝘴𝘵𝘢 𝘋𝘦𝘴𝘢𝘵𝘪𝘷𝘢𝘥𝘰!`,
dono: `𝘚𝘰́ 𝘌𝘹𝘦𝘤𝘶𝘵𝘢𝘳𝘦𝘪 𝘌𝘴𝘴𝘦 𝘊𝘰𝘮𝘢𝘯𝘥𝘰 𝘚𝘦 𝘍𝘰𝘳 𝘔𝘦𝘶 𝘋𝘰𝘯𝘰 𝘘𝘶𝘦 𝘗𝘦𝘥𝘪𝘳!`,
toy: `𝘖𝘭𝘢́ "${pushname}" 𝘗𝘦𝘴𝘲𝘶𝘪𝘴𝘢𝘯𝘥𝘰 𝘈 𝘚𝘶𝘢 𝘍𝘪𝘹𝘢 𝘋𝘦 ${prefixo + command}`
}

//┈┈───╼┈┈───╼⊳⊰ 𖤍 ⊱⊲╾───┈┈╾───┈┈
if(isGroup && isCmd) {
if(isFiltered(sender)) return enviar(`*Não floda...*`)
addFilter(sender)}
if (isGroup && isCmd) console.log(`
${color(`╭──────────────────────────────>`,`white`)}
${color(`Local:`,`red`)} Mensagem em grupo
${color(`Comando:`,`red`)} ${comando}
${color(`Número:`,`red`)} ${sender.split("@")[0]}
${color(`Grupo:`,`red`)} ${groupName}
${color(`Nome:`,`red`)} ${pushname}
${color(`Criador Do Bot:`,`red`)} Goldziin
${color(`╰──────────────────────────────>`,`white`)}
`)
if (isGroup && !isCmd) console.log(`
${color(`╭──────────────────────────────>`,`white`)}
${color(`Local:`,`red`)} Mensagem em grupo
${color(`Comando:`,`red`)} Não
${color(`Número:`,`red`)} ${sender.split("@")[0]}
${color(`Grupo:`,`red`)} ${groupName}
${color(`Nome:`,`red`)} ${pushname}
${color(`Criador Do Bot:`,`red`)} Goldziin
${color(`╰──────────────────────────────>`,`white`)}
`)

if (!isGroup && isCmd) console.log(`
${color(`╭──────────────────────────────>`,`white`)}
${color(`Local:`,`red`)} Mensagem no pv
${color(`Comando:`,`red`)} ${comando}
${color(`Número:`,`red`)} ${sender.split("@")[0]}
${color(`Grupo:`,`red`)} Não
${color(`Nome:`,`red`)} ${pushname}
${color(`Criador Do Bot:`,`red`)} Goldziin
${color(`╰──────────────────────────────>`,`white`)}
`)

if (!isGroup && !isCmd) console.log(`
${color(`╭──────────────────────────────>`,`white`)}
${color(`Local:`,`red`)} Mensagem no pv
${color(`Comando:`,`red`)} Não
${color(`Número:`,`red`)} ${sender.split("@")[0]}
${color(`Grupo:`,`red`)} Não
${color(`Nome:`,`red`)} ${pushname}
${color(`Criador Do Bot:`,`red`)} Goldziin
${color(`╰──────────────────────────────>`,`white`)}
`)

const enviargif = (videoDir, caption) => {
dk.sendMessage(from, {
video: fs.readFileSync(videoDir),
caption: caption,
gifPlayback: true
})
}

const enviarimg = (imageDir, caption) => {
dk.sendMessage(from, {
image: fs.readFileSync(imageDir),
caption: caption
})
}

const enviarfig = async (figu, tag) => {
bla = fs.readFileSync(figu)
dk.sendMessage(from, {sticker: bla}, {quoted: info})
}

const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
dk.sendMessage(id, buttonMessage, {quoted: vr})
}

const sendBvidT = async (id, img1, text1, desc1, but = [], vr) => {
templateMessage = {
video: {url: img1},
gifPlayback: true,
caption: text1,
footer: desc1,
templateButtons: but,
}
dk.sendMessage(id, templateMessage, {quoted: vr})
}

const sendBimgT = async (id, img1, text1, desc1, but = [], vr) => {
templateMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
templateButtons: but,
}
dk.sendMessage(id, templateMessage, {quoted: vr})
}

const enviarImgB = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
buttons: but,
headerType: 4
}
dk.sendMessage(id, buttonMessage, {quoted: vr})
}

const enviartextB = async (id, text1, desc1, but = [], vr) => {
buttonMessage = {
text: text1,
buttons: but,
footer: desc1,
headerType: 4
}
dk.sendMessage(id, buttonMessage, {quoted: vr})
}

if (!isCmd && info.key.fromMe) return

switch (yniakami) {
  

case 'comprar':
  const templateButtons = [
      {index: 1, quickReplyButton: {displayText: 'Prosseguir >>', id: `${prefixo}comprar1`}}
      ]
  const templateMessage = {
      text: `Para prosseguirmos, digite seu nome por gentileza
  *após enviar seu nome clique no botão*`,
      footer: 'DL✓',
      templateButtons: templateButtons
      }

dk.sendMessage(from, templateMessage)
break

case 'comprar1':
  const templateButtons2 = [
      {index: 1, quickReplyButton: {displayText: 'Prosseguir >>', id: `${prefixo}comprar2`}}
      ]
  const templateMessage2 = {
      text: `Para prosseguirmos, digite seu endereço por gentileza
  *após enviar seu endereço clique no botão*`,
      footer: 'DL✓',
      templateButtons: templateButtons2
      }
    
dk.sendMessage(from, templateMessage2)
break

case 'comprar2':
  const templateButtons3 = [
      {index: 1, quickReplyButton: {displayText: 'Finalizar Pedido >>', id: `${prefixo}finalizarpedido`}}
      ]
  const templateMessage3 = {
      text: `Tudo certo, qual vai ser o pedido?
após pedir é só clicar no botão *finalizar Pedido*👇`,
      footer: '',
      templateButtons: templateButtons3
      }
    
dk.sendMessage(from, templateMessage3)
break

case 'finalizarpedido':
  const templateButtons4 = [
      {index: 1, quickReplyButton: {displayText: 'Pix 💠', id: `${prefixo}pagarpix`}},
      {index: 2, quickReplyButton: {displayText: 'Cartão 💳', id: `${prefixo}pagarcartao`}},
      {index: 3, quickReplyButton: {displayText: 'Dinheiro 💵', id: `${prefixo}pagardinheiro`}}
      ]
  const templateMessage4 = {
      text: `Escolha abaixo qual vai ser a forma de pagamento`,
      footer: '',
      templateButtons: templateButtons4
      }
          
dk.sendMessage(from, templateMessage4)
break

case 'pagarcartao':
dk.sendMessage(from, {text: `Seu pedido esta sendo analisado, se tudo ocorrer bem, logo entraremos em contato.
Obrigado pela preferencia`})
break

case 'pagarpix':
dk.sendMessage(from, {text: `${pushname}, Você pode pagar utilizando o metodo 
*Pix Copia E Cola*
Basta copiar o código abaixo 👇`})
await sleep(2000)
dk.sendMessage(from, {text: `Quando pagar envie o comprovante
*Seu pedido só sera confirmado após o envio do comprovante!!!!*`})
await sleep(1000)
dk.sendMessage(from, {text: '00020126580014BR.GOV.BCB.PIX013680763b75-8ede-4080-b162-1ee7d2d175eb5204000053039865802BR5925TIFANY LETICIA DE MELO CA6004LINS62070503***63043398'})
await sleep(10000)
  const templateButtons5 = [
      {index: 1, quickReplyButton: {displayText: 'Enviei o Comprovante', id: `${prefixo}enviarcomprovante`}}
      ]
  const templateMessage5 = {
      text: `${pushname}, já enviou o comprovante?
*CLIQUE NO BOTÃO ABAIXO*`,
      footer: '',
      templateButtons: templateButtons5
      }
dk.sendMessage(from, templateMessage5)
break

case 'enviarcomprovante':
dk.sendMessage(from, {text: `Seu pedido esta sendo analisado, se tudo ocorrer bem, logo entraremos em contato.
Obrigado pela preferencia`})
break

case 'pagardinheiro':
  const templateButtons6 = [
      {index: 1, quickReplyButton: {displayText: 'Sim, preciso ✅', id: `${prefixo}precisa`}},
      {index: 2, quickReplyButton: {displayText: `Não preciso ❌`, id: `${prefixo}naoprecisa`}}
      ]
  const templateMessage6 = {
      text: `${pushname}, Você precisa de troco?`,
      footer: '',
      templateButtons: templateButtons6
      }
dk.sendMessage(from, templateMessage6)
break

case 'precisa':
dk.sendMessage(from, {text: 'Você precisa de troco para quantos?'})
await sleep(15000)
dk.sendMessage(from, {text: `Seu pedido esta sendo analisado, se tudo ocorrer bem, logo entraremos em contato
Obrigado pela preferencia`})
break

case 'naoprecisa':
dk.sendMessage(from, {text: `Seu pedido esta sendo analisado, se tudo ocorrer bem, logo entraremos em contato
Obrigado pela preferencia`})
break

case 'revenda':
sendBimgT(from, `${logo4}`, `Olá Bem vindo ao menu de revenda
ATENÇÃO❗
Revenda somente acima de 20 unidades

*PREÇO PARA REVENDA*
R$4,50 a unidade
Acima de 100 unidades R$3,80 cada`, 'DL✓', [
    {index: 1, urlButton: {displayText: 'Quero me tornar revendedor 📥', url: `https://wa.me/5514999055672`}},
    {index: 2, quickReplyButton: {displayText: 'Voltar para o menu ↩️', id: `${prefixo}donalili`}}
])
break

case 'donalili':
const sections = [
    {
	title: "Opcoes 📱",
	rows: [
	    {title: "Sabores", rowId: `${prefixo}sabores`, description: "Exibe uma lista com todos os sabores"}
	]
    },
   {
	title: "Comprar 🛒",
	rows: [
	    {title: "Fazer pedido", rowId: `${prefixo}pedir`, description: "Inicia um pedido"}
	]
    },
  {
   title: "Revenda 📥",
	rows: [
	    {title: "Seja um(a) revendedor(a)", rowId: `${prefixo}revenda`, description: "Abre o menu de revendedor"}
	]
  }
]

const listMessage = {
  text: `Sou o assistente virtual da (nome da loja) e estou aqui para te ajudar
Clique Abaixo para acessar as opções`,
  footer: ``,
  title: `*${tempo}, ${pushname}*`,
  buttonText: "➡️  CLIQUE AQUI  ⬅️",
  sections
}
dk.sendMessage(from, listMessage)

break

case 'sabores':
  const templateButtons7 = [
      {index: 1, quickReplyButton: {displayText: 'Comprar Agora', id: `${prefixo}comprar`}}
  ]
  const templateMessage7 = {
      text: `       *Lista de sabores* 😋
- Brigadeiro tradicional    R$7,00
- Ninho    R$7,00
- Dois Amores    R$7,00
- Beijinho    R$7,00
- Ninho com Nutella    R$7,00
- Prestígio    R$7,00
- Ferreiro    R$7,00
- Óreo    R$7,00
- Sonho de Valsa    R$7,00
- Ouro Branco    R$7,00
- Limão    R$7,00
- Morango    R$7,00
- Maracujá    R$7,00
  
⚠️ *ATENÇÃO* ⚠️
3 Unidades por R$20,00
Acima de 50 unidades R$5,80 cada
  `,
      footer: 'DL✓',
      templateButtons: templateButtons7
  }
    
dk.sendMessage(from, templateMessage7)
break

case 'pedir':
  const templateButtons8 = [
      {index: 1, quickReplyButton: {displayText: 'Comprar Agora ✅', id: `${prefixo}comprar`}},
      {index: 2, quickReplyButton: {displayText: 'Ver Sabores 😋', id: `${prefixo}sabores`}}
  ]
  const templateMessage8 = {
      text: `Ola ${pushname}
 Você pode utilizar os botões abaixo para se locomover 😃`,
      footer: 'DL✓',
      templateButtons: templateButtons8
  }

dk.sendMessage(from, templateMessage8)
break

switch(ants){
} 


}
} catch (e) {
console.log(e)
}
})
}
startyniakami()
