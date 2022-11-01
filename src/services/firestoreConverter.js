export const firestoreConverter = {
    toFirestore: function(data) {
        const dataInDb = {};
        const { _validation, ...dataInApp } = data;
        Object.entries(dataInApp).forEach(entry => {
            const [key, value] = entry;
            dataInDb[key] = _validation[key] ? _validation[key](value) : value;
        });
        return dataInDb;
    },
    fromFirestore: function(snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id, ref: snapshot.ref};
    }
}