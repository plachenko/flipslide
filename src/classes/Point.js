export default class Point{

	size = 10;
	angle = 0;
	delta = [0, 0];
	pressure = 1;
	color = "#000";

	x = 0; 
	y = 0;

	constructor(x = 0, y = 0, options){
		this.x = x;
		this.y = y;

		if(options){
			this.color = options.color;
			this.delta = options.delta;
			this.angle = options.angle;
			this.pressure = options.pressure;
			this.size = options.size;
		}

		return;
	}

	offset(_x = 0, _y = 0, _options){
		const x = this.x + _x;
		const y = this.y + _y; 

		let pt = new Point(x, y, _options);
		
		return pt;
	}

	snap(val, grid){
		// TODO: Move out of point.
		//snap current value to snapamt
		const num = grid * Math.round(val/grid);
		const ret = val-num < 2 ? num : lSize; 

		return ret; 
	}
}
