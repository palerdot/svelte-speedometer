<script>
  import Speedometer from "../../src/Speedometer.svelte"

  export let textColor = "#d8dee9"

  let toggleStatus = false

  let values = [
    {
      value: 111,
      startColor: "blue",
      segments: 5,
      width: 300,
      height: 300,
    },
    {
      value: 222,
      startColor: "orange",
      segments: 10,
      width: 400,
      height: 400,
    },
  ]

  let state = values[0]
</script>

<div style="color: #d8dee9">
  <h4>
    Click the below button to force rerendering the whole component on props
    change. By default, on props change, only the speedometer value/needle value
    will be updated and animated for smooth visualization. Below button will
    toggle between two sets of totally different appearances, when forceRender
    option is given true.
  </h4>

  <button
    on:click={() => {
      toggleStatus = !toggleStatus
      let new_values = toggleStatus ? values[1] : values[0]
      state = new_values
    }}
  >
    <strong>Force Re render component on props change</strong>
  </button>
  <Speedometer
    value={state.value}
    startColor={state.startColor}
    forceRender={true}
    segments={state.segments}
    width={state.width}
    height={state.height}
    {textColor}
  />
</div>

<style>
  button {
    height: 33px;
    margin: 31px 0;
  }
</style>
