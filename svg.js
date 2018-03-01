var x;
var y;
var firstCircle = true;
var svg = document.getElementById("vimage");

var drawCircle = function(e){
	if(firstCircle){
		firstCircle = false;
	}
	else{
	    var l1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	    l1.setAttribute("x1", x+"");
	    l1.setAttribute("y1", y+"");
	    l1.setAttribute("x2", e.offsetX+"");
	    l1.setAttribute("y2", e.offsetY+"");
		l1.setAttribute("stroke", "#dabbed");
		l1.setAttribute("stroke-width", "1");
	    svg.appendChild(l1);
	}
	x = e.offsetX;
	y = e.offsetY;
	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", e.offsetX+"");
	c1.setAttribute("cy", e.offsetY+"");
	c1.setAttribute("r", "20");
	c1.setAttribute("fill", "#dabbed");
	c1.setAttribute("stroke", "black");
	svg.appendChild(c1);
}

var clear = function(e){
	svg.innerHTML='';
	firstCircle = true;
}

svg.addEventListener("click", drawCircle);
document.getElementById("clear").addEventListener("click", clear);
