function testGetLine(expectedOutput, numberOfStars) {
    test(expectedOutput, getLine, numberOfStars);
}

function testGetBox(expectedOutput, width, height) {
    test(expectedOutput, getBox, width, height);
}


function testGetCheckerboard(expectedOutput, width, height) {
    test(expectedOutput, getCheckerboard, width, height);
}

function testGetPyramid(expectedOutput, numberOfStars) {
    test(expectedOutput, getPyramid, numberOfStars);
}

function testGetUpperLeftTriangle(expectedOutput, numberOfStars) {
    test(expectedOutput, getUpperLeftTriangle, numberOfStars);
}

function testGetBottomLeftTriangle(expectedOutput, numberOfStars) {
    test(expectedOutput, getBottomLeftTriangle, numberOfStars);
}










function getLineTests() {
    testGetLine("*", 1);
    testGetLine("**", 2);
    testGetLine("***", 3);
}


function getBoxTests() {
    testGetBox("*\n", 1, 1);
    testGetBox("**\n**\n", 2, 2);
    testGetBox("***\n***\n***\n***\n", 3, 4);
}

function getBottomLeftTriangleTests() {
    testGetBottomLeftTriangle("", 1);
    testGetBottomLeftTriangle("", 2);
    testGetBottomLeftTriangle("", 3);
}

function getUpperLeftTriangleTests() {
    testGetUpperLeftTriangle("", 1);
    testGetUpperLeftTriangle("", 2);
    testGetUpperLeftTriangle("", 3);
}


function getPyramidTests() {
    testGetPyramid("", 1);
    testGetPyramid("", 2);
    testGetPyramid("", 3);
}


function getCheckerboardTests() {
    testGetCheckerboard("", 1, 1);
    testGetCheckerboard("", 2, 2);
    testGetCheckerboard("", 3, 4);
}

