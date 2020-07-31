<template>
  <div id="wrapper">

      <div class="header">

        <a href="" class="logoLink">
          <span id="logoText">Iploy</span>
        </a>

        
        <ul class="nav__links">
          <li>
            <router-link to="Modal">
             <i class="fa fa-home"></i>
            </router-link> 
          </li>
          <li class="nav__clipboard">
            <a href="">
            <i class="fa fa-clipboard"></i>
            </a>
          </li>
        </ul>

        <div class="searchInput">
          
          <input type="search" name="search" id="search" placeholder="Build project build by person name">
        </div>

        <ul class="nav__links">
          <li>
            <a href="">
                <i class="fa fa-bell"></i>
            </a>
            <span class="nav__links_notifications">2</span>
          </li>
          <li>
            <a href="" class="nav__bolt">
              <i class="fa fa-bolt"></i>
            </a>
            <span class="nav__links_notifications">X</span>
          </li>
        </ul>


        <div class="login-area">
           
            <div class="profile-text">
      
              <h4>wandumi sichali</h4>
              <h6>Frontend Developer</h6>
            </div>
            
            
            <img src="@/assets/dammy.png" alt="login" id="login-image" >
              

        </div>


       
      </div>

      <div class="mainContent">




        <div class="row">

           <div class="leftside second">

              <div class="leftside__top">

                <a href="" class="leftside__link">
                  <i class="fa fa-angle-left"></i>
                </a>

              </div>

           </div>

            <div class="rightside second">

            
              <div class="second__row">
                  
                    <h3 class="text-color">Dploy Script</h3>
                    <button class="button3">
                      Edit Script
                      <i class="fa fa-pencil"></i>
                    </button>
               
              </div>

            
            </div>

          
        </div>

        <div class="row">

          <div class="leftside">
            
            <div class="leftside_header">
                <img src="@/assets/dammy.png" alt="secondLogo" id="secondLogo">
                <h3>FIXED LTE</h3>
                <h4>MODE CMS |</h4>
            </div>

            <ul>
              <li>
                <span>Product ID </span> 
                <button type="button" class="view__on">View On</button>
              </li>
              <li>
                <span>Auto Deploy </span> 
                <label class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
                </label>
              </li>
              <li>
                <span>Stack Notifications </span> 
                <label class="switch">
                  <input type="checkbox">
                  <span class="slider round"></span>
                </label>
              </li>
            </ul>

          </div>

          <div class="rightside">
           
                <div class="leftside__body">
                  <textarea name="script" id="script" cols="30" rows="10"></textarea>
                </div>

          
          </div>

        </div>
        


        <div class="row">
           <div class="leftside second">

              <div class="leftside__buttons">
                <button class="button button1" @click.prevent="toggleModal" >

                    Rollback 
                 
                </button>
                <button class="button button2">Deploy Now</button>
              </div>

              <div class="leftside__footer">
                <a href="">Archive project</a>
              </div>

           </div>

            <div class="rightside second">

             
                  <div class="second__row">
        
                    <h3 class="text-color">Deployments</h3>
                    <button class="button3">
                      View Deployment History
                      <i class="fa fa-clock-o"></i>
                    </button>

                  </div>

              
                  <div class=" secondright__side__half">
                      <div class="first_column">
                        <div class="first_column_1">
                            <h3>Froddo Baggins</h3>
                            <p class="second_space">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias  </p>
                            
                        </div>
                        <div class="second_column_2">
                            <p> 12:51 | Jul-31</p>
                            <p class="second_space">
                                <button type="buttton" class="button4">#a7bcdf</button>
                            </p>
                        </div>
                      </div>
                      <div class="second_column">
                        
                        <h4 class="failed">FAILED</h4>
                        <div class="first_column_1">
                            <h3>Bilbbo Baggins</h3>
                            <p class="second_space">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur molestias  </p>
                            
                        </div>
                        <div class="second_column_2">
                            <p> 12:51 | Jul-31</p>
                            <p class="second_space">
                                <button type="buttton"  class="button4">#a7bcdf</button>
                            </p>
                        </div>
                      </div>

                  </div>
                  

              

            
            </div>

          
        </div>

        
      </div>
     
     <Modal v-show="showModal" />
   
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

  // created() {
  //   this.showModal;
  // },

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
<style scoped>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    
    #wrapper {
      height: 100vh;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(23, 27, 38);
      height: 10vh;
      margin-bottom: 50px;
      
    }

    .logoLink {
      color: #fff;
      font-style: italic;
      font-size: 18px;
      text-align: center;
      text-decoration: none;
      line-height: 1.2;
      width: 100px;
    }

    .login-area {
      /* justify-content: flex-end; */
      width: 300px;
    }

    .profile-text {
      display: inline-block;
      align-items: stretch;
      width: 200px;
      color: #cdddff;
      font-size: 9px;
      text-align: right;
      padding-right: 10px;
    }

    #login-image {
      width: 50px;
      height: 40px;
      border: 1px solid #fff;
      color: #fff;
      border-radius: 10px;
    }


    .nav__links {
       list-style: none;
       position: relative;

    }

    .nav__links li {
      display: inline-block;
      padding: 0 10px;
      border-radius: 5px;
    }

    .nav__links a {
      color: #cdddff;
    }


    .nav__links li:first-child {
      background-color: rgb(33, 39, 53);
      padding: 10px;
      margin-right: 10px;
    }

    .nav__links li:last-child {
      border-radius: 5px;
      padding: 10px;
      background-color: rgb(16, 20, 29);
    }

    .nav__clipboard {
      border: 1px solid #ff795b;
      padding: 5px;
      
    }

    .nav__clipboard a {
      color:#ff795b
    }

    .searchInput {
       width: 300px;

    }

    .searchInput input[type=search] {
      width: 100%;
      padding: 8px;
      border: none;
      border-radius: 10px;
      background-color: rgb(16, 20, 29);
      text-align: center;
    }

    .login-name {
      width: 300px;
      float: left;
    }

    .nav__links_notifications {
      font-size: .7rem;
      background-color: seashell;
      border-radius: 50%;
      width: 15px;
      height: 15px;
      position: absolute;
      top: 0;
      text-align: center;
      /* right: 1rem; */
    }

    /* End of the Header */
    /* Start of the main Content */
    .mainContent {
      margin-top: 50px;
      margin-bottom: 20px;
    }
    .row {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      
    }

    #secondLogo {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      margin-top: -60px;
      margin-bottom: 20px;
    }

    .leftside {
      flex: 0 0 20%; /*grow shrink flex basis */
      background-color: rgb(23, 27, 38);
      margin-right: 10px;
      padding: 10px;
    }

    .rightside {
      flex: 1;
      background-color: rgb(23, 27, 38);
      padding: 10px;
    }

    .leftside ul {
      list-style: none;
      
    }

    .leftside li {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      padding: 15px;
      border-radius: 10px;
      font-size: 12px;
      background-color: rgb(37, 43, 57);
      color:#cdddff;
    }

    
    .button {
      border: 1px solid #fff;
      background-color: transparent;
      text-align: center;
      line-height: 1.2;
      cursor: pointer;
    }

    .leftside__buttons {
      display: flex;
      justify-content: space-between;
    }

    .leftside__link {
      text-decoration: none;
      text-align: center;
      font-size: 15px;
      margin-top: 10px;
      text-transform: uppercase;
      color:#cdddff;
      background-color: rgb(37, 43, 57);
      padding: 10px 20px;
      border-radius: 5px;

    }

    .second {
      background-color: transparent;
      margin-top: 30px;
    }

    .second__row {
      background-color: transparent;
    }


    .leftside__top {
       background-color: transparent;
    }

    .rightside__header {
      background-color: transparent;
    }

    .text-color {
      color:#ff795b;
      font-size: 24px;
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
    }

    .button3 {
      color: #cdddff;
      background-color: #252b39;
      padding: 10px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }

    .view__on {
      color: #cdddff;
      background-color: rgb(30, 34, 46);
      padding: 5px 20px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      border: 1px solid #cdddff;
    }

    .leftside__footer {
      margin-top: 50px;
      text-align: center;
      
       
    }

    .leftside__footer a {
      color: #cdddff;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 10px;
    }

    #script {
      background-color: #171b26;
      width: 100%;
      height: 50vh;
      border: none;
    }

    .second__row {
      display: flex;
      justify-content: space-between;
    }

    .leftside_header {
      display: flex;
      align-items: center;
      flex-direction: column;
      color: #cdddff;
      font-family: "Montserrat-Thin";
      font-style: italic;
      margin-bottom: 40px;
    }

    .leftside_header h3 {
      font-size: 18px;
      line-height: 1.2;
    }

    .leftside_header h4 {
      font-size: 10px;
    }

    .second_logo{
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background-color: -webkit-linear-gradient(left, rgba(122, 114, 236, 0.11), rgba(31, 31, 248, 0.356));
    }

    /*Switch */
    .switch {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 20px;
    }

    .switch input { 
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgb(16, 20, 29);
      -webkit-transition: .4s;
      transition: .4s;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 15px;
      width: 15px;
      left: 4px;
      bottom: 3px;
      background-color: #cdddff;
      -webkit-transition: .4s;
      transition: .4s;
    }

    

    input:checked + .slider {
      background-color: rgb(16, 20, 29);
    }

    input:focus + .slider {
      box-shadow: 0 0 1px rgb(16, 20, 29);
    }

    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }

    /* Rounded sliders */
    .slider.round {
      border-radius: 30px;
    }

    .slider.round:before {
      border-radius: 50%;
    }
    
    /* Second Row */
    .secondright__side__half {
      display: flex;
      flex-direction: row;
      margin-top: 20px;
      color: #cdddff;
    }

    .first_column {
      display: flex;
      justify-content: space-evenly;
      flex-direction: row;

      
      margin-right: 10px;
      padding: 10px;
      background-color: rgb(23, 27, 38);
      border: 1px solid #252B39;
      border-radius: 10px;
    }

    .second_column {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
  
      padding: 20px 10px;
      background-color: rgb(23, 27, 38);
      border: 1px solid #ff795b;
      border-radius: 10px;

      padding-top: 10px;

      position: relative
    }

    .first_column_1 {
      width: 50%;
      position: relative;
    }

    .second_column_2 {
      width: 50%;
    }

    .second_space {
      padding-top: 10px;
    }

    .button4 {
      padding: 15px 50px;
      background-color: #252b39;
      border: none;
      border-radius: 10px;
      color: #cdddff  ;
      cursor: pointer;
    }

    .failed {
      background-color: #ff795b;
      position: absolute;
      top: 0;
      right: 1px;
      color: #000;
      font-size: 12px;
      padding: 5px;
      border-radius: 0 10px 0 10px;

    }
</style>
