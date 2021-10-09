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

	let tickTime = 10;
	let tickInt = 0;

	let pts = [];


	$: currentPoint && handlePointChange();

	onMount(()=>{
		// On Mount function. When the component appears do this immediately.
		setCanvas();

		// tick();
	});

	function tick(){
		// Animates a frame.
		clear();
		// let pt = new Point(canvas.width/2, canvas.height/2);

		// drawRect(pt, 20, tickInt*40);

		/* console.log('test') */

		setTimeout(()=>{
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
		
		if(!lastPoint){
			lastPoint = currentPoint;
		}

		// https://stackoverflow.com/questions/2676719/calculating-the-angle-between-the-line-defined-by-two-points
		// let delta_x = currentPoint.x - stroke[0].x;
		// let delta_y = currentPoint.y - stroke[0].y;
		
		let delta_x = currentPoint.x - lastPoint.x;
		let delta_y = currentPoint.y - lastPoint.y;
		let angle = Math.atan2(delta_y, delta_x);

		currentPoint.angle = angle + FSMath.toRad(45);
		stroke.push(currentPoint);
		
		// drawRect(currentPoint, 10, currentPoint.angle);
		drawLerp(currentPoint, lastPoint);

		lastPoint = currentPoint
		
		/*
		if(frameIdx < frameLimit){
			frameIdx++;
		}else{
			frameIdx = 0;
		}
		*/
	}

	function drawBetween(pts, resolution = 1, connected = false, fill = false){
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

		if(fill){
			ctx.fill();
		}
		ctx.stroke();
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
			pt.delta[0] = FSMath.lerp(pt1.delta[0], pt2.delta[0], diff/maxDiff)/iSize;
			pt.delta[1] = FSMath.lerp(pt1.delta[1], pt2.delta[1], diff/maxDiff)/iSize;
			pt.angle = FSMath.lerp(pt1.angle, pt2.angle, diff/maxDiff)/iSize;

			drawPoint(pt);
		}
	}

	function rotatePoint(pt: Point, _angle = 0, piv = new Point()){
		let angle = _angle;

		let s = Math.sin(angle);
		let c = Math.cos(angle);

		pt.x -= piv.x;
		pt.y -= piv.y;

		let _x = (pt.x * c) - (pt.y * s);
		let _y = (pt.x * s) + (pt.y * c);
		
		pt.x = _x + piv.x;
		pt.y = _y + piv.y;
	}

	function drawRect(pt: Point, size, angle = 0){
		// Draw a rectangle.

		const pts = [];
		const pts2 = [];
		let i = 4;
		let ptSize = 4;

		// Draw the pivot point.
		ctx.fillRect(
			pt.x - ptSize / 2, 
			pt.y - ptSize / 2, 
			ptSize, 
			ptSize
		);

		pts[0] = pt.offset(size, -size);
		pts[1] = pt.offset(-size, -size);
		pts[2] = pt.offset(-size, size);
		pts[3] = pt.offset(size, size);

		pts.forEach((el) => {
			rotatePoint(el, angle, pt);
		});

		
		drawBetween(pts, 1, true, true);
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

		let dx = point.delta[0];
		let dy = point.delta[1]; 

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
		
		// console.log(size, point.angle);
		/* point.size = (size + dx); */
		point.size = (size + s) * (point.pressure*2);

		
		drawRect(point, point.size, point.angle);

		/* ctx.fillRect(x, y, point.size, point.size); */

		// ctx.strokeStyle ="#F00";
		// ctx.beginPath();
		// ctx.moveTo(x, y);
		// ctx.lineTo(currentPoint.x, currentPoint.y);
		// ctx.stroke();
		// ctx.closePath();
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
