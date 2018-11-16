'use strict';

function setUpConsoleFilter() {
    var gameconsole;
    var consoleList = [];
    $('.product').each(function() {
        gameconsole = $(this).attr('data-console');
        if(gameconsole && consoleList.indexOf(gameconsole) < 0) {
            consoleList.push(gameconsole);
        }
    });
    consoleList.sort();
    console.log(consoleList);
    consoleList.forEach(function(gameconsole) {
        var optionTag = `<option value="${gameconsole}">${gameconsole}</option>`;
        $('#console-filter').append(optionTag);
    });
};
setUpConsoleFilter();
function handleConsoleFilter() {
    $('#console-filter').on('change', function() {
        if($(this).val()) {
            $('.product').hide();
            $(`.product[data-console="${$(this).val()}"]`).fadeIn();
        }
        else {
            $('.product').fadeIn();
        }
    });
};

handleConsoleFilter();
