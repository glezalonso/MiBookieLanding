export default (yesterdayDate) => {
    let hoy = new Date()
    let DIA_EN_MILISEGUNDOS = 24 * 60 * 60 * 1000
    let ayer = new Date(hoy.getTime() - DIA_EN_MILISEGUNDOS)

    const day = ayer.getDate()
    const year = ayer.getFullYear()
    const month = ayer.getMonth()

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
