//
//  pop-up.js
//  pop-up-mobile
//
//  Created by luis.monge on 2012-10-18.
//  Copyright 2012 luis.monge. All rights reserved.
//

$(document).ready(function() {"use strict";
    function closePopUpMessage() {
        $(".modalOverlay").transition({
            opacity : 0 }).hide();
            
        $(".modalWindow").hide();           
    }
    
    function showPopUpMessage() {
        $(".modalOverlay").show().transition({
            opacity : 0.4
        }).click(function () { 
            closePopUpMessage();
        });
        
        $(".modalWindow").show();
    }


    $("nav a").click(function() {
        showPopUpMessage();
    });
});