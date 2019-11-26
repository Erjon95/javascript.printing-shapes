function getLine(length) {
    line = "";
    for(let i=0; i<length; i++) {
        line += "*";
    }
    return line;
}



function getBox(width, height) {
    output = "";
    for(let i=0; i<height; i++) {
        output += getLine(width) + "\n";
    }
    return output;
}



function getBottomLeftTriangle(length) {
    result = "";
    for(let j=1; j<=length; j++) {
        result += getLine(j) + "\n";
    }
    return result;
}


function getUpperLeftTriangle(length) {
    result = "";
    for(let i=length; i>=0; i--) {
        result += getLine(i) + "\n";
    }
    return result;
}



function getPyramid(length) {
    for(let i=1; i<= length; i++){
        let str = ' '.repeat(length-i);
        let str2 = '*'. repeat(i*2 -1)

        console.log(str + str2 + str);
    }
}


function getCheckerboard(width, height) {
    var board = "";

    for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            if ((x + y) % 2 == 0) {
                board += " ";
            } else {
                board += "*";
            }
        }
        board += "\n";
        return board;
    }
}
