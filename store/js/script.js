//Products

function GetProductName(userOption){


    var productName="";


    switch(userOption){

        case 1:

            productName="Spoon";

            break;




        case 2:

            productName="clay pottery"

            default:

                productName="None"

        }

        return productName;

   }




//Calculation
let tot=0;
let count=0;

let selectProducts=[];

let productAmounts=[];

let itemPrice=[550,400,1040,530];
let price=0;
function CalcPrice(num, amount){
    if (num==1){
        price=itemPrice[0];
    }else if(num==4){
        price=itemPrice[1];
    }else if(num==5){
        price=itemPrice[2];
    }
    else if(num==6){
        price=itemPrice[3];
    }
    setTotal(price*amount);

   }



function buyProduct(i){

    var button="button"+i.toString();


    var product="product"+i.toString();

    var getCount=document.getElementById(product).value;  //show number of products

     

    if(getCount==0){

        alert("Please enter quantity")

        return false;

    }

    else{

        selectProducts.push(i);        
        productAmounts.push(getCount);
        tot=tot+CalcPrice(selectProducts[count],productAmounts[count]);
        count=count+1;
    }

}

//set total amount 

function setTotal(totalPrice){
    tot+=totalPrice;
    document.querySelector(".cart p").innerHTML=tot;
}




// Get references to the form and its elements

const checkoutForm = document.querySelector('#btnSubmit');

const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const addressInput = document.querySelector('#address');

const cityInput = document.querySelector('#city');

const countryInput = document.querySelector('#country');

const postalCodeInput = document.querySelector('#postal-code');

const paymentMethodInput = document.querySelector('#payment-method');




// Add an event listener to the form submit event

checkoutForm.addEventListener('click', function() {
  myForm.requestSubmit();
})


checkoutForm.addEventListener('submit', function(event) {

  // Prevent the default form submission behavior

  event.preventDefault();




  // Validate the form data

  if (!validateFormData()) {

    return;

  }




  // Get the form data and create an object

  const formData = {

    name: nameInput.value.trim(),

    email: emailInput.value.trim(),

    address: addressInput.value.trim(),

    city: cityInput.value.trim(),

    country: countryInput.value.trim(),

    postalCode: postalCodeInput.value.trim(),

    paymentMethod: paymentMethodInput.value.trim()

  };




  // Send the form data to the server

  sendDataToServer(formData);

});




// Function to validate the form data

function validateFormData() {

  // Validate the name field

  if (nameInput.value.trim() === '') {

    alert('Please enter your name.');

    nameInput.focus();

    return false;

  }




  // Validate the email field

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailInput.value.trim())) {

    alert('Please enter a valid email address.');

    emailInput.focus();

    return false;

  }




  // Validate the address field

  if (addressInput.value.trim() === '') {

    alert('Please enter your address.');

    addressInput.focus();

    return false;

  }




  // Validate the city field

  if (cityInput.value.trim() === '') {

    alert('Please enter your city.');

    cityInput.focus();

    return false;

  }




  // Validate the country field

  if (countryInput.value.trim() === '') {

    alert('Please enter your country.');

    countryInput.focus();

    return false;

  }




  // Validate the postal code field

  const postalCodeRegex = /^[0-9]{5}$/;

  if (!postalCodeRegex.test(postalCodeInput.value.trim())) {

    alert('Please enter a valid postal code.');

    postalCodeInput.focus();

    return false;

  }




  // Validate the payment method field

  if (paymentMethodInput.value.trim() === '') {

    alert('Please select a payment method.');

    paymentMethodInput.focus();

    return false;

  }




  // If all fields are valid, return true

  return true;

}




// Function to send the form data to the server

function sendDataToServer(formData) {

  // Send the data using AJAX

  const xhr = new XMLHttpRequest();

  xhr.open('POST', '/checkout');

  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  xhr.onload = function() {

    if (xhr.status === 200) {

      // Handle successful response from server

      alert('Your order has been placed successfully!');

      window.location.href = '/confirmation';

    } else {

      // Handle error response from server

      alert('There was an error processing your order. Please try again later.');

    }

  };

  xhr.send(JSON.stringify(formData));

}