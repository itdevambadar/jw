function deleteRowOrderInstruction(row, rowId) {
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
            response = deleteOrderInstruction(`${rowId}`)
            var i = row.parentNode.parentNode.rowIndex;
            document.getElementById("table11").deleteRow(i);
        }
    });
}
function editRowOrderInstruction(button, idrow) {
    var row = button.closest('tr');
    var cells = row.querySelectorAll('td');
    var no = cells[0].innerText;
    var urgent = cells[1].id;
    var reqtofile = cells[2].innerText;
    var reqbyclient = cells[3].innerText;
    var englishspec = cells[4].id;
    var waitfinalins = cells[5].id;
    var statusprocess = cells[6].id;
    var dispodatte = cells[7].innerText;
    var dispostaff = cells[8].innerText;
    var cancelins = cells[9].innerText;

    row.innerHTML = `
        <td class="text-center">${no}</td>
        <td class="text-center"><input type="checkbox" value="${urgent}" ${urgent == 'true' ? 'checked' : ''} name="urgent"></td>
        <td class="text-center"><input type="date" value="${reqtofile}" name="reqtofile"></td>
        <td class="text-center"><input type="date" value="${reqbyclient}" name="reqbyclient"></td>
        <td class="text-center"><input type="checkbox" value="${englishspec}" ${englishspec == 'true' ? 'checked' : ''} name="englishspec"></td>
        <td class="text-center"><input type="checkbox" value="${waitfinalins}" ${waitfinalins == 'true' ? 'checked' : ''} name="waitfinalins"></td>
        <td class="text-center"><input type="checkbox" value="${statusprocess}" ${statusprocess == 'true' ? 'checked' : ''} name="statusprocess"></td>
        <td class="text-center"><input type="date" value="${dispodatte}" name="dispodatte"></td>
        <td class="text-center"><input type="text" value="${dispostaff}" name="dispostaff"></td>
        <td class="text-center"><input type="date" value="${cancelins}" name="cancelins"></td>
        <td class="text-center">
            <i class="fas fa-save updateButton" onclick="updateOrderInstruction('${idrow}')"></i>
            <i class="fas fa-times deleteButton ml-3" onclick="cancelEditOrderInstruction(this, '${no}', '${urgent}', '${reqtofile}', '${reqbyclient}', '${englishspec}', '${waitfinalins}', '${statusprocess}', '${dispodatte}', '${dispostaff}', '${cancelins}', '${idrow}')"></i>
        </td>
    `;
}
function cancelEditOrderInstruction(button, no, urgent, reqtofile, reqbyclient, englishspec, waitfinalins, statusprocess, dispodatte, dispostaff, cancelins, idrow) {
    var row = button.closest('tr');
    row.innerHTML = `
        <td class="text-center">${no}</td>
        <td class="text-center" id="${urgent}">${urgent == 'true' ? '<i class="fa fa-check" style="color: blue;"></i>' : '<i class="fas fa-times" style="color: red;"></i>'}</td>
        <td class="text-center">${reqtofile}</td>
        <td class="text-center">${reqbyclient}</td>
        <td class="text-center" id="${englishspec}">${englishspec == 'true' ? '<i class="fa fa-check" style="color: blue;"></i>' : '<i class="fas fa-times" style="color: red;"></i>'}</td>
        <td class="text-center" id="${waitfinalins}">${waitfinalins == 'true' ? '<i class="fa fa-check" style="color: blue;"></i>' : '<i class="fas fa-times" style="color: red;"></i>'}</td>
        <td class="text-center" id="${statusprocess}">${statusprocess == 'true' ? '<i class="fa fa-check" style="color: blue;"></i>' : '<i class="fas fa-times" style="color: red;"></i>'}</td>
        <td class="text-center">${dispodatte}</td>
        <td class="text-center">${dispostaff}</td>
        <td class="text-center">${cancelins}</td>
        <td class="text-center"><i onclick="editRowOrderInstruction(this, '${idrow}')" class="fas fa-edit editButton"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteRowOrderInstruction(this, '${idrow}')"></i></td>
    `;
}