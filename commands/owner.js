require('dotenv').config();
module.exports = {
    name: 'owner',
    description: 'owner :)',
    execute(message, args, Discord, client) {
        //code here
        const OwnerID = process.env.OWNER;
        if(message.author.id === OwnerID){
            const newb = new Discord.MessageEmbed()
            .setColor("#000000")
            .setTitle("Cookies a cutie")
            .setDescription("EggsDee 👽 Cookie Eats#6779 👽");
            message.channel.send(newb);
        }else{ 
            message.reply("Only the owner of the bot can perform this action!");
        }

      
    }
}