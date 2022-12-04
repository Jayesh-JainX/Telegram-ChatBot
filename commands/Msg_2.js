/*CMD
  command: Msg_2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ➡️ Input Your Msg Here!

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == "1118093733") {
  var tgid = options.tgid

  var msg = "⬇️ *Reply From Admin* ⬇️\n\n" + message + ""
  var button = [{ title: "📩 Msg Again 📩", command: "📞 Msg Admin" }]
  Bot.sendInlineKeyboardToChatWithId(tgid, button, msg)

  Bot.sendMessage("🎈 Message was sended!" + "\n\n✉️  /reply" + tgid)
} else {
  Bot.sendMessage("*❌ You're Not An Admin*")
}

