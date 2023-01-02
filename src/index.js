module.exports = function toReadable (number) {
    let tostring1 = number.toString();
    let arraystring = tostring1.split('')
    let thirdnumber = '';
    let secondnumber = '';
    let firstnumber = '';
    let a = arraystring[0];
    let b = arraystring[1];
    let c = arraystring[2];
    if (number == 0){return 'zero'}
    if (number == 11){return 'eleven'}
    if (number == 12){return 'twelve'}
    if (number == 13){return 'thirteen'}
    if (number == 14){return 'fourteen'}
    if (number == 15){return 'fifteen'}
    if (number == 16){return 'sixteen'}
    if (number == 17){return 'seventeen'}
    if (number == 18){return 'eighteen'}
    if (number == 19){return 'nineteen'}
    if (number == 10){return 'ten'}
    if (number ==100){return 'one hundred'}
    if (number < 10)
    {
        switch(tostring1)
        {
            case '1': thirdnumber = 'one';break;
            case '2': thirdnumber = 'two';break;
            case '3': thirdnumber = 'three';break;
            case '4': thirdnumber = 'four';break;
            case '5': thirdnumber = 'five';break;
            case '6': thirdnumber = 'six';break;
            case '7': thirdnumber = 'seven';break;
            case '8': thirdnumber = 'eight';break;
            case '9': thirdnumber = 'nine';break;
        }
    }
    if (number >10 && number < 100)
    {
        switch(a)
        {
            case '2': secondnumber = 'twenty ';break;
            case '3': secondnumber = 'thirty ';break;
            case '4': secondnumber = 'forty ';break;
            case '5': secondnumber = 'fifty ';break;
            case '6': secondnumber = 'sixty ';break;
            case '7': secondnumber = 'seventy ';break;
            case '8': secondnumber = 'eighty ';break;
            case '9': secondnumber = 'ninety ';break;
        }
        switch(b)
        {
            case '1': thirdnumber = 'one';break;
            case '2': thirdnumber = 'two';break;
            case '3': thirdnumber = 'three';break;
            case '4': thirdnumber = 'four';break;
            case '5': thirdnumber = 'five';break;
            case '6': thirdnumber = 'six';break;
            case '7': thirdnumber = 'seven';break;
            case '8': thirdnumber = 'eight';break;
            case '9': thirdnumber = 'nine';break;
        }
    }
    if ( number > 100 && number < 1000)
    {
        switch(a)
        {
            case '1': firstnumber = 'one hundred '; break;
            case '2': firstnumber = 'two hundred ';break;
            case '3': firstnumber = 'three hundred ';break;
            case '4': firstnumber = 'four hundred ';break;
            case '5': firstnumber = 'five hundred ';break;
            case '6': firstnumber = 'six hundred ';break;
            case '7': firstnumber = 'seven hundred ';break;
            case '8': firstnumber = 'eight hundred ';break;
            case '9': firstnumber = 'nine hundred ';break;
        }
        switch(b + c)
        {
            case '10': return (firstnumber +'ten');
            case '11': return (firstnumber +'eleven');
            case '12': return (firstnumber +'twelve');
            case '13': return (firstnumber +'thirteen');
            case '14': return (firstnumber +'fourteen');
            case '15': return (firstnumber +'fifteen');
            case '16': return (firstnumber +'sixteen');
            case '17': return (firstnumber +'seventeen');
            case '18': return (firstnumber +'eighteen');
            case '19': return (firstnumber +'nineteen');
        }
        switch(b)
        {
            case '2': secondnumber = 'twenty ';break;
            case '3': secondnumber = 'thirty ';break;
            case '4': secondnumber = 'forty ';break;
            case '5': secondnumber = 'fifty ';break;
            case '6': secondnumber = 'sixty ';break;
            case '7': secondnumber = 'seventy ';break;
            case '8': secondnumber = 'eighty ';break;
            case '9': secondnumber = 'ninety ';break;
        }
        switch(c)
        {
            case '1': thirdnumber = 'one';break;
            case '2': thirdnumber = 'two';break;
            case '3': thirdnumber = 'three';break;
            case '4': thirdnumber = 'four';break;
            case '5': thirdnumber = 'five';break;
            case '6': thirdnumber = 'six';break;
            case '7': thirdnumber = 'seven';break;
            case '8': thirdnumber = 'eight';break;
            case '9': thirdnumber = 'nine';break;
        }
    }
    let kekw = firstnumber + secondnumber + thirdnumber;
    let keke = kekw.trim();
    return (keke);
}
