class CustomArray{

    constructor(...args){

        this.size = args.length;

        for (let i = 0; i < args.length; i++)
        {
            this[i] = args[i];
        }

    }

    push(element){
        this[this.size] =  element;
        this.size++;

    }

    pop(){
        if (this.size === 0){
            return undefined;
        }
        this.size-- ;
        let lastElement = this [this.size];
        delete this[this.size]
        return lastElement;

    }
    top(){
        if (this.size === 0){
            return undefined;
        }
        return this[this.size - 1]
    }
    print(){no
        let element = [];

        for (let i = 0; i < this.size ; i++)
        {
            element.push(this[i])
        }
        console.log(`[${element.join(',')}]`);

    }

    
    printReverse(){

        const element = [];

        for (let i = this.size-1; i>= 0; i--)
        {
            element.push(this[i]);

        }

        console.log(`[${element.join(',')}]`);
    }
    size(){

    }

}

const MyArray = new CustomArray(1, 2, 3, 4, 5,6);

MyArray.print();          
MyArray.push(7);
MyArray.print();           
MyArray.pop();
MyArray.print();           
console.log(MyArray.top()); 
MyArray.printReverse();   
console.log(MyArray.size); 