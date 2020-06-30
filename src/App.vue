<template>
   <div class="conatianer">
     <app-header></app-header>
     <router-view></router-view>
     <div class="row">
       <div class="col-md-4 offset-2">
         <app-remote></app-remote>
       </div>
       <div class="col-md-3 my-5">
         <app-display></app-display>
       </div>
     </div>
   </div>
</template>

<script>

import Header from './components/Header.vue';
import Display from './components/Display.vue';
import Remote from './components/Remote.vue';

export default {
  components: {
    appHeader: Header,
    appDisplay: Display,
    appRemote: Remote
  }
}
</script>

<style>

</style>
