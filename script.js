
function appendRow(){
    let table = document.getElementById("myTable");
    let row = table.insertRow(table.rows.length);

    for(let i = 0; i < table.rows[0].cells.length;i++){
        createCell(row.insertCell(i), '', 'row');
    }
}
 

function deleteRow(){
    let a = document.getElementById("myTable");
    a.deleteRow(-1);
}


// create DIV element and append to the table cell
function createCell(cell, text, style) {
    let div = document.createElement('div'); // create DIV element
    let txt = document.createTextNode(text); // create text node
    div.appendChild(txt);                    // append text node to the DIV
    cell.appendChild(div);                   // append DIV to the table cell
}

function appendColumn() {
    let table = document.getElementById('myTable'); // table reference
    // open loop for each row and append cell
    for (let i = 0; i < table.rows.length; i++) {
        createCell(table.rows[i].insertCell(table.rows[i].cells.length), '', 'col');
    }
}

// delete table columns with index greater then 0
function deleteColumn() {
    let table = document.getElementById('myTable'); // table reference
    //let lastCol = table.rows[0].cells.length - 1;    // set the last column index
    
    // delete cells with index greater then 0 (for each row)
    for (let i = 0; i < table.rows.length; i++) {
            table.rows[i].deleteCell(i - 1);
    }
}

// function that deletes all columns and all rows
function deleteAll(){
    
}

//=====================================================================


// function changeColor(){
//     let myTable = document.getElementById("myTable");
//     let rows = myTable.getElementsByTagName('td')
//     for(let i = 0; i < rows.length;i++){
//         rows[i].onclick = function() {
//             this.style.backgroundColor = '#ff0000';
//         }
//     rows[i].onmouseout = function() {
//         this.style.backgroundColor = '';
//         }    
//     }   
// }

//changes the color of a cell from a color picker
function changeColor(){
    let colorPicker = document.getElementById("colorPicker");
    let table = document.getElementById("myTable");
    let rows = table.getElementsByTagName('td')
    
    for(let i = 0; i < rows.length;i++){
        rows[i].onclick = function() {
            this.style.backgroundColor = colorPicker.value;
        }
        rows[i].onmouseout = function() {
            this.style.backgroundColor = colorPicker.value;
            }    
    }   
}

//changes the color of the whole table
// function colorAll(){
//     let colorPicker = document.getElementById("colorPicker");
//     let table = document.getElementById("myTable");
//     let rows = table.getElementsByTagName('td')
    
//     for(let i = 0; i < rows.length;i++){
//         rows[i].onclick = function() {
//             table.style.backgroundColor = colorPicker.value;
//         }
//     }   
// }

//changes the cells back to their original color
function clearAll(){
    // let colorPicker = document.getElementById("colorPicker");
    let table = document.getElementById("myTable");
    // let rows = table.getElementsByTagName('td');
    
    for(let i = 0; i < rows.length;i++){
        rows[i].onclick = function() {
            table.style.backgroundColor;
        }
    }   
}



