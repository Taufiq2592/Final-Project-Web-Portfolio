const txtElement = ['Freelancer'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik () {

    if(count == txtElement.length){
        count = 0;
    }
    currentTxt = txtElement[count];
    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-ngetik').textContent = words;

    if(words.length == currentTxt.length){
        count ++;
        txtIndex = 0;
    }
    setTimeout(ngetik,150);

})();

const options = {
  bottom: '32px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.3s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}


const darkmode = new Darkmode(options);

darkmode.showWidget();
