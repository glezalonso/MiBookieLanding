export default (tomorrowDate) => {
    let hoy = new Date()
    let DIA_EN_MILISEGUNDOS = 24 * 60 * 60 * 1000
    let manana = new Date(hoy.getTime() + DIA_EN_MILISEGUNDOS)

    const day = manana.getDate()
    const year = manana.getFullYear()
    const month = manana.getMonth()

    if (month + 1 < 10) {
        if (day < 10) {
            const date = `${year}-0${month + 1}-0${day}`
            return date
        } else {
            const date = `${year}-0${month + 1}-${day}`
            return date
        }
    } else {
        if (day + 1 < 10) {
            const date = `${year}-${month + 1}-0${day}`
            return date
        } else {
            const date = `${year}-${month + 1}-${day}`
            return date
        }
    }
}
