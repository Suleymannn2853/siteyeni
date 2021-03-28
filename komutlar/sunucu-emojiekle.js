const Discord = require('discord.js');
exports.run = function(client, message, args) {
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "**Yönetici**" yetkisine sahip olmalısın.`);
  let guild = message.guild
  let link = args[0]
  let ad = args[1]
  if (!link) return message.channel.send(`**Bir Emoji Linki Belirtmelisin.**`)
  if (!ad) return message.channel.send(`**Bir Emoji İsmi Yazmalısın.**`)
  
  guild.emojis.create(link, ad)
    .then(emoji => message.channel.send(`**${emoji.name} Adında Emoji Oluşturuldu.** **Yüklenen Emoji : ${emoji}**`))
   
  
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emoji-ekle','emojiekle','emoji-yükle'],
  permLevel: 4,
  kategori: "moderasyon"
};
exports.help = {
  name: 'emojiyükle',
  description: 'Belirttiğiniz link ve isimde emoji yükler.',
  usage: 'emoji-yükle <link> - <isim>'
};