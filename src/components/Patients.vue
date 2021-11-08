<template>
  <div class="header">
    <div>First / Last Names</div>
    <div>Age</div>
    <div>Gender</div>
    <div>Phone</div>
    <div>Address</div>
  </div>
  <patient-item
    v-for="patient in patients"
    :key="patient.id"
    :patient="patient"
  />
</template>

<script>
import PatientItem from "@/components/PatientItem.vue";

export default {
  props: ["patients"],
  components: {
    PatientItem,
  },
};
</script>

<style>
.header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 3fr;
  background: #000;
  color: white;
  font-weight: 600;
  padding: 7px 4px;
}
</style>