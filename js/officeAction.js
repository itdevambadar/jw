function deleteRowOfficeAction(row, rowId) {
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
            response = deleteOfficeAction(`${rowId}`)
            var i = row.parentNode.parentNode.rowIndex;
            document.getElementById("table22").deleteRow(i);
        }
    });
}
function editRowOfficeAction(button, idrow) {
    var row = button.closest('tr');
    var cells = row.querySelectorAll('td');
    var no = cells[0].innerText;
    var mail_subject = cells[1].id;
    var examiner_name = cells[2].innerText;
    var mail_date = cells[3].innerText;
    var limit = cells[4].innerText;
    var deadline_date = cells[5].innerText;
    var filing_eot = cells[6].innerText;
    var limit_eot = cells[7].innerText;
    var new_deadline_date = cells[8].innerText;
    var instruction_date = cells[9].innerText;
    var filing_response = cells[10].innerText;

    row.innerHTML = `
        <td class="text-center">${no}</td>
        <td class="text-center"><input type="text" value="${mail_subject}" name="mail_subject"></td>
        <td class="text-center"><input type="text" value="${examiner_name}" name="examiner_name"></td>
        <td class="text-center"><input type="date" value="${mail_date}" name="mail_date"></td>
        <td class="text-center"><input type="text" value="${limit}" name="limit"></td>
        <td class="text-center"><input type="date" value="${deadline_date}" name="deadline_date"></td>
        <td class="text-center"><input type="text" value="${filing_eot}" name="filing_eot"></td>
        <td class="text-center"><input type="text" value="${limit_eot}" name="limit_eot"></td>
        <td class="text-center"><input type="date" value="${new_deadline_date}" name="new_deadline_date"></td>
        <td class="text-center"><input type="date" value="${instruction_date}" name="instruction_date"></td>
        <td class="text-center"><input type="text" value="${filing_response}" name="filing_response"></td>
        <td class="text-center">
            <i class="fas fa-save updateButton" onclick="updateOfficeAction('${idrow}')"></i>
            <i class="fas fa-times deleteButton ml-3" onclick="cancelEditOfficeAction(this, '${no}', '${mail_subject}', '${examiner_name}', '${mail_date}', '${limit}', '${deadline_date}', '${filing_eot}', '${limit_eot}', '${new_deadline_date}', '${instruction_date}', '${filing_response}', '${idrow}')"></i>
        </td>
    `;
}
function cancelEditOfficeAction(button, no, mail_subject, examiner_name, mail_date, limit, deadline_date, filing_eot, limit_eot, new_deadline_date, instruction_date, filing_response, idrow) {
    var row = button.closest('tr');
    row.innerHTML = `
        <td class="text-center">${no}</td>
        <td class="text-center">${mail_subject}</td>
        <td class="text-center">${examiner_name}</td>
        <td class="text-center">${mail_date}</td>
        <td class="text-center">${limit}</td>
        <td class="text-center">${deadline_date}</td>
        <td class="text-center">${filing_eot}</td>
        <td class="text-center">${limit_eot}</td>
        <td class="text-center">${new_deadline_date}</td>
        <td class="text-center">${instruction_date}</td>
        <td class="text-center">${filing_response}</td>
        <td class="text-center"><i onclick="editRowOfficeAction(this, '${idrow}')" class="fas fa-edit editButton"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteRowOfficeAction(this, '${idrow}')"></i></td>
    `;
}