document.querySelector('.menu_icon').addEventListener('click', function () {
  if (document.querySelector('.menu').style.display == 'block') {
    document.querySelector('.menu').style.display = 'none';
  } else {
    document.querySelector('.menu').style.display = 'block';
  }
})

setTimeout(function(){
  document.querySelector('body').style.transition = '.3s';
},200)

document.querySelectorAll('.fa-clipboard').forEach(el => {
  el.addEventListener('click', function (e) {
    navigator.clipboard.writeText(e.target.parentElement.innerText);
  })
})

if(localStorage.getItem('uzbek_theme')){
  if(localStorage.getItem('uzbek_theme') == 'dark'){
    document.querySelector('.theme_icon').classList.add('fa-moon');
    document.querySelector('.theme_icon').classList.remove('fa-sun');
    document.querySelector('.theme_icon').style.color = '#ffeaa7';
    document.querySelector('.theme_li i').classList.add('fa-moon');
    document.querySelector('.theme_li i').classList.remove('fa-sun');
    document.querySelector('.theme_li i').style.color = '#ffeaa7';
    document.body.classList.add('dark');
  }
}

function switch_theme(el){
  if (el.classList.contains('fa-sun')) {
    if(localStorage.getItem('uzbek_cookies')){
      localStorage.setItem('uzbek_theme', 'dark');
    }
    el.classList.add('fa-moon');
    el.style.color = '#ffeaa7';
    el.classList.remove('fa-sun');
    document.body.classList.add('dark');
  } else {
    if(localStorage.getItem('uzbek_cookies')){
      localStorage.setItem('uzbek_theme', 'light');
    }
    el.classList.add('fa-sun');
    el.classList.remove('fa-moon');
    el.style.color = '#f1c40f';
    document.body.classList.remove('dark');
  }
}

document.querySelector(".theme_icon").addEventListener('click', function (e) {
  switch_theme(e.target);
})

document.querySelector(".theme_li").addEventListener('click', function (e) {
  switch_theme(document.querySelector(".theme_li").querySelector('.fa'));
})

function responsivity(x) {
    if (x.matches && document.querySelector('.menu')){
        document.querySelector('.menu').style.display = 'none';
    }
}
var x = window.matchMedia("(min-width: 1100px)");
responsivity(x);
x.addListener(responsivity);

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
