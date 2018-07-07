$(document).ready(function () {
    $('.services__text').css({'display': 'none'});

    $('.services__block__hide').click(function () {
        $(this).next('.services__text').slideToggle(500)
    });
});


$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".services__text"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.slideUp(500); // скрываем его
    }
});
