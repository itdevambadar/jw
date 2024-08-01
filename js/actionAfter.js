function addRow(tableId, rowData, id) {
    // Dapatkan instance DataTable dengan ID tabel
    var table = $('#' + tableId).DataTable();
    
    // Tambahkan data baris baru ke tabel
    table.row.add(rowData).node().id = `row-${id}`;
    table.draw();
}

//==================================================================================================================================

function afterInputAppeal(id, row1, row2, row3, row4, row5) {
    var table = document.getElementById("table24");
    var tbodyRowCount = table.tBodies[0].rows.length;
    var newRowData = [
        tbodyRowCount+1,
        row1,
        row2,
        row3,
        row4,
        row5,
        `<i class="fas fa-edit editButton" onclick="modal_open('{{result.id}}','appeal','update', '${id}')"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteAppeal(this, '${id}')"></i>`
    ];

    setTimeout(function() {
        addRow('table24', newRowData, id);
    }, 500);
}
function afterUpdateAppeal(tableId, id, row1, row2, row3, row4, row5) {
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(row1);
    row.find('td:nth-child(3)').text(row2);
    row.find('td:nth-child(4)').text(row3);
    row.find('td:nth-child(5)').text(row4);
    row.find('td:nth-child(6)').text(row5);
}

//==================================================================================================================================

function afterInputInventor(id, row1, row2, row3, row4) {
    var table = document.getElementById("table5");
    var tbodyRowCount = table.tBodies[0].rows.length;
    var newRowData = [
        tbodyRowCount+1,
        row1,
        row2,
        row3,
        row4,
        `<i class="fas fa-edit editButton" onclick="modal_open('{{result.id}}','inventor','update', '${id}')"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteInventor(this, '${id}')"></i>`
    ];

    setTimeout(function() {
        addRow('table5', newRowData, id);
    }, 500);
}
function afterUpdateInventor(tableId, id, row1, row2, row3, row4) {
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(row1);
    row.find('td:nth-child(3)').text(row2);
    row.find('td:nth-child(4)').text(row3);
    row.find('td:nth-child(5)').html(row4);
}

//==================================================================================================================================

function afterInputRemark(id, row1, row2, row3) {
    var table = document.getElementById("table7");
    var tbodyRowCount = table.tBodies[0].rows.length;
    var newRowData = [
        tbodyRowCount+1,
        row1,
        row2,
        row3,
        `<i class="fas fa-edit editButton" onclick="modal_open('{{result.id}}','remark','update', '${id}')"></i><i class="fas fa-times deleteButton ml-3" onclick="deleteRemark(this, '${id}')"></i>`
    ];

    setTimeout(function() {
        addRow('table7', newRowData, id);
    }, 500);
}
function afterUpdateRemark(tableId, id, row1, row2, row3) {
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(row1);
    row.find('td:nth-child(3)').text(row2);
    row.find('td:nth-child(4)').text(row3);
}

//==================================================================================================================================

function afterInputPriority(id, row1, row2, row3, row4, row5, row6) {
    var table = document.getElementById("table4");
    var tbodyRowCount = table.tBodies[0].rows.length;
    var newRowData = [
        tbodyRowCount+1,
        row1,
        row2,
        row3,
        row4,
        row5,
        row6,
        `<i class="fas fa-edit editButton" onclick="modal_open('{{result.id}}','priority','update', '${id}')"></i> <i class="fas fa-times deleteButton ml-3" onclick="deletePatentPriority(this, '${id}')"></i>`
    ];

    setTimeout(function() {
        addRow('table4', newRowData, id);
    }, 500);
}

function afterUpdatePriority(tableId, id, priorityNo, priorityDate, country, receivingDoc, sendingDoc, activeIcon) {
    // Select the table with the given tableId
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(priorityNo);
    row.find('td:nth-child(3)').text(priorityDate);
    row.find('td:nth-child(4)').text(country);
    row.find('td:nth-child(5)').text(receivingDoc);
    row.find('td:nth-child(6)').text(sendingDoc);
    row.find('td:nth-child(7)').html(activeIcon);
}

//==================================================================================================================================

function afterInputTranslation(id, row1, row2, row3, row4, row5) {
    var table = document.getElementById("table10");
    var tbodyRowCount = table.tBodies[0].rows.length;
    var newRowData = [
        tbodyRowCount+1,
        row1,
        row2,
        row3,
        row4,
        row5,
        `<i class="fas fa-edit editButton" onclick="modal_open('{{result.id}}','translation','update', '${id}')"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteRowTranslation(this, '${id}')"></i>`
    ];

    setTimeout(function() {
        addRow('table10', newRowData, id);
    }, 500);
}
function afterUpdateTranslation(tableId, id, row1, row2, row3, row4, row5) {
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').html(row1);
    row.find('td:nth-child(3)').text(row2);
    row.find('td:nth-child(4)').text(row3);
    row.find('td:nth-child(5)').text(row4);
    row.find('td:nth-child(6)').text(row5);
}

//==================================================================================================================================

function afterInputGuidline(id, row1, row2, row3, row4, row5 , row6) {
    var table = document.getElementById("table1");
    var tbodyRowCount = table.tBodies[0].rows.length;
    var newRowData = [
        tbodyRowCount+1,
        row1,
        row2,
        row3,
        row4,
        row5,
        row6,
        `<i class="fas fa-edit editButton" onclick="modal_open('{{result.id}}','guidelines','update', '${id}')"></i> <i class="fas fa-times deleteButton ml-3" onclick="deletePatentGuidelines('${id}')"></i> <i class="fas fa-pencil updateButton ml-3" title="rules" onclick="modal_open_new('{{result.id}}','guidelines','rules', '${id}')"></i>`
    ];

    setTimeout(function() {
        addRow('table1', newRowData, id);
    }, 500);
}
function afterUpdateGuidline(tableId, id, row1, row2, row3, row4, row5, row6) {
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').html(row1);
    row.find('td:nth-child(3)').text(row2);
    row.find('td:nth-child(4)').text(row3);
    row.find('td:nth-child(5)').text(row4);
    row.find('td:nth-child(6)').text(row5);
    row.find('td:nth-child(7)').text(row6);
}

//==================================================================================================================================

function afterInputApplicant(id, row1, row2) {
    var table = document.getElementById("table3");
    var tbodyRowCount = table.tBodies[0].rows.length;
    var newRowData = [
        tbodyRowCount+1,
        row1,
        row2,
        `<i onclick="modal_open('{{result.id}}','applicant','update','${id}')" class="fas fa-edit editButton"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteRow(this, '${id}')"></i>`
    ];

    setTimeout(function() {
        addRow('table3', newRowData, id);
    }, 500);
}
function afterUpdateApplicant(tableId, id, row1, row2) {
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(row1);
    row.find('td:nth-child(3)').text(row2);
}

//==================================================================================================================================

function afterUpdateAppType(tableId, id, row1, row2, row3, row4) {
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(row1);
    row.find('td:nth-child(3)').text(row2);
    row.find('td:nth-child(4)').text(row3);
    row.find('td:nth-child(5)').text(row4);
}

//==================================================================================================================================
function afterUpdateOrderIns(tableId, id, row1, row2, row3, row4, row5) {
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(row1);
    row.find('td:nth-child(3)').text(row2);
    row.find('td:nth-child(4)').text(row3);
    row.find('td:nth-child(5)').text(row4);
    row.find('td:nth-child(6)').text(row5);
}

//==================================================================================================================================

function afterInputCompDoc(id, row1, row2, row3, row4, row5) {
    var table = document.getElementById("table8");
    var tbodyRowCount = table.tBodies[0].rows.length;
    var newRowData = [
        tbodyRowCount+1,
        row1,
        row2,
        row3,
        row4,
        row5,
        `<i class="fas fa-edit editButton" onclick="modal_open('{{result.id}}','statusdocument','update', '${id}')"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteRowstdoc('${id}')"></i>`
    ];

    setTimeout(function() {
        addRow('table8', newRowData, id);
    }, 500);
}
function afterUpdateCompDoc(tableId, id, row1, row2, row3, row4, row5) {
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(row1);
    row.find('td:nth-child(3)').text(row2);
    row.find('td:nth-child(4)').text(row3);
    row.find('td:nth-child(5)').text(row4);
    row.find('td:nth-child(6)').text(row5);
}

//==================================================================================================================================

function afterInputSpesific(id, row1, row2, row3, row4) {
    var table = document.getElementById("table9");
    var tbodyRowCount = table.tBodies[0].rows.length;
    var newRowData = [
        tbodyRowCount+1,
        row1,
        row2,
        row3,
        row4,
        `<i class="fas fa-edit editButton" onclick="modal_open('{{result.id}}','specification','update', '${id}')"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteSpecificationAction('${id}')"></i>`
    ];

    setTimeout(function() {
        addRow('table9', newRowData, id);
    }, 500);
}
function afterUpdateSpesific(tableId, id, row1, row2, row3, row4) {
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(row1);
    row.find('td:nth-child(3)').text(row2);
    row.find('td:nth-child(4)').text(row3);
    row.find('td:nth-child(5)').text(row4);
}

//==================================================================================================================================

function afterInputPublication(id, row1, row2, row3, row4, row5, row6) {
    var table = document.getElementById("table20");
    var tbodyRowCount = table.tBodies[0].rows.length;
    var newRowData = [
        tbodyRowCount+1,
        row1,
        row2,
        row3,
        row4,
        row5,
        row6,
        `<i class="fas fa-edit editButton" onclick="modal_open('{{result.id}}','publication','update', '${id}')"></i> <i class="fas fa-times deleteButton ml-3" onclick="deletePublication('${id}')"></i>`
    ];

    setTimeout(function() {
        addRow('table20', newRowData, id);
    }, 500);
}

function afterUpdatePublication(tableId, id, row1, row2, row3, row4, row5, row6) {
    // Select the table with the given tableId
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(row1);
    row.find('td:nth-child(3)').text(row2);
    row.find('td:nth-child(4)').text(row3);
    row.find('td:nth-child(5)').text(row4);
    row.find('td:nth-child(6)').text(row5);
    row.find('td:nth-child(7)').text(row6);
}

//==================================================================================================================================

function afterInputOA(id, row1, row2, row3, row4, row5) {
    var table = document.getElementById("table22");
    var tbodyRowCount = table.tBodies[0].rows.length;
    var newRowData = [
        tbodyRowCount+1,
        row1,
        row2,
        row3,
        row4,
        row5,
        `<i class="fas fa-edit editButton" onclick="modal_open('{{result.id}}','office-action','update', '${id}')"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteRowOfficeAction(this, '${id}')"></i>`
    ];

    setTimeout(function() {
        addRow('table22', newRowData, id);
    }, 500);
}

function afterUpdateOA(tableId, id, row1, row2, row3, row4, row5) {
    // Select the table with the given tableId
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(row1);
    row.find('td:nth-child(3)').text(row2);
    row.find('td:nth-child(4)').text(row3);
    row.find('td:nth-child(5)').text(row4);
    row.find('td:nth-child(6)').text(row5);
}

//==================================================================================================================================

function afterInputDivisional(id, row1, row2, row3) {
    var table = document.getElementById("table23");
    var tbodyRowCount = table.tBodies[0].rows.length;
    var newRowData = [
        tbodyRowCount+1,
        row1,
        row2,
        row3,
        `<i class="fas fa-edit editButton" onclick="modal_open('{{result.id}}','divisional','update', '${id}')"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteRowDiv('${id}')"></i>`
    ];

    setTimeout(function() {
        addRow('table23', newRowData, id);
    }, 500);
}

function afterUpdateDivisional(tableId, id, row1, row2, row3) {
    // Select the table with the given tableId
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(row1);
    row.find('td:nth-child(3)').text(row2);
    row.find('td:nth-child(4)').text(row3);
}

//==================================================================================================================================

function afterInputGranted(id, row1, row2, row3, row4, row5, row6, row7) {
    var table = document.getElementById("table25");
    var tbodyRowCount = table.tBodies[0].rows.length;
    var newRowData = [
        tbodyRowCount+1,
        row1,
        row2,
        row3,
        row4,
        row5,
        row6,
        row7,
        `<i class="fas fa-edit editButton" onclick="modal_open('{{result.id}}','granted','update', '${id}')"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteAppeal(this, '${id}')"></i>`
    ];

    setTimeout(function() {
        addRow('table25', newRowData, id);
    }, 500);
}

function afterUpdateGranted(tableId, id, row1, row2, row3, row4, row5, row6, row7) {
    // Select the table with the given tableId
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(row1);
    row.find('td:nth-child(3)').text(row2);
    row.find('td:nth-child(4)').text(row3);
    row.find('td:nth-child(5)').text(row4);
    row.find('td:nth-child(6)').text(row5);
    row.find('td:nth-child(7)').text(row6);
    row.find('td:nth-child(8)').text(row7);
}

//==================================================================================================================================

function afterUpdateOrderTrans(tableId, id, row1, row2) {
    // Select the table with the given tableId
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(row1);
    row.find('td:nth-child(3)').text(row2);
}

//==================================================================================================================================

function afterUpdateAnnuity(tableId, id, row1, row2, row3, row4, row5, row6, row7, row8) {
    // Select the table with the given tableId
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(row1);
    row.find('td:nth-child(3)').text(row2);
    row.find('td:nth-child(4)').text(row3);
    row.find('td:nth-child(5)').text(row4);
    row.find('td:nth-child(6)').text(row5);
    row.find('td:nth-child(7)').text(row6);
    row.find('td:nth-child(8)').text(row7);
    row.find('td:nth-child(9)').text(row8);
}

//==================================================================================================================================

function afterInputWithdraw(tableId, id, row1, row2, row3) {
    var table = document.getElementById(tableId);
    var tbodyRowCount = table.tBodies[0].rows.length;
    var newRowData = [
        tbodyRowCount+1,
        row1,
        row2,
        row3,
        tableId == 'table28' ? `<i onclick="modal_open('{{result.id}}','withdrawal','update', ${id})" class="fas fa-edit editButton"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteRowWithdrawal(this, '${id}')" ></i>` : tableId == 'table37' ? `<i onclick="modal_open('{{result.id}}','revocation','update', ${id})" class="fas fa-edit editButton"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteRowRevocation(this, '${id}')" ></i>` : `<i onclick="modal_open('{{result.id}}','abandon','update', ${id})" class="fas fa-edit editButton"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteRowAbandon(this, '${id}')" ></i>`
    ];

    setTimeout(function() {
        addRow(tableId, newRowData, id);
    }, 500);
}

function afterUpdateWithdraw(tableId, id, row1, row2, row3) {
    // Select the table with the given tableId
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(row1);
    row.find('td:nth-child(3)').text(row2);
    row.find('td:nth-child(4)').text(row3);
}

//==================================================================================================================================

function afterInputDocument(id, row1, row2, row3) {
    var table = document.getElementById("table32");
    var tbodyRowCount = table.tBodies[0].rows.length;
    var newRowData = [
        tbodyRowCount+1,
        row1,
        row2,
        row3,
        `<i onclick="modal_open('{{result.id}}','documents','update', ${id})" class="fas fa-edit editButton"></i> <i class="fas fa-times deleteButton ml-3" onclick="deleteDocuments(this, '${id}')" ></i>`
    ];

    setTimeout(function() {
        addRow('table32', newRowData, id);
    }, 500);
}

function afterUpdateDocument(tableId, id, row1, row2, row3) {
    // Select the table with the given tableId
    var table = $('#' + tableId);
    var row = table.find('#row-' + id);
    row.find('td:nth-child(2)').text(row1);
    row.find('td:nth-child(3)').text(row2);
    row.find('td:nth-child(4)').text(row3);
}