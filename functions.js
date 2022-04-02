let productName="";
let productPrice="";
let productQuantity="";
let total = 0; 

function clearAllFields() {
    document.querySelector('#name').value= "";
    document.querySelector('#quantity').value= "";
    document.querySelector('#value').value= "";
    productName="";
    productPrice=""
    productQuantity="";
    enableButton();
}

function onCheckoutProduct(productTotal, event) {
    event.parentNode.style.display = "none";
    total= total- productTotal;
    document.querySelector('#totalValue').innerText=total;
}

function insertRow() {
    const productTotal =Number(productQuantity.replace(",",".")) * Number (productPrice.replace(",","."))
    total= total+ productTotal;
    const row= `
    <div class="item">
                    <input type="checkbox" onchange="onCheckoutProduct(${productTotal}, this)"/>
                    <span>
                        ${productName} ${productQuantity} x ${productPrice}
                    </span>
                    
                </div>`;
    let currentHtml = document.querySelector('.content').innerHTML;
    document.querySelector('.content').innerHTML = currentHtml + row;
    document.querySelector('#totalValue').innerText= total;
    clearAllFields();
}

function checkIfIsAValidNumber(event) {
    const value = event.value.trim().replace(",",".");
    if (value==="" || isNaN(value)===true) {
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

