if(localStorage.getItem('uzbek_theme')){
  if(localStorage.getItem('uzbek_theme') == 'dark'){
    document.querySelector('.fa-sun').className = 'fa fa-moon';
    document.body.classList.add('dark');
  }
}

setTimeout(function(){
  document.querySelector('body').style.transition = '.4s';
},200)

function preCode(selector) {
  const els = Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  els.forEach(function(el) {
    const txt = el.textContent.replace(/^[\r\n]+/, "").replace(/\s+$/g, "");
    if (/^\S/gm.test(txt)) {
      el.textContent = txt;
      return;
    }
    let mat, str, re = /^[\t ]+/gm, len, min = 1e3;
    while (mat = re.exec(txt)) {
      len = mat[0].length;
      if (len < min) {
		min = len;
		str = mat[0];
      }
    }
    if (min == 1e3)
      return;
      el.textContent = txt.replace(new RegExp("^" + str, 'gm'), "");
    });
}

document.querySelector(".navbar i").addEventListener('click', function(e){
  if(e.target.className == 'fa fa-sun'){
    if(localStorage.getItem('uzbek_cookies')){
      localStorage.setItem('uzbek_theme', 'dark');
    }
    e.target.className = 'fa fa-moon';
    document.body.classList.add('dark');
  }else{
    if(localStorage.getItem('uzbek_cookies')){
      localStorage.setItem('uzbek_theme', 'light');
    }
    e.target.className = 'fa fa-sun';
    document.body.classList.remove('dark');
  }
})

function toggle_code(code){
  if(document.querySelector(`.${code}_target`).innerText){
    event.target.innerText = 'show code';
    document.querySelector(`.${code}_target`).parentElement.style.display = 'none';
    document.querySelector(`.${code}_target`).innerText = '';
  }else{
    event.target.innerText = 'hide code';
    document.querySelector(`.${code}_target`).parentElement.style.display = 'block';
    let content = document.querySelector(`.${code}`).innerHTML;
    document.querySelector(`.${code}_target`).textContent = content;
    preCode(`.${code}_target`);
    Prism.highlightElement(document.querySelector(`.${code}_target`));
  }
}

if(!localStorage.getItem('uzbek_cookies')){
  document.querySelector('.cookies').style.display = 'block';
  document.querySelector('.cookies_ok').addEventListener('click', function(){
    localStorage.setItem('uzbek_cookies', 'agreed');
    document.querySelector('.cookies').remove();
  })
  document.querySelector('.cookies_stop').addEventListener('click', function(){
    document.querySelector('.cookies').remove();
  })
}
