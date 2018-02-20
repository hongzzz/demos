'use strict'

const bar = document.getElementById('bar')
const resetButton = document.getElementById('reset')
const setButton = document.getElementById('set')
const loadingButton = document.getElementById('loading')

function set (p) {
  bar.setAttribute('aria-valuenow', p.toString())
}

resetButton.addEventListener('click', function () {
  set(10)
})

setButton.addEventListener('click', function () {
  set(90)
})
