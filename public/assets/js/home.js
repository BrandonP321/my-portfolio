// function to dynamically load in skill bars
function loadSkills() {
    $('.skill-bar-filled').each(function () {
        // grab percent value from span element
        const percent = $(this).parent().siblings()[0].children[0].getAttribute('data-percent')
        // create animation to load in skill bars
        $(this).animate({ width: `${percent}%` }, 1000)
    })

    $('.skill-percent').each(function (event) {
        // store current skill
        const skill = $(this)
        // grab percent value from element
        const percent = $(this).data('percent')
        // set starting percent
        let currentPercent = 0;
        // calculate interval speed to reach the given percent in 1000ms
        const intervalTime = 1000 / percent
        console.log(currentPercent == percent)
        // create interval to count from 0 to skill's percent
        const percentInterval = setInterval(function () {
            if (currentPercent == percent) {
                clearInterval(percentInterval)
            } else {
                console.log(currentPercent, percent)
                currentPercent += 1
                skill.text(`${currentPercent}%`)
            }
        }, intervalTime)
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