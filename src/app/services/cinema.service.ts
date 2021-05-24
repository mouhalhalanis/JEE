import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  getTicketsPlaces(p: any) {
    let url=p._links.tickets.href.replace("{?projection}","");
    return this.http.get(url+"?projection=ticketProj");
  }
  getProjections(salle: any) {
    let url=salle._links.projections.href.replace("{?projection}","");
    return this.http.get(url+"?projection=p1");}
public host:string="http://localhost:8081"

  constructor(private http:HttpClient) { }
  public getVilles(){
    return this.http.get(this.host+"/villes")
  }
  getCinemas(v){
    return this.http.get(v._links.cinemas.href);
  }
  
  getSalles(c){
    return this.http.get(c._links.salles.href);
  }
  payerTickets(dataForm){
    return this.http.post(this.host+"/payerTickets",dataForm);
  }
}
