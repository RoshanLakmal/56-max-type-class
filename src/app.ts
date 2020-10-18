class Department {
    public name: string;
    private employees: string[] =[];
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

    addEmployee(employee:string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();

const acountingCopy = { describe: accounting.describe};
// acountingCopy.describe(); // There is no name property in accountingCopy object so it is 'undefined'

const acountingCopy1 = { describe: accounting.describe, name:'Roshan'};
// acountingCopy1.describe(); // There is name property in accountingCopy object so the output will be 'Deparment: Roshan'

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.employees[2] = 'Anna'; // This is not good. To avoid we can add access modifiers 

accounting.describe();
accounting.printEmployeeInformation();
