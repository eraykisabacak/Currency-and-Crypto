<template>
  <span class="loader" v-if="Object.keys(data).length === 0"></span>
</template>

<script>
export default {
  props: ['data']
}
</script>
