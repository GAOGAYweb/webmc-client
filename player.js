'use strict';

const skin = require('minecraft-skin');
const THREE = require('three');

module.exports = (clientmc) => {
	var player_list = {};
	clientmc.handlers.newPlayer = (event) => {
		console.log('player, new spawn with name:', event.player);
		var newSkin = skin(THREE, 'steve.png').createPlayerObject();
		player_list[event.player] = newSkin;
		newSkin.position.set(61, 4, 47);
		clientmc.game.scene.add(newSkin);
	};

	clientmc.handlers.leftPlayer = (event) => {
		console.log('player, left with name:', event.player);
	}
};