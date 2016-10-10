var h = 100

var w = 295

// var xspa = 30


var svg = d3.select('body').append('svg').attr('width', w).attr('height', h).attr('class','radSol');
// look at chp 7 of vizualizing data

var circs = [0,1,2,2,2,3,4,14,28,28,28,28,28,28,28,28,28,28]

var rscale = d3.scale.linear()

svg.selectAll('.circles').data(circs)
    .enter()
    .append('circle')

    .attr('r', function(d){
        return d
    })
    .attr('class','circles')
    .attr('cy', h/2)
    .attr('cx',function(d,i){
//  console.log(i)
        return 20+ 40 *i
    })


svg.selectAll('text')
    .data(circs).enter().append('text')
    .text(function(d){
        console.log("one---text", this)
        return Math.round((Math.pow(d,2))*Math.PI)

    })
    .attr('font-size', 20)
    .attr('fill', 'pink')
    .attr('x', function(d,i){
        return 20 +40*i
    })
    .attr('y', h/5)
    .attr('text-anchor', 'middle')



d3.select('body').append('html:br')



// Also not really useful example I guess but I think I mae it so the areas are proportional to d. Need to check the results. http://chimera.labs.oreilly.com/books/1230000000345/ch06.html#_size
var twos = d3.select('body').append('svg').attr('width', w).attr('height', h).attr('class','radArea');




twos.selectAll('.circles').data(circs)
    .enter()
    .append('circle')

    .attr('r', function(d){

        // Multiplying the value by 4 is mucking up the result area maybe but the results might be proportional to data w/out it
        return (Math.sqrt(d *4/Math.PI));
    })
    .attr('class','circles')
    .attr('cy', h/2)
    .attr('cx',function(d,i){
        console.log(i)
        return 20+40 *i
    })


twos.selectAll('text')
    .data(circs).enter().append('text')
    .text(function(d){
        console.log(this);
        var circRad = (Math.sqrt(d *4/Math.PI));
        return Math.round((circRad * circRad)*Math.PI)

    })
    .attr('font-size', 10)
    .attr('fill', 'pink')
    .attr('x', function(d,i){
        return 20 +40*i
    })
    .attr('y', h/4)
    .attr('text-anchor', 'middle')



d3.select('body').append('html:br')


// this part is drawn from http://chimera.labs.oreilly.com/books/1230000000345/ch07.html#_refining_the_plot
var threes = d3.select('body').append('svg').attr('width', w).attr('height', h).attr('class','radLin');

var rscale = d3.scale.linear()
    .domain([0,d3.max(circs)])
    .range([3,20])


threes.selectAll('.circles').data(circs)
    .enter()
    .append('circle')

    .attr('r', function(d){
        return rscale(d);
    })
    .attr('class','circles')
    .attr('cy', h/2)
    .attr('cx',function(d,i){
//  console.log(i)
        return 20+40 *i
    })

threes.selectAll('text')
    .data(circs).enter().append('text')
    .text(function(d){
        console.log(this);
        var circRad = rscale(d);
        return Math.round((circRad * circRad)*Math.PI)

    })
    .attr('font-size', 10)
    .attr('fill', 'brown')
    .attr('x', function(d,i){
        return 20 +40*i
    })
    .attr('y', h/4)
    .attr('text-anchor', 'middle')


d3.select('body').append('html:br')

var four = d3.select('body').append('svg').attr('width', 600).attr('height', h).attr('class','radLin');

var rscale = d3.scale.linear()
    .domain([0,5])
    .range([3,10])


four.selectAll('.circles').data(circs)
    .enter()
    .append('circle')

    .attr('r', function(d){
        return rscale(d);
    })
    .attr('class','circles')
    .attr('cy', h/2)
    .attr('cx',function(d,i){
        console.log("D and I:::", d, i);
        return 20 + 20 * d
    })
    .attr('fill', '#87CEFA')

four.selectAll('text')
    .data(circs).enter().append('text')
    .text(function(d){
        console.log(this);
        var circRad = rscale(d);
        return Math.round((circRad * circRad)*Math.PI)

    })
    .attr('font-size', 10)
    .attr('fill', 'blue')
    .attr('x', function(d,i){
        return 20 +40*i
    })
    .attr('y', h/4)
    .attr('text-anchor', 'middle')