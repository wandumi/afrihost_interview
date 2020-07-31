<template>
  <div id="app">
    <modal />
    <router-view />
  </div>
</template>

<script>
    // @ is an alias to /src
    import Modal from "@/components/modal.vue";


    export default {
      name: 'Home',
      components: {
        Modal
      },

      data() {
        return {
          showModal : false
        }
      },

      methods: {
          toggleModal(){
              this.showModal = !this.showModal;
          }
      }
      
    }
</script>
<style>
   @font-face {
        font-family: 'Montserrat';
        src: url('~@/assets/Fonts/Montserrat-Regular.otf');
        src: url('~@/assets/Fonts/Montserrat-BoldItalic.otf'),
            url('~@/assets/Fonts/Montserrat-Light.otf') ,
            url('~@/assets/Fonts/Montserrat-Italic.otf') ,
            url('~@/assets/Fonts/Montserrat-Medium.otf'),
            url('~@/assets/Fonts/Montserrat-SemiBold.otf'),
            url('~@/assets/Fonts/Montserrat-Thin.otf'),
            url('~@/assets/Fonts/Montserrat-ThinItalic.otf');
        font-weight: normal;
        font-style: normal;
    }

   body {
      background: rgb(16, 20, 29);
      font-family: 'Montserrat-Thin';
    }
</style>
