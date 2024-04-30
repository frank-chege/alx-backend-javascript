export default function guardrail(mathFunction){
    let array = [];
    let text = 'Guardrail was processed';
    try{
        let value = mathFunction();
        array.push(value, text);
    }
    catch(error){
        array.push(error, text);
    }
    return array;
}