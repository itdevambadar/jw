function deleteRowAppType(row, rowId) {
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
            response = deleteAppType(`${rowId}`)
            var i = row.parentNode.parentNode.rowIndex;
            document.getElementById("table2").deleteRow(i);
        }
    });
}
function editRowAppType(button, idrow) {
    var row = button.closest('tr');
    var cells = row.querySelectorAll('td');
    var no = cells[0].innerText;
    var applicant_name = cells[1].innerText;
    var pctnumber = cells[2].innerText;
    var intlfilingdate = cells[3].innerText;
    var dlfilingorder = cells[4].innerText;
    var dlfilingse = cells[5].innerText;
    var ipc = cells[6].innerText;
    var fofapplication = cells[7].innerText;
    var title = cells[8].innerText;

    var applicantOptions = ['PCT', 'New Order', 'Annuity'];

    var applicantDropdown = '<select name="applicationtype">';
    applicantOptions.forEach(function (option) {
        var selected = option === applicant_name ? 'selected' : '';
        applicantDropdown += `<option value="${option}" ${selected}>${option}</option>`;
    });
    applicantDropdown += '</select>';

    var fofapplicationOptions = ['Mekanik', '-', '-'];

    var fofapplicationDropdown = '<select name="fofapplication">';
    fofapplicationOptions.forEach(function (option) {
        var selected = option === fofapplication ? 'selected' : '';
        fofapplicationDropdown += `<option value="${option}" ${selected}>${option}</option>`;
    });
    fofapplicationDropdown += '</select>';

    row.innerHTML = `
        <td class="text-center">${no}</td>
        <td class="text-center">${applicantDropdown}</td>
        <td class="text-center"><input type="text" value="${pctnumber}" name="pctnumber"></td>
        <td class="text-center"><input type="date" value="${intlfilingdate}" name="intlfilingdate"></td>
        <td class="text-center"><input type="date" value="${dlfilingorder}" name="dlfilingorder"></td>
        <td class="text-center"><input type="date" value="${dlfilingse}" name="dlfilingse"></td>
        <td class="text-center"><input type="text" value="${ipc}" name="ipc"></td>
        <td class="text-center">${fofapplicationDropdown}</td>
        <td class="text-center"><input type="text" value="${title}" name="title"></td>
        <td class="text-center">
            <i class="fas fa-save updateButton" onclick="updateAppType('${idrow}')"></i>
            <i class="fas fa-times deleteButton ml-3" onclick="cancelEditAppType(this, '${no}', '${applicant_name}', '${pctnumber}', '${intlfilingdate}', '${dlfilingorder}', '${dlfilingse}', '${ipc}', '${fofapplication}', '${title}', '${idrow}')"></i>
        </td>
    `;
}
function cancelEditAppType(button, no, applicant_name, pctnumber, intlfilingdate, dlfilingorder, dlfilingse, ipc, fofapplication, title, idrow) {
    var row = button.closest('tr');
    row.innerHTML = `
        <td class="text-center">${no}</td>
        <td class="text-center">${applicant_name}</td>
        <td class="text-center">${pctnumber}</td>
        <td class="text-center">${intlfilingdate}</td>
        <td class="text-center">${dlfilingorder}</td>
        <td class="text-center">${dlfilingse}</td>
        <td class="text-center">${ipc}</td>
        <td class="text-center">${fofapplication}</td>
        <td class="text-center">${title}</td>
        <td class="text-center"><i onclick="editRowAppType(this, '${idrow}')" class="fas fa-edit editButton"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteRowAppType(this, '${idrow}')"></i></td>
    `;
}