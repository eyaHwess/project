
export class Participant {
    static nextId = 1;
    

    constructor(
        public id: number,
        public name: string,
        public email: string,
        public phoneNumber: number
    ) {
        this.id = Participant.nextId++;
    }
 
}