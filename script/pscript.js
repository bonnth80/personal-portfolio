console.log("pscript.js: script loaded");

let lItems = document.getElementsByClassName("linkList");
let pList = document.getElementById("portlist");
let portView = document.getElementById("entry-display");
let splashText = document.getElementById("hometext");
let splashTextB = document.getElementById("hometextB");

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

// populate portfolio object list
for (var i = 0; i < portfolio.length; i++){
   pList.innerHTML +=
        "<li "
        + "class=\"linkList\" "
        + "pobject=\"" + portfolio[i].pid + "\" "
        + "pindex=\"" + i + "\">"
        + portfolio[i].pTitle
        + "</li>\n";
}

for (let i = 0; i < lItems.length; i++) {
   lItems[i].addEventListener("click", function(obj){
      portView.innerHTML = stringifyPData(Number(this.getAttribute("pindex")));

   })
}



function stringifyPData(pIndex) {
   let str = "<div>\n"

   str += "<div id=\"pview-lineHead\">";

   // Type Icons
   str += "<div id=\"pview-types\">\n&nbsp&nbsp&nbsp";
   portfolio[pIndex].tType.forEach(element => {
      str += getTypeIcon(element) + " ";
   });
   str+="</div>\n";

   // Heading
   str += "\t<div id=\"pview-heading\">" + portfolio[pIndex].pHeading + "</div>\n";
   str += "\t<div id=\"pview-discipline\">" + portfolio[pIndex].discipline + "</div>\n";
   //str += "\t<div id=\"pview-type\">" + portfolio[pIndex].tType + "</div>\n";
   str += "</div>"


   // Description
   str += "\t<div id=\"pview-description\">" + portfolio[pIndex].pDesc + "</div>\n";

   // code sample   
   if (portfolio[pIndex].ptCode != ""){
      str += "\t<div id=\"pview-code\">Code Snippet:<br>\n\t\t<textarea id=\"pview-ctextbox\""; 
      str += "spellcheck=\"false\" readonly>\n" +  portfolio[pIndex].ptCode + "\n\t\t</textarea>\n\t</div>\n";
   }   

   // portfolio links
   str += "\t<div id=\"pview-pLinks\">\n"

   // direct link
   if ((portfolio[pIndex]).demoLink != "")
      str += "\t\t<a id=\"pview-dLink\" href=\"" + (portfolio[pIndex]).demoLink + "\" target=\"_blank\"><i class=\"fas fa-external-link-alt\"></i></a>\n"
   
   // github link
   if ((portfolio[pIndex]).ghLink != "")
      str += "\t\t<a id=\"pview-gLink\" href=\"" + (portfolio[pIndex]).ghLink + "\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\n"

   // download link
   if ((portfolio[pIndex]).dlLink != "")
      str += "\t\t<a id=\"pview-gLink\" href=\"" + (portfolio[pIndex]).dlLink + "\" target=\"_blank\"><i class=\"fas fa-file-download\"></i></a>\n"

   str += "\t</div>\n"

   str += "</div>\n";

   return str;
}

function getTypeIcon(typeString) {
   let cppSvg =
   `<svg class="pview-svgicon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" version="1.1" width="50px" height="50px">
   <g id="surface1">
   <path style=" " d="M 43.910156 12.003906 L 27.070313 2.539063 C 25.792969 1.824219 24.207031 1.824219 22.929688 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.929688 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.070313 47.460938 L 43.910156 37.996094 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 Z M 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 C 28.78125 13 32.273438 14.753906 34.542969 17.742188 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.257813 C 32.273438 35.246094 28.78125 37 25 37 Z M 37 26 L 35 26 L 35 28 L 33 28 L 33 26 L 31 26 L 31 24 L 33 24 L 33 22 L 35 22 L 35 24 L 37 24 Z M 44 26 L 42 26 L 42 28 L 40 28 L 40 26 L 38 26 L 38 24 L 40 24 L 40 22 L 42 22 L 42 24 L 44 24 Z "/>
   </g>
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