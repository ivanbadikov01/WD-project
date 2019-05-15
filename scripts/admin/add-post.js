$(document).ready(function () {
	$("#submit").click(function () {
		preventFormSubmit();

		var title = $("input[name='title']").val();
		var desc = $("input[name='desc']").val();
		var kur = getJSONFromServer();
		
		var postToWrite = {"id":kur.length+1, "title":"alo", "desc":"kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"};

		kur.push(postToWrite);
		console.log(kur);
		saveChangesToJSON(kur[0]);
	});
});

function preventFormSubmit() {
	$("form").submit(function (event) {
		event.preventDefault();
	});
}

function getJSONFromServer() {
	var json = [];
	try{
		$.ajax({
			url: '../scripts/admin/posts.json',
			async: false,
			dataType: 'json',
			success: function( data ) {
				json = data;
			}
		});
	}
	catch{
		return null;
	}
	return json;
}

function saveChangesToJSON(data){
	$.post("..scripts/admin/saveJSON.php", {json : JSON.stringify(data)});
}