document.getElementById("login-button").addEventListener("click", function (e) {
  e.preventDefault() //eita dite hbe na hoi page load hoye jabe
  const num = 12345678910
  const pin = 1234

  const numCheck = parseInt(document.getElementById("login-num").value);

  const pinCheck = parseInt(document.getElementById("login-pin").value);

  if( numCheck === num && pinCheck === pin){
    window.location.href= "./home.html"
  }
  else{
    alert ('type right number and pin')
  }
});
