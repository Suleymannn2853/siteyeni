const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {

  if (message.author.id !== '780135880542650390') return;
  let prex = args[0]
  if (!prex) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.set(`prexgold${prex}`, 'gold')
  
  message.channel.send(`**${prex}** IDli kullanıcı artık gold üye oldu!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gold-ver"],
  permLevel: 0
};
exports.help = {
  name: 'gold-ekle',
  description: '[Admin Komutu]',
  usage: 'gold-ekle <ID>'
};