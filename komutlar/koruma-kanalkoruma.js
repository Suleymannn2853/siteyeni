const Discord = require('discord.js')
const Valak = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async(client, message, args) => {
let prefix = ayarlar.prefix

  
  if (!args[0]) {
    const Valak = new Discord.MessageEmbed()
    .setDescription(`Bunu mu Arıyorsun? ${prefix}kanal-koruma aç/kapat`)
    .setTimestamp()
    return message.channel.send(Valak)
  }
  if (args[0] === 'aç') {
    
    Valak.set(`kanalk_${message.guild.id}`, "Aktif")
       const Valak2 = new Discord.MessageEmbed()
    .setDescription(`Kanal Koruma Başarıyla Açıldı!`)
    .setTimestamp()
    return message.channel.send(Valak2)
  }
   if (args[0] === 'kapat') {
    
    Valak.delete(`kanalk_${message.guild.id}`)
       const Valak1 = new Discord.MessageEmbed()
    .setDescription(`Kanal Koruma Başarıyla Kapatıldı!`)
    .setTimestamp()
    return message.channel.send(Valak1)
     
  }
};
exports.conf = {
  aliases: ['kanalkoruma'],
  permLevel: 0
};
exports.help = {
  name: 'kanal-koruma'
}; 