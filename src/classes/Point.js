export default class Point{
	points = [];
	x = 0;
	y = 0;

	constructor(...pts){
		this.points = [...pts];
		this.x = pts[0]
		this.y = pts[1]

		return;
	}

}

