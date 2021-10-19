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

    onMount(()=>{
        // On Mount function. When the component appears do this immediately.
        setCanvas();
        
        window.addEventListener('pointermove', (e)=>{
            if(Math.ceil(e.pressure)){
                
                if(!pts[0]){
                    pts[0] = new Point(e.clientX, e.clientY);
                }

                pts[1] = new Point(e.clientX, e.clientY);

                x = pts[1].x;
                y = pts[1].y;

                console.log(x, y);

                render();
            } else {
                pts = [];
            }
        });

    });

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

<canvas bind:this={canvas} />

<style>

</style>