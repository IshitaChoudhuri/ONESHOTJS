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