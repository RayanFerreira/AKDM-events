import { Injectable } from '@angular/core';
import {Facebook,FacebookLoginResponse} from '@ionic-native/facebook';
let config_key_name = "config";
/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  userData;

  constructor(private facebook: Facebook) {

  }
  //recebe os dados do localstorage
  getConfigData(): any{
    return localStorage.getItem(config_key_name);

  }
  //grava os dados no localstorage
  setConfigData(showSlide?: boolean,name?: string, username?:string){
    let config = {
      showSlide: false,
      name: "",
      username: ""
    };

    if(showSlide){
      config.showSlide=showSlide;
    }

    if(name){
      config.name=name;
    }

    if(username){
      config.username=username;
    }

    localStorage.setItem(config_key_name, JSON.stringify(config));

  }

  login(c){
    
  }

  

}
