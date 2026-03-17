document.addEventListener('DOMContentLoaded',()=>{
  // S17_Supply_Market_Analysis — midpoint of estimated global supplier ranges
  const mktVals=[10,5,11,8,6,12,13,20];
  new Chart(document.getElementById('marketConc'),{type:'bar',
    data:{labels:['Vacuum Pumps (Dry)','Turbomolecular Pumps','Gas Handling','High-Temp Furnaces','Control Systems','Process Chillers','SCARA Robots','AMR / Mobile Robots'],
      datasets:[{label:'Global Suppliers (Est.)',data:mktVals,
        backgroundColor:mktVals.map(v=>v<=5?P.red:v<=8?P.amber:P.blue),
        borderWidth:0,barThickness:18}]},
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{...TIP,callbacks:{
        label:ctx=>' '+ctx.raw+' global suppliers',
        afterLabel:ctx=>ctx.raw<=3?' ⚠ Concentrated':ctx.raw<=4?' → Moderate':' ✓ Competitive'
      }}},
      scales:{x:{beginAtZero:true,suggestedMax:10,grid:{color:'#f0f0f0'},border:{display:false},ticks:{stepSize:2,precision:0}},
              y:{grid:{display:false},border:{display:false}}}}
  });

  new Chart(document.getElementById('supplierGeo'),{type:'bar',
    data:{labels:['USA','Germany','Japan','France','UK','Denmark','Switzerland'],
      datasets:[{label:'OEM Count',data:[5,4,3,1,1,1,1],
        backgroundColor:[P.green,P.blue,P.amber,'#0e7490',P.slate,P.gray,'#9ca3af'],
        borderWidth:0,barThickness:24}]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{...TIP,callbacks:{label:ctx=>' '+ctx.raw+' OEM supplier'+(ctx.raw>1?'s':'')}}},
      scales:{y:{beginAtZero:true,grid:{color:'#f0f0f0'},border:{display:false},ticks:{stepSize:1,precision:0}},
              x:{grid:{display:false},border:{display:false}}}}
  });

  // S18_Supply_Chain_Network — actual total logistics lead time (transit + clearance)
  const ltVals=[5,5,5,5,3.5,3.5,3.5,3.5,1.5,1.5,1.5,1,1,1,0];
  const ltLabels=['TEL (JP)','Daikin (JP)','Linde (DE)','Daifuku (JP)','Pfeiffer (DE)','Air Liquide (FR)','ABB (CH)','Busch (DE)','Edwards (UK)','MiR (DK)','Siemens (DE)','Thermco (US)','Brooks (US)','AMAT (US)','Ind. Auto (US)'];
  new Chart(document.getElementById('leadTimeChart'),{type:'bar',
    data:{labels:ltLabels,datasets:[{label:'Logistics LT (wks)',data:ltVals,
        backgroundColor:ltVals.map(v=>v>=4.5?P.red:v>=3?P.amber:v>=1?P.blue:P.green),
        borderWidth:0,barThickness:14,_fmt:'w'}]},
    options:{indexAxis:'y',responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{...TIP,callbacks:{label:ctx=>' '+ctx.raw+'w logistics lead time'}}},
      scales:{x:{beginAtZero:true,suggestedMax:7,grid:{color:'#f0f0f0'},border:{display:false},ticks:{callback:v=>v+'w'}},
              y:{grid:{display:false},border:{display:false},ticks:{font:{size:10}}}}}
  });

  const savVals=[125,95,82,55,48,45,41,24,22];
  const savLabels=['AMAT','Brooks','Thermco','Siemens','Edwards','Pfeiffer','Daikin','MiR','Linde'];
  new Chart(document.getElementById('savingsChart'),{type:'bar',
    data:{labels:savLabels,datasets:[{label:'Savings ($K)',data:savVals,
        backgroundColor:savVals.map(v=>v>=90?P.green:v>=50?P.blue:'#6b7280'),
        borderWidth:0,barThickness:26,_fmt:'$K'}]},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{...TIP,callbacks:{label:ctx=>' $'+ctx.raw+'K saved'}}},
      scales:{y:{beginAtZero:true,grid:{color:'#f0f0f0'},border:{display:false},ticks:{callback:v=>'$'+v+'K'}},
              x:{grid:{display:false},border:{display:false}}}}
  });
});
