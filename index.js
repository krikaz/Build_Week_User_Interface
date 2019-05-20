class Tab {
  constructor(tab) {
    this.tab = tab;
    this.tab.addEventListener('click', this.select);
  }

  select() {
    tabs.forEach(tab => tab.classList.remove('tab-selected'));
    this.classList.add('tab-selected');
  }
}

const tabs = document.querySelectorAll('.tab-link');
// console.log(tabs);
// const newTabs = Array.from(tabs);
// console.log(newTabs);
tabs.forEach(tab => new Tab(tab));



