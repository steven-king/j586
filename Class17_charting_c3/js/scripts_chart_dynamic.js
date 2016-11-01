var dataArray1 = ['data1', 30, 200, 100, 400, 150, 250];
var dataArray2 = ['data2', 50, 20, 10, 40, 15, 25]


$( document ).ready(function() {
  loadData("data1.json");
  //buildChart();
});
function loadData(dataURL){

  $.ajax({
  method: "GET",
  url: dataURL,
  dataType: "json",
  success: parseData
});

}

function parseData(data){
  console.log(data);


  console.log(dataArray2);
  buildChart();
}

function buildChart(){


var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        dataArray1,
        dataArray2
      ],
      axes: {
        data2: 'y2'
      },
      types: {
        data2: 'bar'
      }
    },
    axis: {
      y: {
        label: {
          text: 'Y Label',
          position: 'outer-middle'
        },
        tick: {
          format: d3.format("$,") // ADD
        }
      },
      y2: {
        show: true,
        label: {
          text: 'Y2 Label',
          position: 'outer-middle'
        }
      }
    }
});

}
