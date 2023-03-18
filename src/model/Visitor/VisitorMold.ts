
export class VisitorMold {
    private enteredDate: string
    private enteredCard: number
    constructor(
        public name: string,
        public secondName: string,
        private age: string,
    ) {
        this.enteredDate = new Date().toUTCString()
        this.enteredCard = new Date().getMilliseconds()
    }

    get visitorEnteredDate(): string {
        return this.enteredDate
    }

    get visitorEnteredNumber(): number {
        return this.enteredCard
    }

    get currentAge(): number {
        const yer = parseInt(this.age.split('-')[0])
        const age = new Date().getFullYear() - yer
        return age
    }

}


