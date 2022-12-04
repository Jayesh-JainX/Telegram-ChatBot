/*CMD
  command: Rate57
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send Msg
  keyboard: 
  aliases: 
CMD*/

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
  [{ text: "🔙 Back", callback_data: "didi57" }]
]
let msg = User.getProperty("msg")
User.setProperty("msg", data.message, "string")
Api.sendMessage({
  chat_id: "@payttm_cash",
  text: message,
  reply_markup: { inline_keyboard: ui },
  parse_mode: "Markdown"
})

