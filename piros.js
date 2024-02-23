let randX;
let randY;
let katt = 0;


function start() {
	document.getElementById('racs').innerHTML = '';
	let meret = document.getElementById("meret").value;

	if (meret < 2 || meret > 10) return;
	//console.log(meret);

	rajzol(meret);
	

	randX = randNr(meret);
	randY = randNr(meret);
	//console.log(randX, randY)
}

function rajzol(nr) {
	for (let i = 1; i <= nr; i++) {
		let sor = document.createElement("div");
		sor.classList.add("row");
		document.getElementById("racs").appendChild(sor);

		for (let j = 1; j <= nr; j++) {
			let cella = document.createElement("div");
			cella.setAttribute('class',' border bg box')
			
			cella.dataset.x=i
			cella.dataset.y=j
			sor.appendChild(cella)
		}
	}
}

function pozicio(e){
	
	if(!e.target.classList.contains("box")) return

	let x = e.target.dataset.x;
	let y = e.target.dataset.y;
	//console.log(e.target);
	//console.log(x,y)

	if(x == randX && y == randY){
		console.log('eltaláltad')
		
		e.target.classList.add('bg-danger')
		document.getElementById('gratula').innerHTML = `Gratula - ${katt} - kattintásból találtad el!`;
		console.log("Talált")
	} else {
		e.target.classList.add('bg-dark')
		katt += 1;
	}



}

function randNr(n){
	return Math.floor(Math.random()*n)+1
}

function ujgame(){
	document.getElementById('racs').innerHTML = '';
	document.getElementById('meret').value = '';
	document.getElementById('gratula').innerHTML = '';
}
