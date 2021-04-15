export default (persons = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...persons, action.payload];
        case 'UPDATE':
            return persons.map((person) => (person._id === action.payload._id ? action.payload : person));
        case 'DELETE':
            return persons.filter((person) => person._id !== action.payload);
        default:
            return persons;
    }
}