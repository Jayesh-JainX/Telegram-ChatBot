/*CMD
  command: /broad
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ā¬ļø Select Options ā¬ļø
  keyboard: š” Send Message to All\nš Send Photo To All
  aliases: 
CMD*/

if(message == "š” Send Message to All"){
Bot.runCommand("/broadmsg")
} else {
if(message == "š Send Photo To All")
Bot.runCommand("/broadpic")
}
