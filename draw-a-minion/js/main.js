(function () {
  'use strict'
  let duration = 5
  let code = `
    .minion {
      position: relative;
      width: 260px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .body {
      position: relative;
      height: 300px;
      width: 260px;
      background: rgb(255, 227, 64);
    }

    .hair {
      position: absolute;
      height: 5px;
      width: 90px;
      left: 50%;
      transform: translateX(-50%);
      background: rgb(28, 28, 28);
    }

    .strap {
      position: absolute;
      height: 50px;
      width: 260px;
      top: 70px;
      background: rgb(28, 28, 28);
    }

    .glass {
      position: absolute;
      height: 125px;
      width: 125px;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      background: rgb(112, 112, 112);
      transform: translate(-50%, -50%);
    }

    .eye-socket {
      position: absolute;
      height: 100px;
      width: 100px;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      background: #fff;
      transform: translate(-50%, -50%);
    }

    .eye-socket::before {
      content: '';
      position: absolute;
      height: 65px;
      width: 65px;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      background: rgb(91, 53, 10);
      transform: translate(-50%, -50%);
    }

    .eyeball {
      position: absolute;
      height: 40px;
      width: 40px;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      background: #000;
      transform: translate(-50%, -50%);
    }

    .eyeball::before {
      content: '';
      position: absolute;
      height: 10px;
      width: 10px;
      top: 10px;
      left: 10px;
      border-radius: 50%;
      background: #fff;
      transform: translate(-50%, -50%);
    }

    .pants {
      height: 50px;
      width: 260px;
      background: rgb(47, 84, 162);
    }`

  function writeCode (code, fn) {
    let styleTag = document.querySelector('#styleTag')
    let container = document.querySelector('#code')
    let timer
    let n = 0
    timer = setTimeout(function run () {
      n++
      let currentCode = code.substring(0, n)
      container.innerHTML = currentCode
      styleTag.innerHTML = currentCode
      container.scrollTop = container.scrollHeight
      if (n < code.length) {
        timer = setTimeout(run, duration)
      } else {
        fn && fn()
      }
    }, duration)
  }

  writeCode(code)
})()
