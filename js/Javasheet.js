/* eslint-disable eqeqeq */
/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
'use strict';
var username= prompt('Hi, I am Ola,and who you are ?');
console.log(username);
var score=0 ;

var welcome=confirm('Are you ready to know me better?');

var color= prompt('which color do I love the most?');
var color2=color.toLowerCase();
console.log(color2);

switch(color)
{
case 'blue':
  console.log(color2);
  alert('Great! You are doing well');
  score++;
  break;
default:
  console.log(color2);
  alert ('mmm I don\'t like it');
}


var handcraft= prompt('Is it right that I am bad at handcrafts ?');
var handcraft2=handcraft.toLowerCase();
switch(handcraft2)
{
case 'yes':
  console.log('yes');
  alert('Ooops, It looks like you didn\'t get any handmade gift from me ? ');
  break;
case 'y':
  console.log('yes');
  alert('Ooops, It looks like you didn\'t get any handmade gift from me ?');
  break;
case 'no':
  console.log('no');
  alert('You are right, I owe you a hanmade gift');
  score++;
  break;
case 'n':
  console.log('no');
  alert('You are right, I owe you a hanmade gift');
  score++;
  break;
}


var activity= prompt('Ola is a night preson ?');
var activity2=activity.toLowerCase();

switch(activity2)
{
case 'yes':
  console.log('yes');
  alert('Bravooo!I am a night owl');
  score++;
  break;
case 'y':
  console.log('yes');
  alert('Bravooo!I am a night owl');
  score++;
  break;
case 'no':
  console.log('no');
  alert('mmm for your safety,you better avoid me before 12 pm ');
  break;
case 'n':
  console.log('no');
  alert('mmm for your safety, you better avoid me before 12 pm ');
  break;
}


var music= prompt('Can I play any kind of music ?');
var music2=music.toLowerCase();

switch(music2)
{
case 'yes':
  console.log('yes');
  alert('Ohhh, I hope that was true, but the only music I can play is silence');
  break;
case 'y':
  console.log('yes');
  alert('Ohhh, I hope that was true, but the only music I can play is silence');
  break;
case 'no':
  console.log('no');
  alert(' You know me well ! but, as a good friend you have to be supportive ^^ ');
  score++;
  break;
case 'n':
  console.log('no');
  alert('You know me well ! but, as a good friend you have to be supportive ^^ ');
  score++;
  break;
}

var phone= prompt('is it true that My fav phone brand is Samsung ?');
var phone2=phone.toLowerCase();

switch(phone2)
{
case 'yes':
  console.log('yes');
  alert('WHAT?? delete my number before you hurt my dear HUAWEI !');
  break;
case 'y':
  console.log('yes');
  alert('WHAT?? delete my number before you hurt my dear HUAWEI !');
  break;
case 'no':
  console.log('no');
  alert(' Yaaas, My HUAWEI is happy to hear your voice anytime ');
  score++;
  break;
case 'n':
  console.log('no');
  alert('Yaaas, My HUAWEI is happy to hear your voice anytime ');
  score++;
  break;
}



// var i=0 ;
//   i++;
//   alert(i);

//  else if (year<1996){
//     console.log('too low');
//     alert('too low , I am older');
//     break;}
//   case (year>1996):
//     console.log('too high');
//     alert(' too high, I am younger ');
//     break;
//   case (year===1996):
//     console.log('1996');
//     alert('yes this is the lucky year ');
//     score++;
//     break;
//   }
// }
for (var i=0; i<4; i++){
  var age= prompt('In which year I was born ?');


  if (age < 1996){
    console.log('too high');
    alert('too high , I am younger');
  }else if (age > 1996){
    console.log('too low');
    alert(' too low, I am older ');

  }
  else{
    alert ('correct answer'+ age);
    score++;
    break;
  }

}

var movies=['nemo','brave','up','frozen','lion king','inside out','big hero'];
for( var i=0; i<6 ; i++){
  var moviesq= prompt(' name one of my fav disney movies : ');

  if (moviesq == ('nemo'||'brave'||'up'||'frozen'||'lion king'||'inside out'||'big hero')){
    console.log('correct');
    alert(' Niiceeeeee, when we will watch it together ? ');
    score++;
    break;
  }
  else{
    console.log=('wrong');
    alert(' Sorry, thats not my type ..');
  }
}
alert( 'those are my fav movies ' + movies);

alert('Thank you'+' ' +username+' '+'your score is'+' '+score+' '+', even If you did\'nt answer everything correctly I am very blissed to have such a caring friend ! ');




