// take two strings with spaces at starting of one string and at the ending of another string remove the spaces and concat the both string and convert the combined string into uppercase string
var a1="   Hello"
var a2="My name is Eindhu     "
console.log("String-1:--", a1);
console.log("String-2:--", a1);
console.log("---Trim Method---");
console.log("trim-strat:-",a1.trimStart());
console.log("trim-end:--",a2.trimEnd());
var a3=a1.concat(" ",a2);
console.log("concating the string1 and string2:-",a3);
console.log("concated string converting to Uppercase:--",a3.toUpperCase());


// Extract Middle Portion of the string and get the last index of char of extracted string and Convert the portion to Lowercase
var s1="Hello My Name Is Eindhu"
console.log("String:---",s1);
var s2=s1.slice(5,13)
console.log("extracting Middle part of string:--",s2);
console.log("extracted the last char of portion:--",s2.slice(-1));
console.log("Coverting part of string LowerCase:--",s2.toLocaleLowerCase());

// take a single char and concat string to that char and convert the resulted string to uppercase and then extract the last second char 

var a="A"
var b="carrot"
console.log("char:--",a);
console.log("String:--",b);
var c =a.concat(" ",b)
console.log("concating the char and string:--",c);
console.log("converting string to UpperCase:--",c.toUpperCase());
console.log("Last second char of String:--",c[c.length-2]);

// we have 2 string and extract first 3 chars of first string and extra last 3 chars of another string and concat those 2 results together and first char and last char of the resulted concatinated string should as uppercase

var s3="Beetroot"
var s4="Carrot"
console.log("String1:--",s3);
console.log("String2:--",s4);
var c1=s1.slice(0,3)
var c2=s2.slice(-3)
var c3=c1.concat(c2)
console.log("extracting first 3 chars of first string:--",c1);
console.log("last 3 chars of string2:--",c2);
console.log("concating the extracting char:--",c3);
console.log("concated string to UpperCase:--",c3.toUpperCase());


// You are given a string with extra spaces at the beginning and end. You need to trim the string, make the first and last characters uppercase,  extract a specific part of the string,  concatenate it with another string

var v1="   plants   "
var v2=v1.trim()
var v3=v2.length-1
var v4=" are grown"
console.log("string:--",v1);
console.log("trim method to string:--",v2);
console.log(v2[0].toUpperCase());
console.log(v2[v2.length-1].toUpperCase());
console.log("Making the first and last characters uppercase:-", 
v2.charAt(0).toUpperCase() + v2.slice(1,v3)+v2[v2.length-1].toUpperCase());
var v5=v2.slice(2,6)
console.log("extracting a specific part of the string:--",v5);
console.log("extracted part concatenating with another string:--",v5.concat(v4));





// "hello there , how are you " find the index of are word in the sentence
var z="hello there , how are you "
console.log("Sentence:--",z);
var z1=z.split(" ")
console.log(z1);
console.log(z1.indexOf("are"));






