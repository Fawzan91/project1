'use strict'

module.exports = (robot) => {

  robot.hear(/what is love/i, (res) => {
    res.send(`baby don't hurt me, baby don't hurt me No`)
  })

  robot.hear(/announce/i, (res) => {
    res.send(`:point_up_2: :microphone:`)
  })

  robot.respond(/sing me a (.*) song/i, (res) => {
    const songKind = res.match[1]
    if (songKind === 'happy') {
      res.reply('i like that!! https://www.youtube.com/watch?v=ZbZSe6N_BXs.');
      return
    } else if (songKind === 'sad') {
      res.reply(`oh :( https://www.youtube.com/watch?v=pgN-vvVVxMA`);
      return
    }
    res.reply(`${songKind} ??? nonono listen to this https://www.youtube.com/watch?v=QwmIYmIO_A0&index=4&list=RD-INgVB2d71k`)
  })

  robot.hear(/run/i, (res) => {
    res.emote(':man-running: :man-running:')
  })
}