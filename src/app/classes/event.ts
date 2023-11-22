import { Account } from "./account";
import { Participant } from "./participant";
export class Event {
    static nextId = 1;
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
        public participants:Account[],
        public requests:Participant[],
        )
 {this.id = Account.nextId++;}

}
