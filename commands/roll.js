module.exports = {
	name: 'roll',
	cooldown: 5,
	args: true,
	usage: '<amount of dice> <modifier>',
	description: 'Roll your dice!',
	execute(message, args) {
		const amount = parseInt(args[0]);

		if(amount > 6) {
			return message.reply('You need to input a number between 1 and 6 for the amount of dice');
		}
		const modifier = parseInt(args[1]) || 0;
		const diceRolls = roll(amount);
		const fields = [];

		fields.push({
			name: '**Success Die**',
			value: `Dice: ${diceRolls[0]}\nModifier: ${modifier}\nResult: **${parseInt(diceRolls[0]) + modifier}**`,
		});

		if (diceRolls.length > 1) {
			let i;
			for(i = 1; i < diceRolls.length; i++) {
				fields.push({
					name: `Skill Die ${i}`,
					value: `Dice: ${diceRolls[i]}\nModifier: ${modifier}\nResult: **${parseInt(diceRolls[i]) + modifier}**`,
					inline: true,
				});
			}
		}
		const diceEmbed = {
			color: 0x0099ff,
			title: `Rolled ${args[0]} dice with a modifer of ${modifier}`,
			fields: fields,
			timestamp: new Date(),
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