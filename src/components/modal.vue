<template>
    <div>
      <!-- modal - must sit outside main page layout -->
        <div v-if="showModal"  class="flex align-center align-vert modal modal--align">
            <div class="modal__container">
            <a class="modal__close modal__close--x"  aria-hidden="true">&#x2715;</a>

                <div class="modal__header">
                    <h3>Project Rollback</h3>
                    <span>Choose a deployment to rollback to</span>
                </div>
                <div class="modal__body">
                    
                        <ul>
                            <li>
                                <span>Product ID </span> 

                                <button type="button" class="button3">View On</button>

                                <span>20: 52</span>

                                <span>09 20</span>
                            </li>

                            <li>
                                <span>Product ID </span> 

                                <button type="button" class="button3">View On</button>

                                <span>20: 52</span>

                                <span>09 20</span>
                            </li>

                            <li>
                                <span>Product ID </span> 

                                <button type="button" class="button4">View On</button>

                                <span>20: 52</span>

                                <span>09 20</span>
                            </li>

                            <li>
                                <span>Product ID </span> 

                                <button type="button" class="button4">View On</button>

                                <span>20: 52</span>

                                <span>09 20</span>
                            </li>
                            
                        </ul>
                    
                </div>
                
                <div class="modal__footer">
                    <button class="button button1">Back</button>
                    <button class="button button2">Next</button>
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
        background: rgba(18, 22, 31, 0.8);
        z-index: 999;
    }
    .modal__container {
        position: relative;
        width: 100%;
        max-width: 600px;
        height: 500px;
        padding: 20px;
        /* margin: 12px; */
        background:rgb(23, 27, 38);
    }
    
    .modal__close--x {
        font-size: 10px; 
        position: absolute;
        top: 3px;
        right: 10px;
        border-radius: 50%;
        background-color: rgb(37, 43, 57);
        color:#cdddff;
      
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

    .modal__body ul {
      list-style: none;
      
    }

    .modal__body li {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      padding: 15px;
      border-radius: 10px;
      font-size: 12px;
      background-color: rgb(37, 43, 57);
      color:#cdddff;
    }

    .modal__footer {
      display: flex;
      justify-content: space-between;
      align-self: flex-end;
      margin-top: 60px;
      background-color: rgb(33, 39, 53);
    }

    .modal__header {
        display: flex;
        align-items: center;
        flex-direction: row;
        margin-top: 10px;
    }

    .button {
      padding: 10px 10px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 12px;
      transition-duration: 0.4s;
      cursor: pointer;
      border-radius: 5px;
      padding-left: 30px;
      padding-right: 30px;
    }

    .button1 {
      background-color: #252b39;
      color: #cdddff;
      border:none;
    }

    .button2 {
      color: #cdddff;
      background-color: rgb(30, 34, 46);
      border: 1px solid #cdddff;
      border-radius: 10px;
    }

    .button4 {
      padding: 15px 50px;
      background-color: #252b39;
      border: 1px;
      border-radius: 10px;
      color: #cdddff  ;
      cursor: pointer;
    }
</style>