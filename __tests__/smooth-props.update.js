import SmoothUpdateComponent from "./SmoothPropUpdate.svelte"

import { render, act, cleanup, fireEvent } from "@testing-library/svelte"

describe("svelte-speedometer updates smoothly", () => {
  afterEach(() => {
    cleanup()
  })

  const value = 333
  const updatedValue = 470
  const buttonText = "Update Value"

  const initialColor = "rgb(255, 0, 0)" //red
  const updatedColor = "rgb(0, 0, 255)" // blue

  test("forceRender: OFF => rendering is correct", async () => {
    const forceRender = false

    const { container, getByText, debug } = render(SmoothUpdateComponent, {
      value,
      updatedValue,
      buttonText,

      initialColor,
      updatedColor,

      forceRender,
    })

    let el = container.querySelector("text.current-value")
    const button = getByText(buttonText)

    // firt verify the current value
    expect(el.innerHTML).toEqual(String(value))

    // trigger PROPS update
    await fireEvent.click(button)

    // make sure our value is updated
    el = container.querySelector("text.current-value")
    expect(el.innerHTML).toEqual(String(updatedValue))

    // but not the start color since forceRender is false

    // get the first speedo segment
    const first_speedo_segment = container.querySelector("path.speedo-segment")
    // and make sure we still have the initial color
    expect(first_speedo_segment.getAttribute("fill")).toEqual(initialColor)
  })

  test("forceRender: ON => rendering is correct", async () => {
    const forceRender = true

    const { container, getByText, debug } = render(SmoothUpdateComponent, {
      value,
      updatedValue,
      buttonText,

      initialColor,
      updatedColor,

      forceRender,
    })

    let el = container.querySelector("text.current-value")
    const button = getByText(buttonText)

    // firt verify the current value
    expect(el.innerHTML).toEqual(String(value))

    // trigger PROPS update
    await fireEvent.click(button)

    // make sure our value is updated
    el = container.querySelector("text.current-value")
    expect(el.innerHTML).toEqual(String(updatedValue))

    // and start color is also updated

    // get the first speedo segment
    const first_speedo_segment = container.querySelector("path.speedo-segment")
    // and make sure we still have the initial color
    expect(first_speedo_segment.getAttribute("fill")).toEqual(updatedColor)
  })
})
