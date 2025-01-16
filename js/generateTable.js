

// Массив с данными о тыквах
const rowList = [
    {
        species: "Рыжая тыква",
        lore: "Вкусная, красивая",
    },
    {
        species: "Обычная тыква",
        lore: "Без особенностей",
    },
    {
        species: "Белая тыква",
        lore: "Она белая",
    },
    {
        species: "Тыква",
        lore: "Без особенностей",
    },
    {
        species: "Тыква",
        lore: "Без особенностей",
    },
    {
        species: "Тыква",
        lore: "Без особенностей",
    },
    {
        species: "Тыква",
        lore: "Без особенностей",
    },
    {
        species: "Тыква",
        lore: "Без особенностей",
    },
    {
        species: "Тыква",
        lore: "Без особенностей",
    },
    {
        species: "Тыква",
        lore: "Без особенностей",
    },
    {
        species: "Тыква",
        lore: "Без особенностей",
    },
    {
        species: "Тыква",
        lore: "Без особенностей",
    },
    {
        species: "Тыква",
        lore: "Без особенностей",
    },
    {
        species: "Тыква",
        lore: "Без особенностей",
    },
];

// Функция для генерации таблицы
function generateTable() {
    const table = document.getElementById('table-pumpkins');
    rowList.forEach(row => {
        const rowElement = document.createElement('tr')

        rowElement.innerHTML = `
            <td>${row.species}</td>
            <td>${row.lore}</td>
        `;

        table.appendChild(rowElement)
    });
}

generateTable();