
$(document).ready(function(){
	var smurfs = ['Smurfette', 'Brainy', 'Hefty', 'Papa', 'Vanity', 'Baby'];



	function displaySmurfs(){
		$(".smurfButtons").empty();
		var smurf = $(this).attr('data-name');
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=smurf&api_key=dc6zaTOxFJmzC&limit=10";
		
		
		$.ajax({
			url: queryURL,
			method: 'GET'
			}).done(function(response) {
				
			
				console.log(queryURL);
	      console.log(response);
				var results = response.data;
	      function renderButtons() {
	      	
	      	
	      	
      	for (var i = 0; i < smurfs.length; i++){
      		var smurfDiv = $('div');
      		var p = $('<p>').text("Rating: " + smurfs[i].rating);
      		var smurfImage = $('<img>');
      		console.log(smurfs.length);
      		

      		smurfImage.attr('src', results[i].images.fixed_height_still.url);
      		smurfImage.attr('data-still', results[i].images.fixed_height_still.url);
      		smurfImage.attr('data-animate', results[i].images.fixed_height.url);
      		smurfImage.attr('data-state', "still");
      		// smurfImage.addClass('gifContainer')

      		var a = $('<button>')
      		a.addClass('smurf');
      		a.attr('data-name', smurfs[i]);
      		a.text(smurfs[i]);
      		$('.smurfButtons').append(a);
      		smurfDiv.append(p);
      		smurfDiv.append(smurfImage);
      		// $('#smurfGifs').prepend(smurfDiv);
      	}
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



