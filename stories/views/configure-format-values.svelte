<script>
  import Speedometer from "../../src/Speedometer.svelte"

  export let textColor = "#d8dee9"
</script>

<div>
  <Speedometer
    maxValue={150}
    value={70.7}
    valueFormat={'d'}
    customSegmentStops={[0, 50, 70, 90, 150]}
    segmentColors={['#bf616a', '#d08770', '#ebcb8b', '#a3be8c']}
    {textColor}
  />
  <Speedometer
    maxValue={150}
    value={70.7}
    segments={5}
    valueFormat={'d'}
    {textColor}
  />
</div>
