// var database = [
//     {
//         username: 'andrei',
//         password: 'secret'
//     },
//     {
//         username: 'andrei1',
//         password: 'secret1'
//     },
//     {
//         username: 'andrei2',
//         password: 'secret2'
//     },
//     {
//         username: 'andrei3',
//         password: 'secret3'
//     }
// ];

// var newsFeed = [
//     {
//         username: "bobby",
//         timeline: "blabal"
//     },
//     {
//         username: 'sally',
//         timeline: 'javascript is cool'
//     },
//     {
//         username: 'sally2',
//         timeline: 'javasc2ript is cool'
//     },
//     {
//         username: 'sally3',
//         timeline: 'javasc3ript is cool'
//     },
//     {
//         username: 'sally4',
//         timeline: 'javasc4ript is cool'
//     }

// ];

// var usernamePrompt = prompt("username?");
// var passwordPrompt = prompt("password?");
// function isUserValid(username, password) {
//     for(var i =0; i< database.length; i++) {
//         if(database[i].username===username && database[i].password===password) {
//             return true;
//         }
//     }
//     return false;
// }

// function signIn() {
//     if (isUserValid(usernamePrompt, passwordPrompt)===true){
//         console.log(`hello ${usernamePrompt}, here's your newsfeed ${newsFeed}`)
//     } else {
//         alert('fuck outta here')
//     }
// }

// signIn();
// //signIn("andrei", "secret");

// var todos = [
//     "clean room",
//     "brush teath",
//     "exercise",
//     "study javascript",
//     "eat healthy"
// ]; 

// // for(var i=0; i<todos.length; i++) {
// //     todos[i]=todos[i]+"!";
// // }

// // var i = 0;
// // while(i<todos.length){
// //     todos[i]=todos[i]+"!";
// //     i++;
// // }

// // var i = 0
// // do {
// //     todos[i]=todos[i]+"!";
// //     i++;
// // } while(i<todos.length);


// todos.forEach(item => {
//     item = item+"!"
// })


// DOM Selectors
// --------------
// getElementsByTagName //returns array of elements with the tag name
// getElementsByClassName
// getElementById

// querySelector
// querySelectorAll

// getAttribute
// setAttribute

// ##Changing Styles
// style.{property} //ok

// className //best
// classList //best

// classList.add
// classList.remove
// classList.toggle

// ##Bonus
// innerHTML //DANGEROUS

// parentElement
// children

// ##It is important to CACHE selectors in variables

var button = document.getElementById("enter");

var input = document.getElementById("userinput");

var shoppingList = document.querySelector("ul")

function inputLength(){
    return input.value.length;
}

function addItem(){
    var li = document.createElement("li")
    var textNode = document.createTextNode(input.value+" ")
    var deleteButton = document.createElement("button")
    var deleteButtonTextNode = document.createTextNode("Delete")
    li.appendChild(textNode)
    deleteButton.appendChild(deleteButtonTextNode)
    deleteButton.className='delete'
    li.appendChild(deleteButton)
    shoppingList.appendChild(li)    
    input.value="";
} 

function addAfterClick() {
    if(inputLength()) {
        addItem();
    }
}

function addAfterEnter(event) {
    if(inputLength() && event.which===13) {
        addItem();
    }
}

function toggleDone(event) {
    event.target.classList.toggle("done")
}

function deleteItem(event) {
    shoppingList.removeChild(event.target.parentElement)
}

function deleteOrToggle(event) {
    if(event.target.className==='delete'){
        deleteItem(event)
    } else {
        toggleDone(event)
    }
}

button.addEventListener("click", addAfterClick);

input.addEventListener("keypress", addAfterEnter)   

shoppingList.addEventListener("click", deleteOrToggle)
