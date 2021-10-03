<svelte:options accessors />
<script lang="ts">
	import { onMount } from "svelte";
	import Point from './classes/Point.js';
	
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
		let maxDiff = 0;

		let xDiff = pt2.x - pt1.x;
		let yDiff = pt2.y - pt1.y;

		if(Math.abs(xDiff) > Math.abs(yDiff)){
			maxDiff = Math.abs(xDiff);
		}else{
			maxDiff = Math.abs(yDiff);
		}

		for(let diff = 0; diff <= maxDiff; diff++){
			let _x = lerp(pt1.x, pt2.x, diff/maxDiff);
			let _y = lerp(pt1.y, pt2.y, diff/maxDiff);

			// TODO: Clean this
			const pt = new Point(_x, _y);
			pt.pressure = lerp(pt1.pressure, pt2.pressure, diff/maxDiff);
			pt.size = lerp(pt1.size, pt2.size, diff/maxDiff);
			pt.dx = lerp(pt1.dx, pt2.dx, diff/maxDiff)/iSize;
			pt.dy = lerp(pt1.dy, pt2.dy, diff/maxDiff)/iSize;

			drawPoint(pt);
		}
	}

	function handlePointChange(){
		clear();
		// TODO: CLEAN THIS

		let rotX;
		let rotY;
		
		let pt = new Point(currentPoint.x+iSize/2, currentPoint.y+iSize/2);
		pt.dy = currentPoint.dy;
		pt.dx = currentPoint.dx;
		pt.size = currentPoint.size;
		pt.pressure = currentPoint.pressure;

		if(!lastPoint){
			lastPoint = pt;
		}

		// Draw slope line...
		ctx.beginPath();
		ctx.moveTo(stroke[0]?.x, stroke[0]?.y);
		ctx.lineTo(lastPoint.x, lastPoint.y);
		ctx.closePath();
		ctx.stroke();

		let rise = currentPoint.y - stroke[0]?.y;
		let run =  currentPoint.x - stroke[0]?.x;

		// console.log(run, rise, (rise/run));
		console.log(run);


		// Draw Grid lines
		ctx.beginPath();
		ctx.moveTo(stroke[0]?.x, stroke[0]?.y);
		ctx.lineTo(currentPoint.x, stroke[0]?.y);
		ctx.lineTo(currentPoint.x, currentPoint.y);
		ctx.closePath();
		ctx.stroke();

		
		ctx.beginPath();
		ctx.moveTo(
			stroke[0]?.x, 
			stroke[0]?.y
			);
		ctx.lineTo(
			stroke[0]?.x + 10, 
			stroke[0]?.y + 10
			);
		ctx.closePath();
		ctx.stroke();

		// Get Rect!!
		ctx.beginPath();
		ctx.moveTo(
			stroke[0]?.x, 
			stroke[0]?.y + iSize/2
			);
		ctx.lineTo(
			stroke[0]?.x + iSize/2, 
			stroke[0]?.y
			);
		ctx.lineTo(
			stroke[0]?.x, 
			stroke[0]?.y - iSize/2
			);
		ctx.lineTo(
			stroke[0]?.x - iSize/2, 
			stroke[0]?.y
			);
		ctx.closePath();
		ctx.stroke();

		ctx.beginPath();
		// ctx.moveTo(stroke[0]?.x, stroke[0]?.y);
		// ctx.moveTo(stroke[0]?.x-iSize/2 + rotX, stroke[0]?.y + rotY);
		// ctx.lineTo(stroke[0]?.x + rotX, stroke[0]?.y + iSize/2);
		// ctx.lineTo(stroke[0]?.x + iSize/2, stroke[0]?.y);
		// ctx.lineTo(stroke[0]?.x, stroke[0]?.y - iSize/2);
		ctx.closePath();
		ctx.stroke();

		stroke.push(currentPoint);

		// drawBetween(pt, lastPoint);

		lastPoint = currentPoint;
		
		/*
		if(frameIdx < frameLimit){
			frameIdx++;
		}else{
			frameIdx = 0;
		}
		*/

		/* endStroke(); */
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
