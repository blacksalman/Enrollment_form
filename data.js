window.onload=function(){
    showData();
}
function insertIntoTable(){

    var email=document.getElementById("emailid").value;
    var Name=document.getElementById("username").value;
    var url=document.getElementById("websiteUrl").value;
    var gender=document.querySelector('input[name="gridRadios"]:checked').value;
    var imgSrc=document.getElementById("src").value;
    if(imgSrc==""){
        imgSrc="default.png";
    }
    
     //for getting all selected checked boxes i.e skills
    var skill='';
    var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    for (var checkbox of markedCheckbox) {
        skill=skill+checkbox.value + "  ";
    }
    
    let user_records=new Array();
    user_records=JSON.parse(sessionStorage.getItem("users"))?JSON.parse(sessionStorage.getItem("users")):[]

    if(user_records.some((v)=>{return v.email==email}))
    {
        alert("Duplicate data");
    }
    else
    {
        user_records.push({
        "name":Name,
        "email":email,
        "website":url,
        "gender":gender,
        "skill":skill,
        "src":imgSrc
        });
        sessionStorage.setItem("users",JSON.stringify(user_records));
        showData();
        
    }
}
function getData(){
    var jsonStringObj = sessionStorage.getItem("users"); // This is the json string we stored

    var obj = JSON.parse(jsonStringObj); // this is your object

    //console.log(obj); 
}
function showData()
{
    document.getElementById("showUsers").innerHTML="";
    let get_user_records=new Array();
    get_user_records=JSON.parse(sessionStorage.getItem("users"));
    console.log(get_user_records);
    if(get_user_records)
    {
        for(let i=0;i<get_user_records.length;i++)
        {
            console.log(get_user_records[i]);
            let addDiv=document.createElement('div');
            addDiv.className="row";
            addDiv.innerHTML='<div class="col-sm-7 image" style="padding: 10px;"><h6>'+get_user_records[i].name+'</h6><br>'+get_user_records[i].gender+'<br>'+get_user_records[i].email+
            '<br><a href="'+get_user_records[i].website+'" target="_blank">'+get_user_records[i].website+'</a><br>'+get_user_records[i].skill+
            '</div><div class="col-sm-3 image" style="padding: 10px;"><img src="'+get_user_records[i].src+'" alt="" ></div>';
            document.getElementById("showUsers").appendChild(addDiv);

        }
    }
}




    
    
