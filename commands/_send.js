/*CMD
  command: /send
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == "1118093733") {
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
  [{ text: "🌟 "+a1, callback_data: "Aa57" }],
  [{ text: "🌟🌟 "+b2, callback_data: "Bb57" }],
  [{ text: "🌟🌟🌟 "+c3, callback_data: "Cc57" }],
  [{ text: "🌟🌟🌟🌟 "+d4, callback_data: "Dd57" }],
  [{ text: "🌟🌟🌟🌟🌟 "+e5, callback_data: "Ee57" }]
]
  Api.sendMessage({
    chat_id: "@payttm_cash",
    text: "hii",

    parse_mode: "Markdown",
    reply_markup: { inline_keyboard: ui}
  })
} else {
  Bot.sendMessage("🚫")
}

