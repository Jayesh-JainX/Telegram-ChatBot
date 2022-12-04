/*CMD
  command: 🌌 Send Photo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🌌 Send Your Photo To Admin!
  keyboard: 
  aliases: 
CMD*/

Api.sendPhoto({
  chat_id: 1118093733,
  photo: request.photo[0].file_id,
  caption:
    "*🌆 New Photo.\n\n*🌁 Photo Caption = " +
    request.caption +
    "\n\n🔄 /reply" +
    user.telegramid,
  parse_mode: "Markdown"
})
var button = [{ title: "📩 Send Msg 📩", command: "📞 Msg Admin" }]
Bot.sendInlineKeyboard(
  button,
  "🌆 *Photo has been Sent*\n\n🎈 *Wait For Reply!*"
)
