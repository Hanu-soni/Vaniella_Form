let  details={
    name:"",
    dob:"",
    email:"",
    pan:"",
    address:"",
    background:""

}
function action()
{
    let checkfill=false;
    console.log("reached")
    details.name=document.querySelector('.input-Name').value;
    details.dob=document.querySelector('.input-Dob').value;
    details.email=document.querySelector('.input-Email').value;
    details.pan=document.querySelector('.input-Pan').value;
    details.address=document.querySelector('.input-Address').value;
    details. background=document.querySelector('.input-Bg').value;
    console.log(details);

    for (const [key, value] of Object.entries(details)) {
        console.log(value);
        if(value.length==0)
        {
            alert(`${key} is missing`)
            checkfill=false;
            break;
        }
        var panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!emailRegex.test(details.email))
        {
            alert(`Email is not appropriate`)
            checkfill=false;
            break;
        }
        if(!panRegex.test(details.pan))
        {
            alert(`PAN is not appropriate`)
            checkfill=false;
            break;
        }
        
    }
    if(checkfill==false)
    {
        alert('re-fill the form correctly');
        document.querySelector('.input-Name').value=null;
        document.querySelector('.input-Dob').value=null;
        document.querySelector('.input-Email').value=null;
        document.querySelector('.input-Pan').value=null;
        document.querySelector('.input-Address').value=null;
        document.querySelector('.input-Bg').value=null;
    }
        
    else{
        const newurl="https://hanu-soni.github.io/Vaniella_Form/FamilyDetail";
        window.location.href=newurl;
    }
      //please add it
}
            