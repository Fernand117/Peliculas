import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  result: any;
  jsonResult: any;

  public jsonGenderResult: any;
  public genders: any;

  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.apiService.listaPeliculas().subscribe(
      res => {
        this.jsonResult = res;
        this.result = this.jsonResult['results'];
        console.log(this.jsonResult['results']);
      }
    );

    this.apiService.listaGeneros().subscribe(
      res => {
        this.jsonGenderResult = res;
        this.genders = this.jsonGenderResult['genres'];
        console.log(this.genders);
      }
    );
  }

}
