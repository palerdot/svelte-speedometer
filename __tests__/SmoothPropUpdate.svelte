<script>
  import Speedometer from "../src"
  import each from "lodash-es/each"

  export let value = 0
  export let updatedValue = 0

  export let initialColor = "red"
  export let updatedColor = "blue"

  export let buttonText = ""

  export let forceRender = false

  // IMPORTANT: give actual defaults to Svelte defaults
  export let valueFormat = ""
  export let currentValueText = "${value}"
  export let currentValuePlaceholderStyle = "${value}"

  export let propsToUpdate = {}

  let startColor = initialColor
  let updatedStartColor = updatedColor

  function _updateValue() {
    value = updatedValue
    startColor = updatedStartColor

    // if props to update is given; try to update them to
    each(propsToUpdate, (value, prop) => {
      if (prop === "valueFormat") {
        valueFormat = value
      }

      if (prop === "currentValueText") {
        currentValueText = value
      }
    })
  }
</script>

<div>
  <Speedometer
    {value}
    {startColor}
    {forceRender}
    {valueFormat}
    {currentValueText}
    {currentValuePlaceholderStyle}
  />
  <button on:click={_updateValue}>{buttonText}</button>
</div>
