<template>
  <div class="filters">
    <input
      type="radio"
      id="one"
      name="filter"
      value="all"
      @change="changeFilter"
      checked
    />
    <label for="one"> All patients </label>
    <input
      type="radio"
      name="filter"
      id="two"
      value="older30"
      @change="changeFilter"
    />
    <label for="two"> Older 30 </label>
    <input
      type="radio"
      name="filter"
      id="three"
      value="less63"
      @change="changeFilter"
    />
    <label for="three"> Less 63 old with medicine's strength more 8 </label>
  </div>
</template>

<script>
export default {
  methods: {
    changeFilter(event) {
      const { value } = event.target
      this.$emit('filter', value)
    }
  }
};
</script>

<style scoped>
.filters {
  padding: 10px 0;
  margin-bottom: 15px;
}
input[type=radio] {
  display: none;
}
input[type=radio]:checked + label {
  font-weight: 800;
}
label {
  margin-right: 10px;
}
</style>