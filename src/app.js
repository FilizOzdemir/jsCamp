//Q1:JavaScript ile istediginiz kadar sayi parametre gönderebileceginiz bir fonksiyon yazınız .Bu fonksiyona gönderdiginiz her sayi için cıkti
//olarak asal olup olmadıgını yazan prog.
function findPrime(...numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let isPrime = true;
    if(numbers[i]===1){
      isPrime=false;

    }else{
      for (let j = 2; j < numbers[i]; j++) {
     
        if(numbers[i]%j==0 ){
         isPrime=false;
         break;
        }   
      }
    }
   if(isPrime){
    console.log(numbers[i] + " sayisi asal sayidir.");
   }else{
    console.log(numbers[i] + " sayisi asal sayi değildir.");
   }
  }
}
   findPrime(1, 2, 6,3,5,7,10,11, 15, 61, 698, 44);

console.log("----------------------------------")

//Q2:Parametre olarak girilen iki sayının arkadas sayilar olup olmadigini bulan prog.
//İki sayı birbirinin kendisi hariç bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.
// 220 : 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284 
//284 : 1 + 2 + 4 + 71 + 142 = 220

function friendlyNumber(number1, number2) {
  let num1divisors = 0;//num 1 bölenleri
  let num2divisors = 0;//num 2 bölenleri

  for (let i = 1; i <= number1 / 2; i++) {
    if (number1 % i === 0) num1divisors += i;//Üç eşittir karşılaştırmayı tip değiştirmeden yapar. 
  }

  for (let i = 1; i <= number2 / 2; i++) {
    if (number2 % i === 0) num2divisors += i;
  }

  if (number1 === num2divisors && number2 === num1divisors)
    console.log(number1 + " and " + number2 + " are friendly numbers");//arkadas sayi
  else console.log(number1 + " and " + number2 + " aren't friendly numbers");//arkadas sayi değil
}
friendlyNumber(220, 284);
friendlyNumber(10, 22);
console.log("----------------------------------")

//Q3:1000'e kadar ki tüm mükemmel sayilari siralayan prog.
//Mükemmel sayi: Kendisi hariç pozitif tam bölenlerinin toplami kendisine esit olan sayi mükemmel sayidir.
//6-> 1,2,3
//28->1,2,4,7,14
//496
let sayi = 1;
for (let sayi = 1; sayi <= 1000; sayi++) {
  let toplam = 0;
  for (let i = 1; i < sayi; i++) {
    if (sayi % i == 0)
      toplam += i;
  }

  if (toplam == sayi)
    console.log(sayi + " is a perfect number");//mükemmel bir sayidir

}

console.log("--------------------------------")

//Q4:1000'e kadar ki tüm asal sayilari listeleyen prog.
for (let number = 2; number < 1000; number++)//asal sayilar 2'den baslar
{
  for (let i = 2; i < number; i++)//i=bolüm
  {
    if (number % i === 0)//Üç eşittir bu karşılaştırmayı tip değiştirmeden yapar. 
      break;
  }
  if (number === i)
    console.log(number + " is a prime number");//asal sayilari siralar

}