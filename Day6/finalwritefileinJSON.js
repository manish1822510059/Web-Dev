 //node finalwritefileinJSON.js --dest=team.json

 let minimist = require('minimist');
 let fs = require('fs');
 let args = minimist(process.argv);
 let teams =[

    {
   name :"India",
   rank:1,
   matches :[
       {
       vs: "England",
       result:"win"
       },
       {
        vs: "Austrila",
        result:"win" 
       }
   ]
    },
    {
        name :"Austrila",
        rank:2,
        matches :[
            {
            vs: "india",
            result:"Loss"
            },
            {
             vs: "England",
             result:"win"  
            }
        ]
    },
    {
        name :"England",
        rank:3,
        matches :[
            { 
            vs: "india",
            result:"Loss"
            },
            { 
             vs: "Austrila",
             result:"Loss" 
            }
        ] 
    }
 ];
 let json = JSON.stringify(teams);
 fs.writeFileSync(args.dest,json,"utf-8");//stringify convert JSO to JSON can't br printed or saved .it has to be converted to jsonb via JSON. Stringify  so
 that it can printed or saved.


//  fs.writeFile(args.dest,json,"utf-8",function(err,res){
//    if(err){
//        console.log(err);
// }else{console.log(res);
// }


//  });