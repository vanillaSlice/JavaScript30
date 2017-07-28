(() => {

  const Console = console;

  const dogs = [{
    name: 'Snickers',
    age: 2
  }, {
    name: 'Hugo',
    age: 8
  }];

  const p = document.querySelector('p');

  p.addEventListener('click', makeGreen);

  function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#bada55';
    p.style.fontSize = '50px';
  }

  // Regular
  Console.log('Hello');

  // Interpolated
  Console.log('Hello I am an %s string', 'interpolated');

  // Styled
  Console.log('%c I am some great text', 'font-size: 50px; background: red;');

  // warning!
  Console.warn('OH NOOOOOO!');

  // Error :|
  Console.error('Shit!');

  // Info
  Console.info('Crocodiles eat 3-4 people per year');

  // Testing
  Console.assert(1 === 2, 'That is wrong');

  // clearing
  Console.clear();

  // Viewing DOM Elements
  Console.log(p);
  Console.dir(p);

  Console.clear();

  // Grouping together
  dogs.forEach(dog => {
    Console.groupCollapsed(`${dog.name}`);
    Console.log(`This is ${dog.name}`);
    Console.log(`${dog.name} is ${dog.age} years old`);
    Console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    Console.groupEnd(`${dog.name}`);
  });

  // counting
  Console.count('Mike');
  Console.count('Mike');
  Console.count('Mike');
  Console.count('Mike');
  Console.count('Mike');

  // timing
  Console.time('fetching data');
  fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
      Console.timeEnd('fetching data');
      Console.log(data);
    });

  Console.table(dogs);
})();