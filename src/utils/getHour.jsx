export default (hours) => {
    const hour = new Date().getHours()
    const minute = new Date().getMinutes()
    if (hour < 10) {
        if (minute < 10) {
            return `0${hour}:0${minute}`
        }
        return `0${hour}:${minute}`
    } else {
        if (minute < 10) {
            return `${hour}:0${minute}`
        }
        return `${hour}:${minute}`
    }
}
