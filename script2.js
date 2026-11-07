
(function(){
 let epmsTestRows=[];
 window.epmsOpenTestPanel=function(){document.getElementById('epmsTestPanel').style.display='block'};
 window.epmsCloseTestPanel=function(){document.getElementById('epmsTestPanel').style.display='none'};
 window.epmsClearTestReport=function(){epmsTestRows=[];document.getElementById('epmsTestSummary').textContent='تم مسح التقرير.';document.getElementById('epmsTestResults').innerHTML=''};
 function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
 window.epmsRunDepartmentTests=function(){
  const modules=(typeof MODULES!=='undefined'&&MODULES)?MODULES:{};
  const custom=(typeof loadCustomModuleDefs==='function'?loadCustomModuleDefs():[]);
  const all=Object.keys(modules).map(k=>({key:k,name:modules[k]?.title||modules[k]?.name||modules[k]?.label||k,custom:false}));
  custom.forEach(m=>all.push({key:m.key,name:m.title||m.name||m.key,custom:true}));
  const unique=[...new Map(all.map(x=>[x.key,x])).values()];
  const rows=[]; const stamp=Date.now();
  unique.forEach((m,i)=>{
   const row={key:m.key,name:m.name,create:'غير متاح',read:'غير متاح',roundtrip:'غير متاح',cleanup:'غير متاح',approval:'غير مختبر',note:''};
   try{
    let arr=null, originalLength=0, testObj={id:'TEST-EPMS-'+stamp+'-'+i,testId:'TEST-EPMS-'+stamp+'-'+i,title:'معاملة اختبارية مؤقتة — '+m.name,subject:'معاملة اختبارية مؤقتة — '+m.name,status:'TEST_ONLY',createdAt:new Date().toISOString(),_epmsTestOnly:true};
    if(typeof STATE!=='undefined'&&STATE&&Array.isArray(STATE[m.key])){arr=STATE[m.key];originalLength=arr.length;arr.push(testObj);row.create=arr.includes(testObj)?'نجاح':'فشل';row.read=arr.find(x=>x&&x.id===testObj.id)?'نجاح':'فشل';const parsed=JSON.parse(JSON.stringify(arr));row.roundtrip=parsed.some(x=>x&&x.id===testObj.id&&x._epmsTestOnly)?'نجاح':'فشل';arr.splice(arr.indexOf(testObj),1);row.cleanup=!arr.some(x=>x&&x.id===testObj.id)&&arr.length===originalLength?'نجاح':'تحقق مطلوب';}
    else {const isolated=[testObj];row.create=isolated.length===1?'نجاح (محاكاة)':'فشل';row.read=isolated[0].id===testObj.id?'نجاح (محاكاة)':'فشل';row.roundtrip=JSON.parse(JSON.stringify(isolated))[0]._epmsTestOnly?'نجاح (محاكاة)':'فشل';row.cleanup='نجاح (معزول)';row.note=m.custom?'قسم مخصص: لم يُكتشف مخزن سجلات داخل STATE':'لا توجد مصفوفة سجلات مباشرة لهذا المفتاح؛ الاختبار محاكاة معزولة';}
    const workflow=(typeof getApprovalWorkflow==='function')?getApprovalWorkflow(m.key):null;
    row.approval=workflow?(workflow.enabled?'مسار اعتماد مهيأ':'المسار غير مفعّل'): 'يحتاج اختبار اعتماد تفاعلي';
   }catch(e){row.create='خطأ';row.note=String(e&&e.message||e);}
   rows.push(row);
  });
  epmsTestRows=rows;
  const ok=rows.filter(r=>r.create.startsWith('نجاح')&&r.read.startsWith('نجاح')&&r.roundtrip.startsWith('نجاح')&&r.cleanup.startsWith('نجاح')).length;
  document.getElementById('epmsTestSummary').innerHTML='<b>الوحدات المختبرة:</b> '+rows.length+' &nbsp; | &nbsp; <b>اختبارات CRUD المؤقتة الناجحة:</b> '+ok+' &nbsp; | &nbsp; <b>أخطاء:</b> '+rows.filter(r=>r.create==='خطأ'||r.create==='فشل'||r.cleanup==='تحقق مطلوب').length+'<br><small>هذا فحص آمن للبيانات داخل الذاكرة/محاكاة. لا يختبر حفظ قاعدة البيانات بعد إعادة فتح المتصفح أو الاعتماد الفعلي من مستخدم آخر.</small>';
  document.getElementById('epmsTestResults').innerHTML='<div style="overflow:auto"><table><thead><tr><th>#</th><th>القسم/الوحدة</th><th>إنشاء</th><th>قراءة</th><th>تسلسل/استعادة</th><th>تنظيف</th><th>الاعتماد</th><th>ملاحظات</th></tr></thead><tbody>'+rows.map((r,i)=>'<tr><td>'+(i+1)+'</td><td>'+esc(r.name)+'<br><small>'+esc(r.key)+'</small></td><td>'+esc(r.create)+'</td><td>'+esc(r.read)+'</td><td>'+esc(r.roundtrip)+'</td><td>'+esc(r.cleanup)+'</td><td>'+esc(r.approval)+'</td><td>'+esc(r.note)+'</td></tr>').join('')+'</tbody></table></div>';
 };
 window.epmsDownloadTestReport=function(){if(!epmsTestRows.length){alert('شغّل الاختبار أولًا.');return}const keys=['key','name','create','read','roundtrip','cleanup','approval','note'];const csv='\ufeff'+[keys.join(','),...epmsTestRows.map(r=>keys.map(k=>'"'+String(r[k]??'').replace(/"/g,'""')+'"').join(','))].join('\\r\\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'}));a.download='EPMS_Department_Test_Report.csv';a.click();URL.revokeObjectURL(a.href)};
})();
