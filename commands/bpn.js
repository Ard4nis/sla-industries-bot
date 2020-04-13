module.exports = {
	name: 'bpn',
	description: 'The BPN for the Quick Start Game',
	execute: function(message) {
		const bpnEmbed = {
			color: 0x0000FF,
			title: 'BPN',
			image: {
				url: 'attachment://BPN.png',
			},
		};
		message.channel.send({ files: ['./SLA Industries/BPN.png'], embed: bpnEmbed });
	},
};