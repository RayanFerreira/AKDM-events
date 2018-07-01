import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({

  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  public Objeto_Feed = {
    titulo: "Rayan Ferreira",
    data: "November 5, 1955",
    descricao: "Estou editando meu primeiro App...",
    curtidas: 12,
    comentarios: 4,
    timecomentario: "11h ago"
  }

  public loader;

  public refresher;

  isRefreshing: boolean = false;

  public lista_filmes = new Array<any>();

  public nomeUsuario: string = "Rayan Ferreira Code";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    public loadingCtrl: LoadingController
  ) {
  }
  
  abreCarregando() {
    this.loader = this.loadingCtrl.create({
      content: "Carregando eventos..."
    });
    this.loader.present();
  }

  fechaCarregando() {
    this.loader.dismiss();
  }

  public soma(num1: number, num2: number): void {
    //alert(num1+num2);
  }

  doRefresh(refresher) {
    this.refresher=refresher;
    this.isRefreshing = true;

    this.carregarFilmes();
    
  }

  ionViewDidEnter(){
    this.carregarFilmes();
  }

  carregarFilmes(){
    this.abreCarregando();
    this.movieProvider.GetLatestMovies().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
        console.log(objeto_retorno);
        this.fechaCarregando();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }, error => {
        console.log(error);
        this.fechaCarregando();
        if(this.isRefreshing){
          this.refresher.complete();
          this.isRefreshing = false;
        }
      }
    )
  }
}

  
    


