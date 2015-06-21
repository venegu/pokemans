ig.module(
	'game.main'
)
.requires(
	'impact.game',
	'impact.font',
	'game.levels.route1'
)
.defines(function(){

	MainGame = ig.Game.extend({
		// Load a font
		font: new ig.Font('media/fonts/arial.font_14.png'),

		// Initialize your game here; bind keys etc
		init: function() {
			// Bind keys
			ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
			ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
			ig.input.bind(ig.KEY.UP_ARROW, 'up');
			ig.input.bind(ig.KEY.DOWN_ARROW, 'down');

			// Load level
			this.loadLevel(LevelRoute1);
		},

		update: function(){
			// Screen follows the player
			var player = this.getEntitiesByType(EntityPlayer)[0];
			if(player) {
				this.screen.x = player.pos.x - ig.system.width / 2;
				this.screen.y = player.pos.y - ig.system.height / 2;
			}

			// Update all entities and backgroundMaps
			this.parent();

			// Add your own, additional update code here
		},

		draw: function(){
			// Draw all entities and backgroundMaps
			this.parent();
		}
	});

	// Start the Game with 60fps, a resolution of 320x240, 
	// scaled up by a factor of 2
	ig.main('#canvas', MainGame, 60, 320, 240, 2);
});