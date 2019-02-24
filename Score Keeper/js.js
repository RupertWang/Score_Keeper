var pone = document.querySelector("#pone");
var ptwo = document.querySelector("#ptwo");
var input = document.querySelector("input")
var winning_score;
var win = false;
var p1score = 0;
var p2score = 0;
var first = document.querySelector("#first");
var second = document.querySelector("#second");

pone.addEventListener("click",function(){
	if(p1score < winning_score && !win)
		p1score++;
	if(p1score == winning_score){
		win = true;
		first.style.color = "yellow";
	}
	first.textContent = p1score;
	
});

ptwo.addEventListener("click",function(){
	if(p2score < winning_score && !win)
		p2score++;
	if(p2score == winning_score){
		win = true;
		second.style.color = "yellow";
	}
	second.textContent = p2score;
	
});

reset.addEventListener("click",function(){
	input.value = 0;
	winning_score = 0;
	highest.textContent = winning_score;
	first.textContent = 0;
	first.style.color="black";
	p1score = 0;
	second.textContent = 0;
	second.style.color="black";
	p2score = 0;
	win=false;
});

input.addEventListener("change",function(){
	winning_score = input.value;
	highest.textContent = winning_score;
	first.textContent = 0;
	p1score = 0;
	second.textContent = 0;
	p2score = 0;
});