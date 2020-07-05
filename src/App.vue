<template>
  <div id="app">
    <app-header></app-header>
    <div class="d-flex flex-row pl-5 py-3 channel-logos">
      <div class="row pl-5 py-3">
        <div v-for="(channel, number) in channels" :key="number">
          <app-card :name="channel.name" :number="channel.number" :image="channel.image"></app-card>
        </div>
      </div>
    </div>
    <div>
      <div class="row">
        <div class="col-md-2 offset-3 vol-modal">
          <app-volume-modal></app-volume-modal>
        </div>
        <div class="row">
          <div
            class="col-md-12 current-ch"
            :style="{ visibility: chWasClicked }"
          >- {{ currentCh }} -</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import Volume from "./components/Volume.vue";
import { eventBus } from "./main";

export default {
  components: {
    appHeader: Header,
    appCard: Card,
    appVolumeModal: Volume
  },
  data() {
    return {
      channels: [
        { name: "Kan 11", number: 1, image: "kanlogo.png" },
        { name: "Keshet HD", number: 2, image: "keshethd.jpg" },
        { name: "Reshet HD", number: 3, image: "reshet.jpg" },
        { name: "Radio 99", number: 4, image: "radio99.jpg" },
        { name: "Makan 33", number: 5, image: "makan.png" },
        { name: "Galgalatz", number: 6, image: "galgalatz.jpg" },
        { name: "Radio 88", number: 7, image: "radio88.jpg" },
        { name: "I24 News", number: 8, image: "i24.png" },
        { name: "Aljazeerah", number: 9, image: "aljazeera.jpg" },
        { name: "Eurosport", number: 10, image: "eurosport.png" },
        { name: "Sky News", number: 11, image: "skynews.png" }
      ],
      currentCh: 0,
      chWasClicked: "hidden",
      tvPower: false
    };
  },
  mounted() {
    eventBus.$on("tv-power", isOn => {
      this.tvPower = !this.tvPower;
      eventBus.$on("ch-clicked", ch => {
        if (this.tvPower) {
          this.currentCh = ch;
          this.chWasClicked = "visible";
          setTimeout(() => {
            this.chWasClicked = "hidden";
          }, 2000);
        }
      });
    });
  }
};
</script>

<style>
.head {
  padding: 1%;
  background-color: black;
  color: white;
}

.head .logo {
  font-size: 200%;
  margin-left: 5%;
  font-weight: 900;
}

.head .volume,
.head .channels,
.head .stats {
  font-size: 150%;
  margin-top: 0.5%;
}

.head .volume:hover,
.head .channels:hover,
.head .stats:hover {
  text-shadow: 1px 1px gray;
  color: white;
  opacity: 0.9;
  cursor: pointer;
}

.card {
  margin: 2.5% 0;
  border-radius: 0;
  box-shadow: 1px 1px lightgray;
}

.channel-logos .card:hover {
  cursor: pointer;
  box-shadow: 2px 3px 2px 1px darkorchid;
  border-radius: 1%;
  opacity: 0.9;
}

.card-header,
.card-footer {
  background-color: black;
  color: white;
  padding: 0;
  border-radius: 0 !important;
}

.card-footer {
  padding: 2%;
}

.card-header p {
  margin-top: 5%;
  margin-left: 10%;
  font-weight: bold;
}

.card-header {
  padding: 0;
  line-height: 1;
}

.card-body {
  padding: 0;
}

.vol-modal {
  z-index: 10;
  top: -15vh;
  right: -15vw;
}

.fa-minus,
.fa-plus {
  font-size: 300%;
}

.fa-minus:hover,
.fa-plus:hover {
  opacity: 0.6;
  cursor: pointer;
}

.current-ch {
  font-size: 2000%;
  font-weight: bold;
  z-index: 6;
  top: -40vh;
  opacity: 0.9;
}

.hdmi:hover,
.fa-power-off:hover {
  cursor: pointer;
  opacity: 0.8;
}

.fa-power-off {
  font-size: 150%;
  line-height: 1.5;
}
</style>