<svelte:options accessors />
<script lang="ts">
	import { onMount } from "svelte";
import { compute_slots } from "svelte/internal";
	import Point from './classes/Point.js';
	import * as FSMath from './classes/FSMath.js'
	
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
		// On Mount function. When the component appears do this immediately.
		setCanvas();
		// tick();
		drawRect(new Point(220, 220), 100, 45);
	});

	function tick(){
		// Animates a frame.
		let angle = 0;
		let i = 0;

		// requestAnimationFrame(tick);

		/*
		setInterval(()=>{
			angle = Math.PI * i;
			clear();
			drawRect(new Point(200, 200), 50, angle);
			i+=.1;
		}, 100);
		*/
	}

	function setCanvas(width = window.innerWidth, height = window.innerHeight){
		// Sets the canvas dimensions

		canvas.width = width;
		canvas.height = height;
		ctx = canvas.getContext('2d');
	}

	
	function draw(pt, i = 0){
		
		// Draw to Point.
		console.log('drawing.', i, pt);

		// Draw it again
		if(i){
			draw(pt, --i);
		}

		return;
	}

	function drawBetween(pt1, pt2){
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


	function rotatePoint(pt: Point, angle = 0, piv: Point = new Point(0, 0)){
		let s = Math.sin(angle);
		let c = Math.cos(angle);

		pt.x -= piv.x;
		pt.y -= piv.y;

		let _x = pt.x * c - pt.y * s;
		let _y = pt.x * s + pt.y * c;
		
		pt.x = _x + piv.x;
		pt.y = _y + piv.y;

		return new Point(pt.x, pt.y);
	}

	

	function drawRect(pt: Point, size, angle = 0){
		// let offset = new Point(pt.x - (size/2), pt.y - (size/2));
		// let _pt = rotatePoint(pt, angle, );
		// console.log(angle)
		// let p1 = rotatePoint(pt, angle, offset);
		// let p2 = rotatePoint(new Point(pt.x, pt.y+size), angle, offset);
		// let p2 = pt;
		// let x = pt.x - (size/2);
		// let y = pt.y - (size/2);


		ctx.fillRect(pt.x-5, pt.y-5, 10, 10);
		
		// ctx.beginPath();
		// ctx.moveTo(p1.x, p1.y);
		// ctx.lineTo(p2.x, p2.y);
		// ctx.lineTo(x + size, y + size);
		// ctx.lineTo(x + size, y);
		// ctx.closePath();
		// ctx.stroke();
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

		let x1 = stroke[0]?.x - 10;
		let x2 = x1 + 20;

		let y1 = stroke[0]?.y - 10;
		let y2 = y1 + 20;

		// let p1 = rotatePoint(x1, y1, angle);
		// let p2 = rotatePoint(x2, y2, angle);

		if(stroke[0]){
			drawRect(stroke[0], FSMath.setAngleProps(stroke[0]?.x, lastPoint.x).hyp, 0);
		}

		// Draw Grid lines
		ctx.beginPath();
		ctx.moveTo(stroke[0]?.x, stroke[0]?.y);
		ctx.lineTo(currentPoint.x, stroke[0]?.y);
		ctx.lineTo(currentPoint.x, currentPoint.y);
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
