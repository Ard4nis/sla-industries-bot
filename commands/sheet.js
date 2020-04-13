const fs = require('fs');
const sheetFiles = fs.readdirSync('./SLA Industries/Sheets').filter(file => file.endsWith('.pdf'));
const sheets = [];

for (const file of sheetFiles) {
	const name = file.replace('.pdf', '');
	sheets.push(name);
}

module.exports = {
	name: 'sheet',
	description: 'Returns the character sheet for the specific character from the Quick Start Game',
	usage: `<character name>\nThe following names are usable:\n${sheets.join(', ')}`,
	args: true,
	execute: function(message, args) {
		message.author.send(`Character Sheet for ${args[0]}`, { files: [`./SLA Industries/Sheets/${args[0]}.pdf`] });
	},
};