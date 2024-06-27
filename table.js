function isvalidgpa(gpa){
    var reg = /[0-9][.][0-9]/;
    return reg.test(gpa);
}
function isValidYearpassed(passedyear) {
    return /^\d{4}$/.test(passedyear);
}
function isYearInPast(passedyear) {
    const currentYear = new Date().getFullYear();
    return parseInt(passedyear) <= currentYear;
}

function addRowToTable() {
    var level = document.getElementsByName("levels")[0].value;
    var university = document.getElementsByName("uni")[0].value;
    var address = document.getElementsByName("address")[0].value;
    var board = document.getElementsByName("board")[0].value;
    var gpa = document.getElementsByName("gpa")[0].value;
    var passedyear = document.getElementsByName("pyear")[0].value;
   

    var table = document.getElementById('educationTable');
    var newRow = table.insertRow(-1); // Insert at the end of the table - creates a new row

    var idCell = newRow.insertCell(0); // creates a new cell (<td>) 
    idCell.textContent = table.rows.length - 1; // Generate ID automatically - text content of the cell (idCell)

    var levelCell = newRow.insertCell(1); 
    levelCell.textContent = level;

    var uniCell = newRow.insertCell(2);
    uniCell.textContent = university;
    
    var addressCell = newRow.insertCell(3);
    addressCell.textContent = address;
    
    var boardCell = newRow.insertCell(4);
    boardCell.textContent = board;
    
    var gpaCell = newRow.insertCell(5);
    gpaCell.textContent = gpa;
    
    var passedYearCell = newRow.insertCell(6);
    passedYearCell.textContent = passedyear;

    var actionCell = newRow.insertCell(7);
   
    var deleteButton = document.createElement('button');
    deleteButton.style.borderRadius = '15px';
    deleteButton.style.backgroundColor = 'rgb(0, 255, 102)';
    deleteButton.textContent = 'delete';
    deleteButton.addEventListener('click', function() {
        var rowIndex = this.parentNode.parentNode.rowIndex; // Get the index of the row
        if (confirm("Are you sure, you want to delete?")) {
            table.deleteRow(rowIndex);
        } 
    });
    actionCell.appendChild(deleteButton);

    var editButton = document.createElement('button');
    editButton.style.borderRadius = '15px';
    editButton.style.backgroundColor = 'rgb(0, 255, 102)';
    editButton.textContent = 'edit';
    editButton.addEventListener('click', function() {
        // Get the row's data
        var cells = this.parentNode.parentNode.cells;
        var level = cells[1].textContent;
        var university = cells[2].textContent;
        var address = cells[3].textContent;
        var board = cells[4].textContent;
        var gpa = cells[5].textContent;
        var passedyear = cells[6].textContent;

        // Populate the input fields with the row's data
        document.getElementsByName("levels")[0].value = level;
        document.getElementsByName("uni")[0].value = university;
        document.getElementsByName("address")[0].value = address;
        document.getElementsByName("board")[0].value = board;
        document.getElementsByName("gpa")[0].value = gpa;
        document.getElementsByName("pyear")[0].value = passedyear;

        // Change the Save button to Update
        var saveButton = document.querySelector('.save button');
        saveButton.textContent = 'Update';
        saveButton.onclick = function() {
       
            cells[1].textContent = document.getElementsByName("levels")[0].value;
            cells[2].textContent = document.getElementsByName("uni")[0].value;
            cells[3].textContent = document.getElementsByName("address")[0].value;
            cells[4].textContent = document.getElementsByName("board")[0].value;
            cells[5].textContent = document.getElementsByName("gpa")[0].value;
            cells[6].textContent = document.getElementsByName("pyear")[0].value;
            // Reset the form
            document.querySelector('form').reset();
            // Change the button back to Save
            saveButton.textContent = 'Save';
            saveButton.onclick = isvalidform;

           
        };
    
    });

    actionCell.appendChild(editButton);
}

function isvalidform(){
     var level= document.getElementsByName("levels")[0].value;
     var university = document.getElementsByName("uni")[0].value;
     var address = document.getElementsByName("address")[0].value;
     var board=document.getElementsByName("board")[0].value;
     var gpa=document.getElementsByName("gpa")[0].value;
     var passedyear =document.getElementsByName("pyear")[0].value;

    if(level===""){
        alert("please enter your level");
        return false;
    }
    else if(university===""){
        alert("please enter university");
        return false;
    }
    else if(address===""){
        alert("please enter the address");
        return false;
    }
    else if(board===""){
        alert("please enter your board");
        return false;
    }
    else if(!isvalidgpa(gpa)){
        alert("please enter gpa in decimal");
        return false;
    }
    else if(!isValidYearpassed(passedyear)){
        alert("please enter valid year");
        return false;
    }
    else if(!isYearInPast(passedyear)){
        alert("please enter valid year");
        return false;
    }
    else{
       addRowToTable();
       alert ("successfully submitted");
       return true;
    }

}
