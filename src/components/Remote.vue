<template>
    <div>
        <div class="col-md-5 remote my-5">
             <div class="row">
                 <div class="col-md-1 offset-1 my-5">
                     <app-hdmi></app-hdmi>
                 </div>
                 <div class="col-md-1 offset-6 my-5">
                     <app-power></app-power>
                 </div>
             </div>
             <div class="row">

             </div>
             <div class="row">
                 <div class="col-md-6">
                     <app-circle></app-circle>
                 </div>
              </div>
        </div>
    </div>
</template>

<script>

import Power from './Power.vue';
import Hdmi from './Hdmi.vue';
import Circle from './Circle.vue';
 
export default {
    components: {
        appPower: Power,
        appHdmi: Hdmi,
        appCircle: Circle
     }
}
</script>

<style scoped>
    .remote {
        background:  rgba(0, 0, 0, 0.75);
        box-shadow: 3px 3px rgb(75, 82, 88);
        height: 50vh;
        border-radius: 1.5rem;
     }
</style>