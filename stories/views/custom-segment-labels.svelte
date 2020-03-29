<script>
  import Speedometer from "../../src/Speedometer.svelte"

  export let textColor = "#d8dee9"
</script>

<div>
  <Speedometer
    width={500}
    needleHeightRatio={0.7}
    value={777}
    currentValueText="Happiness Level"
    customSegmentLabels={[{ text: 'Very Bad', position: 'INSIDE', color: '#555' }, { text: 'Bad', position: 'INSIDE', color: '#555' }, { text: 'Ok', position: 'INSIDE', color: '#555', fontSize: '19px' }, { text: 'Good', position: 'INSIDE', color: '#555' }, { text: 'Very Good', position: 'INSIDE', color: '#555' }]}
    ringWidth={47}
    needleTransitionDuration={3333}
    needleTransition="easeElastic"
    needleColor={'#90f2ff'}
    {textColor}
  />
</div>
<div>
  <Speedometer
    width={500}
    needleHeightRatio={0.7}
    value={777}
    customSegmentStops={[0, 250, 750, 1000]}
    segmentColors={['#9399ff', '#14ffec', '#00bbf0']}
    currentValueText="How are you?"
    customSegmentLabels={[{ text: 'Good', position: 'OUTSIDE', color: '#d8dee9' }, { text: 'Great', position: 'OUTSIDE', color: '#d8dee9' }, { text: 'Awesome!', position: 'OUTSIDE', color: '#d8dee9' }]}
    ringWidth={47}
    needleTransitionDuration={3333}
    needleTransition="easeElastic"
    needleColor={'#a7ff83'}
    {textColor}
  />
</div>
