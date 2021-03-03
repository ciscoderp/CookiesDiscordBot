require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const prefix = process.env.PREFIX;
const fs = require('fs');
const memberCounter = require('./counters/member-counter');
const moment = require('moment');

let date = moment().format("MM/DD/YY");
let time = moment().format("hh:mm:ss A");


//colors list
let Reset = "\x1b[0m";
let Bright = "\x1b[1m";
let Dim = "\x1b[2m";
let Underscore = "\x1b[4m";
let Blink = "\x1b[5m";
let Reverse = "\x1b[7m";
let Hidden = "\x1b[8m";
let FgBlack = "\x1b[30m";
let FgRed = "\x1b[31m";
let FgGreen = "\x1b[32m";
let FgYellow = "\x1b[33m";
let FgBlue = "\x1b[34m";
let FgMagenta = "\x1b[35m";
let FgCyan = "\x1b[36m";
let FgWhite = "\x1b[37m";





client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(FgRed + 'bot is online!');
    memberCounter(client);
    console.log(Reset);
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    let wholecmd = args.join(' ');
    let user = message.author.id;
    let name = message.author.tag;


    console.log(`${FgCyan}\"${command} ${wholecmd}\" ${FgYellow}was run by ${FgRed} ${name} ${FgYellow}[${FgRed}${user}${FgYellow}] at ${FgGreen} ${time} ${FgYellow}on ${FgGreen}${date}.${Reset}`);
    let CommandSync = "USER: " + name + " [" + user + "] ran command " + command + wholecmd + " on " + date + " at " + time;
    
    var logStream = fs.createWriteStream('log.log', {flags: 'a'});
    logStream.write(CommandSync);
    logStream.end('\n');


    switch (command) {
        case 'ping':
            client.commands.get('ping').execute(message, args, Discord, client);
            //console.log('\x1b[35m', 'ping ' + user + ' ['+name+']');
            break;
        case 'test':
            client.commands.get('test').execute(message, args, Discord, client);
            //console.log('\x1b[35m', 'test by ' + user + ' ['+name+']');
            break;
        case 'hs':
            client.commands.get('hs').execute(message, args, Discord, client);
            //console.log('\x1b[35m', 'Hs Ran by ' + user + ' ['+name+']');
            break;
        case 'hotzone':
            client.commands.get('hotzone').execute(message, args, Discord, client);
            //console.log('\x1b[35m', 'Hotzone Ran by ' + user + ' ['+name+']');
            break;
        case 'owner':
            client.commands.get('owner').execute(message, args, Discord, client);
            //console.log('\x1b[35m', 'Owner Ran by ' + user + ' ['+name+']');
            break;
        case 'update':
            client.commands.get('update').execute(message, args, Discord, client);
            break;
        case 'clear':
            client.commands.get('clear').execute(message, args, Discord, client);
            break;
        default:
            //console.log('\x1b[31m', 'Invalid Command ' + user + ' ['+name+']'+ command);
            break;


    }
});

/**
client.on('messageReactionAdd', function(reaction, user) {
 
});*/

client.login(process.env.TOKEN);
