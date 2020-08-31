let myRequest = new Request('word.json');
const counter = document.querySelector('#correct');
const streaker = document.querySelector('#streak');
const percent = document.querySelector('#percentage');
const total = document.querySelector('#total');
const englishWord = document.querySelector('#randomE');
const italianWord = document.querySelector('#randomI');
const translate = document.querySelector('#translate');

fetch(myRequest)
   .then(res =>  res.json())
   .then(data => {
      let word = 0;
      let count = 0;
      let streak = 0;
      let percentage = 0;
      counter.innerHTML = count; 
      streaker.innerHTML = streak; 
      percent.innerHTML = percentage + '%';
      const randomItem = data[Math.floor(Math.random() * data.length)]
      const randomEnglishWord = randomItem[Object.keys(randomItem)[0]] 
      let randomItalianWord = randomItem[Object.keys(randomItem)[1]]        
      englishWord.innerHTML = randomEnglishWord;
      
      Translate = enable => translate.disabled = enable;
      
      translate.addEventListener('click', () => {
         word ++;
         total.innerHTML = word;
         const input = document.querySelector('#input').value;
         if(input){
            if(input === randomItalianWord.toLowerCase()){
               italianWord.innerHTML = `<i class="fa fa-check fa-lg"></i>`;
               count ++; streak ++;
               streaker.innerHTML = streak;
               counter.innerHTML = count; 
            } else {
               italianWord.innerHTML = `<i class="fa fa-times fa-lg"></i> ${randomItalianWord}`;
               streak = 0;
               streaker.innerHTML = streak;
            }
         }
         else {
            window.alert('Input something dwg');
         }
         randomItalianWord = '';
         percent.innerHTML = Math.round(count/word * 100) + ' %';

         Translate(true);
      });
      
      //Next word
      document.querySelector('#next').addEventListener('click', function(){
         input.value = '';
         const randomItem = data[Math.floor(Math.random() * data.length)];
         const randomEnglishWord = randomItem[Object.keys(randomItem)[0]];
         randomItalianWord = randomItem[Object.keys(randomItem)[1]];
         
         englishWord.innerHTML = randomEnglishWord;
         input ? italianWord.innerHTML = '' : italianWord.innerHTML = `<i class="fa fa-times fa-lg"></i> ${randomItalianWord}`;

         Translate(false);
      }) 
   })