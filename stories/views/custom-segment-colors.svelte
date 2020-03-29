<script>
  import Speedometer from "../../src/Speedometer.svelte"

  export let textColor = "#d8dee9"
</script>

<div>
  <div>
    <Speedometer
      segments={3}
      value={470}
      segmentColors={['#FF9933', '#ECEFF4', '#138808']}
      needleColor="#000080"
      {textColor}
    />
  </div>
  <div>
    <Speedometer
      segments={3}
      value={470}
      segmentColors={['#0055A4', '#ECEFF4', '#EF4135']}
      needleColor="lightgreen"
      {textColor}
    />
  </div>
</div>
