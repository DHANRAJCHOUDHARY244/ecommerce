const sendData= (path,data)=>{
    fetch(path,{
        method:'post',
        headers: new Headers({'content-Type':'application/json'}),
        body:JSON.stringify(data)
    }) 
    .then(res => res.json())
    .then(data => processData(data));
}
const processData =(data)=>{
    console.log(data);
    loader.style.display='none'
    if(data.alert){
        showFormError(data.alert);
    }
}
const showFormError=(err)=>{
    let errorEle = document.querySelector('.error');
    errorEle.innerHTML=err;
    errorEle.classList.add('show');
}    