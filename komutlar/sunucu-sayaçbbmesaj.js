
const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

const fynx = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`  **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('  **Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin!**\n `**__Örnek__**: ${prefix}sayaç-bb-msj -uyetag-, Sunucumuzdan Ayrıldı, -hedefuye- Kişiye Ulaşabilmek İçin -kalanuye- Kişi Kaldı. **-uyesayisi-** Kişiyiz.`')
  
 message.channel.send(' **Sayaç Görüşürüz mesajı**\n `'+mesaj+'`\n **Olarak ayarlandı!**') 
 db.set(`sayacBB_${message.guild.id}`, mesaj)  
  
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['sayaçbbmesaj'],
    permLevel: 0
}

exports.help = {
    name: 'sayaç-bb-mesaj',
    description: 'Sunucuya giren kullanıcıya seçtiğiniz rolü otomatik verir.',
    usage: 'otorol <@rol>'
}
