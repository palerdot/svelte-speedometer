<script>
  import Speedometer from "../../src/Speedometer.svelte"

  export let textColor = "#d8dee9"
</script>

<div>
  <div>
    <Speedometer maxSegmentLabels={0} segments={5555} {textColor} />
  </div>

  <div>
    <Speedometer
      maxSegmentLabels={0}
      segments={4}
      value={333}
      startColor={'#2E3440'}
      endColor={'#4C566A'}
      needleColor="#D8DEE9"
      {textColor}
    />
  </div>
</div>
