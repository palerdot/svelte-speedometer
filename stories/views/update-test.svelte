<script>
  import { onMount, onDestroy } from "svelte"
  import Speedometer from "../../src/Speedometer.svelte"

  let value = 333
  let timer_switch = false

  const timer = setInterval(() => {
    value = timer_switch ? 555 : 333
    timer_switch = !timer_switch
  }, 1111)

  onDestroy(() => {
    clearInterval(timer)
  })
</script>

<Speedometer {value} />
