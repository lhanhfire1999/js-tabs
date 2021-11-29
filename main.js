const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panels = $$('.tab-panel');
const tabActive = $('input[name="tab"]:checked + label');
const line =$('.bottom-line');

line.style.left = tabActive.offsetLeft + 'px';
line.style.width = tabActive.offsetWidth + 'px';

tabs.forEach((tab, index)=> {
  tab.onclick = function() {
    $('.tab-panel.active').classList.remove('active');
    panels[index].classList.add('active');
    line.style.left = this.offsetLeft + 'px';
    line.style.width = this.offsetWidth + 'px';
  }
})

console.log([$$('.tab-item')[2]]);