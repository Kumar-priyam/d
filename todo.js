const todo=JSON.parse(localStorage.getItem('todo'))||[{
    act:'',
    date:''

}];
arraylist();
function addtodo(){
   let act= document.querySelector('.todo-input').value;
   let date= document.querySelector('.date-input').value;
   todo.push({
    act,
    date
   });
   arraylist();
   localStorage.setItem('todo',JSON.stringify(todo));
}

function arraylist(){
    let todolistobj='';
    for(let i=1;i<todo.length;i++){
        if(todo[i].act===''||todo[i].date==='' ){
         alert('Fill all the entries');
         todo.splice(i,1);
        break;
    }
    else{
        const list=`<div>
        ${todo[i].act.charAt(0).toUpperCase()+todo[i].act.slice(1)}</div>
        <div>${todo[i].date}</div>
        <button class="del-but" onclick="todo.splice(${i},1);
        arraylist(); 
         localStorage.setItem('todo',JSON.stringify(todo));">
         Delete
         </button>`;
        todolistobj+=list;
    }
     }
    document.querySelector('.js-todolist').innerHTML=todolistobj;
    document.querySelector('.todo-input').value="";
    document.querySelector('.date-input').value="";
}