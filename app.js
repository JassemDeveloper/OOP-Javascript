function Info(name,age){
    this.name=name;
    this.age=age;
}

function UI(){}

let ui=new UI();

UI.prototype.addRecord=function(info){
 document.querySelector('.noValue') !=null ?document.querySelector('.noValue').parentElement.remove():'';
 let row=document.querySelector('#data');
 let tr=document.createElement('tr');
 let tdName=document.createElement('td');
 let tdAge=document.createElement('td');
 let tdDelete=document.createElement('td');
 tdDelete.className='delete-item';
 tdName.appendChild(document.createTextNode(info.name));
 tdAge.appendChild(document.createTextNode(info.age));
 tdDelete.appendChild(document.createTextNode("Delete Me"));
 tr.appendChild(tdName);
 tr.appendChild(tdAge);
 tr.appendChild(tdDelete);
 row.appendChild(tr);
 ui.showAlert('Record Added','success');
}


UI.prototype.deleteRecord=function(){
    let row=document.querySelector('#data');
    row.addEventListener('click',function(e){
        let className=e.target.className;
        if(className == 'delete-item'){
            e.target.parentElement.remove();
            ui.showAlert('Record Removed','success');
            if(row.childElementCount == 0){
                let noValue=`<tr>
                <td class='noValue' colspan="2" style="text-align: center;">No data has been added yet</td>
            </tr>`;
            row.innerHTML=noValue;
            }
        }
    });
}
UI.prototype.validate=function(name,age){
    if(name.length > 0 && age.length > 0){
        return true;
    }else{
       return false;
    }
}

UI.prototype.showAlert=function(message,type){
    let alert=document.querySelector('.alert');
    let mainDiv =document.createElement('div');
        mainDiv.className='row '+type;
    let innerDiv=document.createElement('div');
        innerDiv.className='twelve columns ';
    let p =document.createElement('p');
        p.className='u-full-width';
      p.appendChild(document.createTextNode(message));
    innerDiv.appendChild(p);
    mainDiv.appendChild(innerDiv);
    alert.appendChild(mainDiv);
    setTimeout(function(){
        document.querySelector('.alert').innerHTML='';
    },5000)
    }

 // to Record From Dome
ui.deleteRecord();

// to add record to DOM
document.querySelector('.jsAddRecord').addEventListener('click',function(e){
    e.preventDefault();
    let name=document.querySelector('#name').value;
    let age=document.querySelector('#age').value;
    let check=ui.validate(name,age);
    if(check){
        let info=new Info(name,age);
        ui.addRecord(info);
    }else{
       ui.showAlert('Please fill all the fields','error')
    }
});


