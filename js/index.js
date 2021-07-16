// function for_loop() {
// let start = 1;
// let end = 50;

// // }
// for (start = 1; start <= end; start = start + 2) {
//     console.log(start);
// }
function oddForLoop(start, end) {
    // document.querySelector(".result_table").appendChild(h3)
    // innerHTML = "</h3>your desire odd are: </h3>";
    for (let i = start; i <= end; ++i) {
        if (i % 2 != 0) {
            var node = document.createElement("LI");
            var textNode = document.createTextNode(i);
            node.appendChild(textNode);
            document.getElementById("result").appendChild(node);
            // document.querySelector('#resultli').appendChild(node).style.display = " inline-block";
        }
    }
}


// do while oddForLoop

function odd_DoWhileloop(start, end) {
    let i = start;
    do {
        if (i % 2 != 0) {
            var node = document.createElement("LI");
            var textNode = document.createTextNode(i);
            node.appendChild(textNode);
            document.getElementById("result").appendChild(node);
        }
        i = i + 1;
    }
    while (i <= end)
}

// while loop
function odd_Whileloop(start, end) {
    let i = start;
    while (i <= end) {
        if (i % 2 != 0) {
            var node = document.createElement("LI");
            var textNode = document.createTextNode(i);
            node.appendChild(textNode);
            document.getElementById("result").appendChild(node);
        }
        i = i + 1;
    }
}

// recursive function
function oddrFunction(start, end) {
    let i = start;
    if (i % 2 != 0) {
        var node = document.createElement("LI");
        var textNode = document.createTextNode(i);
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
    if (i <= end) {

        return oddrFunction(++i, end)
    }

}

// find even number 
// for loop 

function even_ForLoop(start, end) {
    for (let i = start; i <= end; ++i) {
        if (i % 2 == 0) {
            var node = document.createElement("LI");
            var textNode = document.createTextNode(i);
            node.appendChild(textNode);
            document.getElementById("result").appendChild(node);

        }
    }
}
//  do while loop 

function even_DoWhileLoop(start, end) {
    let i = start;
    do {
        if (i % 2 == 0) {
            var node = document.createElement("LI");
            var textNode = document.createTextNode(i);
            node.appendChild(textNode);
            document.getElementById("result").appendChild(node);
        }
        i = i + 1;
    }
    while (i <= end);
}

// while loop
function even_WhileLoop(start, end) {
    let i = start;
    while (i <= end) {
        if (i % 2 == 0) {
            var node = document.createElement("LI");
            var textNode = document.createTextNode(i);
            node.appendChild(textNode);
            document.getElementById("result").appendChild(node);
        }
        i = i + 1;
    }
}
// recursive function
function even_rFunction(start, end) {
    let i = start;
    if (i % 2 == 0) {
        var node = document.createElement("LI");
        var textNode = document.createTextNode(i);
        node.appendChild(textNode);
        document.getElementById("result").appendChild(node);
    }
    if (i <= end) {

        return oddrFunction(++i, end);
    }

}