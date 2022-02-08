Array.prototype.combine = function(arr) {
    return this.map(function(v,i) {
        return [v, arr[i]];
    });
};

const engArr = new Array (
    'various',    'image',     'master',     'announced',
    'through',    'generally', 'gasoline',   'labor',
    'eventually', 'provide',   'shape',      'differ',
    'worried',    'garage',    'people',     'planning',
    'torn',       'carefully', 'experiment', 'especially',
    'may',        'chamber',   'complex',    'member',
    'principle',  'ring',      'writing',    'little',
    'stomach',    'sitting',   'throat',     'missing',
    'dozen',      'toward',    'close',      'thus',
    'grew',       'help',      'explore',    'perfect',
    'related',    'depth',     'top',        'lesson',
    'satisfied',  'enemy',     'over',       'yourself',
    'per',        'complex'
  );

  const finArr = new Array (
    'erilainen','kuva','mestari','ilmoitettu',
    'kautta','yleensä','bensiini', 'työvoima',
    'mahdollisesti','antaa','muoto','eroavat',
    'Huolestunut', 'autotalli', 'ihmiset', 'suunnittelu',
    'revitty', 'huolellisesti', 'kokeilu', 'erityisesti',
    'toukokuu','kammio','kompleksi','jäsen',
    'periaate','rengas','kirjoittaminen','pieni',
    'vatsa', 'istuminen', 'kurkku', 'puuttuu',
    'dozen', 'kohti', 'lähellä', 'siis',
    'Kasvoi', 'auta', 'tutkia', 'täydellinen',
   'sukua', 'syvyys', 'top', 'oppitunti',
   'tyytyväinen','vihollinen', 'yli', 'itse',
   'kohden', 'monimutkainen'
  );


const fullArr = engArr.combine(finArr);

 function eng_fin(array){
    let eng = document.getElementById("word").value.toUpperCase();
    for(let i = 0; i<50; i++){
      if(array[i][0].toUpperCase() == eng){
        return document.getElementById("translation").innerHTML = array[i][1];
      }
      else {
        document.getElementById("translation").innerHTML = "no translations found"
      }
    }
  }

  function fin_eng(array){
    let eng = document.getElementById("word").value.toUpperCase();
    for(let i = 0; i<50; i++){
      if(array[i][1].toUpperCase() == eng){
        return document.getElementById("translation").innerHTML = array[i][0];
      }
      else {
        document.getElementById("translation").innerHTML = "ei löytynyt käännöstä"
      }
    }
  }
  let text = "";
  let text2 ="";
  function onload1(){
    for (let i=0; i < finArr.length; i++){
      text += finArr[i] + "<br>";
    }
    return document.getElementById("wo").innerHTML = text;
  }
  function languageChoser(){
      let x = document.getElementById('chooseLanguage').value;
      if (x == "finEng"){
        document.getElementById( "btn" ).setAttribute( "onClick", "javascript: fin_eng(fullArr);" );
        document.getElementById("btn").innerHTML = "Hae käännös"
        for (let i=0; i < finArr.length; i++){
          text += finArr[i] + "<br>";
        }
        document.getElementById("wo").innerHTML = text;
      }
      else {
        document.getElementById( "btn" ).setAttribute( "onClick", "javascript: eng_fin(fullArr);" );
        document.getElementById("btn").innerHTML = "Get translation"
        for (let i=0; i < engArr.length; i++){
          text2 += engArr[i] + "<br>";
        }
        document.getElementById("wo").innerHTML = text2;
      }
  }


  // CODE BELOW THIS IS NOT RELEVANT TO THE TASK JUST FOR CSS

  const toggleBtn = document.querySelector('.sidebar-toggle');
  const closeBtn = document.querySelector('.closeBtn');
  const sidebar = document.querySelector('.sidebar');
  
  toggleBtn.addEventListener("click", function (){
     /* if (sidebar.classList.contains('show-sidebar')){
          sidebar.classList.remove('show-sidebar')
      } else {
          sidebar.classList.add('show-sidebar')
      } */
      sidebar.classList.toggle('show-sidebar')
  })
  
  closeBtn.addEventListener('click', function (){
      sidebar.classList.remove('show-sidebar')
  });

