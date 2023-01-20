let btnOne = document.getElementById("btn-subcol-footer");
inputNome = document.getElementById("input-nome");
inputEmail = document.getElementById("input-email");
inputMessaggio = document.getElementById("input-messaggio");

btnOne.onclick = () => {

    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "99devstudio@gmail.com",
      Password : "89BA68D2499E7932F903DB68BB3FFBEE6B83",
      To : "99devstudio@gmail.com",
      From : "99devstudio@gmail.com",
      Subject : "richiesta sviluppo sito da: " + inputNome.value,
      Body : "nome:" + inputNome.value + "<br> email:" + inputEmail.value + "<br> messaggio: " + inputMessaggio.value
  }).then(
    message => alert(message)
  );
  
  
  }