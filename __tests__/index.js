import "@testing-library/jest-dom/extend-expect"

import {
  render,
  fireEvent,
  prettyDOM,
  act,
  cleanup,
} from "@testing-library/svelte"

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
})
