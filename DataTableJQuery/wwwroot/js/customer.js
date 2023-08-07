$(document).ready(function () {
    loadDataTable();
   
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            url: '/Customer/GetJson',
            dataSrc: 'data',
}, 
        
        "columns": [
           
            { data: 'firstName' },
            { data: 'lastName' },
            { data: 'contact' },
            { data: 'email' },
            { data: 'dateOfBirth' }
           
        ]
    });
    
}



