Feature('poc');

Scenario('visit github', (I) => {
    I.amOnPage('https://github.com');
    I.see('GitHub');
  });
