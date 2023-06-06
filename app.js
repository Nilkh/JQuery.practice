$(document).ready(() => {
	//grabs the element with ID starting-point.
	 const startingElement = $('#starting-point');
	console.log("starting-point");
	//creat a new dic.
	const siblingElement = $('<div></div>');
	//add test tp the new div
	siblingElement.text('this is the next page');
	//appends thr new div to startingElement
	startingElement.after(siblingElement)
	const favoriteFoods = $('#favorite-Foods');
    console.log(favoriteFoods);
    favoriteFoods.css('background-color', 'red')
    //console.log(favoriteFoods[0].innerHTML)
    //console.log(favoriteFoods)[0];
	// code reusability.
//     const favs = [
// 	{ food: 'pizza', color: 'green' },
// 	{ food: 'falafel', color: 'yellow' },
// 	{ food: 'bolani', color: 'red' },
// 	{ food: 'hot dog', color: 'orange' },
// ] 
    

// favs.forEach(obj => {
//     let favFoods = $("<div></div>")
//     .text(obj.food)
//     .css('background-color', obj.color)
//     favoriteFoods.after(favFoods);
// })
});