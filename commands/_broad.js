/*CMD
  command: /broad
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ⬇️ Select Options ⬇️
  keyboard: 📡 Send Message to All\n🎆 Send Photo To All
  aliases: 
CMD*/

if(message == "📡 Send Message to All"){
Bot.runCommand("/broadmsg")
} else {
if(message == "🎆 Send Photo To All")
Bot.runCommand("/broadpic")
}
