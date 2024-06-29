function deleteRow(row, rowId) {
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
                response = deleteRowAction(`${rowId}`)
                var i = row.parentNode.parentNode.rowIndex;
                document.getElementById("table3").deleteRow(i);
            }
        });
}
function editRowNew(button, tableId,fungsi,fungsiDel) {
    var row = button.closest('tr');
    var cells = row.querySelectorAll('td');

    // Store original values in data attributes for cancelation
    cells.forEach((cell, index) => {
        if (index > 0 && index < cells.length - 1) { // Skip the first and last cells
            cell.setAttribute('data-original', cell.innerText);
        }
    });

    // Replace content with inputs
    cells.forEach((cell, index) => {
        if (index > 0 && index < cells.length - 1) { // Skip the first and last cells
            var originalValue = cell.innerText;
            cell.innerHTML = `<input type="text" value="${originalValue}" data-original="${originalValue}" name="input${index}">`;
        } else if (index === cells.length - 1) {
            // Add save and cancel icons in the last cell 
            cell.innerHTML = `
                <i class="fas fa-save" onclick="${fungsi}('${tableId}', this)"></i>
                <i class="fas fa-times ml-3" onclick="cancelEditNew(this, '${tableId}','${fungsi}', '${fungsiDel}')"></i>
            `;
        }
    });
}

function cancelEditNew(button, tableId, fungsi, fungsiDel) {
    var row = button.closest('tr');
    var cells = row.querySelectorAll('td');

    cells.forEach((cell, index) => {
        if (index > 0 && index < cells.length - 1) { // Skip the first and last cells
            var originalValue = cell.getAttribute('data-original');
            cell.innerText = originalValue;
        } else if (index === cells.length - 1) {
            // Restore the original actions
            cell.innerHTML = `
                <i class="fas fa-edit editButton" onclick="editRowNew(this, '${tableId}', '${fungsi}', '${fungsiDel}')"></i>
                <i class="fas fa-times deleteButton ml-3" onclick="${fungsiDel}('${tableId}')"></i>
            `;
        }
    });
}