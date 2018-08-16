/**
*   Calculate the area of a rectangle.
*
*   length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the rectangle's area.
**/
function getArea(length, width) {
    let area;
    // Write your code here
    area = parseFloat(length) * parseFloat(width);

    return area;
}

/**
*   Calculate the perimeter of a rectangle.
*	
*	length: The length of the rectangle.
*   width: The width of the rectangle.
*   
*	Return a number denoting the perimeter of a rectangle.
**/
function getPerimeter(length, width) {
    let perimeter;
    // Write your code here
    perimeter = 2 * (parseFloat(length) + parseFloat(width))

    return perimeter;
}

function main() {
    const length = 3;
    const width = 4.5;

    console.log(getArea(length, width));
    console.log(getPerimeter(length, width));
}

main()