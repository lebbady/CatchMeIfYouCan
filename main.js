'use strict';

function buildDom(html) {
  var div = document.createElement('div');
  div.innerHTML = html;
  return div.children[0];
}

function main() {

  var splashMain;

  function buildSplash() {
    
    splashMain = buildDom(`
      <main>
        <h1>Catch me if you can!</h1>
        <button>Start</button>
      </main>
    `);

    document.body.prepend(splashMain);
    var button = splashMain.querySelector('button');

  }
  
  
  

  buildSplash();

}

window.addEventListener('load', main);