import heroImageSrc from './imgs/hero.png'; 
import chefImageSrc from './imgs/chef.png';
import mcdonaldsImageSrc from './imgs/mcdonalds.png';

export const homePage = () => {
    const contentDiv = document.getElementById('content');

    contentDiv.innerHTML = '';

    // Create hero section
    const hero = document.createElement('div');
    hero.setAttribute('id', 'hero');

    const heroImage = document.createElement('img');
    heroImage.setAttribute('src', heroImageSrc);
    heroImage.setAttribute('alt', 'Hero Image');
    console.log(heroImage.src)

    const taste = document.createElement('div');

    const tasteH2 = document.createElement('h2');
    tasteH2.innerText = 'Taste the Best!';

    const tasteButton = document.createElement('button');
    tasteButton.innerText = 'View Menu';

    // Append hero elements
    taste.appendChild(tasteH2);
    taste.appendChild(tasteButton);
    hero.appendChild(heroImage);
    hero.appendChild(taste);

    // Create about section
    const about = document.createElement('div');
    about.setAttribute('id', 'about');

    const aboutP = document.createElement('p');
    aboutP.innerText =
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ratione unde animi possimus voluptatibus? Veniam commodi magni illo odio repellat sint, minus provident enim culpa. Quasi exercitationem omnis rem ipsa.';

    const aboutImg = document.createElement('img');
    aboutImg.setAttribute('src', chefImageSrc);
    aboutImg.setAttribute('alt', 'Mr Chef');

    // Append about elements
    about.appendChild(aboutP);
    about.appendChild(aboutImg);

    // Append sections to content
    contentDiv.appendChild(hero);
    contentDiv.appendChild(about);

    // Create visit section
    const visit = document.createElement('div');
    visit.setAttribute('id', 'visit');

    const visitH2 = document.createElement('h2');
    visitH2.innerText = 'Visit Us!';

    const visitHours = document.createElement('div');
    visitHours.setAttribute('class', 'hours');

    const visitHoursDiv = document.createElement('div');
    
    const visitHoursDivH3 = document.createElement('h3');
    visitHoursDivH3.innerText = 'Hours';

    const visitHoursDivP = document.createElement('p');
    visitHoursDivP.innerHTML = 'Sunday: 8am - 8pm<br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm<br>Thursday: 6am - 10pm<br>Friday: 6am - 10pm<br>Saturday: 8am - 10pm'

    const visitHoursImg = document.createElement('img');
    visitHoursImg.setAttribute('src', mcdonaldsImageSrc);

    visit.appendChild(visitH2);
    visit.appendChild(visitHours);

    visitHours.appendChild(visitHoursDiv);
    visitHours.appendChild(visitHoursImg);

    visitHoursDiv.appendChild(visitHoursDivH3);
    visitHoursDiv.appendChild(visitHoursDivP);

    contentDiv.appendChild(visit)

};
