import { useFish } from './Fish/FishDataProvider.js'
import { FishList } from './Fish/FishList.js'
import { useTips } from './Tips/TipDataProvider.js'

const allTheFish = useFish()

for (const fish of allTheFish) {
    console.log(fish)
}

FishList()


const allTheTips = useTips()

for (const tips of allTheTips) {
    console.log(tips)
}