let Dropup1,Dropup2,Dropup3;
let Dropdown1,Dropdown2,Dropdown3,Block1,Block2,Block3;
let Image1,Image2,Image3;

$(function(){

    Dropdown1 = $('#data-drop_1')
    Dropdown2 = $('#data-drop_2')
    Dropdown3 = $('#data-drop_3')
    Dropup1 = $('#data-dropup_1')
    Dropup2 = $('#data-dropup_2')
    Dropup3 = $('#data-dropup_3')
    Block1 = $('#data__block--1')
    Block2 = $('#data__block--2')
    Block3 = $('#data__block--3')
    Image1 = $('#data__image--1')
    Image2 = $('#data__image--2')
    Image3 = $('#data__image--3')
    handleclickDropDown()
    handleclickDropUp()

}
)

function handleclickDropDown(){
    Dropdown2.click(
        function(){
            Dropup1.addClass('d-none')
            Dropup3.addClass('d-none')
            Dropdown1.removeClass('d-none')
            Dropdown3.removeClass('d-none')
            Image2.addClass('show')
            Image1.removeClass('show')
            Image3.removeClass('show')
            setTimeout(() => {
                Dropdown3.removeClass('up')
                Dropdown1.removeClass('up')
                Dropdown2.addClass('up')
            }, 1);
            Block2.addClass('show')       
            Block1.removeClass('show')       
            Block3.removeClass('show')
            setTimeout(() => {
                Dropdown2.addClass('d-none')
                Dropup2.removeClass('d-none')
            }, 300);
            
        }
    )
    Dropdown1.click(
        function(){
            Dropup3.addClass('d-none')
            Dropup2.addClass('d-none')
            Dropdown3.removeClass('d-none')
            Dropdown2.removeClass('d-none')
            Image1.addClass('show')
            Image2.removeClass('show')
            Image3.removeClass('show')
            setTimeout(() => {
                Dropdown3.removeClass('up')
                Dropdown2.removeClass('up')
                Dropdown1.addClass('up')               
            }, 1);

            Block1.addClass('show')       
            Block2.removeClass('show')       
            Block3.removeClass('show')
            setTimeout(() => {
                Dropdown1.addClass('d-none')
                Dropup1.removeClass('d-none')         
            }, 300);
        }
    )
    Dropdown3.click(
        function(){
            Dropup1.addClass('d-none')
            Dropup2.addClass('d-none')
            Dropdown1.removeClass('d-none')
            Dropdown2.removeClass('d-none')
            Image3.addClass('show')
            Image2.removeClass('show')
            Image1.removeClass('show')
            setTimeout(() => {
                Dropdown1.removeClass('up')
                Dropdown2.removeClass('up')
                Dropdown3.addClass('up')
            }, 1);
            Block3.addClass('show')       
            Block2.removeClass('show')       
            Block1.removeClass('show')
            setTimeout(() => {
                Dropdown3.addClass('d-none')
                Dropup3.removeClass('d-none')
            }, 300);
        }
    )
}


function handleclickDropUp(){
    Dropup1.click(
        function(){
            Dropdown1.removeClass('d-none')
            Dropup1.addClass('d-none')
            setTimeout(() => {
                Dropdown1.removeClass('up')
                Block1.removeClass('show')
                Image1.removeClass('show')
            }, 1);

        }
    );
    Dropup2.click(
        function(){
            Dropdown2.removeClass('d-none')
            Dropup2.addClass('d-none')
            setTimeout(() => {
                Dropdown2.removeClass('up')
                Block2.removeClass('show')
                Image2.removeClass('show')
            }, 1);

        }
    );
    Dropup3.click(
        function(){
            Dropdown3.removeClass('d-none')
            Dropup3.addClass('d-none')
            setTimeout(() => {
                Dropdown3.removeClass('up')
                Block3.removeClass('show')
                Image3.removeClass('show')
            }, 1);

        }
    );
}

