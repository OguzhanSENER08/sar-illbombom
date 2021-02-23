const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

if (!message.guild) {

const EmbedFwhyCode = new Discord.MessageEmbed()//Fwhy Code

    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**","**----------------------------------------------------------**")

return message.author.send(EmbedFwhyCode); }

if (message.channel.type !== 'dm') {//Fwhy Code

const EmbedFwhyCode = new Discord.MessageEmbed()

    .setAuthor('Bak Şuan Aldın Tokenimi')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setImage(`https://cdn.discordapp.com/attachments/791232434372214795/791272351408586764/tenor.gif`)

return message.channel.send(EmbedFwhyCode);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'token',
  description: 'Botun Tokenini Alırısnız!.',
  usage: 'token'
}; 