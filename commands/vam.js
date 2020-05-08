module.exports = {
	name: 'vam',
	cooldown: 5,
	args: true,
	usage: '<amount of dice> <amount of hunger dice>',
	description: 'Roll your dice!',
	execute(message, args) {
		let amount = parseInt(args[0]) || 1;
		let hungerDie = parseInt(args[1]) || 0;

		if (amount > 10 || amount < 1) {
			return message.reply('You need to input a number between 1 and 10 for the amount of dice');
		}

		if (hungerDie > 5 || hungerDie < 0) {
			return message.reply('You need to input a number between 0 and 5 for the hunger dice');
		}

		if (amount < hungerDie) {
			hungerDie = amount
		}

		const diceRolls = roll(amount);
		const fields = [];
		const hungerDiceIndexes = findHungerDie(hungerDie, amount)

		const emptyField = {
			name: '\u200b',
			value: '\u200b',
			inline: true,
		};

		let i = 0

		for (i; i < amount; i++) {
			if (hungerDiceIndexes.includes(i)) {
				fields.push({
					name: '**Hunger**',
					value: `\`\`\`md\n${parseInt(diceRolls[i])}. \n\`\`\``,
					inline: true,
				});
			} else if (amount > hungerDie) {
				fields.push({
					name: '**Regular**',
					value: `\`\`\`yaml\n${parseInt(diceRolls[i])}. \n\`\`\``,
					inline: true,
				});
			};
		};

		if (amount < 3) {
			while (i !== 3) {
				fields.push(emptyField);
				i++;
			}
		} else if (amount < 6 && amount > 3) {
			while (i !== 6) {
				fields.push(emptyField);
				i++;
			}
		} else if (amount < 9 && amount > 6) {
			while (i !== 9) {
				fields.push(emptyField);
				console.log(fields)
				i++;
			}
		} else if (amount === 10) {
			while (i !== 12) {
				fields.push(emptyField)
				i++;
			}
		}

		const diceEmbed = {
			color: 0x0099ff,
			title: `Rolled ${amount} dice with ${hungerDie} hunger dice`,
			fields: fields,
		};

		message.reply({ embed: diceEmbed }
		);
	}

}

function findHungerDie(amount, total) {
	let hungerDice = [];

	if (amount > 0) {
		for (let i = 0; i < amount; i++) {
			let index = Math.floor(Math.random() * total);
			while (hungerDice.includes(index)) {
				index = Math.floor(Math.random() * total);
			}
			hungerDice.push(index);
		};
	};
	return hungerDice;
};

function rollDie() {
	return 1 + Math.floor(Math.random() * 10);
};

function roll(amount) {
	let i;
	const rolls = [];
	for (i = 0; i < amount; i++) {
		rolls.push(rollDie());
	};
	return rolls;
};