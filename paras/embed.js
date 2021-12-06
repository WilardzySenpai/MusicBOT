const { MessageEmbed } = require("discord.js");
module.exports = async (text, channel) => {
   
    let embed = new MessageEmbed()
    
    .setColor("BLUE")
  .setDescription("<a:yes:883112081614852156>" +""+ text);

    await channel.send(embed)
}