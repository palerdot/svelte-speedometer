declare module "svelte-speedometer" {
  enum Transition {
    easeLinear = "easeLinear",
    easeQuadIn = "easeQuadIn",
    easeQuadOut = "easeQuadOut",
    easeQuadInOut = "easeQuadInOut",
    easeCubicIn = "easeCubicIn",
    easeCubicOut = "easeCubicOut",
    easeCubicInOut = "easeCubicInOut",
    easePolyIn = "easePolyIn",
    easePolyOut = "easePolyOut",
    easePolyInOut = "easePolyInOut",
    easeSinIn = "easeSinIn",
    easeSinOut = "easeSinOut",
    easeSinInOut = "easeSinInOut",
    easeExpIn = "easeExpIn",
    easeExpOut = "easeExpOut",
    easeExpInOut = "easeExpInOut",
    easeCircleIn = "easeCircleIn",
    easeCircleOut = "easeCircleOut",
    easeCircleInOut = "easeCircleInOut",
    easeBounceIn = "easeBounceIn",
    easeBounceOut = "easeBounceOut",
    easeBounceInOut = "easeBounceInOut",
    easeBackIn = "easeBackIn",
    easeBackOut = "easeBackOut",
    easeBackInOut = "easeBackInOut",
    easeElasticIn = "easeElasticIn",
    easeElasticOut = "easeElasticOut",
    easeElasticInOut = "easeElasticInOut",
    easeElastic = "easeElastic",
  }

  enum CustomSegmentLabelPosition {
    Outside = "OUTSIDE",
    Inside = "INSIDE",
  }

  type CustomSegmentLabel = {
    text?: string
    position?: CustomSegmentLabelPosition
    fontSize?: string
    color?: string
  }

  type Props = {
    value?: number

    minValue?: number
    maxValue?: number

    segments?: number
    maxSegmentLabels?: number

    forceRender?: boolean

    width?: number
    height?: number

    dimensionUnit?: string
    fluidWidth?: boolean

    needleColor?: string
    startColor?: string
    endColor?: string
    segmentColors?: string[]

    needleTransition?: string
    needleTransitionDuration?: number
    needleHeightRatio?: number

    ringWidth?: number
    textColor?: string

    valueFormat?: string
    currentValueText?: string
    currentValuePlaceholderStyle?: string

    customSegmentStops?: number[]

    customSegmentLabels?: CustomSegmentLabel[]

    labelFontSize?: string
    valueTextFontSize?: string

    paddingHorizontal?: number
    paddingVertical?: number
  }

  // named exports of all the types
  export { Props, CustomSegmentLabel, CustomSegmentLabelPosition, Transition }

  interface ComponentOptions {
    target: HTMLElement
    anchor?: HTMLElement | null
    props?: {}
    hydrate?: boolean
    intro?: boolean
  }

  interface Component {
    new (options: ComponentOptions): any
    // client-side methods
    $set(props: {}): void
    $on(event: string, callback: (event: CustomEvent) => void): void
    $destroy(): void

    // server-side methods
    render(props?: {}): {
      html: string
      css: { code: string; map: string | null }
      head?: string
    }
  }

  const component: Component
  export default component
}
