function loadRepos() {
    $("#repos").empty();
    let url = "https://api.github.com/users/" + $("#username").val() + "/repos";

    $.ajax({

        url,

        success: function (result) {
            displayRepos(result);
        },

        error: function (err) {
            displayError(err);
        }
    })
}

function displayRepos(repos) {
    for (let repo of repos) {
        let link = $('<a>').text(repo.full_name);
        link.attr('href', repo.html_url);
        $("#repos").append($('<li>').append(link));
    }
}

function displayError(err) {
    $("#repos").append($("<li>Error</li>"));
}