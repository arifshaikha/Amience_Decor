


function sendEmail() {
    let name=document.getElementById('name').value;
    let emailID=document.getElementById('email').value;
    let mobile=document.getElementById('mobileNo').value;
    let message=document.getElementById('message').value;
    let Msgbody= `<br/><br/>Name: <b>${name}</b> <br/><br/> Email: <b>${emailID} </b><br/><br/> 
    Contact No.: <b>${mobile}</b><br/> <br/> Message: <b>${message}</b>`;



    Email.send({
        SecureToken: "68e3e409-b1e5-49e4-b994-452158987463",
       
        To: 'marketingtrick21@gmail.com',
        From: "marketingtrick21@gmail.com",
        Subject: "New Enquiry",
        Body: Msgbody
    }).then(
        message => {
            if(message=='OK')
            {
                Swal.fire(
                    'Thank You!',
                    'We will get back to you at the earliest!',
                    'success'
                  )
            }
            else{
                Swal.fire(
                    'Something went wrong!',
                    ' ',
                    'error'
                  )
            }

        }
    );
}

