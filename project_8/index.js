const inputField = document.getElementById("inputField");
const displayQr = document.getElementById("qrcode");

function createQrCode() {

    // Clear previous QR code
    displayQr.innerHTML = ""; 

    // call the QRcode method pass the "displayQr Div" 
    const qrcode = new QRCode(displayQr, {
        text: inputField.value,
        width: 150,
        height: 150
    });
}
