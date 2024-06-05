// let num = prompt("Please enter a number");
// function reversednum(num){
//     let result = num.split('').reverse().join('');
// alert(result);
// }
// reversednum(num)

// for (let i = 0; i <= 15; i++) {
//      if (i%2 == 0) {
//     function even(i){
//             console.log(i + " is Even")}
//             even(i)}
//        else {
        
//         function odd(i){
//             console(i + " is Odd")}
//             odd(i)
//        }
//     }


    // var str = prompt("Please enter a word");
    // function alphabet_order(str) {
    //     alert(str.toLowerCase().split('').sort().join(''))

    //   }
    //   alphabet_order(str)



    let num = prompt("Please enter a number");
    var word=""
    for (let i = 0; i <num.length; i++){
      var x = num[i]
      var y = num[i+1]
      function output(a) {
        word = word + num[i] + a
      }
      if (x%2 == 0  && y%2 == 0) {
          output("-")
      } 
      else{
          output("")
      }
    }
    alert(word)




    // let num = prompt("Please enter a number");
    // function Agechecker(num){
    //   num>=18? alert ( "The user is Adult" ) : alert ( "The user is Minor" );
    // }
    // Agechecker(num)
