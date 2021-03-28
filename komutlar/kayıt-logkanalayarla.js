const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix  
 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypeshiny:800691533870268456> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
 if(!kanal) return message.channel.send(`<a:hypeshiny:800691533870268456> **Bu Özelliği Ayarlayabilmek İçin Bir Kanal Etiketlemelisin!**\n**__Örnek__**: ${prefix}kayıt-log-kanal-ayarla \`#kayıtLogKanal\``)
 
  message.channel.send(`<a:hypeshiny:800691533870268456> **Kayıt Log Kanalı** \`${kanal}\` olarak ayarlandı! `)

 
    db.set(`kayitLog_${message.guild.id}`, kanal.id) 
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "kayıt-log-ayarla",
  description: "Sunucu hakkında bilgi verir.",
  usage: "sunucubilgi"
};
