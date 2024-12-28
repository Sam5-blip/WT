class Name {
    constructor(Fname, Lname) {
      this.Fname = Fname;
      this.Lname = Lname;
    }
  }
  
const a = new Name("abc", "abc");
const b = new Name("xyz", "xyz");
const c = new Name("pqr", "pqr");

console.log(a.Fname + " " + a.Lname); 
console.log(b.Fname + " " + b.Lname);
console.log(c.Fname + " " + c.Lname);