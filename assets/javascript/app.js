// TODO: add ratings & clear button

$(document).ready(function(){

	var apiKey = 'dc6zaTOxFJmzC';
	var maxResults = '10';
	var search = "";
	var smurfs = ['Smurfette', 'Brainy', 'Hefty', 'Papa', 'Vanity', 'Baby'];

	// makes an ajax call to giphy on click and displays the appropriate results //
	$('body').on('click', '.smurf', function() {

		// "this" refers to ".smurf" from above //
		var search = $(this).attr("data-name");
		console.log(search);

		// added "%20smurf" to make the results more "smurfy" //
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "%20smurf" + "&api_key=" + apiKey + "&limit=" + maxResults;

		$.ajax({
			url: queryURL,
			method: 'GET'
		}).done(function (response) {

			console.log(queryURL);
			console.log(response);
			var results = response.data;

			// loop through the response of the ajax call, create the desired HTML elements and prepend the gifs to these elements //
			for (var n = 0; n < results.length; n++) {

				var smurfDiv = $('<div>');
				var smurfImage = $('<img>');
				smurfDiv.prepend(smurfImage);

				$("#smurfGifs").prepend(smurfDiv);

				smurfImage.attr('src', results[n].images.fixed_height_still.url);
				smurfImage.attr('data-still', results[n].images.fixed_height_still.url);
				smurfImage.attr('data-animate', results[n].images.fixed_height.url);
				smurfImage.attr('data-state', "still");
				smurfImage.addClass('gifContainer')
			}

		});

	});

	function renderButtons() {

		// loops through the smurfs array and creates a button for each entry //
		for (var i = 0; i < smurfs.length; i++) {// var p = $('<p>').text("Rating: " + smurfs[i].rating);
			console.log(smurfs.length);

			var a = $('<button>');
			a.addClass('smurf');
			a.attr('data-name', smurfs[i]);
			a.text(smurfs[i]);
			$('.smurfButtons').append(a);
			// smurfDiv.append(p);

		}

	}

	function newButton() {

		// set the new smurf name to the value of the input box //
		var newSmurfName = $("#smurf-input").val().trim();
		console.log(newSmurfName);

		// if newSmurfName isn't blank //
		if (newSmurfName != "") {

			// push the newSmurf onto the end of the smurfs array
			smurfs.push(newSmurfName);
			console.log(smurfs);

			// create a new HTML button element
			var newSmurfBtn = $('<button>');

			// assign it the class "smurf"
			newSmurfBtn.addClass('smurf');

			// assign it a data-name with the same name as above
			newSmurfBtn.attr('data-name', newSmurfName);

			// make the text on the button the same as newSmurfName
			newSmurfBtn.text(newSmurfName);

			// append the new button to the HTML div with the class of "smurfButtons"
			$('.smurfButtons').append(newSmurfBtn);

			// empty the input box
			$("#smurf-input").val("");
		}

		// if newSmurfName is blank //
		else {
			console.log("Please enter a smurf")
		}

	}

	// add a new smurf button by calling our newButton() function //
	$("body").on("click", "#addSmurf", function() {

		console.log("click working");
		newButton();

	});

	// use enter key to add a button, and stop the page from reloading //
	// you could also change the <form> to a plain <div> in the HTML and not have to use this event.preventDefault //
	$('form').keypress(function (event) {

		if (event.keyCode == 13) {

			event.preventDefault();
			newButton();

		}

	});

	// DECLARE INITIAL FUNCTIONS HERE //
	// calls renderButtons() function when page is rendered aka $(document).ready() //
	renderButtons();

});