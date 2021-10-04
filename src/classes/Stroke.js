export default class Stroke{
	pointArray = [];

	constructor(ptArray = []){
		this.pointArray = ptArray;
	}

	add(point, pos = this.pointArray.length){
		// add points to a position in stroke array
		const ptArray = this.pointArray;

		if(ptArray[pos]){
			ptArray.slice(pos, 0);
		}

		// this.pointArray.push(pt);
	}

	rem(){
		this.pointArray.s

	}

}
