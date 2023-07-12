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

document.querySelector(".theme_icon").addEventListener('click', function (e) {
  if (e.target.classList.contains('fa-sun')) {
    localStorage.setItem('uzbek_theme', 'dark');
    e.target.classList.add('fa-moon');
    e.target.style.color = '#ffeaa7';
    e.target.classList.remove('fa-sun');
    document.body.classList.add('dark');
  } else {
    e.target.classList.add('fa-sun');
    localStorage.setItem('uzbek_theme', 'light');
    e.target.classList.remove('fa-moon');
    e.target.style.color = '#f1c40f';
    document.body.classList.remove('dark');
  }
})

document.querySelector(".theme_li").addEventListener('click', function (e) {
  const icon = document.querySelector(".theme_li").querySelector('.fa');
  if (icon.classList.contains('fa-sun')) {
    icon.classList.add('fa-moon');
    localStorage.setItem('uzbek_theme', 'dark');
    icon.style.color = '#ffeaa7';
    icon.classList.remove('fa-sun');
    document.body.classList.add('dark');
  } else {
    icon.classList.add('fa-sun');
    localStorage.setItem('uzbek_theme', 'light');
    icon.classList.remove('fa-moon');
    icon.style.color = '#f1c40f';
    document.body.classList.remove('dark');
  }
})