document.addEventListener('DOMContentLoaded',()=>{
  // Risk Distribution
  new Chart(document.getElementById('riskDist'),{type:'bar',
    data:{labels:['CRITICAL','HIGH','MODERATE','LOW'],
      datasets:[{label:'Risk Items',data:[7,4,3,5],
        backgroundColor:[P.red,P.amber,'#ca8a04',P.green],
        borderWidth:0,barThickness:36}]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{...TIP,callbacks:{label:ctx=>' '+ctx.raw+' items at '+ctx.label}}},
      scales:{y:{beginAtZero:true,grid:{color:'#f0f0f0'},border:{display:false},ticks:{stepSize:2,precision:0}},
              x:{grid:{display:false},border:{display:false}}}}
  });

  // Asset Lifecycle
  new Chart(document.getElementById('assetDonut'),{type:'doughnut',
    data:{labels:['In Production (13)','Qualified / PQ (1)','Installed (1)'],
      datasets:[{data:[13,1,1],
        backgroundColor:[P.green,P.blue,P.amber],
        borderWidth:2,borderColor:'#fff'}]},
    options:{responsive:true,maintainAspectRatio:false,cutout:'60%',
      plugins:{legend:{position:'right',labels:{font:{size:10},padding:10,boxWidth:10}},
        tooltip:{...TIP,callbacks:{label:ctx=>' '+ctx.label+': '+((ctx.raw/15)*100).toFixed(0)+'%'}}}}
  });

  // Inventory Coverage
  const invLabels=['RTP Lamp Array','TMP Bearing','TMP Controller','Furnace Elements','MFC Assembly','DCS CPU Module','Furnace Tube','Robot Servo','Pump Seal Kit'];
  const invVals=[26.6,27.3,54.8,13.3,13.7,270,54.8,54.8,54.8];
  new Chart(document.getElementById('invCoverage'),{type:'bar',
    data:{labels:invLabels,datasets:[{label:'Coverage (weeks)',data:invVals,
        backgroundColor:invVals.map(v=>v<20?P.red:v<30?P.amber:P.blue),
        borderWidth:0,barThickness:16}]},
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{...TIP,callbacks:{label:ctx=>' '+ctx.raw.toFixed(1)+' weeks coverage'}}},
      scales:{x:{beginAtZero:true,grid:{color:'#f0f0f0'},border:{display:false},ticks:{callback:v=>v+'w'}},
              y:{grid:{display:false},border:{display:false},ticks:{font:{size:10}}}}}
  });
});
