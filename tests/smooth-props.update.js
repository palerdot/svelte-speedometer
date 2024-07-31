import { describe, test, expect,afterEach} from "vitest"
import { render, act, cleanup, fireEvent } from "@testing-library/svelte"

import SmoothUpdateComponent from "./SmoothPropUpdate.svelte"

// import validators
import {
  calculateNeedleHeight,
  calculateScale,
  calculateTicks,
  calculateSegmentLabelCount,
} from "../src/core/util"

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

    const { container, getByText } = render(SmoothUpdateComponent, {
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

    const { container, getByText } = render(SmoothUpdateComponent, {
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

  test("value format is updated correctly ", async () => {
    const forceRender = false

    let value = 0
    let updatedValue = 477.7
    let expectedUpdatedValue = 478

    const { container, getByText } = render(SmoothUpdateComponent, {
      value,
      updatedValue,
      buttonText,

      initialColor,
      updatedColor,

      forceRender,

      propsToUpdate: {
        valueFormat: "d",
      },
    })

    let el = container.querySelector("text.current-value")
    const button = getByText(buttonText)

    // firt verify the current value
    expect(el.innerHTML).toEqual(String(value))

    // fire the button to change the value
    await fireEvent.click(button)

    el = container.querySelector("text.current-value")
    expect(el.innerHTML).toEqual(String(expectedUpdatedValue))
  })

  test("should display custom current text value", async () => {
    const forceRender = false

    let value = 333
    let updatedValue = 555
    let currentValueText = "Porumai: ${value}"

    const { container, getByText } = render(SmoothUpdateComponent, {
      value,
      updatedValue,
      buttonText,

      initialColor,
      updatedColor,

      forceRender,

      currentValueText,

      propsToUpdate: {
        currentValueText: "Current Value: ${value}",
      },
    })

    let el = container.querySelector("text.current-value")
    const button = getByText(buttonText)

    // firt verify the current value
    expect(el.innerHTML).toEqual(`Porumai: ${value}`)

    // fire the button to change the value
    await fireEvent.click(button)

    el = container.querySelector("text.current-value")
    expect(el.innerHTML).toEqual(`Current Value: ${updatedValue}`)
  })

  test("should throw error on invalid needle height", () => {
    expect(() =>
      calculateNeedleHeight({ heightRatio: 1.1, radius: 2 })
    ).toThrowError()
    // this one should not throw and should return some value
    expect(() =>
      calculateNeedleHeight({ heightRatio: 0.9, radius: 2 })
    ).not.toThrowError()
    expect(typeof calculateNeedleHeight({ heightRatio: 0.9, radius: 2 })).toBe(
      "number"
    )
  })
})
