// script.js 파일에 추가할 코드
document.getElementById('name').addEventListener('click', showMessage);

function showMessage() {
  const message = document.getElementById('message');
  message.innerText = '이상하다';
  message.style.display = 'block';
  message.style.left = Math.random() * (window.innerWidth - message.clientWidth) + 'px';
  message.style.top = Math.random() * (window.innerHeight - message.clientHeight) + 'px';

  setTimeout(() => {
    let opacity = 1;
    const fadeOut = setInterval(() => {
      if (opacity <= 0) {
        clearInterval(fadeOut);
        message.style.display = 'none';
      } else {
        opacity -= 0.1;
        message.style.opacity = opacity;
      }
    }, 300);
  }, 3000);
}
document.getElementById('name').addEventListener('click', showMessage);

function showMessage() {
  const message = document.getElementById('message');
  message.innerHTML = '<span>이</span><span>상</span><span>하</span><span>다</span>';
  message.style.display = 'block';
  message.style.left = Math.random() * (window.innerWidth - message.clientWidth) + 'px';
  message.style.top = Math.random() * (window.innerHeight - message.clientHeight) + 'px';

  setTimeout(() => {
    let opacity = 1;
    const fadeOut = setInterval(() => {
      if (opacity <= 0) {
        clearInterval(fadeOut);
        message.style.display = 'none';
      } else {
        opacity -= 0.1;
        const spans = message.querySelectorAll('span');
        for (let i = 0; i < spans.length; i++) {
          spans[i].style.opacity = opacity - (0.1 * i);
        }
      }
    }, 300);
  }, 5000);
}
document.getElementById('name').addEventListener('click', showMessage);

function showMessage() {
  const message = document.getElementById('message');
  message.innerHTML = '<span>이</span><span>상</span><span>하</span><span>다</span>';
  message.style.display = 'block';
  message.style.left = Math.random() * (window.innerWidth - message.clientWidth) + 'px';
  message.style.top = Math.random() * (window.innerHeight - message.clientHeight) + 'px';

  setTimeout(() => {
    let opacity = 1;
    const fadeOut = setInterval(() => {
      if (opacity <= 0) {
        clearInterval(fadeOut);
        message.style.display = 'none';
      } else {
        opacity -= 0.1;
        const spans = message.querySelectorAll('span');
        for (let i = 0; i < spans.length; i++) {
          spans[i].style.opacity = opacity - (0.1 * (spans.length - 1 - i));
        }
      }
    }, 300);
  }, 3500);
}

