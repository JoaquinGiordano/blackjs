const group = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], 
    ['j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q'], 
    ['r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
    ['J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q'],
    ['R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    ['+', '(', ')', '{', '}', '[', ']', '<', '>'],
    ['!', '#', '@', ',', '.', ';', ':', '-', '_'],
    ['0', '"', '°', '¿', '?', '*', '%', "/", " "]
]

const godane = {
    
    /**
     *  @function godane.encode encode a String in GodaneCode
     *  @param {String} data String to encode
     *  @return {String} Encoded Data
    */
   
    encode: function(data){
        let final = '';
        const dl = data.split('')
        dl.forEach(i => {
            for (let g = 0; g <= 9; g++) {
                if (group[g].indexOf(i) > -1){
                    let ag = [];
                    switch (g) {
                        case 0:
                        case 3:
                        case 6:
                        case 9:
                            ag = group[2];
                            break;
                        case 1:
                        case 4:
                        case 7:
                            ag = group[0];
                            break;
                        case 2:
                        case 5:
                        case 8:
                            ag = group[1];
                            break;
                            
                    }
                    final += `${ag[group[g].indexOf(i)]}${g}`;
                }
            }
        });
    return final;
    },

     /**
     *  @function godane.decode decode a String in GodaneCode
     *  @param {String} data String to decode
     *  @return {String} Decoded Data
    */
   
    decode: function(data){
        let final = '';
        let counter = 0;
        const dl = data.split('')
        for (let i = 0; i < dl.length / 2; i++) {
            let charpos = 0;
            char = dl[counter];
            chargroup = dl[counter + 1];
            ag = group[chargroup];
            switch (Number(chargroup)) {
                case 0:
                case 3:
                case 6:
                case 9:
                    charpos = group[2].indexOf(char)
                    break;
                case 1:
                case 4:
                case 7:
                    charpos = group[0].indexOf(char)
                    break;
                case 2:
                case 5:
                case 8:
                    charpos = group[1].indexOf(char)
                    break;

            }
            final += ag[charpos]
            counter += 2;
        }
        return final;
    }
}

