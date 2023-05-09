let inputAbout=document.getElementById("input-about") ;
let editAbout=document.getElementById("edit-about") ;
let saveAbout=document.getElementById("save-about") ;
let inputVision=document.getElementById("input-vision") ;
let editVision=document.getElementById("edit-vision") ;
let saveVision=document.getElementById("save-vision") ;
let inputMessage=document.getElementById("input-message") ;
let editMessage=document.getElementById("edit-message") ;
let saveMessage=document.getElementById("save-message") ;

editAbout.addEventListener("click", function() {
  inputAbout.disabled = false;
});

saveAbout.addEventListener("click", function() {
  var aboutValue = inputAbout.value;
  var currPlaceholder = inputAbout.getAttribute('placeholder');
  if (aboutValue === null || aboutValue === '' || aboutValue === currPlaceholder) {
    inputAbout.setAttribute('placeholder', currPlaceholder);
  } else {
    inputAbout.setAttribute('placeholder', aboutValue);
  }
  inputAbout.disabled = true;
});

editVision.addEventListener("click", function() {
  inputVision.disabled = false;
});

saveVision.addEventListener("click", function() {
  var visionValue = inputVision.value;
  var currPlaceholder = inputVision.getAttribute('placeholder');
  if (visionValue === null || visionValue === '' || visionValue === currPlaceholder) {
    inputVision.setAttribute('placeholder', currPlaceholder);
  } else {
    inputVision.setAttribute('placeholder', visionValue);
  }
  inputVision.disabled = true;
});

editMessage.addEventListener("click", function() {
  inputMessage.disabled = false;
});

saveMessage.addEventListener("click", function() {
  var messageValue = inputMessage.value;
  var currPlaceholder = inputMessage.getAttribute('placeholder');
  if (messageValue === null || messageValue === '' || messageValue === currPlaceholder) {
    inputMessage.setAttribute('placeholder', currPlaceholder);
  } else {
    inputMessage.setAttribute('placeholder', messageValue);
  }
  inputMessage.disabled = true;
});