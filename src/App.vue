<template>
  <div class="container">
    <patient-filters @filter="changeFilter" />
    <patients :patients="getPatients" />
  </div>
</template>

<script>
import Patients from '@/components/Patients.vue'
import PatientFilters from '@/components/PatientFilters.vue'
import getPatients from '@/data/getPatients'
import { more30Filter, less63andStrengthMore8Filter } from '@/utils/filters'

export default {
  name: 'App',
  data() {
    return {
      patients: [],
      filter: 'all'
    }
  },
  components: { 
    PatientFilters, Patients
  },
  methods: {
    changeFilter(filter) {
      this.filter = filter
    }
  },
  computed: {
    getPatients() {
      switch(this.filter) {
        case 'all': 
          return this.patients
        case 'older30':
          return more30Filter(this.patients)
        case 'less63':
          return less63andStrengthMore8Filter(this.patients)
      }

      return this.patients
    }
  },
  async mounted() {
    const patients = await getPatients()
    this.patients = patients
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.container {
  width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
