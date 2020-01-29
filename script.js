let Words = new Request('word.json')
fetch(Words)
   .then(function(resp){
      return resp.json();
   })
   .then(function(data){


      /* BASIC */
      const basic = data.basic
      const inventoryBasic = document.querySelector('#basic')
      let inputBasic = '';
      inventoryBasic.innerHTML = '';
      basic.forEach(b => {
         inputBasic += `<li class="scene">
         <div class="movie" onclick="return true">
            <div class="poster"><p style='margin-top: 15px;'>${b.english}</p></div>
            <div class="info">
               <header>
                  <h1 class='h1'>${b.italianS}</h1>
               </header>
            </div>
         </div>
      </li>`
      }); inventoryBasic.innerHTML = inputBasic;

      /* ANIMAL */
      const animal = data.animals;
      const inventoryAnimal = document.querySelector('#animal');
      let inputAnimal = '';
      inventoryAnimal.innerHTML = '';
      animal.forEach(a => {
         inputAnimal += `<li class="scene">
         <div class="movie" onclick="return true">
            <div class="poster"><p style='margin-top: 15px;'>${a.english}</p></div>
            <div class="info">
               <header>
                  <h1 class='h1'>${a.italian}</h1>
               </header>
            </div>
         </div>
      </li>`
      }); inventoryAnimal.innerHTML = inputAnimal;

      /* FOOD */
      const food = data.foods;
      const inventoryFood = document.querySelector('#food');
      let inputFood = '';
      inventoryFood.innerHTML = '';
      food.forEach(f => {
         inputFood += `<li class="scene">
         <div class="movie" onclick="return true">
            <div class="poster"><p style='margin-top: 15px;'>${f.english}</p></div>
            <div class="info">
               <header>
                  <h1 class='h1'>${f.italian}</h1>
               </header>
            </div>
         </div>
      </li>`
      }); inventoryFood.innerHTML = inputFood;

      /* CLOTHING */
      const cloths = data.clothing;
      const inventoryClo = document.querySelector('#clothing');
      let inputClo = '';
      inventoryClo.innerHTML = '';
      cloths.forEach(c => {
         inputClo += `<li class="scene">
         <div class="movie" onclick="return true">
            <div class="poster"><p style='margin-top: 15px;'>${c.english}</p></div>
            <div class="info">
               <header>
                  <h1 class='h1'>${c.italian}</h1>
               </header>
            </div>
         </div>
      </li>`
      }); 
      inventoryClo.innerHTML = inputClo;

      /* COLORS */
      const color = data.color;
      const inventoryCol = document.querySelector('#color');
      let inputCol = '';
      inventoryCol.innerHTML = '';
      color.forEach(co => {
         inputCol += `<li class="scene">
         <div class="movie" onclick="return true">
            <div class="poster" style='background-color: ${co.english}'><p style='margin-top: 15px;'>${co.english}</p></div>
            <div class="info">
               <header>
                  <h1 class='h1'>${co.italian}</h1>
               </header>
            </div>
         </div>
      </li>`
      }); 
      inventoryCol.innerHTML = inputCol;

      /* TIME */
      const time = data.time;
      const inventoryTime = document.querySelector('#time');
      let inputTime = '';
      inventoryTime.innerHTML = '';
      time.forEach(t => {
         inputTime += `<li class="scene">
         <div class="movie" onclick="return true">
            <div class="poster"><p style='margin-top: 15px;'>${t.english}</p></div>
            <div class="info">
               <header>
                  <h1 class='h1'>${t.italian}</h1>
               </header>
            </div>
         </div>
      </li>`
      }); 
      inventoryTime.innerHTML = inputTime;

      /* TIME */
      const family = data.family;
      const inventoryFam = document.querySelector('#family');
      let inputFam = '';
      inventoryFam.innerHTML = '';
      family.forEach(f => {
         inputFam += `<li class="scene">
         <div class="movie" onclick="return true">
            <div class="poster"><p style='margin-top: 15px;'>${f.english}</p></div>
            <div class="info">
               <header>
                  <h1 class='h1'>${f.italian}</h1>
               </header>
            </div>
         </div>
      </li>`
      }); inventoryFam.innerHTML = inputFam;

      /* IRREGULAR */
      const irregular = data.irregular;
      const inventoryIrregular = document.querySelector('#iverb')
      let inputIrregular = '';
      inventoryIrregular.innerHTML = '';
      irregular.forEach(i => {
         inputIrregular += `<li class="scene">
         <div class="movie" onclick="return true">
            <div class="poster"><p style='margin-top: 15px;'>${i.english}</p></div>
            <div class="info">
               <header>
                  <h2 class='h1-v'>${i.italian}</h2>
                  <div class='verbs'>
                     <p class='font-v'>${i.io}</p>
                     <p class='font-v'>${i.noi}</p>
                     <p class='font-v'>${i.tu}</p>
                     <p class='font-v'>${i.voi}</p>
                     <p class='font-v'>${i.lue}</p>
                     <p class='font-v'>${i.loro}</p>
                  </div>
               </header>
            </div>
         </div>
      </li>`
      }); inventoryIrregular.innerHTML = inputIrregular;

      /* ARE VERBS */
      const are = data.are;
      const inventoryAre = document.querySelector('#are')
      let inputAre = '';
      inventoryAre.innerHTML = '';
      are.forEach(a => {
         inputAre += `<li class="scene">
         <div class="movie" onclick="return true">
            <div class="poster"><p style='margin-top: 15px;'>${a.english}</p></div>
            <div class="info">
               <header>
                  <h2 class='h1-v'>${a.italian}</h2>
                  <div class='verbs'>
                     <p class='font-v'>${a.italian.split(`are`).join(`o`)}</p>
                     <p class='font-v'>${a.italian.split(`are`).join(`iamo`)}</p>
                     <p class='font-v'>${a.italian.split(`are`).join(`i`)}</p>
                     <p class='font-v'>${a.italian.split(`are`).join(`ate`)}</p>
                     <p class='font-v'>${a.italian.split(`are`).join(`a`)}</p>
                     <p class='font-v'>${a.italian.split(`are`).join(`ano`)}</p>
                  </div>
               </header>
            </div>
         </div>
      </li>`
      }); inventoryAre.innerHTML = inputAre;

      /* ERE VERBS */
      const ere = data.ere;
      const inventoryEre = document.querySelector('#ere')
      let inputEre = '';
      inventoryEre.innerHTML = '';
      ere.forEach(e => {
         inputEre += `<li class="scene">
         <div class="movie" onclick="return true">
            <div class="poster"><p style='margin-top: 15px;'>${e.english}</p></div>
            <div class="info">
               <header>
                  <h2 class='h1-v'>${e.italian}</h2>
                  <div class='verbs'>
                     <p class='font-v'>${e.italian.split(`ere`).join(`o`)}</p>
                     <p class='font-v'>${e.italian.split(`ere`).join(`iamo`)}</p>
                     <p class='font-v'>${e.italian.split(`ere`).join(`i`)}</p>
                     <p class='font-v'>${e.italian.split(`ere`).join(`ete`)}</p>
                     <p class='font-v'>${e.italian.split(`ere`).join(`e`)}</p>
                     <p class='font-v'>${e.italian.split(`ere`).join(`ono`)}</p>
                  </div>
               </header>
            </div>
         </div>
      </li>`
      }); inventoryEre.innerHTML = inputEre;

      /* IRE VERBS */
      const ire = data.ire;
      const inventoryIre = document.querySelector('#ire')
      let inputIre = '';
      inventoryIre.innerHTML = '';
      ire.forEach(i => {
         inputIre += `<li class="scene">
         <div class="movie" onclick="return true">
            <div class="poster"><p style='margin-top: 15px;'>${i.english}</p></div>
            <div class="info">
               <header>
                  <h2 class='h1-v'>${i.italian}</h2>
                  <div class='verbs'>
                     <p class='font-v'>${i.italian == "capire" || i.italian == "finire" ? i.italian.split(`ire`).join(`isco`) : i.italian.split(`ire`).join(`o`)}</p>
                     <p class='font-v'>${i.italian.split(`ire`).join(`iamo`)}</p>
                     <p class='font-v'>${i.italian == "capire" || i.italian == "finire" ? i.italian.split(`ire`).join(`isci`) : i.italian.split(`ire`).join(`i`)}</p>
                     <p class='font-v'>${i.italian.split(`ire`).join(`ite`)}</p>
                     <p class='font-v'>${i.italian == "capire" || i.italian == "finire" ? i.italian.split(`ire`).join(`isce`) : i.italian.split(`ire`).join(`e`)}</p>
                     <p class='font-v'>${i.italian == "capire" || i.italian == "finire" ? i.italian.split(`ire`).join(`iscono`) : i.italian.split(`ire`).join(`ono`)}</p>
                  </div>
               </header>
            </div>
         </div>
      </li>`
      }); inventoryIre.innerHTML = inputIre;

      /* ADJECTIVES -O */
      const adjectives1 = data.adjectives1
      const inventoryAdj1 = document.querySelector('#adj1')
      let inputAdj1 = '';
      inventoryAdj1.innerHTML = '';
      adjectives1.forEach(a => {
         inputAdj1 += `<li class="scene">
         <div class="movie" onclick="return true">
            <div class="poster"><p style='margin-top: 15px;'>${a.english}</p></div>
            <div class="info">
               <header>
                  <h1 class='h1'>${a.italianM}</h1>
               </header>
            </div>
         </div>
      </li>`
      }); inventoryAdj1.innerHTML = inputAdj1;

      /* ADJECTIVES -E */
      const adjectives2 = data.adjectives2
      const inventoryAdj2 = document.querySelector('#adj2')
      let inputAdj2 = '';
      inventoryAdj2.innerHTML = '';
      adjectives2.forEach(a => {
         inputAdj2 += `<li class="scene">
         <div class="movie" onclick="return true">
            <div class="poster"><p style='margin-top: 15px;'>${a.english}</p></div>
            <div class="info">
               <header>
                  <h1 class='h1'>${a.italianM}</h1>
               </header>
            </div>
         </div>
      </li>`
      }); inventoryAdj2.innerHTML = inputAdj2;

   })

/* OPENING AND CLOSING ACCORDIONS */
$(document).ready(function(){
   $('#plus').click(function(){
      $('#iverb').toggleClass('open')
   })
   $('#plus2').click(function(){
      $('#are').toggleClass('open')
   })
   $('#plus3').click(function(){
      $('#ere').toggleClass('open')
   })
   $('#plus4').click(function(){
      $('#ire').toggleClass('open')
   })
   $('#plus5').click(function(){
      $('#basic').toggleClass('open')
   })
   $('#plus6').click(function(){
      $('#animal').toggleClass('open')
   })
   $('#plus7').click(function(){
      $('#food').toggleClass('open')
   })
   $('#plus8').click(function(){
      $('#clothing').toggleClass('open')
   })
   $('#plus9').click(function(){
      $('#color').toggleClass('open')
   })
   $('#plus10').click(function(){
      $('#time').toggleClass('open')
   })
   $('#plus11').click(function(){
      $('#adj1').toggleClass('open')
   })
   $('#plus12').click(function(){
      $('#adj2').toggleClass('open')
   })
   $('#plus13').click(function(){
      $('#family').toggleClass('open')
   })
})

/* ADD COLOR TO NAV AFTER SCROLL */
$(document).ready(function(){
   $(window).scroll(function(){
      const scroll = $(window).scrollTop();
      if (scroll > 650) {
         $(".navbar").css("background" , "teal").css('transition', '500ms');
      }
      else { $(".navbar").css("background" , "transparent")}
   })
})


/* DARK MODE */
const checkbox = document.querySelector('input[name=theme]').addEventListener('change', function(){
   if(this.checked) {
      trans()
      document.documentElement.setAttribute('data-theme', 'dark')
   } else {
      trans()
      document.documentElement.setAttribute('data-theme', 'light')
   }
});

let trans = () => {
   document.documentElement.classList.add('transition');
   window.setTimeout(() => {
      document.documentElement.classList.remove('transition')
   }, 1000)
}
