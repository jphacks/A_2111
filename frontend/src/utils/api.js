
export const handleID = async()=>{
    var l = 8;
    var c = "abcdefghijklmnopqrstuvwxyz0123456789";
    var cl = c.length;
    var r = "";
    for(var i=0; i<l; i++){
    r += c[Math.floor(Math.random()*cl)];
    }
    console.log(r);
    return r;
}