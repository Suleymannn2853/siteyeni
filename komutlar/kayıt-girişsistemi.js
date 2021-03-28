const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 

  const fynx = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix   
  
  let mesaj = args.slice(0).join(' ');
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hypeshiny:800691533870268456> **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  if (mesaj.length <= 3) {
return message.channel.send(`<a:hypeshiny:800691533870268456>  **Giriş Sistemini Ayarlayabilmek İçin En Az 3 Karakter Belirtebilirsin.**\n **__Örnek__**: ${prefix}giriş-sistemi Hoşgeldin -uye- Kayıt Olmak İçin \`${prefix}kayıt İsim Yaş\` Yazabilirsin.`) 
}

db.set(`kayitGM_${message.guild.id}`, mesaj)
  message.channel.send(`<a:hypeshiny:800691533870268456> **Sunucuya Yeni Üye Katılınca** \`${mesaj}\` **Kayıt Kanalına Bu Şekilde Karşılama Mesajı Atılacaktır.**`)
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['girişsistemi'],
permLevel: 0
};

exports.help = {
name: 'giriş-sistemi',
description: 'Botun pingini gösterir',
usage: 'ping' };

