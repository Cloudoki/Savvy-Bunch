import {Component} from '@angular/core';
import {AccountsPage} from '../../pages/accounts/accounts';
import {TeamsPage} from '../../pages/teams/teams';

@Component({
  templateUrl: 'build/components/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = AccountsPage;
    this.tab2Root = TeamsPage;
  }
}
