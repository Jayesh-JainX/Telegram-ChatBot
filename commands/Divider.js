/*CMD
  command: Divider
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ā¬ļø Chose Option Below!
  keyboard: š Send Msg , š Send Photo\nš­ Stickers , āŖļø Go Back āŖļø
  aliases: 
CMD*/

var tgid = options.tgid
if (message == "š Send Msg") {
  Bot.run({
    command: "Msg_2",
    options: { tgid: tgid } // pass tgid in options to that command
  })
} else {
  if (message == "š Send Photo") {
    Bot.run({
      command: "/photo_",
      options: { tgid: tgid } // pass tgid in options to that command
    })
  } else {
    if (message == "š­ Stickers") {
      Bot.run({
        command: "/stick",
        options: { tgid: tgid } // pass tgid in options to that command
      })
    } else {
    }
  }
}

