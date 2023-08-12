export default (formatedHour) => {
    const d = new Date()
    const h = d.getHours()
    const m = d.getMinutes()
    if (h < 10) {
        if (m < 10) {
            const hour = `0${h}:0${m}`
            return hour
        } else {
            const hour = `0${h}:${m}`
            return hour
        }
    } else {
        if (m < 10) {
            const hour = `${h}:0${m}`
            return hour
        } else {
            const hour = `${h}:${m}`
            return hour
        }
    }
}
