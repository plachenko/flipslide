<svelte:options accessors />
<script lang="ts">
	import { onMount } from "svelte";
	import Point from './classes/Point.js';
	
	let canvas;
	let ctx;

	export let strokeArray = [];
	export let iSize = 10;
	export let color = "#000";

	export let width = 0;
	export let height = 0;

	export let currentPoint = null;

	let stroke = [];

	let frames = [];
	let frameIdx = 0;
	let frameLimit = 100;

	$: currentPoint && handlePointChange();

	onMount(()=>{
		// set the canvas dimensions
		canvas.width = width || window.innerWidth;
		canvas.height = height || window.innerHeight;
		ctx = canvas.getContext('2d');

	});

	function lerp(v0, v1, t){
		return (1-t)*v0+(t*v1);
	}

	function drawBetween(pt1, pt2){
		clear();

		let maxDiff = 0;
		let sign = 1;
		let slopeX = 1;
		let slopeY = 1;

		let yOffset = 0;
		let xOffset = 0;

		let xDiff = pt2.x - pt1.x;
		let yDiff = pt2.y - pt1.y;

		// console.log(xDiff, yDiff, Math.abs(xDiff) > Math.abs(yDiff));

		if(Math.abs(xDiff) > Math.abs(yDiff)){
			maxDiff = Math.abs(xDiff);
			console.log('x');
			slopeY = Math.abs(yDiff) / Math.abs(xDiff);
			slopeX = 0;

			xOffset = (Math.sign(xDiff)) + slopeX;
			yOffset = (Math.sign(yDiff));
		}else{
			maxDiff = Math.abs(yDiff);
			slopeX = Math.abs(xDiff) / Math.abs(yDiff);
			slopeY = 0;
			console.log('y');

			yOffset = (Math.sign(yDiff)) + slopeY;
			xOffset = (Math.sign(xDiff));
		}
		
		drawPoint(pt1);

		for(let diff = 0; diff <= maxDiff; diff++){
			const _x = pt1.x + (diff * xOffset);
			const _y = pt1.y + (diff * yOffset);

			const pt = new Point(_x, _y);

			pt.pressure = lerp(pt1.pressure, pt2.pressure, diff/maxDiff);

			drawPoint(pt);
		}

		drawPoint(pt2);
	}

	function handlePointChange(){
		stroke.push(currentPoint);
		drawBetween(new Point(200, 200), currentPoint);
		// ctx.fillStyle = "#F00";
		// drawPoint(currentPoint);
		
		ctx.fillStyle = "#000";


		// console.log(xdiff, ydiff);
		/*
		if(xdiff > ydiff){
			for(let x = 0; x <= xdiff; x++){
				const _x = currentPoint.x - (x * Math.sign(currentPoint.dx));
				const _y = currentPoint.y - currentPoint.dy;

				const pt = new Point(_x, _y);
				drawPoint(pt);
			}
		}else{
			for(let y = 0; y <= ydiff; y++){
				const _y = currentPoint.y + (y * Math.sign(currentPoint.dy));
				const _x = currentPoint.x - y/10;

				const pt = new Point(_x, _y);
				drawPoint(pt);
			}
			
		}
		*/
		// for(let x = 0; x < Math.abs(currentPoint.dx); x++){
		
		// }

		// for(let x = 0; x < Math.abs(currentPoint.dx); x++){
		// 	for(let y = 0; y < Math.abs(currentPoint.dy); y++){
		// 		const _x = currentPoint.x + x * Math.sign(currentPoint.dx) * 10;
		// 		const _y = currentPoint.y + y * Math.sign(currentPoint.dy) * 10;
		// 		// console.log(_x, _y)
		// 		const pt = new Point(_x, _y);
		// 		drawPoint(pt);
		// 	}
		// }
		// frameNum++;
		// console.log(frameNum);
		// clear();
		// endStroke();
	}

	export function endStroke(){
		frames[frameIdx] = [...stroke, frames[frameIdx]];
		stroke = [];
	}
	
	export function drawStroke(stroke){
		if(stroke){
			fStroke = stroke[0];
			let e = stroke[stroke.length-1]; 

			let p1 = new Point(e.x, e.y);
			let pd = new Point(e.dx, e.dy);

			/* clear(); */
			draw(...p1.points, ...pd.points, e.pressure);

			frames[frameIdx] = stroke;
			/*
			if(frameNum < frameLimit){
				frameNum++;
			}else{
				clear();
				drawFrame(frameNum);
				frameNum = 0;
			}
			*/

		}
	}

	function drawFrame(frame){

		let p1 = new Point(e.x, e.y);
		let pd = new Point(e.dx, e.dy);

		draw(...p1.points, ...pd.points, e.pressure);
	}

	function drawPoint(point: Point){
		let size = iSize;

		let dx = point.dx;
		let dy = point.dy; 
		
		/*
		if(dx && Math.abs(dx) >= Math.abs(dy)){
			size = Math.abs(Math.round(dx));
		}else if(dy && Math.abs(dy) >= Math.abs(dx)){
			size = Math.abs(Math.round(dy));
		}
		*/

		let x = point.x;
			x -= size/2;
		let y = point.y;
			y -= size/2;
		
		size = size*point.pressure;

		ctx.fillRect(x, y, size, size);

		// if(dx && Math.abs(dx) >= Math.abs(dy)){
		// 	iSize = Math.abs(Math.round(dx));
		// }else if(dy && Math.abs(dy) >= Math.abs(dx)){
		// 	/* iSize == lSize; */
		// 	iSize = Math.abs(Math.round(dy));
		// }else{
		// 	iSize = lSize;
		// }

		// if(!lSize){
		// 	lSize = size;
		// }

		// iSize = iSize + (pressure * 5)/2;
		// iSize = snap(iSize, size)


		
		// ctx.strokeStyle = "#F00";
		// let _x = x;
		// let _y = y;

		// x -= iSize/2;
		// y -= iSize/2;

		// x = snap(x, size);
		// y = snap(y, size);

		// /* console.log(x,y,iSize) */

		// if(iSize < lSize){
		// 	ctx.fillStyle = "#F00";
		// }else{
		// 	ctx.fillStyle = "#000";
		// }
		// ctx.fillStyle = color;

		// for(let i =0; i< 100; i++){
		// 	const offset = new Point(i, i)

		// }
		// ctx.fillStyle= "#FFF";

		// lSize = iSize;
		// lp = {x: _x, y: _y};
	}

	export function clear(){
		strokeArray = [];
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	function savePNG(){
		const url = canvas.toDataURL('image/png');
		let fURL;
		fetch(url)
		.then(res => res.blob())
		.then( blob => {
			fURL = URL.createObjectURL(blob);
			window.open(fURL)
		});
	}
</script>

<canvas bind:this={canvas} />

<style>
</style>
