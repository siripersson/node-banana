
// Deklarationer
const bananasplit=50;
const spoon=3;
const menu=[] // Skapa en list för menyn


// Funktion för att hälsa
const greet = () => {
	const tot=2*bananasplit+ 5* spoon
	console.log('Välkommen! '+tot + 'kr')
}

// Objekt
bananasplit_obj= {
	name: "banan",
	price: 15
}

spoon_obj= {
	name: "spoon",
	price: 5
}

sallad_obj= {
	name: "sallad",
	price: 60
}

// Lägg in vad som finns på menyn
menu[0]=bananasplit_obj
menu[1]=spoon_obj
menu[2]=sallad_obj

// Funktioner som printar

// Node modul 1
exports.describeBananasplit =() => {
	console.log(bananasplit_obj.name + " with price: " + bananasplit_obj.price +'sek')
}

// Node modul 2
exports.describeSpoon =() => {
	console.log(spoon_obj.name + " with price: " + spoon_obj.price + 'sek')
}

// Node modul 3
exports.describeSallad =() => {
	console.log(sallad_obj.name + " with price: " + sallad_obj.price +'sek')
}


// Node modul 4
exports.describeItem =(item) => {
	console.log(item.name+ " with price: " + item.price + 'sek')
}

// Node modul 5
exports.describeMenu =() => {
	console.log("On the menu: ")
	for(i=0; i<menu.length; i++){
		console.log(describeItem(menu[i]))
	}
}


