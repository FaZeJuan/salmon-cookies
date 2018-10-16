'use strict';

function setUpBrandFilter() {
    var brand;
    var brandList = [];
    $('.product').each(function() {
        brand = $(this).attr('data-brand');
        if(brand && brandList.indexOf(brand) < 0) {
            brandList.push(brand);
        }
    });
    brandList.sort();
    brandList.forEach(function(brand) {
        var optionTag = `<option value="${brand}">${brand}</option>`;
        $('#brand-filter').append(optionTag);
    });
};
setUpBrandFilter();
function handleBrandFilter() {
    $('#brand-filter').on('change', function() {
        if($(this).val()) {
            $('.product').hide();
            $(`.product[data-brand="${$(this).val()}"]`).fadeIn();
        }
        else {
            $('.product').fadeIn();
        }
    });
};

handleBrandFilter();