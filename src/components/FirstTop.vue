<template>
    <div class="first__row">

           <div class="first__leftside first__second">

              <div class="leftside__top">

                <a href="" class="leftside__link">
                  <i class="fa fa-angle-left"></i>
                </a>

              </div>

           </div>

            <div class="first__rightside first__second">

            
              <div class="second__row">
                  
                    <h3 class="text-color">Dploy Script</h3>
                    <button class="first__button3">
                      Edit Script
                      <i class="fa fa-pencil"></i>
                    </button>
               
              </div>

            
            </div>

          
        </div>
</template>

<script>
export default {
    name: "FirstTop"
}
</script>

<style scoped>

    .first__row {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: wrap;
      
    }

    .first__leftside {
      flex: 0 0 20%; /*grow shrink flex basis */
      background-color: rgb(23, 27, 38);
      margin-right: 10px;
      padding: 10px;
    }

    .first__second {
      background-color: transparent;
      margin-top: 30px;
    }

    .first_leftside__top {
       background-color: transparent;
    }

    .first__rightside {
      flex: 1;
      background-color: rgb(23, 27, 38);
      padding: 10px;
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

    .second__row {
      background-color: transparent;
    }

   
     .first__button3 {
      color: #cdddff;
      background-color: #252b39;
      padding: 10px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }


</style>