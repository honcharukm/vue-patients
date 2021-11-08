<template>
  <article class="patient-item">
    <header class="patient-item__info">
      <div>{{ getNames }}</div>
      <div>
        {{ patient.age }}
      </div>
      <div>{{ patient.gender }}</div>
      <div>{{ patient.phoneNumber }}</div>
      <div>{{ patient.adress }}</div>
    </header>
    <div class="patient-item__medicine">
      <medicine-item
        v-for="medicine in patient.medicines"
        :key="medicine.id"
        :medicine="medicine"
      />
    </div>
  </article>
</template>

<script>
import MedicineItem from "@/components/MedicineItem.vue";

export default {
  props: ["patient"],
  components: {
    MedicineItem,
  },
  computed: {
    getNames() {
      return `${this.patient.name} ${this.patient.lastName}`;
    },
  },
};
</script>

<style>
.patient-item {
  display: flex;
  font-size: 16px;
  font-weight: 500;
  flex-direction: column;
  padding: 7px 0;
  border: 1px solid black;
  margin: 3px 0;
}
.patient-item__info {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 3fr;
  padding: 10px 7px;
}
.patient-item__medicine {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 7px;
}
</style>