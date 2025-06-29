const steps = [
    "edit",
    "puzzles",
    "hints",
    "indications",
    "team",
    "class",
    "after",
    "evaluation",
    "sharing"
];

exports.steps = () => [...steps];

exports.nextStep = (index) => {
    const currentStep = steps.indexOf(index);

    if (currentStep >= steps.length - 1) {
        return "";
    }
    return steps[currentStep + 1];
};

exports.prevStep = (index) => {
    const currentStep = steps.indexOf(index);

    if (currentStep === 0) {
        return false;
    }
    return steps[currentStep - 1];
};
