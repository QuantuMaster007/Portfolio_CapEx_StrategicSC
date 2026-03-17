document.addEventListener('DOMContentLoaded',()=>{

  // CapEx Donut
  new Chart(document.getElementById('capexDonut'),{
    type:'doughnut',
    data:{
      labels:['Vacuum Systems','High-Temp Furnaces','Robotics & Auto','Gas Handling','Controls / PLC','Facility Infra'],
      datasets:[{data:[24.2,32.1,19.4,9.9,8.5,10.8],
        backgroundColor:[P.blue,'#1e3a5f','#16a34a','#d97706','#0e7490','#6b7280'],
        borderWidth:2,borderColor:'#fff'}]
    },
    options:{responsive:true,maintainAspectRatio:false,cutout:'60%',
      plugins:{legend:{position:'right',labels:{font:{size:10},padding:10,boxWidth:10}},
        tooltip:{...TIP,callbacks:{label:ctx=>' '+ctx.label+': '+ctx.raw+'%'}}}}
  });

  // Deployment Status
  new Chart(document.getElementById('deployBar'),{
    type:'bar',
    data:{
      labels:['Vacuum','Furnaces','Robotics','Gas','Controls','Infra'],
      datasets:[
        {label:'In Production',data:[9,5,5,4,6,3],backgroundColor:P.green,_noLabel:true},
        {label:'Qualified',    data:[3,2,2,1,2,1],backgroundColor:P.blue,_noLabel:true},
        {label:'Installed',    data:[1,1,0,1,0,1],backgroundColor:P.amber,_noLabel:true},
        {label:'Ordered',      data:[1,0,0,1,0,0],backgroundColor:P.gray,_noLabel:true},
      ]
    },
    options:{responsive:true,maintainAspectRatio:false,
      scales:{
        x:{stacked:true,grid:{display:false},border:{display:false}},
        y:{stacked:true,grid:{color:'#f0f0f0'},border:{display:false},ticks:{stepSize:5,precision:0}}
      },
      plugins:{legend:{position:'top',align:'end'},tooltip:{...TIP,mode:'index'}}}
  });

  // Capacity vs Demand
  const qtrs=['Q1-23','Q2-23','Q3-23','Q4-23','Q1-24','Q2-24','Q3-24','Q4-24','Q1-25','Q2-25','Q3-25','Q4-25'];
  new Chart(document.getElementById('capacityLine'),{
    type:'line',
    data:{labels:qtrs,datasets:[
      {label:'Installed Capacity (K units/yr)',
       data:[420,480,550,600,650,720,800,880,950,1000,1040,1040],
       borderColor:P.blue,borderWidth:2,backgroundColor:P.blue_lt,fill:true,
       pointRadius:3,pointBackgroundColor:P.blue,tension:0.3,_noLabel:true},
      {label:'Baseline Demand (K units/yr)',
       data:[505,528,571,567,580,624,618,661,675,718,740,750],
       borderColor:P.amber,borderWidth:1.5,borderDash:[5,4],
       pointRadius:0,tension:0.3,_noLabel:true}
    ]},
    options:{responsive:true,maintainAspectRatio:false,
      interaction:{mode:'index',intersect:false},
      plugins:{legend:{position:'top',align:'end'},tooltip:{...TIP}},
      scales:{
        y:{grid:{color:'#f0f0f0'},border:{display:false},ticks:{callback:v=>v+'K'}},
        x:{grid:{display:false},border:{display:false}}
      }}
  });
});
