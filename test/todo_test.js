Feature('todo');

Scenario('create todo item', (I) => {
  I.amOnPage('http://todomvc.com/examples/angularjs/#/');
  I.fillField('.new-todo', "test")
  I.pressKey('Enter');
  I.seeNumberOfVisibleElements('.todo-list li', 1);
  I.see('1 item left', '.todo-count');
});
