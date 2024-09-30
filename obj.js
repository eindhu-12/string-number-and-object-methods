// Create an object representing a smartphone with properties brand, model, and price. Seal the object using Object.seal(), modify the price, and then check if the object is sealed using Object.isSealed().
var smartphone={
    brand:"vivo",
    model:"vivo15", 
    price:45000
}
console.log("smartphone details:--",smartphone);
Object.seal(smartphone);
console.log("object sealed");
smartphone.price=15000;
console.log(" after Modification the price of smartphone",smartphone);
console.log("checking if the object is sealed or not:-",Object.isSealed(smartphone));

// Create an object representing a book with properties title, author, and publishedYear. Freeze the object using Object.freeze(), then try to modify the publishedYear and check if the object is frozen using Object.isFrozen().

var book={
    title:"A Indian Girl", 
    author:"Chetan Bhagath", 
    publishedYear:2018
}
console.log("book details:--",book);
Object.freeze(book);
console.log("Now book details are in freeze state");
book.publishedYear=2020;
console.log("after Modification the publishedYear:-",book);
console.log("checking if the object is frozen or not",Object.isFrozen(book));

// Create an object representing a person with properties firstName, lastName, and age. Use both Object.keys() and Object.values() to retrieve and display all keys and values of the object.

var person={
    firstName:"Divya", 
    lastName:"Sai reddy",
    age:22
}
console.log("person details:-",person);
console.log("keys in person object:-",Object.keys(person));
console.log("values in person object:-",Object.values(person));

// Create an object representing a course with properties title, instructor, and duration. Use Object.entries() to get the key-value pairs, and then modify the object using the delete operator to remove the duration property.
var course={
    title:"javaScript", 
    instructor:"vamsi", 
    duration:"2 months"
}
console.log("course details:-",course);
console.log("consolling bu entries method:-",Object.entries(course));
delete course.duration;
console.log("after removed the duration property:-",course);

// Create an object representing an employee with properties name, position, and salary. Seal the object using Object.seal(), modify the position, and then use Object.keys() to list all properties and verify that no new properties can be added.

var employee={
    name:"Ramya", 
    position:"fronted developer", 
    salary:30000
}
console.log("employee details:-",employee);
Object.seal(employee)
console.log("employee object sealed");
employee.position="backend developer";
console.log("list all properties:-",Object.keys(employee));

console.log("after modification of object:-",employee);
// Write a program where you need to extract the middle part of the string and converted it to upperacse
var s1="Flowers";
console.log("String is:-",s1);
var s2=s1.slice(1,length-1);
console.log("middle part of the string is:-",s2);
console.log("converted middle part to upperacse:--", s2.toUpperCase());

// Write a program that converts a string to uppercase and then calculates the length of the resulting string.
var a1="beetroot";
console.log("String is:--",a1);
console.log("converting a string to uppercase:-", a1.toUpperCase());
console.log("length of the resulting string is:--", a1.length);

console.log("Question-3:--");
// Write a program that retrieves the character at a specific position in a string, and then finds the ASCII value (character code) of that character.
var a2="divya"
console.log("String is:-",a2);
var b=a2.charAt(3); 
console.log("retriving the character at a specific position in a string:-" , b);
console.log("ASCII value of c harAt(3):--", b.charCodeAt());

// Write a program that removes extra spaces from the start and end of a string, and then slices a portion of the string starting from the second character to the fourth character.
var a3="  butterfly  ";
console.log("String is:-",a3);
let c=a3.trim();
console.log("removing extra spaces from the start and end of a string:--", c);
console.log("slicing a portion of the string starting from the second character to the fourth character:-", c.slice(1,4));

console.log("Question-5:--");
// Write a program that concatenates two strings where the first string is in its original case and the second string is converted to lowercase before concatenation.
var x1="There"
var x2=" are FLOWERS"
console.log("String1:--",x1);
console.log("String2:--",x2);
let x3=x2.toLowerCase()
console.log("coverting string2 to lowerCase:-",x3);
console.log("concating the string1 and string2:-",x1.concat(x3));

console.log("Question-6:--");
// Write a program that removes leading spaces from a string, and then slices the string starting from the second character to the end.
var h1="   Flower "
console.log("string:--",h1);
let h2=h1.trimStart();
console.log("removed leading spaces from string:-",h2);
console.log("slicing starting from the second character to the end:-",h2.slice(1));

// Write a program that retrieves a specific character from a string and converts it to uppercase.
var p="parrot";
console.log("string:-",p);
let p2=p.charAt(1);
console.log("reteriving a character from a string:-",p2);
console.log("converting char to uppercase:-",p2.toUpperCase());


