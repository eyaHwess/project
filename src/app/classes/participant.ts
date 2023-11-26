
export class Participant {
    static nextId = 1;
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public phoneNumber: string,
        public memberId:number
    ) {
        this.id = Participant.nextId++;
    }
 
}