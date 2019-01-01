$(function () {
    let publicTransportTable = new PublicTransportTable('Plovdiv')

    let vehiclesDataArr = [
        { type: 'bus', name: '84', route: 'Sofia airport - Gen. Gurko str.', price: 1.60, driver: 'Pesho' },
        { type: 'tram', name: '7', route: 'Borovo - metro station Han Kubrat', price: 13.37, driver: 'Misho' },
        { type: 'bus', name: '280', route: 'Student city - SU Kliment Ohridsky', price: 4.20, driver: 'Gosho' },
        { type: 'trolleybus', name: '11', route: ' Drujba 1 - Stochna station sq.', price: 2.60, driver: 'Tosho' },
        {
            type: 'metro', name: 'M1', route: 'Slivnica - Business Park', price: 3.50,
            driver: 'Petq'
        },
        {
            type: 'bus', name: '404', route: 'AP Drujba - Central station', price: 1.60,
            driver: 'Silviq'
        },
        { type: 'metro', name: 'M2', route: 'Sofia airport - James Bourchier', price: 5.99, driver: 'Krum' },
        // You can add/remove any vehicles data objects here
    ]

    for (let vehicleObj of vehiclesDataArr) {
        publicTransportTable.addVehicle(vehicleObj)
    }
})