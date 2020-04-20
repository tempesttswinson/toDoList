
//Javascript for my to do list
var list = document.querySelector('#list');

// var userInput = document.querySelector('#newItem');

// document.querySelector('#addBtn').addEventListener('click', function(event){
	
// 	if(userInput.value == ""){
// 		return;
// 	}

// 	var li = document.createElement('li');
// 	li.innerHTML = userInput.value;
// 	list.appendChild(li);
// 	userInput.value = " ";
// })

// list.addEventListener('click', function(event){
	
// 	event.target.style.textDecoration = "line-through";
	
// 	setTimeout(function(){
// 		event.target.remove();
// 	}, 1000)
// })

//jquery for to do list

var list = $('#list');//ul

$('#addBtn').click(function(){
	
	var userInput = $('#newItem').val();//value from inside input field

	if(userInput == ""){
		return;
	}

	list.append('<li>'+userInput+ '</li>');
	$('#newItem').val("");
})

$('#list').click(function(event){
	
	event.target.style.textDecoration = "line-through";
	// event.target.remove();
	
	setTimeout(function(){
		event.target.remove()		
	}, 1000);
})

