import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Battle between two random ninjas and save result of fight', () => {
    //Number of fights to Test
    var nbFights = 5;

    var i;
    for (i = 0; i < nbFights; i++) {
      //Start battle between two random ninjas
      let ninja1 = Math.floor(Math.random() * 8) + 1;
      let ninja2 = Math.floor(Math.random() * 8) + 1;
      let battleUrl = '/battle/' + ninja1 + '/' + ninja2;
      browser.get(battleUrl);
      console.log("I open battle url");

      FightingLoop();
    }
  });

  function FightingLoop() {
    //Play random action
    console.log("I wait for available actions");

    var actions = element.all(by.css('button:not([disabled]):not(.disabled)')).then(function(items) {
      var action = items[Math.floor(Math.random()*items.length)];
      action.click();
      console.log("I click on an action");

      browser.getCurrentUrl().then(function(url) {
        console.log("Check if battle is finished");
        if (url.includes('battle')) {
          FightingLoop();
        } else {
          //Show battle result
          console.log(url);
        }
      });
    });
  }
});
