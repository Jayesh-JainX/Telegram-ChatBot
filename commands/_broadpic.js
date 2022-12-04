/*CMD
  command: /broadpic
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🎆 Send Your Photo fot Broadcasting
  keyboard: 
  aliases: 
CMD*/


if (user.telegramid == "1118093733"){

Bot.runAll({ 
command: "Photo09",
for_chats: "private-chats",
options: {photo: request.photo[0].file_id, caption: request.caption}
})
Bot.sendMessage("*🌌 Photo Sended To All Users.*")
}else{
Bot.sendMessage("*❌ You're Not An Admin.*")
}
