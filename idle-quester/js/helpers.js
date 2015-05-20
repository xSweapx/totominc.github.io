var helpers = {
	playerXpNeeded: function() {
		if (player.level > 1) 
			return Math.floor(100 * Math.pow(1.25, player.level));
		else
			return 100;
	},
	questXpNeeded: function() {
		if (player.level > 1) 
			return Math.floor(100 * Math.pow(1.25, player.level));
		else
			return 100;
	},
	questGold: function() {
		var random = Math.random() + 1;
		if (player.level > 1)
			if ((player.amulet.luck * 0.1) >= 100)
				return Math.floor((85 * Math.pow(1.15, player.level)) * random) * player.multiplier;
			else
				return Math.floor((85 * Math.pow(1.15, player.level)) * random) * player.multiplier;
		else
			if ((player.amulet.luck * 0.1) >= 100)
				return (85 * random) * player.multiplier;
			else
				return (85 * random) * player.multiplier;
	},
	playerAttack: function() {
		return (player.sword.damage * player.multiplier);
	},
	playerAttackPercent: function() {
		return (player.sword.damage/player.sword.base) * 100;
	},
	playerSpeed: function() {
		return (player.boots.speed * player.multiplier);
	},
	playerSpeedPercent: function() {
		return (player.boots.speed/player.boots.base) * 100;
	},
	playerLuck: function() {
		return (player.amulet.luck * player.multiplier);
	},
	playerLuckPercent: function() {
		return (player.amulet.luck/player.amulet.base) * 100;
	},
	prestigeCost: function() {
		return (player.prestigeTimes) * 100;
	},
	prestigeMultiplier: function() {
		if (player.prestigeTimes == 2)
			return 2;
		else
			return (player.multiplier + player.multiplier);
	},
	idleMultiplierCost: function() {
		if (skills.idleMultiplierBought == 1)
			return 1;
		else
			return skills.idleMultiplierBought * 2;
	},
	idleMultiplier: function() {
		if (skills.idleMultiplierBought == 1)
			return 1;
		else
			return 1 + (skills.idleMultiplierBought / 10) - 0.1;
	},
	swordName: function() {
		var str;
		var prefixRandom = Math.floor(Math.random() * swordPrefix.length);
		var rootRandom = Math.floor(Math.random() * swordRoot.length);
		str = swordPrefix[prefixRandom] + " " + swordRoot[rootRandom];
		return str;
	},
	bootsName: function() {
		var str;
		var prefixRandom = Math.floor(Math.random() * bootPrefix.length);
		var rootRandom = Math.floor(Math.random() * bootRoot.length);
		str = bootPrefix[prefixRandom] + " " + bootRoot[rootRandom];
		return str;
	},
	amuletName: function() {
		var str;
		var prefixRandom = Math.floor(Math.random() * amuletPrefix.length);
		var rootRandom = Math.floor(Math.random() * amuletRoot.length);
		str = amuletPrefix[prefixRandom] + " " + amuletRoot[rootRandom];
		return str;
	},
	questName: function() {
		if (quest.type == "attack") {
			var str;
			var prefixRandom = Math.floor(Math.random() * monsterPrefix.length);
			var rootRandom = Math.floor(Math.random() * monsterRoot.length);
			str = "Killing " + monsterPrefix[prefixRandom] + " " + monsterRoot[rootRandom];
			return str;
		} else {
			var str;
			var random = Math.floor(Math.random() * 100);
			if (random >= 50) {
				var travelingRandom = Math.floor(Math.random() * traveling.length);
				var prefixRandom = Math.floor(Math.random() * travelingPrefix.length);
				str = traveling[travelingRandom] + " to the " + travelingPrefix[prefixRandom];
				return str;
			} else {
				var prefixRandom = Math.floor(Math.random() * pnjPrefix.length);
				var rootRandom = Math.floor(Math.random() * pnjRoot.length);
				str = "Back to the " + pnjPrefix[prefixRandom] + " " + pnjRoot[rootRandom];
				return str;
			};
		}
	},
}
// misc
Object.size = function(obj) { // get object length
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    };
    return size;
};