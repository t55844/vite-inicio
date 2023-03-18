
class VisitorForm {
    private enteredDate: string
    private enteredCard: number
    constructor(
        public name: string,
        public secondName: string,
    ) {
        this.enteredDate = new Date().toUTCString()
        this.enteredCard = new Date().getMilliseconds()
    }

    get visitorEnteredDate() {
        return this.enteredDate
    }

    get visitorEnteredNumber() {
        return this.enteredCard
    }


}

export { }