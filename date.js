
exports.getDate= function (){
    const today=new Date();
    const options={
        weekday: 'long',
        day: 'numeric',
        year: 'numeric',
        month: 'short'
    };
    return today.toLocaleDateString("en-US",options);
}
exports.getDay= function (){
    const today=new Date();
    const options={
        weekday: 'long'
    };
    return today.toLocaleDateString("en-US",options);
}
