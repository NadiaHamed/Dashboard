window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const datatablesSimple = document.getElementById('datatablesSimpl1');
    if (datatablesSimple) {
        new simpleDatatables.DataTable(datatablesSimple);
        $('#datatablesSimple').DataTable( {
            ajax: '../json/data.json',
            columns: [
                { data: 'name' },
                { data: ' address'},
                { data: 'city' },
                { data: 'age' },
                { data: 'last visit' },
                { data: 'orders' }
    ]
}  );
        
      
    }
});
