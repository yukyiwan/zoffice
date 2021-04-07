export default (persons = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...persons, action.payload];
        default:
            return persons;
    }
}