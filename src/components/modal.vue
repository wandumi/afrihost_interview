<template>
    <div>
        <!-- <button class="button button1" @click.prevent="modalClick">Back {{ showModal }}</button> -->
      <!-- modal - must sit outside main page layout -->
        <div class="flex modal modal--align">
            <div class="modal__container">

                <a class="modal__close modal__close--x"  aria-hidden="true" @click="closeModal">&#x2715;</a>

                <div class="modal__header">
                    
                        <h1>Project Rollback</h1>
                   
                        <p>Choose a Deployment to rollback to</p>
                    
                </div>


                <div class="modal__body">
                    
                    <ul>
                            <li>
                                <span>Product ID </span> 

                                <button type="button" class="button button1">View On</button>

                                <span>20: 52</span>

                                <span>09 20</span>
                            </li>

                            <li>
                                <span>Product ID </span> 

                                <button type="button" class="button button1">View On</button>

                                <span>20: 52</span>

                                <span>09 20</span>
                            </li>

                            <li>
                                <span>Product ID </span> 

                                <button type="button" class="button button1">View On</button>

                                <span>20: 52</span>

                                <span>09 20</span>
                            </li>

                            <li>
                                <span>Product ID </span> 

                                <button type="button" class="button button1">View On</button>

                                <span>20: 52</span>

                                <span>09 20</span>
                            </li>
                            
                    </ul>
                    
                </div>

                <div class="modal__footer">
                    <button class="button button-footer button1" @click="closeModal">Back</button>
                    <button class="button button-footer button2">Next</button>
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
        
       
        // data() {
        //     return {
        //        showModal : false
        //     }
        // },
        
        methods:{
            closeModal(){
                this.$emit('close-modal');
            }
        }
        
       
    }
</script>

<style scoped>
    @font-face {
        font-family: 'Montserrat-Light';
        src: url('~@/assets/Fonts/Montserrat-Light.otf');
        font-weight: lighter;
        font-style: lighter;
    }

    * {
        margin: 0;
        padding: 0;
    }


    .flex { 
        display: flex; 
        align-items: center;
        justify-content: space-around; 
        font-family: Montserrat-Light;

        
    }

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
        max-height: 500px;
        
        margin: 12px;
        background:rgb(23, 27, 38);
    }
    
    .modal__close--x {
        font-size: 10px; 
        position: absolute;
        top: 10px;
        right: 15px;
        padding: 10px;
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

    .modal__header {
        
        width: 400px;
        line-height: 1.2;
        text-align: center;
        margin:50px  auto 10px;

    }

    .modal__header h1 {
        font-size: 24px;
        color:salmon;
    }

    .modal__header p {
        font-size: 14px;
        color:#cdddff;
    }

    .modal__body {
        padding: 10px 60px; 
    }

    .modal__body ul {
      list-style: none;
      
    }


    .modal__body li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      padding: 15px;
      border-radius: 10px;
      font-size: 10px;
      background-color: rgb(23, 39, 53);
      color:#cdddff;
    }

    .modal__footer {
      display: flex;
      justify-content: space-between;
      align-self: flex-end;
      margin-top: 30px;
      padding: 15px;
      background-color: rgb(33, 39, 53);
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

    .button-footer {
        padding-left:40px;
        padding-right:40px;
    }
    .button1 {
      background-color: rgb(44, 51, 67);
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