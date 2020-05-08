const bitCounting = (int) => {

    //if statement checks for negative integers and zero.
    if (int <= 0) {
        console.log("Enter a positive number");
        return;
    }

    //Integer is converted to binary form with JS toSting() method.
    let binary = int.toString(2);
    console.log(`integer is ${binary} in binary form`);

    /*Number of 1s is determined by JS regular expression match(),
    match() generates an array of 1s, and the length of the array is then returned*/
    let oneCount = binary.match(/1/g);
    console.log(`Number of 1s is ${oneCount.length}`);
    return;
}

bitCounting(6789);