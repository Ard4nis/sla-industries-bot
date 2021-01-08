# sla-industries-bot
Used for rolling dice for SLA Industries 2nd Edition via Discord.

Node.JS is required for this bot to work.

### Environment Variables
Add a config.json file to the base directory that contains the following data:

```
{
  "prefix": "YOUR_PREFERRED_PREFIX",
  "token": "YOUR_DISCORD_TOKEN"
}
```

If you do not know what your discord token is go here [DiscordJS](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).
This is also where you can see how to authorize your bot and attach it to your server.

This [page](https://discordapi.com/permissions.html) will also be useful in helping you generate the invite link

### Files
Included in this repo are all the character sheets and the quick reference as individual PDFs and the BPN is included as a high quality .png

### Commands
To use the commands you simply start up the bot with node . in your terminal and type a message in your server with your prefix and one of the following commands:
```
'help'
    description: 'List all of my commands or info about a specific command.'
    aliases: [ 'commands' ]
    usage: '[command name]'
    cooldown: 5
     
'roll'
    cooldown: 5,
    usage: '<amount of dice> <modifier>',
    description: 'Roll your dice!',
```
