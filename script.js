/* ------ Tabs Creation ------- */

$(function() {
    $("#tabs").tabs();
});


/* ------ Main Code on Doc Ready ------- */

$(document).ready(function(){
    
/* ------ CSS Update Code Keying Off Value Passed in the Dropdown ------- */
    
    $(".custom_template").change(function(){
        
        $( ".main_result" ).empty();
        $(".thirdPartyRoot, .thirdPartyMediaClass, .thirdPartySubtitleClass, .thirdPartyTitleClass, .thirdPartyCallToActionClass, .fbAdIcon, .thirdPartyRoot").removeAttr('style');

        var value = $(".custom_template").val();
        console.log(value);
            
        if (value == "template_1") {
            console.log("LittleThings CSS");
            $(".thirdPartyRoot").css({"background-color": "white",
                        "border": "none",
                        "color": "#444",
                        "font-family": "sans-serif",
                        "font-size": "14px",
                        "line-height": "16px",
                        "width": "300px",
                        "height": "250px",
                        "text-align": "left",
                        "position": "relative"});
            $(".thirdPartyMediaClass").css({"width": "300px",
                        "height": "157px",
                        "margin": "12px 0"});
            $(".thirdPartySubtitleClass").css({"font-size": "20px",
                        "font-weight": "500",
                        "font-family": "'Raleway', sans-serif",
                        "-webkit-line-clamp": "1",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "display": "-webkit-box",
                        "height": "20px",
                        "line-height": "24px",
                        "-webkit-box-orient": "vertical"});
            $(".thirdPartyTitleClass").css({"padding-right": "12px",
                        "line-height": "20px",
                        "font-family": "'Raleway', georgia, arial",
                        "font-size": "16px",
                        "color": "#555",
                        "-webkit-line-clamp": "2",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "display": "-webkit-box",
                        "-webkit-box-orient": "vertical"});
            $(".thirdPartyCallToActionClass").css({"background-color": "#fbb11e",
                        "color": "#fff",
                        "border-radius": "4px",
                        "padding": "5px 10px",
                        "font-weight": "500",
                        "float": "right",
                        "text-align": "center",
                        "text-transform": "uppercase",
                        "font-family": "'Raleway', sans-serif",
                        "font-size": "15px"});
            $(".fbAdIcon").css({"display": "none"});
        } 
        else if (value == "template_2"){
            console.log("Template 2");
            $(".thirdPartyRoot").css({"background-color": "white",
                        "color": "#444",
                        "border": "1px solid #ccc",
                        "border-left": "0",
                        "border-right": "0",
                        "font-family": "sans-serif",
                        "font-size": "14px",
                        "line-height": "16px",
                        "width": "320px",
                        "text-align": "left",
                        "position": "relative"});
            $(".thirdPartyMediaClass").css({"width": "320px",
                        "height": "168px",
                        "margin": "12px 0"});
            $(".thirdPartySubtitleClass").css({"font-size": "18px",
                        "-webkit-line-clamp": "1",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "display": "-webkit-box",
                        "height": "16px",
                        "-webkit-box-orient": "vertical"});
            $(".thirdPartyTitleClass").css({"padding-right": "12px",
                        "line-height": "18px",
                        "-webkit-line-clamp": "2",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "display": "-webkit-box",
                        "height": "36px",
                        "-webkit-box-orient": "vertical"});
            $(".thirdPartyCallToActionClass").css({"background-color": "#416BC4",
                        "color": "white",
                        "border-radius": "4px",
                        "padding": "6px 20px",
                        "float": "right",
                        "text-align": "center",
                        "text-transform": "uppercase",
                        "font-size": "11px"});
            $(".fbAdIcon").css({"display": "none"});
        }
        else {
            console.log("Default");
            $(".thirdPartyRoot").css({"background-color": "white",
                        "color": "#444",
                        "border": "1px solid #ccc",
                        "border-left": "0",
                        "border-right": "0",
                        "font-family": "sans-serif",
                        "font-size": "14px",
                        "line-height": "16px",
                        "width": "320px",
                        "text-align": "left",
                        "position": "relative"});
            $(".thirdPartyMediaClass").css({"width": "320px",
                        "height": "168px",
                        "margin": "12px 0"});
            $(".thirdPartySubtitleClass").css({"font-size": "18px",
                        "-webkit-line-clamp": "1",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "display": "-webkit-box",
                        "height": "16px",
                        "-webkit-box-orient": "vertical"});
            $(".thirdPartyTitleClass").css({"padding-right": "12px",
                        "line-height": "18px",
                        "-webkit-line-clamp": "2",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "display": "-webkit-box",
                        "height": "36px",
                        "-webkit-box-orient": "vertical"});
            $(".thirdPartyCallToActionClass").css({"background-color": "#416BC4",
                        "color": "white",
                        "border-radius": "4px",
                        "padding": "6px 20px",
                        "float": "right",
                        "text-align": "center",
                        "text-transform": "uppercase",
                        "font-size": "11px"});
            $(".fbAdIcon").css({"display": "none"});
        }
    });

    
    
/* ------ Get CSS Button - Chooses CSS Based Off the Value Passed From the Dropdown ------- */
    
    $(function(){
       $(".main_button").click(function(){
           
        var value = $(".custom_template").val();
        console.log(value);
            
        if (value == "template_1") {
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
        }
            
        else if (value == "template_2"){
            console.log("Print Template 2 CSS");
        }
        
        else { 
         console.log("Print Default CSS");
           var rootOne = [ ".thirdPartyRoot {"];
           var rootTwo = [ "}"];
           var rootStyles = $(".thirdPartyRoot").css(["background-color", "color", "border", "border-left", "border-right", "font-family",  "font-size", "line-height", "width", "text-align", "position"]);
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
           var subtitleStyles = $(".thirdPartySubtitleClass").css(["font-size", "-webkit-line-clamp", "overflow", "text-overflow", "display", "height", "-webkit-box-orient"]);
            $.each( subtitleStyles, function(prop, value) {
            subtitleOne.push( prop + ": " + value +";");
            });
            var subtitleFinal = [subtitleOne.join("<br>")];  
           
           
           var titleOne = [ ".thirdPartyTitleClass {"];
           var titleTwo = [ "}"];
           var titleStyles = $(".thirdPartyTitleClass").css(["padding-right", "line-height", "-webkit-line-clamp", "overflow", "text-overflow", "display", "height", "-webkit-box-orient"]);
            $.each( titleStyles, function(prop, value) {
            titleOne.push( prop + ": " + value +";");
            });
            var titleFinal = [titleOne.join("<br>")];  
           
           
           var callOne = [ ".thirdPartyCallToActionClass {"];
           var callTwo = [ "}"];
           var callStyles = $(".thirdPartyCallToActionClass").css(["background-color", "color", "border-radius", "padding", "float", "text-align", "text-transform", "font-size"]);
            $.each( callStyles, function(prop, value) {
            callOne.push( prop + ": " + value +";");
            });
            var callFinal = [callOne.join("<br>")];  
           
           
           var iconOne = [ ".fbAdIcon {"];
           var iconTwo = [ "}"];
           var iconStyles = $(".fbAdIcon").css(["display"]);
            $.each( iconStyles, function(prop, value) {
            iconOne.push( prop + ": " + value +";");
            });
            var iconFinal = [iconOne.join("<br>")]; 
           
           
            $( ".main_result" ).html(rootFinal + "<br>" + rootTwo + "<br>" + "<br>" + mediaFinal + "<br>" + mediaTwo + "<br>" + "<br>" + subtitleFinal + "<br>" + subtitleTwo + "<br>" + "<br>" + titleFinal + "<br>" + titleTwo + "<br>" + "<br>" + callFinal + "<br>" + callTwo + "<br>" + "<br>" + iconFinal + "<br>" + iconTwo);
        }
       });
    });
    
    
    
    
    
});
    
/* ------ Margin Left Subtitle ------- 
    
    $(".margin_left_subtitle").change(function() {
  console.log( "Handler for margin left called." );
      var mleft = "";
    $( ".margin_left_subtitle option:selected" ).each(function() {
      mleft += $(this).text() + " ";
        console.log(mleft);
    });
    $(".thirdPartySubtitleClass").css('margin-left', mleft);
}); 
    
*/


/* ------ Subtitle CSS Print ------- 

$(function(){
    $( ".subtitle_button" ).click(function() {
      var htmlOne = [ ".thirdPartySubtitleClass {" ];
      var htmlTwo = [ "}" ];
      var styleProps = $(".thirdPartySubtitleClass").css([
        "font-size", "font-weight", "font-family", "margin-left", "padding-right", "-webkit-line-clamp", "overflow", "text-overflow", "display", "height", "webkit-box-orient"
      ]);
    $.each( styleProps, function( prop, value ) {
    htmlOne.push( prop + ": " + value +";");
    });
    var final = [htmlOne.join("<br>")];   
    $( ".subtitle_result" ).html(final + "<br>" + htmlTwo);
    });
});

*/













