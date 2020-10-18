class Department {
    name: string;

    constructor(n:string){
        this.name = n;
    }

    // describe(){
    //     console.log('Deparment: '+this.name);
    // }

    // More safe So will have an error in acountingCopy object becaues it is not look like department type Line - 23.
    describe(this:Department){
        console.log('Deparment: '+this.name);
    }
}

const accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();

const acountingCopy = { describe: accounting.describe};
// acountingCopy.describe(); // There is no name property in accountingCopy object so it is 'undefined'

const acountingCopy1 = { describe: accounting.describe, name:'Roshan'};
acountingCopy1.describe(); // There is name property in accountingCopy object so the output will be 'Deparment: Roshan'