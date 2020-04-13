module.exports = {
	name: 'roll',
	cooldown: 5,
	args: true,
	usage: '<amount of dice> <modifier>',
	description: 'Roll your dice!',
	execute(message, args) {
		const amount = parseInt(args[0]);

		if(amount > 6 || amount < 1) {
			return message.reply('You need to input a number between 1 and 6 for the amount of dice');
		}
		const modifier = parseInt(args[1]) || 0;
		const diceRolls = roll(amount);
		const fields = [];

		fields.push({
			name: '**Success**',
			value: `\`\`\`yaml\n${parseInt(diceRolls[0]) + modifier}\n\`\`\``,
			inline: true,
		}, {
			name: '\u200b',
			value: '\u200b',
			inline: true,
		}, {
			name: '\u200b',
			value: '\u200b',
			inline: true,
		});

		if (diceRolls.length > 1) {
			let i;
			for(i = 1; i < diceRolls.length; i++) {
				fields.push({
					name: `**Skill Die ${i}**`,
					value: `\`\`\`\n${parseInt(diceRolls[i]) + modifier}\n\`\`\``,
					inline: true,
				});
			}

			if(diceRolls.length < 4) {
				while(i !== 4) {
					fields.push({
						name: '\u200b',
						value: '\u200b',
						inline: true,
					});
					i++;
				}
			}
			else if(diceRolls.length > 4) {
				while(i !== 7) {
					fields.push({
						name: '\u200b',
						value: '\u200b',
						inline: true,
					});
					i++;
				}
			}
		}

		const diceEmbed = {
			color: 0x0099ff,
			title: `Rolled ${args[0]} dice with a modifer of ${modifier}`,
			fields: fields,
		};

		message.reply({ embed: diceEmbed });

	},
};

function rollDie() {
	return 1 + Math.floor(Math.random() * 10);
}

function roll(amount) {
	let i;
	const rolls = [];
	for (i = 0; i < amount; i++) {
		rolls.push(rollDie());
	}
	return rolls;
}