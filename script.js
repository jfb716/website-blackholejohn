/* ------ Tabs Creation ------- */

$(function() {
    $("#tabs").tabs();
});


/* ------ Main Code on Doc Ready ------- */

$(document).ready(function(){
    
    
    $(".custom_template").change(function(){
        var value = $(".custom_template").val();
        console.log(value);
            
        if (value == "template_1") {
            console.log("Template 1");
            $(".thirdPartyRoot").css({"background-color": "white",
                        "color": "#444",
                        "border": "1px solid #ccc",
                        "border-left": "0",
                        "border-right": "0",
                        "font-family": "sans-serif",
                        "font-size": "14px",
                        "line-height": "16px",
                        "width": "300px",
                        "height": "250px",
                        "text-align": "left",
                        "position": "relative"});
            $(".thirdPartyMediaClass").css({"width": "300px",
                        "height": "158px",
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
            $(".fbAdIcon").css({"display": "inline-block", "height": "20px", "width": "20px"});
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

    
    
    
    $(function(){
       $(".main_button").click(function(){
         console.log("You clicked the Main Button!");
           var rootOne = [ ".thirdPartyRoot {"];
           var rootTwo = [ "}"];
           var rootStyles = $(".thirdPartyRoot").css(["font-size", "font-weight", "font-family", "margin-left", "padding-right", "-webkit-line-clamp", "overflow", "text-overflow", "display", "height", "webkit-box-orient"]);
            $.each( rootStyles, function(prop, value) {
            rootOne.push( prop + ": " + value +";");
            });
            var rootFinal = [rootOne.join("<br>")];   
           
           
           var mediaOne = [ ".thirdPartyMediaClass {"];
           var mediaTwo = [ "}"];
           var mediaStyles = $(".thirdPartyMediaClass").css(["font-size", "font-weight", "font-family", "margin-left", "padding-right", "-webkit-line-clamp", "overflow", "text-overflow", "display", "height", "webkit-box-orient"]);
            $.each( mediaStyles, function(prop, value) {
            mediaOne.push( prop + ": " + value +";");
            });
            var mediaFinal = [mediaOne.join("<br>")];   
           
           
           var subtitleOne = [ ".thirdPartySubtitleClass {"];
           var subtitleTwo = [ "}"];
           var subtitleStyles = $(".thirdPartySubtitleClass").css(["font-size", "font-weight", "font-family", "margin-left", "padding-right", "-webkit-line-clamp", "overflow", "text-overflow", "display", "height", "webkit-box-orient"]);
            $.each( subtitleStyles, function(prop, value) {
            subtitleOne.push( prop + ": " + value +";");
            });
            var subtitleFinal = [subtitleOne.join("<br>")];  
           
           
           var titleOne = [ ".thirdPartyTitleClass {"];
           var titleTwo = [ "}"];
           var titleStyles = $(".thirdPartyTitleClass").css(["font-size", "font-weight", "font-family", "margin-left", "padding-right", "-webkit-line-clamp", "overflow", "text-overflow", "display", "height", "webkit-box-orient"]);
            $.each( titleStyles, function(prop, value) {
            titleOne.push( prop + ": " + value +";");
            });
            var titleFinal = [titleOne.join("<br>")];  
           
           
           var callOne = [ ".thirdPartyCallToActionClass {"];
           var callTwo = [ "}"];
           var callStyles = $(".thirdPartyCallToActionClass").css(["font-size", "font-weight", "font-family", "margin-left", "padding-right", "-webkit-line-clamp", "overflow", "text-overflow", "display", "height", "webkit-box-orient"]);
            $.each( callStyles, function(prop, value) {
            callOne.push( prop + ": " + value +";");
            });
            var callFinal = [callOne.join("<br>")];  
           
           
           var iconOne = [ ".fbAdIcon {"];
           var iconTwo = [ "}"];
           var iconStyles = $(".fbAdIcon").css(["font-size", "font-weight", "font-family", "margin-left", "padding-right", "-webkit-line-clamp", "overflow", "text-overflow", "display", "height", "webkit-box-orient"]);
            $.each( iconStyles, function(prop, value) {
            iconOne.push( prop + ": " + value +";");
            });
            var iconFinal = [iconOne.join("<br>")]; 
           
           
            $( ".main_result" ).html(rootFinal + "<br>" + rootTwo + "<br>" + "<br>" + mediaFinal + "<br>" + mediaTwo + "<br>" + "<br>" + subtitleFinal + "<br>" + subtitleTwo + "<br>" + "<br>" + titleFinal + "<br>" + titleTwo + "<br>" + "<br>" + callFinal + "<br>" + callTwo + "<br>" + "<br>" + iconFinal + "<br>" + iconTwo);
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













