<script>
  import { onMount } from "svelte"
  import { format as d3Format } from "d3-format"
  import { select as d3Select } from "d3-selection"

  import {
    getConfig,
    updateConfig,
    defaultSegmentValueFormatter,
    DEFAULT_PROPS,
  } from "./core/config/index.js"
  import { render, update } from "./core/render/index.js"

  // START: Runes
  const props = $props()
  // state
  const forceRender = $state.raw(props.forceRender)
  let isMounted = $state(false)
  //END: Runes

  // state that is passed to core, hence not runes/reactive
  let config = {}
  let PROPS = {}
  // list of d3 refs to share within the components
  let d3_refs = {
    pointer: false,
    current_value_text: false,
  }

  let gaugeDiv = undefined

  // ******************************************************

  // Util functions

  // just mount the gauge (without updating)
  function mountGauge() {
    PROPS = Object.assign({}, DEFAULT_PROPS, props)

    config = getConfig({
      PROPS,
      parentWidth: gaugeDiv.parentNode.clientWidth,
      parentHeight: gaugeDiv.parentNode.clientHeight,
    })
    // remove existing gauge (if any)
    d3Select(gaugeDiv).select("svg").remove()

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

  $effect(() => {
    // mount the gauge again on update if 'forceRender'
    if (isMounted && forceRender) {
      mountGauge()
    }

    // track if component mounted state
    if (!isMounted) {
      isMounted = true
    }

    // update props and config
    PROPS = Object.assign({}, DEFAULT_PROPS, props)

    // new config
    config = updateConfig(config, {
      labelFormat: d3Format(PROPS.valueFormat || ""),
      // consider custom value formatter if changed
      segmentValueFormatter:
        PROPS.segmentValueFormatter || defaultSegmentValueFormatter,
      currentValueText: PROPS.currentValueText || "${value}",
    })

    updateGauge()
  })
</script>

<!-- Speedometer markup -->
<div bind:this={gaugeDiv} id="speedo-container"></div>
