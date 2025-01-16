 // Массив с данными о продуктах
   const products = [
       {
           name: "Сумка гучи",
           lore: "Супер мега классная сумка от гучи бебебе",
           image: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1700762456/764961_2ZGMN_9643_001_080_0000_Light-Ophidia-mini-bag.jpg"
       },
       {
           name: "Рюкзак гучи",
           lore: "Невероятный рюкзак гучи мена",
           image: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1715076904/792080_FADJQ_1185_001_100_0000_Light-GG-backpack.jpg"
       },
       {
           name: "Рюкзак гучи",
           lore: "Невероятный рюкзак гучи мена",
           image: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1715076904/792080_FADJQ_1185_001_100_0000_Light-GG-backpack.jpg"
       },
       {
           name: "Рюкзак гучи",
           lore: "Невероятный рюкзак гучи мена",
           image: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1715076904/792080_FADJQ_1185_001_100_0000_Light-GG-backpack.jpg"
       },
       {
           name: "Рюкзак гучи",
           lore: "Невероятный рюкзак гучи мена",
           image: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1715076904/792080_FADJQ_1185_001_100_0000_Light-GG-backpack.jpg"
       },
       {
           name: "Рюкзак гучи",
           lore: "Невероятный рюкзак гучи мена",
           image: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1715076904/792080_FADJQ_1185_001_100_0000_Light-GG-backpack.jpg"
       },
       {
           name: "Рюкзак гучи",
           lore: "Невероятный рюкзак гучи мена",
           image: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1715076904/792080_FADJQ_1185_001_100_0000_Light-GG-backpack.jpg"
       },
       {
           name: "Рюкзак гучи",
           lore: "Невероятный рюкзак гучи мена",
           image: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1715076904/792080_FADJQ_1185_001_100_0000_Light-GG-backpack.jpg"
       },
       {
           name: "Рюкзак гучи",
           lore: "Невероятный рюкзак гучи мена",
           image: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1715076904/792080_FADJQ_1185_001_100_0000_Light-GG-backpack.jpg"
       },
       {
           name: "Рюкзак гучи",
           lore: "Невероятный рюкзак гучи мена",
           image: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1715076904/792080_FADJQ_1185_001_100_0000_Light-GG-backpack.jpg"
       },
       {
           name: "Рюкзак гучи",
           lore: "Невероятный рюкзак гучи мена",
           image: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1715076904/792080_FADJQ_1185_001_100_0000_Light-GG-backpack.jpg"
       },
       {
           name: "Рюкзак гучи",
           lore: "Невероятный рюкзак гучи мена",
           image: "https://media.gucci.com/style/DarkGray_Center_0_0_2400x2400/1715076904/792080_FADJQ_1185_001_100_0000_Light-GG-backpack.jpg"
       },
       // Добавьте здесь другие продукты
   ];

   // Функция для создания и добавления продуктов на страницу
   function displayProducts() {
       const productsList = document.getElementById('products-list');

       products.forEach(product => {
           const productSection = document.createElement('section');
           productSection.classList.add('product');

           productSection.innerHTML = `
               <div class="product-data">
                   <img class="icon" src="${product.image}" alt="${product.name}">
                   <div class="info">
                       <p class="name">${product.name}</p>
                       <p class="lore">${product.lore}</p>
                   </div>
               </div>
           `;

           productsList.appendChild(productSection);
       });
   }

   // Вызов функции для отображения продуктов
   displayProducts();