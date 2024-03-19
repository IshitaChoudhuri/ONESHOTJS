    //1. Ways to print in JavaScript
    //console.log("Hello World");
    //alert("Me");
    // document.write("Hello World");

    //2. Javascript console API
    console.log("Hello World");
    console.warn("This is a warning");
    console.error("This is an error");

    //3. JavaScript Variables
    // What are Variables? - Containers to store data values
    var number1 = 34;
    var number2 = "34";
    console.log(number1 + number2);

    //4. Data types in JavaScript
    // Numbers: Integers, Floats, Hex
    var num1 = 455;
    var num2 = 56.76;
    var num3 = 0xFF;
    console.log("Number :" + num1 + " " + num2 + " " + num3);
    
    // Strings
    var str1 = "This is a string";
    var str2 = 'This is also a string';
    console.log("String :" + str1 + " " + str2);

    // Objects
    var marks = {
        ravi: 34,
        shubham: 78,
        ishita: 99.977
    }
    console.log(marks);

    // Booleans
    var a = true;
    var b = false;
    console.log(a, b);

    var und;
    console.log(und);

    var n=null;
    console.log(n);

    //Arrays
    var arr = [1, 2, "string", 4, 5];
    console.log(arr);
    console.log(arr[2]);

    //Datatypes
    /*Primitive Data Types- Number, String, Boolean, Undefined, Null, (Symbol)
    Reference Data Types- Arrays, Objects*/

    //Operators in JavaScript
    //Arithmetic Operators
    var a = 100;
    var b = 10;
    console.log("The value of a + b is ", a+b);
    console.log("The value of a - b is ", a-b);
    console.log("The value of a * b is ", a*b);
    console.log("The value of a / b is ", a/b);

    //Assignment Operators
    var c = b;
    console.log(c);
    c+=b;
    console.log(c);

    //Comparison Operators
    var x = 34;
    var y = 56;
    console.log(x==y);
    console.log(x>=y);
    console.log(x<=y);
    console.log(x!=y);

    //Logical Operators
    //Logical and
    console.log(true && true);
    console.log(false && false);
    console.log(true && false);

    //Logical or
    console.log(true || true);
    console.log(false || false);
    console.log(true || false);

    //Logical not
    console.log(!true);
    console.log(!false);

    //Functions in JavaScript
    function avg(a, b){
        return(console.log("The average of",a,"and",b,"is ",(a+b)/2));
    }
    c1 = avg(4, 6);

    function cgpa(marks){
        return(console.log("The CGPA is ",marks/9.5));
    }
    c2 = cgpa(86);

    //Conditional Statements
    function vote(age)
        {
            if (age>18) {
        console.log("You're eligible for voting");
        } else {
        console.log("You're not eligible for voting");
    }
    }
    vote(99)
    age=18;
    switch(age){
        case 18:
            console.log("You're 18");
            break;
        case 28:
            console.log("You're 28");
            break;
        case 38:
            console.log("You're 38");
            break;
        default:
            console.log("You're unknown age");
            break;
    }

    //Loops in JavaScript

    //For loop
    var arr = [1, 2, 3, 4, 5, 6]; //scope of var is in the function it is declared in
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    //For each loop
    arr.forEach(function(item){
        console.log(item*item);
    })

    //While loop
    let j = 0; //scope of let is within the block it is declared in
    while (j<5) {
        console.log(j);
        j++;
    }

    //Do while loop
    let k = 0; 
    do {
        console.log(k*5);
        k++;
    } while (k<5);  

    //Constant
    // var a=10;
    // const ac=0;
    // ac++;

    //break and continue
    let l = 0;
    do {
        if (l===5) {
            break;
        }
        console.log(l);
        l++;
    } while (l<10);

    let m = 0;
    do {
        if (m===5) {
            m++;
            continue;
        }
        console.log(m*7);
        m++;
    } while (m<10);

    //Array methods
    let myArr = ["Fan", "Camera", 34, null, true, 6.7];
    console.log(myArr.length);
    // myArr.pop();
    myArr.push("Ishita");
    myArr.shift();
    const newLen = myArr.unshift("Ishita");
    console.log(newLen);
    console.log(myArr);

    //sort method
    // let arr1 = [1, 244, 35, 411, 5, 65];
    // arr2=arr1.sort();
    // console.log(arr2);
    
    //String methods
    let myString = "Ishita is a good good girl";
    console.log(myString.length);
    console.log(myString.indexOf("good"));
    console.log(myString.lastIndexOf("good"));
    console.log(myString.slice(0, 6));
    d = myString.replace("Ishita", "Munu");
    console.log(d, myString);

    //Date methods
    myDate= new Date();
    console.log(myDate.getTime());
    console.log(myDate.getFullYear());
    console.log(myDate.getDay());
    console.log(myDate.getMinutes());
    console.log(myDate.getHours());
    console.log(myDate.getSeconds());


    
    