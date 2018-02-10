function load_text() {
  document.getElementById("output").value = "text....";
}

var output = document.getElementById("output");
var font_select = document.getElementById("font-select");

font_select.addEventListener('click', (e) => {
  var selected = font_select.options[font_select.selectedIndex].value;

if (selected == "Impact")
    output.setAttribute('style', 'font-family: "Impact"');
  else if (selected = "Comic Sans")
    output.setAttribute('style', 'font-family: "Comic Sans MS"');
  else
    output.setAttribute('style', 'font-family: "Arial"');
});
// var saveBtn = document.getElementById("saveBtn");
// saveBtn.addEventListener('click', (e) => {
// mydoc = document.open();
// mydoc.write(val);
// mydoc.execCommand("saveAs",true,".txt"); //you can change the .txt to your extention
// history.go(-1);
// });
