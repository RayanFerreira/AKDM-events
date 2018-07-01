import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public dbProvider: DatabaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  //CriaUsuario(usuario,senha){
    //this.dbProvider.CriaUsuario(usuario,senha);
    //if(this.dbProvider.CriaUsuario(usuario,senha)){
      //this.navCtrl.push(HomePage);
   // }
  //}
}
