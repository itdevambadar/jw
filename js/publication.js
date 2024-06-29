function deleteRowPublication(row, rowId) {
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
            response = deletePublication(`${rowId}`)
            var i = row.parentNode.parentNode.rowIndex;
            document.getElementById("table20").deleteRow(i);
        }
    });
}
function editRowPublication(button, idrow) {
    var row = button.closest('tr');
    var cells = row.querySelectorAll('td');
    var no = cells[0].innerText;
    var acceptance_date = cells[1].innerText;
    var received_date = cells[2].innerText;
    var publication_date = cells[3].innerText;
    var publication_no = cells[4].innerText;
    var signing_name = cells[5].innerText;
    var send_date_client = cells[6].innerText;

    row.innerHTML = `
        <td class="text-center">${no}</td>
        <td class="text-center"><input type="date" value="${acceptance_date}" name="acceptance_date"></td>
        <td class="text-center"><input type="date" value="${received_date}"name="received_date"></td>
        <td class="text-center"><input type="date" value="${publication_date}" name="publication_date"></td>
        <td class="text-center"><input type="text" value="${publication_no}" name="publication_no"></td>
        <td class="text-center"><input type="text" value="${signing_name}" name="signing_name"></td>
        <td class="text-center"><input type="date" value="${send_date_client}" name="send_date_client"></td>
        <td class="text-center">
            <i class="fas fa-save updateButton" onclick="updatePublication('${idrow}')"></i>
            <i class="fas fa-times deleteButton ml-3" onclick="cancelEditPublication(this, '${no}', '${acceptance_date}', '${received_date}', '${publication_date}', '${publication_no}', '${signing_name}', '${send_date_client}', '${idrow}')"></i>
        </td>
    `;
}
function cancelEditPublication(button, no, acceptance_date, received_date, publication_date, publication_no, signing_name, send_date_client, idrow) {
    var row = button.closest('tr');
    row.innerHTML = `
        <td class="text-center">${no}</td>
        <td class="text-center">${acceptance_date}</td>
        <td class="text-center">${received_date}</td>
        <td class="text-center">${publication_date}</td>
        <td class="text-center">${publication_no}</td>
        <td class="text-center">${signing_name}</td>
        <td class="text-center">${send_date_client}</td>
        <td class="text-center"><i onclick="editRowPublication(this, '${idrow}')" class="fas fa-edit editButton"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteRowPublication(this, '${idrow}')"></i></td>
    `;
}