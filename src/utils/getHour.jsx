export default (hours) => {
    const hour = new Date().getHours()
    const minute = new Date().getMinutes()
    if (hour < 10) {
        return `0${hour}:${minute}`
    }

    return `${hour}:${minute}`
}
