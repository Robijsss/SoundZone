function login(){
  const user = document.getElementById('user').value;
  const epasts = document.getElementById('epasts').value;
  const pass = document.getElementById('pass').value;
  if(user=="Robijs" && pass=="Robijaparole232"){
    alert('Jūs esat veiksmīgi ielogojies!');
  }else{
    alert('Nepareizs lietotājvārds vai parole!');
  }
}