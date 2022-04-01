let productName="";
let productPrice="";
let productQuantity="";


function clearAllFields() {
    document.querySelector('#name').value= "";
    document.querySelector('#quantity').value= "";
    document.querySelector('#value').value= "";

}
function insertRow() {
    const row= `
    <div class="item">
                    <input type="checkbox"/>
                    <span>
                        ${productName} ${productQuantity} x ${productPrice}
                    </span>
                    
                </div>`;

    let currentHtml = document.querySelector('.content').innerHTML;
    document.querySelector('.content').innerHTML = currentHtml + row;
    clearAllFields();
}

function checkIfIsAValidNumber(event) {
    if (event.value.trim()==="" || isNaN(event.value)===true) {
        event.value = "";
         return false;
     }
     return true;
}

function enableButton () {
    if (productName.length >0 && productPrice.length>0 && productQuantity.length >0) {
        document.querySelector('button').disabled = false;
    }
    else {
        document.querySelector('button').disabled = true;
    }
}
function onChangeProductName(event) {
    productName =event.value;
    enableButton();

}
function onChangeProductQuantity(event){
     if (checkIfIsAValidNumber(event) === true) {
        productQuantity = event.value;
     }
     else{
         productQuantity="";
     }
     enableButton();
}

function onChangeProductValue(event) {
    if (checkIfIsAValidNumber(event) === true) {
         productPrice = event.value;
     }   
     else {
         productPrice = "";
     }
     enableButton();
}

