var drumBoom = document.getElementById('drum-boom')
var drumClap = document.getElementById('drum-clap')
var drumKick = document.getElementById('drum-kick')

drumBoom.addEventListener('click', function () {
  document.getElementById('boom').play()
})
drumBoom.addEventListener('mouseenter', function () {
  document.getElementById('boom').play()
})

drumClap.addEventListener('click', function () {
  document.getElementById('clap').play()
})
drumClap.addEventListener('mouseenter', function () {
  document.getElementById('clap').play()
})

drumKick.addEventListener('click', function () {
  document.getElementById('kick').play()
})
drumKick.addEventListener('mouseenter', function () {
  document.getElementById('kick').play()
})
