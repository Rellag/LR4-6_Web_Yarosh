
 let questions = [
    {
        question: 'Введіть прізвище, імʼя та групу за прикладом',
        type:'text',
        placeHolder:"Yarosh Vladislav TR-15"  
    },
    {
        question:'Який оператор є<br> порівнянням з врахуванням типу (ідентичність)?',
        type:'radio',
        answers:['===','==','&&','||'],
        correct:'==='
    },
    {
        question:'Які є змінні в JavaScript?',
        type:'checkbox',
        answers:['var','const','let','int'],
        correct:['var','const','let']
    },
    {
        question:'Скільки елементів у масиві:<br>var arr = [“text”, 12, true] ?',
        type:'radio',
        answers:['1','0','3','5'],
        correct:'3'
    },
    {
        question:`Будь-який JavaScript-об'єкт має приховане посилання, яке пов'язує його з батьківським за задумом об'єктом. Цей батьківський об'єкт називається:` ,
        type:'select',
        answers:['архетип','макет','прототип','зразок'],
        correct:'прототип'
    },
    {
        question:'Напишіть метод,<br> що виводить повідомлення в консоль',
        type:'text',
        correct:'console.log()'
    },
    {
        question:`var calc = {
            num1: 5,
            num2: 5,
            compute: function () {
            this.result = this.num1 * this.num2;
            }
         };
         Чому дорівнює calc.result ?`,
        type:'radio',
        answers:['25','0','625','10'],
        correct:'25'
    },
    {
        question:'Які методи додають елементи до масиву?',
        type:'checkbox',
        answers:['push','pop','shift','unshift'],
        correct:['unshift','push']
    },
    {
        question:'Напишіть метод,<br>що повертає псевдовипадкове число',
        type:'text',
        correct:'Math.random()'
    },
    {
        question:'Який метод робить обертання масив?',
        type:'select',
        answers:['reverce()','fill()','includes()','toString()'],
        correct:'reverce()'
    },
    {
        question:'Що з цього є масив?',
        type:'checkbox',
        answers:['let arr = [1, 2, 3, 4, 5];',`let values = [1231231, 125125135, 35930, 1743];`,'const user = {age:42}','var Alex = {points:[24, 1, 3]}'],
        correct:['let arr = [1, 2, 3, 4, 5];',`let values = [1231231, 125125135, 35930, 1743];`]
    }
]  




let score = 0;//Count of right answers

let questionIndex = 0;//0 - start

let userName = 'User'
//-----------

const headerContainer = document.querySelector('#header')

const listContainer = document.querySelector('#list')

const submitButton = document.querySelector('#submit')
//----------


clearQuestion()
questions = shuffleQ(questions)
showQuestion()
// submitButton.onclick = checkAnswer

function shuffle(array) {
    const first = array[0]
    array.sort(() => Math.random() - 0.5);
  }

function shuffleQ(array){
    const first = array[0]
    array.sort(() => Math.random() - 0.5);

    for(let i = 0; i < array.length; i++){
        if(array[i]['question'] === first['question']){
            
            let temp = array[0]
            array[0] = first
            array[i] = temp
        }
    }
    return array
}

function showQuestion(){
    switch(questions[questionIndex]['type']){
        case 'text':
            showQuestionText()
            submitButton.onclick = checkAnswerText
            break
        case 'radio':
            showQuestionRadio()
            submitButton.onclick =checkAnswerRadio
            break
        case 'checkbox':
            showQuestionCheckbox()
            submitButton.onclick = checkAnswerCheckbox
            break
        case 'select':
            showQuestionSelect()
            submitButton.onclick = checkAnswerSelect
            break
    }
}


function clearQuestion(){
    headerContainer.innerHTML = ''
    listContainer.innerHTML = ''
}




function showQuestionText(){
    const headerTemplate = `<h2 class="title">%title%</h2>`
   const title = headerTemplate.replace('%title%', questions[questionIndex]['question'])

   headerContainer.innerHTML = title

   const inputTemplate = `<input class="text-input" type="text" placeholder="${questions[questionIndex]['placeHolder'] || ""}">`
   headerContainer.innerHTML += inputTemplate
}
function showQuestionRadio(){

    
    const headerTemplate = `<h2 class="title">%title%</h2>`
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question'])
 
    headerContainer.innerHTML = title
    
     
     shuffle(questions[questionIndex]['answers'])
     for(item of questions[questionIndex]['answers']){
         const listTemplate = 
         `<li>
             <label>
                 <input value="%number%" type="radio" class="answer" name="answer " />
                 <span>%answer%</span>
             </label>
         </li>`
 
         const list = listTemplate.replace('%answer%', item).replace('%number%', item)
         listContainer.innerHTML += list
        
     }
 
 }
 function showQuestionCheckbox(){

    const headerTemplate = `<h2 class="title">%title%</h2>`
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question'])
 
    headerContainer.innerHTML = title
    
    
     shuffle(questions[questionIndex]['answers'])
     for(item of questions[questionIndex]['answers']){
         const listTemplate = 
         `<li>
             <label>
                 <input value="%number%" type="checkbox" class="answer" name="answer " />
                 <span>%answer%</span>
             </label>
         </li>`
 
         const list = listTemplate.replace('%answer%', item).replace('%number%', item)
         listContainer.innerHTML += list
        
     }
 
 }

 function showQuestionSelect(){

    const headerTemplate = `<h2 class="title">%title%</h2>`
    const title = headerTemplate.replace('%title%', questions[questionIndex]['question'])
 
    headerContainer.innerHTML = title
    
    let listTemplate = 
        `<select class="select" name="select"> 
            <option value="%value%" selected>%question%</option>
            <option value="%value%">%question%</option>
            <option value="%value%">%question%</option>
            <option value="%value%">%question%</option>
         </select>`
            shuffle(questions[questionIndex]['answers'])
         for(item of questions[questionIndex]['answers']){
            listTemplate = listTemplate.replace('%question%', item).replace('%value%',item)
            // console.log(item)
         }
         listContainer.innerHTML = listTemplate
 
 }

function checkAnswerText(){
    const checkedText = headerContainer.querySelector('.text-input').value
    
    if(!checkedText){
        submitButton.blur()
        return
    }

    if(questionIndex === 0){
        userName = checkedText
        
    }

    if(checkedText === questions[questionIndex]['correct']){
        score++
        console.log('NICE!')
    }


    if(questionIndex !== questions.length-1){
        //Not last question
        questionIndex++
        clearQuestion()
        showQuestion()
        
    }else{
        clearQuestion()
        showResults()
    }
}

function checkAnswerRadio(){
    
    const checked= listContainer.querySelector('input[type = "radio"]:checked')

    if(!checked){
        submitButton.blur()
        return
    }
        console.log(checked.value)
        
    if(checked.value === questions[questionIndex]['correct']){
        score++
        console.log('NICE!')
    }

    if(questionIndex !== questions.length-1){
        //Not last question
        questionIndex++
        clearQuestion()
        showQuestion()
        
    }else{
        clearQuestion()
        showResults()
    }
}

function checkAnswerCheckbox(){
    
    let checked = listContainer.querySelectorAll('input[type = "checkbox"]:checked')
    

    if(!checked){
        submitButton.blur()
        return
    }
        

        let checkedValues = []
        checked.forEach(element => {
            checkedValues.push(element.value)
        })

        
        console.log(JSON.stringify(checkedValues.sort())+"     " +JSON.stringify(questions[questionIndex]['correct'].sort()))
    if(JSON.stringify(checkedValues.sort()) === JSON.stringify(questions[questionIndex]['correct'].sort())){
        score++
        console.log('NICE!')

    }

    if(questionIndex !== questions.length-1){
        //Not last question
        questionIndex++
        clearQuestion()
        showQuestion()
       
    }else{
        clearQuestion()
        showResults()
    }
}

function checkAnswerSelect(){

    const checked = listContainer.querySelector('select').value
    console.log(checked)

    if(JSON.stringify(checked) === JSON.stringify(questions[questionIndex]['correct'])){
        score++
        console.log('NICE!')
    }

    if(questionIndex !== questions.length-1){
        //Not last question
        questionIndex++
        clearQuestion()
        showQuestion()
       
    }else{
        clearQuestion()
        showResults()
    }
}

function showResults(){

    let arrName = userName.split(" ")


        successStudent.firstName = arrName[0]
        successStudent.lastName = arrName[1] || ''
        successStudent.group = arrName[2] || ''

        successStudent.trys++
        successStudent.points.push(score)
       
        console.log(successStudent.points)

        console.log(successStudent.averageScore());

        successStudent.showData()

        
        

    const headerTemplate = `<h2 class="title">%user% має результат:</h2>
                            <h3 class="summary">%score%/%max% балів</h3>`
                            
   const title = headerTemplate
                            .replace('%score%', successStudent.points[successStudent.points.length-1])
                            .replace('%max%', questions.length-1)
                            .replace('%user%', successStudent.firstName +" "+successStudent.lastName+" "+successStudent.group)
                            
       let textButton = `<button class="quiz-submit submit" id="submit">Почати знову</button>`
       submitButton.innerHTML = textButton
       headerContainer.innerHTML = title

       const length = questions.length - 1
       let xhr = new XMLHttpRequest()
       xhr.open("POST", "/")
       xhr.setRequestHeader('user', `${successStudent.firstName} ${successStudent.lastName} ${successStudent.group}`) 
       xhr.setRequestHeader('score', score) 
       console.log(questions.length-1)
       xhr.setRequestHeader('max', length.toString())
       xhr.setRequestHeader('average', successStudent.averageScore())
       xhr.send()

       submitButton.onclick = (()=>{
        questionIndex = 1
        score = 0
        clearQuestion()
        textButton = `<button class="quiz-submit submit" id="submit">Відповісти</button>`
        submitButton.innerHTML = textButton
        questions = shuffleQ(questions)
        
        showQuestion()
       })
   
}











//2.3

let user ={ //створення обʼєкту "Користувач"
    firstName:'firstName',
    lastName:'lastName'
}

let student =  new Object({//створення обʼєкту "Студент"
    specialty:'122. Comuter sciences',
    group:'TR-1n',

    addData:function(name, newValue){
        student[name] = newValue
    },
    changeData:function(name, newValue){
        for(let key in student){
            if(key === name){
                student[key] = newValue
            }
        }
    },
    deleteData:function(nameDelete){

        delete student[nameDelete]
    },
})

for(let key in student){ //Копіювання властивостей і методів об’єктів
    user[key] = student[key]
}



let student1 = Object.create(student)
student1.showData = function(){//Додавання в прототип об’єкту «Студент» метод «Показати дані»
   
   for(let key in student1){
    console.log(key+': '+ student1[key]);
   }
}

// success.showData()




let successStudent = {//створено об’єкт «Успішність»
    test: 'Основи JS. Робота з об’єктами',
    trys:0,
    points:[],
    
    averageScore:function(){
        let result = 0
        for(let item of this.points){
            result += item
        }
        return result/this.trys
    },

    showData: function(){//Додавання в прототип об’єкту «Студент» метод «Показати дані»
   
        for(let key in successStudent){
         console.log(key+': '+ successStudent[key]);
        }
     }

    

}
Object.setPrototypeOf(successStudent, student1)













