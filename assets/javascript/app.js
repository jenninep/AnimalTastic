var apiKey = 'dc6zaTOxFJmzC'
var maxResults = '10'
var search = ""

$(document).ready(function(){
	var smurfs = ['Smurfette', 'Brainy', 'Hefty', 'Papa', 'Vanity', 'Baby'];


	function displaySmurfs(){
		var smurf = $(this).attr('data-name');
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + apiKey + "&limit=" + maxResults;
		
		
		$.ajax({
			url: queryURL,
			method: 'GET'
			}).done(function(response) {
				
			
				console.log(queryURL);
	      console.log(response);
				var results = response.data;

				
				// $(".smurfButtons").empty();
    
    // function renderButtons() {
    	// $(".smurfButtons").empty();
    	
    	for (var i = 0; i < results.length; i++){
		  		smurfImage.attr('src', results[i].images.fixed_height_still.url);
		  		smurfImage.attr('data-still', results[i].images.fixed_height_still.url);
		  		smurfImage.attr('data-animate', results[i].images.fixed_height.url);
		  		smurfImage.attr('data-state', "still");
		  		smurfImage.addClass('gifContainer')
		  		}
		  	
		  	// for (var i = 0; i < smurfs.length; i++){
		  	// 	var smurfDiv = $('div');
		  	// 	var p = $('<p>').text("Rating: " + smurfs[i].rating);
		  	// 	var smurfImage = $('<img>');
		  	// 	console.log(smurfs.length);
		  		

		  		var a = $('<button>')
		  		a.addClass('smurf');
		  		a.attr('data-name', smurfs[i]);
		  		a.text(smurfs[i]);
		  		$('.smurfButtons').append(a);
		  		smurfDiv.append(p);
		  		smurfDiv.append(smurfImage);
		  		$('body').on('click', '.smurf', function(){
		  		var search = $(this).text()
		  		console.log(search);
		  		displaySmurfs();
		  		})
		  		$('#smurfGifs').prepend(smurfDiv);
		  	
		  	}
		  
      renderButtons();

	    });

	}
	displaySmurfs();
	$(document).on('click', '.smurf', function(){

	})
});


		
		
		
		
	

		// var smurf = $("#smurf-input").val();
		// smurfs.push(smurf);6
		// renderButtons();
		// return false;
// 	});
// }



// $(document).on('click', '.smurf', renderButtons);

// renderButtons();




