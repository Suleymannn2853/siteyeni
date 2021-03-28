const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "s!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("<a:carpi:806094433120288798>```Ne yazık ki bu komutu kullanmaya yetkin yok.```")
    .setFooter(bot.user.username, bot.user.avatarURL())
      .setColor("BLUE");

    message.channel.send(embed);
    return;
  }

  let kanal = await db.fetch(`davetkanal_${message.guild.id}`)

  if (!kanal) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("<a:B_Uyari:810228725563260949> Davet kanalı zaten ayarlanmamış!")
      .setFooter(bot.user.username, bot.user.avatarURL())
        .setColor("BLUE")
    );
  }
  db.delete(`davetkanal_${message.guild.id}`)
  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
  .setFooter(bot.user.username, bot.user.avatarURL())
    .setDescription("<a:tik:803228415171362816> Davet kanalı başarıyla sıfırlandı!");
  message.channel.send(embed);
return
  
};

module.exports.conf = {
  aliases: ["davetkanalsıfırla","davet-kanal-sıfırla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-kanal-sıfırla",
  description: "davet-kanal-sıfırla",
  usage: "davet-kanal-sıfırla"
};
