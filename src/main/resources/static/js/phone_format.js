// function formatPhone(value) {
//     if (!value) return value;
//     const phone = value.replace(/[^\d]/g, '')
//     const phoneLen = value.lenght;
//     if (phoneLen < 4) return phone;
//     if (phoneLen < 7) {
//         return `(${phone.slice(0, 3)}) ${phone.slice(3)}`
//     }
//     if (phoneLen < 10){ 
//         return `(${phone.slice(0, 3)}) ${phone.slice(3, 5)}`;
//     }
//     return `(${phone.slice(0, 3)}) ${phone.slice(3, 5)}-${phone.slice(6,9)} `

// }

// function PhoneFormatter() {
//     const inputField = document.getElementById("phone");
//     const formatted = formatPhone(inputField.value);
//     inputField.value = formatted;
// }