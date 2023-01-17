// //2.3 about classes 



// class Student{

//     constructor(firstName, lastName, group, specialty = '122. Comuter sciences'){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.group = group;
//         this.specialty = specialty;
//     }

//     get specialty(){
//         return this.specialty
//     }

//     set specialty(value){
//         this.specialty = value
//     }

//     get group(){
//         return this.group
//     }

//     set group(value){
//         this.group = value
//     }
//     get firstName(){
//         return this.firstName
//     }

//     set firstName(value){
//         this.firstName = value
//     }
//     get lastName(){
//         return this.lastName
//     }

//     set lastName(value){
//         this.lastName = value
//     }
    

// }


// class Success extends Student{
//     constructor(firstName, lastName, group, specialty = '122. Comuter sciences',test = 'Основи JS. Робота з об’єктами', trys = 0, points =[]){
//         super(firstName, lastName, group, specialty)
//         this.test = test
//         this.try = trys
//         this.points = points
//     }
//     get test(){
//         return this.test
//     }

//     set test(value){
//         this.test = value
//     }
    
//     get trys(){
//         return this.trys
//     }

//     set trys(value){
//         this.trys.add(value)
//     }
    
//     get points(){
//         return this.points
//     }

//     set points(value){
//         this.points = value
//     }
    
//     averageScore(){
//         let result = 0
//         for(let i = 0; i < this.getPoints.length; i++){
//             result += this.getPoints[i]
//             console.log(this.getPoints[i]);
//         }
//         return result/this.get 
//     }

//     showData(){
   
//         for(let key in this.Success){
//          console.log(key+': '+ this.Success);
//         }
//      }
// }

// let studentCl = new Success();