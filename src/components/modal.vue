<template>
    <div>
      <!-- modal - must sit outside main page layout -->
        <div v-if="showModal" class="flex align-center align-vert modal modal--align">
            <div class="modal__container">
            <a class="modal__close modal__close--x"  aria-hidden="true">&#x2715;</a>

                <div class="modal__header">
                    <h3>Project Rollback</h3>
                    <span>Choose a deployment to rollback to</span>
                </div>
                <div class="modal__body">
                    <div class="row">
                        <div>
                            Holding
                        </div>
                        <div>
                            <button>#a75623</button>
                        </div>
                        <div class="modal__date">
                            <div>20:20</div>
                            <div>25 09</div>
                        </div>
                    </div>
                </div>
                
                <div class="modal__footer">
                    <button class="modal__close">Cancel link</button>
                </div>
            </div>
        </div>
        <!-- / modal -->

        <!-- <button @click.prevent="toggleModal">Show Modal</button> -->
                
    </div>
</template>

<script>
    export default {
        name: "modal",
        
       
        data() {
            return {
               showModal : false
            }
        },

        // methods: {
        //     toggleModal(){
        //         this.showModal = !this.showModal;
        //     }
        // }
        
       
    }
</script>

<style scoped>

    
   
    .flex { display: flex; }

    .align-center { justify-content: center; }
    .align-vert,.align-vert.align-center { align-items: center; }

    .modal--hide { display: flex; } /* classes fired by js for animation control */

    /* This is on the wrapper for the whole modal */
    .modal--align {
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(18, 22, 31, 0.9);
        z-index: 999;
    }

    .modal__container {
        position: relative;
        width: 100%;
        max-width: 600px;
        max-height: 800px;
        padding: 20px;
        margin: 12px;
        background: #fff;
    }


    .modal__close--x {
        font-size: 30px; 
        position: absolute;
        top: 3px;
        right: 10px;
    }


    .modal__close--x:hover {
        cursor: pointer;
    }


    .modal.modal--show {
        animation: modal-open 0.3s;
    }

    @keyframes modal-open {
        0%    { opacity: 0; }
        100%  { opacity: 1; }
    }

    /* Close */
    .modal.modal--hide {
        animation: modal-close 0.3s;
    }

    @keyframes modal-close {
        0%    { opacity: 1; }
        100%  { opacity: 0; }
    }
</style>