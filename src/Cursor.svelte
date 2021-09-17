<script lang="ts">
    export let pos;
    export let size;

	let cursor;

	function setCursor(e){
        let curStyle = cursor.style;
		curStyle.height = `${size}px`;
		curStyle.width = `${size}px`;
		curStyle.left = `${pos.x}px`;
		curStyle.top = `${pos.y}px`;
	}
</script>

<div bind:this={cursor} id="cursor"></div>

<style>
#cursor{
    position: absolute;
    top: 0px;
    left: 0px;
    background-color:#F00;
    width: 20px;
    height: 20px;
    }
</style>