/* ------ Main Code on Doc Ready ------- */

        $(document).ready(function (){


/* ------ Tabs Creation ------- */

        $(function () {
            $("#tabs").tabs();
        });


/* ------ Tooltips ------- */


        $(document).tooltip();


/* ------- Buttons ------- */


        $( ".button" ).button();
            
            
/* ------ Button Code to Download Tag ------ */


        $(document).on("click", ".tagButton", function(){

            var newTag = $(".box_right").text();
            console.log(newTag);

            var hiddenElement = document.createElement('a');

            hiddenElement.href = 'data:attachment/text,' + encodeURI(newTag);
            hiddenElement.target = '_blank';
            hiddenElement.download = 'audience_network_tag.txt';
            hiddenElement.click();
        });


/* ------ Button Code to Update CSS ------ */
            
            
        $(".ctaButton").click(function(){
            console.log("CTA Button Click");

            var ctaColorNew = $("#ctaCol").val();
            console.log(ctaColorNew);

            $(".thirdPartyCallToActionClass").css({"color": ctaColorNew});
        });

        $(".fontFamButton").click(function(){
           console.log("Font Family Button Click");

            var fontFamNew = $("#fontFam").val();
            console.log(fontFamNew);

            $(".thirdPartyRoot").css({"font-family": fontFamNew});
        });

        $(".subWeightButton").click(function(){
           console.log("Subtitle Weight Button Click"); 

            var subWeNew = $("#subFontWeight").val();
            console.log(subWeNew);

            $(".fbAdSubtitle").css({"font-weight": subWeNew});
        });

        $(".titWeightButton").click(function(){
            console.log("Title Weight Button Click"); 

            var titWeNew = $("#titFontWeight").val();
            console.log(titWeNew);

            $(".fbAdTitle").css({"font-weight": titWeNew});
        });

        $(".ctaWeightButton").click(function(){
            console.log("CTA Weight Button Click"); 

            var ctaWeNew = $("#ctaFontWeight").val();
            console.log(ctaWeNew);

            $(".thirdPartyCallToActionClass").css({"font-weight": ctaWeNew});
        });

        });














