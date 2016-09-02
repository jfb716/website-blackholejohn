/* ------ Tabs Creation ------- */

$(function() {
    $("#tabs").tabs();
});

/* ------ Main Code on Doc Ready ------- */

$(document).ready(function(){
    

/* ------ Main Background Color ------- */
    
  $(".background_color_main").change(function() {
  console.log( "Handler for font size called." );
      var color = "";
    $( ".background_color_main option:selected" ).each(function() {
      color += $(this).text() + " ";
        console.log(color);
    });
    $(".thirdPartyRoot").css('background-color', color);
});  
    
/* ------ Main Font Color ------- */

    $(".color_main").change(function() {
  console.log( "Handler for font weight called." );
      var color_font = "";
    $( ".color_main option:selected" ).each(function() {
      color_font += $(this).text() + " ";
        console.log(color_font);
    });
    $(".thirdPartyRoot").css('color', color_font);
});  
    
/* ------ Main Ad Width ------- */
    
    $(".width_main").change(function() {
  console.log( "Handler for font family called." );
      var width = "";
    $( ".width_main option:selected" ).each(function() {
      width += $(this).text() + " ";
        console.log(width);
    });
    $(".thirdPartyRoot").css('width', width);
}); 
    
/* ------ Main Ad Height ------- */
    
    $(".height_main").change(function() {
  console.log( "Handler for margin left called." );
      var height = "";
    $( ".height_main option:selected" ).each(function() {
      height += $(this).text() + " ";
        console.log(height);
    });
    $(".thirdPartyRoot").css('height', height);
});     
    
/* ------ Font Size Title ------- */
    
  $(".font_size_title").change(function() {
  console.log( "Handler for font size called." );
      var size = "";
    $( ".font_size_title option:selected" ).each(function() {
      size += $(this).text() + " ";
        console.log(size);
    });
    $(".thirdPartyTitleClass").css('font-size', size);
});  
    
/* ------ Font Weight Title ------- */

    $(".font_weight_title").change(function() {
  console.log( "Handler for font weight called." );
      var weight = "";
    $( ".font_weight_title option:selected" ).each(function() {
      weight += $(this).text() + " ";
        console.log(weight);
    });
    $(".thirdPartyTitleClass").css('font-weight', weight);
});  
    
/* ------ Font Family Title ------- */
    
    $(".font_family_title").change(function() {
  console.log( "Handler for font family called." );
      var family = "";
    $( ".font_family_title option:selected" ).each(function() {
      family += $(this).text() + " ";
        console.log(family);
    });
    $(".thirdPartyTitleClass").css('font-family', family);
}); 
    
/* ------ Margin Left Title ------- */
    
    $(".margin_left_title").change(function() {
  console.log( "Handler for margin left called." );
      var mleft = "";
    $( ".margin_left_title option:selected" ).each(function() {
      mleft += $(this).text() + " ";
        console.log(mleft);
    });
    $(".thirdPartyTitleClass").css('margin-left', mleft);
}); 
    
/* ------ Font Size Subtitle ------- */
    
  $(".font_size_subtitle").change(function() {
  console.log( "Handler for font size called." );
      var size = "";
    $( ".font_size_subtitle option:selected" ).each(function() {
      size += $(this).text() + " ";
        console.log(size);
    });
    $(".thirdPartySubtitleClass").css('font-size', size);
});  
    
/* ------ Font Weight Subtitle ------- */

    $(".font_weight_subtitle").change(function() {
  console.log( "Handler for font weight called." );
      var weight = "";
    $( ".font_weight_subtitle option:selected" ).each(function() {
      weight += $(this).text() + " ";
        console.log(weight);
    });
    $(".thirdPartySubtitleClass").css('font-weight', weight);
});  
    
/* ------ Font Family Subtitle ------- */
    
    $(".font_family_subtitle").change(function() {
  console.log( "Handler for font family called." );
      var family = "";
    $( ".font_family_subtitle option:selected" ).each(function() {
      family += $(this).text() + " ";
        console.log(family);
    });
    $(".thirdPartySubtitleClass").css('font-family', family);
}); 
    
/* ------ Margin Left Subtitle ------- */
    
    $(".margin_left_subtitle").change(function() {
  console.log( "Handler for margin left called." );
      var mleft = "";
    $( ".margin_left_subtitle option:selected" ).each(function() {
      mleft += $(this).text() + " ";
        console.log(mleft);
    });
    $(".thirdPartySubtitleClass").css('margin-left', mleft);
}); 
    
});


/* ------ Main CSS Print ------- */

$(function(){
    $( ".main_button" ).click(function() {
      var htmlOne = [ ".thirdPartyRoot {" ];
      var htmlTwo = [ "}" ];
      var styleProps = $(".thirdPartyRoot").css([
        "background-color", "color", "border", "bornder-left", "border-right", "font-family", "font-size", "line-height", "width", "height", "text-align", "position"
      ]);
    $.each( styleProps, function( prop, value ) {
    htmlOne.push( prop + ": " + value +";");
    });
    var final = [htmlOne.join("<br>")];   
    $( ".main_result" ).html(final + "<br>" + htmlTwo);
    });
});


/* ------ Title CSS Print ------- */

$(function(){
    $( ".title_button" ).click(function() {
      var htmlOne = [ ".thirdPartyTitleClass {" ];
      var htmlTwo = [ "}" ];
      var styleProps = $(".thirdPartyTitleClass").css([
        "font-size", "font-weight", "font-family", "margin-left", "padding-right", "-webkit-line-clamp", "overflow", "text-overflow", "display", "height", "webkit-box-orient"
      ]);
    $.each( styleProps, function( prop, value ) {
    htmlOne.push( prop + ": " + value +";");
    });
    var final = [htmlOne.join("<br>")];   
    $( ".title_result" ).html(final + "<br>" + htmlTwo);
    });
});

/* ------ Subtitle CSS Print ------- */

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
