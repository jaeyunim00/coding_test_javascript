// function solution(n) {
//   var answer = 0;

//   let arr = new Array();

//   for (let i = 1; i <= n; i++) {
//     if (n % i == 1) {
//       console.log("나머지 1");
//       arr.push(i);
//     }
//   }

//   answer = Math.min.apply(null, arr);

//   console.log(arr);

//   console.log(answer);
// }

// solution(120341);

// function solution(n) {
//   let answer = 10000000;
//   function prac(num) {
//     if (n == num) {
//       return;
//     } else if (n % num == 1) {
//       if (answer > num) {
//         answer = num;
//       }
//     }
//     prac(num + 1);
//   }
//   prac(1);
//   console.log(answer);
// }

// solution(500000);

// function solution(n) {
//   let letter = ["수", "박"];
//   var answer = "";

//   for (let i = 0; i < n; i++) {
//     answer = answer.concat(letter[i % 2]);
//   }

//   console.log(answer);
// }

// solution(4);

function solution(n, arr1, arr2) {
  var answer = [];

  let sol = [];

  for (let i = 0; i < n; i++) {
    sol[i] = arr1[i] | arr2[i];
    sol[i] = sol[i].toString(2);

    sol[i] = sol[i].replace(/[1-9]/gi, "#");
    sol[i] = sol[i].replace(/[0]/gi, " ");
  }

  answer = sol;

  console.log(answer);
  console.log(["######", "### #", "## ##", " #### ", " #####", "### # "]);
  return answer;
}

solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
