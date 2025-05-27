class GertrudaDBSorter {
    constructor(data) {
        this.data = data;
        console.log("👵 Gertruda started.");
    }

    sortBy(field, direction = 'asc') {
        console.log(`🔍 Gertruda say: processing "${field}" into "${direction}".`);

        if (!this.data || !Array.isArray(this.data) || this.data.length === 0) {
            console.warn("😡 Gertruda angry: empty db");
            return [];
        }

        if (!this.data[0].hasOwnProperty(field)) {
            console.warn(`🙄 Gertruda didnt find "${field}" in records.`);
            return this.data;
        }

        this.data.sort((a, b) => {
            if (a[field] < b[field]) return direction === 'asc' ? -1 : 1;
            if (a[field] > b[field]) return direction === 'asc' ? 1 : -1;
            return 0;
        });

        console.log("✅ Gertruda ready! Result:");
        console.table(this.data);
        return this.data;
    }
}

// Пример базы
const db = [
    { id: 3, name: "Ivan", age: 25 },
    { id: 1, name: "Anna", age: 22 },
    { id: 2, name: "Petr", age: 30 }
];

// Пример использования
const gertruda = new GertrudaDBSorter(db);
gertruda.sortBy("id", "asc");
