let productName="";
let productPrice="";
let productQuantity="";

function checkIfIsAValidNumber(event) {
    if (event.value.trim()==="" || isNaN(event.value)===true) {
        event.value = "";
         return false;
     }
     return true;
}

function onChangeProductName(event) {
    productName =event.value;

}
function onChangeProductQuantity(event){
     if (checkIfIsAValidNumber(event) === true) {
        productQuantity = event.value;
     }
}

function onChangeProductValue(event) {
    if (checkIfIsAValidNumber(event) === true) {
         productPrice = event.value;
     }   
}

