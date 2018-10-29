import { readFileSync } from 'fs';
const volcanoes = JSON.parse(readFileSync('./volcano.json'));

class VolcanoAnalyzer {
    // Return the volcanoes that erupted in the 1990s.
    eruptedInNineties() {
  
    }

    //Return an aray of volcanoe names that had a Volcanic Explosivity Index (VEI) of 7 or higher
    VEIof7orHigher(){
     
    }

    //return the name of the eruption that ccaused the highest number of recorded deaths
    maxDeath(){
  
    }

    //Return the percentage of eruptions that caused mudslides.
    percentEruptionOfMudslides(){
    
    }

    //Return the most common type of volcano in the set.
    mostCommonVolcanoType(){
   
    }
}

const volcanoAnalyzer = new VolcanoAnalyzer();

volcanoAnalyzer.mostCommonVolcanoType();