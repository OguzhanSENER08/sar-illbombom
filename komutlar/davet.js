const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const motion = new Discord.MessageEmbed()
    .setColor("#00ee00")
    .setAuthor(`ArtoxMC`, client.user.avatarURL)
    .addField(
      `> Botumuzu Davet Etmek isterseniz`,
      `[ArtoxMC](kisa.link/Op1m)`
      `[Artox](kisa.link/OxQX)`
    );
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "",
  usage: "!davet"
};