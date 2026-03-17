/* ============================================================
   main.js — shared Chart.js defaults, palette, plugins, footer
   ============================================================ */

// Active nav tab
(function(){
  const p = window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-tab').forEach(t=>{
    if(t.dataset.page===p) t.classList.add('active');
  });
})();

// Chart.js global defaults
if(typeof Chart!=='undefined'){
  Chart.defaults.font.family="'Inter',sans-serif";
  Chart.defaults.font.size=11;
  Chart.defaults.color='#525252';
}

// Shared palette
const P={
  blue:'#2563eb', red:'#dc2626', green:'#16a34a', amber:'#d97706',
  navy:'#1e3a5f', slate:'#334155', gray:'#737373',
  blue_lt:'rgba(37,99,235,0.10)', green_lt:'rgba(22,163,74,0.10)',
  amber_lt:'rgba(217,119,6,0.10)', red_lt:'rgba(220,38,38,0.10)',
};
const BAR_PAL=[P.blue,'#1d4ed8','#0e7490','#0f766e',P.slate,'#6b7280','#9ca3af'];

const TIP={
  backgroundColor:'#1a1a1a',titleColor:'#fff',bodyColor:'#d4d4d4',
  padding:10,cornerRadius:3,displayColors:true,boxWidth:8,boxHeight:8
};

// Value label plugin
Chart.register({
  id:'topLabels',
  afterDatasetsDraw(chart){
    const{ctx}=chart;
    chart.data.datasets.forEach((ds,di)=>{
      if(ds._noLabel)return;
      const meta=chart.getDatasetMeta(di);
      if(meta.hidden||meta.type==='line')return;
      const isH=chart.config.options?.indexAxis==='y';
      meta.data.forEach((el,i)=>{
        const v=ds.data[i];
        if(v===null||v===undefined||v===0)return;
        ctx.save();
        ctx.font='600 10px Inter,sans-serif';
        ctx.fillStyle='#374151';
        const f=ds._fmt||'';
        const lbl=f==='$K'?'$'+v+'K':f==='w'?v+'w':f==='$M'?'$'+v+'M':f==='%'?v+'%':String(v);
        if(isH){ctx.textAlign='left';ctx.textBaseline='middle';ctx.fillText(lbl,el.x+5,el.y);}
        else{ctx.textAlign='center';ctx.textBaseline='bottom';ctx.fillText(lbl,el.x,el.y-4);}
        ctx.restore();
      });
    });
  }
});

// Inject footer
document.addEventListener('DOMContentLoaded',()=>{
  const ft=document.getElementById('site-footer');
  if(ft) ft.innerHTML=`
  <footer class="footer">
    <div class="footer-main">
      <div class="footer-disc">
        <strong>Disclaimer:</strong> This portfolio contains synthetic sample data created for demonstration purposes only.
        The data does not represent proprietary or confidential information from any employer or client.
        Prepared by <strong>Sourabh Tarodekar</strong> for demonstration of
        Engineering Program Management – CapEx &amp; Supply Chain Operations capabilities.
        Contact: <strong>sourabh232@gmail.com</strong>
      </div>
      <div class="footer-meta">
        <strong>Sourabh Tarodekar</strong>
        <span>Engineering Program Management</span>
        <span>CapEx &amp; Supply Chain Operations</span>
        <span>2023–2025 · Synthetic Data</span>
      </div>
    </div>
    <div class="footer-bar">
      <span>CapEx &amp; Strategic Supply Chain Program Portfolio &nbsp;·&nbsp; Synthetic Demonstration Data</span>
      <span>Prepared by: Sourabh Tarodekar &nbsp;·&nbsp; Classification: Portfolio Demonstration</span>
    </div>
  </footer>`;
});
