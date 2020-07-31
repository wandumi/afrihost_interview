<template>
    <div class="header">

        <a href="" class="logoLink">
          <span id="logoText">Iploy</span>
        </a>


        <div class="login-area">
           
           <div id="login-name">
             <h4>wandumi sichali</h4>
             <h6>Frontend Developer</h6>
           </div>
           <a href="">
             <img src="" alt="login" id="login-image">
           </a>

           <ul class="login-buttons">
             <li>
               <a href="">
                   <i class="fa fa-bell"></i>
               </a>
             </li>
             <li>
               <a href="">
                  <i class="fa fa-bolt"></i>
               </a>
             </li>
           </ul>

        </div>

        <ul class="first-buttons">
          <li>
            <a href="">
             <i class="fa fa-home"></i>
            </a>
          </li>
          <li>
            <a href="">
            <i class="fa fa-clipboard"></i>
            </a>
          </li>
        </ul>

        <div class="searchInput">
          
          <input type="search" name="search" id="search" placeholder="Build project build by person name">
        </div>

       
      </div>
</template>

<script>
  export default {
     name: "header"
  }
</script>
<style scoped>
    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    @font-face {
      font-family: 'Montserrat-Bold';
      src: url(~@/assets/Fonts/Montserrat-Bold.otf) format('font-type');
    }

    
    #wrapper {
      height: 100vh;
    }

    .header {
      width: 100%;
      background-color: rgb(23, 27, 38);
      height: 10vh;
    }

    .logoText {
      text-align: center;
    }

    .logoLink {
      text-decoration: none;
      color: #fff;
      margin-left: 20px;

    }

  
    .header ul  {
      float: left;
      list-style: none;
      
    }

    .header li {
      float: left;
    }

    .header li a {
      border-radius: 5px;
      color: #fff;
    }


    .searchInput {
      position: absolute;
      top: 20px;
      left:450px;
      width: 400px;
    }

    .searchInput input[type=search] {
      float: left;
      width: 100%;
      padding: 8px;
      border: none;
      border-radius: 10px;
      background-color: rgb(16, 20, 29);
    }

    /* .searchInput:before {
      content: "&#xf00c;";
      font-family: 'FontAwesome';
    } */

    .login-area {
      float: right;
    }

    #login-name, #login-image {
      float: left;
      
    }

    #login-image {
      width: 50px;
      height: 50px;
      border: 1px solid #fff;
      margin-right:  30px;
  
      
    }

    #login-name {
      padding:20px 10px;
      text-align: center;
      line-height: 10px;
      color: #fff;
    }

    .first-buttons {
      position: absolute;
      top: 20px;
      left: 200px;
    }

    .first-buttons li:first-child {
      border-radius: 5px;
      padding: 10px 15px;
      background-color: rgb(33, 39, 53);
      margin-right: 10px;
    }

    .first-buttons li:last-child {
      border: 1px solid rgb(255, 74, 107);
      border-radius: 10px;
      padding: 10px 15px;
      background-color: rgb(16, 20, 29);
    }

    
    
    .login-buttons {
      position: absolute;
      top: 20px;
      right: 280px;
      /* padding: 10px; */
    }

    .login-buttons li:first-child {
      border-radius: 5px;
     padding: 10px 15px;
      background-color: rgb(33, 39, 53);
      margin-right: 10px;
    }

    .login-buttons li:last-child {
      border-radius: 5px;
      padding: 10px 15px;
      background-color: rgb(16, 20, 29);
    
    }
  /* End of the Header styles */
    .clearboth {
      clear: both;
    }

</style>
