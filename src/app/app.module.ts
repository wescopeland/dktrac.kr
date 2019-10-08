import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';

import { authModule } from './auth/auth.module';
import { blocksModule } from './blocks/blocks.module';
import { compareModule } from './compare/compare.module';
import { coreModule } from './core/core.module';
import { eventModule } from './event/event.module';
import { exportModule } from './export/export.module';
import { gameModule } from './game/game.module';
import { playerModule } from './player/player.module';
import { quicksearchModule } from './quicksearch/quicksearch.module';
import { rankingModule } from './ranking/ranking.module';
import { scoresModule } from './scores/scores.module';
import { submitModule } from './submit/submit.module';
import { timelineModule } from './timeline/timeline.module';

@NgModule({
  imports: [BrowserModule, UpgradeModule, UIRouterUpgradeModule.forRoot()],
  declarations: [],
  bootstrap: []
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [appModule], { strictDi: false });
  }
}

export const appModule = angular
  .module('kongtrac.app', [
    coreModule,
    authModule,
    blocksModule,
    rankingModule,
    submitModule,
    scoresModule,
    gameModule,
    playerModule,
    eventModule,
    compareModule,
    timelineModule,
    quicksearchModule,
    exportModule
  ])
  .config(
    /* @ngInject */
    function($qProvider, $urlServiceProvider) {
      $qProvider.errorOnUnhandledRejections(false);
      $urlServiceProvider.deferIntercept();
    }
  ).name;

declare var angular: angular.IAngularStatic;
import { setAngularJSGlobal } from '@angular/upgrade/static';
setAngularJSGlobal(angular);