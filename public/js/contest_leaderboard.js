var contest = 'contest5';
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
    alert('Hold on while we fetch results')
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

    var arr=[];
    var teamscore=0;
    console.log("cs");
    $.each(cs.slice(0,5), function(i, data) {
        teamscore += data.score;
        console.log(data.name + ' ' + data.score);
    });
    arr.push({name: 'cs', branch: 'Computer Science', score:teamscore});
    console.log('cs final score is '+ teamscore);
    teamscore =0;
    console.log("ec");
    $.each(ec.slice(0,5), function(i, data) {
        teamscore += data.score;
        console.log(data.name + ' ' + data.score);
    });
    arr.push({name: 'ec', branch:'Electronics', score:teamscore});
    console.log('ec final score is '+ teamscore);
    teamscore =0;
    console.log("ee");
    $.each(ee.slice(0,5), function(i, data) {
        teamscore += data.score;
        console.log(data.name + ' ' + data.score);
    });
    arr.push({name: 'ee', branch:'Electrical', score:teamscore});
    console.log('ee final score is '+ teamscore);
    teamscore =0;
    console.log("me");
    $.each(me.slice(0,5), function(i, data) {
        teamscore += data.score;
        console.log(data.name + ' ' + data.score);
    });
    arr.push({name: 'me', branch:'Mechanical', score:teamscore});
    console.log('me final score is '+ teamscore);
    teamscore =0;
    console.log("mm");
    $.each(mm.slice(0,5), function(i, data) {
        teamscore += data.score;
        console.log(data.name + ' ' + data.score);
    });
    arr.push({name: 'mm', branch:'Metallury', score:teamscore});
    console.log('mm final score is '+ teamscore);
    teamscore =0;
    console.log("ce");
    $.each(ce.slice(0,5), function(i, data) {
        teamscore += data.score;
        console.log(data.name + ' ' + data.score);
    });
    arr.push({name: 'ce', branch:'Civil', score:teamscore});
    console.log('ce final score is '+ teamscore);
    teamscore =0;
    console.log("m1");
    $.each(m1.slice(0,5), function(i, data) {
        teamscore += data.score;
        console.log(data.name + ' ' + data.score);
    });
    arr.push({name: 'm1', branch:'M1', score:teamscore});
    console.log('m1 final score is '+ teamscore);
    teamscore =0;
    console.log("m2");
    $.each(m2.slice(0,5), function(i, data) {
        teamscore += data.score;
        console.log(data.name + ' ' + data.score);
    });
    arr.push({name: 'm2', branch:'M2', score:teamscore});
    console.log('m2 final score is '+ teamscore);
    teamscore =0;
    console.log("phd");
    $.each(phd.slice(0,5), function(i, data) {
        teamscore += data.score;
        console.log(data.name + ' ' + data.score);
    });
    arr.push({name: 'phd', branch:'Ph.D', score:teamscore});
    console.log('phd final score is '+ teamscore);
    teamscore =0;
    console.log("alu");
    $.each(alu.slice(0,5), function(i, data) {
        teamscore += data.score;
        console.log(data.name + ' ' + data.score);
    });
    console.log('alu final score is '+ teamscore);
    arr.push({name: 'alu', branch:'Alumni', score:teamscore});


    arr.sort((a, b) => b.score - a.score);
    var k =1;
    $.each(arr.slice(0,9), function(i, data) {
        console.log('arr ' + data.name);
        console.log(data.name + ' ' + data.score);
        document.getElementById('total_body').innerHTML += ' <tr>\
                <th scope="row">'+ k  +'</th>\
                <td>'+ data.branch+'</td>\
                <td>'+ data.score+'</td>\
              </tr>';
        k++;

        document.getElementById('branch_table').innerHTML += '<table class="table">\
            <thead>\
              <tr>\
                <th scope="col">#</th>\
                <th scope="col">Name</th>\
                <th scope="col">Branch</th>\
                <th scope="col">Score</th>\
              </tr>\
            </thead>\
            <tbody id = '+ data.name +'>\
            </tbody>\
        </table><br>'
      
    });

    var j = 1;
    $.each(cs.slice(0,5) , function(i, branch) {
        document.getElementById('cs').innerHTML += '<tr>\
            <th scope="row">'+j+'</th>\
            <td>'+branch.name+'</td>\
            <td>Computer Science</td>\
            <td>'+branch.score+'</td>\
            </tr>';
        j++;
    }); 
    j = 1;
    $.each(ec.slice(0,5) , function(i, branch) {
        document.getElementById('ec').innerHTML += '<tr>\
            <th scope="row">'+j+'</th>\
            <td>'+branch.name+'</td>\
            <td>Electronics</td>\
            <td>'+branch.score+'</td>\
            </tr>';
        j++;
    }); 
    j = 1;
    $.each(ee.slice(0,5) , function(i, branch) {
        document.getElementById('ee').innerHTML += '<tr>\
            <th scope="row">'+j+'</th>\
            <td>'+branch.name+'</td>\
            <td>Electrical</td>\
            <td>'+branch.score+'</td>\
            </tr>';
        j++;
    });
    j = 1;
    $.each(me.slice(0,5) , function(i, branch) {
        document.getElementById('me').innerHTML += '<tr>\
            <th scope="row">'+j+'</th>\
            <td>'+branch.name+'</td>\
            <td>Mechanical</td>\
            <td>'+branch.score+'</td>\
            </tr>';
        j++;
    }); 
    j = 1;
    $.each(mm.slice(0,5) , function(i, branch) {
        document.getElementById('mm').innerHTML += '<tr>\
            <th scope="row">'+j+'</th>\
            <td>'+branch.name+'</td>\
            <td>Metallurgy</td>\
            <td>'+branch.score+'</td>\
            </tr>';
        j++;
    });  
    j = 1;
    $.each(ce.slice(0,5) , function(i, branch) {
        document.getElementById('ce').innerHTML += '<tr>\
            <th scope="row">'+j+'</th>\
            <td>'+branch.name+'</td>\
            <td>Civil</td>\
            <td>'+branch.score+'</td>\
            </tr>';
        j++;
    }); 
    j = 1;
    $.each(m1.slice(0,5) , function(i, branch) {
        document.getElementById('m1').innerHTML += '<tr>\
            <th scope="row">'+j+'</th>\
            <td>'+branch.name+'</td>\
            <td>M1</td>\
            <td>'+branch.score+'</td>\
            </tr>';
        j++;
    }); 
    j = 1;
    $.each(m2.slice(0,5) , function(i, branch) {
        document.getElementById('m2').innerHTML += '<tr>\
            <th scope="row">'+j+'</th>\
            <td>'+branch.name+'</td>\
            <td>M2</td>\
            <td>'+branch.score+'</td>\
            </tr>';
        j++;
    }); 
    j = 1;
    $.each(phd.slice(0,5) , function(i, branch) {
        document.getElementById('phd').innerHTML += '<tr>\
            <th scope="row">'+j+'</th>\
            <td>'+branch.name+'</td>\
            <td>Ph.D</td>\
            <td>'+branch.score+'</td>\
            </tr>';
        j++;
    }); 
    j = 1;
    $.each(alu.slice(0,5) , function(i, branch) {
        document.getElementById('alu').innerHTML += '<tr>\
            <th scope="row">'+j+'</th>\
            <td>'+branch.name+'</td>\
            <td>Alumni</td>\
            <td>'+branch.score+'</td>\
            </tr>';
        j++;
    }); 

},10000));

            
