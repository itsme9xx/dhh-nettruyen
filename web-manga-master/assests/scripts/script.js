import comic from "./manga.js";

const checkBox = document.querySelector(".cb-sidebar");
const menu = document.querySelector(".nav__menu");
const sideBar = document.querySelector(".sidebar");
const notify = document.querySelector(".noitification__icon");
const btnScroll = document.querySelector(".scroll-top");
const nav = document.querySelector(".main__list");

let isScroll = 0;

// window.onload = () => {
//     document.body.style.overflow = "hidden";
//     setTimeout(() => {
//         document.querySelector(".loading").style.display = "none";
//         document.querySelector(".wrapper").style.visibility = "visible";
//         document.body.style.overflow = "auto";
//     }, 1000)
// }

window.onclick = (e) => {
  if (!e.target.closest(".nav__noitification")) {
    if (
      !document
        .querySelector(".noitification__content")
        .classList.contains("disable")
    ) {
      document
        .querySelector(".noitification__content")
        .classList.add("disable");
    }
  }
};

window.onscroll = () => {
  if (document.body.scrollTop > 50) {
    btnScroll.style.transform = "scale(1)";
    btnScroll.onclick = () => {
      document.body.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };
    if (screen.width > 767) {
      if (isScroll > window.pageYOffset) {
        document.querySelector(".header__nav-category").style.top = "0";
        isScroll = window.pageYOffset;
      } else {
        document
          .querySelector(".header__nav-category")
          .classList.add("header__nav-category--fixed");
        document.querySelector(".header__nav-category").style.top = "-40px";
        isScroll = window.pageYOffset;
      }
      menu.onclick = function () {
        if (document.querySelector(".close").classList.contains("disable")) {
          document.body.style.overflow = "hidden";
          document.querySelector(".close").classList.remove("disable");
          document.querySelector(".open").classList.add("disable");
        } else {
          document.body.style.overflow = "auto";
          document.querySelector(".close").classList.add("disable");
          document.querySelector(".open").classList.remove("disable");
        }
      };
    } else {
      if (isScroll > window.pageYOffset) {
        document.querySelector(".header").style.top = "0";
        isScroll = window.pageYOffset;
      } else {
        document.querySelector(".header").style.top = "-50px";
        isScroll = window.pageYOffset;
      }
    }
  } else {
    btnScroll.style.transform = "scale(0)";
    document
      .querySelector(".header__nav-category")
      .classList.remove("header__nav-category--fixed");
  }
};

notify.onclick = () => {
  document.querySelector(".noitification__content").classList.toggle("disable");
};

menu.onclick = function () {
  if (document.querySelector(".close").classList.contains("disable")) {
    document.body.style.overflow = "hidden";
    document.querySelector(".close").classList.remove("disable");
    document.querySelector(".open").classList.add("disable");
  } else {
    document.body.style.overflow = "auto";
    document.querySelector(".close").classList.add("disable");
    document.querySelector(".open").classList.remove("disable");
  }
};

nav.onclick = (e) => {
  let choose = e.target.closest("li");
  if (!choose.classList.contains("main__item--active")) {
    nav
      .querySelector(".main__item--active")
      .classList.remove("main__item--active");
    choose.classList.add("main__item--active");
  }
};

const render = () => {
  // Content comic
  let htmls = comic.map((item) => {
    return `
    <div class="col l-3 m-3 t-4 tm-6 c-12">
        <a href="indexi.html?name=${item.id}">
            <div class="comic__card">
                <div class="card__image">
                    <img src="${item.urlImg}" alt="">
                    <div class="card__image__icon-hot"></div>
                    <div class="card__image__view">
                        <span><i class="fa fa-eye"></i>${item.view}</span>
                        <span><i class="fa fa-comment"></i>63.457</span>
                        <span><i class="fas fa-heart"></i>3.457.472</span>
                    </div>
                </div>
                <div class="card__caption">
                    <h3 class="comic-name">${item.name}</h3>
                    <ul>
                        <li>
                            <p class="chapter">Chapter ${item.chapter}</p>
                            <span class="time">
                                6 giờ trước
                            </span>
                        </li>
                        <li>
                            <p class="chapter">Chapter ${item.chapter - 1}</p>
                            <span class="time">
                                5 giờ trước
                            </span>
                        </li>
                        <li>
                            <p class="chapter">Chapter ${item.chapter - 2}</p>
                            <span class="time">
                                4 giờ trước
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </a>
    </div>
        `;
  });

  // Slider
  let htmlSlider = "";
  for (let i = 0; i < 10; i++) {
    htmlSlider += `
        <div class="slider__item">
            <img src="${comic[i].urlImg}" alt="">
            <div class="item__caption">
                <h3 class="comic-name">${comic[i].name}</h3>
                <p class="chapter">Chapter ${comic[i].chapter}</p>
                <span class="time">
                    <i class="far fa-clock"></i>
                    6 giờ trước
                </span>
            </div>
        </div>
        `;
  }

  // Rank
  let htmlRank = "";
  for (let i = 0; i < 8; i++) {
    htmlRank += `
        <div class="comic__nav__content__item">
            <span>0${i + 1}</span>
            <img src="${comic[i].urlImg}" alt="">
            <div class="comic__nav__content__item__caption">
                <h3 class="comic-name">${comic[i].name}</h3>
                <div class="comic__detail">
                    <p class="chapter">Chapter ${comic[i].chapter}</p>
                    <span><i class="fa fa-eye"></i>${comic[i].view}</span>
                </div>  
            </div>
        </div>
        `;
  }

  document.querySelector(".comic__nav__content").innerHTML = htmlRank;

  document.querySelector(".owl-theme").innerHTML = htmlSlider;

  document.querySelector(".content-comic__card").innerHTML = htmls.join("");
};

render();

// Fetch API
// const mangas = "http://localhost:3000/comic";
// const getListMangas = (manga) => {
//     fetch(mangas)
//         .then(response => response.json())
//         .then(manga);
// };

// const renderManga = (manga) => {
//     let htmls = manga.map(item => {
//         return `
//             <div class="col l-3 m-3 t-4 tm-6 c-12">
//                 <div class="comic__card">
//                     <div class="card__image">
//                         <img src="${item.urlImg}" alt="">
//                         <div class="card__image__icon-hot"></div>
//                         <div class="card__image__view">
//                             <span><i class="fa fa-eye"></i>${item.view}</span>
//                             <span><i class="fa fa-comment"></i>63.457</span>
//                             <span><i class="fas fa-heart"></i>3.457.472</span>
//                         </div>
//                     </div>
//                     <div class="card__caption">
//                         <h3 class="comic-name">${item.name}</h3>
//                         <ul>
//                             <li>
//                                 <p class="chapter">Chapter ${item.chapter}</p>
//                                 <span class="time">
//                                     6 giờ trước
//                                 </span>
//                             </li>
//                             <li>
//                                 <p class="chapter">Chapter 47</p>
//                                 <span class="time">
//                                     6 giờ trước
//                                 </span>
//                             </li>
//                             <li>
//                                 <p class="chapter">Chapter 47</p>
//                                 <span class="time">
//                                     6 giờ trước
//                                 </span>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         `
//     })

//     document.querySelector(".content-comic__card").innerHTML = htmls.join("");
// }

// const startConnect = () => {
//     getListMangas(renderManga);
// };

// startConnect();
