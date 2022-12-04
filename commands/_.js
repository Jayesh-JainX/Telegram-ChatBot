/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!message) {
  // sometimes message can be blank
  return // exit from command
}

let isAdminReply = message.indexOf("/reply") + 1
if (!isAdminReply) {
  return
}
var tgid = message.split("/reply")[1]
if (!tgid) {
  return
}
// run other command
Bot.run({
  command: "Divider",
  options: { tgid: tgid } // pass tgid in options to that command
})

