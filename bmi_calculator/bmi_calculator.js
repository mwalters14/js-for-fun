const calculateBMI = (mass, height) => {
    return mass / (height * height);
}

const compareBMI = (markBMI, johnBMI) => {
    if (markBMI > johnBMI) {return true}
    return false;
}

markBMI = calculateBMI(95, 1.88);
johnBMI = calculateBMI(85, 1.76);
console.log(compareBMI(markBMI, johnBMI));