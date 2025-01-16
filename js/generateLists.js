


const len = 3;

function generateLists() {
    const listsContainer = document.getElementById('lists-container');

    for (var i = 0; i < len; i++) {
        // Создаем копии элементов list1 и list2
        const list1Clone = document.getElementById('list1').cloneNode(true);
        const list2Clone = document.getElementById('list2').cloneNode(true);

        // Добавляем клонированные элементы в контейнер
        listsContainer.appendChild(list1Clone);
        listsContainer.appendChild(list2Clone);
    }
}

generateLists();