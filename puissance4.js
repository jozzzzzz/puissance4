var grid = [[[0],[0],[0],[0],[0],[0],[0]],
    [[0],[0],[0],[0],[0],[0],[0]],
    [[0],[0],[0],[0],[0],[0],[0]],
    [[0],[0],[0],[0],[0],[0],[0]],
    [[0],[0],[0],[0],[0],[0],[0]],
    [[0],[0],[0],[0],[0],[0],[0]]]

var id = [5,5,5,5,5,5,5] //to verify if the grid is empty
var color = 2

function showOver(y, color) {
    if (id[y] == -1) {
        return []
    }

    let caseId = String(id[y]) + String(y) 
    let caseClass = "cercle" + color

    document.getElementById(caseId).className = caseClass
}

function hideOver(y) {
    if (id[y] == -1) {
        return []
    }

    let caseId = String(id[y]) + String(y)
    
    document.getElementById(caseId).className = "cercle3"
}

function placePiece(y, col) {
    if (id[y] == -1) {
        return []
    }
    let caseId = String(id[y]) + String(y)
    let caseClass = "cercle" + col
    grid[id[y]][y] = color

    //fill the place
    id[y] -= 1

    //Change the color of the player
    if (color == 2) {
        color -= 1 //red
    } else {
        color += 1 // yellow
    }
    
    document.getElementById(caseId).className = caseClass
    
    var win = verifyWin(id[y]+1, y, col)

    if (win == "Winner") {
        var resultat = document.getElementById("back")
        resultat.innerHTML="<img src='https://www.pngplay.com/wp-content/uploads/8/Winner-PNG-Free-File-Download.png' />"
    }
}

function verifyWin(x, y, color) {
    
    let res = ""
    let matrice = [[1,1],[1,0],[1,-1],[0,1],[0,-1],[-1,1],[-1,0],[-1,-1]]
    for (let i = 0; i < 7; i++) {
        res += verifyLine(x, y, color, matrice[i])
    }
    
    return res
}

function verifyLine(x, y, color, matrice) {
    let number = 0
    for (let j = 0; j < 4; j++) {
        if (x < 6 && y < 7 && x >= 0 && y >= 0 && grid[x][y] == color) {
            x += matrice[0]
            y += matrice[1]
            number += 1
        } 
        
    }
    if (number == 4) {
        return "Winner"
    } else return ""
}
