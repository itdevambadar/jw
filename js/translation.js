function deleteRowTranslation(row, rowId) {
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
            response = deleteTranslation(`${rowId}`)
            var i = row.parentNode.parentNode.rowIndex;
            document.getElementById("table10").deleteRow(i);
        }
    });
}
function editRowTranslation(button, idrow) {
    var row = button.closest('tr');
    var cells = row.querySelectorAll('td');
    var no = cells[0].innerText;
    var notsent = cells[1].id;
    var reason = cells[2].innerText;
    var translator = cells[3].innerText;
    var sendate = cells[4].innerText;
    var limitday = cells[5].innerText;
    var deadline_date = cells[6].innerText;
    var received_Date = cells[7].innerText;
    var paid_date = cells[8].innerText;
    var total_payment = cells[9].innerText;
    var note = cells[10].innerText;

    var translationOptions = ['PCT', 'New Order', 'Annuity'];

    var translationDropdown = '<select name="translator">';
    translationOptions.forEach(function (option) {
        var selected = option === translator ? 'selected' : '';
        translationDropdown += `<option value="${option}" ${selected}>${option}</option>`;
    });
    translationDropdown += '</select>';

    row.innerHTML = `
        <td class="text-center">${no}</td>
        <td class="text-center"><input type="checkbox" value="${notsent}" ${notsent == 'true' ? 'checked' : ''} name="notsent"></td>
        <td class="text-center"><input type="text" value="${reason}" name="reason"></td>
        <td class="text-center">${translationDropdown}</td>
        <td class="text-center"><input type="date" value="${sendate}" name="sendate"></td>
        <td class="text-center"><input type="date" value="${limitday}" name="day_limit"></td>
        <td class="text-center"><input type="date" value="${deadline_date}" name="deadline_date"></td>
        <td class="text-center"><input type="date" value="${received_Date}"name="received_Date"></td>
        <td class="text-center"><input type="date" value="${paid_date}" name="paid_date"></td>
        <td class="text-center"><input type="text" value="${total_payment}" name="total_payment"></td>
        <td class="text-center"><input type="text" value="${note}" name="note"></td>
        <td class="text-center">
            <i class="fas fa-save updateButton" onclick="updateTranslation('${idrow}')"></i>
            <i class="fas fa-times deleteButton ml-3" onclick="cancelEditTranslation(this, '${no}', '${notsent}', '${reason}', '${translator}', '${sendate}', '${limitday}', '${deadline_date}', '${received_Date}', '${paid_date}', '${total_payment}', '${note}', '${idrow}')"></i>
        </td>
    `;
}
function cancelEditTranslation(button, no, notsent, reason, translator, sendate, limitday, deadline_date, received_Date, paid_date, total_payment, note, idrow) {
    var row = button.closest('tr');
    row.innerHTML = `
        <td class="text-center">${no}</td>
        <td class="text-center" id="${notsent}">${notsent == 'true' ? '<i class="fa fa-check" style="color: blue;"></i>' : '<i class="fas fa-times" style="color: red;"></i>'}</td>
        <td class="text-center">${reason}</td>
        <td class="text-center">${translator}</td>
        <td class="text-center">${sendate}</td>
        <td class="text-center">${limitday}</td>
        <td class="text-center">${deadline_date}</td>
        <td class="text-center">${received_Date}</td>
        <td class="text-center">${paid_date}</td>
        <td class="text-center">${total_payment}</td>
        <td class="text-center">${note}</td>
        <td class="text-center"><i onclick="editRowTranslation(this, '${idrow}')" class="fas fa-edit editButton"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteRowTranslation(this, '${idrow}')"></i></td>
    `;
}