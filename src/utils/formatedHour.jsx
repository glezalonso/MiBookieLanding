export default (formatedHour) => {
    const d = new Date()
    const h = d.getHours()
    const m = d.getMinutes()
    if (h < 10) {
        const hour = `0${h}:${m}`
        return hour
    } else {
        const hour = `${h}:${m}`
        return hour
    }
}
