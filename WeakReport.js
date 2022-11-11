export class WeakReport{
    constructor(){
        this.userarrey=[];
    }
    addUser(user){
        this.userarrey.push(user);
    }
    printReport(){
        for(let i=0; i<this.userarrey.length; i++){
            console.log(`to ${this.userarrey[i].privatename} ${this.userarrey[i].familyname} have`);
            this.userarrey[i].getbookinarrey();
        }
    }
}