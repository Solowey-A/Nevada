var el = document.querySelectorAll('.nav .nav__item'); // выбираем все ссылки в нашем меню
// и прогоняем через цикл

for(i=0;i<el.length; i++){
// если значение атрибута совпадает с урлом в браузере то
  if(el[i].href==window.location){
    el[i].className="active"; // добавляем нужный класс для выделения пункта
  }
}
