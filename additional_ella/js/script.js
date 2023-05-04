aboutmoreBtn=document.querySelector(".banner button");
description=document.querySelector(".banner .description")

aboutmoreBtn.onclick=()=>{
    description.style.opacity= "1";
}



let mybutton = document.querySelector(".material-symbols-outlined");


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

