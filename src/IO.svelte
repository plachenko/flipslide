<script lang="ts">
	import { onMount } from "svelte";
	import * as WorkerGIF from './assets/gif.worker';
	import GIF from './assets/gif.js';
	
	let lsStrokes = localStorage.getItem('strokes');
	let saveCanvas;
	let saveCtx;

	let layers;

	onMount(()=>{
		// load any local storage data.
		if(lsStrokes){
			loadLocal();
		}

		saveCanvas.width = window.innerWidth;
		saveCanvas.height = window.innerHeight;
		saveCtx = saveCanvas.getContext('2d');

		setTimeout(() => {
			saveGIF();
		}, 1000);
		
		/*
		setInterval(()=>{
			//Auto Save
			saveLocal();
		}, 7000);
		*/
	});

	function loadLocal(){
		/*
		strokeArray = JSON.parse(lsStrokes || '[]');
		strokeArray.forEach((stroke) => {
			drawStrokes(stroke);
		});
		*/
	}
	
	function savePNG(){
		const can = layers[0].$$.ctx[0];
		const url = can.toDataURL('image/png');
		let fURL;

		fetch(url)
		.then(res => res.blob())
		.then( blob => {
			fURL = URL.createObjectURL(blob);
			window.open(fURL)
		});
	}

	function saveGIF(){
	  const workerStr = WorkerGIF.default;
		
	  const blob = new Blob([workerStr], {
		type: 'application/javascript'
	  });
      
	  let img;
      
	  const gif = new GIF({
          workers: 4,
          width: saveCanvas.width,
          height: saveCanvas.height,
          workerScript: URL.createObjectURL(blob),
          quality: 3
      });

      for(let i = 0; i <= tLine.frameMax; i++){
        // canRef.frameChange(i);
        img = canLyr.getContext('2d').getImageData(30,15,canLyr.width,canLyr.height-10);
        renderCan.getContext('2d').fillStyle = "#FFF";
        renderCan.getContext('2d').fillRect(0, 0, 420, 420);
        renderCan.getContext('2d').putImageData(img, 0, 0);
        gif.addFrame(canLyr, {copy: true, delay: tLine.speed*1.5});
      }
      
	  gif.render();
     
	  gif.on('finished', function(_gifblob){
        window.open(URL.createObjectURL(_gifblob));
      });
	}
	
	function saveLocal(){
		localStorage.setItem('strokes', JSON.stringify(strokeArray));
	}
</script>

<!-- save canvas -->
<canvas bind:this={saveCanvas} />

<style>

</style>
