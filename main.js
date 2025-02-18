function addContact() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    if (nome && telefone) {
        const tableBody = document.getElementById('contactTableBody');
        const newRow = document.createElement('tr');

        const nameCell = document.createElement('td');
        const phoneCell = document.createElement('td');
        const actionCell = document.createElement('td');

        nameCell.textContent = nome;
        phoneCell.textContent = telefone;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.className = 'delete-btn';

        deleteButton.onclick = function () {
            tableBody.removeChild(newRow);
        };

        actionCell.appendChild(deleteButton);

        newRow.appendChild(nameCell);
        newRow.appendChild(phoneCell);
        newRow.appendChild(actionCell);

        tableBody.appendChild(newRow);

        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}