
<template>
    <v-card  class='ma-1'>
        <v-card-text>
            Round:
                   <transition
            mode="out-in"
            name="custom-classes-transition"
            enter-active-class="animate__animated animate__fadeInUp"
            leave-active-class="animate__animated animate__fadeOutUp"
          >
            <v-chip  color="primary" :key='day'>
                {{day}}
            </v-chip>
                   </transition>
        </v-card-text>
    

    </v-card>
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

