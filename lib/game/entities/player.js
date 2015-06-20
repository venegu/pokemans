ig.module(
	'game.entities.player'
)
.requires(
	'impact.entity'
)
.defines(function(){
	EntityPlayer = ig.Entity.extend({
		animSheet : new ig.AnimationSheet('media/sprites/player.png', 16, 16),
		size: {x: 16, y: 16},
		offset: {x: 0, y: 0},
		flip: false, 
		friction: {x: 600, y:0},
		direction: 'down',
		velocity: 32, 

		init: function(x, y, settings){
			this.parent(x, y, settings);
			this.addAnim('idleDown', 1, [0]);
			this.addAnim('idleUp', 1, [1]);
			this.addAnim('idleLeft', 1, [2]);
			this.addAnim('idleRight', 1, [7]);
			this.addAnim('walkDown', 0.2, [0,3]);
			this.addAnim('walkUp', 0.2, [1, 4]);
			this.addAnim('walkLeft', 0.2, [2, 5]);
			this.addAnim('walkRight', 0.2, [7, 8]);

			this.directions = {
				right: {
					velocity: {
						x: this.velocity + 16,
						y: 0
					},
					animations: {
						idle: this.anims.idleRight,
						walk: this.anims.walkRight
					}
				},
				left: {
					velocity: {
						x: -this.velocity - 16,
						y: 0
					},
					animations: {
						idle: this.anims.idleLeft,
						walk: this.anims.walkLeft
					}
				},
				up: {
					velocity: {
						x: 0,
						y: -this.velocity
					},
					animations: {
						idle: this.anims.idleUp,
						walk: this.anims.walkUp
					}
				},
				down: {
					velocity: {
						x: 0,
						y: this.velocity
					},
					animations: {
						idle: this.anims.idleDown,
						walk: this.anims.walkDown
					}
				}, 
				none: {
					velocity: {
						x: 0,
						y: 0
					}
				}
			};
		},

		update: function(){
		
			var direction;

			if(ig.input.state('up')){
				direction = 'up';
			} else if (ig.input.state('down')){
				direction = 'down';
			} else if (ig.input.state('left')){
				direction = 'left';
			} else if (ig.input.state('right')){
				direction = 'right';
			} else
				direction = null; 

			if (direction) {
				this.currentAnim = this.directions[direction].animations.walk;
				this.velocity = this.directions[direction].velocity;
				this.setVelocity(this.directions[direction].velocity);
				this.direction = direction;
			} else {
				this.currentAnim = this.directions[this.direction].animations.idle;
				this.setVelocity(this.directions.none.velocity);
			}

			// move!
			this.parent();
		},

		setVelocity: function(velocity) {
			this.vel.x = velocity.x;
			this.vel.y = velocity.y;
		}
	});
});