let About1,Banner,scrollToAbout,About2,Intro,About3,Service1,Service2;
let Work1,Work2,Work3;

$(function(){
    About1 = $("#about--1");
    scrollToAbout = $(".banner")
    scrollToService = $(".for-all-devices")
    scrollToWork = $(".story-about-us")
    About2 = $("#about--2");
    About3 = $("#about--3");
    Intro = $("#data-intro");
    Service1 = $("#service--1");
    Service2 = $("#service--2");
    Work1 = $("#work--1");
    Work2 = $("#work--2");
    Work3 = $("#work--3");
    Menu = $('#data-menu')
    handleclickAbout()
    handleclickService()
    handleclickWork()
})

function handleclickAbout(){
    var bottom = scrollToAbout.offset().top + scrollToAbout.height();
    About1.click(
    function(){

        window.scroll(0,bottom);
    }
    );
    About2.click(
        function(){
            Intro.addClass("show");
            setTimeout(() => {
                Intro.removeClass("active");
                setTimeout(() => {
                    window.scroll(0,bottom);
                }, 20);
            }, 400);
        }
    );
    About3.click(
        function(){
            Menu.removeClass('show');
            window.scroll(0,bottom);
            event.stopPropagation()
        }
    )
    $(".learn-more").click(
        function(){
            window.scroll(0,bottom);
        }
    )
}

function handleclickService(){
    var bottom = scrollToService.offset().top + scrollToService.height();
    Service1.click(
        function(){
            window.scroll(0,bottom);
        }
    )
    Service2.click(
        function(){
            Menu.removeClass('show');
            window.scroll(0,bottom);

        }
    )    

}

function handleclickWork(){
    var bottom = scrollToWork.offset().top + scrollToWork.height();
        Work1.click(
        function(){
            window.scroll(0,bottom);
        }
        );
        Work2.click(
            function(){
                Intro.addClass("show");
                setTimeout(() => {
                    Intro.removeClass("active");
                    setTimeout(() => {
                        window.scroll(0,bottom);
                    }, 20);
                }, 400);
            }
        );
        Work3.click(
            function(){
                Menu.removeClass('show');
                window.scroll(0,bottom);
                event.stopPropagation()
            }
        )
}