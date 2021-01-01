$.fn.lazyload = function(options) {
    var opt = $.extend({
        threshold: 50,
        effect: "show"
    }, options);

    var elements = this;
    var timer;

    function update() {
        clearTimeout(timer);
        timer = setTimeout(function () {
            elements.each(function () {
                if ($(this).is(':visible') && $(this).width() > 0 && $(this).height() > 0
                    && $(window).scrollTop() - opt.threshold < $(this).offset().top + $(this).height()
                    && $(window).scrollTop() + $(window).height() > $(this).offset().top - opt.threshold) {
                    $(this).trigger('appear');
                }
            });
        }, 200);
    }

    this.each(function () {
        var $this = $(this);

        $this.one('appear', function () {
            this.loaded = true;

            if ($this.data('url')) {
                var img = this.tagName.toUpperCase() == 'IMG' ? $this : $('<img />');

                img.one('load', function(e){
                    if ($this.prop('tagName').toUpperCase() != 'IMG') {
                        $this.html(img);
                    }
                    img.hide()[opt.effect]();
                });
                img.attr('src', $this.data('url'));
            }

            elements = $($.grep(elements, function(element) {
                return !element.loaded;
            }));
        });
    });

    $(function () {
        update();
    });

    $(window).on('resize scroll', function () {
        update();
    });

    $(document).on('mouseup touchend', function () {
        update();
    });

    return this;
};

$('.external-image, img[data-url]').lazyload();
