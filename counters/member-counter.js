module.exports = async (client) => {
    const guild = client.guilds.cache.get('810942568308146186');
    let FgRed = "\x1b[31m";
    let FgGreen = "\x1b[32m";
    let Reset = "\x1b[0m";


    setInterval(() => {
        const memberCount = guild.memberCount;

        const channel = guild.channels.cache.get('810962591182094346');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log(`${FgRed}Member Count is now: ${FgGreen}${memberCount.toLocaleString()} ${Reset}`);
    }, 600000);
}