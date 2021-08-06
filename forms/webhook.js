document.getElementById("send").onclick = (e) => {
    const name = document.getElementById("name").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value
    const email = document.getElementById("email").value
    

    fetch('https://discord.com/api/webhooks/873148141325660211/28XnTjKzLJ0p8Vf09ASGvFOMGT8PWhclJhTQDzqOFSZYlgTuZR9huy5e9LLPiRhXQE8C', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "content": null,
                "embeds": [{
                    "color": null,
                    "fields": [{
                            "name": "Email",
                            "value": email
                        },
                        {
                            "name": "Message",
                            "value": message
                        },
                        {
                            "name": "subject",
                            "value": subject
                        },
                        {
                            "name": "Message",
                            "value": message
                        }
                    ]
                }],
                "username": "You received a message"
            })
        })
        .then(_=>document.getElementById("response").innerText = "You succesfully sent your message")
        .catch(_=>document.getElementById("error").innerText = "There was an error :/")
}