window.addEventListener('load', () => {
  let e = +document.querySelector('#tokennumber').textContent;
  document.querySelector('#tokennumber').textContent = localStorage.getItem('tokennumber');
  let t = setTimeout(function o() {
    let n = document.querySelector('#tokennumber'),
      r = +(localStorage.getItem('tokennumber') || e) + +Math.floor(5 * Math.random()),
      l = +document.querySelector('#endTick').textContent,
      u = (l / 100) * 95,
      c = Math.round((1e4 * +r) / l);
    (document.querySelector('.progress-line').style.width = ' ' + c + '%'),
      +r <= u
        ? (localStorage.setItem('tokennumber', r),
          (n.textContent = r),
          (document.querySelector('.progress-line').style.width = ' ' + c + '%'),
          (t = setTimeout(o, 1300)))
        : console.log('end');
  }, 1500);
});
