const agruppingValuesInArray = (array:Array<string>, numberOfElementsToAgroupe:number): Array<object> | Error => {
    if (array.length % numberOfElementsToAgroupe !== 0) {
        return Error(`Impossible to agroup elemnts in group of ${numberOfElementsToAgroupe} in an array with ${array.length} elements`);
    }

    let newArray: Array<object> = []

    for (let i = 0; i < array.length; i += numberOfElementsToAgroupe) {
        const key = array[i + 1];
        const value = array[i + 2];
    
        const objeto: { [key: string]: string } = {};
        objeto[key] = value;
    
        newArray.push(objeto);
      }

    return newArray
}

export default agruppingValuesInArray
