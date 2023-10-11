


function sendEmail() {
    let name = document.getElementById('name').value;
    let emailID = document.getElementById('email').value;
    let mobile = document.getElementById('mobileNo').value;
    let message = document.getElementById('message').value;
    let Msgbody = `<br/><br/>Name: <b>${name}</b> <br/><br/> Email: <b>${emailID} </b><br/><br/> 
    Contact No.: <b>${mobile}</b><br/> <br/> Message: <b>${message}</b>`;

    if (mobile.length == 10) {

        Email.send({
            SecureToken: "b41e2658-423f-42f3-acb4-6955a6e1b6b3",
            To: 'ambiencedecorsales@gmail.com',
            From: "ambiencedecorsales@gmail.com",
            Subject: "New Enquiry ( " + new Date(). toLocaleDateString("en-US") + " )",
            Body: Msgbody
        }).then(
            message => {
                if (message == 'OK') {
                    Swal.fire(
                        'Thank You!',
                        'We will get back to you at the earliest!',
                        'success'
                    )
                }
                else {
                    Swal.fire(
                        'Something went wrong!',
                        ' ',
                        'error'
                    )
                }

            }
        );
    }

    else{
        Swal.fire(
            'Please input a valid!',
            '10 digit mobile number',
            'error'
        )
    }
}



