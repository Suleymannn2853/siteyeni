const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
)
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("idle");
  var oyun = [
`✨ Yardım almak için | s!yardım`,
`🚀 Yeni Özellikler İçin | s!yardım`,
`🔔 Yenilenen Tasarımı İle`,
`⚡️ Botu eklemek için | s!davet`,
`🌟 Prefix ayarlamak için | YAKINDA`
  ];

  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};
