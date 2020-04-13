module.exports = {
	name: 'quick',
	description: 'The Quick Reference from the Quick Start Game',
	execute: function(message) {
		message.author.send('Quick Reference', { files: ['./SLA Industries/Quick Reference.pdf'] });
	},
};