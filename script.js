import {Book} from './book.js';
import {User} from './user.js';
import {WeakReport} from './WeakReport.js'; 

let a = new Book("Hanoh dom",40);
let b = new Book("triple",20);
let c = new Book("Hanoh",30);

let d = new User("Moshe","levi","jerusalem");
let e = new User("David","Choen","Tel aviv"); 

d.addbooktouser(a);
d.addbooktouser(b);
d.addbooktouser(c);

e.addbooktouser(c);
e.addbooktouser(a);
e.addbooktouser(b);

let f = new WeakReport();
f.addUser(d);
f.addUser(e);
f.printReport();