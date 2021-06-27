let Menu,handleMenu;
$(function(){
    handleMenu = $("#data-cate")
    Menu = $('#data-menu')
    Cancel = $('#data-cancel')
    handleclickMenu()
})

function handleclickMenu(){
    handleMenu.click(
        function(){     
                Menu.addClass("show")
        }
    )

    Cancel.click(
        function(){
            Menu.removeClass('show');
            event.stopPropagation()
        }
    )
}
