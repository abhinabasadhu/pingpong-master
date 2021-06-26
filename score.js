function populateHighScores() {
    const scoreStr = window.localStorage.getItem("scores")
    const score = JSON.parse(scoreStr)

    if (score) {
        score.sort((a, b) => (a.score < b.score ? 1 : -1))

        const length = score.length < 5 ? score.length : 5
        let arr = []
        if (score.length < 5) {
            arr = score
        } else {
            arr = score.slice(0, 5)
        }
        var table = document.getElementById("highscore-table")
        const reversedScore = arr.reverse()
        reversedScore.forEach((item, index) => {
            if (index < 5) {
                // Create an empty <tr> element and add it to the 1st position of the table:
                var row = table.insertRow(0)

                // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                var cell1 = row.insertCell(0)
                var cell2 = row.insertCell(1)

                // Add some text to the new cells:
                cell1.innerHTML = item.username
                cell2.innerHTML = item.score
                console.log(item)
            }
        })
    }
    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(0)

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)

    // Add some text to the new cells:
    cell1.innerHTML = "Name"
    cell2.innerHTML = "Score"
}
populateHighScores()