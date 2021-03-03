module.exports = async (client) => {
    const guild = client.guilds.cache.get('GUILD ID HERE');
    let FgRed = "\x1b[31m";
    let FgGreen = "\x1b[32m";
    let Reset = "\x1b[0m";


    setInterval(() => {
        const memberCount = guild.memberCount;

        const channel = guild.channels.cache.get('CHANNEL ID HERE');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log(`${FgRed}Member Count is now: ${FgGreen}${memberCount.toLocaleString()} ${Reset}`);
    }, 600000);
}
