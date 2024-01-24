let navbar = document.getElementById("navbar")

window.addEventListener('scroll', () => {
    if (window.scrollY > 100){
        navbar.classList.add("navbar-ani")
    } else {
        navbar.classList.toggle("navbar-ani")
    }
})

// init Isotope
var $grid = $('.collection-list').isotope({
    // options
  })
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    resetFilterBtns()
    $(this).addClass("active-filter-btn")
    $grid.isotope({ filter: filterValue });
  })

  var filterBtns = $(".filter-button-group").find('button')
  console.log(filterBtns)
  function resetFilterBtns () {
    filterBtns.each(function() {
        $(this).removeClass("active-filter-btn")
    })
  }
