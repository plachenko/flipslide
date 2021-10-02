<script lang="ts">
	import { onMount, createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();
    let color = "#000";
    let menu;

    let options = [
        /* {label: 'brush size', type: 'range'}, */
        /* {label: 'brush size', type: 'range'}, */
        {label: 'save', type: 'submit', method: handleSave},
        {label: 'clear', type: 'submit', method: handleClear}
    ];

	onMount(()=>{
        setPosition();
        window.addEventListener('resize', setPosition);
        
        menu.addEventListener('opointerdown', (e)=>{
            console.log(e);
        });

        menu.addEventListener('ondragstart', (e)=>{
            console.log(e);
        })
        menu.addEventListener('ondragged', (e)=>{
            console.log(e);
        })
	});
    
  function handleColor(e){
    dispatch('menuEvt', color);
  }

  function handleClear(){
    dispatch('handleClear');
  }

  function handleSave(){
    dispatch('handleSave')
  }

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
    <div id="menu">
        <input on:change={handleColor} bind:value={color} class="btn" type="color" />

        {#each options as option }
        <div class="btn">
            <span on:click={option.method}>
                {option.label}
            </span>
        </div>
        {/each}
    </div>
    
    <div class="btn" id="logo">flipslide</div>
</div>

<style>

#menu{
    border: 1px solid;
    padding: 5px 10px;
    margin: 10px 0px;
    }


#flipslide-logo{
    position: absolute;
    float: left;
    z-index: 9999;
    bottom: 5px;
    }

    .btn{
        user-select: none;
        padding: 5px 10px;
        cursor: grab;
        text-align: center;
        background-color:#FFF;
        box-sizing: border-box;
        width: 100px;
        margin: 0 auto;
        }
    .btn:hover{
        border: 2px solid;
        background-color:#444;
        color:#FFF;
        }
    .btn:active{
        cursor: grabbing !important;
        }

    #logo{
        padding: 5px;
        border: 1px solid;
        }
</style>
