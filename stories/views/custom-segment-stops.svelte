<script>
  import Speedometer from "../../src/Speedometer.svelte"

  export let textColor = "#d8dee9"
</script>

<div>
  <Speedometer
    needleHeightRatio={0.7}
    maxSegmentLabels={5}
    segments={3}
    customSegmentStops={[0, 500, 750, 900, 1000]}
    segmentColors={['firebrick', 'tomato', 'gold', 'limegreen']}
    value={333}
    {textColor}
  />
  <Speedometer
    forceRender={true}
    maxSegmentLabels={1}
    customSegmentStops={[500, 777, 1000]}
    segmentColors={['#5959ac', '#AAA']}
    needleColor={'#5959ac'}
    currentValueText={'Current Value: ${value}'}
    minValue={500}
    maxValue={1000}
    value={777}
    {textColor}
  />
  <Speedometer
    forceRender={true}
    maxSegmentLabels={1}
    segmentColors={['tomato', 'gold']}
    needleColor={'tomato'}
    currentValueText={'Current Value: ${value}'}
    minValue={-120}
    maxValue={0}
    value={-100}
    customSegmentStops={[-120, -100, 0]}
    {textColor}
  />
</div>
