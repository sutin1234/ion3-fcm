import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

declare var FCMPlugin: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private platform: Platform) {
    this.platform.ready().then(() => {
      if(typeof(FCMPlugin) !== "undefined"){
        FCMPlugin.getToken(function(t){
          alert(JSON.stringify(t));
        }, function(e){
          console.log("Uh-Oh!\n"+e);
        });

        FCMPlugin.onNotification(function(d){
          alert(JSON.stringify(d));
          }, function(msg){
            alert(JSON.stringify(msg));
          }, function(err){
            alert(JSON.stringify(err));
          });

      }
    });
  }


}
