export default function updateUniqueItems(map_arg){
    if (!map_arg instanceof Map){
        throw new Error('Cannot process');
    }
    for (let [key, value] of map_arg){
        if (value === 1){
            map_arg.set(key, 100);
        }
    }
}