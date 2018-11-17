$( document ).ready(function() {
    const contactsURL = 'https://fir-app-dd3a7.firebaseio.com/phone-book/contacts/.json';
    $('#loader').click(loadResult);
    $('#btnCreate').click(createContact);

    function loadResult() {
        $('#parsed-results').empty();
        $.ajax({
           url: contactsURL,
           success: function (response) {
               displayResults(response);
           },
           
        error: function () {
            handleError();
        }
       }); 
    }

    function createContact() {
        let name = $('#person').val();
        let phone = $('#phone').val()
        let jsonObject = {};
        jsonObject[name] = phone;
        let stringifiedJSON = JSON.stringify(jsonObject);
        $.ajax({
            type: 'PATCH',
            data: stringifiedJSON,
            url: contactsURL,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: loadResult,
            error: function () {
                handleError();
            }
        })
    }

    function displayResults(response) {
        for (let key in response) {
            let person = key;
            let phone = response[key];
            let result = $('<li>');
            result.text(person + ': ' + phone + ' ');
            $('#parsed-results').append(result);
        }
    }

    function handleError() {
        $('#parsed-results').append("Invalid Request. Please Try Again Later.");
        alert("Invalid Request");
    }
});
