const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypeshiny:800691533870268456>  **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`kayitKanal_${message.guild.id}`)  
 if(!rol) return message.channel.send(`<a:hypeshiny:800691533870268456>  **Bu özellik zaten kapalı! :wink: **`)
 
 
  message.channel.send(`<a:hypeshiny:800691533870268456>  **Kayıt Sistemi başarılı bir şekilde kapatıldı.**`)

 
  db.delete(`kayitAR_${message.guild.id}`)  
  db.delete(`kayitVR_${message.guild.id}`) 
  db.delete(`kayitLog_${message.guild.id}`)  
  db.delete(`kayitKanal_${message.guild.id}`)  
  db.delete(`isimtemizleyiciK_${message.guild.id}`)  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "kayıt-sistemi-kapat",
  description: "Sunucu hakkında bilgi verir.",
  usage: "sunucubilgi"
};
