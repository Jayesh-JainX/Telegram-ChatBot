/*CMD
  command: š Msg Admin
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: š Send Your Msg To Admin!
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
    "*ā ļø Please, Send Longer Message!*\n\nš *Send Your Message Again*"
  )
  Bot.runCommand("š Msg Admin")
} else {
  let user_link = Libs.commonLib.getLinkFor(user)
  let msg =
    "Message from: " +
    user_link +
    "\n\n" +
    message +
    "\n\nāļø  /reply" +
    user.telegramid

  Bot.sendMessageToChatWithId(admin_chat, msg)
  var button = [{ title: "š© Msg Again š©", command: "š Msg Admin" }]
  Bot.sendInlineKeyboard(button, "āļø *Message has been Sent*\n\nš *Wait For Reply!*")
}

