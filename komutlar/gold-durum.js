const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  
  let nesne = args[0]

if (db.has(`prexgold_${message.author.id}`)) {
   message.channel.send(`<a:kirmizi:806093939010174996> Gold Durum: \`Aktif!\``)
  message.channel.send(`<a:partner:806093694129668116> Gold Süre: \`Sınırsız!\``)
 } else
  message.channel.send('<a:carpi:806093637489393674> Sistemde sizin adınıza ait gold üye bulunamadı.')
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['golddurum'],
  kategori: 'kullanıcı',
  permLevel: 0
};

exports.help = {
  name: 'gold-durum',
  description: 'gold sistemi',
  usage: 'gold-durum'
};