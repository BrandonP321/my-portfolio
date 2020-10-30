// function to dynamically load in skill bars
function loadSkills() {
    $('.skill-bar-filled').each(function() {
        // grab percent value from span element
        const percent = $(this).parent().siblings()[0].children[0].getAttribute('data-percent')
        console.log(percent)
        // set the skill bar's filled portion to have width equal to percent
        $(this).css('width', `${percent}%`)
    })
}

// check if header needs to change as user scrolls
$(window).on('scroll', function () {
    // if user has scrolled past 50 px from top of page, add class 'not-transparent' to navbar
    if ($(this).scrollTop() > 200) {
        $('nav').addClass('not-transparent')
    } else {
        // else remove class from navbar
        $('nav').removeClass('not-transparent')
    }
})

loadSkills()