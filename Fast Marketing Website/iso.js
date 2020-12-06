$(document).ready(function () {
    // init Isotope
    let $grid = $('.picture-container').isotope({
        // options
    });

    // filter items on button click
    $('.filter-button-group').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });


})