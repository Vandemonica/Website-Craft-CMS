document.getElementById('hamburger').addEventListener('click' ,()=>{
  var droppy = document.getElementById('droppy');
  var one = document.getElementById('hamone');
  var two = document.getElementById('hamtwo');
  var three = document.getElementById('hamthree');

  if( droppy.classList.contains('block') ){
    droppy.classList.add('hidden');
    droppy.classList.remove('block');
    one.style.transform = 'rotate(0deg)';
    one.style.top = '0';
    two.style.display = 'inline';
    three.style.transform = 'rotate(0deg)';
  }
  else{
    droppy.classList.add('block');
    droppy.classList.remove('hidden');
    one.style.transform = 'rotate(43deg)';
    one.style.top = '-1.5px';
    two.style.display = 'none';
    three.style.transform = 'rotate(-47deg)';
    
  }
  
});