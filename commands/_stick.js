/*CMD
  command: /stick
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ⬇️ Choose Sticker ⬇️
  keyboard: 😂 😂,👋 👋,😍 😍,🤑 🤑\n😎 😎,👌 👌,😏 😏\n😔 😔,😭 😭,😱 😱,🙄 🙄
  aliases: 
CMD*/

var tgid = options.tgid
if (message == "😂 😂") {
  Bot.run({
    command: "Aa",
    options: { tgid: tgid } // pass tgid in options to that command
  })
} else {
  if (message == "👋 👋") {
    Bot.run({
      command: "Bb",
      options: { tgid: tgid } // pass tgid in options to that command
    })
  } else {
    if (message == "😍 😍") {
      Bot.run({
        command: "Cc",
        options: { tgid: tgid } // pass tgid in options to that command
      })
    } else {
      if (message == "🤑 🤑") {
        Bot.run({
          command: "Dd",
          options: { tgid: tgid } // pass tgid in options to that command
        })
      } else {
        if (message == "😎 😎") {
          Bot.run({
            command: "Ee",
            options: { tgid: tgid } // pass tgid in options to that command
          })
        } else {
          if (message == "👌 👌") {
            Bot.run({
              command: "Ff",
              options: { tgid: tgid } // pass tgid in options to that command
            })
          } else {
            if (message == "😏 😏") {
              Bot.run({
                command: "Gg",
                options: { tgid: tgid } // pass tgid in options to that command
              })
            } else {
              if (message == "😔 😔") {
                Bot.run({
                  command: "Hh",
                  options: { tgid: tgid } // pass tgid in options to that command
                })
              } else {
                if (message == "😭 😭") {
                  Bot.run({
                    command: "Ii",
                    options: { tgid: tgid } // pass tgid in options to that command
                  })
                } else {
                  if (message == "😱 😱") {
                    Bot.run({
                      command: "Jj",
                      options: { tgid: tgid } // pass tgid in options to that command
                    })
                  } else {
                    if (message == "🙄 🙄") {
                      Bot.run({
                        command: "Kk",
                        options: { tgid: tgid } // pass tgid in options to that command
                      })
                    } else {
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
Bot.runCommand('⚠️ Need Help Click Here ⚠️')
