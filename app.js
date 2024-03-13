// ARRAYS:

// var cities = ["Lahore", "Multan", "Karachi", "Peshawar", "Kohat", "Hyderabad"];
// console.log(cities)

// var pets = ["frog", "cats", "dogs", "fish", "snakes"];
// pets.unshift("Amphibians" , "reptiles")
// pets.shift()
// pets.splice(2,3,"horse","monkey","birds","mouse")
// // 2(goes to the designated element in array),3(the number of elements after the designated element you want removed.),"horse","monkey","birds","mouse"(the elements replacing/adding after removed elements).
// console.log(pets)


// var new1 = ["cats"]
// new1.push("dogs")

// document.write(new1)

// var pets = ["frog", "cats", "dogs", "fish", "snakes"];
// var newPets = pets.slice(2,4)
// // 2(first element to be copied from pets to newPets and we copy fist element to the element before the last(meaning from 2 which is dogs to fish which is 3  the one before 4 which is snakes) ),4(last element)
// console.log(newPets)


// LOOPS:

// for(var i = 0; i <= 10 ; i++){
//     document.write(i + "<br>");
// }


// for(var i = 10; i >= 0 ; i--){
//     document.write(i + "<br>");
// }


// for(var i = 0; i <= 10 ; i=i+2){
//     document.write(i + "<br>");
// }


// for(var i = 10; i >= 0 ; i=i-4){
//     document.write(i + "<br>");
// }


// Arrays 14-16 Test:

// 1.
var studentsLiteral = [];

// 2. 
var studentsObject = new Array();

// 3. 
var stringsArray = ["string1", "string2", "string3"];

// 4. 
var numbersArray = [1, 2, 3, 4, 5];

// 5. 
var booleanArray = [true, false, true];

// 6. 
var mixedArray = ["string", 1, true];

// 7. 
var qualifications = [
    "SSC",
    "HSC",
    "BCS",
    "BS",
    "BCOM",
    "MS",
    "M. Phil.",
    "PhD"
];

document.write("<h2>Qualifications:</h2>");
document.write("<ol>");
for (var i = 0; i < qualifications.length; i++) {
    document.write("<li>" + qualifications[i] + "</li>");
}
document.write("</ol>");


// 8. 
var studentNames = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];

for (var i = 0; i < studentNames.length; i++) {
    var percentage = (scores[i] / 500) * 100;
    document.write("Score of " + studentNames[i] + " is " + scores[i] + ". Percentage: " + percentage + "%<br>");
}


// 9. 
var colors = ["Red", "Green", "Blue"];
// a.
var new1 = prompt("Enter color to add to the beginning:");
colors.unshift(new1);
console.log(colors);
// b. 
var new2 = prompt("Enter color to add to the end:");
colors.push(new2);
console.log(colors);
// c. 
colors.unshift("Yellow", "Orange");
console.log(colors);
// d.
colors.shift();
console.log(colors);
// e. 
colors.pop();
console.log(colors);
// f.
var index = prompt("Enter index to add color:");
var new3 = prompt("Enter color:");
colors.splice(Number(index), 0, new3);
console.log(colors)
// g.
var deleteIndex = prompt("Enter index to delete color(s):");
var deleteCount = prompt("Enter number of colors to delete:");
colors.splice(deleteIndex, deleteCount);
console.log(colors);

// 10.
var scores = [320, 230, 480, 120];
scores.sort();
document.write("Scores of Students: " + scores.join(", ") + "<br>");
document.write("Ordered Scores of Students: " + scores.join(", "));


// 11.
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2, 4);
document.write("Cities list: " + cities.join(", ") + "<br>");
document.write("Selected cities list: " + selectedCities.join(", "));

// 12. 
var arr = ["This", "is", "my", "cat"];
var stringResult = arr.join(" ");
document.write("Array: " + arr.join(", ") + "<br>");
document.write("String: " + stringResult);




// 13. 
var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices:<br>");
for (var i = 0; i < devices.length; i++) {
    document.write("Out: " + devices[i] + "<br>");
}



// 14.

var devices = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices:<br>");
for (var i = devices.length - 1; i >= 0; i--) {
    document.write("Out: " + devices[i] + "<br>");
}



// 15.
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");


// Questions PDF 14-16:

// Chapter 15 (Array I)

// 1. 
var emptyArray = [];

// 2. 
var stringArray = ["hello"];

// 3. 
var alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]);

// 4. 
var alphabetLength = ["h", "i", "j", "k", "l", "m", "n", "o"].length;

// 5. 
var singleElementArray = ["first element"];
singleElementArray[1] = "second element";
alert(singleElementArray[1]);


// Chapter 16 (Array II)

// 1.
var arrayWithOneElement = ["one element"];
arrayWithOneElement.push("second element");
alert(arrayWithOneElement[arrayWithOneElement.length - 1]);

// 2. 
var Alphabet = ["h", "i", "j", "k"];
Alphabet.pop();

// 3.
var Alphabet = ["h", "i", "j", "k"];
Alphabet.push(123);


// Chapter 16 (Array III):

// 1. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();

// 2. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.unshift(1, 2, 3);

// 3. 
var oneElementArray = ["first element"];
oneElementArray.unshift("new first element");
alert(oneElementArray[0]);

// 4. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.splice(2, 0, "L");

// 5. 
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
var regSizes = sizes.slice(0, 3);

// 6. 
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(pets.indexOf("dog") + 1, 0, "elephant", "lion");
pets.splice(pets.indexOf("cat"), 3);

// 7. 
var pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(pets.indexOf("cat"), 2);

// 8. 
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
var reducedPets = pets.slice(3, 5);


