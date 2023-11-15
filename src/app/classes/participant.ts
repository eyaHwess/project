import { Robot } from "./robot";
import { Account } from "./account";
export class Participant {
    constructor(
        public robot:Robot,
        public account:Account
    ){}
}
