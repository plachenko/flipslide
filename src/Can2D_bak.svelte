<svelte:options accessors />
<script lang="ts">
	import { onMount, createEventDispatcher } from "svelte";
	import Point from './classes/Point.js';
	import * as FSMath from './classes/FSMath.js'

	import {WorkerGIF} from './assets/gif.worker';
	import GIF from './assets/gif.js';

	import { Color } from './classes/threejs/Color.js';
	
	let canvas;
	let ctx;

	export let strokeArray = [];
	export let iSize = 2;
	export let color = "#000";
	export let opacity = 1;

	export let width = 0;
	export let height = 0;

	export let currentPoint = null;
	export let recording = true;

	let dispatch = createEventDispatcher();

	let lastPoint;

	let stroke = [];

	export let frameIdx = 0;
	export let frameSkip = 3;
	let frames = [];
	export let frameEnd = 10;

	let tickTime = 1;
	let tickInt = 0;

	$: currentPoint && handlePointChange();
	$: frameIdx && frameIdxChange();
	$: frameSkip && frameSkipChange();

	onMount(()=>{
		// On Mount function. When the component appears do this immediately.
		setCanvas();

		console.log(WorkerGIF);
		// tick();
	});

	function frameIdxChange(){
		drawFrame();
	}

	function tick(){
		// Animates a frame.
		/* clear(); */
		// let pt = new Point(canvas.width/2, canvas.height/2);

		// drawRect(pt, 20, tickInt*40);

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

		/* clear(); */
		if(!lastPoint){
			lastPoint = currentPoint;
		}

		stroke.push(currentPoint);

		// https://stackoverflow.com/questions/2676719/calculating-the-angle-between-the-line-defined-by-two-points
		// TODO move this into the point object.
		let dx = currentPoint.x - lastPoint.x;
		let dy = currentPoint.y - lastPoint.y;
		let angle = Math.atan2(dy, dx);
		let s;
		
		if(dx && Math.abs(dx) >= Math.abs(dy)){
			s = Math.abs(Math.round(dx));
		}else if(dy && Math.abs(dy) >= Math.abs(dx)){
			s = Math.abs(Math.round(dy));
		}

		let co = new Color(color).getHexString();

		currentPoint.angle = angle + FSMath.toRad(45);
		currentPoint.size = (iSize/3) + (s/3 + (currentPoint.pressure*4));
		currentPoint.color = co;

		/* drawRect(currentPoint, currentPoint.size, currentPoint.angle, true, lastPoint); */
		drawLerp(currentPoint, lastPoint);

		if(recording){
			dispatch('frameChange', currentPoint);
		}

		lastPoint = currentPoint
	}

	function frameSkipChange(){
		/* frameSkipChange */
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
			ctx.fillStyle = fill;
			ctx.fill();
		}
		/* ctx.stroke(); */
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
			pt.angle = FSMath.lerp(pt1.angle, pt2.angle, diff/maxDiff);
			pt.color = pt1.color;

			drawRect(pt, pt.size, pt.angle, pt.color);
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

	function drawRect(_pt: Point, size, angle = 0, fill = false, lp: Point){
		// Draw a rectangle.

		const pts = [];
		const pts2 = [];
		let i = 4;
		let ptSize = 4;

		let pt = new Point(_pt.x, _pt.y, _pt.options);

		// Draw the pivot point.
		if(!fill){
			ctx.fillRect(
				pt.x - ptSize / 2, 
				pt.y - ptSize / 2, 
				ptSize, 
				ptSize
			);
		}

		pts[0] = pt?.offset(size, -size);
		pts[1] = pt?.offset(-size, -size);
		pts[2] = pt?.offset(-size, size);
		pts[3] = pt?.offset(size, size);

		pts.forEach((el) => {
			rotatePoint(el, angle, pt);
		});

		drawBetween(pts, 1, true, fill);
	}

	export function endStroke(){

		if(!frames[frameIdx]){
			frames[frameIdx] = [];
		}

		frames[frameIdx].push(stroke);

		lastPoint = null;
		stroke = [];
	}
	
	function drawFrame(num = frameIdx){
		clear();
		ctx.fillStyle="#FFF";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		frames[num]?.forEach((stroke)=>{
			// ctx.fillStyle = stroke[0].color;
			stroke.forEach((pt, idx)=>{
				let lp = idx ? stroke[idx-1] : stroke[0];
				// console.log(pt, lp);
				drawLerp(pt, lp);
				// ctx.fillRect(pt.x, pt.y, 10, 10);
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
		/* point.size = (size + s); */
		/* point.size = (size + s) * (point.pressure*2); */

		drawRect(point, point.size, Math.atan2(dy-dx)+FSMath.toRad(45));
		/* console.log(point.size, x, y); */

		ctx.fillRect(x, y, point.size, point.size);
	}

	export function clear(){
		strokeArray = [];
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}

	export function saveGIF(){
		// console.log(WorkerGIF.toString());
		const workerStr = WorkerGIF;
		const blob = new Blob([workerStr], {
			type: 'application/javascript'
		});
		let img;
		let urlBlob = URL.createObjectURL(blob);

		const gif = new GIF({
			workers: 4,
			width: canvas.width,
			height: canvas.height,
			workerScript: urlBlob,
			quality: 3
		});


		for(let i = 1; i <= frameEnd; i++){
			drawFrame(i);

			gif.addFrame(ctx, {copy: true, delay: .01});
		}
		gif.render();

		gif.on('finished', function(_gifblob){
        	window.open(URL.createObjectURL(_gifblob));
      	});
	}

	export function savePNG(){
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
