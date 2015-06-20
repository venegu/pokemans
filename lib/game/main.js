ig.module(
	'game.main'
)
.requires(
	'impact.game',
	'impact.font'
)
.defines(function(){

	MainGame = ig.Game.extend({
		// Load a font
		font: new ig.Font('media/fonts/arial.font_14.png'),

		// Initialize your game here; bind keys etc
		init: function() {

		},

		update: function(){
			// Update all entities and backgroundMaps
			this.parent();

			// Add your own, additional update code here
		},

		draw: function(){
			// Draw all entities and backgroundMaps
			this.parent();

			// Add your own drawing code here
			var x = ig.system.width / 2;
			var y = ig.system.height / 2;

			this.font.draw('It Works!', x, y, ig.Font.ALIGN.CENTER);
		}
	});

	// Start the Game with 60fps, a resolution of 320x240, 
	// scaled up by a factor of 2
	ig.main('#canvas', MainGame, 60, 320, 240, 2);
});