/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: ⬇️  Click Below  ⬇️
  keyboard: ⚠️ Need Help Click Here ⚠️
  aliases: 
CMD*/

Bot.sendMessage(
  "*⭐ 𝙹𝚘𝚒𝚗 𝙾𝚞𝚛 𝙲𝚑𝚊𝚗𝚗𝚎𝚕𝚜*\n\n*➤ Join* _ _ [Main Channel](https://t.me/newearningtrickss)_ _ \n*➤ Join* _ _ [Discussion Group](https://t.me/Gpay_Paytm_Offerss)_ _ \n\n⚠️ *Need Help Click Below!*",
  { disable_web_page_preview: "true" }
)
function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*You're Trying To Invite You're Self ❌*")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  var balance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  balance.add(0.0)
}
function doAlreadyAttracted() {
  Bot.sendMessage("*You Already Started The Bot ❌*")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
var status = Libs.ResourcesLib.anotherChatRes("status", "global")
status.add(0)
var user_link =
  "[" + user.first_name + "](" + "tg://user?id=" + user.telegramid + ")"
var welco = User.getProperty("welco")
if (welco == undefined) {
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
  Bot.sendMessageToChatWithId(
    1118093733,
    "🚦New User🚦\n\n⚜ User = " +
      user.first_name +
      "\n\n🔰 Username = @" +
      user.username +
      "\n\n🆔 User ID = " +
      user.telegramid +
      "\n\n📛 User Link = " +
      user_link +
      "\n\n✉️  /reply" +
      user.telegramid
  )
}
User.setProperty("welco", user.telegramid, "text")

