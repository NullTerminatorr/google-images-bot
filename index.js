// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');
const GoogleImages = require('google-images');
 
const google = new GoogleImages('YOUR CSE ID', 'YOUR API KEY');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'search') {
		query = interaction.options.getString('input');
		google.search(query)
		.then(images => {
			const random_idx = Math.floor(Math.random() * images.length);
			interaction.reply(images[random_idx].url); // random image from result
		});
	}
});

// Login to Discord with your client's token
client.login(token);
