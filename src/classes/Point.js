export default class Point{
	points = [];
	x = 0;
	y = 0;

	dx = 0;
	dy = 0;
	pressure = 1;

	constructor(...pts){
		this.points = [...pts];
		this.x = pts[0]
		this.y = pts[1]

		return;
	}

	offset(...pts){
		x += pts[0];
		y += pts[1];
		
		return new Point(x, y);
	}

	distance(pt){
		const x = this.x - pt.x;
		const y = this.y - pt.y;
	}

	snap(val, grid){
		//snap current value to snapamt
		const num = grid * Math.round(val/grid);
		const ret = val-num < 2 ? num : lSize; 

		return ret; 
	}
}