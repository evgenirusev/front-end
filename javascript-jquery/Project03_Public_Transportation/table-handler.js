class PublicTransportTable {
    constructor(townName) {
        this.updateHeaderName(townName);
        this.addEventHandlers();
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

    addEventHandlers() {
        $('.search-btn').on('click', function() {
            let typeInput = $('td input')[0].value;
            let nameInput = $('td input')[1].value;
            
            if (typeInput || nameInput) {
                let tableElements = jQuery.makeArray($('.vehicles-info > tr').not('.more-info'));
                tableElements.forEach(element => {
                    let typeName = element.firstChild.textContent;
                    let transportNumber = element.children[1].textContent;
                    if (typeName.includes(typeInput) && transportNumber.includes(nameInput)) {
                        element.style.display = '';
                    } else {
                        let button = $(element).find('td').eq(2).find('button');
                        if (button.text() === 'Less Info') {
                            button.click()
                        }
                        element.style.display = 'none';
                    }
                });
            }
        })

        $('.clear-btn').on('click', function () {
            $('input[name="type"]').val('')
            $('input[name="name"]').val('')
            let rows = $('.vehicles-info > tr')
            for (let i = 0; i < rows.length; i++) {
                $(rows[i]).css('display', '')
            }
        })
    }
}
