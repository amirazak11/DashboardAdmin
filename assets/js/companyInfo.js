let inputAbout=document.getElementById("input-about") ;
let editAbout=document.getElementById("edit-about") ;
let saveAbout=document.getElementById("save-about") ;
let inputVision=document.getElementById("input-vision") ;
let editVision=document.getElementById("edit-vision") ;
let saveVision=document.getElementById("save-vision") ;
let inputMessage=document.getElementById("input-message") ;
let editMessage=document.getElementById("edit-message") ;
let saveMessage=document.getElementById("save-message") ;
let inputMission=document.getElementById("input-mission") ;
let editMission=document.getElementById("edit-mission") ;
let saveMission=document.getElementById("save-mission") ;
let inputValue=document.getElementById("input-value") ;
let editValue=document.getElementById("edit-value") ;
let saveValue=document.getElementById("save-value") ;

editAbout.addEventListener("click", function() {
  inputAbout.disabled = false;
  saveAbout.classList.remove("btn-secondary");
  saveAbout.classList.add("btn-success");
});

saveAbout.addEventListener("click", function() {
  var aboutValue = inputAbout.value;
  var currPlaceholder = inputAbout.getAttribute('placeholder');
  if (aboutValue === null || aboutValue === '' || aboutValue === currPlaceholder) {
    inputAbout.setAttribute('placeholder', currPlaceholder);
  } else {
    inputAbout.setAttribute('placeholder', aboutValue);
  }
  saveAbout.classList.remove("btn-success");
  saveAbout.classList.add("btn-secondary");
  inputAbout.disabled = true;
});

editVision.addEventListener("click", function() {
  inputVision.disabled = false;
  saveVision.classList.remove("btn-secondary");
  saveVision.classList.add("btn-success");
});

saveVision.addEventListener("click", function() {
  var visionValue = inputVision.value;
  var currPlaceholder = inputVision.getAttribute('placeholder');
  if (visionValue === null || visionValue === '' || visionValue === currPlaceholder) {
    inputVision.setAttribute('placeholder', currPlaceholder);
  } else {
    inputVision.setAttribute('placeholder', visionValue);
  }
  saveVision.classList.remove("btn-success");
  saveVision.classList.add("btn-secondary");
  inputVision.disabled = true;
});

editMission.addEventListener("click", function() {
  inputMission.disabled = false;
  saveMission.classList.remove("btn-secondary");
  saveMission.classList.add("btn-success");
});

saveMessage.addEventListener("click", function() {
  var messageValue = inputMessage.value;
  var currPlaceholder = inputMessage.getAttribute('placeholder');
  if (messageValue === null || messageValue === '' || messageValue === currPlaceholder) {
    inputMessage.setAttribute('placeholder', currPlaceholder);
  } else {
    inputMessage.setAttribute('placeholder', messageValue);
  }
  saveMessage.classList.remove("btn-success");
  saveMessage.classList.add("btn-secondary");
  inputMessage.disabled = true;
});
editMessage.addEventListener("click", function() {
  inputMessage.disabled = false;
  saveMessage.classList.remove("btn-secondary");
  saveMessage.classList.add("btn-success");
});

saveMission.addEventListener("click", function() {
  var missionValue = inputMission.value;
  var currPlaceholder = inputMission.getAttribute('placeholder');
  if (missionValue === null || missionValue === '' || missionValue === currPlaceholder) {
    inputMission.setAttribute('placeholder', currPlaceholder);
  } else {
    inputMission.setAttribute('placeholder', missionValue);
  }
  saveMission.classList.remove("btn-success");
  saveMission.classList.add("btn-secondary");
  inputMission.disabled = true;
});
editMission.addEventListener("click", function() {
  inputMission.disabled = false;
  saveMission.classList.remove("btn-secondary");
  saveMission.classList.add("btn-success");
});

saveValue.addEventListener("click", function() {
  var valueValue = inputValue.value;
  var currPlaceholder = inputValue.getAttribute('placeholder');
  if (valueValue === null || valueValue === '' || valueValue === currPlaceholder) {
    inputValue.setAttribute('placeholder', currPlaceholder);
  } else {
    inputValue.setAttribute('placeholder', valueValue);
  }
  saveValue.classList.remove("btn-success");
  saveValue.classList.add("btn-secondary");
  inputValue.disabled = true;
});
editValue.addEventListener("click", function() {
  inputValue.disabled = false;
  saveValue.classList.remove("btn-secondary");
  saveValue.classList.add("btn-success");

});