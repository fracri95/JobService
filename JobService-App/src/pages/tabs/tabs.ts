import { Component } from '@angular/core';
import {IonicPage, NavParams} from 'ionic-angular';


@IonicPage()
@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {
 
    tab1Root = 'HomePage';
    tab2Root = 'UtentePage';
    tab3Root = 'PreferitiPage';
    tab4Root = 'ArchivioPage';
    tab5Root = 'LoginPage';
    
  constructor(public params: NavParams) {
  }

}
