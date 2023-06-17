document.querySelector(".navbar i").addEventListener('click', function(e){
  if(e.target.className == 'fa fa-sun'){
    e.target.className = 'fa fa-moon';
    document.body.classList.add('dark');
  }else{
    e.target.className = 'fa fa-sun';
    document.body.classList.remove('dark');
  }
})