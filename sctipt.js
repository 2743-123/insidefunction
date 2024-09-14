let person ={
    name:'asif',
    age:26,
    isDevloper:true,
    greet: function (){
        console.log("hello, my name is " +  this.name);
    }
};
person.greet();
