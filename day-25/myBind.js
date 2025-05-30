Function.prototype.myBind = function(context, ...bindArgs){
    const fn = this;

    return function(...callArgs) {
        return fn.apply(context, [...bindArgs, ...callArgs]);
    };
};

function greet(greeting, name) {
    console.log(`${greeting}, ${name}. I am ${this.title}`);
}


const teacher = { title: 'Professor oak'};

const greetTeacher = greet.myBind(teacher, 'hello');

greetTeacher('ash');
