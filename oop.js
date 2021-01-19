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