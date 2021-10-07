<svelte:options accessors />
<script lang="ts">
	import { onMount } from "svelte";
	import Point from './classes/Point.js';
	import * as FSMath from './classes/FSMath.js'

	import { Color } from './classes/Color.js';
	
	let canvas;
	let ctx;

	export let strokeArray = [];
	export let iSize = 18;
	export let color = "#000";

	export let width = 0;
	export let height = 0;

	export let currentPoint = null;
	let lastPoint;

	let stroke = [];

	let frames = [];
	let frameIdx = 0;
	let frameLimit = 100;

	let tickTime = 1;
	let tickInt = 0;

	let pts = [];

	$: currentPoint && handlePointChange();

	onMount(()=>{
		// On Mount function. When the component appears do this immediately.
		setCanvas();

		let pt = new Point(canvas.width/2, canvas.height/2)
		drawRect(pt, 100, 20);
		tick();
	});

	function tick(){
		// Animates a frame.

		setTimeout(()=>{
			/* clear(); */
			/* draw(new Point(canvas.width/2, canvas.height/2)); */
			tickInt++;
			requestAnimationFrame(tick);
		}, tickTime);
	}

	function setCanvas(width = window.innerWidth, height = window.innerHeight){
		// Sets the canvas dimensions

		canvas.width = width;
		canvas.height = height;
		ctx = canvas.getContext('2d');
	}

	function handlePointChange(){
		// called whenever a pointer event change is handled.
		
		clear();
		let props;
		
		if(!lastPoint){
			lastPoint = currentPoint;
		}

		stroke.push(currentPoint);
		props = FSMath.setAngleProps(stroke[0], currentPoint);

		drawBetween([stroke[0], currentPoint]);
		drawRect(stroke[0], props.hyp)

		lastPoint = currentPoint
		
		/*
		if(frameIdx < frameLimit){
			frameIdx++;
		}else{
			frameIdx = 0;
		}
		*/
	}

	function drawBetween(pts, resolution = 1, connected = false){
		let idx = pts.length;

		ctx.beginPath();
		ctx.moveTo(pts[0]?.x, pts[0]?.y);

		while(0 < idx){
			const i = pts.length - idx;
			ctx.lineTo(pts[i]?.x, pts[i]?.y);
			if(i == 0 && !connected){
				ctx.closePath();
			}
			idx -= Math.abs(resolution);
		}

		if(connected){
			ctx.closePath();
		}

		// ctx.fill();
		ctx.stroke();
	}

	function draw(pt = new Point(100, 100), i = 0){
		
		// Draw to Point.
		/* let pt2 = pt.offset(5, -5) */
		/* let pt3 = rotatePoint(pt2, tickInt/100) */

		/* ctx.beginPath(pt.x, pt.y); */
		/* ctx.moveTo(pt.x, pt.y); */
		/* ctx.lineTo(pt3.x, pt3.y); */
		/* ctx.closePath(); */
		/* ctx.stroke(); */

		// Draw it again
		if(i){
			/* draw(pt, --i); */
		}

		return;
	}

	function drawLerp(pt1, pt2){
		// Draws between two points

		let maxDiff = 0;

		let xDiff = pt2.x - pt1.x;
		let yDiff = pt2.y - pt1.y;

		if(Math.abs(xDiff) > Math.abs(yDiff)){
			maxDiff = Math.abs(xDiff);
		}else{
			maxDiff = Math.abs(yDiff);
		}

		for(let diff = 0; diff <= maxDiff; diff++){
			let _x = FSMath.lerp(pt1.x, pt2.x, diff/maxDiff);
			let _y = FSMath.lerp(pt1.y, pt2.y, diff/maxDiff);

			// TODO: Clean this
			const pt = new Point(_x, _y);
			pt.pressure = FSMath.lerp(pt1.pressure, pt2.pressure, diff/maxDiff);
			pt.size = FSMath.lerp(pt1.size, pt2.size, diff/maxDiff);
			pt.dx = FSMath.lerp(pt1.dx, pt2.dx, diff/maxDiff)/iSize;
			pt.dy = FSMath.lerp(pt1.dy, pt2.dy, diff/maxDiff)/iSize;

			drawPoint(pt);
		}
	}


	function rotatePoint(pt: Point, angle = 0){
		/* console.log(props) */
		let s = Math.sin(angle);
		let c = Math.cos(angle);

		/* pt.x -= piv.x; */
		/* pt.y -= piv.y; */

		let _x = (pt.x * c) - (pt.y * s);
		let _y = (pt.y * s) + (pt.x * c);
		
		pt.x = _x;
		pt.y = _y;
		/* pt.x = _x + piv.x; */
		/* pt.y = _y + piv.y; */

		return new Point(pt.x, pt.y);
	}

	

	function drawRect(pt: Point, size, angle = 0){
		// Draw a rectangle.

		const pts = [];
		let i = 4;
		let ptSize = 4;

		// Draw the pivot point.
		ctx.fillRect(
			pt.x - ptSize / 2, 
			pt.y - ptSize / 2, 
			ptSize, 
			ptSize
		);

		/* pts[0] = new Point(pt.x+size, pt.y-size); */
		/* pts[1] = new Point(pt.x+size, pt.y+size); */
		/* pts[2] = new Point(pt.x-size, pt.y+size); */
		/* pts[3] = new Point(pt.x-size, pt.y-size); */

		while (i){
			const _pt = rotatePoint(pt, angle);

			pts.push(_pt);
			i--;
		}

		drawBetween(pts, 1, true);
	}

	export function endStroke(){
		/* frames[frameIdx] = [...frames, frames[frameIdx]]; */
		if(!frames[frameIdx]){
			frames[frameIdx] = [];
		}

		frames[frameIdx].push(stroke);
		lastPoint = null;
		stroke = [];
	}
	
	function drawFrame(frame){
		frame.forEach((strokes, idx)=>{
			stroke.forEach((stroke)=>{

			});
		});
	}

	function drawPoint(point: Point){
		let size = iSize;

		let dx = point.dx;
		let dy = point.dy; 

		let s;
		
		if(dx && Math.abs(dx) >= Math.abs(dy)){
			s = Math.abs(Math.round(dx));
		}else if(dy && Math.abs(dy) >= Math.abs(dx)){
			s = Math.abs(Math.round(dy));
		}

		let x = point.x;
			x -= size/2;
		let y = point.y;
			y -= size/2;
		
		/* point.size = (size + dx); */
		point.size = (size + s) * (point.pressure*2);

		/* ctx.fillRect(x, y, point.size, point.size); */
		ctx.beginPath();
		ctx.moveTo(x-point.size/2, y);
		ctx.lineTo(x, y+point.size/2);
		ctx.lineTo(x+point.size/2, y);
		ctx.lineTo(x, y-point.size/2);
		ctx.fill();
		ctx.closePath();

		ctx.strokeStyle ="#F00";
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(currentPoint.x, currentPoint.y);
		ctx.stroke();
		ctx.closePath();
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
