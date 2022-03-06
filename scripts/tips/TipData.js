const tipCollection = [
    {
        process: "Cleaning the Tank",
        step1: "Do this.",
        step2: "Do that.",
        step3: "Do something else.",
        step4: "Ok, that's good."
    },

    {
        process: "Water Salinity",
        step1: "Do another thing.",
        step2: "Then this.",
        step3: "No, not that.",
        step4: "That seems right."
    },

    {
        process: "Water Temperature",
        step1: "Don't make it too cold.",
        step2: "Don't make it too hot.",
        step3: "Make it just right.",
        step4: "Ok, you're done."
    }
]


export const getTips = () => {
    return tipCollection
}