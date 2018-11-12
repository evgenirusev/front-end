class PublicTransportTable {
    constructor(townName) {
        this.updateHeaderName(townName);
        // TODO: implement SEARCH and CLEAR buttons
        // this.addEventHandlers();
    }

    updateHeaderName(townName) {
        $('caption').text(`${townName}'s Public Transport`);
    }

    addVehicle(obj) {
        let button = $('<button>More Info</button>');
        let tr = $(`<tr><td>${obj.type}</td><td>${obj.name}</td>`);
        let moreDetailsRow = $('<tr class="more-info"><td colspan="3"><table><tr>' +
        `<td>Route: ${obj.route}</td></tr><tr><td>Price: ${obj.price}</td></tr>` +
        `<tr><td>Driver: ${obj.driver}</td></tr></table></td></tr>`);
        button.on('click', function () {
            button = $(this);
            if (button.text() == 'More Info') {
                button.text("Less Info");
                moreDetailsRow.insertAfter(tr);
            } else {
                button.text('More Info');
                moreDetailsRow.remove();
            }
        });
        let td = $('<td>');
        td.append(button);
        tr.append(td);
        $('.vehicles-info').append(tr);
    }
}