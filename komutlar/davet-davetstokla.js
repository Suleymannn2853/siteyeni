const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "s!";

  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(`<a:tik:803228415171362816> Davetleriniz stoklandı!`)
  .setFooter(bot.user.username, bot.user.avatarURL())
  message.channel.send(embed);
};

module.exports.conf = {
  aliases: ["davetstokla", "davet-stokla"],
  permLevel: 0,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-stokla",
  description: "davet-stokla",
  usage: "davet-stokla"
};
