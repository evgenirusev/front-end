$('.create-country').on('click', () => {
    let country = $('.country').val();
    let capital = $('.capital').val();

    // TODO: refactor readibility
    let rowToAppend = '<tr><td>' + country + '</td><td>' + capital + '</td><td><button type="submit" class="delete-trigger">Delete</button> <button type="submit" class="down-trigger">Down</button> <button type="submit" class="up-trigger">Up</button></td></tr>';

    // Append new row
    $('table tr:last').after(rowToAppend);

    // TODO: Add event listener for the new dynamically created buttons
});

//TODO : https://stackoverflow.com/questions/34896106/attach-event-to-dynamic-elements-in-javascript