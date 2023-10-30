//alert("Coucou")

/* let firstName = 'Chris'
let age = 16

age++
document.write(age)
document.write(firstName);


let students = ["Marion", "Shelley", "Shahm", "Matthias", "Loan"]
console.table(students[2]);

if (age >= 18) {
    console.log("Je suis majeur");
} else {
    console.log("Je suis mineur");
}

//console.log(students.length);
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

function displayMessage(msg) {
    alert(msg)
} */

function changeParagraphColor (color) {
  let paragraphs = document.getElementsByTagName('p')
  for (let i = 0; i < paragraphs.length; i++) {
    if (paragraphs[i].style.color == color) {
        paragraphs[i].style.color = "black"
    } else {
      paragraphs[i].style.color = color
    }
  }
}
