/*CMD
  command: Aa57
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var a1 = Libs.ResourcesLib.anotherChatRes("a1", "global")
a1.add(1)
var a1 = Libs.ResourcesLib.anotherChatRes("a1", "global")
  .value()
  .toFixed(0)
var b2 = Libs.ResourcesLib.anotherChatRes("b2", "global")
  .value()
  .toFixed(0)
var c3 = Libs.ResourcesLib.anotherChatRes("c3", "global")
  .value()
  .toFixed(0)
var d4 = Libs.ResourcesLib.anotherChatRes("d4", "global")
  .value()
  .toFixed(0)
var e5 = Libs.ResourcesLib.anotherChatRes("e5", "global")
  .value()
  .toFixed(0)
var ui = [
  [{ text: "🌟 " + a1, callback_data: "Aa57" }],
  [{ text: "🌟🌟 " + b2, callback_data: "Bb57" }],
  [{ text: "🌟🌟🌟 " + c3, callback_data: "Cc57" }],
  [{ text: "🌟🌟🌟🌟 " + d4, callback_data: "Dd57" }],
  [{ text: "🌟🌟🌟🌟🌟 " + e5, callback_data: "Ee57" }],
  [{ text: "🔙 Back", callback_data: "didi57" }]
]

var msg = User.getProperty("msg")

var message_id = request.message.message_id
var weloo = User.getProperty("weloo")
if (weloo == undefined) {
  Api.editMessageText({
    chat_id: "@payttm_cash",
    message_id: message_id,
    text: msg,
    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: ui }
  })
} else {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "🚫 You Can Vote Only Once 🚫",
    show_alert: true
  })
}
User.setProperty("welo", user.telegramid, "text")

