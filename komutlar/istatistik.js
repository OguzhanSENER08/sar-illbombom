const Discord = require("discord.js")
const fs = require("fs")
const moment = require("moment");
const os = require("os");
require("moment-duration-format");

exports.run = (client, message, args) => {
    const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
    const istatistikler = new Discord.MessageEmbed()
    .setColor("RED")
    .addField(`**» Botun Olduğu Sunucu Sayısı**`, client.guilds.cache.size, true)
    .addField(`**» Botun Kullanıcı Sayısı**`, client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("**» Botun RAM Kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)
    .addField("**» Botun Çalışma Süresi**", seksizaman, true)
    .addField('**» Botun Kütüphanesi**', `Discord.js`)
    .addField('**» Botun Discord.JS Sürümü**',Discord.version)
    .addField("**» Botun Node.JS Sürümü**", `${process.version}`, true)
    .setFooter(`${message.author.name} * Tarafından İstendi.`, message.author.avatarURL())
    return message.channel.send(istatistikler);


};


exports.conf = {
enabled: true,
guildOnly: false,
aliases: ["istatistik","i"],
permLevel: 0
};

exports.help = {
name: 'istatistik',
description: '',
usage: 'istatistik'
};