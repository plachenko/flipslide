<script lang="ts">	
    /* 
        FLIPSLIDE CANVAS COMPONENT
        A canvas component is essentially a 'layer' in a document. 
    */

    import { onMount } from "svelte";
    import Point from './classes/Point.js';
	import * as FSMath from './classes/FSMath.js'

    let canvas;
    let ctx;
    let strokeArray = [];

    let x = 100;
    let y = 100;

    let pts = [];
    let pdn = false;

    onMount(()=>{
        // On Mount function. When the component appears do this immediately.
        setCanvas();
        window.addEventListener('pointerdown', (e)=>{
            pts[0] = new Point(e.clientX, e.clientY);
            pdn = true;
        });

        window.addEventListener('pointerup', (e)=>{
            // console.log(e);
            pts = [];
            pdn = false;
        });

        // requestAnimationFrame(tick);
        tick();

        window.addEventListener('pointermove', (e)=>{
            if(pdn){
                console.log(e);
                pts[1] = new Point(e.clientX, e.clientY);


            }
        });

    });

    function tick(){
        if(pdn){
            x = pts[1].x;
            y = pts[1].y;
            render();
            console.log('tick');
        }
        requestAnimationFrame(tick);
    }

    export function clear(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function render(){
        // clear();

        /*
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        ctx.quadraticCurveTo(
            pts[0].x, 
            pts[0].y + (pts[0].y / pts[1].y), 
            pts[1].x, 
            pts[1].y
        );
        ctx.stroke();
        */
        // ctx.fillRect(pts[1]?.x, pts[1]?.y, 4, 4);
       
       ctx.beginPath();
       ctx.moveTo(pts[0].x, pts[0].y);
       ctx.lineTo(pts[1].x, pts[1].y);
       ctx.stroke();

       pts[0] = pts[1];
    }

    function setCanvas(width = window.innerWidth, height = window.innerHeight){
    	// Sets the canvas dimensions

    	canvas.width = width;
    	canvas.height = height;
    	ctx = canvas.getContext('2d');
    }
</script>

<div>
test
</div>
<canvas bind:this={canvas} />

<style>

</style>