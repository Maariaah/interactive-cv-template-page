let tabs = $('.tab');


tabs.each(function (i) {

    $(this).on("click", function () {
        let name = $(this).attr('data-attr');
        let section = $('section');

        if (tabs.hasClass("border-gradient")) {
            tabs.removeClass("border-gradient");
            $(this).addClass("border-gradient");


        }

        else if ($(this).hasClass("border-gradient")) {
            $(this).removeClass("border-gradient");
        }
        else {
            $(this).addClass("border-gradient");
        }

        section.each(function () {

            if (name == $(this).attr("id")) {
                $(this).toggle()
            }
            else {
                $(this).css('display', "none")
            }
        });
    });
});
