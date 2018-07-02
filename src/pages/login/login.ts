import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../../providers/database/database';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';
import {Facebook,FacebookLoginResponse} from '@ionic-native/facebook';
import {TabsPage} from '../tabs/tabs';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 userData = null;
  chamafb = 0;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private dbProvider: DatabaseProvider,
    private facebook: Facebook,
  ) { }



  ionViewDidLoad() {
    
  }

  Login(usuario: string,senha: string){
    this.dbProvider.getUsers(usuario,senha);
    if(usuario!=null){
      this.navCtrl.push(HomePage);
      this.navCtrl.push(TabsPage);
    }else{
      this.navCtrl.push(LoginPage);
    }
  }

  MostraCadastro(){
    this.navCtrl.push(CadastroPage);
      
  }

  goHomeFB(){
    this.navCtrl.push(HomePage);
    this.navCtrl.push(TabsPage);
  }

  

}
export class users {
  nomeusuario: string;
  senha: string;
}