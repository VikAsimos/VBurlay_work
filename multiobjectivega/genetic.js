
//алгоритм rwga

rwga();

function rwga() {
	
	var mins, maxs, minv, maxv, minl, maxl, mind, maxd, mind0, maxd0, a;
		
	mins = 0.00001;
	maxs = 0.01023;
	minv = 2.5;
	maxv = 100;
	minl = 0.1;
	maxl = 0.5;
	mind = 0.01;
	maxd = 0.1;
	mind0 = 0.2e-7;
	maxd0 = 2.5e-7;
	a = 10.12E-14;
	
//сгенерировать случайную популяцию

	var length, limit;
	var inds, indv, indl, indd, indd0;
	
	length = 100;
	limit = 1000;
	inds= new Array(length);
	indv= new Array(length);
	indl= new Array(length);
	indd= new Array(length);
	indd0= new Array(length);
	

	for (i = 0; i < length; i++) {
        inds[i] = Math.random() * (maxs - mins) +mins;  //minmax
		indv[i] = Math.random() * (maxv - minv) +minv;
		indl[i] = Math.random() * (maxl - minl) +minl;
		indd[i] = Math.random() * (maxd - mind) +mind;
		indd0[i] = Math.random() * (maxd0 - mind0) +mind0;
		
		//document.write(inds[i]+'\n');
    }
	
//цикл
	
	for (count = 0; count < limit; count++) {

//вычислить случайные весовые коэфициенты

	var w1, w2;
	w1 = Math.random();
	w2 = 1 - w1;
	
	//document.write('rand '+w1+' '+w2+' ');
	
//вычислить фитнес-функцию для каждого решения

	var fitness, sum=0;
	fitness = new Array(length);

	//document.write(' fitness ');
	
	for (i = 0; i < length; i++) {
		fitness[i] = w1*(Math.sqrt(Math.pow(indd0[i],2)+a*((Math.PI*indd[i]*indl[i])/(inds[i]*indv[i])))) + w2*(1/(inds[i]*indv[i]));
		sum+=fitness[i];
		
		//document.write(fitness[i]+'\n');
		
	}
	
	var minfit, maxfit, avgfit;
	minfit = Math.min.apply(null, fitness);
	maxfit = Math.max.apply(null, fitness);
	avgfit = sum/length;

	
	document.write('minfit: '+minfit+' maxfit: '+maxfit+' avgfit: '+avgfit+"<br>");
	

	
	
//вычислить вероятность селекции для каждого решения

	/*var minfit, maxfit;
	minfit = Math.min.apply(null, fitness);
	maxfit = Math.max.apply(null, fitness);
	
	document.write('minfit: '+minfit+' maxfit: '+maxfit+' ');
	
	var p, c, sumraz = 0;
	p = new Array(length);
	
	for (i = 0; i < length; i++) {
		c = fitness[i] - minfit;
		sumraz = sumraz + c;
	}
	for (i = 0; i < length; i++) {
		p[i] = Math.pow(fitness[i] - minfit, -1)*sumraz;
		document.write(p[i]+' ');
	}
	*/

//выбрать особи для скрещивания, кроссовер, мутация

	var offsprings, offspringv, offspringl, offspringd, offspringd0;
	offsprings= new Array(length);
	offspringv= new Array(length);
	offspringl= new Array(length);
	offspringd= new Array(length);
	offspringd0= new Array(length);

for (i = 0; i < length; i += 2) {
	
	var rand1, rand2, mom, dad, factor;
	
	rand1 = Math.floor(Math.random() * (length));
	rand2 = Math.floor(Math.random() * (length));

	//document.write(' r1 '+rand1+' r2 '+rand2+' ');
	
	if (fitness[rand1]<fitness[rand2]) mom = rand1; else mom = rand2;
	
	rand1 = Math.floor(Math.random() * (length));
	rand2 = Math.floor(Math.random() * (length));
	
	if (fitness[rand1]<fitness[rand2]) dad = rand1; else dad = rand2;
	
	//линейный кроссовер
	
	factor = Math.random();
	
	offsprings[i] = factor*inds[mom] + (1 - factor)*inds[dad];
	offspringv[i] = factor*indv[mom] + (1 - factor)*indv[dad];
	offspringl[i] = factor*indl[mom] + (1 - factor)*indl[dad];
	offspringd[i] = factor*indd[mom] + (1 - factor)*indd[dad];
	offspringd0[i] = factor*indd0[mom] + (1 - factor)*indd0[dad];
	
	offsprings[i+1] = factor*inds[dad] + (1 - factor)*inds[mom];
	offspringv[i+1] = factor*indv[dad] + (1 - factor)*indv[mom];
	offspringl[i+1] = factor*indl[dad] + (1 - factor)*indl[mom];
	offspringd[i+1] = factor*indd[dad] + (1 - factor)*indd[mom];
	offspringd0[i+1] = factor*indd0[dad] + (1 - factor)*indd0[mom];
	
	//document.write('  '+offsprings[i]+'  '+offsprings[i+1]+'\n');
	
		
	
}
	//мутация?

	var mutate, m1;	
	mutate = 0.3;
	
	for (i = 0; i < length; i++) {	
	m1 = Math.random();	
	if (m1 < mutate) 
		offsprings[i] = offsprings[i] + (maxs-mins)/10;		
	}
	for (i = 0; i < length; i++) {	
	m1 = Math.random();	
	if (m1 < mutate) 
		offspringv[i] = offspringv[i] + (maxv-minv)/10;		
	}
	for (i = 0; i < length; i++) {	
	m1 = Math.random();	
	if (m1 < mutate) 
		offspringl[i] = offspringl[i] + (maxl-minl)/10;		
	}
	for (i = 0; i < length; i++) {	
	m1 = Math.random();	
	if (m1 < mutate) 
		offspringd[i] = offspringd[i] + (maxd-mind)/10;		
	}
	for (i = 0; i < length; i++) {	
	m1 = Math.random();	
	if (m1 < mutate) 
		offspringd0[i] = offspringd0[i] + (maxd0-mind0)/10;		
	}

//замена старой популяции на новую
	
	for (i = 0; i < length; i++) {
		
		inds[i] = offsprings[i];
		indv[i] = offspringv[i];
		indl[i] = offspringl[i];
		indd[i] = offspringd[i];
		indd0[i] = offspringd0[i];
		
		//document.write(inds[i]+'\n');
				
	}


}


}