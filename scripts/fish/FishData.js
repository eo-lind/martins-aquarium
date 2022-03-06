const fishCollection = [
    {
        species: "Yellow Tang",
        length: 25,
        location: "Honolulu, HI",
        saltwater: true,
        image: "bluefish.jpg",
        name: "Frodo",
        diet: "Insects"
    },

    {
        species: "Sword Fish",
        length: 3,
        location: "Florida",
        saltwater: true,
        image: "sf.jpg",
        name: "Sharpy",
        diet: "Pop Rocks"
    },

    {
        species: "Shark",
        length: 6,
        location: "Florida",
        saltwater: true,
        image: "shark.jpg",
        name: "Bruce",
        diet: "Yellow Tang"
    },

    {
        species: "Blobfish",
        length: 40,
        location: "Sydney, NSW",
        saltwater: true,
        image: "blobfish.jpg",
        name: "Jimmy",
        diet: "Rude fish"
    },

    {
        species: "Old Woman Angelfish",
        length: 22,
        location: "Naples, FL",
        saltwater: true,
        image: "angelfish.jpg",
        name: "Helen",
        diet: "Spam"
    },

    {
        species: "Catfish",
        length: 9,
        location: "Yazoo City, MS",
        saltwater: false,
        image: "catfish.jpg",
        name: "Ronnie Dobbs",
        diet: "Funyuns"
    }
]


export const getFish = () => {
    return fishCollection
}

// returns fish that are multiples of 3 in length:
export const getMostHolyFish = () => {
       const holyFishArray = []

    for (const singleFish of fishCollection) {
        if (singleFish.length % 3 === 0) {
            holyFishArray.push(singleFish)
        }
    }
    
    return holyFishArray
}


// returns fish that are multiples of 5 in length:
export const getSoldierFish = () => {
    const soldiersArray = []

    for (const singleFish of fishCollection) {
        if (singleFish.length % 5 === 0) {
            soldiersArray.push(singleFish)
        }
    }

    return soldiersArray
}


// returns fish of all other lengths:
export const getUnworthy = () => {
    const unworthyArray = []

    for (const singleFish of fishCollection) {
        if (singleFish.length % 5 !== 0 && singleFish.length % 3 !== 0) {
            unworthyArray.push(singleFish)
        }
    }

    return unworthyArray
}