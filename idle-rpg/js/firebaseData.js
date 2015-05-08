var data = new Firebase("https://idlerpg.firebaseio.com/");
var nickname = document.getElementById("data-setnickname");

function submitScore() {
	var ref = new Firebase("https://idlerpg.firebaseio.com/scorelist/");

	if (nickname.value.length >= 3) {
		var playerName = nickname.value;
		var playerGold = Math.floor(player.gold);
		var playerLevel = Math.floor(player.level);

		ref.child(playerName).set({
			name: playerName,
		  	gold: playerGold,
		  	level: playerLevel
		});
	} else {
		console.log("Error : nickname not >= 3");
	}
};
function getScore() {
	var ref = new Firebase("https://idlerpg.firebaseio.com/scorelist/");
	ref.on("value", function(snapshot) {
		var list = snapshot.val();
		// converting objects to arrays
		var scoreboard = $.map(list, function(value, index) {
		    return [value];
		});
		// updating scoreboard in html
		for (var i = 0; i < scoreboard.length; i++) {
			console.log(scoreboard[i]);
			$("#leaderboard-body").append('<tr id="data-' + (i+1) + '"></tr>');
			$("#data-" + (i+1)).append('<th id="data-name-' + (i+1) + '"></th></tr>');
			$("#data-" + (i+1)).append('<td id="data-gold-' + (i+1) + '"></td>');
			$("#data-" + (i+1)).append('<td id="data-level-' + (i+1) + '"></td>');
			$("#data-name-" + (i+1)).html(scoreboard[i].name);
			$("#data-gold-" + (i+1)).html(scoreboard[i].gold);
			$("#data-level-" + (i+1)).html(scoreboard[i].level);
		};
	});
};