let shipForm        = document.querySelector('#shippingForm');
let pizForm    = document.querySelector('#pizzaForm');
let bilForm    = document.querySelector('#billingForm');

shipForm.addEventListener('submit', (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();
});

pizForm.addEventListener('submit', (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();
});

bilForm.addEventListener('submit', (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault();
});

//OPENS THE "OTHER" OPTION INPUT BOX WHEN
function CheckColors(val){
  var element=document.getElementById('color');
  if(val=='pick a color'||val=='others')
    element.style.display='block';
  else  
    element.style.display='none';
 }



 //OPJECTS FOR DROP DOWN PIZZA
 /*let hand = {
   small: '$9.99',
  medium: '$12.99',
   large: '$14.99'

 }
 let thin = {
  medium: '$11.99',
  large: '$13.99'

}
let newYork = {
  larege: '$16.99',
  xlarge: '$19.99'

}
let gluten = {
  small: '$10.99',
}*/

//TOPPINGS ADDED TO TOTAL
function totalIt() {
    var input = document.getElementsByName("product");
    var total = 0;
    for (var i = 0; i < input.length; i++) {
      if (input[i].checked) {
        total += parseFloat(input[i].value);
      }
    }
    document.getElementById("total").value = "$" + total.toFixed(2);
  }


