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
        harry: 99.977
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