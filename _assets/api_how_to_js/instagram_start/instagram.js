// JavaScript Document
						
$(function() {
	var access_token = location.hash.split('=')[1];
	if (location.hash) {
		$.ajax({
			type: "GET",
			dataType: "jsonp",
			cache: false,
			url: "https://api.instagram.com/v1/users/USERID/media/recent/?access_token=ACCESSTOKENHERE",
			success: function(data) {
				for (var i = 0; i < 4; i++) {
					$("#instafeed").append("<div class='instaframe'><a target='_blank' href='" + data.data[i].link +"'><img src='" + data.data[i].images.standard_resolution.url +"' /></a></div>"
					);   
				}
			}
		});
	} else {
		location.href="https://instagram.com/oauth/authorize/?display=touch&client_id=CLIENTIDHERE&redirect_uri=REDIRECTURI&response_type=token"; 
	}
});
		
