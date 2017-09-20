function theBeatlesPlay(musicians, instruments) {
  var playswhat = []
  for (var i = 0; ib< musicians.length; i++) {
    string = `${musicians[i]} plays ${instruments[i]}`
    playswhat.push(string)
  /*} else {
    playswhat += `${musicians[i]} plays ${instruments[i]}.`
  }
 } */
  return playswhat.join(", ") + "."

}
