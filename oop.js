console.log("Hello World")

let student = {
    name:'Deependra Kumal',
    course:'CSIT',
    email:'deepenkumal@gmail.com',
    contact:9849230479,
    details:function(){
        console.log('name:'+this.name+'\nourse:'+this.course+'\nemail:'+this.email+'\ncontact:'+this.contact)
    }
};
student.details( )
console.log("\n\n")

//factory function
function student_details(){
    return{
        st_name:"Bikram Kumal",
        st_email:"bikram@gmail.com",
        st_details:function(){
            console.log(this.st_name+' '+this.st_email)
        }
    }
};
let students = student_details();
students.st_details();