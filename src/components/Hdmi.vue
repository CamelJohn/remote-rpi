<template>
  <div>
      <div class="hdmi">
          <i class="fa fa-tv" :style="{ disabled: isOn }" @click="hdmiUp(isOn)"></i>
      </div>
  </div>
</template>

<script>
import { eventBus } from '../main';
import axios from 'axios';

export default {
    data: function() {
        return {
            isOn: false
        }
    },
    methods: {
        hdmiUp: (isOn) => {            
            if (isOn) {
                eventBus.$emit('hdmiUp', true);
            }
        }
    }, 
    mounted: function() {
        eventBus.$on('powerStatus', (status) => {
                this.isOn = status;
            })
    }
}
</script>

<style scoped>
.hdmi {
        background-color:  dimgrey;
        background: dimgrey;
        border-radius: 5rem;
        height: 2.5rem;
        width: 2.5rem;
        text-align: center;
    }
    .fa-tv {
        color: white;
        margin-top: 0.9rem;
        font-size: 0.9rem;
    }

    .hdmi:hover {
        opacity: 0.7;
        cursor: pointer;
    }
</style>