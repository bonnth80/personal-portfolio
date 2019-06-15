console.log("pscript.js: script loaded");

let lItems = document.getElementsByClassName("linkList");
let pList = document.getElementById("portlist");
let portView = document.getElementById("entry-display");
let splashText = document.getElementById("hometext");
let splashTextB = document.getElementById("hometextB");
let pviewHint = undefined;
let pviewClickDesc = undefined;

// *******************************************
// Splash Text
// *******************************************
function setSplash(testString = "") {
   if (testString == ""){
      var randText = Math.floor(Math.random()*(hTextList.length));
      splashText.innerHTML = splashTextB.innerHTML = hTextList[randText];
   }
   else {
      splashText.innerHTML = splashTextB.innerHTML = testString;
   }
}

setSplash();

splashTextB.onclick = function(){
   setSplash();
}

// *******************************************
// Portfolio
// *******************************************

pList.innerHTML = "";

// populate left navigation pane
for (let i = 0; i < portfolio.length; i++){
   pList.innerHTML +=
        "<li "
        + "class=\"linkList\" "
        + "pobject=\"" + portfolio[i].pid + "\" "
        + "pindex=\"" + i + "\">"
        + portfolio[i].pTitle
        + "</li>\n";
}

// add click events to each item in nav pane
for (let i = 0; i < lItems.length; i++) {
   lItems[i].addEventListener("click", function(obj){
      let strData = stringifyPData(Number(this.getAttribute("pindex")));
      portView.innerHTML = strData.stringifedText;
      portView.innerHTML += "<span id=\"pview-clickDesc\"></span>";
      pviewHint = document.getElementById("pview-clickHint");
      pviewClickDesc = document.getElementById("pview-clickDesc");

      if (strData.hasDemo) {
         document.getElementById("pview-demoLink").addEventListener("mouseenter", ()=>{
            pviewClickDesc.innerHTML = "Web demo link";
         })         
         document.getElementById("pview-demoLink").addEventListener("mouseleave", ()=>{
            pviewClickDesc.innerHTML = "";
         })
      }

      if (strData.hasGH) {
         document.getElementById("pview-gLink").addEventListener("mouseenter", ()=>{
            pviewClickDesc.innerHTML = "Github Link";
         })         
         document.getElementById("pview-gLink").addEventListener("mouseleave", ()=>{
            pviewClickDesc.innerHTML = "";
         })
      }

      if (strData.hasDL) {
         document.getElementById("pview-dLink").addEventListener("mouseenter", ()=>{
            pviewClickDesc.innerHTML = "Download Link - may contain executable";
         })         
         document.getElementById("pview-dLink").addEventListener("mouseleave", ()=>{
            pviewClickDesc.innerHTML = "";
         })
      }
   }) 
}

// animate click hint sign
let animphase = 0;
var clickHintAnim = setInterval(()=>{
   if (pviewHint != undefined){
      pviewHint.style.transitionDuration = "200ms";
      var clickHintMargin = "20px";
      switch (animphase) {
         case 0:
         case 2:
            pviewHint.style.marginLeft = (Number.parseInt(clickHintMargin) + 10) + "px";
            animphase++;
            break;
         default:
            pviewHint.style.marginLeft = clickHintMargin;
            animphase++;
            break;
         case 40:
            pviewHint.style.marginLeft = clickHintMargin;
            animphase = 0;
      }
   }
},200);

// turn portfolio data into html text
function stringifyPData(pIndex) {
   let strData = {
      stringifedText: "<div>\n",
      hasLinks: false,
      hasDemo: false,
      hasGH: false,
      hasDL: false
   }

   strData.stringifedText += "<div id=\"pview-lineHead\">";

   // Type Icons
   strData.stringifedText += "<div id=\"pview-types\">\n&nbsp&nbsp&nbsp";
   portfolio[pIndex].tType.forEach(element => {
      strData.stringifedText += getTypeIcon(element) + " ";
   });
   strData.stringifedText +="</div>\n";

   // Heading
   strData.stringifedText += "\t<div id=\"pview-heading\">" + portfolio[pIndex].pHeading + "</div>\n";
   strData.stringifedText += "\t<div id=\"pview-discipline\">" + portfolio[pIndex].discipline + "</div>\n";
   //strData.stringifedText += "\t<div id=\"pview-type\">" + portfolio[pIndex].tType + "</div>\n";
   strData.stringifedText += "</div>"


   // Description
   strData.stringifedText += "\t<div id=\"pview-description\">" + portfolio[pIndex].pDesc + "</div>\n";

   // code sample   
   if (portfolio[pIndex].ptCode != ""){
      strData.stringifedText += "\t<div id=\"pview-code\">Code Snippet:<br>\n\t\t<textarea id=\"pview-ctextbox\""; 
      strData.stringifedText += "spellcheck=\"false\" readonly>\n" +  portfolio[pIndex].ptCode + "\n\t\t</textarea>\n\t</div>\n";
   }   

   // portfolio links
   strData.stringifedText += "\t<div id=\"pview-pLinks\">\n"

   // direct link
   if ((portfolio[pIndex]).demoLink != ""){
      strData.hasLinks = true;
      strData.hasDemo = true;
      strData.stringifedText += "\t\t<a id=\"pview-demoLink\" class=\"pview-demoLink pview-link\" href=\"" + (portfolio[pIndex]).demoLink + "\" target=\"_blank\"><i class=\"fas fa-external-link-alt\"></i></a>\n";
   }
   // github link
   if ((portfolio[pIndex]).ghLink != ""){
      strData.hasLinks = true;
      strData.hasGH = true;
      strData.stringifedText += "\t\t<a id=\"pview-gLink\" class=\"pview-gLink pview-link\" href=\"" + (portfolio[pIndex]).ghLink + "\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\n";
}
   // download link
   if ((portfolio[pIndex]).dlLink != ""){
      strData.hasLinks = true;
      strData.hasDL = true;
      strData.stringifedText += "\t\t<a id=\"pview-dLink\" class=\"pview-dLink pview-link\" href=\"" + (portfolio[pIndex]).dlLink + "\" target=\"_blank\"><i class=\"fas fa-file-download\"></i></a>\n";
}
   // click hint
   if (strData.hasLinks)
      strData.stringifedText += "<span id=\"pview-clickHint\"><i class=\"fas fa-arrow-left\"></i> Links here!</span><br />";

   // click Description
   if (strData.hasLinks) {
      strData.stringifedText += "<span id=\"pview-clickDesc\"></span>";
   }

   strData.stringifedText += "\t</div>\n"

   strData.stringifedText += "</div>\n";

   return strData;
}

// turn portfolio entry skill type into html display icons
function getTypeIcon(typeString) {
   // c++ is the only icon that's not in font-awesome, so we have to create it ourselves (svg retrieved from Icon8)
   let cppSvg =
   `<svg class="pview-svgicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1" width="50px" height="50px">
      <g id="surface1">` +
         "<path style=\" \" d=\"" +
         "M 43.910156 12.003906 " +
         "L 27.070313 2.539063 " + 
         "C 25.792969 1.824219 24.207031 1.824219 22.929688 2.539063 " + 
         "L 6.089844 12.003906 " + 
         "C 4.800781 12.726563 4 14.082031 4 15.535156 " + 
         "L 4 34.464844 " +
         "C 4 35.917969 4.800781 37.273438 6.089844 37.996094 " +
         "L 22.929688 47.460938  " +
         "C 23.570313 47.820313 24.285156 48 25 48  " +
         "C 25.714844 48 26.429688 47.820313 27.070313 47.460938  " +
         "L 43.910156 37.996094  " +
         "C 45.199219 37.273438 46 35.917969 46 34.464844  " +
         "L 46 15.535156  " +
         "C 46 14.082031 45.199219 12.726563 43.910156 12.003906  " +
         "Z  " +
         "M 25 37  " +
         "C 18.382813 37 13 31.617188 13 25  " +
         "C 13 18.382813 18.382813 13 25 13  " +
         "C 28.78125 13 32.273438 14.753906 34.542969 17.742188  " +
         "L 30.160156 20.277344  " +
         "C 28.84375 18.835938 26.972656 18 25 18  " +
         "C 21.140625 18 18 21.140625 18 25  " +
         "C 18 28.859375 21.140625 32 25 32  " +
         "C 26.972656 32 28.84375 31.164063 30.160156 29.722656  " +
         "L 34.542969 32.257813  " +
         "C 32.273438 35.246094 28.78125 37 25 37  " +
         "Z  " +
         "M 37 26  " +
         "L 35 26  " +
         "L 35 28  " +
         "L 33 28  " +
         "L 33 26  " +
         "L 31 26  " +
         "L 31 24  " +
         "L 33 24  " +
         "L 33 22  " +
         "L 35 22  " +
         "L 35 24  " +
         "L 37 24  " +
         "Z  " +
         "M 44 26  " +
         "L 42 26  " +
         "L 42 28  " +
         "L 40 28  " +
         "L 40 26  " +
         "L 38 26  " +
         "L 38 24  " +
         "L 40 24  " +
         "L 40 22  " +
         "L 42 22  " +
         "L 42 24  " +
         "L 44 24  " +
         "Z \"/>" +
      `</g>
   </svg>`

   if (typeof(typeString) == "string" ){
      typeString = typeString.toUpperCase();

      switch (typeString) {
         case "HTML":
         case "HTML5":
            return '<i class="fab fa-html5"></i>';
         case "JAVASCRIPT":
            return '<i class="fab fa-js-square"></i>';
         case "CSS":
         case "CSS3":
            return '<i class="fab fa-css3-alt"></i>';
         case "C++":
         case "CPP":
            return cppSvg;
         case "WINDOWS":
         case "WINDOWS API":
         case "WINDOWS GDI":
            return '<i class="fab fa-windows"></i>';
      }
      console.warn("pscript.js: getTypeIcon - typeString \"" + typeString + "\" has no matching icon");
      return "E02";
   }
   console.warn("pscript.js: getTypeIcon() - typeString is not a string")
   return "E01!";
   
}