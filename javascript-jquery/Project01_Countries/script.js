// Cache the query for better performance
let $table = $('table');
let buttonManager = {
    createRow: function(element) {
        let tableColumns = element.parentNode.parentNode.children
        let countryName = tableColumns[0].firstChild.value;
        let capitalName = tableColumns[1].firstChild.value;

        //TODO: decouple logic and HTML
        let rowToAppend = '<tr><td>' + countryName + '</td><td>' + capitalName + '</td><td><button type="submit" class="deleteRow">Delete</button> <button type="submit" class="downTrigger">Down</button> <button type="submit" class="upTrigger">Up</button></td></tr>';
        
        $table.append(rowToAppend);
    },

    deleteRow: function(element) {
        let rowToDelete = element.parentNode.parentNode;
        $table.children()[0].removeChild(rowToDelete);
    },

    downTrigger: function(element) {
        let currentRow = element.parentNode.parentNode;
        let lowerRow = currentRow.nextElementSibling;

        (lowerRow != null && currentRow != null) ? currentRow.before(lowerRow) : null;
    },

    upTrigger: function(element) {
        let currentRow = element.parentNode.parentNode;
        let lowerRow = currentRow.previousElementSibling;
        (lowerRow != null && currentRow != null) ? currentRow.after(lowerRow) : null;
    },
};

$table.on('click', (event) => {
    let buttonType = event.target.className;

    // Class name of the clicked button gets mapped to method name in buttonManager
    (event.target.tagName == 'BUTTON') ? eval(`buttonManager.${buttonType}(event.target)`) : null;

    // Fix invalid button positions
    filterInvalidButtons();
});

let filterInvalidButtons = function() {
    // Filter Up button
    $('table button').css('display', 'inline');
    $table.children()[0].children[2].getElementsByClassName("upTrigger")[0].style.display = 'none';

    // Filter Down button
    const tableRows = $('table tr');
    $(tableRows[tableRows.length - 1]).find('button:contains(\'Down\')').css('display', 'none');
}