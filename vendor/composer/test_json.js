//Fetch or AXOIS
const fetch = require('node-fetch');

async function sendData(data) {
    let url = 'https://www.example.com/test'   // ผู้รับปลายทาง
    let content = data;
    if(typeof data == "object"){ 
        // แปลง object ให้กลายเป็น string ก่อน
        content = JSON.stringify(data)
    }
    const response = await fetch(url, {
        method: 'POST', // วิธีที่ส่ง *GET, POST, PUT, DELETE, etc.
        body: "" + content,  // เนื้อหาข้อมูลต้องเป็น string เท่านั้น
    });
    return response.json();  
}
function ex1() {
    let fruits1 = "apple,banana,kiwi,orange";
    let fruits2 = ["apple", "banana", "kiwi", "orange"];
    let fruits3 = {
        "apple": "apple",
        "banana": "banana",
        "kiwi": "kiwi",
        "orange": "orange"
    };
    console.log(typeof fruits1 == "object");
    console.log(typeof fruits2 == "object");
    console.log(typeof fruits3 == "object");
    //sendData(fruits1)
}
ex1();
function ex2() {
    let obj = { "name": "Kate", "pet": { "dog": "Corgi", "cat": "Persian" } };
    console.log(obj);

    let strJSON = JSON.stringify(obj);
    console.log(strJSON);
}

ex2();
function ex3() {
    let strJSON = '{ "name": "Kate", "pet": { "dog": "Corgi", "cat": "Persian" } }';
    console.log(strJSON);

    let obj = JSON.parse(strJSON);
    console.log(obj);
}
// ex1();
// ex2();
ex3();
function ex4() {
    let fruits1 = "apple,banana,kiwi,orange";
    let fruits2 = ["apple", "banana", "kiwi", "orange"];
    let fruits3 = {
        "apple": "apple",
        "banana": "banana",
        "kiwi": "kiwi",
        "orange": "orange"
    };
    console.log(fruits1);    
    console.log(fruits1[0]);   
    console.log(fruits2[0]);
    console.log(fruits3.orange);
}
ex4();
function ex5(){
    let data = {
        "title": "This is String",
        "price": 210,
        "details": {
            "features": "Strong and lightweight",
            "rating": "excellence"
        },
        "comments": ["Yes", "No", "Ok", "Happy"],
        "active": true
    }
    console.log(data.title);
    console.log(data.price);
    console.log(data.details.features);
    console.log(data.details.rating);
    console.log(data.comments[0]);
    console.log(data.comments[3]);
    console.log(data.active);
}
ex5();
