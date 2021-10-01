export default class Stroke{
	pointArray = [];

	constructor(ptArray = []){
		this.pointArray = ptArray;
	}

	addPoint(pt){
		this.pointArray.push(pt);
	}
}
