const arr = JSON.parse(localStorage.getItem('ArrayValue')) || [];
showInWebsite();
function addTodo()
{

    const todo=document.querySelector('.inputValue').value;
    const date=document.querySelector('.dateValue').value;
    arr.push({name: todo,
        dueDate:date
    });

    document.querySelector('.inputValue').value='';
    document.querySelector('.dateValue').value='';
    showInWebsite();
    saveToStorage();
}

function showInWebsite()
{
    let toSaveTotalHtml='';
    for(let i=0;i<arr.length;i++)
    {

        const html=`<div>${arr[i].name}</div>
        <div>${arr[i].dueDate}</div>
        <button onclick="
        arr.splice(${i},1);
        saveToStorage();
        showInWebsite();
        " class="deleteButton">Delete</button>`;
        toSaveTotalHtml+=html;
    }
    document.querySelector('.containerForP').innerHTML=toSaveTotalHtml;
}
function saveToStorage(){
    localStorage.setItem('ArrayValue',JSON.stringify(arr));
}


