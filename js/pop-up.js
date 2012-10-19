//
//  pop-up.js
//  pop-up-mobile
//
//  Created by luis.monge on 2012-10-18.
//  Copyright 2012 luis.monge. All rights reserved.
//

$(document).ready(function() {"use strict";
    $("nav a").click(function() {
        $('nav p a').transition({x : '90px'});
    });
    
    function showPopUpMessage()
});



//show the modal overlay and popup window
function showPopUpMessage(msg) {
  overlayElement = document.createElement("div");
  overlayElement.className = 'modalOverlay';
  modalWindowElement = document.createElement("div");
  modalWindowElement.className = 'modalWindow';
  modalWindowElement.innerHTML = msg;
  modalWindowElement.style.left = (window.innerWidth - 200) / 2 + "px";
  document.body.appendChild(overlayElement);
  document.body.appendChild(modalWindowElement);
  setTimeout(function() {
    modalWindowElement.style.opacity = 1;
    overlayElement.style.opacity = 0.4;
    overlayElement.addEventListener("click", hidePopUpMessage, false);
  }, 300);
}
//hide the modal overlay and popup window
function hidePopUpMessage() {
  modalWindowElement.style.opacity = 0;
  overlayElement.style.opacity = 0;
  overlayElement.removeEventListener("click", hidePopUpMessage, false);
  setTimeout(function() {
    document.body.removeChild(overlayElement);
    document.body.removeChild(modalWindowElement);
  }, 400);
}