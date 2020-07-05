<template>
  <div>
     <div class="row d-flex flex-row">
       <div class="col-md-12 head">
         <div class="row d-flex flex-row">
           <div class="col-md-4 logo">
           RPI-Remote
         </div>
         <div class="col-md-1 volume" @click="volumeClicked">
           <i class="fa fa-volume-up"></i>
         </div>
         <div class="col-md-2 my-2">
           <h3>current volume: {{ currentVol }}</h3>
         </div>
         <div class="col-md-1 my-2 hdmi" @click="hdmi(1)">
           <h3>HDMI 1</h3>
         </div>
         <div class="col-md-1 my-2 hdmi" @click="hdmi(2)">
           <h3>HDMI 2</h3>
         </div>
         <div class="col-md-1 my-2 hdmi" @click="hdmi(3)">
           <h3>HDMI 3</h3>
         </div>
         <div class="col-md-1 my-2" @click="tvPWR()">
           <i class="fa fa-power-off"></i>
         </div>
         </div>
       </div>
     </div>
  </div>
</template>

<script>
import { eventBus } from '../main';
import { power, setHDMI } from '../js/axios';
export default {
  data() {
    return {
      volClicked: false,
      currentVol: 0,
      isOn: false,
    }
  },
  methods: {
    volumeClicked: function() {
      this.volClicked = !this.volClicked;
      eventBus.$emit('volume-clicked', this.volClicked)
    },
    hdmi(ch) {
      if (this.isOn) {
        eventBus.$emit('hdmi-changed', ch);
        setHDMI(ch);
      }
    },
    tvPWR() {
      this.isOn = !this.isOn;
      power(this.isOn);      
      eventBus.$emit('tv-power', this.isOn);
    }
  },
  mounted() {
    eventBus.$on('vol-changed', vol => {
      this.currentVol = vol;
    })
  }
};
</script>

<style>
</style>