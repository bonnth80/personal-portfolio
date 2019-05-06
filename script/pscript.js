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

   str += "\t<div id=\"pview-heading\">" + portfolio[pIndex].pHeading + "</div>\n";
   str += "\t<div id=\"pview-discipline\">" + portfolio[pIndex].discipline + "</div>\n";
   str += "\t<div id=\"pview-type\">" + portfolio[pIndex].tType + "</div>\n";
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

   str += "\t</div>\n"


   str += "</div>\n";

   return str;
}