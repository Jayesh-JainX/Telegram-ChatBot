/*CMD
  command: Photo09
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var pto = options.photo
var caption = options.caption
Api.sendPhoto({
photo: pto,
caption: "*📣 Msg From Admin\n\n"+caption+"*"})
Bot.runCommand("⚠️ Need Help Click Here ⚠️")
