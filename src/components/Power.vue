<template>
  <div>
      <div class="power">
          <i class="fa fa-power-off" @click="logClick"></i>
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
            baseUrl: `http://localhost:8080/rpi/APIv1`
        }
    },
    methods: {
        logClick: function() {
            this.isOn = !this.isOn;
            let status = this.isOn ? 'on' : 'off';
            axios.post(`${this.baseUrl}/set/tv/${status}/exec`);
            eventBus.$emit('powerStatus', this.isOn);
        }
    }
}
</script>

<style scoped>
    .power {
        background-color: crimson;
        background:crimson;
        border-radius: 5rem;
        height: 2.5rem;
        width: 2.5rem;
        text-align: center;
    }
    .fa-power-off {
        color: white;
        margin-top: 0.7rem;
    }

    .power:hover {
        opacity: 0.7;
        cursor: pointer;
    }
</style>