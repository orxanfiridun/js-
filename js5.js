Math.random() * Math.random() * Math.random();

function Random() {
   return Math.random() * Math.random() * Math.random();

}

document.querySelector('#qeydet').addEventListener('click', function (e) {
   document.querySelector('table').classList.remove('gizlet');
   let ad = document.querySelector('#ad').value;
   let soyad = document.querySelector('#soyad').value;
   let ders = document.querySelector('#ders').value;
   let il = document.querySelector('#il').value;

   let randomId = "";

   if (e.target.dataset.randomid.length > 0) {
      randomId = e.target.dataset.randomid;
      let trlar = document.querySelectorAll('tr');
      for (let i = 0; i < trlar.length; i++) {
         let setir = trlar[i];
         if (setir.id == randomId) {
            let tdler = setir.querySelectorAll('td');
            tdler[0].innerHTML = document.querySelector('#ad').value;
            tdler[1].innerHTML = document.querySelector('#soyad').value;
            tdler[2].innerHTML = document.querySelector('#ders').value;
            tdler[3].innerHTML = document.querySelector('#il').value;
            document.querySelector('#qeydet').dataset.randomid = "";
         }

      }
   } else {
      randomId = Random();
      let yazi = ` <tr id="${randomId}">
    <td id="ad" >${ad}</td>
    <td id="soyad">${soyad}</td>
     <td id="ders">${ders}</td>
      <td id="il">${il}</td>
   </tr>
   
   `;
      document.querySelector('tbody').innerHTML += yazi;
   }






   document.querySelector('#ad').value = "";
   document.querySelector('#soyad').value = "";
   document.querySelector('#il').value = "";
   document.querySelector('#ders').value = "";
});


document.querySelector('#qeydet').addEventListener('click', function () {
   document.querySelector('thead').classList.add('mavi-basliq')
});

document.querySelector('tbody').addEventListener('dblclick', function (e) {

   let td = e.target;
   let tr = td.parentElement;
   let tdler = tr.children;
   document.querySelector('#ad').value = tdler[0].innerHTML;
   document.querySelector('#soyad').value = tdler[1].innerHTML;
   document.querySelector('#ders').value = tdler[2].innerHTML;
   document.querySelector('#il').value = tdler[3].innerHTML;

   document.querySelector('#qeydet').dataset.randomid = tr.id;

});

