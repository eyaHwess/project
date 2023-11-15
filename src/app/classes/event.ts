import { Participant } from "./participant";
export class Event {
    constructor(
        public id:number,
 public picture:string,
 public name:string,
 public nbMax:number,
 public date :string,
 public dateL:string,
 public prize:string,
 public disponible:boolean,
 public detail:string,
 public participants:Participant[]){
    
 }


}
