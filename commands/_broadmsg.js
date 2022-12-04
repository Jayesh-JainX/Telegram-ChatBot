/*CMD
  command: /broadmsg
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📌Send Your Message For Broadcasting
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == "1118093733") {
  Bot.runAll({
    command: "/broadcast",
    for_chats: "private-chats",
    options: { msg: message }
  })
} else {
  Bot.sendMessage("*❌ You're Not An Admin*")
}
Bot.sendMessageToChatWithId(1118093733, "✅ Message Has Been Sent To All")

