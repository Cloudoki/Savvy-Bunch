import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
	templateUrl: 'build/pages/accounts/accounts.html'
})
export class AccountsPage {

	accounts: Array<{id: number, name: string, slug: string}>;
	
	constructor(private navCtrl: NavController) {
	
		this.accounts = [];
		for(let i = 1; i < 5; i++) {
			this.accounts.push({
				id: i,
				name: 'Account ' + i,
				slug: 'account-' + i
			});
		}
	
	}
}
