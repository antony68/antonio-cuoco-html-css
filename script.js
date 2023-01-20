let btnOne = document.getElementById("btn-subcol-footer");
inputNome = document.getElementById("input-nome");
inputEmail = document.getElementById("input-email");
inputMessaggio = document.getElementById("input-messaggio");

gsap.from(".img-my-self", {x:100});
gsap.to(".img-my-self", {opacity:1, x:0, duration:1.5});
gsap.to(".img-gridTwo", {opacity:1, duration:1});
gsap.to(".img-gridThree", {opacity:1, duration:1});
gsap.to(".container", {opacity:1, duration:1});
gsap.to(".container-two", {opacity:1, duration:1});


window.addEventListener('scroll', function(e) {
  if(window.scrollY > 650){

    //animazioni prima pagina
    document.body.classList.add('scroll-first-page');
    gsap.to(".img-my-self", {opacity:0, duration:1});
    gsap.to(".title-firstPage", {opacity:0, duration:1});
    gsap.to(".paragraph-firstPage", {opacity:0, duration:1});
    gsap.to(".btn-firstPage", {opacity:0, duration:1});
    gsap.to(".socialBox", {opacity:0, duration:1});

    //animazioni seconda pagina
    gsap.to(".img-gridTwo", {opacity:1, duration:1});
    gsap.to(".title-secondPage", {opacity:1, duration:1});
    gsap.to(".subtitle-secondPage", {opacity:1, duration:1});
    gsap.to(".paragraph-secondPage", {opacity:1, duration:1});
    gsap.to(".list-one", {opacity:1, duration:1});
    gsap.to(".container", {opacity:1, duration:1});

    //animazioni terza pagina 


  } else {

    //animazioni prima pagina
    document.body.classList.remove('scroll-first-page');
    gsap.to(".img-my-self", {opacity:1, duration:1});
    gsap.to(".title-firstPage", {opacity:1, duration:1});
    gsap.to(".paragraph-firstPage", {opacity:1, duration:1});
    gsap.to(".btn-firstPage", {opacity:1, duration:1});
    gsap.to(".socialBox", {opacity:1, duration:1});

    //animazioni seconda pagina 
    gsap.to(".img-gridTwo", {opacity:0, duration:1});
    gsap.to(".title-secondPage", {opacity:0, duration:1});
    gsap.to(".subtitle-secondPage", {opacity:0, duration:1});
    gsap.to(".paragraph-secondPage", {opacity:0, duration:1});
    gsap.to(".list-one", {opacity:0, duration:1});
    gsap.to(".container", {opacity:0, duration:1});

  }

  if(window.scrollY > 1250) {

    gsap.to(".img-gridThree", {opacity:1, duration:1});
    gsap.to(".title-threePage", {opacity:1, duration:1});
    gsap.to(".subtitle-threePage", {opacity:1, duration:1});
    gsap.to(".paragraph-threePage", {opacity:1, duration:1});
    gsap.to(".list-two", {opacity:1, duration:1});
    gsap.to(".paragraph-threePage", {opacity:1, duration:1});
    gsap.to(".container-two", {opacity:1, duration:1});

  }

  else{

    gsap.to(".img-gridThree", {opacity:0, duration:1});
    gsap.to(".title-threePage", {opacity:0, duration:1});
    gsap.to(".subtitle-threePage", {opacity:0, duration:1});
    gsap.to(".paragraph-threePage", {opacity:0, duration:1});
    gsap.to(".list-two", {opacity:0, duration:1});
    gsap.to(".paragraph-threePage", {opacity:0, duration:1});
    gsap.to(".container-two", {opacity:0, duration:1}); 

  }

  if(window.scrollY > 2320) {

    gsap.to("img-progetti-three", {x:300, duration:2});

  }
});

btnOne.onclick = () => {

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "99devstudio@gmail.com",
    Password : "89BA68D2499E7932F903DB68BB3FFBEE6B83",
    To : "99devstudio@mail.com",
    From : "99devstudio@mail.com",
    Subject : "richiesta sviluppo sito da: " + inputNome.value,
    Body : "nome:" + inputNome.value + "<br> email:" + inputEmail.value + "<br> messaggio: " + inputMessaggio.value
}).then(
  message => alert(message)
);


}

console.log( [1,2,3].map(num => {if (typeof num === 'number') return;
return num*2;
}))