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
		const succesDie = findSuccessDie(amount)

		const emptyField = {
			name: '\u200b',
			value: '\u200b',
			inline: true,
		};

		let i = 0;

		for (i; i < amount; i++) {
			if (i === succesDie) {
				fields.push({
					name: '**Success**',
					value: `\`\`\`yaml\n${parseInt(diceRolls[i]) + modifier}\n\`\`\``,
					inline: true,
				});
			} else {
				fields.push({
					name: `**Skill Die**`,
					value: `\`\`\`\n${parseInt(diceRolls[i]) + modifier}\n\`\`\``,
					inline: true,
				});
			};
		};

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

		if (amount < 3) {
			while (i !== 3) {
				fields.push(emptyField);
				i++;
			}
		} else if (amount < 6 && amount > 3) {
			while (i !== 6){
				fields.push(emptyField);
				i++;
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

function findSuccessDie(amount) {
	let succesDieIndex = 0;
	if (amount > 1) {
		succesDieIndex = Math.floor(Math.random() * amount)	
	} 
	return succesDieIndex;
}

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
