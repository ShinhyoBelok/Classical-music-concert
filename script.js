const menuBtn = document.querySelector('.menu-btn');
const navItem = document.querySelector('.item');
const navItemBtn = document.querySelectorAll('.nav-item-btn');
let menuOpen = false;

function openMenu() {
  menuBtn.classList.add('open');
  navItem.classList.add('active-menu');
  menuOpen = true;
}

function closeMenu() {
  menuBtn.classList.remove('open');
  navItem.classList.remove('active-menu');
  menuOpen = false;
}

navItemBtn.forEach((itemBtn) => {
  itemBtn.addEventListener('click', () => {
    closeMenu();
  });
});

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});

function homePage() {
  const performers = document.querySelector('.performers');
  const moreBtn = document.getElementById('more');
  const arrow = document.getElementById('arrow');
  let more = false;
  const performersInfo = [
    {
      image: 'img/cho.jpg',
      altImage: 'Seong-Jin Cho Picture',
      name: 'Seong-Jin Cho',
      performersTitles: `South Korean pianist, 
        winner of first prize at the 17th Warsaw International Chopin 
        Piano Competition.`,
      performersResume: `He displayed an impressive 
        variety of tonal colors and remarkable technique, dispatched 
        with jaw-dropping panache. He had something to say and 
        communicated it well.`,
    },
    {
      image: 'img/Liu_Kate_square.jpg',
      altImage: 'Kate Liu picture',
      name: 'Kate Liu',
      performersTitles: `American classical pianist born 
        in Singapore.`,
      performersResume: `Pianist Kate Liu gained international 
      acclaim after winning the Bronze Medal and Best Mazurka 
      Prize at the 17th International Fryderyk Chopin Competition 
      in Warsaw, Poland.`,
    },
    {
      image: 'img/640px-Avdeevea.jpg',
      altImage: 'Yulianna Avdeeva picture',
      name: 'Yulianna Avdeeva',
      performersTitles: `Yulianna Andreevna Avdeeva is 
        a Russian concert pianist.`,
      performersResume: `
        She became famous by 
        winning first prize at the 16th edition of the Frédéric Chopin 
        International Piano Competition, the first woman to win it 
        since Martha Argerich, in 1965.`,
    },
    {
      image: 'img/rafal-blechacz.jpg',
      altImage: 'Rafał Blechacz picture',
      name: 'Rafał Blechacz',
      performersTitles: `Polish classical pianist 
        who rose to fame after decisively winning the XV International 
        Chopin Piano Competition in 2005.`,
      performersResume: `
        Rafał Blechacz is a Polish pianist, known for his
         interpretations of the works of Frédéric Chopin.`,
    },
  ];
  function diplayPerformers(num) {
    performers.innerHTML = '';
    for (let i = 0; i < (performersInfo.length - num); i += 1) {
      const performersPresentation = `
        <li class="d-flex align-items-center gap-3">
        <img src="${performersInfo[i].image}" alt="${performersInfo[i].altImage}">
        <section>
          <h3 class="name">${performersInfo[i].name}</h3>
          <article class="performers-titles">${performersInfo[i].performersTitles}</article>
          <div class="light-bar"></div>
          <p>${performersInfo[i].performersResume}</p>
        </section>
        </li>
      `;
      performers.innerHTML += performersPresentation;
    }
  }
  function defaultDisplay(screen) {
    if (screen.width >= 768) {
      diplayPerformers(0);
      closeMenu();
    } else {
      diplayPerformers(2);
    }
  }
  window.addEventListener('load', () => {
    defaultDisplay();
  });
  window.addEventListener('resize', () => {
    defaultDisplay();
  });
  moreBtn.addEventListener('click', () => {
    if (more === false) {
      diplayPerformers(0);
      arrow.classList.remove('down');
      arrow.classList.add('up');
      more = true;
    } else {
      diplayPerformers(2);
      arrow.classList.remove('up');
      arrow.classList.add('down');
      more = false;
    }
  });
}
const page = document.body.id;
if (page === 'home') {
  homePage();
}
