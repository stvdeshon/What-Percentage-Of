function whatPercentageOf(num, percentageOf){

    const increasedNum = num * 100;
    const increasedPercentageOf = percentageOf * 100;

    const answer = (increasedNum / increasedPercentageOf) * 100;

    return answer;

}

whatPercentageOf(30, 62.5);