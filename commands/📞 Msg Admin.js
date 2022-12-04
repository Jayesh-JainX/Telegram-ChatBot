/*CMD
  command: 📞 Msg Admin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📞 Send Your Msg To Admin!
  keyboard: 
  aliases: 
CMD*/

var admin_chat = "1118093733"
if (!admin_chat) {
  Bot.sendMessage("Sorry. Bot have not admin now")
  return // exit
}
let msg = message
if (msg.length < 1) {
  Bot.sendMessage(
    "*⚠️ Please, Send Longer Message!*\n\n🔄 *Send Your Message Again*"
  )
  Bot.runCommand("📞 Msg Admin")
} else {
  let user_link = Libs.commonLib.getLinkFor(user)
  let msg =
    "Message from: " +
    user_link +
    "\n\n" +
    message +
    "\n\n✉️  /reply" +
    user.telegramid

  Bot.sendMessageToChatWithId(admin_chat, msg)
  var button = [{ title: "📩 Msg Again 📩", command: "📞 Msg Admin" }]
  Bot.sendInlineKeyboard(button, "✉️ *Message has been Sent*\n\n🎈 *Wait For Reply!*")
}

