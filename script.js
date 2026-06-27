 
        
function opentab(tabname, element) {
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-content");

  for (let tablink of tablinks) {
    tablink.classList.remove("active-links");
  }

  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  element.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
}
    