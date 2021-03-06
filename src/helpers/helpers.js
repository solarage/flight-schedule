export const getDateFormat = (date) => {
    if (typeof date === 'number') {
        return date
    }
    let formatDate = new Date(date).toTimeString().slice(0, 5);
    return formatDate;
}

export const isFuzzy = (arr) => {
    return arr.filter( (item) => {
        return item['is_fuzzy']
    })
}