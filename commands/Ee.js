/*CMD
  command: Ee
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == "1118093733") {
  var tgid = options.tgid
  Api.sendSticker({
    chat_id: tgid,
    sticker: "https://t.me/stickersChannel/2895",
    parse_mode: "Markdown"
  })

  Api.sendSticker({
    chat_id: 1118093733,
    sticker: "https://t.me/stickersChannel/2895",
    parse_mode: "Markdown"
  })
  Bot.sendMessage("*🌁 Sticker Succesfully Sended.*" + "\n\n🔄  /reply" + tgid)
} else {
  Bot.sendMessage("*❌ You're Not An Admin*")
}

