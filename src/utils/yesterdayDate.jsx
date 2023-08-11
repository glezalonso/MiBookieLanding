export default (tomorrowDate) => {
    const day = new Date().getDate()
    const year = new Date().getFullYear()
    const month = new Date().getMonth()
    if (month < 10) {
        if (day - 1 < 10) {
            const date = `${year}-0${month + 1}-0${day - 1}`
            return date
        } else if (day + 1 > 31) {
            const date = `${year}-0${month + 2}-${'01'}`
            return date
        } else {
            const date = `${year}-0${month + 1}-${day - 1}`
            return date
        }
    } else {
        if (day - 1 < 10) {
            const date = `${year}-${month + 1}-0${day - 1}`
            return date
        } else if (day + 1 > 31) {
            const date = `${year}-${month + 2}-${'01'}`
            return date
        } else {
            const date = `${year}-${month + 1}-${day - 1}`
            return date
        }
    }
}
