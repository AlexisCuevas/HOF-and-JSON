//const fs = require('fs')
const volcanoes = require('./volcano.json');

class VolcanoAnalyzer {
    // Return the volcanoes that erupted in the 1990s.
    eruptedInNineties() {
        let ninetiesVolcanoes = []
        for(let n=0; n<volcanoes.length; n++){
            if(volcanoes[n].Year >= 1990 && volcanoes[n].Year <=1999){
                ninetiesVolcanoes.push(volcanoes[n])
            }
        }
        return ninetiesVolcanoes
    }

    //hotshot way of doing loops
    ninetiesVolcanoesWithFilter(){
        const result = volcanoes.filter(volcano => {
            return volcano.Year >= 1990 && volcano.Year <=1999
        })
        return result
    }


    //Return an array of volcanoe names that had a Volcanic Explosivity Index (VEI) of 7 or higher
    VEIof7orHigher(){
       let veiAbove7 = []
       for(let n=0; n<volcanoes.length; n++){
           if(volcanoes[n].VEI >= 7){
               veiAbove7.push(volcanoes[n])
           }
       }
       return veiAbove7
    }

    //hotshot way
    VEIof7orHigherWithFilter(){
        const result = volcanoes.filter(volcano=>{
            return volcano.VEI >= 7
        })
        return result
    }

    //return the name of the eruption that caused the highest number of recorded deaths
    maxDeath(){
        let mostDangerousVolcano = volcanoes[0]
        for(let n=1; n<volcanoes.length; n++){
            if(mostDangerousVolcano.DEATHS < volcanoes[n].DEATHS){
                mostDangerousVolcano = volcanoes[n]
            }
        }
        return mostDangerousVolcano
    }

        for(let n=1; n < volcanoes.length; n++){
            if(volcanoes[n].Agent == "M"){
                mostDangerouspercentByMudslide.push(volcanoes[n])
            }
        }
        return percentByMudslide.length / volcanoes.length
    }

    percentMudslidesWithFilter(){
        const result = volcanoes.filter(volcano=>{
            return volcano.Agent == "M"
        })
        return result.length / volcanoes.length
    }



    //Return the most common type of volcano in the set.
    mostCommonVolcanoType(){
   
    }
}

const volcanoAnalyzer = new VolcanoAnalyzer()

//console.log(volcanoAnalyzer.eruptedInNineties())
//console.log(volcanoAnalyzer.ninetiesVolcanoesWithFilter())
//console.log(volcanoAnalyzer.VEIof7orHigher())
console.log(volcanoAnalyzer.maxDeath())
volcanoAnalyzer.mostCommonVolcanoType()