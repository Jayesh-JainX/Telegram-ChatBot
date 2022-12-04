/*CMD
  command: 📊 Statistics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  var userPayment = Libs.ResourcesLib.anotherChatRes("userpayment", "global")
    .value()
    .toFixed(0)
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
    .value()
    .toFixed(0)

  var key = [
    [
      { title: " Good 😇 : "+userPayment, command:"€" },
      {
        title: "Share",
        url:
          "https://t.me/share/url?text=🙌 Get Free Paytm Cash - @NewEarningTrickss"
      }
    ]
  ]
  var stat =
    "*📊 Total Members : " +
    status +
    " Users\n\n👑Bot Made By @JayeshJayesh 👑*"

  Bot.sendInlineKeyboard(key, stat)
}

