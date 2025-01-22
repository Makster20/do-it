import kibbehImg from './imgs/kibbeh.jpg';
import pizzaImg from './imgs/pizza.png';
import mandiImg from './imgs/mandi.jpg';
import eggImg from './imgs/egg.png';
import yabraqImg from './imgs/yabraq.png';
import malawahImg from './imgs/malawah.png';
import shawarmaImg from './imgs/shawarma.png';
import saltahImg from './imgs/saltah.png';

export const menuPage = () => {
    const contentDiv = document.getElementById('content');

    contentDiv.innerHTML = '';

    // Create Menu Page
    const menu = document.createElement('div')
    menu.setAttribute('id', 'menu');

    const h2 = document.createElement('h2');
    h2.innerText = 'Our Menu';

    const p = document.createElement('p');
    p.innerText = 'Choose from out excellent selection.';

    menu.appendChild(h2);
    menu.appendChild(p);

    const dishes = document.createElement('div');
    dishes.setAttribute('class', 'dishes');

    const dish1 = createDish(mandiImg, 'mandi', 'Traditional Yemeni spiced rice with tender meat.', '$14.99');
    const dish2 = createDish(kibbehImg, 'kibbeh', 'Middle Eastern croquettes made with bulgur and meat.', '$9.99');
    const dish3 = createDish(malawahImg, 'malawah', 'Sweet and flaky Yemeni bread served with honey.', '$5.99');
    const dish4 = createDish(shawarmaImg, 'shawarma', 'Marinated meat wrapped in flatbread with tahini sauce.', '$8.99');
    const dish5 = createDish(yabraqImg, 'yabraq', 'Stuffed grape leaves filled with rice and ground meat.', '$10.99');
    const dish6 = createDish(saltahImg, 'saltah', 'Yemeni stew topped with fenugreek froth and served with bread.', '$12.99');
    const dish7 = createDish(pizzaImg, 'pizza', 'Classic pizza topped with fresh tomatoes and mozzarella.', '$11.99');
    const dish8 = createDish(eggImg, 'century Eggs', 'Very old eggs, which come from more than 100 years ago, that have a very strong taste.', '$99.99');
    
    dishes.appendChild(dish1);
    dishes.appendChild(dish2);
    dishes.appendChild(dish3);
    dishes.appendChild(dish4);
    dishes.appendChild(dish5);
    dishes.appendChild(dish6);
    dishes.appendChild(dish7);
    dishes.appendChild(dish8);

    menu.appendChild(dishes);

    contentDiv.appendChild(menu);
}



const createDish = (img, name, text, price) => {
    const dish = document.createElement('div');
    dish.setAttribute('class', 'dish');

    const dishImg = document.createElement('img');
    dishImg.setAttribute('src', img);
    dishImg.setAttribute('alt', name);

    const dishH3 = document.createElement('h3');
    dishH3.innerText = name;

    const dishP = document.createElement('p');
    dishP.innerText = text;

    const dishSpan = document.createElement('span');
    dishSpan.innerText = price;

    dish.appendChild(dishImg)
    dish.appendChild(dishH3);
    dish.appendChild(dishP);
    dish.appendChild(dishSpan);
    return dish;
}