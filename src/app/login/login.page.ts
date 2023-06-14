import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  goToTab2(){
    this.navCtrl.navigateRoot('/tabs/tab2');
  }
  ngOnInit() {
  }

}
