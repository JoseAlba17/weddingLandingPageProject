simplyCountdown('.simply-countdown', {
    year: 2022,
    month: 10,
    day: 22,
    hours: 16,
    minutes: 0,
    seconds: 0,
    words: {
        days: { singular: 'día', plural: 'días' },
        months: { singular: 'mes', plural: 'meses' },
        hours: { singular: 'hora', plural: 'horas' },
        minutes: { singular: 'minuto', plural: 'minutos' },
        seconds: { singular: 'segundo', plural: 'segundos' }
    }
})

const addClassesToElements = (selector, classes) => {
    const elements = Array.from(document.getElementsByClassName(selector))
    elements.forEach(value => value.classList.add(...classes.split(' ')))
}

addClassesToElements('simply-section', 'h-32 text-center')
addClassesToElements('simply-amount', 'block text-3xl sm:tex-6xl md:text-6xl lg:text-6xl xl:text-6xl mt-4 mb-2')
addClassesToElements('simply-word', 'text-md sm:text-md md:text-xl lg:text-xl xl:text-xl')

document.getElementById('btn-add-calendar').onclick = event => {
    const showCalendar = event.target.dataset.showCalendar
    const calendarMenu = document.getElementById('calendar-menu')
    if(showCalendar === "false")
        calendarMenu.classList.remove('hidden')
    else
        calendarMenu.classList.add('hidden')
    event.target.dataset.showCalendar = showCalendar === "false" ? "true" : "false"
}

document.getElementById('btn-collapse-menu').onclick = event => {
    const isExpanded = event.target.dataset.expanded
    const collapseMenu = document.getElementById('collapse-menu')
    if(isExpanded === "false")
        collapseMenu.classList.replace('hidden', 'collapsed')
    else
        collapseMenu.classList.replace('collapsed', 'hidden')
    event.target.dataset.expanded = isExpanded === "false" ? "true" : "false"
}

function setupEventItemMenuClick() {
    const collapseMenu = document.getElementById('collapse-menu')
    const itemsMenu = collapseMenu.querySelectorAll('a')
    const handleItemClick = (event) => {
        console.log('click')
        collapseMenu.classList.replace('collapsed', 'hidden')
    }
    itemsMenu.forEach(item => {
        item.onclick = handleItemClick
    })
}

setupEventItemMenuClick()