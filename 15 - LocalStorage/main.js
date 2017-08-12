window.addEventListener('load', () => {

  /*
   * Elements
   */

  const clearAll = document.querySelector('[name="clear-all"]');
  const checkAll = document.querySelector('[name="check-all"]');
  const uncheckAll = document.querySelector('[name="uncheck-all"]');
  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.items');

  /*
   * Properties 
   */

  const items = JSON.parse(localStorage.getItem('items')) || [];

  /*
   * Functions
   */

  function clearItems() {
    items.length = 0;
    localStorage.removeItem('items');
    populateList(items, itemsList);
  }

  function checkItems() {
    items.forEach(item => item.done = true);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }

  function uncheckItems() {
    items.forEach(item => item.done = false);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }

  function addItem(e) {
    e.preventDefault();
    const text = this.querySelector('[name=item]').value;
    const item = {
      text,
      done: false
    };
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
  }

  function populateList(items = [], itemsList) {
    itemsList.innerHTML = items.map((item, index) =>
      `
      <li>
        <input type="checkbox" data-index="${index}" id="item${index}" ${item.done ? 'checked' : ''}>
        <label for="item${index}">${item.text}</label>
      </li>
      `
    ).join('');
  }

  function toggleDone(e) {
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
  }

  /*
   * Event listeners
   */

  clearAll.addEventListener('click', clearItems);
  checkAll.addEventListener('click', checkItems);
  uncheckAll.addEventListener('click', uncheckItems);
  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);

  /*
   * Init
   */

  populateList(items, itemsList);

});