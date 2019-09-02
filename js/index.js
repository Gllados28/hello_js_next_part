 //for (let i = 100; i >= 0; i--) {
 //    if ( i  % 2 === 0 && i%10 !== 0){
 //       document.write(i + '<br>');
 //    }
 //}


//let i = 0
// while (i < 100) {
//     document.write(i + '<br>');
//     i++;
// }


//let i = 0;
//do {
//    document.write(i + '<br>');
//    i++;
//} while(i < 100);

//let num = parseFloat(prompt('Enter number'));
//while (Number.isNAN(num)) {
//    alert ('You entered not a number!');
//    num = parseFloat(prompt('Enter number'));
//}

//let num;
//do {
//    if(num !== undefined) {
//        alert ('You entered not a number!');
//    }
//    num = parseFloat(prompt('Enter number'));
//} while (isNAN(num))

let products = ['Tesla X', 'Tesla S', 'BMW i3'];
products[3] = 'Tesla Y';
products[4] = 'BMW X5'
products.push('Mazda 6','ZAZ Sens','Chevy Corvette');
products[10] = 'Toyota Corolla'
console.log(products.length);

//for (let i = 0; i < products.length; i++) {
//    if (products[i] !== undefined) {
//         console.log(products[i]);
//    }
//}

//products.forEach(function(element){
//    console.log(element);
//});

products.forEach( el => console.log(el) );


