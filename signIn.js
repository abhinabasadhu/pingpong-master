function signIn() {
    const userId = document.getElementById("userId").value
    const password = document.getElementById("password").value

    let data = JSON.parse(window.localStorage.getItem("users"))

    let success = false
    let currentUser = null

    data.forEach(item => {
        if (item.username === userId) {
            if (item.password === password) {
                success = true
                currentUser = item
            }
        }
    })


    if (success) {
        alert("Signed in")
        window.localStorage.setItem("currentUser", JSON.stringify(currentUser))
    } else {
        alert("Not found")
    }
}

function getCurrentUser() {
    var currentUser = window.localStorage.getItem("currentUser")
    return JSON.parse(currentUser)
}

function signout() {
    window.localStorage.removeItem("currentUser")
}