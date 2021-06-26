function signUp() {
    var userObj = {}
    userObj.username = document.getElementById("usernameInput").value
    userObj.userId = document.getElementById("userIdInput").value
    userObj.email = document.getElementById("emailInput").value
    userObj.password = document.getElementById("passwordInput").value

    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    if (userObj.username.length < 8) {
        alert(
            "Username invalid \n Please submit an username at least 8 characters long"
        )
        return
    }
    if (userObj.userId.length < 5) {
        alert(
            "user Id invalid \n Please submit an user Id at least 5 characters long"
        )
        return
    }
    if (!userObj.email.match(emailRegex)) {
        alert("Email invalid \n Please submit a valid email id")
        return
    }
    if (userObj.password.length < 8) {
        alert(
            "Password too short \n Please submit a password at least 8 characters long"
        )
        return
    }

    const dataStr = window.localStorage.getItem("users")
    let data = JSON.parse(dataStr)
    if (!data) {
        data = []
    }
    data.push(userObj)
    const newDataStr = JSON.stringify(data)
    window.localStorage.setItem("users", newDataStr)
    document.getElementbyId("Result").innerHTML =
        "<b> Registration Successful.</b>"
}