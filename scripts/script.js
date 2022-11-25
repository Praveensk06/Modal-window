// store buttons  variables

// button 1
const getBtn1 = document.getElementById('btn-1');

const getModal = document.getElementById('modal');

const getBtnCls =document.getElementById('btn-close');

// button  2
const getBtn2 = document.getElementById('btn-2');

const getModal2 = document.getElementById('modal2');

const getBtnCls2 =document.getElementById('btn-close2');

// button 3
const getBtn3 = document.getElementById('btn-3');

const getModal3 = document.getElementById('modal3');

const getBtnCls3 =document.getElementById('btn-close3');


// function
function openModal(){
  getModal.classList.remove('close')
  getModal.classList.add('open')
}

function closeModal(){
  getModal.classList.add('close')
  getModal.classList.remove('open')


}


// event listeners btn1
getBtn1.addEventListener('click',function(){
 openModal()
});

getBtnCls.addEventListener('click',function(){
  closeModal()
});

// event listeners btn2

getBtn2.addEventListener('click',function(){
 openModal()
});

getBtnCls2.addEventListener('click',function(){
 closeModal()
});

// event listeners btn3

getBtn3.addEventListener('click',function(){
openModal()
});

getBtnCls3.addEventListener('click',function(){
closeModal()

});

// event listeners escape btn
window.addEventListener('keydown', function(event){
  if(event.key === 'Escape'){
    getModal.classList.add('close')
    getModal.classList.remove('open')

    
  }

});

