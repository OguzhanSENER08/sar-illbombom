const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const DarkCode = new Discord.MessageEmbed()

             .setColor('')
              .setTitle(`Yardım-Menusu`)
             .setAuthor(`ArtoxMC Yardım Listesi`, client.user.avatarURL()) 
             .setThumbnail(client.user.avatarURL())
             .addField(` **${prefix}aduketçek**`,`Etiketlediğiniz kişiye aduket çekersiniz.`)
             .addField(` **${prefix}balık-tut**`,`Denizde balık tutarsınız.`)
             .addField(` **${prefix}beşlik**`, `Etiketlediğiniz kişiyle beşlik çakarsınız.`)
             .addField(` **${prefix}ara155**`, `Polisi aramanıza yarar.`)
             .addField(` **${prefix}efkarım**` , `Şu anda olan efkarınızı ölçersiniz.`)
             .addField(` **${prefix}ejderha-yazı**`, `Ejderha temalı logo üretirsiniz.`)
             .addField(` **${prefix}espri**`, `Bot sizin için espri yapar.`)
             .addField(` **${prefix}hesapla**`, `Belirttiğiniz matematik işlemini bot yapar.`)
             .addField(` **${prefix}kralol**`, `Kral olmanıza yarar.`)
             .addField(` **${prefix}tokat**`, `Etiketlediğiniz kişiyi tokatlarsınız.`)
             .addField(` **${prefix}yılbaşı**`, `Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.`)
             .addField(` **${prefix}öp**`, `Etiketlediğiniz kişiyi öpmenize yarar.`)
             .addField(` **${prefix}şekerye**`, `Bot sizin için espri yapar.`)
             .addField(` **${prefix}mcbaşarım**`, `Bot size minecraft başarımı verir.`)
             .addField(` **${prefix}adamasmaca**`, `Bot sizele adam asmaca oyununu oynar.`)
             .addField(` **${prefix}avatar**`, `Bot size etiketlediğiniz kişinin avatarını atar.`)
             .addField(` **${prefix}dans**`, `Bot sizele dans eder .`)
             .addField(` **${prefix}oylama**`, `Bot size oylama sunar.`)
             .addField(` **${prefix}ping**`, `Bot size kendi pingini gösterir.`)
             .addField(` **${prefix}slots**`, `Bot size slots oyununu oynatır.`)
             .addField(` **${prefix}banneryazı**`, `Bot size banner yapar`)
             .addField(` **${prefix}taksimdayı**`, `Bot size Taksim Dayı resmi atar`)
             .addField(` **${prefix}token**`, `Bot size tokenini atar`)
             .addField(` **${prefix}istatistik**`, `Bot size istatistiklerini atar`)
             .addField(` **${prefix}davet**`, `Bot size davet linkini atar`)
             .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
            
        return message.channel.send(DarkCode);
}

exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['y'],
    permLevel : 0
}

exports.help = {
    name : 'yardım',
    description : 'Komut Gösterir atar',
    usage : 'yardım'
}