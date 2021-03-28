const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "s!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription("<a:carpi:806094433120288798>``` Ne yazık ki bu komutu kullanmaya yetkin yok.```")
      .setColor("BLUE");

    message.channel.send(embed);
    return;
  }

  let u = message.mentions.users.first();
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("<a:B_Igne:810229327056601118> Lütfen daveti sıfırlanacak kişiyi etiketleyiniz!")
        .setColor("BLUE")
        .setFooter(bot.user.username, bot.user.avatarURL())
    );
  }

  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(
      `<a:soru:810233436756508672> ${u} Adlı şahsın davetlerinin sıfırlanmasını onaylıyor musunuz?`
    )
    .setFooter(bot.user.username, bot.user.avatarURL());
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["✅"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("<a:ReddetmekGif:810229212807430225> İşlem iptal oldu!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "✅") {
        message.channel.send(
          `<a:OnaylamakGif:810228965766725724> İşlem onaylandı! ${u} adlı şahsın davetleri sıfırlandı!`
        );

        db.delete(`davet_${u.id}_${message.guild.id}`);
      }
    });
  });
};

module.exports.conf = {
  aliases: ["davetsıfırla","davet-sıfırla"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "davet-sıfırla",
  description: "davet-sıfırla",
  usage: "davet-sıfırla"
};
