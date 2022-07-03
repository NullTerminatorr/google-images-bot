const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, token } = require('./config.json');

const commands = [];

const data = new SlashCommandBuilder()
	.setName('search')
	.setDescription('Search web for images!')
	.addStringOption(option =>
		option.setName('input')
			.setDescription('What to search for')
			.setRequired(true));

commands.push(data.toJSON())

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);