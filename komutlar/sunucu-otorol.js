const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {

  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.discordapp.com/avatars/802895068074999859/2360f2e3b217115388d7d054c479a7e9.webp').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}otorol\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));
  if(!message.mentions.roles.first()) return message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setTitle('Bir hata oldu!').setDescription('Bir rol etiketlemeyi unuttunuz.'));
  let mentionRole = message.mentions.roles.first();
  data.set(`oto.role.${message.guild.id}`, mentionRole.id);
  message.channel.send(new Discord.MessageEmbed().setTitle('İşte bu kadar!').setDescription(`Sunucuya katılan üyeler de kullanılacak: ${mentionRole} rolü olarak seçtiniz.  `));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'otorol'
};