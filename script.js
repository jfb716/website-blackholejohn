/* ------ Tabs Creation ------- */

$(function () {
    $("#tabs").tabs();
});


/* ------ Main Code on Doc Ready ------- */

$(document).ready(function (){
    
/* ------ CSS Update Code Keying Off Value Passed in the Dropdown ------- */
    
    $(".custom_template").change(function (){
        
        $( ".main_result" ).empty();
        $(".thirdPartyRoot, .thirdPartyMediaClass, .thirdPartySubtitleClass, .thirdPartyTitleClass, .thirdPartyCallToActionClass, .fbAdIcon, .thirdPartyRoot, .ad_tag, .phone").removeAttr('style');
        $(".thirdPartyMediaClass div:nth-child(even)").removeAttr({"background-color": "transparent !important"});
        $(".thirdPartyMediaClass div:nth-child(odd)").removeAttr({"background-color": "#191919 !important"});

        var value = $(".custom_template").val();
        console.log(value);
            
        if (value == "template_1") {
            console.log("LittleThings CSS");
            $(".ad_tag").css({"margin-left": "30px"});
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
            $(".fbAdBody").css({"display": "none"});
        } 
        else if (value == "template_2") {
            console.log("Legacy");
            $(".ad_tag").css({"margin-left": "10px"});
            $(".phone").css({"height": "550px"});
            $(".thirdPartyRoot").css({"background-color": "#e4eff8",
                        "color": "#444",
                        "border": "none",
                        "font-family": "sans-serif",
                        "font-size": "14px",
                        "line-height": "16px",
                        "width": "345px",
                        "text-align": "left",
                        "padding": "4px",
                        "position": "relative"});
            $(".thirdPartyMediaClass").css({"display": "none"});
            $(".thirdPartySubtitleClass").css({"font-size": "16px",
                        "color": "#4a657a",
                        "font-weight": "bold",
                        "font-family": "Arial, Helvetica, sans-serif",
                        "-webkit-line-clamp": "1",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "width": "170px",
                        "display": "inline-block",
                        "height": "16px",
                        "-webkit-box-orient": "vertical"});
            $(".thirdPartyTitleClass").css({"padding-right": "12px",
                        "color": "#333333",
                        "font-family": "Arial, Helvetica, sans-serif",
                        "line-height": "18px",
                        "-webkit-line-clamp": "2",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "display": "-webkit-box",
                        "margin": "0 10px",
                        "-webkit-box-orient": "vertical"});
            $(".thirdPartyCallToActionClass").css({"background-color": "#4a657a",
                        "color": "white",
                        "margin": "15px 10px 0 0",
                        "border-radius": "4px",
                        "padding": "6px",
                        "float": "right",
                        "text-align": "center",
                        "text-transform": "uppercase",
                        "font-size": "11px"});
            $(".fbAdIcon").css({"height": "20px",
                        "width": "20px",
                        "display": "inline-block",
                        "margin": "20px 0 0 10px"});
            $(".fbAdBody").css({"margin": "0 10px 20px 10px",
                        "font-size": "13px",
                        "font-style": "italic",
                        "font-family": "Arial, Helvetica, sans-serif",
                        "color": "#333333",
                        "display": "inline-block"});
        }
        
         else if (value == "template_3") {
            console.log("Cooking Panda");
            $(".thirdPartyRoot").css({"background-color": "#191919",
                        "color": "#ffffff",
                        "border": "none",
                        "font-family": "'lato', sans-serif",
                        "font-size": "14px",
                        "line-height": "16px",
                        "width": "300px",
                        "height": "250px",
                        "text-align": "left",
                        "padding-top": "1px",
                        "position": "relative",
                        "box-sizing": "border-box"});
            $(".thirdPartyMediaClass").css({"width": "300px", 
                        "height": "148px",
                        "margin": "12px 0"});
            $(".thirdPartySubtitleClass").css({"font-size": "18px",
                        "-webkit-line-clamp": "1",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "display": "inline-block",
                        "height": "16px",
                        "-webkit-box-orient": "vertical",
                        "margin-bottom": "6px"});
            $(".thirdPartyTitleClass").css({"padding-right": "12px",
                        "font-weight": "900",
                        "line-height": "18px",
                        "-webkit-line-clamp": "2",
                        "overflow": "hidden",
                        "text-overflow": "ellipsis",
                        "display": "-webkit-box",
                        "height": "36px",
                        "margin-left": "10px",
                        "-webkit-box-orient": "vertical"});
            $(".thirdPartyCallToActionClass").css({"background-color": "#ff3c00",
                        "color": "#fff",
                        "margin": "5px 10px 0 0",
                        "border-radius": "4px",
                        "padding": "6px 20px",
                        "float": "right",
                        "text-align": "center",
                        "text-transform": "uppercase",
                        "font-size": "11px",
                        "position": "absolute",
                        "right": "10px",
                        "bottom": "10px"});
            $(".fbAdIcon").css({"height": "28px",
                        "width": "28px",
                        "display": "inline-block",
                        "margin": "10px"});
            $(".thirdPartyMediaClass div:nth-child(even)").css({"background-color": "transparent !important"});
            $(".thirdPartyMediaClass div:nth-child(odd)").css({"background-color": "#191919 !important"});
            $(".fbAdBody").css({"display": "none"});
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
            $(".fbAdBody").css({"display": "none"});
        }
    });

    
    
/* ------ Get CSS Button - Chooses CSS Based Off the Value Passed From the Dropdown ------- */
    
    $(function(){
       $(".main_button").click(function() {
           
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
            console.log("Print Legacy CSS");
            
            var rootOne = [ ".thirdPartyRoot {"];
            var rootTwo = [ "}"];
            var rootStyles = $(".thirdPartyRoot").css(["background-color", "color", "font-family",  "font-size", "line-height", "width", "text-align", "position", "padding"]);
            $.each( rootStyles, function(prop, value) {
            rootOne.push( prop + ": " + value +";");
            });
            var rootFinal = [rootOne.join("<br>")];   
           
           
           var subtitleOne = [ ".thirdPartySubtitleClass {"];
           var subtitleTwo = [ "}"];
           var subtitleStyles = $(".thirdPartySubtitleClass").css(["font-size", "color", "font-weight", "font-family", "-webkit-line-clamp", "overflow", "text-overflow", "display", "height", "-webkit-box-orient", "width"]);
            $.each( subtitleStyles, function(prop, value) {
            subtitleOne.push( prop + ": " + value +";");
            });
            var subtitleFinal = [subtitleOne.join("<br>")];  
           
           
           var titleOne = [ ".thirdPartyTitleClass {"];
           var titleTwo = [ "}"];
           var titleStyles = $(".thirdPartyTitleClass").css(["line-height", "font-family", "font-size", "color", "-webkit-line-clamp", "overflow", "text-overflow", "display", "-webkit-box-orient", "margin"]);
            $.each( titleStyles, function(prop, value) {
            titleOne.push( prop + ": " + value +";");
            });
            var titleFinal = [titleOne.join("<br>")];  
           
           
           var callOne = [ ".thirdPartyCallToActionClass {"];
           var callTwo = [ "}"];
           var callStyles = $(".thirdPartyCallToActionClass").css(["background-color", "color", "border-radius", "padding", "float", "text-align", "text-transform", "font-size", "margin"]);
            $.each( callStyles, function(prop, value) {
            callOne.push( prop + ": " + value +";");
            });
            var callFinal = [callOne.join("<br>")];  
            
            
            var iconOne = [ ".fbAdIcon {"];
            var iconTwo = [ "}"];
            var iconStyles = $(".fbAdIcon").css(["height", "width", "display", "margin"]);
            $.each( iconStyles, function(prop, value) {
            iconOne.push( prop + ": " + value +";");
            });
            var iconFinal = [iconOne.join("<br>")]; 
            
            
            var bodyOne = [ ".fbAdBody {"];
            var bodyTwo = [ "}"];
            var bodyStyles = $(".fbAdBody").css(["margin", "font-size", "font-style", "font-family", "color"]);
            $.each( bodyStyles, function(prop, value) {
            bodyOne.push( prop + ": " + value +";");
            });
            var bodyFinal = [bodyOne.join("<br>")]; 
           
           
            $( ".main_result" ).html(rootFinal + "<br>" + rootTwo + "<br>" + "<br>" + bodyFinal + "<br>" + bodyTwo + "<br>" + "<br>" + iconFinal + "<br>" + iconTwo + "<br>" + "<br>" + subtitleFinal + "<br>" + subtitleTwo + "<br>" + "<br>" + titleFinal + "<br>" + titleTwo + "<br>" + "<br>" + callFinal + "<br>" + callTwo);
        }
        
           
           
           else if (value == "template_3"){
            console.log("Print Cooking Panda CSS");
            
            var rootOne = [ ".thirdPartyRoot {"];
            var rootTwo = [ "}"];
            var rootStyles = $(".thirdPartyRoot").css(["background-color", "color", "font-family",  "font-size", "line-height", "width", "height", "text-align", "position", "padding-top", "box-sizing"]);
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
           var subtitleStyles = $(".thirdPartySubtitleClass").css(["font-size", "-webkit-line-clamp", "overflow", "text-overflow", "display", "height", "-webkit-box-orient", "margin-bottom"]);
            $.each( subtitleStyles, function(prop, value) {
            subtitleOne.push( prop + ": " + value +";");
            });
            var subtitleFinal = [subtitleOne.join("<br>")];  
           
           
           var titleOne = [ ".thirdPartyTitleClass {"];
           var titleTwo = [ "}"];
           var titleStyles = $(".thirdPartyTitleClass").css(["padding-right", "font-weight", "line-height", "-webkit-line-clamp", "overflow", "text-overflow", "display", "height", "-webkit-box-orient", "margin-left"]);
            $.each( titleStyles, function(prop, value) {
            titleOne.push( prop + ": " + value +";");
            });
            var titleFinal = [titleOne.join("<br>")];  
           
           
           var callOne = [ ".thirdPartyCallToActionClass {"];
           var callTwo = [ "}"];
           var callStyles = $(".thirdPartyCallToActionClass").css(["background-color", "color", "border-radius", "padding", "float", "text-align", "text-transform", "font-size", "margin"]);
            $.each( callStyles, function(prop, value) {
            callOne.push( prop + ": " + value +";");
            });
            var callFinal = [callOne.join("<br>")];  
            
            
            var iconOne = [ ".fbAdIcon {"];
            var iconTwo = [ "}"];
            var iconStyles = $(".fbAdIcon").css(["height", "width", "display", "margin-left"]);
            $.each( iconStyles, function(prop, value) {
            iconOne.push( prop + ": " + value +";");
            });
            var iconFinal = [iconOne.join("<br>")]; 
            
            
            var evenOne = [ ".thirdPartyMediaClass div:nth-child(even) {"];
            var evenTwo = [ "}"];
            var evenStyles = $(".thirdPartyMediaClass div:nth-child(even)").css(["background-color"]);
            $.each( evenStyles, function(prop, value) {
            evenOne.push( prop + ": " + value + " !mportant" +";");
            });
            var evenFinal = [evenOne.join("<br>")]; 
           
               
            var oddOne = [ ".thirdPartyMediaClass div:nth-child(odd) {"];
            var oddTwo = [ "}"];
            var oddStyles = $(".thirdPartyMediaClass div:nth-child(odd)").css(["background-color"]);
            $.each( oddStyles, function(prop, value) {
            oddOne.push( prop + ": " + value + " !mportant" +";");
            });
            var oddFinal = [oddOne.join("<br>")]; 
               
           
            $( ".main_result" ).html(rootFinal + "<br>" + rootTwo + "<br>" + "<br>" + mediaFinal + "<br>" + mediaTwo + "<br>" + "<br>" + iconFinal + "<br>" + iconTwo + "<br>" + "<br>" + subtitleFinal + "<br>" + subtitleTwo + "<br>" + "<br>" + titleFinal + "<br>" + titleTwo + "<br>" + "<br>" + callFinal + "<br>" + callTwo + "<br>" + "<br>" + evenFinal + "<br>" + evenTwo + "<br>" + "<br>" + oddFinal + "<br>" + oddTwo);
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
           
           
            $( ".main_result" ).html(rootFinal + "<br>" + rootTwo + "<br>" + "<br>" + mediaFinal + "<br>" + mediaTwo + "<br>" + "<br>" + subtitleFinal + "<br>" + subtitleTwo + "<br>" + "<br>" + titleFinal + "<br>" + titleTwo + "<br>" + "<br>" + callFinal + "<br>" + callTwo);
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













