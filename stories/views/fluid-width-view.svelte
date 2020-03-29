<script>
  import Speedometer from "../../src/Speedometer.svelte"

  export let textColor = "#d8dee9"
</script>

<div style=" width: 500px; height: 300px; ">
  <Speedometer
    fluidWidth={true}
    minValue={100}
    maxValue={500}
    value={473}
    needleColor="steelblue"
    {textColor}
  />
</div>

<p style="color: #d8dee9">
  Here 'Speedometer' takes the width of the parent (500px)
</p>
