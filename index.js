document.querySelector('.menu_icon').addEventListener('click', function(){
  if(document.querySelector('.menu').style.display == 'block'){
    document.querySelector('.menu').style.display = 'none';
  }else{
    document.querySelector('.menu').style.display = 'block';
  }
})