/*CMD
  command: /stick
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: ā¬ļø Choose Sticker ā¬ļø
  keyboard: š š,š š,š š,š¤ š¤\nš š,š š,š š\nš š,š­ š­,š± š±,š š
  aliases: 
CMD*/

var tgid = options.tgid
if (message == "š š") {
  Bot.run({
    command: "Aa",
    options: { tgid: tgid } // pass tgid in options to that command
  })
} else {
  if (message == "š š") {
    Bot.run({
      command: "Bb",
      options: { tgid: tgid } // pass tgid in options to that command
    })
  } else {
    if (message == "š š") {
      Bot.run({
        command: "Cc",
        options: { tgid: tgid } // pass tgid in options to that command
      })
    } else {
      if (message == "š¤ š¤") {
        Bot.run({
          command: "Dd",
          options: { tgid: tgid } // pass tgid in options to that command
        })
      } else {
        if (message == "š š") {
          Bot.run({
            command: "Ee",
            options: { tgid: tgid } // pass tgid in options to that command
          })
        } else {
          if (message == "š š") {
            Bot.run({
              command: "Ff",
              options: { tgid: tgid } // pass tgid in options to that command
            })
          } else {
            if (message == "š š") {
              Bot.run({
                command: "Gg",
                options: { tgid: tgid } // pass tgid in options to that command
              })
            } else {
              if (message == "š š") {
                Bot.run({
                  command: "Hh",
                  options: { tgid: tgid } // pass tgid in options to that command
                })
              } else {
                if (message == "š­ š­") {
                  Bot.run({
                    command: "Ii",
                    options: { tgid: tgid } // pass tgid in options to that command
                  })
                } else {
                  if (message == "š± š±") {
                    Bot.run({
                      command: "Jj",
                      options: { tgid: tgid } // pass tgid in options to that command
                    })
                  } else {
                    if (message == "š š") {
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
Bot.runCommand('ā ļø Need Help Click Here ā ļø')
