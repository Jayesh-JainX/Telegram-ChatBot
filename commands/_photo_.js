/*CMD
  command: /photo_
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ➡️ Send Photo Here!
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == "1118093733") {
  var tgid = options.tgid
  Api.sendPhoto({
    chat_id: tgid,
    photo: request.photo[0].file_id,
    caption:
      "*💥 New Photo From Admin.\n\n*🌁 Photo Caption = " + request.caption,
    parse_mode: "Markdown"
  })
  Bot.sendMessage(
    "*🌁 Image Succesfully Sended.*" + "\n\n🔄  /reply" + tgid
  )
} else {
  Bot.sendMessage("*❌ You're Not An Admin*")
}

