var first = { gender:'Suspicious'};

first.name = 'Rabi Man';
first.last = 'Shrestha';
first.age = 36;
first ['nick'] = 'Haddi';

function detail (first) {
    console.log('Lamo'+ " " + first.name + " " + first.last + " " + "turned" + " " + first.age + " " + "this year." + "Mulla"+ " "+ first.nick)
}

detail(first);

delete first.age;
 console.log (first);

 