// https://www.omnicalculator.com/chemistry/bond-order#bond-order-formula-molecular-orbital-theory

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const bondorderRadio = document.getElementById('bondorderRadio');
const bondingelectronsRadio = document.getElementById('bondingelectronsRadio');
const antibondingelectronsRadio = document.getElementById('antibondingelectronsRadio');

let bondorder;
let bondingelectrons = v1;
let antibondingelectrons = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

bondorderRadio.addEventListener('click', function() {
  variable1.textContent = 'Bonding electrons';
  variable2.textContent = 'Antibonding electrons';
  bondingelectrons = v1;
  antibondingelectrons = v2;
  result.textContent = '';
});

bondingelectronsRadio.addEventListener('click', function() {
  variable1.textContent = 'Bond order';
  variable2.textContent = 'Antibonding electrons';
  bondorder = v1;
  antibondingelectrons = v2;
  result.textContent = '';
});

antibondingelectronsRadio.addEventListener('click', function() {
  variable1.textContent = 'Bond order';
  variable2.textContent = 'Bonding electrons';
  bondorder = v1;
  bondingelectrons = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(bondorderRadio.checked)
    result.textContent = `Bond order = ${computeBondorder().toFixed(2)}`;

  else if(bondingelectronsRadio.checked)
    result.textContent = `Bonding electrons = ${computeBondingelectrons().toFixed(2)}`;

  else if(antibondingelectronsRadio.checked)
    result.textContent = `Antibonding electrons = ${computeAntibondingelectrons().toFixed(2)}`;
})

// calculation

function computeBondorder() {
  return (Number(bondingelectrons.value) - Number(antibondingelectrons.value)) / 2;
}

function computeBondingelectrons() {
  return (Number(bondorder.value) * 2) + Number(antibondingelectrons.value);
}

function computeAntibondingelectrons() {
  return Number(bondingelectrons.value) - (Number(bondorder.value) * 2);
}