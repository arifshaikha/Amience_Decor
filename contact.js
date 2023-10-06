


function sendEmail() {
    let name=document.getElementById('name').value;
    let emailID=document.getElementById('email').value;
    let mobile=document.getElementById('mobileNo').value;
    let message=document.getElementById('message').value;
    let Msgbody= `Name: ${name} <br/> Email: ${emailID} <br/> 
    Contact No.: ${mobile} <br/> Message: ${message}`;
    Email.send({
        SecureToken: "68e3e409-b1e5-49e4-b994-452158987463",
       
        To: 'marketingtrick21@gmail.com',
        From: "marketingtrick21@gmail.com",
        Subject: "New Enquiry",
        Body: Msgbody
    }).then(
        message => alert(message)
    );
}

