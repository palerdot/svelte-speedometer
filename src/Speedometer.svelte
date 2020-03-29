<script>
  import { onMount, afterUpdate } from "svelte"
  import { format as d3Format, select as d3Select } from "d3"
  import { getConfig, updateConfig, DEFAULT_PROPS } from "./core/config"
  import { render, update } from "./core/render"

  // PROP exports
  export let forceRender = false

  // STATE
  // track if component is mounted
  let isMounted = false

  let config = {}
  let PROPS = {}

  let gaugeDiv = undefined

  // list of d3 refs to share within the components
  let d3_refs = {
    pointer: false,
    current_value_text: false,
  }

  // ******************************************************

  // Util functions

  // just mount the gauge (without updating)
  function mountGauge() {
    PROPS = Object.assign({}, DEFAULT_PROPS, $$restProps)

    config = getConfig({
      PROPS,
      parentWidth: gaugeDiv.parentNode.clientWidth,
      parentHeight: gaugeDiv.parentNode.clientHeight,
    })
    // remove existing gauge (if any)
    d3Select(gaugeDiv)
      .select("svg")
      .remove()

    d3_refs = render({
      container: gaugeDiv,
      config,
    })
  }

  function updateGauge() {
    // updates the readings of the gauge with the current prop value
    // animates between old prop value and current prop value
    update({
      d3_refs,
      newValue: PROPS.value || 0,
      config,
    })
  }

  // Lifecycle functions
  onMount(() => {
    mountGauge()
  })

  afterUpdate(() => {
    // on update, check if 'forceRender' option is present
    if (forceRender) {
      mountGauge()
    }

    // first time when 'afterUpdate' is called it will not be mounted
    if (!isMounted) {
      isMounted = true
      // will use PROPS and config set by 'mountGauge'
    } else {
      // update props and config
      PROPS = Object.assign({}, DEFAULT_PROPS, $$restProps)

      // new config
      config = updateConfig(config, {
        labelFormat: d3Format(PROPS.valueFormat || ""),
        currentValueText: PROPS.currentValueText || "${value}",
      })
    }

    updateGauge()
  })
</script>

<!-- Speedometer markup -->
<div bind:this={gaugeDiv} />
