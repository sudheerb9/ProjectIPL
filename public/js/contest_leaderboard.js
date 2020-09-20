var contest = 'contest2';
let cs =[];
let ec =[];
let ee =[];
let me =[];
let mm =[];
let ce =[];
let m1 =[];
let m2 =[];
let phd =[];
let alu =[];

var userRef = firebase.database().ref('users/');
userRef.once("value", function(snapshot) {
    snapshot.forEach(function(Snapshot){
        var playername ;
        var playerscore ;
        console.log(Snapshot.key);
        
        var branchRef = firebase.database().ref('users/'+ Snapshot.key + '/branch');
        branchRef.once("value", function(branch) {
            if(branch.val() =='Computer Science'){
                console.log(branch.val());
                var nameRef = firebase.database().ref('users/'+ Snapshot.key + '/name');
                nameRef.once("value", function(name) {
                    playername = name.val();
                    console.log(playername);
                })
                .then(function(){
                    var scoreRef = firebase.database().ref('users/'+ Snapshot.key +'/'+contest+ '/contestpoints');
                    scoreRef.once("value", function(points) {
                    playerscore = points.val();
                    console.log(playerscore)
                    })
                    .then(function(){
                        cs.push({name: playername, score:playerscore});
                        console.log('pushed');
                    })
                })

                
            }
            else if(branch.val() =='Electronics') {
                console.log(branch.val());
                var nameRef = firebase.database().ref('users/'+ Snapshot.key + '/name');
                nameRef.once("value", function(name) {
                    playername = name.val();
                    console.log(playername);
                }).then(function(){
                    var scoreRef = firebase.database().ref('users/'+ Snapshot.key +'/'+contest+ '/contestpoints');
                    scoreRef.once("value", function(points) {
                    playerscore = points.val();
                    console.log(playerscore)
                    })
                    .then(function(){
                        ec.push({name: playername, score:playerscore});
                        console.log('pushed');
                    })
                })

            }
            else if(branch.val() =='Electrical') {
                console.log(branch.val());
                var nameRef = firebase.database().ref('users/'+ Snapshot.key + '/name');
                nameRef.once("value", function(name) {
                    playername = name.val();
                    console.log(playername);
                }).then(function(){
                    var scoreRef = firebase.database().ref('users/'+ Snapshot.key +'/'+contest+ '/contestpoints');
                    scoreRef.once("value", function(points) {
                    playerscore = points.val();
                    console.log(playerscore)
                    })
                    .then(function(){
                        ee.push({name: playername, score:playerscore});
                        console.log('pushed');
                    })
                })
            }
            else if(branch.val() =='Mechanical') {
                console.log(branch.val());
                var nameRef = firebase.database().ref('users/'+ Snapshot.key + '/name');
                nameRef.once("value", function(name) {
                    playername = name.val();
                    console.log(playername);
                }).then(function(){
                    var scoreRef = firebase.database().ref('users/'+ Snapshot.key +'/'+contest+ '/contestpoints');
                    scoreRef.once("value", function(points) {
                    playerscore = points.val();
                    console.log(playerscore)
                    })
                    .then(function(){
                        me.push({name: playername, score:playerscore});
                        console.log('pushed');
                    })
                })
            }
            else if(branch.val() =='Metallurgy') {
                console.log(branch.val());
                var nameRef = firebase.database().ref('users/'+ Snapshot.key + '/name');
                nameRef.once("value", function(name) {
                    playername = name.val();
                    console.log(playername);
                }).then(function(){
                    var scoreRef = firebase.database().ref('users/'+ Snapshot.key +'/'+contest+ '/contestpoints');
                    scoreRef.once("value", function(points) {
                    playerscore = points.val();
                    console.log(playerscore)
                    })
                    .then(function(){
                        mm.push({name: playername, score:playerscore});
                        console.log('pushed');
                    })
                })
            }
            else if(branch.val() =='Civil') {
                console.log(branch.val());
                var nameRef = firebase.database().ref('users/'+ Snapshot.key + '/name');
                nameRef.once("value", function(name) {
                    playername = name.val();
                    console.log(playername);
                }).then(function(){
                    var scoreRef = firebase.database().ref('users/'+ Snapshot.key +'/'+contest+ '/contestpoints');
                    scoreRef.once("value", function(points) {
                    playerscore = points.val();
                    console.log(playerscore)
                    })
                    .then(function(){
                        ce.push({name: playername, score:playerscore});
                        console.log('pushed');
                    })
                })
            }
            else if(branch.val() =='M2') {
                console.log(branch.val());
                var nameRef = firebase.database().ref('users/'+ Snapshot.key + '/name');
                nameRef.once("value", function(name) {
                    playername = name.val();
                    console.log(playername);
                }).then(function(){
                    var scoreRef = firebase.database().ref('users/'+ Snapshot.key +'/'+contest+ '/contestpoints');
                    scoreRef.once("value", function(points) {
                    playerscore = points.val();
                    console.log(playerscore)
                    })
                    .then(function(){
                        m2.push({name: playername, score:playerscore});
                        console.log('pushed');
                    })
                })
            }
            else if(branch.val() =='M1') {
                console.log(branch.val());
                var nameRef = firebase.database().ref('users/'+ Snapshot.key +'/'+contest+ '/contestpoints');
                nameRef.once("value", function(name) {
                    playername = name.val();
                    console.log(playername);
                }).then(function(){
                    var scoreRef = firebase.database().ref('users/'+ Snapshot.key + '/points');
                    scoreRef.once("value", function(points) {
                    playerscore = points.val();
                    console.log(playerscore)
                    })
                    .then(function(){
                        m1.push({name: playername, score:playerscore});
                        console.log('pushed');
                    })
                })
            }
            else if(branch.val() =='Ph.D') {
                console.log(branch.val());
                var nameRef = firebase.database().ref('users/'+ Snapshot.key + '/name');
                nameRef.once("value", function(name) {
                    playername = name.val();
                    console.log(playername);
                }).then(function(){
                    var scoreRef = firebase.database().ref('users/'+ Snapshot.key +'/'+contest+ '/contestpoints');
                    scoreRef.once("value", function(points) {
                    playerscore = points.val();
                    console.log(playerscore)
                    })
                    .then(function(){
                        phd.push({name: playername, score:playerscore});
                        console.log('pushed');
                    })
                })
            }
            else if(branch.val() =='Alumni') {
                console.log(branch.val());
                var nameRef = firebase.database().ref('users/'+ Snapshot.key + '/name');
                nameRef.once("value", function(name) {
                    playername = name.val();
                    console.log(playername);
                }).then(function(){
                    var scoreRef = firebase.database().ref('users/'+ Snapshot.key +'/'+contest+ '/contestpoints');
                    scoreRef.once("value", function(points) {
                    playerscore = points.val();
                    console.log(playerscore)
                    })
                    .then(function(){
                        alu.push({name: playername, score:playerscore});
                        console.log('pushed');
                    })
                })
            }
        })

    })
}).then(setTimeout ( function(){
    console.log('sorting');
    cs.sort((a, b) => b.score - a.score);
    ec.sort((a, b) => b.score - a.score);
    ee.sort((a, b) => b.score - a.score);
    me.sort((a, b) => b.score - a.score);
    mm.sort((a, b) => b.score - a.score);
    ce.sort((a, b) => b.score - a.score);
    m1.sort((a, b) => b.score - a.score);
    m2.sort((a, b) => b.score - a.score);
    phd.sort((a, b) => b.score - a.score);
    alu.sort((a, b) => b.score - a.score);

    var score=0;
    console.log("cs");
    $.each(cs.slice(0,5), function(i, data) {
        score += data.score;
        console.log(data.name + ' ' + data.score);
    });
    console.log('cs final score is '+ score);
    score =0;
    console.log("ec");
    $.each(ec.slice(0,5), function(i, data) {
        score += data.score;
        console.log(data.name + ' ' + data.score);
    });
    console.log('ec final score is '+ score);
    score =0;
    console.log("ee");
    $.each(ee.slice(0,5), function(i, data) {
        score += data.score;
        console.log(data.name + ' ' + data.score);
    });
    console.log('ee final score is '+ score);
    score =0;
    console.log("me");
    $.each(me.slice(0,5), function(i, data) {
        score += data.score;
        console.log(data.name + ' ' + data.score);
    });
    console.log('me final score is '+ score);
    score =0;
    console.log("mm");
    $.each(mm.slice(0,5), function(i, data) {
        score += data.score;
        console.log(data.name + ' ' + data.score);
    });
    console.log('mm final score is '+ score);
    score =0;
    console.log("ce");
    $.each(ce.slice(0,5), function(i, data) {
        score += data.score;
        console.log(data.name + ' ' + data.score);
    });
    console.log('ce final score is '+ score);
    score =0;
    console.log("m1");
    $.each(m1.slice(0,5), function(i, data) {
        score += data.score;
        console.log(data.name + ' ' + data.score);
    });
    console.log('m1 final score is '+ score);
    score =0;
    console.log("m2");
    $.each(m2.slice(0,5), function(i, data) {
        score += data.score;
        console.log(data.name + ' ' + data.score);
    });
    console.log('m2 final score is '+ score);
    score =0;
    console.log("phd");
    $.each(phd.slice(0,5), function(i, data) {
        score += data.score;
        console.log(data.name + ' ' + data.score);
    });
    console.log('phd final score is '+ score);
    score =0;
    console.log("alu");
    $.each(alu.slice(0,5), function(i, data) {
        score += data.score;
        console.log(data.name + ' ' + data.score);
    });
    console.log('alu final score is '+ score);
    score =0;
    
},10000));

            
