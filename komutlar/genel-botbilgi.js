const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTimestamp()
    .setFooter("© 2020 SaturnBot", client.user.avatarURL())
    .addField("<a:emoji:806093354084728852> » **Botun Sahibi**", "<@780135880542650390>")
    .addField("<a:emoji:806093744633806918> » **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("<a:emoji:806093793639530497> » **Sunucular**", client.guilds.cache.size.toLocaleString(), true)
    .addField("<a:emoji:806093978331906048> » **Kanallar**", client.channels.cache.size.toLocaleString(), true)
    .addField("<:js:808669551344484362> » **Discord.JS sürüm**", "v" + Discord.version, true)
    .addField("<:nodejs:808668155660599316> » **Node.JS sürüm**", `${process.version}`, true)
    .addField("<:windows10:808669010501173248> » **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)
    .addField("<a:emoji:806093603008675890> » **Bit**", `\`${os.arch()}\``, true)
    .addField("<:linux:810236249138659388> » **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)
    .addField("**» Bot Davet**"," [Davet Et](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&scope=bot&permissions=8)");
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "botbilgi",
  description: "Botun istatistiklerini gösterir",
  usage: "istatistik"
};
