const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const tarpin = "tarpin";
const tarpinMajed = "Tarpin";


client.on("ready", () => {
    client.user.setActivity('Enevevet se suicider suite à son Bac de Français ❤', {
        type: 'Watching',
    });
    console.log("Ready NVV !!!");
});

client.on("message", (message) => {
    /*if (message.author.id === "272676235946098688") {
        message.channel.send("Mouais")
    }*/
    if (message.content.toLowerCase() === "tarpin") {
        message.channel.send('Good')
    }
    /*if (((message.toLowerCase.content.includes(tarpin))||(message.content.includes(tarpinMajed))) && (message.author.id != "441162184337391626")) {
        message.reply("sale sudiste. Arrête de dire \"tarpin\" !")
    }*/
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    if (message.content.startsWith(config.prefix + "ping")) {
        let late = Math.abs(new Date().getTime() - message.createdTimestamp)
        message.channel.send(`Pong ! ${late} ms`);
    }
    if (command === "salut") {
        let [age, sexe, ville] = args;
        message.reply(`Salut ${message.author.username}, tu as ${age} ans, tu es un ${sexe} qui vient de ${ville}`);
    }
    if (command === "kicka") {
        if (!args[0]) {
            message.channel.send("Dis-moi qui je dois kick :face_palm::skin-tone-3:")
        }
        else {
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
    }
    if ((command === "updates") || (command === "news")) {
        let upembed = {
            "embed": {
                "title": "Dernière màj :",
                "description": "18/06/2018",
                "color": Math.floor(Math.random() * 16777214) + 1,
                "footer": {
                    "icon_url": "https://images-ext-2.discordapp.net/external/yukS6J8Ni3eVSnxiz8Hm6X3lKpF_zcyeKwylzAtiEww/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/329669021043523594/d44fb06af2453336e3c52fb4921f4723.png?width=473&height=473",
                    "text": "JsTester by Enevevet#2020"
                },
                "thumbnail": {
                    "url": "https://www.iconspng.com/uploads/js/js.png"
                },
                "author": {
                    "name": "Dernières nouveautés :",
                    "url": "https://discord.gg/tvEPfjv",
                    "icon_url": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/141/construction-sign_1f6a7.png"
                },
                "fields": [
                    {
                        "name": "Ajout du `%updates`",
                        "value": "Alias `%news`, permet de voir les derniers ajouts sur le bot"
                    },
                    {
                        "name": "Ajout du `%tableflip`",
                        "value": "Alias `%tf`, envoie un tableflip animé"
                    },
                    {
                        "name": "Ajout de l'interdiction de dire \'tarpin\'",
                        "value": "Le bot vous reprendra dès que vous dire tarpin maintenant :')"
                    }

                ]
            }
        }
        message.channel.send(upembed)
    }
    if ((command === "tg") || (command === "ftg")) {
        message.channel.send("1").then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('2')
                setTimeout(() => {
                    sentMessage.edit("3")
                    setTimeout(() => {
                        sentMessage.edit("4")
                    }, 1000)
                }, 1000)
            }, 1000)
        })


    }
    if ((command === "tableflip") || (command === "tf")) {
        message.channel.send("(°-°)\\ ┳━┳").then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit('(╮°-°)╮┳━┳')
                setTimeout(() => {
                    sentMessage.edit("(╯°□°)╯    ]")
                    setTimeout(() => {
                        sentMessage.edit('(╯°□°)╯  ︵  ┻━┻')
                    }, 750)
                }, 750)
            }, 750)
        })
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
        let arg = args.join(" ")
        let emo = message.guild.emojis.find("name", `:${args}:`)
        message.reply(`<#${emo.id}> id : ${emo.id}`)
    }
    if (command === "t") {
        let idaccept = args.join(" ");
        let rolesu = message.guild.roles.find("name", `support-${idaccept}`)
        let nbrolesu = message.guild.roles.get(rolesu.id).members.size
        console.log(nbrolesu)
        let chasu = message.guild.channels.find("name", `request-${idaccept}`)
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
    if (command === "time") {        //ça tu connais
        message.reply("Euh...")     //envoie un message
        setTimeout(() => {          //indique qu'il va falloir faire le contenu de la boucle après un certain temps
            message.reply("...5 secondes plus tard...")    //contenu qu'il va falloir executer après le certain temps
        }, 5000)                                           // temps après lequel le contenu de la boucle va être executé
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
    if (command === "number") {
        let pute = args.join(" ")
        let num = parseInt(pute)
        let nidza = num + 1
        console.log(nidza)
    }
    if (message.content.startsWith("Itrema...")) {
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
        message.channel.send('✅').then(sentMessage => {
            sentMessage.react('✅');
        });

    }
    if ((command === "req") || (command === "request")) {
        if (message.guild.channels.exists("name", `request-${message.author.id}`)) { //déjà un projet
            message.reply("tu as déjà un projet en cours !")
        }
        else { //pas de projets encore
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
                    cha.send("Voici le channel où se déroulera votre rencontre et la coopération avec le créateur !\nVous pouvez dès maintenant commencer à écrire des informations ou même le lien de votre serveur pour un travail plus efficace dès la prise en charge par un créateur !").then(sentMessage => {
                        sentMessage.pin()
                    });

                }, 4000)
            }, 2000)
            message.channel.stopTyping()
            let creacha = client.channels.find("name", `créateurs`)
            creacha.send(`Nouvelle demande de serveur par ${message.author.username}#${message.author.discriminator} pour ${reason} ! Faîtes :\n\`\`\`js\n%accept ${message.author.id}\`\`\``)
            let rolesupport = message.guild.roles.find("name", `support-${message.author.id}`)
        }
    }
    if (command === "u") {
        let idaccept = args.join(" ");
        let crea = message.author.id
        let rolesu = message.guild.roles.find("name", `support-${idaccept}`)
        let nbrolesu = message.guild.roles.get(rolesu.id).members.size
        let chasu = message.guild.channels.find("name", `request-${idaccept}`)
        message.guild.member(`${idaccept}`).send(`Salut ! <@${crea}> vient d'accepter ta demande de création de serveur ! Rends-toi en ${chasu} dès maintenant !`)
        message.reply(`Done !`)
    }
    if (command === "purge") {
        let nums = args.join(" ")
        if (!args[0]) {
            message.channel.send("Merci de me dire combien de message tu veux supprimer !")
        }
        else {
            let num = parseInt(nums)
            if (num !== Number) {
                message.channel.send("Merci de rentrer un chiffre !")
            }
            else {
                let numa = num + 1
                message.channel.bulkDelete(numa)
                message.channel.send(`${num} messages supprimés !`).then(sentMessage => {
                    setTimeout(() => {
                        sentMessage.delete()
                    }, 3000)
                })


            }
        }
    }
    if (command === "accept") {
        let rolecrea = message.guild.roles.find("name", "Créateur")
        if (message.member.roles.find("name", "Créateur")) { //créa
            if (!args[0]) { //pas d'args
                message.channel.send("Dis-moi quelle affaire tu veux prendre en charge :face_palm::skin-tone-3:")
            }
            else { //args présents
                let idaccept = args.join(" ");
                let crea = message.author
                let suclient = client.users.get(`${idaccept}`)
                let rolesu = message.guild.roles.find("name", `support-${idaccept}`)
                let nbrolesu = message.guild.roles.get(rolesu.id).members.size
                let chasu = message.guild.channels.find("name", `request-${idaccept}`)
                let projcha = message.guild.channels.find("name", "projets")
                let hshake = message.guild.emojis.find("name", "hshake")
                if (message.guild.roles.exists("name", `support-${idaccept}`)) { //bon projet
                    if (nbrolesu >= 2) { //déjà qql
                        message.reply("un autre créateur a déjà pris l'affaire, désolé !")
                    }
                    else { //personne dessus
                        message.member.addRole(rolesu)
                        var embedo = {
                            "embed": {
                                "title": `Une affaire vient d'être acceptée !`,
                                "description": `Rendez-vous en ${chasu} !`,
                                "color": Math.floor(Math.random() * 16777214) + 1,
                                "footer": {
                                    "icon_url": "https://cdn.discordapp.com/emojis/453968387077570572.png?v=1",
                                    "text": "FanCreate"
                                },
                                "thumbnail": {
                                    "url": "https://cdn.discordapp.com/icons/432267428685283328/7b9d1b9b2e75b8dfe3f57c78b7f5a0ef.jpg"
                                },
                                "author": {
                                    "name": "Création de serveur :",
                                    "url": "https://discord.gg/tvEPfjv",
                                    "icon_url": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/141/construction-sign_1f6a7.png"
                                },
                                "fields": [
                                    {
                                        "name": "Client :",
                                        "value": `@${suclient.username}#${suclient.discriminator}`,
                                        "inline": true
                                    },
                                    {
                                        "name": "Créateur :",
                                        "value": `@${crea.username}#${crea.discriminator}`,
                                        "inline": true
                                    }
                                ]
                            }
                        }
                        projcha.send(embedo).then(sentMessage => {
                            sentMessage.react(hshake)
                        })
                        let embed = {
                            "embed": {
                                "title": "Votre devis de serveur vient d'être accepté !",
                                "description": `<@${crea.id}> vient d'accepter ta demande`,
                                "color": Math.floor(Math.random() * 16777214) + 1,
                                "footer": {
                                    "icon_url": "https://cdn.discordapp.com/emojis/453968387077570572.png?v=1",
                                    "text": "FanCreate"
                                },
                                "thumbnail": {
                                    "url": "https://cdn.discordapp.com/icons/432267428685283328/7b9d1b9b2e75b8dfe3f57c78b7f5a0ef.jpg"
                                },
                                "author": {
                                    "name": "Création de serveur :",
                                    "url": "https://discord.gg/tvEPfjv",
                                    "icon_url": "https://emojipedia-us.s3.amazonaws.com/thumbs/120/twitter/141/construction-sign_1f6a7.png"
                                }
                            }
                        }
                        message.guild.member(`${idaccept}`).send(embed).then(sentMessage => {
                            sentMessage.pin()
                        });
                        chasu.send(`Le projet est pris en charge par <@${crea.id}> !`).then(sentMessage => {
                            sentMessage.pin()
                        });
                    }
                }
                else { //mauvais projet
                    message.channel.send("Ce projet n'existe pas ! :face_palm::skin-tone-3:")
                }
            }
        }
        else { //pas créa
            message.channel.send("Tu n'es pas Créateur, n'essaie pas d'accepter une affaire :face_palm::skin-tone-3:")
        }
    }

});

client.login(config.token);