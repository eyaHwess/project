
export class Participant {
    static nextId = 1;
    constructor(
        public id:number,
        public name:String,
        public email:String,
        public phoneNumber:Number
    ){
        this.id=Participant.nextId++
    }

    
}
