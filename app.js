var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May'],
        datasets: [{
            label: 'Money',
            data: [1200, 1800, 2200, 2700, 3200],
            backgroundColor: [
                '#022F40',
                '#38AECC',
                '#0090C1',
                '#395B50',
                '#046E8F',
            ],
            borderColor: [
                '#046E8F',
                '#022F40',
                '#38AECC',
                '#395B50',
                '#0090C1'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx2 = document.getElementById('myChart2');
var myChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May'],
        datasets: [{
            label: 'Money',
            data: [1200, 1800, 2200, 2700, 3200],
            backgroundColor: [
                '#022F40',
                '#38AECC',
                '#0090C1',
                '#395B50',
                '#046E8F',
            ],
            borderColor: [
                '#046E8F',
                '#022F40',
                '#38AECC',
                '#395B50',
                '#0090C1'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var savingsContainer = document.querySelector(".main-total_money")
var savingsTotal = 280111;
savingsTotal = savingsTotal.toString().split("")
savingsTotal.splice(3,0,",");
savingsTotal = savingsTotal.join("");
console.log(savingsTotal);
savingsContainer.append(savingsTotal);