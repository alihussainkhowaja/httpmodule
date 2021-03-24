const http=require('http');
var D =require('./firstmodule');
const E =require('./enigma');
http.createServer(
    function(req,res){
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.write('created a server, Today is:\n' +D.date())
        res.write('\n' +D.Myname())
        res.end("\nkillin the server")
        
    }
).listen(8080, () => {
    console.log('server is running fine on 8080')
})
function sayHello(name){
    console.log('hello' +name);
} sayHello('Alihussain');
console.log(E.morning("Alihussain"));