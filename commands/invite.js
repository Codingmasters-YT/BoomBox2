exports.run = async (client, message) => {
// at the top of your file
const Discord = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#E70000')
	.setTitle('My invite link')
	.setURL('https://discord.com/api/oauth2/authorize?client_id=897044677549760512&permissions=515433160000&scope=bot')
	.setDescription('Invite Me Today!')

message.channel.send(exampleEmbed);
}