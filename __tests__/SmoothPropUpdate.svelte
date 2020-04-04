<script>
  import Speedometer from "../src"

  export let value = 0
  export let updatedValue = 0

  export let initialColor = "red"
  export let updatedColor = "blue"

  export let buttonText = ""

  export let forceRender = false

  let startColor = initialColor
  let updatedStartColor = updatedColor

  function _updateValue() {
    value = updatedValue
    startColor = updatedStartColor
  }
</script>

<div>
  <Speedometer {value} {startColor} {forceRender} />
  <button on:click={_updateValue}>{buttonText}</button>
</div>
