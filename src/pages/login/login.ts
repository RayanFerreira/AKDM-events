import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../../providers/database/database';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';

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

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private dbProvider: DatabaseProvider
  ) { }



  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Login(usuario,senha){
    this.dbProvider.getUsers(usuario,senha);
    if(usuario!=null){
      this.navCtrl.push(HomePage);
    }else{
      this.navCtrl.push(LoginPage);
    }
  }

  MostraCadastro(){
    this.navCtrl.push(CadastroPage);
  }

}
export class users {
  nomeusuario: string;
  senha: string;
}