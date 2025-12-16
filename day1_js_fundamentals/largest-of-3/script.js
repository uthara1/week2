function findLargest() {
  let a = Number(document.getElementById("num1").value);
  let b = Number(document.getElementById("num2").value);
  let c = Number(document.getElementById("num3").value);

  let result = document.getElementById("result");

  if (a >= b && a >= c) {
    result.textContent = "Largest number is: " + a;
  } else if (b >= a && b >= c) {
    result.textContent = "Largest number is: " + b;
  } else {
    result.textContent = "Largest number is: " + c;
  }
}