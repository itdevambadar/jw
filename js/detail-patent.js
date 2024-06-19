
    function tabpatentActive(element, tabContentId) {
    // Remove 'active' class from all buttons
    var buttons = document.getElementsByClassName('tab-patent');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }

    // Add 'active' class to the clicked button
    element.classList.add('active');

    // Hide all tab contents
    var tabContents = document.getElementsByClassName('tabcontent');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove('active');
    }

    // Show the selected tab content
    document.getElementById(tabContentId).classList.add('active');
}

//tabel dynamis
//tabel dynamis
(function() {
    const tableConfigs = {
        table1: {
            columns: [
                { name: 'c_receive_date', type: 'datepicker', placeholder: 'Receive Date' },
                { name: 'c_guideline_date', type: 'datepicker', placeholder: 'Guideline Date' },
                { name: 'c_until_date', type: 'datepicker', placeholder: 'Untill Date' },
                { name: 'c_about', type: 'input', placeholder: 'About' },
                { name: 'c_description', type: 'input', placeholder: 'Description' },
                { name: 'c_document', type: 'file', placeholder: 'Document' },
				{ name: 'actions', type: 'actions' }
            ]
        },
        table2: {
            columns: [
                { name: 'applicationtype', type: 'select', options: ['PCT', 'New Order', 'Annuity'] },    
                { name: 'pctnumber', type: 'input', placeholder: 'Pct Number' },
                { name: 'intlfilingdate', type: 'datepicker', placeholder: 'International Filing Date' },
                { name: 'dlfilingorder', type: 'input', placeholder: 'DL Filing Order' , readonly: true},
                { name: 'dlfilingse', type: 'input', placeholder: 'DL Filing Substantive Examination', readonly: true },
                { name: 'ipc', type: 'input', placeholder: 'IPC' },
                { name: 'fofapplication', type: 'select', options: ['Mekanik', '-', '-'] },
                { name: 'title', type: 'input', placeholder: 'Title' }
            ]
        },
        table3: {
            columns: [
                { name: 'applicant', type: 'select', options: ['Applicant', 'Samsung Ltd', '-'] },
                { name: 'selectedValue', type: 'input', placeholder: 'Address' , readonly: true},
            ]
        },
        table4: {
            columns: [
                { name: 'priorityno', type: 'input', placeholder: 'Priority No.' },
                { name: 'prioritydate', type: 'datepicker', placeholder: 'Priority Date' },
                { name: 'country', type: 'select', options: ['Applicant', 'Samsung Ltd', '-'] }, 
                { name: 'receivingdoc', type: 'input', placeholder: 'Receiving Doc.' },
                { name: 'sendingdoc', type: 'input', placeholder: 'Sending Doc.' },
                { name: 'active', type: 'checkbox', label: '' } 
            ]
        },
        table5: {
            columns: [
                { name: 'inventorname', type: 'input', placeholder: 'Inventor Name' },
                { name: 'citizenship', type: 'select', options: ['Citizenship', 'New York ', '-']},
                { name: 'address', type: 'input', placeholder: 'Address' }, 
                { name: 'rssignment', type: 'datepicker', placeholder: 'Receiving Assignment' },
                { name: 'rtatement', type: 'datepicker', placeholder: 'Receiving Statement' },
                { name: 'sssignment', type: 'datepicker', placeholder: 'Sending Assignment' },
                { name: 'sstatement', type: 'datepicker', placeholder: 'Sending Statement' },
                { name: 'active', type: 'checkbox', label: '' } 
            ]
        },
        table7: {
            columns: [
                { name: 'date', type: 'datepicker', placeholder: 'Date' },
                { name: 'from', type: 'select', options: ['From', 'Specialist PPD', 'Finance']},
                { name: 'remark', type: 'input', placeholder: 'Remark' },
            ]
        },
        table8: {
            columns: [
                { name: 'applicant', type: 'select', options: ['Applicant', 'LG Electronic', '-']},
                { name: 'docname', type: 'select', options: ['Document Name', 'POA']},
                { name: 'docdate', type: 'datepicker', placeholder: 'Document Date' },
                { name: 'recdate', type: 'datepicker', placeholder: 'Received Date' },
                { name: 'status', type: 'select', options: ['Status', 'Complete']},
            ]
        },
        table10: {
            columns: [
                { name: 'notsent', type: 'checkbox', label: 'Active' },
                { name: 'reason', type: 'input', placeholder: 'Reason/Note' },
                { name: 'translator', type: 'select', options: ['Translator', 'Sahat Manihuruk', '-']},
                { name: 'sendate', type: 'datepicker', placeholder: 'Sent Date' },
                { name: 'day_limit', type: 'input', placeholder: 'Day Limit' },
                { name: 'deadline_date', type: 'datepicker', placeholder: 'Deadline Date' },
                { name: 'received_Date', type: 'datepicker', placeholder: 'Received Date' },
                { name: 'paid_date', type: 'datepicker', placeholder: 'Paid Date' },
                { name: 'remark', type: 'input', placeholder: 'Total Payment' },
                { name: 'note', type: 'input', placeholder: 'Note' },
                
            ]
        },
        table11: {
            columns: [
                { name: 'urgent', type: 'checkbox', label: '' },
                { name: 'reqtofile', type: 'datepicker', placeholder: 'Reason/Note' },
                { name: 'reqbyclient', type: 'datepicker', placeholder: 'select date' },
                { name: 'englishspec', type: 'checkbox', label: '' },
                { name: 'waitfinalins', type: 'checkbox', label: '' },
                { name: 'statusprocess', type: 'checkbox', label: '' },
                { name: 'dispodatte', type: 'datepicker', placeholder: 'Disposition Date' , readonly: true},
                { name: 'dispostaff', type: 'input', placeholder: 'Disposition Staff' , readonly: true},
                { name: 'cancelins', type: 'datepicker', placeholder: 'Deadline Date' },
                
                
            ]
        },
        table20: {
            columns: [
                { name: 'acceptance_date', type: 'datepicker', placeholder: 'Acceptance Date' },
                { name: 'received_date', type: 'datepicker', placeholder: 'Received Date' },
                { name: 'publication_date', type: 'datepicker', placeholder: 'Publication Date' },
                { name: 'publication_no', type: 'input', placeholder: 'Publication No' },
                { name: 'signing_name', type: 'input', placeholder: 'Signing Name' },
                { name: 'send_date_client', type: 'datepicker', placeholder: 'Send Date Client'},
            ]
        },
        table22: {
            columns: [
                { name: 'mail_subject', type: 'input', placeholder: 'Mail Subject' },
                { name: 'examiner_name', type: 'input', placeholder: 'Examiner Name' },
                { name: 'mail_date', type: 'datepicker', placeholder: 'Mail Date' },
                { name: 'limit', type: 'input', placeholder: 'Limit' },
                { name: 'deadline_date', type: 'datepicker', placeholder: 'Deadline Date' },
                { name: 'filing_eot', type: 'input', placeholder: 'Filing EOT' },
                { name: 'limit_eot', type: 'input', placeholder: 'Limit EOT' },
                { name: 'new_deadline_date', type: 'datepicker', placeholder: 'New Deadline Date' },
                { name: 'instruction_date', type: 'datepicker', placeholder: 'Instruction Date' },
                { name: 'filing_response', type: 'input', placeholder: 'Filing Response' },
                
            ]
        },
        table23: {
            columns: [
                { name: 'recexaminer', type: 'input', placeholder: 'Recommended by Examinere' },
                { name: 'instdate', type: 'input', placeholder: 'Instruction Date' },
                { name: 'makeorderdiv', type: 'input', placeholder: 'Make to New Order Divisional' },
                
            ]
        },
        table24: {
            columns: [
                { name: 'typeappeal', type: 'select', options: [ 'type appeal', '-'] },
                { name: 'consultant', type: 'select', options: ['Consultant', 'Ibu Nadia', '-'] },
                { name: 'instructdate', type: 'datepicker', placeholder: 'Instruction Date' },
                { name: 'cost', type: 'input', placeholder: 'Cost' },
                { name: 'paid', type: 'datepicker', placeholder: 'Paid Date' },
                { name: 'filappeal', type: 'input', placeholder: 'Filing Appeal' },
                { name: 'resultdate', type: 'datepicker', placeholder: 'Result Date' },
                { name: 'restype', type: 'select', options: ['Result Type', '-'] },
            ]
        },
        table24: {
            columns: [
                { name: 'typeappeal', type: 'select', options: [ 'type appeal', '-'] },
                { name: 'consultant', type: 'select', options: ['Consultant', 'Ibu Nadia', '-'] },
                { name: 'instructdate', type: 'datepicker', placeholder: 'Instruction Date' },
                { name: 'cost', type: 'input', placeholder: 'Cost' },
                { name: 'paid', type: 'datepicker', placeholder: 'Paid Date' },
                { name: 'filappeal', type: 'input', placeholder: 'Filing Appeal' },
                { name: 'resultdate', type: 'datepicker', placeholder: 'Result Date' },
                { name: 'restype', type: 'select', options: ['Result Type', '-'] },
            ]
        },
        table29: {
            columns: [
                { name: 'applicant', type: 'select', options: [ 'tes', '-'] },
                { name: 'selectedValue', type: 'input', placeholder: 'Selected Value', readonly: true }
            ]
        },
        table30: {
            columns: [
                { name: 'applicantchange', type: 'select', options: [ 'tes change', '-'] },
                { name: 'selectedValue', type: 'input', placeholder: 'Selected Value', readonly: true }
            ]
        },
        table35: {
            columns: [
                { name: 'pubdate', type: 'datepicker', placeholder: 'Publication Date' },
                { name: 'paid', type: 'input', placeholder: 'Publication No.' },
                { name: 'deadline', type: 'datepicker', placeholder: 'Deadline Date' },
                { name: 'fildate', type: 'datepicker', placeholder: 'Filing Date' },
                { name: 'filno', type: 'input', placeholder: 'Filing No.' },
                { name: 'filappeal', type: 'input', placeholder: 'IPR No.' },
                { name: 'resdate', type: 'datepicker', placeholder: 'Result Date' },
                { name: 'result', type: 'select', options: ['Result', '-'] },
                { name: 'consultant', type: 'select', options: [ 'consultant', '-'] }, 
                { name: 'titleeng', type: 'input', placeholder: 'Title (Eng)' },
                { name: 'titleid', type: 'input', placeholder: 'Title (Id)' },
            ]
        },
        
    };

    document.querySelectorAll('.showFormButton').forEach(button => {
        button.addEventListener('click', function() {
            const tableId = this.dataset.tableId;
            const tbody = document.querySelector(`#${tableId} tbody`);
            const config = tableConfigs[tableId];
            
            // Check if formRow already exists and remove it if it does
            const existingFormRow = document.querySelector(`#${tableId} .formRow`);
            if (existingFormRow) {
                existingFormRow.remove();
            }

            // Create a new form row
            const formRow = document.createElement('tr');
            formRow.classList.add('formRow');

            formRow.innerHTML = '<td></td>'; // Empty cell for row number

            config.columns.forEach(column => {
                const td = document.createElement('td');
                if (column.type === 'input') {
                    td.innerHTML = `<input type="text" class="${column.name}" name="${column.name}" placeholder="${column.placeholder}" ${column.readonly ? 'readonly' : ''} required>`;
                } else if (column.type === 'select') {
                    const select = document.createElement('select');
                    select.className = column.name;
                    select.name = column.name;
                    select.required = true;
                    select.innerHTML = `<option value="">Select ${column.name}</option>` + column.options.map(option => `<option value="${option}">${option}</option>`).join('');
                    select.addEventListener('change', function() {
                        const selectedValueInput = formRow.querySelector('.selectedValue');
                        selectedValueInput.value = this.value;
                    });
                    td.appendChild(select);
                } else if (column.type === 'checkbox') {
                    td.innerHTML = `<input type="checkbox" class="${column.name}" name="${column.name}">${column.label}`;
                } else if (column.type === 'datepicker') {
                    td.innerHTML = `<input type="date" class="${column.name}" name="${column.name}" placeholder="${column.placeholder}" required>`;
                } else if (column.type === 'file') {
                    td.innerHTML = `<input type="file" class="${column.name}" name="${column.name}" required>`;
                }
                formRow.appendChild(td);
            });

            const actionTd = document.createElement('td');
            formRow.appendChild(actionTd);

            // Append the form row to the table body
            tbody.appendChild(formRow);

            // Show the submit button
            document.querySelector(`.formSubmitButton[data-table-id='${tableId}']`).style.display = 'inline-block';
        });
    });

    document.querySelectorAll('.formSubmitButton').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const tableId = this.dataset.tableId;
            const tbody = document.querySelector(`#${tableId} tbody`);
            const config = tableConfigs[tableId];

            const formRow = tbody.querySelector('.formRow');
            const values = {};
            config.columns.forEach(column => {
                if (column.type === 'checkbox') {
                    values[column.name] = formRow.querySelector(`.${column.name}`).checked;
                } else {
                    values[column.name] = formRow.querySelector(`.${column.name}`).value;
                }
            });

            if (formRow.dataset.editing === 'true') {
                // If editing, update the existing row
                const rowToEdit = document.querySelector(`#${tableId} tbody tr[data-editing='true']`);
                config.columns.forEach((column, index) => {
                    if (column.type === 'checkbox') {
                        // For checkbox, set the checked property
                        rowToEdit.cells[index + 1].querySelector('input').checked = values[column.name];
                    } else {
                        rowToEdit.cells[index + 1].textContent = values[column.name];
                    }
                });
                rowToEdit.style.display = ''; // Show the row again
                rowToEdit.removeAttribute('data-editing');
            } else {
                const newRow = document.createElement('tr');
                const rowNumberCell = document.createElement('td');
                newRow.appendChild(rowNumberCell);

                config.columns.forEach((column, index) => {
                    const cell = document.createElement('td');
                    if (column.type === 'checkbox') {
                        const checkbox = document.createElement('input');
                        checkbox.type = 'checkbox';
                        checkbox.checked = values[column.name];
                        checkbox.disabled = true;
                        cell.appendChild(checkbox);
                    } else if (column.type === 'file') {
                        cell.textContent = values[column.name];
                    } else {
                        cell.textContent = values[column.name];
                    }
                    newRow.appendChild(cell);
                });

                const actionCell = document.createElement('td');
                if (tableId === 'table1') {
                    actionCell.innerHTML = `
                        <i class="fas fa-eye viewButton"></i>
                        <i class="fas fa-edit editButton"></i>`;
                } else {
                    actionCell.innerHTML = '<i class="fas fa-edit editButton"></i>';
                }
                newRow.appendChild(actionCell);

                tbody.appendChild(newRow);

                actionCell.querySelector('.editButton').addEventListener('click', function() {
                    editRow(newRow, tableId);
                });
                if (tableId === 'table1') {
                    actionCell.querySelector('.viewButton').addEventListener('click', function() {
                        viewRow(newRow, tableId);
                    });
                }
            }

            // Update row numbers
            updateRowNumbers(tableId);

            // Remove the form row and hide the submit button after submission
            formRow.remove();
            this.style.display = 'none';
        });
    });

    // Function to update row numbers in the table
    function updateRowNumbers(tableId) {
        const rows = document.querySelectorAll(`#${tableId} tbody tr:not(.formRow)`);
        rows.forEach((row, index) => {
            row.cells[0].textContent = index + 1;
        });
    }

    // Function to edit a row
    function editRow(row, tableId) {
        const cells = row.querySelectorAll('td');
        const config = tableConfigs[tableId];
        const values = {};

        // Get values from each cell in the row being edited
        config.columns.forEach((column, index) => {
            if (column.type === 'checkbox') {
                values[column.name] = cells[index + 1].querySelector('input').checked;
            } else {
                values[column.name] = cells[index + 1].textContent;
            }
        });

        // Remove the old form row if it exists
        const existingFormRow = document.querySelector(`#${tableId} .formRow`);
        if (existingFormRow) {
            existingFormRow.remove();
        }

        // Create a new form row at the position of the row being edited
        const formRow = document.createElement('tr');
        formRow.classList.add('formRow');
        formRow.dataset.editing = 'true';

        formRow.innerHTML = '<td></td>'; // Empty cell for row number

        config.columns.forEach(column => {
            const td = document.createElement('td');
            if (column.type === 'input') {
                td.innerHTML = `<input type="text" class="${column.name}" name="${column.name}" placeholder="${column.placeholder}" ${column.readonly ? 'readonly' : ''} required>`;
            } else if (column.type === 'select') {
                const select = document.createElement('select');
                select.className = column.name;
                select.name = column.name;
                select.required = true;
                select.innerHTML = `<option value="">Select ${column.name}</option>` + column.options.map(option => `<option value="${option}" ${values[column.name] === option ? 'selected' : ''}>${option}</option>`).join('');
                select.addEventListener('change', function() {
                    const selectedValueInput = formRow.querySelector('.selectedValue');
                    selectedValueInput.value = this.value;
                });
                td.appendChild(select);
            } else if (column.type === 'checkbox') {
                td.innerHTML = `<input type="checkbox" class="${column.name}" name="${column.name}" ${values[column.name] ? 'checked' : ''}>${column.label}`;
            } else if (column.type === 'datepicker') {
                td.innerHTML = `<input type="date" class="${column.name}" name="${column.name}" value="${values[column.name]}" required>`;
            } else if (column.type === 'file') {
                td.innerHTML = `<input type="file" class="${column.name}" name="${column.name}" required>`;
            }
            formRow.appendChild(td);
        });

        const actionTd = document.createElement('td');
        formRow.appendChild(actionTd);

        // Insert the form row after the row being edited
        row.after(formRow);

        // Hide the row being edited
        row.style.display = 'none';
        row.dataset.editing = 'true';

        // Show the submit button
        document.querySelector(`.formSubmitButton[data-table-id='${tableId}']`).style.display = 'inline-block';
    }

    function viewRow(row, tableId) {
        const cells = row.querySelectorAll('td');
        const config = window.tableConfigs[tableId];
        let values = '';

        config.columns.forEach((column, index) => {
            if (column.type === 'checkbox') {
                values += `${column.name}: ${cells[index + 1].querySelector('input').checked}\n`;
            } else {
                values += `${column.name}: ${cells[index + 1].textContent}\n`;
            }
        });

        document.getElementById('modalContent').textContent = values;
        document.getElementById('modalGuidelines').style.display = 'block';
    }

    // Get the modal
    var modal = document.getElementById('modalGuidelines');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName('close')[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    document.querySelectorAll('.formSubmitButton').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const tableId = this.dataset.tableId;
            const tbody = document.querySelector(`#${tableId} tbody`);
            const config = tableConfigs[tableId];

            const formRow = tbody.querySelector('.formRow');
            const values = {};
            config.columns.forEach(column => {
                if (column.type === 'checkbox') {
                    values[column.name] = formRow.querySelector(`.${column.name}`).checked;
                } else {
                    values[column.name] = formRow.querySelector(`.${column.name}`).value;
                }
            });

            if (formRow.dataset.editing === 'true') {
                // If editing, update the existing row
                const rowToEdit = document.querySelector(`#${tableId} tbody tr[data-editing='true']`);
                config.columns.forEach((column, index) => {
                    if (column.type === 'checkbox') {
                        // For checkbox, set the checked property
                        const checkbox = rowToEdit.cells[index + 1].querySelector('input');
                        checkbox.checked = values[column.name];
                    } else {
                        rowToEdit.cells[index + 1].textContent = values[column.name];
                    }
                });
                rowToEdit.style.display = ''; // Show the row again
                rowToEdit.removeAttribute('data-editing');
            } else {
                // Create a new row and cells
                const newRow = document.createElement('tr');

                // Create a cell for row number
                const rowNumberCell = document.createElement('td');
                newRow.appendChild(rowNumberCell);

                // Fill cells with values from the form
                config.columns.forEach((column, index) => {
                    const cell = document.createElement('td');
                    if (column.type === 'checkbox') {
                        const checkbox = document.createElement('input');
                        checkbox.type = 'checkbox';
                        checkbox.checked = values[column.name];
                        checkbox.disabled = true; // Disable checkbox to make it read-only
                        cell.appendChild(checkbox);
                    } else {
                        cell.textContent = values[column.name];
                    }
                    newRow.appendChild(cell);
                });

                // Create a cell for the edit button
                const actionCell = document.createElement('td');
                actionCell.innerHTML = '<i class="fas fa-edit editButton"></i>';
                newRow.appendChild(actionCell);

                // Append the new row to the table body
                tbody.appendChild(newRow);

                // Add event listener for the edit button
                actionCell.querySelector('.editButton').addEventListener('click', function() {
                    editRow(newRow, tableId);
                });
            }

            // Update row numbers
            updateRowNumbers(tableId);

            // Remove the form row and hide the submit button after submission
            formRow.remove();
            this.style.display = 'none';
        });
    });

    // Function to update row numbers in the table
    function updateRowNumbers(tableId) {
        const rows = document.querySelectorAll(`#${tableId} tbody tr:not(.formRow)`);
        rows.forEach((row, index) => {
            row.cells[0].textContent = index + 1;
        });
    }
})();


$(document).ready(function() {
    // Inisialisasi datepicker untuk elemen dengan ID tertentu
    $("#fildate, #printdate, #deadfiling, #filreport").datepicker();

    document.getElementById('toggle-edit-btn').addEventListener('click', function() {
        var cells = document.getElementsByClassName('masukan');
        for (var i = 0; i < cells.length; i++) {
            var content = cells[i].innerHTML.trim();
            if (content === '<p>-</p>' || cells[i].querySelector('p') !== null) {
                if (cells[i].id === 'fildate' || cells[i].id === 'printdate' || cells[i].id === 'deadfiling' || cells[i].id === 'filreport') {
                    cells[i].innerHTML = '<input type="text" class="datepicker" value="">';
                } else {
                    cells[i].innerHTML = '<input type="text" value="">';
                }
            }
        }
        // Inisialisasi datepicker untuk semua elemen input yang baru dibuat
        $(".datepicker").datepicker();
    });
});


    function tabpatentActive(tab, contentId) {
  // Remove 'active' class from all tabs
  var tabs = document.getElementsByClassName('tab-patent');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }

  // Add 'active' class to the clicked tab
  tab.classList.add('active');

  // Hide all tabcontent
  var tabcontents = document.getElementsByClassName('tabcontent');
  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove('active');
  }

  // Show the selected tabcontent
  var selectedContent = document.getElementById(contentId);
  if (selectedContent) {
    selectedContent.classList.add('active');
  }
}

// Ensure the default active tab and content are visible on page load
document.addEventListener("DOMContentLoaded", function() {
  var defaultTab = document.querySelector('.tab-patent.active');
  if (defaultTab) {
    var defaultContentId = defaultTab.getAttribute('onclick').match(/'([^']+)'/)[1];
    var defaultContent = document.getElementById(defaultContentId);
    if (defaultContent) {
      defaultContent.classList.add('active');
    }
  }
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

function searchTabs() {
    var input, filter, tabs, tab, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    tabs = document.getElementsByClassName('tab-patent');

    for (i = 0; i < tabs.length; i++) {
        tab = tabs[i];
        txtValue = tab.textContent || tab.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tab.style.display = "";
        } else {
            tab.style.display = "none";
        }
    }
}

