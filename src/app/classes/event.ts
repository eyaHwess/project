import { Participant } from "./participant";
export class Event {
    constructor(
        public id:number,
 public picture:string,
 public name:string,
 public nbMax:number,
 public date :Date,
 public dateL:Date,
 public prize:string,
 public disponible:boolean,
 public detail:string,
 public participants:Participant[],
 public requests:Participant[],
 ){
    
 }



}
