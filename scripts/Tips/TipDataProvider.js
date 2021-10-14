const tipCollection = [
    {
        tank: "Saltwater",
        cleaning: "Once a week",
        salinity: "VERY SALTY",
        temperature: 100,
        thoughts: "I am the best fish man - Martin"
    }
]



export const useTips = () => {
    return tipCollection.slice()
}