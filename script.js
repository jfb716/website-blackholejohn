

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

    
/* ------ Site Color Toggle ------ */
    
$(".toggle_blk").click(function(){
    $(".phone").css({"background-color": "black"})
});

$(".toggle_wht").click(function(){
    $(".phone").css({"background-color": "white"})
});
    
    
    
    /* ------ AdChoice Color Toggle ------ */
    
$(".adchoice_blk").click(function(){
    $(".fbAdChoices").css({"background-color": "black"})
});

$(".adchoice_wht").click(function(){
    $(".fbAdChoices").css({"background-color": "transparent"})
    $(".fbAdChoices img").css({"background-color": "transparent"})
});
    
    
    

    
    
/* ------ Get CSS Button  ------- */
    
       $(".main_button").click(function() {
           
        var value = $(".custom_template").val();
        console.log(value);
            
            console.log("Print LittleThings CSS");
            var rootOne = [ ".thirdPartyRoot {"];
            var rootTwo = [ "}"];
            var rootStyles = $(".thirdPartyRoot").css(["background-color", "color", "font-family",  "font-size", "line-height", "width", "height", "text-align", "position"]);
             $.each( rootStyles, function(prop, value) {
             rootOne.push( prop + ": " + value +";");
             });
             var rootFinal = [rootOne.join("<br>")];   
           
           
           var mediaOne = [ ".thirdPartyMediaClass {"];
           var mediaTwo = [ "}"];
           var mediaStyles = $(".thirdPartyMediaClass").css(["width", "height", "margin"]);
            $.each( mediaStyles, function(prop, value) {
            mediaOne.push( prop + ": " + value +";");
            });
            var mediaFinal = [mediaOne.join("<br>")];   
           
           
           var subtitleOne = [ ".thirdPartySubtitleClass {"];
           var subtitleTwo = [ "}"];
           var subtitleStyles = $(".thirdPartySubtitleClass").css(["font-size", "font-weight", "font-family", "-webkit-line-clamp", "overflow", "text-overflow", "display", "line-height", "height", "-webkit-box-orient"]);
            $.each( subtitleStyles, function(prop, value) {
            subtitleOne.push( prop + ": " + value +";");
            });
            var subtitleFinal = [subtitleOne.join("<br>")];  
           
           
           var titleOne = [ ".thirdPartyTitleClass {"];
           var titleTwo = [ "}"];
           var titleStyles = $(".thirdPartyTitleClass").css(["padding-right", "line-height", "font-family", "font-size", "color", "-webkit-line-clamp", "overflow", "text-overflow", "display", "-webkit-box-orient"]);
            $.each( titleStyles, function(prop, value) {
            titleOne.push( prop + ": " + value +";");
            });
            var titleFinal = [titleOne.join("<br>")];  
           
           
           var callOne = [ ".thirdPartyCallToActionClass {"];
           var callTwo = [ "}"];
           var callStyles = $(".thirdPartyCallToActionClass").css(["background-color", "color", "padding", "font-weight", "float", "text-align", "text-transform", "font-size", "font-family"]);
            $.each( callStyles, function(prop, value) {
            callOne.push( prop + ": " + value +";");
            });
            var callFinal = [callOne.join("<br>")];  
           
           
            $( ".main_result" ).html(rootFinal + "<br>" + rootTwo + "<br>" + "<br>" + mediaFinal + "<br>" + mediaTwo + "<br>" + "<br>" + subtitleFinal + "<br>" + subtitleTwo + "<br>" + "<br>" + titleFinal + "<br>" + titleTwo + "<br>" + "<br>" + callFinal + "<br>" + callTwo);
            
           
           
       
       });
    
    
    
    
    
});
    













