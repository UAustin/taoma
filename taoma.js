$(document).ready(function() {
    var setup = function() {
        // tab click
        $('.tm-tab > a').on('click', function() {
            var self = $(this);
            console.log('click a')
            $('.active').removeClass('active');
            self.addClass('active');
        });

        // tab action
        var tabAction = function(position, showLogin) {
            console.log(position);
            $('.tm-block').animate({
                "left": position
            }, "fast");
            $('#tm-form-login').toggle(showLogin);
            $('#tm-form-signup').toggle(!showLogin);
        };

        $('#tm-signup').on('click', function() {
            var position = '100px';
            var showLogin = false;
            tabAction(position, showLogin);
        });
        $('#tm-login').on('click', function() {
            var position = '155px';
            var showLogin = true;
            tabAction(position, showLogin);
        });
    };
    var __main = function() {
        setup();
        $('#tm-signup').click();
    };

    __main();
});
