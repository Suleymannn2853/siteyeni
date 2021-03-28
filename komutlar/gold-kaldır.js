const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {

  if (message.author.id !== '780135880542650390') return;
  let prex = args[0]
  if (!prex) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.delete(`prexgold${prex}`, 'gold')
  
  message.channel.send(`**${prex}** Adlı Kullanıcı Gold Üye Değil`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gold-al"],
  permLevel: 0
};
exports.help = {
  name: 'gold-kaldır',
  description: '[Admin Komutu]',
  usage: 'gold-kaldır <ID>'
};