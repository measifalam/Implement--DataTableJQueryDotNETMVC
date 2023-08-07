$(document).ready(function () {
    loadDataTable();
   
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            url: '/Customer/GetJson',
            dataSrc: 'data',
            type:"POST"
           
}, 
        
        "columns": [
           
            { "data": 'firstName', name:"firstName" },
            { "data": 'lastName', name: "lastName" },
            { "data": 'contact', name: "contact" },
            { "data": 'email', name: "email" },
            { "data": 'dateOfBirth', name: "dateOfBirth" }
           
        ],
        "serverSide": "true",
        "order": [0, "asc"],
        "processing": "true",
        "language": {
            "processing": "Loading dude"
        }
    });
    
}



