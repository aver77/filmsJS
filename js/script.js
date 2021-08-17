'use strict';
//31 урок
// const btn=document.querySelector('button'),
//       overlay=btn.querySelector('.overlay');
// // btn.onclick = function() {
// //     alert('click');
// // };
// // btn.addEventListener('click',function() { //название и запуск функции
// //     alert('click!');
// // });

// btn.addEventListener('mouseenter',(event) => { //стрелочная функция
//     console.log('hover!');
//     console.log(event);
//     console.log(event.target); //доступ к эл-ту
// });

// let i=0;
// const deleteElement = (event) => {
//     //event.target.remove();
//     // console.log(event.target);
//     console.log(event.currentTarget);
//     console.log(event.type);
//     // i++;
//     // if (i==1) {
//     //     btn.removeEventListener('click',deleteElement);
//     // }
// }
// // btn.addEventListener('click',deleteElement);
// // overlay.addEventListener('click',deleteElement);

// const link = document.querySelector('a');
// link.addEventListener('click', (event) => {
//     event.preventDefault();

//     console.log(event.target);
// });

// //для всех кнопок
// const btns = document.querySelectorAll('button');
// btns.forEach(item => {
//     item.addEventListener('click',deleteElement,{once:true});
// });
////урок 32. Навигация по DOM - элементам, data-атрибуты, преимущество for/of

// console.log(document.documentElement); //html
// console.log(document.head);
// console.log(document.body);
// console.log(document.body.childNodes);
// console.log(document.body.lastElementChild);
// console.log(document.body.firstChild);

// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes)
// {
//     if (node.nodeName=="#text") continue;
//     console.log(node);
// }


/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */



window.addEventListener('DOMContentLoaded',() => {
    const movieDB = {
        movies: [
            "Логан!",
            "Лига справедливости!",
            "Ла-ла лэнд!",
            "Одержимость!",
            "Скотт Пилигрим против...!"
        ]
    };
    
    //МОЙ ВАРИК
    //1
    // const adv = document.querySelectorAll('.promo__adv img');
    // adv.forEach(item => {
    //     item.remove();
    // });
    // //2
    // const text = document.querySelector('.promo__genre');
    // text.textContent = "Драма";
    // //3
    // const content = document.querySelector('.promo__bg');
    // content.style.background = "url(../img/bg.jpg)";
    
    // // const div = document.createElement('div'); //не робит
    // // div.classList.add('promo__bg');
    // // div.style.background = "url(../img/bg.jpg)";
    // //4
    // movieDB.movies.sort();
    // const list = document.querySelectorAll('.promo__interactive-item');
    // for (let i=0;i<list.length;i++)
    // {
    //     //5
    //     list[i].textContent = `${i}) ${movieDB.movies[i]}`;
    // }
    
    //ВАРИК ПРЕПОДА
    //1
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');
 
    // adv.forEach(item => {
    //     item.remove();
    // })
    //либо
    const deleteAdv = (arr) => {
        arr.forEach(function (item) {
            item.remove();
        })
    }
    //2
    const makeChanges = () => {
        genre.textContent='Драма';
        //3
        poster.style.backgroundImage='url("img/bg.jpg")';
    }

    const sortArr = (arr) => {
        arr.sort();
    }

    //1 дополнение сайта - 4
    function createMovieList(films, parent) {
        parent.innerHTML="";
        sortArr(films);
        
        films.forEach(function (film,i) {
        parent.innerHTML += `<li class="promo__interactive-item">${i+1})
        ${film} <div class="delete"></div></li>`;
        });

        document.querySelectorAll('.delete').forEach((btn,i) => {
            btn.addEventListener('click',() => {
                btn.parentElement.remove();
                movieDB.movies.splice(i,1);

                createMovieList(films,parent); //чтобы номера перестраивались - рекурсия
            })
        });
    }
    
    //2 дополнение сайта - мой ВАРИК
    // //1 дополнение сайта - 4
    // const movieList = document.querySelector('.promo__interactive-list');
    // function ListEdit() {
    //     movieList.innerHTML="";
    //     movieDB.movies.sort();
    //     movieDB.movies.forEach(function (film,i) {
    //     movieList.innerHTML += `<li class="promo__interactive-item">${i+1})
    //     ${film} <div class="delete"></div></li>`;
    //     });
    // }
    // ListEdit();

    //1,2
    // const inp = document.querySelectorAll('input')[1],
    //       check = document.querySelectorAll('input')[2],
    //       btn = document.querySelector('button'),
    //       delElem = document.querySelectorAll('.delete'),
    //       movieListItem = document.querySelectorAll('.promo__interactive-item');
    
    // btn.addEventListener('click',() => {
    //     if (inp.value!=null && inp.value!="" && inp.value.length <= 21)
    //     {
    //         //4
    //         if (check.checked)
    //         {
    //             console.log("Добавляем любимый фильм");
    //         }
    //         movieDB.movies[movieDB.movies.length] = inp.value;
    //         ListEdit();
    //     }
    //     //2
    //     else if (inp.value.length >= 21)
    //     {
    //         if (check.checked)
    //         {
    //             console.log("Добавляем любимый фильм");
    //         }
    //         movieDB.movies[movieDB.movies.length] = inp.value.slice(0,21) + "...";
    //         ListEdit();
    //     }
    // });
    
    // //3
    // delElem.forEach((item,i) => {
    //     item.addEventListener('click',function() {
    //         delElem[i].remove();
    //         movieListItem[i].remove();
    //     });
    // });
    
//2 дополнение - варик препода

//1
addForm.addEventListener('submit',(event) => {
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm)
    {
        if (newFilm.length > 21)
        {
            //2
            newFilm=`${newFilm.substring(0,22)}...`;
        }
        //4
        if (favorite)
        {
            console.log("Добавлен любимый фильм");
        }
        movieDB.movies.push(newFilm);
        sortArr(movieDB.movies);
    
        createMovieList(movieDB.movies,movieList);
    }

    event.target.reset();

})

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies,movieList);
})


