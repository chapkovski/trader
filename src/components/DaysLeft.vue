
<template>
<v-alert
      outlined
      height="42"
      type="warning"
      :icon="false"
      class="centered-alert mx-1"
    >
      <div> Round: {{day}}</div>
      <span> </span>
    </v-alert>
     
</template>
  
<script>
export default {
    props:['day'],
    data: () => ({
         
    }),
    computed: {
         
    },
}
</script>

