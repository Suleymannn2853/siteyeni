const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix  
  
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypeshiny:800691533870268456>  **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
 
 if(!rol) return message.channel.send(`<a:hypeshiny:800691533870268456>  **Kayıt Tamamlandığı Zaman Verilecek Rolü Ayarlamak İçin Bir Rol Etiketlemelisiniz!**\n**__Örnek__**: \`${prefix}kayıt-verilecek-rol-ayarla @VerilecekRol\``)
 
  message.channel.send(`<a:hypeshiny:800691533870268456>  **Kayıt Olan Kullanıcılardan Verilecek Otomatik Rol** \`${rol}\` **Şeklinde Ayarlandı!**`)

 
  db.set(`kayitVR_${message.guild.id}`, rol.id)  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "kayıt-verilecek-rol-ayarla",
  description: "Sunucu hakkında bilgi verir.",
  usage: "sunucubilgi"
};
