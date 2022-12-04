/*CMD
  command: €
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var wel = User.getProperty("wel")
if (wel == undefined) {
  var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
  userPayment.add(1)
} else {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "🚫 You Can Vote Only Once 🚫",
    show_alert: true
  })
}
User.setProperty("wel", user.telegramid, "text")
Bot.runCommand("📊 Statistics")

