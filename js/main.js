function op(elem) {
   return document.querySelector(elem)
}

function opp(elem) {
   return document.querySelectorAll(elem)
}

var circles = opp(".circle");

circles.forEach((val) => {
   var numDots = val.getAttribute("dot")
   var pt = ""
   var rot = 360 / numDots
   for (var a = 1; a <= numDots; a++) {
      pt += `<div class="points" style="--i: ${a}; --r: ${rot}deg"></div>`;
      val.innerHTML = pt
   }
})