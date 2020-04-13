# sla-industries-bot
Used for running the Quick Start for SLA Industries 2nd Edition via Discord.

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
'bpn'
    description: 'The BPN for the Quick Start Game'

'help'
    description: 'List all of my commands or info about a specific command.'
    aliases: [ 'commands' ]
    usage: '[command name]'
    cooldown: 5
 
'prune'
    aliases: [ 'delete', 'clear' ],
    description: 'Delete {0} amount of messages up to 100',
    
'quick'
    description: 'The Quick Reference from the Quick Start Game',
    
'roll'
    cooldown: 5,
    usage: '<amount of dice> <modifier>',
    description: 'Roll your dice!',
    
'sheet'
    description: 'Returns the character sheet for the specific character from the Quick Start Game',
    usage: [ 'character name' ]
        The following names are usable:     
        Dru, Gawl, Opal, Sass, Tammy
```