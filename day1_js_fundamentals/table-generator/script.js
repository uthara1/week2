function generateTable() {
  let num = Number(document.getElementById("num").value);
  if (isNaN(num)) {
    document.getElementById("table").innerHTML = "Please enter a valid number.";
    return;
  }
  let table = "";
  for (let i = 1; i <= 10; i++) {
    table += `${num} x ${i} = ${num * i}<br>`;
  }
  document.getElementById("table").innerHTML = table;
}