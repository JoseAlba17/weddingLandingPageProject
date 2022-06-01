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
addClassesToElements('simply-amount', 'block md:text-3xl xl:text-6xl mt-4 mb-2')
addClassesToElements('simply-word', 'md:text-xl')