const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");


client.on("ready", () => {
    client.user.setActivity('Paulé faire joujou avec moi', {
        type: 'Watching',
    });
    console.log("Le message qui confirme que t'as démarré ton bot");
});

client.on("message", (message) => {
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    if (message.content.startsWith(config.prefix + "ping")) {
        message.channel.send("Pong !")
    }
    if (message.content.startsWith(config.prefix + "prefix")) {
        // Gets the prefix from the command
        let newPrefix = message.content.split(" ").slice(1, 2)[0];
        // change the configuration in memory
        config.prefix = newPrefix;

        // Now we have to save the file.
        fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
    }
    if (command === "salut") {
        let [age, sexe, ville] = args;
        message.reply(`Salut ${message.author.username}, tu as ${age} ans, tu es un ${sexe} qui vient de ${ville}`);
    }
    if (command === "kicka") {
        if (message.member.hasPermission("KICK_MEMBERS")) {
            let member = message.mentions.members.first();
            member.kick()
                .then(console.log)
                .catch(console.error);
            message.channel.send(`J'ai kick ce con de ${member}`)
        }
        else {
            message.channel.send("T'as pas de perms débile")
        }
    }
    if (command === "kick") {
        let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
        if (user === message.author) {
            message.reply("merci de mentionner un utilisateur !")
        }
        else {
            message.reply(`vous avez kick ${user} avec succès !`)
        }

    }
    if (command === "ban") {
        let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
        if (user === message.author) {
            message.reply("merci de mentionner un utilisateur !")
        }
        else {
            message.reply(`vous avez ban ${user} avec succès !`)
        }

    }
    if (command === "mute") {
        let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
        if (user === message.author) {
            message.reply("merci de mentionner un utilisateur !")
        }
        else {
            message.reply(`vous avez mute ${user} avec succès !`)
        }

    }
    if (command === 'emid') {
        let emo = args.join(" ")
        message.guild.emojis.name("440249550121205760")
        console.log(emo)
    }
    if (command === "say") {
        if (!args[0]) {
            message.channel.send("Dis-moi ce que je dois répéter :face_palm::skin-tone-3:")
        }
        else {
            const sayMessage = args.join(" ");
            message.delete().catch();
            message.channel.send(sayMessage);
        }

    }
    if (command === "time") {
        message.reply("Euh...")
        setTimeout(() => {
            message.reply("...5 secondes plus tard...")
        }, 5000)
    }
    if (command === "nombre") {
        const sayMessage = args.join(" ");
        console.log(sayMessage)
        var vm = parseInt(sayMessage)
        console.log(vm)
        if (vm !== Number) {
            message.reply('Ceci est un nombre')
            console.log('Int')
        }
        else {
            message.channel.send("Ceci est un message");
        }
    }
    if (command === "damso") {
        message.channel.send(`Mort est son avenir proche\nLes anges de l'enfer l'escortent\nLe hashtag #Vie tient peut-être d'elle\nDe son cou pendu à la corde\nTrop jeune pour comprendre l'impact des mots\nJ'm'en fous de c'qu'elle veut tant que j'ai ce qu'il me faut\n13 ans déjà mon premier rapport\nDepuis mon cœur a fermé la porte\nAussi bizarre que cela puisse paraître\nAprès l'avoir ken' j'voulais qu'elle disparaisse\nElle voulait qu'on s'aime mais je n'voulais pas\nJ'étais l'dernier à faire le premier pas\nPlus les années passent et plus lourde est la tâche\nJ'la trouvais pas bonne et j'voulais qu'elle le sache\nDans la méchanceté j'me sentais si bien\nJ'étais loin d'imaginer son quotidien\nDes larmes séchées sur ses poèmes\nQu'elle m'écrivait en recherchant plaisir clitoridien\nFaux-cul j'étais comme un "Allez l'OM"\nScandé par un supporter parisien\nLe jour de son suicide je n'en revenais pas\nLa veille elle voulait que j'la prenne dans mes bras\nMais j'suis pas doué dès qu'on s'éloigne des draps\nJ'suis plus dans le "suce-moi et concentre-toi"\nDernier message elle parle au répondeur\n"Allo Damso j'vais faire sonner mon heure"\nJ'décrochais pas j'voulais pas faire d'erreur\nQu'elle me casse les couilles c'est ce don't j'avais peur\nC'était la dernière fois que j'entendais ses pleurs\nElle était morte et pourtant je lui ai dit "À tout à l'heure"`)
    }
    if (command === "create") {
        message.guild.createChannel("Lol", "text")
    }
    if (command === "code") {
        message.channel.send('```js\n  if(command === "say") {\n        const sayMessage = args.join(" ");\n        message.delete().catch(); \n        message.channel.send(sayMessage);\n  }```')
    }
    if (command === "help") {
        message.channel.send("T'es quand même particulièrement con toi à avoir besoin d'une commande d'aide !")
    }
    if (command === "killa") {
        let sayMessage = args.join(" ");
        message.mentions.members.first();
        message.channel.send(sayMessage);
        message.channel.send(sayMessage);
        message.channel.send(sayMessage);
        message.channel.send(sayMessage);
        message.channel.send(sayMessage);
        message.channel.send(sayMessage);
        message.channel.send(sayMessage);
        message.channel.send(sayMessage);
        message.channel.send(sayMessage);
        message.channel.send('https://www.tenor.co/y7qq.gif');
    }
    if (command === 'avatar') {
        let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
        let av = user.avatarURL
        let embed = {
            color: Math.floor(Math.random() * 16777214) + 1,
            description: "Voici ton avatar, " + user.username,
            image: { url: av }
        }
        message.channel.send("", { embed });
    }
    if (command === 'id') {
        let user = message.mentions.users.first() ? message.mentions.users.first() : message.author
        let idus = user.id
        message.reply(`voici l'id de ${user.username}#${user.discriminator} : ${idus}`)
    }
    if (command === "disconnecta") {
        console.log('commande disco')
        if (message.member.voiceChannel) {
            console.log("Oui")
            client.voiceChannel.disconnect()
        }
    }
    if (command === "connect") {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.join()
                .then(connection => {
                    message.channel.send('Connecté');
                })
        }
    }
    if (command === "disconnect") {
        if (message.member.voiceChannel) {
            message.member.voiceChannel.connection.disconnect();
            message.channel.send('Déonnecté');
            console.log('Test')
        }
    }
    if (command === 'bac') {
        message.channel.send('USELERITÉ DETECTÉE !!! NIQUE TA MÈRE LE BAC\nhttps://www.tenor.co/u3vi.gif ')
    }
    if (command === "bana") {
        let member = message.mentions.members.first();
        member.ban();
    }
    if (command === "reboot") {
        if (message.author.id === '329669021043523594') {
            message.channel.send("Je reviens ^^")
            client.destroy()
            console.log('Arrêté')
            client.login(config.token)
        }
        else {
            message.channel.send("MDRRRRR t'as cru t'étais mon owner ?")
        }
    }
    if (message.content === "Itrema...") {
        message.channel.send("... un putain de connard !")
    }
    if (command === "stop") {
        if (message.author.id === '329669021043523594') {
            message.channel.send("Au dodo....... :zzz:")
            client.destroy()
            console.log('Arrêté')
        }
        else {
            message.channel.send("MDRRRRR t'as cru t'étais mon owner ?")
        }
    }
    if (command === "shrug") {
        message.delete().catch()
        message.channel.send("¯\\_(ツ)_/¯")
            .then(m => {
                setTimeout(() => {
                    m.edit("¯\\\\-(ツ)-/¯")
                        .then(ms => {
                            setTimeout(() => {
                                ms.edit("¯\\_(ツ)_/¯")
                            }, 500)
                        })
                }, 500)

            })
    }
    if (command === "type") {
        message.channel.startTyping()

        setTimeout(() => {
            message.channel.stopTyping(true);
        }, 7000)


    }
    if (command === "s") {
        message.channel.send('Test')
        setTimeout(() => {
            message.react('✅')
        }, 1000)
    }
    if ((command === "req") || (command === "request")) {
        if (message.guild.channels.exists("name", `request-${message.author.id}`)) {
            message.reply("tu as déjà un projet en cours !")
        }
        else {
            message.guild.createRole({
                name: `support-${message.author.id}`
            })
            message.channel.startTyping()
            let reason = args.slice(0).join(" ");
            setTimeout(() => {
                let rolesupport = message.guild.roles.find("name", `support-${message.author.id}`)
                message.guild.createChannel(`request-${message.author.id}`, "text", [{ deny: 1024, id: message.guild.id }, { allow: 1024, id: rolesupport.id }])
                setTimeout(() => {
                    message.member.addRole(rolesupport);
                    let cha = client.channels.find("name", `request-${message.author.id}`)
                    cha.edit({ topic: `Support ${message.author.id} :\n${reason} pour ${message.author.username}#${message.author.discriminator}` })
                    message.delete().catch()
                    message.reply(`votre requête pour ${reason} vient d'être envoyée ! Merci d'attendre en <#${cha.id}> qu'un Créateur vous réponde !`)

                }, 4000)
            }, 2000)
            message.channel.stopTyping()
            let creacha = client.channels.find("name", `créateurs`)
            creacha.send(`Nouvelle demande de serveur par ${message.author.username}#${message.author.discriminator} pour ${reason} ! Faîtes \`accept\` !`)
            let rolesupport = message.guild.roles.find("name", `support-${message.author.id}`)
            const collector = new Discord.MessageCollector(creacha, m => m.author.id === message.author.id);
            console.log(collector)
            collector.on('collect', message => {
                console.log(message)
                if (message.content === `accept`) {
                    message.channel.send("1");
                    message.member.addRole(rolesupport);
                } else if (message.content === "2") {
                    message.channel.send("2");
                }
            })
            console.log("Sorti")
        }
    }
    if (command === "requ") {
        //let [raison] = args;
        let reason = args.slice(0).join(" ");
        message.guild.createRole({
            name: `support-${message.author.id}`
        })
        console.log("Créé")
        let rolesupport = message.guild.roles.find("calculatedPosition", 1)
        message.member.addRole(rolesupport)
        message.guild.createChannel(`request-${message.author.id}`)

            .then(supportch.channel.edit({ topic: `Support ${message.author.id} :\n${reason} pour ${message.author.username}#${message.author.discriminator}` }))
        /*.then(create => message.reply(`votre requête pour ${reason} vient d'être envoyée ! Merci d'attendre en <#${clone.id}> qu'un Créateur vous réponde !`))
        .catch(console.error);*/
    }


});

client.login(config.token);