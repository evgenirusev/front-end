$( document ).ready(function() {
    const contactsURL = 'https://fir-app-dd3a7.firebaseio.com/phone-book/contacts/.json';
    $('#loader').click(loadResult);

    function loadResult() {
        $('#parsed-results').empty();
        $.ajax({
           url: contactsURL,
           success: function (response) {
               displayResults(response);
           }
       }); 
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
});
