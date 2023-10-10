let  details={
    name:"",
    dob:"",
    email:"",
    pan:"",
    address:"",
    background:""

}

let family={
    fathername:"",
    confather:"",
    agefather:"",
    mothername:"",
    conmother:"",
    agemother:"",
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
        checkfill=true;
        console.log(checkfill);
        
    }
    if(checkfill==false)
    {
        alert('re-fill the form correctly');
       
        divmob.innerText='ERROR FOUND'
        document.querySelector('.input-Name').value=null;
        document.querySelector('.input-Dob').value=null;
        document.querySelector('.input-Email').value=null;
        document.querySelector('.input-Pan').value=null;
        document.querySelector('.input-Address').value=null;
        document.querySelector('.input-Bg').value=null;
    }
        
    else{
        //After every-thing , I will change to updating false  and then git-push
        let updating=true;
        const newurl="https://hanu-soni.github.io/Vaniella_Form/FamilyDetail";
        window.location.href=updating?'http://localhost:5500/FamilyDetail.html':newurl;
        //working on pure-progress bar
        const progressbar=document.createElement('div');
        progressbar.style.cssText='margin-top:10px;justify-content:center;display:flex;color:green;border-radius:100px;height:40px;width:40px'
        const container = document.getElementById("container");
        container.appendChild(progressbar);


    }
    
       
        
    
}



    //not working may be due different page issue
    function submit()
    {
        console.log("started")

    family.fathername=document.querySelector('.input-father').value;
    family.confather=document.querySelector('.input-father-contact').value;;
    family.agefather=document.querySelector('.input-father-age').value;
    family.mothername=document.querySelector('.input-mother').value;
    family.conmother=document.querySelector('.input-mother-contact').value;
    family.agemother=document.querySelector('.input-mother-age').value;
    console.log(family);
    for (const [key, value] of Object.entries(family)) {
        if(value.length==0)
        {
            alert(`${key} is missing`)
            checkfill=false;
            break;
        }
    }
    localStorage.setItem('family-detail',family);

    }
    


            