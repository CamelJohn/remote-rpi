<template>
  <div class="col-md-12 my-3">
    <div class="card" @click="channelClicked(number)">
      <div class="card-header">
        <p>{{ name }}</p>
      </div>
      <div class="card-body">
        <img :src="require(`../assets/${image}`)" width="220px" height="120px" alt />
      </div>
      <div class="card-footer">
        <div class="card-text text-right card-background">
          (
          <i>
            <b>{{ number }}</b>
          </i> )
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { sendChannel } from "../js/axios.js";
import { eventBus } from "../main";
export default {
  data() {
    return {
      currentChannel: 0,
      tvPower: false
    };
  },
  props: ["name", "image", "number"],
  methods: {
    channelClicked(number) {
      if (this.tvPower) {
        if (this.currentChannel != number) {
          sendChannel(number);
          this.currentChannel = number;
        }
        eventBus.$emit("ch-clicked", number);
      }
    }
  },
  mounted() {
    eventBus.$on("tv-power", isOn => {
      this.tvPower = isOn;
    });
  }
};
</script>

<style>
</style>