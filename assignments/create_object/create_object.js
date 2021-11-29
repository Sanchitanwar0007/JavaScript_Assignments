function CreateObject(arr) {
    // Write your code here
    map={};
    for(var i=0;i<arr.length;i+=2){
        map[arr[i]]=arr[i+1];
    }
    return map;
}

module.exports = CreateObject;
