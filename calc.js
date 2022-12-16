function sum(stringOfNumbers){
    if (!stringOfNumbers) {
        return 0;
    }

    stringOfNumbers = stringOfNumbers + "w";

    let acceptables = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let minus = ["-"];

    let pendingNum = "";

    let nums = [];

    let negatives = [];
    let greaterThan1000 = [];

    for (let i = 0; i < stringOfNumbers.length; i ++) {
        let char = stringOfNumbers[i];
        let nextI = stringOfNumbers[i+1]
        let len = pendingNum.length;
        if (acceptables.includes(char)) {
            pendingNum = pendingNum + char;
        } else if (minus.includes(char) && acceptables.includes(nextI)){
            if (len > 0) {
                if (parseFloat(pendingNum) > 1000) {
                    greaterThan1000.push(pendingNum);
                    pendingNum = char;
                } else {
                    nums.push(parseFloat(pendingNum));
                    pendingNum = char;
                }
            } else {
                pendingNum = char;
            }
        } else {
            if (len > 0) {
                if (minus.includes(pendingNum[0])) {
                    negatives.push(pendingNum);
                    pendingNum = "";
                } else if (parseFloat(pendingNum) > 1000) {
                    greaterThan1000.push(pendingNum);
                    pendingNum = ""
                } else {
                    nums.push(parseFloat(pendingNum));
                    pendingNum = "";
                }
            } else continue;
        }
    }

    if (negatives.length > 0) {
        return "negatives not allowed: " + negatives.join(", ");
    } else {
        result = 0;
        for (let i = 0; i < nums.length; i++) {
            result += nums[i];
        }
        return result;;
    }
}

module.exports = sum;
