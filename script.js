var acc = document.getElementsByClassName("faq-question");
	var i;
	
	for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
   this.classList.toggle("active");
   var panel = this.nextElementSibling;
   if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
   } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
   } 
  });
	}
document.getElementsByClassName("expall")[0].addEventListener("click", function() {
	for (j = 0; j < acc.length; j++) {
  expandPanel(acc[j]);
 }
});
document.getElementsByClassName("clpsall")[0].addEventListener("click", function() {
	for (j = 0; j < acc.length; j++) {
  collapsePanel(acc[j]);
 }
});
expandPanel = function(accID){
 accID.classList.add("active");
  var panel = accID.nextElementSibling;
  panel.style.maxHeight = panel.scrollHeight + "px";
}
collapsePanel = function(accID){
  accID.classList.remove("active");
  var panel = accID.nextElementSibling;
  panel.style.maxHeight = null;
};