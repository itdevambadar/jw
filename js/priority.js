function deletePatentPriority(row, rowId) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $("#loading-wrapper").show();
            response = deleteRowPriority(`${rowId}`)
            var i = row.parentNode.parentNode.rowIndex;
            document.getElementById("table4").deleteRow(i);
        }
    })
};