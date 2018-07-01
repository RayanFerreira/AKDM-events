import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import {Facebook,FacebookLoginResponse} from '@ionic-native/facebook';
import { FeedPage } from '../feed/feed';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  userData;
  tab1Root = HomePage;
  tab3Root = FeedPage; 

  
  constructor(private facebook: Facebook) {

  }

  LoginFB(){
    this.facebook.login(['email','public_profile']).then((response: FacebookLoginResponse)=>{
      this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)',[])
    .then(profile =>{
      this.userData = {email: profile['email'],
            first_name: profile['first_name'], 
            picture: profile['picture_large']['data']['url'],
            username: profile['name']}})});    
  }

  

}
