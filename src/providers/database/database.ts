import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Http } from '@angular/http';


@Injectable()
export class DatabaseProvider {

  private db: SQLiteObject;
  private isOpen: boolean;

  constructor(public http: Http,
    public storage: SQLite
  ) {
    if (!this.isOpen) {
      this.storage = new SQLite();
      this.storage.create({ name: "users.db", location: "default" })
        .then((db: SQLiteObject) => {
          this.db = db;
          db.executeSql("CREATE TABLE IF NOT EXISTS users (nomeusuario TEXT PRIMARYKEY NOT NULL,senha TEXT NOT NULL)", []);
          this.isOpen = true;
        })
        .catch((error) => console.error(error));
    }
  }



  getUsers(nomeusuario, senha) {
    return new Promise((resolve, reject) => {
      let sql = "select * from users nomeusuario,senha values (?,?)";
      this.db.executeSql(sql, [nomeusuario, senha]).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }


  CriaUsuario(nomeusuario: string, senha:string) {
    console.log(nomeusuario,senha)
    return new Promise((resolve, reject) => {
      let sql = "INSERT INTO users (nomeusuario,senha) values (?,?)";
      this.db.executeSql(sql, [nomeusuario, senha]).then((data) => {
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }



}

