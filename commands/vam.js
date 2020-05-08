module.exports = {
	name: 'vam',
	cooldown: 5,
	args: true,
	usage: '<amount of dice> <amount of hunger dice>',
	description: 'Roll your dice!',
	execute(message, args) {
		const regularDie = parseInt(args[0]);
		const hungerDie = parseInt(args[1]) || 0;

		if (regularDie > 10 || regularDie < 1) {
			return message.reply('You need to input a number between 1 and 10 for the amount of dice');
		}

		if (hungerDie > 5 || hungerDie < 0) {
			return message.reply('You need to input a number between 0 and 5 for the hunger dice');
		}

		const diceRolls = roll(regularDie);
		const fields = [];

		let i = 0

		if (hungerDie > 0) {
			for (i; i < hungerDie; i++) {
				fields.push({
					name: 'Hunger',
					value: `${parseInt(diceRolls[i])}`,
					inline: true,
				})
			}
		}

		if (diceRolls.length > hungerDie) {
			for (i; i < diceRolls.length; i++) {
				fields.push({
					name: 'Regular',
					value: `${parseInt(diceRolls[i])}`,
					inline: true,
				})
			}
		}

		const diceEmbed = {
			color: 0x0099ff,
			title: `Rolled ${regularDie} dice with ${hungerDie} hunger dice`,
			fields: fields,
		};
		
		message.reply({ embed: diceEmbed }
		);
	}
	
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