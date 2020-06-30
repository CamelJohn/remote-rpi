<template>
  <div>
      <div class="circle">
          <div class="row">
            <div class="col-md-1 offset-5 my-1">
              <i class="fa fa-angle-up" @click="changeVolume('Up')"></i>
            </div>
          </div>
          <div class="row middle">
            <div class="col-md-1  offset-1">
              <i class="fa fa-angle-left" @click="changeChannelTo('up')"></i>
            </div>
            <div class="col-md-1 offset-7">
              <i class="fa fa-angle-right" @click="changeChannelTo('down')"></i>
            </div>
          </div>
          <div class="row">
            <div class="col-md-1 offset-5 bottom">
              <i class="fa fa-angle-down" @click="changeVolume('Down')"></i>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { eventBus } from '../main';
import axios from 'axios';
export default {
  data: function() {
    return {
      isOn: false,
      baseUrl: `http://localhost:8080/rpi/APIv1`,
      currentChannel: 1
    }
  },
  methods: {
    changeVolume (command) {axios.post(`${this.baseUrl}/set/volume/${command}/exec`)},
    //changeVolumeTo = (command, volNum) => axios.post(`${this.baseUrl}/set/volume/${command}/to/exec`, { args: volNum }),
    changeChannelTo (command) {  
           
      if (this.currentChannel < 1 || this.currentChannel > 14) {
        this.currentChannel = 1;
      } else {
        if (command === 'up') {
        this.currentChannel+=1;
      } else {
        this.currentChannel-=1;
        }
      }      
      axios.post(`${this.baseUrl}/set/tv/stream`, {args: this.currentChannel }),
      eventBus.$emit('changedChannel', this.currentChannel)
      }
  },
   mounted: function() {
     this.currentChannel = 1;
        eventBus.$on('powerStatus', (status) => {
                this.isOn = status;
            })
    }
}
</script>

<style scoped>
     .circle {
       /* border: solid gray 2px; */
       border-radius: 100%;
       height: 15rem;
       width: 15rem;
       /* box-shadow: 2px 2px gray; */
       background-color: black;
     }
     .fa-angle-up {
       color: white;
       font-size: 2rem;
       /* margin-top: 1rem; */
     }
     .fa-angle-down {
       color: white;
       font-size: 2rem;
       /* margin-top: 9rem; */
     }
     .fa-angle-left {
       color: white;
       font-size: 2rem;
       /* margin-top: 1rem; */
     }
     .fa-angle-right {
       color: white;
       font-size: 2rem;
       /* margin-top: 1rem; */
     }

     .fa:hover {
       cursor: pointer;
       opacity: 0.8;
     }

     .middle {
       margin-top: 4rem;
     }

     .bottom {
       margin-top: 4rem;
     }
</style>