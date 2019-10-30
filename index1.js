'usestrict';

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log(persone.name);

let arr = ['plum.png','orange.jpg','apple.bmp']
console.log(arr[2])
//alert('Hello World!');
//let answer = confirm('are you here?');
//console.log(answer);

//let answer = +prompt('Есть ли Вам 18?', 'да');
//console.log(typeof(answer));
//console.log('arr' + ' - object');
//console.log('4' + ' - object');
let incr = 10,
    decr = 10;
console.log(incr++);
console.log(decr--);
console.log(5%2);
console.log("2" === 2);

let isCheked = false,
    isClose = false;
    console.log(isCheked || !isClose);

    if(2*4 == 9){
console.log("верно!")

    } else{
        console.log("неверно!")
    }


    let num = 50;

    if (num < 49) {
        console.log("неверно!")
    } else if(num > 100) {
       console.log("Много!")
    } else{
        console.log("Верно!")
    };

    switch (num) {
        case num < 49:
              console.log("неверно!");
              break;
        case num > 100:
              console.log("Много!");
              break;
        case num > 80:
                console.log("Все еще Много!");   
              break;
        case 50:
                console.log("Верно!");
                break;
    }
    let num = 50;
    //while (num < 55){
    //    console.log(num);
    //    num++;
        
    //}
    do{
        console.log(num);
        num++; 
    }
    while (num < 55);

    for (let i = 1; i < 8; i++){
        if (i == 6){
        break
        }
        console.log(i);
    }