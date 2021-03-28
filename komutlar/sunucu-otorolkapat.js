const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/avatars/802895068074999859/2360f2e3b217115388d7d054c479a7e9.webp').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}otorol-kapat\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));

  data.delete(`oto.role.${message.guild.id}`);
  message.channel.send(new Discord.MessageEmbed().setTitle('İşte bu kadar!').setDescription('Sunucuya katılan üyeler de kullanılacak rol kapatıldı.'));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["otorolkapat"],
  permLevel: 0
}

exports.help = {
  name: 'otorol-kapat'
};