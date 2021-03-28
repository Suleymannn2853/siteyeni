const Discord = require("discord.js");
const request = require("request");
var dcsport = 25565; //DCS Ekibi

exports.run = (client, message, args) => {
  var dcsurl = "http://mcapi.us/server/status?ip=" + args[0] + "&port=" + dcsport;
  let dcsreason = args.slice(0).join(" ");
  if (!dcsreason) return message.reply("Bir IP Girmelisin!");
  request(dcsurl, function(err, response, body) {
    if (err) {
      console.log(err);
      return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("⚠ HATA")
          .addField(
            "Sunucu Bilgileri Alınırken Beklenmedik bir Hatayla Karşılaştık!"
          )
          .setThumbnail(
            "https://cdn.pixabay.com/photo/2013/07/12/19/25/minecraft-154749_960_720.png"
          )
          .setAuthor("Saturn Bot")
          .setFooter(message.author.name)
          .setColor("GREEN")
          .setTimestamp()
      ); //DCS Ekibi
    }
    body = JSON.parse(body);
    var status = "**⚠ UYARI ⚠\n\n__" + dcsreason + "__ Bu Sunucu Yok veya `Offline`**";
    if (body.online) {
      status =
        "**• Sunucu Adı\n`" +
        dcsreason +
        "`\n• Sunucu Durumu\n`Online`" +
        "\n• Sunucu Versiyonu\n`" +
        body.server.name +
        "`\n• Aktif Oyuncu\n`" +
        body.players.now +
        "`\n• Max Oyuncu\n`" +
        body.players.max +
        "`\n• Sunucu Açıklaması\n`" +
        body.motd +
        "`**";
    } else {
      status += "\n\n**Şuanda Sunucu Boş**";
    }

    message.channel.send(
      new Discord.MessageEmbed()
        .setDescription(status)
        .setThumbnail(`https://mcapi.ca/query/${dcsreason}:${dcsport}/icon`)
        .setColor("GREEM")
      .setFooter("SaturnBot")
    );
  });
}; //DCS Ekibi

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mc-server", "mc"],
  permLevel: 0
};

exports.help = {
  name: "mc-sunucu",
  description: "Minecraft Sunucu Bilgisini Verir!",
  usage: "mc-sunucu<sunucu ıp>"
};