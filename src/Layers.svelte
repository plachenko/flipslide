<script lang="ts">
    export let curLayer;
    export let layers;

    $: layers && handleLayerChange();

    function handleLayerChange(){
        console.log('layer change.');
    }

    function addLayer(){
		console.log('adding Layer.');
	}
	
	function removeLayer(){
		console.log('removing.');
		layers.splice(curLayer, 1);
		layers = [...layers];
	}
	
	function handleLayerClick(e){
		curLayer = e;
		console.log(e);
	}

	function handleLayerMove(e){
        console.log(curLayer, e);

		// console.log(layers);
		layers.splice(curLayer + e, 0, layers.splice(curLayer, 1)[0]);
		layers = [...layers];
		// console.log(layers.splice(curLayer, 1)[0]);s
		/*
		*/
	}
</script>

<!-- save canvas -->
<div id="layers">
    <div id="layerContainer">
        {#each layers as layer, idx}
            <div 
                class={(idx == curLayer ? "current" :"") + " layer"} 
                on:click={() => handleLayerClick(idx)}>
                {idx}
            
            </div>
        {/each}
    </div>
    <div class="actions" style="display: flex; flex-direction: column;">
        <div>
            <span on:click={addLayer}>add</span>
            <span on:click={removeLayer}>rem</span>
        </div>
        <div>
            <span on:click={() => handleLayerMove(1)}>up</span>
            <span on:click={() => handleLayerMove(-1)}>dn</span>
        </div>
    </div>
</div>

<style>
	/* ----- Layers */
	#layers{
		position: absolute;
		right: 10px;
		top: 50%;
		min-width: 100px;
		min-height: 100px;
		border: 1px solid;
		z-index: 9999;
		user-select: none;
		padding-bottom: 28px;
		}
	#layers .actions{
		background-color: #CCC;
		display: flex;
		position: absolute;
		bottom: 0px;
		width: 100%;
		border-top: 2px solid;
	}
	#layers .actions div{
		display: flex;
		border-bottom: 1px solid;
	}
	#layers .actions span{
		padding: 3px;
		text-align: center;
		flex: 1;
		display: inline-block;
		border-right: 1px solid;
	}
	#layers .actions span:last-child{
		border: none;
	}
	#layers .actions span:hover{
		cursor: pointer;
		background-color: #DDD;
	}

	#layers #layerContainer{
		overflow-y: scroll;
		max-height: 200px;
		}
	#layers .layer{
		border-bottom: 1px solid;
		min-height: 30px;
		padding: 10px;
	}
	#layers .current{
		background-color:#F0F !important;
		}

	#layers .layer:hover{
		background-color:#CCC;
		}

	/* -----*/
</style>
