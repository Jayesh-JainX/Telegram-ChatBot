/*CMD
  command: /photo_
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ā”ļø Send Photo Here!
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == "1118093733") {
  var tgid = options.tgid
  Api.sendPhoto({
    chat_id: tgid,
    photo: request.photo[0].file_id,
    caption:
      "*š„ New Photo From Admin.\n\n*š Photo Caption = " + request.caption,
    parse_mode: "Markdown"
  })
  Bot.sendMessage(
    "*š Image Succesfully Sended.*" + "\n\nš  /reply" + tgid
  )
} else {
  Bot.sendMessage("*ā You're Not An Admin*")
}

