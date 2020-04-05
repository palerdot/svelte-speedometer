// DEV build
import Speedometer from "../src/"
// PROD build
// import Speedometer from "../dist/index.mjs"

// import UpdateTest from "./views/update-test.svelte"
import CustomSegmentLabelsView from "./views/custom-segment-labels.svelte"
import CustomSegmentColorsView from "./views/custom-segment-colors.svelte"
import CustomSegmentStopsView from "./views/custom-segment-stops.svelte"
import FluidWidthView from "./views/fluid-width-view.svelte"
import ForceRenderView from "./views/force-render.svelte"
import ConfigureFormatValuesView from "./views/configure-format-values.svelte"
import NoSegmentLabelsView from "./views/no-segment-labels.svelte"

const textColor = "#AAA"

export default {
  title: "Svelte Speedometer",
  component: Speedometer,
}

export const DefaultWithoutNoConfig = () => ({
  Usage: `
    <Speedometer />
  `,
  Component: Speedometer,
  props: {
    textColor,
  },
})

export const ConfiguringValues = () => ({
  Usage: `
      <Speedometer
        maxValue={500}
        value={473}
        needleColor="violet"
        startColor="tomato"
        endColor="lightgreen"
        segments={10}
      />
  `,
  Component: Speedometer,
  props: {
    maxValue: 500,
    value: 473,
    needleColor: "violet",
    startColor: "tomato",
    endColor: "lightgreen",
    segments: 10,
    textColor,
  },
})

export const CustomSegmentLabels = () => ({
  Usage: `
    <Speedometer
      width={500}
      needleHeightRatio={0.7}
      value={777}
      currentValueText="Happiness Level"
      customSegmentLabels={
        [
          { 
            text: 'Very Bad', 
            position: 'INSIDE', 
            color: '#555' 
          }, 
          { 
            text: 'Bad', 
            position: 'INSIDE', 
            color: '#555' 
          }, 
          { 
            text: 'Ok', 
            position: 'INSIDE', 
            color: '#555', 
            fontSize: '19px' 
          }, 
          { 
            text: 'Good', 
            position: 'INSIDE', 
            color: '#555' 
          }, 
          { 
            text: 'Very Good', 
            position: 'INSIDE', 
            color: '#555' 
          }
        ]
      }
      ringWidth={47}
      needleTransitionDuration={3333}
      needleTransition="easeElastic"
      needleColor={'#90f2ff'}
    />
    
    <Speedometer
      width={500}
      needleHeightRatio={0.7}
      value={777}
      customSegmentStops={[0, 250, 750, 1000]}
      segmentColors={['#9399ff', '#14ffec', '#00bbf0']}
      currentValueText="How are you?"
      customSegmentLabels={
        [
          { text: "Good", position: "OUTSIDE", color: "#d8dee9" },
          { text: "Great", position: "OUTSIDE", color: "#d8dee9" },
          { text: "Awesome!", position: "OUTSIDE", color: "#d8dee9" },
        ]  
      }
      ringWidth={47}
      needleTransitionDuration={3333}
      needleTransition="easeElastic"
      needleColor={'#a7ff83'}
    />
  `,
  Component: CustomSegmentLabelsView,
  props: {
    textColor,
  },
})

export const CustomSegmentColors = () => ({
  Usage: `
    <Speedometer
      segments={3}
      value={470}
      segmentColors={['#FF9933', '#ECEFF4', '#138808']}
      needleColor="#000080"
    />

    <Speedometer
      segments={3}
      value={470}
      segmentColors={['#0055A4', '#ECEFF4', '#EF4135']}
      needleColor="lightgreen"
    />
  `,
  Component: CustomSegmentColorsView,

  props: {
    textColor,
  },
})

export const CustomSegmentStops = () => ({
  Usage: `
    <Speedometer
      needleHeightRatio={0.7}
      maxSegmentLabels={5}
      segments={3}
      customSegmentStops={[0, 500, 750, 900, 1000]}
      segmentColors={['firebrick', 'tomato', 'gold', 'limegreen']}
      value={333}
    />
    <Speedometer
      forceRender={true}
      maxSegmentLabels={1}
      customSegmentStops={[500, 777, 1000]}
      segmentColors={['#5959ac', '#AAA']}
      needleColor={'#5959ac'}
      currentValueText={'Current Value: \${value}'}
      minValue={500}
      maxValue={1000}
      value={777}
    />
    <Speedometer
      forceRender={true}
      maxSegmentLabels={1}
      segmentColors={['tomato', 'gold']}
      needleColor={'tomato'}
      currentValueText={'Current Value: \${value}'}
      minValue={-120}
      maxValue={0}
      value={-100}
      customSegmentStops={[-120, -100, 0]}
    />
  `,
  Component: CustomSegmentStopsView,
  props: {
    textColor,
  },
})

export const FluidWidth = () => ({
  Usage: `
    <div style=" width: 500px; height: 300px; ">
      <Speedometer
        fluidWidth={true}
        minValue={100}
        maxValue={500}
        value={473}
        needleColor="steelblue"
      />
    </div>
  `,
  Component: FluidWidthView,
  props: {
    textColor,
  },
})

export const NeedleTransitionDuration = () => ({
  Usage: `
    <Speedometer
      value={333}
      needleColor="steelblue"
      needleTransitionDuration={4000}
      needleTransition="easeElastic"
    />
  `,
  Component: Speedometer,
  props: {
    value: 333,
    needleColor: "steelblue",
    needleTransitionDuration: 4000,
    needleTransition: "easeElastic",
    textColor,
  },
})

export const ForceRender = () => ({
  Usage: `
  
  `,
  Component: ForceRenderView,
  props: {
    textColor,
  },
})

export const ConfiguringTheFormatForValuesDisplayed = () => ({
  Usage: `
    <Speedometer
      maxValue={150}
      value={70.7}
      valueFormat={"d"}
      customSegmentStops={[0, 50, 70, 90, 150]}
      segmentColors={["#bf616a", "#d08770", "#ebcb8b", "#a3be8c"]}
    />
    <Speedometer
      maxValue={150}
      value={70.7}
      segments={5}
      valueFormat={"d"}
    />
  `,
  Component: ConfigureFormatValuesView,
  props: {
    textColor,
  },
})

export const CustomCurrentValueText = () => ({
  Usage: `
    <ReactSpeedometer
      value={333}
      needleColor="steelblue"
      needleTransitionDuration={4000}
      needleTransition="easeElastic"
      currentValueText="Current Value: \${value}"
    />
  `,
  Component: Speedometer,
  props: {
    value: 333,
    needleTransitionDuration: 4000,
    needleTransition: "easeElastic",
    currentValueText: "Current Value: ${value}",
    textColor,
  },
})

export const CustomCurrentValuePlaceholderStyleForEgValue = () => ({
  Usage: `
    <Speedometer
      value={333}
      needleColor="steelblue"
      needleTransitionDuration={4000}
      needleTransition="easeElastic"
      currentValueText="Current Value: #{value}"
      currentValuePlaceholderStyle={"#{value}"}
    />
  `,
  Component: Speedometer,
  props: {
    value: 333,
    needleTransitionDuration: 4000,
    needleTransition: "easeElastic",
    currentValueText: "Current Value: #{value}",
    currentValuePlaceholderStyle: "#{value}",
    textColor,
  },
})

export const ConfigureNeedleLengthAndFontSizes = () => ({
  Usage: `
    <Speedometer
      value={333}
      needleHeightRatio={0.5}
      labelFontSize={"15px"}
      valueTextFontSize={"23px"}
    />
  `,
  Component: Speedometer,
  props: {
    value: 333,
    needleHeightRatio: 0.5,
    labelFontSize: "15px",
    valueTextFontSize: "23px",
    textColor,
  },
})

export const GradientEffectWithLargeNumberOfSegmentsAndMaxSegmentLabelsConfig = () => ({
  Usage: `
    <Speedometer
      needleHeightRatio={0.7}
      maxSegmentLabels={5}
      segments={5555}
      value={333}
    />
  `,
  Component: Speedometer,
  props: {
    needleHeightRatio: 0.7,
    maxSegmentLabels: 5,
    segments: 5555,
    value: 333,
    textColor,
  },
})

export const NoSegmentLabels = () => ({
  Usage: `
    <Speedometer
      maxSegmentLabels={0}
      segments={111}
    />

    <Speedometer
      maxSegmentLabels={0}
      segments={4}
      value={333}
      startColor={"#2E3440"}
      endColor={"#4C566A"}
      needleColor="#D8DEE9"
    />
  `,
  Component: NoSegmentLabelsView,
  props: {
    textColor,
  },
})

export const CustomizeFontSizesAndSpacing = () => ({
  Usage: `
    <Speedometer
      value={333}
      labelFontSize={"31px"}
      valueTextFontSize={"37px"}
      paddingHorizontal={17}
      paddingVertical={17}
      currentValueText={"Value: \${value}"}
    />
  `,
  Component: Speedometer,
  props: {
    value: 333,
    labelFontSize: "31px",
    valueTextFontSize: "37px",
    paddingHorizontal: 17,
    paddingVertical: 17,
    currentValueText: "Value: ${value}",
    textColor,
  },
})
