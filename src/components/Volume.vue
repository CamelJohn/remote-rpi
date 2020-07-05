<template>
  <div>
    <div :style="{visibility: vol}" class="vol-ctrl">
      <div class="card">
        <div class="card-header text-center p-3">
          <div class="row ml-3">
            <h3>Volume Control</h3>
          </div>
        </div>
        <div class="card-body">
          <div class="row p-5 d-flex flex-row">
            <div class="col-md-1">
              <i class="fa fa-plus" @click="volUp"></i>
            </div>
            <div class="col-md-4 offset-4">
              <h1>{{ currentVol }}</h1>
            </div>
            <div class="col-md-1 offset-1">
              <i class="fa fa-minus" @click="volDown"></i>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2 offset-8 p-3">
              <div class="btn btn-dark" @click="clickedVol">
                <h4>Close</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
import { setVol } from "../js/axios";
export default {
  data() {
    return {
      vol: "hidden",
      currentVol: 0
    };
  },
  mounted() {
    eventBus.$on("volume-clicked", state => {
      this.vol = state ? "visible" : "hidden";
      console.log(this.vol);
    });
  },
  methods: {
    volUp: function() {
      if (this.currentVol < 100) {
        this.currentVol++;
      } else {
        this.currentVol = 100;
      }
      setVol(this.currentVol, "Up");
      eventBus.$emit('vol-changed', this.currentVol);
    },
    volDown: function() {
      if (this.currentVol > 0) {
        this.currentVol--;
      } else {
        this.currentVol = 0;
      }
      setVol(this.currentVol, "Down");
        eventBus.$emit('vol-changed', this.currentVol);
    },
    clickedVol: function() {
      this.vol = this.vol == "hidden" ? "visible" : "hidden";
    }
  }
};
</script>

<style>
</style>