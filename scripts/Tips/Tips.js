// TIPS: keeping tank clean, water at salinity, temperature, thoughts
 export const Tips = (tip) => {
    return `
        <section class="tip card">
            <div class="tip_tank">${tip.tank}</div>
            <div class="tip_cleaning">${tip.cleaning}</div>
            <div class="tip_salinity">${tip.salinity}</div>
            <div class="tip_temperature">${tip.temperature}</div>
            <div class="tip_thoughts">${tip.thoughts}</div>
        </section>
    `
}
