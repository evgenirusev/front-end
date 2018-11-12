function busRoute(e) {
    let firstStop = $('#enter-stops input')[0].value;
    let lastStop = $('#enter-stops input')[1].value;
    let listBusStopsLength = $('#bus-stops').children().length;

    if (firstStop !== 0 && lastStop !== 0 && firstStop >= 0 && lastStop <= listBusStopsLength) {
        $(`#selected-bus-stops li`).remove();
        let busRoutes = $("ol li");
        let resultTable = $('#selected-bus-stops');
        for (let index = firstStop; index <= lastStop; index++) {
            let row = busRoutes[index - 1].textContent;
            resultTable.append('<li>' + row + '</li>');
            if (index > 6)
                break;
        }
        $("input[name='first-stop']").val('');
        $("input[name='last-stop']").val('');
    }
}

(() => {
    let busStops = [
        "Gen. Gurko St.",
        "Sofia University",
        "Eagles' Bridge Sq.",
        "Bulgarian News Agency",
        "Peyo Yavorov Blvd.",
        "Aleksandar Zhendov Bvld.",
        // You can add/remove bus stops from here
    ]

    let listBusStops = $('#bus-stops')
    for (let i = 0; i < busStops.length; i++) {
        const busStopLi = $('<li>').text(busStops[i]);

        listBusStops.append(busStopLi)
    }
})();