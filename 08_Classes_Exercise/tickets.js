function ticketsSorting(input, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const result = input.map(line => {
        const [currDestination, currPrice, currStatus] = line.split('|');

        return new Ticket(currDestination, Number(currPrice), currStatus);
    });

    const sortedResult = result
        .sort((obj1, obj2) => {
            return typeof obj1[sortCriteria] === 'number'
                ? obj1[sortCriteria] - obj2[sortCriteria]
                : obj1[sortCriteria].localeCompare(obj2[sortCriteria]);
        });

    return sortedResult;
}

ticketsSorting([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);