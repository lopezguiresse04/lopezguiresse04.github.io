    //tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

 

    $(function(){


        $(window).scroll(function(){
            var posicion = $(this).scrollTop();
            //alert("me movieron");

            if(posicion > 100){
                $('.navbar').addClass('bg-scroll');
            }  else {
                $('.navbar').removeClass('bg-scroll');
            }
        });

    });
