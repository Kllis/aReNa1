const {Client} = require("discord.js");
const bot = new Client();
const gamedig = require('gamedig');
async function online() {
	gamedig.query({type: 'csgo', host: '5.252.195.141', port: '28403'
		}).then((state) => {
			bot.user.setActivity(`🎮 Онлайн: ${state.raw.numplayers}/${state.maxplayers}`, {type: 0});
		}).catch((error) => {
			bot.user.setActivity(`🎮 Сервер offline`, {type: 0});
		});
}
bot.login("OTc0OTc3OTg1NTYyMTU3MDY2.GEHAST.yxjXDUNwCDaW9hPMYf3dmGD-vc9hl-lxEY_DLs")
bot.on('ready', async () => {
	console.log('BOT UP')
	online()
	setInterval(online, 10000)
});