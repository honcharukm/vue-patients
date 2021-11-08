<template>
  <div class="medicine-item">
      <div><strong>Name: </strong>{{ medicine.medicationName }}</div>
      <div><strong>Strength: </strong>{{ medicine.strength }}</div>
      <div><strong>Expire date: </strong>{{ medicine.expDate }}</div>
      <div><strong>Unit: </strong>{{ medicine.unit }}</div>
  </div>
</template>

<script>
export default {
    props: ['medicine']
}
</script>

<style>
  .medicine-item {
    border: 1px solid black;
    padding: 7px;
    margin: 0 5px 5px 0;
    font-size: 14px;
  }
</style>