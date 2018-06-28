import { Ninja, Action } from '../ninja/ninja.service'

export class EnemyAI {

  playerNinja: Ninja;
  opponentNinja: Ninja;

  constructor(ai: Ninja, player: Ninja) {
    this.playerNinja = player;
    this.opponentNinja = ai;
  }

  nextMove(): Action {
    let finalAction: Action;
    let actions = this.opponentNinja.getActions();

    //actions with enough chakra
    let chakrableActions = this.filterActionsWithEnoughChakra(actions, this.opponentNinja);
    if(chakrableActions.length > 0) {

      //actions that could kill
      let killableActions = this.filterActionsThatCouldKill(chakrableActions, this.playerNinja);
      if(killableActions.length > 0) {

        //actions that won't use up all chakra
        let nonUseUpActions = this.filterActionsThatWontUseAllChakra(killableActions, this.opponentNinja);
        if(nonUseUpActions.length > 0) {
          finalAction = this.randomAction(nonUseUpActions);
        } else {
          finalAction = this.randomAction(killableActions);
        }
      } else {
        let nonUseUpActions = this.filterActionsThatWontUseAllChakra(chakrableActions, this.opponentNinja);
        if(nonUseUpActions.length > 0) {
          finalAction = this.randomAction(nonUseUpActions);
        } else {
          finalAction = this.randomAction(chakrableActions);
        }
      }
    }

    return finalAction;
  }

  filterActionsWithEnoughChakra(actions: Action[], ninja: Ninja): Action[] {
    let newActions: Action[] = [];
    actions.forEach((action, index) => {
      if (action.chakra <= ninja.chakra.now ) {
        newActions.push(action);
      }
    });
    return newActions;
  }

  filterActionsThatCouldKill(actions: Action[], ninja: Ninja): Action[] {
    let newActions: Action[] = [];
    actions.forEach((action, index) => {
      if (action.damage >= ninja.health.now ) {
        newActions.push(action);
      }
    });
    return newActions;
  }

  filterActionsThatWontUseAllChakra(actions: Action[], ninja: Ninja): Action[] {
    let newActions: Action[] = [];
    actions.forEach((action, index) => {
      if (action.chakra < ninja.chakra.now ) {
        newActions.push(action);
      }
    });
    return newActions;
  }

  randomAction(actions: Action[]): Action {
    return actions[Math.floor(Math.random() * actions.length)];;
  }
}
