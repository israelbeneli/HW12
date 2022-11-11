export class User
{
    #booksar;
    constructor(privetname,familyname,city){
        this.privatename=privetname;
        this.familyname=familyname;
        this.city=city;
        this.#booksar=[];
        this.useracount=0;
    }
    addbooktouser(book){
        if(book.available==true){
            this.#booksar.push(book);
        }
        else{
            console.log("The book is not possible to borrow");
        }
    }
    getbookinarrey(){
        this.#booksar.forEach(book => {
            console.log("name of book is "+book.name);
        }); 
    }
}