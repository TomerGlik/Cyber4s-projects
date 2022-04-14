window.onload = () => {
    const table = document.createElement('table');
    document.body.appendChild(table);
    for (let i = 0; i < 8; i++) {
        const row = table.insertRow(i);
        for (let j = 0; j < 8; j++) {
            row.insertCell(j);
        }
    }
}