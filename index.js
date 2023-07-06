var table = document.getElementById("table"),rIndex;
for(var i = 1; i < table.rows.length; i++){
    table.rows[i].onclick = function(){
        rIndex = this.rowIndex;
        console.log(rIndex);

        document.getElementById("fname").value = this.cells[1].innerHTML;
        document.getElementById("Last Name").value = this.cells[2].innerHTML;
        document.getElementById("Country").value = this.cells[3].innerHTML;
        document.getElementById("mobile Number").value = this.cells[4].innerHTML;

    }
}

function editRow(){
    table.rows[rIndex].cells[1].innerHTML = document.getElementById("fname").value;
    table.rows[rIndex].cells[2].innerHTML = document.getElementById("Last Name").value;
    table.rows[rIndex].cells[3].innerHTML = document.getElementById("Country").value;
    table.rows[rIndex].cells[4].innerHTML = document.getElementById("mobile Number").value;
}

function editTableDisplay(){
    document.querySelector(".editTable").setAttribute('style','display: block;')
}