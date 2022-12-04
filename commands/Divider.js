/*CMD
  command: Divider
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ⬇️ Chose Option Below!
  keyboard: 📞 Send Msg , 🎆 Send Photo\n🎭 Stickers , ↪️ Go Back ↪️
  aliases: 
CMD*/

var tgid = options.tgid
if (message == "📞 Send Msg") {
  Bot.run({
    command: "Msg_2",
    options: { tgid: tgid } // pass tgid in options to that command
  })
} else {
  if (message == "🎆 Send Photo") {
    Bot.run({
      command: "/photo_",
      options: { tgid: tgid } // pass tgid in options to that command
    })
  } else {
    if (message == "🎭 Stickers") {
      Bot.run({
        command: "/stick",
        options: { tgid: tgid } // pass tgid in options to that command
      })
    } else {
    }
  }
}

