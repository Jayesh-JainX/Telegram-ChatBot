/*CMD
  command: š Send Photo
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: š Send Your Photo To Admin!
  keyboard: 
  aliases: 
CMD*/

Api.sendPhoto({
  chat_id: 1118093733,
  photo: request.photo[0].file_id,
  caption:
    "*š New Photo.\n\n*š Photo Caption = " +
    request.caption +
    "\n\nš /reply" +
    user.telegramid,
  parse_mode: "Markdown"
})
var button = [{ title: "š© Send Msg š©", command: "š Msg Admin" }]
Bot.sendInlineKeyboard(
  button,
  "š *Photo has been Sent*\n\nš *Wait For Reply!*"
)
