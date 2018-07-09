$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

//для блока services открытие блоков по клику
$(document).ready(function () {
    $('.services__text').css({'display': 'none'});

    $('.services__block__hide').click(function () {
        $(this).next('.services__text').slideToggle(500)
    });
});

//для блока services закрытие блоков по клику
$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".services__text"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.slideUp(500); // скрываем его
    }
});

//регулярное выражение для поля email
$(document).ready(function () {
    $('#email').blur(function () {
        var pattern = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        if (pattern.test($(this).val())) {
            $(this).css({'border': '1px solid #569b44'});
        } else {
            $(this).css({'border': '1px solid #ff0000'});
        }
    });
});

// регулярное выражение для input телефона
$(document).ready(function () {
    $('#phone').blur(function () {
        var pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (pattern.test($(this).val())) {
            $(this).css({'border': '1px solid #569b44'});
        } else {
            $(this).css({'border': '1px solid #ff0000'});
        }
    });
});

// клик на надпись о соглашении
$(document).on('click', '.contact-us__regulations', function (e) {
    var $checkbox = $(':checkbox', this);
    if (e.target !== $checkbox[0]) {
        $checkbox.prop('checked', !$checkbox.prop('checked'));
    }
});