var c = document.getElementById("ping")
var ctx = c.getContext("2d")
var userX = 20
var userY = 10
var compX = 580
var compY = 380
var cirX = 300
var cirY = 200
var destX = 200
var destY = 200
var userScore = 0
var compScore = 0
var compTurn = false
var intervalX = 0
var intervalY = 0

var compInterval = 0

document.onkeydown = checkKey

function checkKey(e) {
    e = e || window.event
    if (e.keyCode == "38") {
        moveUp()
    } else if (e.keyCode == "40") {
        moveDown()
    } else if (e.keyCode == "32") {
        startgame()
    }
}

function startgame() {
    destX = 20
    destY = findRandomY()
    intervalX = (destX - 300) / 25000
    intervalY = (destY - 200) / 25000
    setTimeout(moveball, 20)
}

function moveball() {
    ctx.clearRect(0, 0, c.width, c.height)
    cirX = cirX + intervalX
    cirY = cirY + intervalY
    if (compTurn) {
        if (Math.abs(compY - destY) > 10) {
            compY = compY + compInterval
        } else {
            compTurn = false
        }
    }
    if (cirX < 0) {
        intervalX = 0
        intervalY = 0
        cirX = 300
        cirY = 200
        compScore++
        updateScores()
    } else if (cirX > 600) {
        intervalX = 0
        intervalY = 0
        cirX = 300
        cirY = 200
        userScore++
        updateScores()
    } else if (Math.abs(cirX - userX) < 10 && Math.abs(cirY - userY) < 40) {
        destX = 580
        destY = findRandomY()
        intervalX = (destX - cirX) / 15000
        intervalY = (destY - cirY) / 15000
        compInterval = (destY - compY) / 19900
        compTurn = true
        setTimeout(moveball, 20)
    } else if (Math.abs(cirX - compX) < 10 && Math.abs(cirY - compY) < 30) {
        destX = 20
        destY = findRandomY()
        intervalX = (destX - cirX) / 26000
        intervalY = (destY - cirY) / 26000
        setTimeout(moveball, 20)
    } else if (!Math.abs(cirX - destX) < 10 && !Math.abs(cirY - destY) < 10) {
        setInterval(moveball, 20)
    }
    redraw()
}

function updateScores() {
    document.getElementById(
        "score-game"
    ).innerHTML = ` You : ${userScore} | Computer : ${compScore}`
    if (userScore === 2) {
        const usercompletescore = userScore * 90 - compScore * 70 + 150
        document.getElementById(
            "score-game"
        ).innerHTML = `<span style='color:red;'>Congratulations!! </span>You won. </br> You scored ${usercompletescore}`
        storeScore(usercompletescore)
    } else if (compScore === 2) {
        const usercompletescore = userScore * 90 - compScore * 70
        document.getElementById(
            "score-game"
        ).innerHTML = `<span style='color:red;'>Better luck next time!! </span>You lost. </br> You scored ${usercompletescore}`
        storeScore(usercompletescore)
    }
}

function storeScore(score) {
    const scores = JSON.parse(window.localStorage.getItem("scores"))
    const currentUser = JSON.parse(window.localStorage.getItem("currentUser"))

    scores.push({ username: currentUser.username, score: score })

    window.localStorage.setItem("scores", JSON.stringify(scores))
}

function findRandomNumberRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function findRandomY() {
    return findRandomNumberRange(10, 390)
}

function findRandomX() {
    const value = findRandomNumberRange(1, 2)
    if (value === 1) {
        return 20
    } else {
        return 580
    }
}

function colli() {}

function moveUp() {
    var updatedY = userY - 20

    if (updatedY > 10) {
        userY = updatedY
        redraw()
    }
    event.cancel = true
}

function moveDown() {
    var updatedY = userY + 20

    if (updatedY <= 355) {
        userY = updatedY
        redraw()
    }
    event.cancel = true
}

function comp() {
    var updateY = compY
    if (updateY >= 10 || updateY <= -355) {
        compY = updateY
        redraw()
    }
}

function redraw() {
    ctx.canvas.width = ctx.canvas.width
    var gradient = ctx.createLinearGradient(0, 0, 170, 0)
    gradient.addColorStop("0", "magenta")
    gradient.addColorStop("0.5", "blue")
    gradient.addColorStop("1.0", "red")

    // Fill with gradient
    ctx.strokeStyle = gradient
    ctx.lineWidth = 10
    ctx.strokeRect(0, 0, 600, 400)

    ctx.lineWidth = 4
    ctx.moveTo(300, 0)
    ctx.lineTo(300, 400)
    ctx.stroke()
        // ctx.stroke(0, 300, 400, 300)

    ctx.lineWidth = 10
    ctx.moveTo(userX, userY)
    ctx.lineTo(userX, userY + 35)
    ctx.moveTo(compX, compY)
    ctx.lineTo(compX, compY - 35)
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(cirX, cirY, 15, 0, 2 * Math.PI)
    ctx.fill()
}

redraw()