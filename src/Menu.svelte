<script lang="ts">
	import { onMount } from "svelte";

	let menu;

	onMount(()=>{
        setPosition();
        window.addEventListener('resize', setPosition);
	});

    function setPosition(dragEvent = null, pos = null){
        let center = window.innerWidth / 2;
        let offset = menu.getBoundingClientRect().width / 2;
        let defaultPos = {
            x: center - offset,
            y: window.innerHeight
        };

        pos = pos || defaultPos;
        
        menu.style.left =  `${pos.x}px`;
    }
</script>

<div id="flipslide-logo" bind:this={menu} draggable="true">
    <!--
        <div style="position: absolute; top: 0px; left: 0px; float: left; width: 150px; border: 1px solid; z-index:9999">
            <input type="range" bind:value={iSize} />
            <input type="color" bind:value={color} />
            <input type="range" bind:value={frame} />
            <a href="#" on:click={savePNG}>save</a>
            <a href="#" on:click={clear}>clear</a>
        </div>
    -->
    
    <div>flipslide</div>
</div>

<style>

#flipslide-logo{
    border: 1px solid;
    padding: 5px 10px;
    position: absolute;
    float: left;
    z-index: 9999;
    bottom: 5px;
    user-select: none;
    cursor: grab;
    box-sizing: border-box;
    width: 100px;
    text-align: center;
    background-color:#FFF;
    }
    #flipslide-logo:hover{
        /* font-weight: bold; */
        border: 2px solid;
        background-color:#444;
        color:#FFF;
    }
    #flipslide-logo:active{
        cursor: grabbing !important;
    }
</style>