import "@testing-library/jest-dom/extend-expect"

import {
  render,
  fireEvent,
  prettyDOM,
  act,
  cleanup,
} from "@testing-library/svelte"

// import validators
import {
  calculateNeedleHeight,
  calculateScale,
  calculateTicks,
  calculateSegmentLabelCount,
} from "../src/core/util"

import Speedometer from "../src/"

// helper function to fetch 'style' attribute from the dom
function _getStyles(container) {
  return container.style._values
}

// helper function to update props?
// https://github.com/testing-library/react-testing-library/issues/65#issuecomment-385529996
const _updateProps = (container, props) =>
  render(Speedometer, {
    target: container,
    props,
  })

describe("svelte-speedometer", () => {
  afterAll(() => {
    cleanup()
  })

  test("should render one parent div component", () => {
    const { container } = render(Speedometer)
    const root = container.firstElementChild.querySelectorAll("div")

    expect(root.length).toEqual(1)
  })

  test("svg.speedometer is present", () => {
    const { container } = render(Speedometer)
    const el = container.querySelectorAll("svg.speedometer")

    expect(el.length).toEqual(1)
  })

  test("by default we should have 5 segments ", () => {
    const { container } = render(Speedometer)
    const el = container.querySelectorAll("path.speedo-segment")
    expect(el.length).toEqual(5)
  })

  test("should have the default text color for current value", () => {
    const { container } = render(Speedometer)
    const el = container.querySelector("text.current-value")

    const styles = _getStyles(el)

    expect(styles["fill"]).toEqual("#666")
  })

  test("should have the text color given by us => steelblue ", () => {
    const textColor = "steelblue"
    const { container } = render(Speedometer, {
      textColor,
    })

    const el = container.querySelector("text.current-value")

    const styles = _getStyles(el)

    expect(styles["fill"]).toEqual(textColor)
  })

  test("should not break on invalid needle transition", () => {
    const { container } = render(Speedometer, {
      needleTransition: "porumaiTransition",
    })
    const el = container.querySelectorAll("path.speedo-segment")
    expect(el.length).toEqual(5)
  })

  test("should correctly take current Value placeholder from passed props", () => {
    const value = 333
    const currentValueText = "#{value}"
    const currentValuePlaceholderStyle = "#{value}"

    const { container } = render(Speedometer, {
      value,
      currentValueText,
      currentValuePlaceholderStyle,
    })

    const el = container.querySelector("text.current-value")

    expect(el.innerHTML).toEqual(String(value))
  })

  test("scale and ticks works properly", () => {
    const min = 0
    const max = 1000
    const segments = 1000
    const max_segment_labels = 10

    const { container } = render(Speedometer, {
      segments,
      maxSegmentLabels: max_segment_labels,
    })

    const scale1 = calculateScale({ min, max, segments })
    const ticks1 = calculateTicks(scale1, { min, max, segments })

    const scale2 = calculateScale({ min, max, segments: max_segment_labels })
    const ticks2 = calculateTicks(scale2, {
      min,
      max,
      segments: max_segment_labels,
    })

    const scale3 = calculateScale({ min, max, segments: 1 })
    const ticks3 = calculateTicks(scale3, { min, max, segments: 1 })

    expect(ticks2.length).toBeLessThan(ticks1.length)
    expect(ticks3.length).toBe(2)

    expect(container.querySelectorAll("text.segment-value").length).toBe(
      ticks2.length
    )
  })

  test("'maxSegmentLabels' config with no labels ", () => {
    const min = 0
    const max = 1000
    let segments = 1000
    let max_segment_labels = 0
    let label_count = calculateSegmentLabelCount({
      maxSegmentLabelCount: max_segment_labels,
      segmentCount: segments,
    })

    const { container } = render(Speedometer, {
      segments,
      maxSegmentLabels: max_segment_labels,
    })

    const scale1 = calculateScale({ min, max, segments })
    const ticks1 = calculateTicks(scale1, { min, max, segments: label_count })

    expect(container.querySelectorAll("text.segment-value").length).toBe(
      max_segment_labels
    )
  })

  test("label and value font sizes", () => {
    const labelFontSize = "15px"
    const valueTextFontSize = "23px"

    const { container } = render(Speedometer, {
      value: 333,
      needleHeightRatio: 0.5,
      labelFontSize,
      valueTextFontSize,
    })

    // get first segment value
    const first_segment_value = container.querySelector("text.segment-value")
    const first_segment_value_styles = _getStyles(first_segment_value)

    // check our font size matches the given value
    expect(first_segment_value_styles["font-size"]).toEqual(labelFontSize)

    // get the current value
    const el = container.querySelector("text.current-value")
    const styles = _getStyles(el)

    expect(styles["font-size"]).toEqual(valueTextFontSize)
  })
})

describe("Custom Segment Colors", () => {
  test("custom segment colors works as expected", () => {
    const segmentColors = ["red", "blue", "green"]

    const { container } = render(Speedometer, {
      segments: 3,
      segmentColors,
    })

    const elements = container.querySelectorAll("path.speedo-segment")

    segmentColors.forEach((color, index) => {
      const el = elements.item(index)

      expect(el.getAttribute("fill")).toEqual(color)
    })
  })

  test("6 custom segment colors", () => {
    const segmentColors = [
      "#e60000",
      "#e67300",
      "#e6e600",
      "#bcf5bc",
      "#228b22",
      "#ff6347",
    ]

    const { container } = render(Speedometer, {
      segments: 6,
      segmentColors,
      minValue: 0,
      maxValue: 10,
      value: 10,
      currentValueText: `1.5%`,
      height: 200,
    })

    const elements = container.querySelectorAll("path.speedo-segment")

    segmentColors.forEach((color, index) => {
      const el = elements.item(index)

      expect(el.getAttribute("fill")).toEqual(color)
    })
  })

  test("custom segment colors with custom segment stops ", () => {
    const segmentColors = ["firebrick", "tomato", "gold", "limegreen"]

    const { container } = render(Speedometer, {
      needleHeightRatio: 0.7,
      maxSegmentLabels: 5,
      segments: 3,
      customSegmentStops: [0, 500, 750, 900, 1000],
      segmentColors,
      value: 333,
    })

    const elements = container.querySelectorAll("path.speedo-segment")

    segmentColors.forEach((color, index) => {
      const el = elements.item(index)

      expect(el.getAttribute("fill")).toEqual(color)
    })
  })
})

describe("Custom segment labels", () => {
  test("custom text labels and value text are shown correctly", () => {
    const currentValueText = "Happiness Level"

    const customSegmentLabels = [
      {
        text: "Very Bad",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "Bad",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "Ok",
        position: "INSIDE",
        color: "#555",
        fontSize: "19px",
      },
      {
        text: "Good",
        position: "INSIDE",
        color: "#555",
      },
      {
        text: "Very Good",
        position: "INSIDE",
        color: "#555",
      },
    ]

    const { container } = render(Speedometer, {
      width: 500,
      needleHeightRatio: 0.7,
      value: 777,
      currentValueText: currentValueText,
      customSegmentLabels: customSegmentLabels,
      ringWidth: 47,
    })

    const textNodes = container.querySelectorAll("text.segment-value")

    customSegmentLabels.forEach((label, index) => {
      const textNode = textNodes.item(index)

      const textValue = textNode.textContent
      // verify our text value matches
      expect(textValue).toEqual(label.text)

      const styles = _getStyles(textNode)
      // verify our label color matches
      expect(styles["fill"]).toEqual(label.color)

      if (label.fontSize) {
        expect(styles["font-size"]).toEqual(label.fontSize)
      }
    })
  })
})
