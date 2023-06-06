// scroll menu

$('menu-itens li a').click(function () { 
    const href = $(this).attr('href');
    const offSetTop = $(href).offset().top;

    $('html body').animate({'scrollTop': offSetTop});

    return false;
    
});

// menu mobile

const abrirMenu = $('abrirMenu');

$('.abrirMenu').click(function () { 
    $('nav .menu-mobile').slideToggle();
});