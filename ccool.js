
"use scrict";

(function () {
    var timeouts = [];

   

    $(document).ready(function () {
        var links = [

            {
                name: 'stat youtube',
                link: 'lol i dont have one :)
            },
            
		    {
                name: 'og youtube',
                link: 'lol i dont have one :)'
            },
			
		    {
                name: 'telegram',
                link: 'shit gets termed so much.'
            },
            
            {
                name: 'feds.lol',
                link: 'https://feds.lol/pause'
            },
            
        ];

        for (var i in links) {
            var link = links[i];

            $('#marquee').append('<a href="' + link.link + '" target="_BLANK">' + link.name + '</a>');

            link = $('#marquee').children('a').last();

            if (i != links.length - 1)
                $('#marquee').append(' <img class="emoticon" src="icons/roses.png"> ');
        }

    

   
    });


    document.addEventListener('contextmenu', function (event) {
        event.preventDefault()
    });



$('html').on('contextmenu', function (event) {
        document.body.appendChild(img);
    });

 

    setInterval( function () {
        $(".troll").remove();
    }, 600);

    $(".skip").click(function () {
        skipIntro();
    });

    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function ()
            {
                $(this).removeClass('animated ' + animationName);
            });
            return this;
        }
    });

    var writeLine = function (text, speed, timeout, callback) {
        timeout = (typeof timeout === "number") ? timeout : [0, callback = timeout];

        setTimeout(function () {
            var typed = new Typed("#line" + ((app.id !== 2) ? ++app.id : app.id += 2),
            {
                strings: text,
                typeSpeed: speed,
                onComplete: callback
            });
        }, timeout);
    };

    (function () {
        $.getJSON('https://api.ipgeolocation.io/ipgeo?apiKey=1928143cd9e648bc9f2984ddaac9d3b0', function (data) { 

            writeLine(["Authenticating...", "Attempting to grant access to <span style='font-size: 14px; color: #3b66cc;'>[pause.services]</span>..."], 30, function () {

                if (app.skippedIntro)
                	return;

                

                var usernames = ["user", "pause"];

                writeLine(["Access Granted <span style='font-size: 14px; color: #0f0;'>[success]</span>", "Processing..."], 30, 501, function () {

                    if (app.skippedIntro)
                        return;

                    

                    writeLine(["<i style='color: #9403fc'>enter the void</i>"], 30, 500, function () {

                        timeouts.push(setTimeout(function () {

                            if (app.skippedIntro)
                                return;

                            
                            setTimeout(function () {

                                skipIntro();

                            }, 500);

                        }, 1000));

                    });

                });

            });

        });

    })()

    var skipIntro = function () {

        if (app.skippedIntro)
            return;

        app.skippedIntro = true;

        timeouts.forEach(function (timeout) {
            clearTimeout(timeout);
        });

        $(".top-right").remove();

        $('#main').fadeOut(100, function () {

            $("#main").remove();

            $('#marquee').marquee({
                duration: 15000,
                gap: 420,
                delayBeforeStart: 1000,
                direction: 'left',
                duplicated: true
            });

            setTimeout(function () {
                $('.brand-header').animateCss(app.effects[ Math.floor(Math.random() * app.effects.length) ]);
            }, 200);

            setTimeout(function () {
                var typed = new Typed("#brand",
                {
                    strings: app.brandDescription,
                    typeSpeed: 40,
                    onComplete: function () {
                        
                    }
                });
            }, 1350);

            setTimeout(function () {
                if (!app.shouldIgnoreVideo) {
                    app.videoElement.play();
                    app.audioElement.play();
                }

                app.videoElement.addEventListener("timeupdate", function () {
                    $.cookie('videoTime', app.videoElement.currentTime, { expires: 1 });
                }, false);

                $('.marquee-container').css('visibility','visible').hide().fadeIn(100);

                $('.marquee-container').animateCss('zoomIn');

                $('.container').fadeIn();

                $('.background').fadeIn(200, function () {
                    if (!app.shouldIgnoreVideo)
                        $("#audio").animate({volume: app.musicVolume}, app.musicFadeIn);
						$("#video").animate({volume: app.videoVolume}, app.videoFadeIn);
                });
            }, 200);
        });
     };

   
    
})()
