<template>
  <div>
    <div class="card">
      <div class="card-header">
          Display
      </div>
      <div class="card-body">
        <div class="row">
            <p>Power Status: <span :style="{ color: power ? 'seagreen' : 'crimson' }">{{ power ? 'On': 'Off' }}</span></p>
        </div>
        <div class="row">
            <p>Hdmi Channel: {{ power ? currentChannel : '--' }}</p>
        </div>
        <div class="row">
            <p>Channel number : {{ power ? currentStream : '--' }}</p>
        </div>
        <div class="row">
            <p>Channel Name : {{ power ? channels[currentStream-1] : '--' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main';
export default {
    data: function() {
        return {
            power: false,
            currentChannel: 1,
            currentStream: 1,
            channels: [
                'kan11', 
                'keshet HD', 
                'reshset HD', 
                'radio 99', 
                'radio 23', 
                'mkan', 
                'galgalatz', 
                'radio 88', 
                'radio mkan', 
                'reshet HD (hot)', 
                'reshet HD (hot)', 
                'I24 news (hot)', 
                'channel 9 (hot)',
                'channel 5 (hot)'
                ]
        }
    },
    mounted() {
        this.currentChannel = 1;
        eventBus.$on('powerStatus', (powerStatus) => {
            this.power = powerStatus;
        }),
        eventBus.$on('hdmiUp', function(status) {
            if (this.currentChannel < 4) {
                this.currentChannel++;
            } else {
                this.currentChannel = 1;
            }
        }),
        eventBus.$on('changedChannel', function(channel) {            
            this.currentStream = channel;
        })
    }
};
</script>

<style scoped>
    .card-header {
        background-color: darkslategrey !important;
        color: white !important;
        font-size: 1.5rem;
    }
    .card {
        height: 50vh;
    }
    div > p {
        margin-left: 1rem;
        font-size: 1.5rem;
    }
</style>
