// function to dynamically load in skill bars
function loadSkills() {
    // animate skill bar for each skill
    $('.skill-bar-filled').each(function () {
        // grab percent value from span element
        const percent = $(this).parent().siblings()[0].children[0].getAttribute('data-percent')
        // create animation to load in skill bars
        $(this).animate({ width: `${percent}%` }, 1000)
    })

    // change skill percentage text for each skill
    $('.skill-percent').each(function (event) {
        // store current skill
        const skill = $(this)
        // grab percent value from element
        const percent = $(this).data('percent')
        // set starting percent
        let currentPercent = 0;
        // calculate interval speed to reach the given percent in 1000ms
        const intervalTime = 1000 / percent
        // create interval to count from 0 to skill's percent
        const percentInterval = setInterval(function () {
            // if current percent equals skill's percent, clear interval
            if (currentPercent == percent) {
                clearInterval(percentInterval)
            } else {
                // else increment current percent and change percent text on page
                currentPercent += 1
                skill.text(`${currentPercent}%`)
            }
        }, intervalTime)
    })
}

// variable indicating if white navbar background is shown or not
let navBgIsShown = false
// check if header needs to change as user scrolls
$(window).on('scroll', function () {
    // if user has scrolled past 50 px from top of page, add class 'not-transparent' to navbar
    if ($(this).scrollTop() > 56) {
        // first check that white bg is not already shown
        if (!navBgIsShown) {
            navBgIsShown = true
            $('#header-bg').animate({ height: '56px' }, 500)
            // make navbar text black
            $('nav').removeClass('navbar-dark')
            $('nav').addClass('navbar-light')
        }
    } else {
        // else remove class from navbar if white bg is already shown
        if (navBgIsShown) {
            $('#header-bg').animate({ height: '0' }, 500, function() {
                // make navbar text white
                $('nav').removeClass('navbar-light')
                $('nav').addClass('navbar-dark')
            })
            navBgIsShown = false
        }
    }
})

$('#header-bg').on('show.bs.collapse', function () {
    console.log('will show')
})

$('#header-bg').on('shown.bs.collapse', function () {
    console.log('is shown')
})

$('#header-bg').on('hide.bs.collapse', function () {
    console.log('will hide')
})

$('#header-bg').on('hidden.bs.collapse', function () {
    console.log('is hidden')
})

loadSkills()