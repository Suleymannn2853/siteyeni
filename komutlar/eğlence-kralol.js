const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message, params) => {

if (!message.guild) { 

const EmbedFwhyCode = new Discord.MessageEmbed()

      .setColor("BLUE")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**","----------------------------------------------------------");

return message.author.send(EmbedFwhyCode);

  }

if (message.channel.type !== "dm") {

const EmbedFwhyCode = new Discord.MessageEmbed()

      .setAuthor(message.author.username + " Artık Kral Oldun!!!")
      .setColor("BLUE")
      .setTimestamp()
      .setDescription("")
      .setURL("https://media.giphy.com/media/F0uvYzyr2a7Li/giphy.gif")
      .setImage(`https://media.giphy.com/media/F0uvYzyr2a7Li/giphy.gif`);

return message.channel.send(EmbedFwhyCode);
  }
};
//FwhyCode
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kral-ol"],
  permLevel: 0
};

exports.help = {
  name: "kralol",
  description: "kralol",
  usage: "kralol"
};