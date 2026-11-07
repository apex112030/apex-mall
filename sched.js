<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>برنامج زمني — كمبوندات ومشاريع متعددة | احترافي</title>
<style>
:root{--p:#0D47A1;--p2:#1565C0;--acc:#00897B;--crit:#C62828;--ms:#F9A825;--bg:#F0F2F5;--card:#fff;--txt:#212121;--mut:#757575;--bd:#E0E0E0;--row1:#E3F2FD;--rowc:#FFCDD2;--rowm:#FFF9C4;--ok:#2E7D32}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Segoe UI',Tahoma,Arial,sans-serif;background:var(--bg);color:var(--txt);font-size:13px}
header{background:linear-gradient(135deg,#0D47A1,#1565C0);color:#fff;padding:10px 16px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:6px;box-shadow:0 2px 6px rgba(0,0,0,.2)}
header h1{font-size:1.1rem;font-weight:700}
header .sub{font-size:.78rem;opacity:.85}
.toolbar{background:var(--card);border-bottom:1px solid var(--bd);padding:8px 12px;display:flex;flex-wrap:wrap;gap:8px;align-items:flex-end;position:sticky;top:0;z-index:50;box-shadow:0 1px 3px rgba(0,0,0,.06)}
.toolbar label{font-size:.7rem;color:var(--mut);font-weight:600;display:block;margin-bottom:2px}
.toolbar input,.toolbar select{padding:5px 8px;border:1px solid var(--bd);border-radius:5px;font-size:.84rem;font-family:inherit}
.toolbar input[type=date]{min-width:125px}
.toolbar input[type=number]{width:68px}
.toolbar input[type=text]{min-width:130px}
.btn{padding:6px 11px;border:none;border-radius:5px;font-size:.8rem;font-weight:600;cursor:pointer;font-family:inherit;white-space:nowrap;transition:.15s}
.btn-p{background:var(--p);color:#fff}.btn-p:hover{background:var(--p2)}
.btn-g{background:var(--acc);color:#fff}
.btn-o{background:#fff;border:1px solid var(--bd);color:var(--txt)}.btn-o:hover{background:#f5f5f5}
.btn-w{background:var(--ms);color:#333}
.btn-d{background:var(--crit);color:#fff}
.wrap{max-width:1650px;margin:0 auto;padding:10px}
.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(115px,1fr));gap:7px;margin-bottom:10px}
.stat{background:var(--card);border-radius:8px;padding:9px;text-align:center;border:1px solid var(--bd)}
.stat .v{font-size:1.05rem;font-weight:700;color:var(--p)}.stat .l{font-size:.68rem;color:var(--mut);margin-top:2px}
.stat.crit .v{color:var(--crit)}.stat.ok .v{color:var(--ok)}
.tabs{display:flex;gap:3px;flex-wrap:wrap}
.tab{padding:6px 12px;background:#E8EAF6;border:none;border-radius:6px 6px 0 0;cursor:pointer;font-family:inherit;font-size:.8rem;font-weight:600;color:var(--mut)}
.tab.on{background:var(--p);color:#fff}
.panel{display:none;background:var(--card);border-radius:0 8px 8px 8px;border:1px solid var(--bd);padding:10px}
.panel.on{display:block}
.tbl-wrap{overflow:auto;max-height:56vh;border:1px solid var(--bd);border-radius:6px}
table{width:100%;border-collapse:collapse;font-size:.78rem}
th{background:var(--p);color:#fff;padding:6px 4px;text-align:center;position:sticky;top:0;z-index:5;white-space:nowrap;font-size:.72rem}
td{padding:3px 4px;border-bottom:1px solid #eee;vertical-align:middle}
tr:hover td{background:#F5F7FA!important}
tr.lv1 td{background:var(--row1)!important;font-weight:700;color:var(--p)}
tr.crit td{background:var(--rowc)!important}
tr.ms td{background:var(--rowm)!important;font-weight:600}
tr.done td{opacity:.6}
.indent-2{padding-right:16px!important}
input.cell{width:100%;max-width:56px;padding:2px 3px;border:1px solid transparent;border-radius:3px;text-align:center;font-size:.78rem;font-family:inherit;background:transparent}
input.cell:hover,input.cell:focus{border-color:var(--p2);background:#fff;outline:none}
input.cell.pct{max-width:44px}
.bar-bg{background:#ECEFF1;border-radius:3px;height:12px;overflow:hidden;min-width:48px}
.bar-fill{height:100%;border-radius:3px;background:#1976D2}
.bar-fill.done{background:var(--ok)}.bar-fill.crit{background:var(--crit)}
.gantt-wrap{overflow-x:auto}
.gantt-tbl{border-collapse:collapse;font-size:.7rem;min-width:100%}
.gantt-tbl th{font-size:.65rem;padding:3px 2px}
.gantt-tbl td{padding:1px;border:1px solid #f0f0f0;height:20px}
.gantt-bar{height:12px;border-radius:2px;margin:1px 0}
.gb-crit{background:#E53935}.gb-ms{background:#F9A825}.gb-phase{background:#1565C0}.gb-norm{background:#90CAF9}
.gb-infra{background:#00897B}.gb-build{background:#6A1B9A}.gb-amen{background:#EF6C00}.gb-land{background:#2E7D32}
.today-line{border-right:2px dashed var(--crit)!important}
.legend{display:flex;flex-wrap:wrap;gap:8px;margin-top:6px;font-size:.7rem;color:var(--mut)}
.legend i{display:inline-block;width:11px;height:11px;border-radius:2px;vertical-align:middle;margin-left:2px}
.filters{display:flex;flex-wrap:wrap;gap:5px;margin-bottom:6px;align-items:center}
.chip{padding:3px 9px;border-radius:12px;border:1px solid var(--bd);background:#fff;cursor:pointer;font-size:.72rem;font-weight:600}
.chip.on{background:var(--p);color:#fff;border-color:var(--p)}
.modal-bg{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:100;align-items:center;justify-content:center}
.modal-bg.show{display:flex}
.modal{background:#fff;border-radius:10px;padding:18px;width:94%;max-width:560px;max-height:92vh;overflow-y:auto;box-shadow:0 8px 30px rgba(0,0,0,.25)}
.modal h3{color:var(--p);margin-bottom:10px;font-size:1rem}
.modal .row{margin-bottom:8px}
.modal label{font-size:.75rem;color:var(--mut);font-weight:600}
.modal input,.modal select{width:100%;padding:6px;border:1px solid var(--bd);border-radius:5px;margin-top:2px;font-family:inherit}
.modal-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:12px;flex-wrap:wrap}
.toast{position:fixed;bottom:18px;left:50%;transform:translateX(-50%);background:#323232;color:#fff;padding:9px 18px;border-radius:6px;font-size:.82rem;opacity:0;transition:.3s;z-index:200;pointer-events:none}
.toast.show{opacity:1}
.note{background:#FFF8E1;border-right:3px solid var(--ms);padding:7px 10px;border-radius:0 6px 6px 0;font-size:.75rem;color:#5D4037;margin-top:6px}
.tpl-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px;margin:10px 0;max-height:62vh;overflow:auto;padding:2px}
@media(max-width:600px){.tpl-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:6px}.tpl-card{padding:9px 5px}.proj-bar{overflow-x:auto}.toolbar{position:relative}.btn{max-width:100%}}
.tpl-card{border:2px solid var(--bd);border-radius:8px;padding:11px 6px;text-align:center;cursor:pointer;transition:.15s;background:#fafafa}
.tpl-card:hover,.tpl-card.on{border-color:var(--p);background:var(--row1)}
.tpl-card .ico{font-size:1.5rem;margin-bottom:3px}
.tpl-card .tn{font-weight:700;font-size:.82rem;color:var(--p)}
.tpl-card .td{font-size:.68rem;color:var(--mut);margin-top:2px}
.del-btn{background:transparent;border:none;color:var(--crit);cursor:pointer;font-size:.85rem;padding:2px 4px}
.proj-bar{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-bottom:8px;padding:8px;background:#E8EAF6;border-radius:8px}
.proj-chip{padding:5px 12px;border-radius:16px;background:#fff;border:2px solid var(--bd);cursor:pointer;font-size:.78rem;font-weight:600;transition:.15s}
.proj-chip.on{border-color:var(--p);background:var(--p);color:#fff}
.proj-chip .pct{font-size:.7rem;opacity:.85;margin-right:4px}
.portfolio-card{background:var(--card);border:1px solid var(--bd);border-radius:8px;padding:12px;margin-bottom:8px}
.portfolio-card h4{color:var(--p);margin-bottom:6px;font-size:.9rem}
.portfolio-card .meta{font-size:.75rem;color:var(--mut);display:flex;flex-wrap:wrap;gap:12px}
.progress-big{height:10px;background:#ECEFF1;border-radius:5px;margin-top:8px;overflow:hidden}
.progress-big div{height:100%;background:var(--acc);border-radius:5px}
footer{text-align:center;padding:10px;color:var(--mut);font-size:.72rem}
@media print{.toolbar,.tabs,.btn,.filters,.chip,header .sub,.del-btn,.proj-bar{display:none!important}.tbl-wrap{max-height:none}.panel{display:block!important;border:none}body{background:#fff}}
</style>
</head>
<body>

<header>
  <div>
    <h1 id="hdrTitle">برنامج زمني — كمبوندات ومشاريع</h1>
    <div class="sub" id="hdrSub">كمبوند سكني كامل · عدة كمبوندات · مول · عمارة · فيلا · مصنع</div>
  </div>
</header>

<div class="toolbar">
  <div>
    <label>اسم المشروع الحالي</label>
    <input type="text" id="projName" value="كمبوند سكني" onchange="onMetaChange()" style="min-width:150px">
  </div>
  <div>
    <label>النوع</label>
    <select id="projType" onchange="onMetaChange()">
      <option value="كمبوند">كمبوند سكني</option>
      <option value="مول">مول تجاري</option>
      <option value="عمارة">عمارة</option>
      <option value="فيلا">فيلا</option>
      <option value="مصنع">مصنع</option>
      <option value="بنية">بنية تحتية</option>
      <option value="عام">عام</option>
    </select>
  </div>
  <div>
    <label>تاريخ البداية</label>
    <input type="date" id="startDate" value="2026-10-01" onchange="fullRecalc()">
  </div>
  <div>
    <label>معامل %</label>
    <input type="number" id="scale" value="100" min="40" max="250" step="5" onchange="fullRecalc()">
  </div>
  <button class="btn btn-p" onclick="fullRecalc()">🔄</button>
  <button class="btn btn-g" onclick="saveBaseline()">📌 Baseline</button>
  <button class="btn btn-w" onclick="showAddModal()">＋ نشاط</button>
  <button class="btn btn-o" onclick="showTplModal()">📋 القوالب</button>
  <button class="btn btn-o" onclick="manageCurrentActivities()">🧰 إدارة وتعديل البنود</button>
  <button class="btn btn-o" onclick="showNewProjModal()">＋ مشروع</button>
  <button class="btn btn-o" onclick="exportCSV()">📥 CSV</button>
  <button class="btn btn-o" onclick="window.print()">🖨️</button>
</div>

<div class="wrap">
  <!-- Multi-project switcher -->
  <div class="proj-bar" id="projBar"></div>
  <div class="proj-bar" style="margin-top:6px;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
    <label style="font-size:.74rem;font-weight:700;color:var(--mut)">المشروع المختار في EPMS</label>
    <select id="epmsProjectSelect" onchange="setLinkedProject(this.value)" style="min-width:240px;padding:6px 9px;border:1px solid var(--bd);border-radius:6px;font-family:inherit"></select>
    <span id="scheduleApprovalBadge" class="chip" style="cursor:default">الحالة: مسودة</span>
    <span id="scheduleRevisionBadge" class="chip" style="cursor:default">الإصدار: Rev 0</span>
    <button class="btn btn-o" type="button" onclick="showApprovalHistory()">📜 سجل الاعتماد</button>
    <button class="btn btn-o" type="button" onclick="showApprovalWorkflow()">🔐 دورة الاعتماد</button>
    <button class="btn btn-o" type="button" onclick="editCurrentProject()">✏️ تعديل المشروع</button>
    <button class="btn btn-d" type="button" onclick="deleteCurrentProject()">🗑️ حذف المشروع</button>
    <button class="btn btn-o" type="button" onclick="printCurrentSchedule()">🖨️ طباعة المشروع</button>
    <button class="btn btn-o" type="button" onclick="printApprovalCover()">📄 غلاف الاعتماد</button>
    <button class="btn btn-g" type="button" onclick="requestOrApproveCurrentSchedule()">✅ اعتماد / إرسال للاعتماد</button>
    <button class="btn btn-d" type="button" onclick="rejectCurrentSchedule()">↩️ رفض / إعادة للمخطط</button>
  </div>

  <div class="stats" id="stats"></div>

  <div class="tabs">
    <button class="tab on" data-t="act">الأنشطة</button>
    <button class="tab" data-t="gantt">Gantt</button>
    <button class="tab" data-t="ms">المعالم</button>
    <button class="tab" data-t="look">Look-ahead</button>
    <button class="tab" data-t="base">Baseline</button>
    <button class="tab" data-t="port">المحفظة (كل المشاريع)</button>
  </div>

  <div class="panel on" id="p-act">
    <div class="filters">
      <span style="font-size:.72rem;font-weight:600;color:var(--mut)">تصفية:</span>
      <span class="chip on" data-f="all" onclick="setFilter('all')">الكل</span>
      <span class="chip" data-f="crit" onclick="setFilter('crit')">حرج</span>
      <span class="chip" data-f="ms" onclick="setFilter('ms')">معالم</span>
      <span class="chip" data-f="phase" onclick="setFilter('phase')">مراحل</span>
      <span class="chip" data-f="open" onclick="setFilter('open')">غير مكتمل</span>
      <span class="chip" data-f="done" onclick="setFilter('done')">مكتمل</span>
    </div>
    <div class="tbl-wrap">
      <table>
        <thead>
          <tr>
            <th style="width:30px">م</th>
            <th style="width:50px">الكود</th>
            <th>اسم النشاط</th>
            <th style="width:46px">المدة</th>
            <th style="width:46px">متبقي</th>
            <th style="width:40px">%</th>
            <th style="width:80px">البداية</th>
            <th style="width:80px">النهاية</th>
            <th style="width:80px">Baseline</th>
            <th style="width:55px">السابق</th>
            <th style="width:48px">النوع</th>
            <th style="width:65px">التقدم</th>
            <th style="width:26px"></th>
          </tr>
        </thead>
        <tbody id="actBody"></tbody>
      </table>
    </div>
    <div class="legend">
      <span><i style="background:var(--row1)"></i>مرحلة</span>
      <span><i style="background:var(--rowc)"></i>حرج</span>
      <span><i style="background:var(--rowm)"></i>معلم</span>
    </div>
  </div>

  <div class="panel" id="p-cpm" style="border:2px solid #90a4ae">
    <h3 style="margin:0 0 8px">📊 تحليل الشبكة الزمنية CPM والمسار الحرج</h3>
    <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:8px">
      <button class="btn btn-p" onclick="runCPM(true)">حساب CPM والمسار الحرج</button>
      <button class="btn btn-o" onclick="exportCPMReport()">تصدير تقرير CPM CSV</button>
      <span class="chip">صيغة السابق: <b>ID</b> أو <b>ID:FS+2</b> أو <b>ID:SS-1</b>؛ العلاقات FS/SS/FF/SF</span>
    </div>
    <div id="cpmSummary" class="stats-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(135px,1fr));gap:8px"></div>
    <div style="overflow:auto;margin-top:10px"><table><thead><tr><th>الكود</th><th>النشاط</th><th>ES</th><th>EF</th><th>LS</th><th>LF</th><th>Total Float</th><th>Free Float</th><th>المسار الحرج</th></tr></thead><tbody id="cpmBody"></tbody></table></div>
    <h4 style="margin:14px 0 6px">منحنى الإنجاز التراكمي S-Curve (مخطط تقديري حسب المدد)</h4><canvas id="sCurveCanvas" height="220" style="width:100%;max-height:260px;border:1px solid var(--bd);border-radius:8px"></canvas>
  </div>
  <div class="panel" id="p-resources" style="border:2px solid #80cbc4">
    <h3 style="margin:0 0 8px">📦 الكميات والموارد وخط الأساس ومراقبة التأخير — V9</h3>
    <div class="note">أدخل الكمية والإنتاجية والعمالة والمعدات والتوريدات لكل نشاط. التقارير تقديرية وتعتمد على البيانات التي تدخلها؛ يلزم مراجعة مهندس التخطيط قبل اعتمادها رسمياً.</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin:10px 0">
      <button class="btn btn-p" onclick="editResourceActivity()">✎ بيانات الكميات والموارد</button>
      <button class="btn btn-o" onclick="captureResourceBaseline()">📌 حفظ خط أساس تفصيلي</button>
      <button class="btn btn-o" onclick="exportResourceReport()">⬇ تصدير تقرير الموارد والتأخير CSV</button>
    </div>
    <div id="resourceSummary" class="stats-grid" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(135px,1fr));gap:8px"></div>
    <div style="overflow:auto;margin-top:10px"><table><thead><tr><th>الكود</th><th>النشاط</th><th>الدور/المنطقة</th><th>الكمية</th><th>الوحدة</th><th>الإنتاجية/يوم</th><th>المدة المحسوبة</th><th>عمالة</th><th>معدات</th><th>التوريد</th><th>خط الأساس</th><th>النهاية الحالية</th><th>الانحراف (يوم)</th><th>المتبقي من الكمية</th><th>إجراء</th></tr></thead><tbody id="resourceBody"></tbody></table></div>
  </div>
  <div class="panel" id="p-gantt">
    <div class="filters">
      <span class="chip on" data-g="phase" onclick="setGanttMode('phase')">المراحل</span>
      <span class="chip" data-g="crit" onclick="setGanttMode('crit')">حرج+معالم</span>
      <span class="chip" data-g="all" onclick="setGanttMode('all')">الكل</span>
    </div>
    <div class="gantt-wrap"><table class="gantt-tbl" id="ganttTbl"></table></div>
  </div>

  <div class="panel" id="p-ms">
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>م</th><th>المعلم</th><th>التاريخ</th><th>Baseline</th><th>الانحراف</th></tr></thead>
        <tbody id="msBody"></tbody>
      </table>
    </div>
  </div>

  <div class="panel" id="p-look">
    <div class="note">أنشطة الـ 14 يوماً القادمة</div>
    <div class="tbl-wrap" style="margin-top:6px">
      <table>
        <thead><tr><th>الكود</th><th>النشاط</th><th>البداية</th><th>النهاية</th><th>%</th><th>متبقي</th></tr></thead>
        <tbody id="lookBody"></tbody>
      </table>
    </div>
  </div>

  <div class="panel" id="p-base">
    <div class="tbl-wrap">
      <table>
        <thead><tr><th>الكود</th><th>النشاط</th><th>نهاية حالية</th><th>Baseline</th><th>الانحراف</th><th>%</th></tr></thead>
        <tbody id="baseBody"></tbody>
      </table>
    </div>
  </div>

  <div class="panel" id="p-port">
    <div class="note">نظرة على كل المشاريع/الكمبوندات المحفوظة — اضغط على مشروع للتبديل إليه.</div>
    <div id="portBody" style="margin-top:10px"></div>
  </div>
</div>

<footer>برنامج زمني متعدد المشاريع والكمبوندات · قوالب جاهزة · Baseline · تقدم · Gantt</footer>

<!-- ADD ACTIVITY -->
<div class="modal-bg" id="actModal">
  <div class="modal">
    <h3>إضافة نشاط</h3>
    <div class="row"><label>الكود</label><input id="nId" placeholder="1.0"></div>
    <div class="row"><label>اسم النشاط</label><input id="nName"></div>
    <div class="row"><label>المدة (يوم)</label><input type="number" id="nDur" value="10" min="1"></div>
    <div class="row"><label>الإزاحة من البداية (يوم)</label><input type="number" id="nOff" value="0" min="0"></div>
    <div class="row"><label>السابق</label><input id="nPred"></div>
    <div class="row"><label>المستوى</label>
      <select id="nLv"><option value="1">1 — مرحلة</option><option value="2" selected>2 — فرعي</option></select>
    </div>
    <div class="row"><label>النوع</label>
      <select id="nType">
        <option value="normal">عادي</option>
        <option value="critical">حرج</option>
        <option value="milestone">معلم</option>
        <option value="phase">مرحلة</option>
      </select>
    </div>
    <div class="modal-actions">
      <button class="btn btn-o" onclick="hideActModal()">إلغاء</button>
      <button class="btn btn-p" onclick="saveActivity()">حفظ</button>
    </div>
  </div>
</div>

<!-- TEMPLATES -->
<div class="modal-bg" id="tplModal">
  <div class="modal" style="max-width:600px">
    <h3>قوالب المشاريع والكمبوندات</h3>
    <div class="tpl-grid" id="tplGrid"></div>
    <div class="note" style="margin:8px 0">إدارة القوالب الجاهزة: اختر قالباً ثم أضف أو عدّل أو احذف أي بند. التعديلات تُحفظ على هذا الجهاز وتُستخدم عند تحميل القالب لاحقاً.</div>
    <div class="row" style="display:flex;gap:6px;flex-wrap:wrap">
      <button class="btn btn-o" onclick="templateAddActivity()">＋ إضافة بند للقالب</button>
      <button class="btn btn-o" onclick="templateEditActivity()">✎ تعديل بند بالقالب</button>
      <button class="btn btn-o" onclick="templateDeleteActivity()">✕ حذف بند من القالب</button>
      <button class="btn btn-o" onclick="templateResetSelected()">استعادة القالب الأصلي</button>
      <button class="btn btn-o" onclick="templateExportJSON()">تصدير القوالب</button>
      <input type="file" id="tplImportFile" accept=".json,application/json" style="max-width:190px" onchange="templateImportJSON(event)">
    </div>
    <div id="tplActivitySummary" class="note" style="max-height:140px;overflow:auto"></div>
    <div class="modal-actions">
      <button class="btn btn-o" onclick="hideTplModal()">إلغاء</button>
      <button class="btn btn-p" onclick="applyTemplate()">تحميل في المشروع الحالي</button>
    </div>
  </div>
</div>

<!-- NEW PROJECT -->
<div class="modal-bg" id="newProjModal">
  <div class="modal">
    <h3>إضافة مشروع / كمبوند جديد</h3>
    <div class="row"><label>اسم المشروع</label><input id="npName" placeholder="كمبوند النخيل — المرحلة 2"></div>
    <div class="row"><label>النوع</label>
      <select id="npType" onchange="syncNewProjectTypeToTemplate()">
        <option value="كمبوند" data-tpl="compound">🏘️ كمبوند سكني كامل</option>
        <option value="مول" data-tpl="mall">🏬 مول تجاري</option>
        <option value="متعدد الاستخدامات" data-tpl="mixedUse">🏙️ مشروع متعدد الاستخدامات</option>
        <option value="عمارة" data-tpl="building">🏢 عمارة سكنية</option>
        <option value="برج سكني" data-tpl="tower">🏙️ برج سكني 12 دور</option>
        <option value="مجمع سكني" data-tpl="residential">🏘️ مجمع عمائر سكنية</option>
        <option value="فيلا" data-tpl="villa">🏡 فيلا</option>
        <option value="مستشفى" data-tpl="hospital">🏥 مستشفى</option>
        <option value="مدرسة" data-tpl="school">🏫 مدرسة</option>
        <option value="فندق" data-tpl="hotel">🏨 فندق</option>
        <option value="مصنع" data-tpl="factory">🏭 مصنع</option>
        <option value="مخازن ولوجستيات" data-tpl="warehouse">🏭 مخزن / مركز لوجستي</option>
        <option value="بنية تحتية" data-tpl="infrastructure">🛣️ بنية تحتية متكاملة</option>
        <option value="طرق" data-tpl="road">🚧 طرق ومحاور</option>
        <option value="محطة مياه" data-tpl="waterPlant">💧 محطة مياه / معالجة</option>
        <option value="هيكل خرساني" data-tpl="superstructure">🏗️ هيكل خرساني فوق الأرض</option>
        <option value="بنية + فوقية" data-tpl="infrastructureSuper">🌐 بنية تحتية + فوقية</option>
        <option value="عام" data-tpl="empty">📄 مشروع عام / فارغ</option>
      </select>
    </div>
    <div class="row"><label>تاريخ البداية</label><input type="date" id="npStart" value="2026-10-01"></div>
    <div class="row"><label>ابدأ من قالب <small style="color:var(--p)">(يتزامن تلقائياً مع نوع المشروع)</small></label>
      <select id="npTpl">
        <option value="compound">كمبوند سكني كامل</option>
        <option value="mall">مول تجاري</option>
        <option value="mixedUse">مشروع متعدد الاستخدامات</option>
        <option value="building">عمارة سكنية</option>
        <option value="tower">برج سكني 12 دور</option>
        <option value="residential">مجمع عمائر سكنية</option>
        <option value="villa">فيلا</option>
        <option value="hospital">مستشفى</option>
        <option value="school">مدرسة</option>
        <option value="hotel">فندق</option>
        <option value="factory">مصنع</option>
        <option value="warehouse">مخزن / مركز لوجستي</option>
        <option value="infrastructure">بنية تحتية</option>
        <option value="road">طرق ومحاور</option>
        <option value="waterPlant">محطة مياه / معالجة</option>
        <option value="superstructure">هيكل خرساني فوق الأرض</option>
        <option value="infrastructureSuper">بنية تحتية + فوقية</option>
        <option value="empty">فارغ</option>
      </select>
    </div>
    <div class="note">يمكنك اختيار أي نوع مشروع من القائمة؛ سيتم اختيار القالب المطابق تلقائياً. ويمكنك فتح «قوالب» لاحقاً لاختيار قالب مختلف أو تعديله.</div>
    <div class="modal-actions">
      <button class="btn btn-o" onclick="hideNewProjModal()">إلغاء</button>
      <button class="btn btn-p" onclick="createProject()">إنشاء</button>
    </div>
  </div>
</div>

<div class="toast" id="toast"></div>

<div class="modal-bg" id="approvalHistoryModal">
  <div class="modal" style="max-width:760px">
    <h3>📜 سجل إصدارات واعتماد البرنامج</h3>
    <div id="approvalHistoryBody"></div>
    <div class="modal-actions"><button class="btn btn-o" onclick="hideApprovalHistory()">إغلاق</button></div>
  </div>
</div>

<div class="modal-bg" id="approvalWorkflowModal">
  <div class="modal" style="max-width:760px">
    <h3>🔐 دورة اعتماد البرنامج الزمني</h3>
    <div id="approvalWorkflowBody"></div>
    <div class="modal-actions"><button class="btn btn-o" onclick="hideApprovalWorkflow()">إغلاق</button></div>
  </div>
</div>

<script>
// ===================== TEMPLATES =====================
const TPL = {
  empty: { name:'فارغ', type:'عام', icon:'📄', desc:'من الصفر', acts:[] },
  fullTrades: {name:'قالب شامل لجميع التخصصات',type:'مبنى متكامل',icon:'🏗️',desc:'مدني + إنشائي + معماري + كهرباء + ميكانيكا + MEP + اختبارات وتسليم',acts:[
    {id:'1',lv:1,name:'الأعمال التمهيدية وإدارة الموقع',bd:15,bo:0,pred:'',type:'phase',pct:0},
    {id:'1.1',lv:2,name:'استلام الموقع والحدود ونقاط التحكم المساحي',bd:3,bo:0,pred:'1',type:'critical',pct:0},
    {id:'1.2',lv:2,name:'التجهيزات المؤقتة والسور والمكاتب والمخازن',bd:7,bo:0,pred:'1',type:'normal',pct:0},
    {id:'1.3',lv:2,name:'اعتماد الرسومات التنفيذية والمواصفات والعينات',bd:10,bo:0,pred:'1',type:'normal',pct:0},
    {id:'1.4',lv:2,name:'خطة الجودة والسلامة والبيئة وخطة الاختبارات',bd:5,bo:0,pred:'1',type:'normal',pct:0},
    {id:'2',lv:1,name:'الأعمال المدنية وأعمال الموقع العام',bd:90,bo:10,pred:'1.0',type:'phase',pct:0},
    {id:'2.1',lv:2,name:'إزالة العوائق والتطهير وتجهيز الموقع',bd:5,bo:0,pred:'2',type:'normal',pct:0},
    {id:'2.2',lv:2,name:'الحفر العام وحفر الأساسات ونقل ناتج الحفر',bd:12,bo:5,pred:'2',type:'critical',pct:0},
    {id:'2.3',lv:2,name:'نزح المياه والتدعيم عند الحاجة',bd:8,bo:3,pred:'2',type:'normal',pct:0},
    {id:'2.4',lv:2,name:'الإحلال والردم على طبقات والدمك والاختبارات',bd:10,bo:15,pred:'2',type:'critical',pct:0},
    {id:'2.5',lv:2,name:'طبقات التأسيس والسن والفرشة',bd:8,bo:25,pred:'2',type:'normal',pct:0},
    {id:'2.6',lv:2,name:'أعمال الطرق والأرصفة والبردورات',bd:20,bo:50,pred:'2',type:'normal',pct:0},
    {id:'2.7',lv:2,name:'تنسيق الموقع واللاندسكيب والري',bd:18,bo:65,pred:'2',type:'normal',pct:0},
    {id:'2.8',lv:2,name:'السور والبوابات وأعمال الموقع النهائية',bd:12,bo:70,pred:'2',type:'normal',pct:0},
    {id:'3',lv:1,name:'الأعمال الإنشائية والخرسانية',bd:150,bo:15,pred:'2.0',type:'phase',pct:0},
    {id:'3.1',lv:2,name:'الخوازيق واختبارات التحميل إن وجدت',bd:20,bo:10,pred:'3',type:'critical',pct:0},
    {id:'3.2',lv:2,name:'اللبشة أو القواعد المنفصلة/الشريطية',bd:15,bo:25,pred:'3',type:'critical',pct:0},
    {id:'3.3',lv:2,name:'رقاب الأعمدة والميدات الأرضية',bd:10,bo:35,pred:'3',type:'critical',pct:0},
    {id:'3.4',lv:2,name:'العزل المائي وحماية الأساسات',bd:7,bo:40,pred:'3',type:'normal',pct:0},
    {id:'3.5',lv:2,name:'أعمدة وجدران البدروم',bd:12,bo:45,pred:'3',type:'critical',pct:0},
    {id:'3.6',lv:2,name:'بلاطات وكمرات البدروم',bd:15,bo:50,pred:'3',type:'critical',pct:0},
    {id:'3.7',lv:2,name:'الأعمدة والجدران للدور الأرضي والمتكرر',bd:30,bo:60,pred:'3',type:'critical',pct:0},
    {id:'3.8',lv:2,name:'بلاطات وكمرات الأسقف والسلالم',bd:35,bo:70,pred:'3',type:'critical',pct:0},
    {id:'3.9',lv:2,name:'غرف الخدمات والخزانات الخرسانية',bd:15,bo:70,pred:'3',type:'normal',pct:0},
    {id:'3.10',lv:2,name:'معالجة الخرسانة وفك الشدات والاستلامات',bd:150,bo:15,pred:'3',type:'normal',pct:0},
    {id:'4',lv:1,name:'الأعمال المعمارية والتشطيبات',bd:120,bo:45,pred:'3.0',type:'phase',pct:0},
    {id:'4.1',lv:2,name:'مباني الطوب والقواطيع والفتحات',bd:25,bo:45,pred:'4',type:'normal',pct:0},
    {id:'4.2',lv:2,name:'المحارة الداخلية والخارجية',bd:25,bo:55,pred:'4',type:'normal',pct:0},
    {id:'4.3',lv:2,name:'عزل الحمامات والأسطح واختبار الغمر',bd:10,bo:60,pred:'4',type:'critical',pct:0},
    {id:'4.4',lv:2,name:'الأرضيات والوزرات والسلالم',bd:25,bo:65,pred:'4',type:'normal',pct:0},
    {id:'4.5',lv:2,name:'الأسقف المعلقة والجبس بورد',bd:18,bo:70,pred:'4',type:'normal',pct:0},
    {id:'4.6',lv:2,name:'الدهانات والمعجون',bd:20,bo:75,pred:'4',type:'normal',pct:0},
    {id:'4.7',lv:2,name:'الأبواب والشبابيك والألومنيوم والزجاج',bd:20,bo:65,pred:'4',type:'normal',pct:0},
    {id:'4.8',lv:2,name:'الواجهات والحجر/الكلادينج',bd:25,bo:60,pred:'4',type:'normal',pct:0},
    {id:'4.9',lv:2,name:'الأعمال الصحية المعمارية والإكسسوارات',bd:10,bo:80,pred:'4',type:'normal',pct:0},
    {id:'4.10',lv:2,name:'التنظيف النهائي ومعالجة الملاحظات',bd:7,bo:95,pred:'4',type:'milestone',pct:0},
    {id:'5',lv:1,name:'الأعمال الكهربائية والتيار الخفيف',bd:100,bo:35,pred:'4.0',type:'phase',pct:0},
    {id:'5.1',lv:2,name:'المواسير والعلب المدفونة والتأسيسات',bd:20,bo:35,pred:'5',type:'critical',pct:0},
    {id:'5.2',lv:2,name:'حوامل الكابلات والسلالم والمسارات',bd:15,bo:45,pred:'5',type:'normal',pct:0},
    {id:'5.3',lv:2,name:'غرف الكهرباء والمحولات واللوحات الرئيسية',bd:20,bo:55,pred:'5',type:'critical',pct:0},
    {id:'5.4',lv:2,name:'سحب كابلات القوى والتغذية',bd:20,bo:60,pred:'5',type:'critical',pct:0},
    {id:'5.5',lv:2,name:'اللوحات الفرعية والتوصيلات النهائية',bd:15,bo:70,pred:'5',type:'normal',pct:0},
    {id:'5.6',lv:2,name:'الإنارة والمفاتيح والبرايز',bd:15,bo:80,pred:'5',type:'normal',pct:0},
    {id:'5.7',lv:2,name:'التأريض والحماية من الصواعق',bd:10,bo:65,pred:'5',type:'critical',pct:0},
    {id:'5.8',lv:2,name:'إنذار الحريق وكواشفه ولوحاته',bd:15,bo:65,pred:'5',type:'critical',pct:0},
    {id:'5.9',lv:2,name:'الشبكات والبيانات والهاتف وWi-Fi',bd:12,bo:70,pred:'5',type:'normal',pct:0},
    {id:'5.10',lv:2,name:'CCTV والتحكم بالدخول والصوتيات',bd:12,bo:75,pred:'5',type:'normal',pct:0},
    {id:'5.11',lv:2,name:'الاختبارات الكهربائية والتشغيل',bd:8,bo:90,pred:'5',type:'milestone',pct:0},
    {id:'6',lv:1,name:'الأعمال الميكانيكية وMEP',bd:110,bo:35,pred:'5.0',type:'phase',pct:0},
    {id:'6.1',lv:2,name:'شبكات التغذية بالمياه الباردة والساخنة',bd:18,bo:35,pred:'6',type:'critical',pct:0},
    {id:'6.2',lv:2,name:'شبكات الصرف الصحي والتهوية',bd:20,bo:40,pred:'6',type:'critical',pct:0},
    {id:'6.3',lv:2,name:'شبكات صرف الأمطار ومصارف الأسطح',bd:12,bo:45,pred:'6',type:'normal',pct:0},
    {id:'6.4',lv:2,name:'مضخات وخزانات المياه وغرف المضخات',bd:18,bo:55,pred:'6',type:'normal',pct:0},
    {id:'6.5',lv:2,name:'شبكة مكافحة الحريق والمضخات والرشاشات',bd:25,bo:45,pred:'6',type:'critical',pct:0},
    {id:'6.6',lv:2,name:'مجاري الهواء والدكت والعزل',bd:20,bo:45,pred:'6',type:'normal',pct:0},
    {id:'6.7',lv:2,name:'وحدات التكييف والتبريد والمراوح',bd:20,bo:60,pred:'6',type:'normal',pct:0},
    {id:'6.8',lv:2,name:'التحكم والتشغيل الآلي BMS',bd:12,bo:70,pred:'6',type:'normal',pct:0},
    {id:'6.9',lv:2,name:'المصاعد والسلالم المتحركة إن وجدت',bd:30,bo:45,pred:'6',type:'critical',pct:0},
    {id:'6.10',lv:2,name:'اختبارات الضغط والتسريب والتوازن',bd:10,bo:80,pred:'6',type:'critical',pct:0},
    {id:'6.11',lv:2,name:'التشغيل التجريبي والتكامل بين الأنظمة',bd:10,bo:90,pred:'6',type:'milestone',pct:0},
    {id:'7',lv:1,name:'أعمال الاختبارات والتسليم',bd:20,bo:85,pred:'6.0',type:'phase',pct:0},
    {id:'7.1',lv:2,name:'اختبارات الأنظمة والتشغيل المتكامل',bd:7,bo:85,pred:'7',type:'critical',pct:0},
    {id:'7.2',lv:2,name:'استلامات الاستشاري والجهات المختصة',bd:5,bo:90,pred:'7',type:'normal',pct:0},
    {id:'7.3',lv:2,name:'إغلاق الملاحظات Punch List',bd:7,bo:92,pred:'7',type:'critical',pct:0},
    {id:'7.4',lv:2,name:'تسليم مخططات As-Built وO&M والضمانات',bd:5,bo:95,pred:'7',type:'normal',pct:0},
    {id:'7.5',lv:2,name:'التسليم الابتدائي والنهائي',bd:1,bo:100,pred:'7',type:'milestone',pct:0},
    // مستوى ثالث: خطوات تنفيذية تفصيلية قابلة للتعديل والحذف
    {id:'1.1.1',lv:3,name:'توقيع محضر استلام الموقع وتحديد الحدود',bd:1,bo:0,pred:'1.1',type:'critical',pct:0},
    {id:'1.1.2',lv:3,name:'تثبيت الروبيرات ونقاط التحكم المساحي',bd:2,bo:1,pred:'1.1.1',type:'normal',pct:0},
    {id:'1.2.1',lv:3,name:'تجهيز المكاتب والمرافق المؤقتة والمخازن',bd:4,bo:0,pred:'1.2',type:'normal',pct:0},
    {id:'1.2.2',lv:3,name:'تنفيذ السور والبوابات والتحكم بالدخول',bd:5,bo:2,pred:'1.2.1',type:'normal',pct:0},
    {id:'1.3.1',lv:3,name:'مراجعة الرسومات المعمارية والإنشائية والتنسيق',bd:5,bo:0,pred:'1.3',type:'critical',pct:0},
    {id:'1.3.2',lv:3,name:'اعتماد مخططات الورش ومواد التنفيذ والعينات',bd:5,bo:4,pred:'1.3.1',type:'normal',pct:0},
    {id:'2.2.1',lv:3,name:'توقيع حدود الحفر ومناسيب التأسيس',bd:2,bo:5,pred:'2.2',type:'critical',pct:0},
    {id:'2.2.2',lv:3,name:'الحفر على مراحل وتحميل ونقل النواتج',bd:8,bo:7,pred:'2.2.1',type:'critical',pct:0},
    {id:'2.2.3',lv:3,name:'استلام منسوب التأسيس واختبار التربة',bd:2,bo:15,pred:'2.2.2',type:'critical',pct:0},
    {id:'2.3.1',lv:3,name:'تركيب طلمبات وخطوط نزح المياه عند الحاجة',bd:3,bo:5,pred:'2.3',type:'normal',pct:0},
    {id:'2.4.1',lv:3,name:'توريد وفرش الإحلال على طبقات',bd:5,bo:10,pred:'2.4',type:'normal',pct:0},
    {id:'2.4.2',lv:3,name:'اختبارات الكثافة والدمك واعتماد النتائج',bd:3,bo:15,pred:'2.4.1',type:'critical',pct:0},
    {id:'3.2.1',lv:3,name:'خرسانة النظافة وضبط المحاور والمناسيب',bd:3,bo:15,pred:'3.2',type:'critical',pct:0},
    {id:'3.2.2',lv:3,name:'حدادة ونجارة القواعد أو اللبشة والاستلام',bd:5,bo:18,pred:'3.2.1',type:'critical',pct:0},
    {id:'3.2.3',lv:3,name:'صب الخرسانة وأخذ العينات والمعالجة',bd:3,bo:23,pred:'3.2.2',type:'critical',pct:0},
    {id:'3.4.1',lv:3,name:'تجهيز السطح وتنفيذ البرايمر والعزل',bd:3,bo:40,pred:'3.4',type:'normal',pct:0},
    {id:'3.4.2',lv:3,name:'اختبار العزل وتركيب طبقة الحماية',bd:3,bo:43,pred:'3.4.1',type:'critical',pct:0},
    {id:'3.7.1',lv:3,name:'حدادة ونجارة الأعمدة والجدران',bd:5,bo:60,pred:'3.7',type:'critical',pct:0},
    {id:'3.7.2',lv:3,name:'صب الأعمدة والجدران ومعالجة الخرسانة',bd:3,bo:65,pred:'3.7.1',type:'critical',pct:0},
    {id:'3.8.1',lv:3,name:'تركيب الشدات والدعائم للسقف',bd:5,bo:65,pred:'3.8',type:'critical',pct:0},
    {id:'3.8.2',lv:3,name:'تركيب حديد التسليح والفتحات المدفونة',bd:6,bo:70,pred:'3.8.1',type:'critical',pct:0},
    {id:'3.8.3',lv:3,name:'استلام وصب السقف والمعالجة وفك الشدات حسب الكود',bd:7,bo:76,pred:'3.8.2',type:'critical',pct:0},
    {id:'4.1.1',lv:3,name:'توقيع الحوائط ومراجعة الفتحات والمناسيب',bd:2,bo:45,pred:'4.1',type:'normal',pct:0},
    {id:'4.1.2',lv:3,name:'تنفيذ المباني والعتب وربط المباني بالهيكل',bd:10,bo:47,pred:'4.1.1',type:'normal',pct:0},
    {id:'4.2.1',lv:3,name:'تجهيز الأسطح وتركيب شبك التقاء الخرسانة والمباني',bd:3,bo:55,pred:'4.2',type:'normal',pct:0},
    {id:'4.2.2',lv:3,name:'تنفيذ البؤج والأوتار والمحارة والاستلام',bd:10,bo:58,pred:'4.2.1',type:'normal',pct:0},
    {id:'4.3.1',lv:3,name:'اختبار ميول الأرضيات وتجهيز العزل',bd:2,bo:60,pred:'4.3',type:'critical',pct:0},
    {id:'4.3.2',lv:3,name:'تنفيذ العزل واختبار الغمر واعتماد النتيجة',bd:4,bo:62,pred:'4.3.1',type:'critical',pct:0},
    {id:'4.4.1',lv:3,name:'تحديد المناسيب وتنفيذ طبقات التسوية',bd:4,bo:65,pred:'4.4',type:'normal',pct:0},
    {id:'4.4.2',lv:3,name:'تركيب الأرضيات والوزرات والفواصل',bd:10,bo:69,pred:'4.4.1',type:'normal',pct:0},
    {id:'4.6.1',lv:3,name:'معالجة الأسطح والمعجون والصنفرة',bd:6,bo:75,pred:'4.6',type:'normal',pct:0},
    {id:'4.6.2',lv:3,name:'البطانة والوجه النهائي والاستلام',bd:6,bo:81,pred:'4.6.1',type:'normal',pct:0},
    {id:'5.1.1',lv:3,name:'تحديد المسارات ومراجعة مخططات التنسيق',bd:2,bo:35,pred:'5.1',type:'critical',pct:0},
    {id:'5.1.2',lv:3,name:'تركيب المواسير والعلب وسحب خيوط التمرير',bd:8,bo:37,pred:'5.1.1',type:'normal',pct:0},
    {id:'5.2.1',lv:3,name:'تثبيت الحوامل والسلالم ومسارات الكابلات',bd:7,bo:45,pred:'5.2',type:'normal',pct:0},
    {id:'5.4.1',lv:3,name:'اختبار العزل للكابلات قبل السحب وبعده',bd:2,bo:60,pred:'5.4',type:'critical',pct:0},
    {id:'5.4.2',lv:3,name:'سحب الكابلات وترقيم الأطراف وإنهاؤها',bd:8,bo:62,pred:'5.4.1',type:'normal',pct:0},
    {id:'5.5.1',lv:3,name:'تركيب اللوحات وضبط القواطع والتوصيلات',bd:5,bo:70,pred:'5.5',type:'normal',pct:0},
    {id:'5.7.1',lv:3,name:'تنفيذ شبكة التأريض وقياس المقاومة',bd:4,bo:65,pred:'5.7',type:'critical',pct:0},
    {id:'5.8.1',lv:3,name:'تمديد كابلات وأنابيب إنذار الحريق',bd:5,bo:65,pred:'5.8',type:'normal',pct:0},
    {id:'5.8.2',lv:3,name:'تركيب الكواشف واللوحات واختبار السيناريوهات',bd:5,bo:80,pred:'5.8.1',type:'critical',pct:0},
    {id:'5.11.1',lv:3,name:'اختبار الاستمرارية والعزل والقطبية والتشغيل',bd:4,bo:90,pred:'5.11',type:'critical',pct:0},
    {id:'6.1.1',lv:3,name:'تركيب مواسير التغذية والصمامات والدعامات',bd:7,bo:35,pred:'6.1',type:'normal',pct:0},
    {id:'6.1.2',lv:3,name:'اختبار الضغط والغسيل والتطهير',bd:3,bo:42,pred:'6.1.1',type:'critical',pct:0},
    {id:'6.2.1',lv:3,name:'تركيب خطوط الصرف والتهوية وضبط الميول',bd:8,bo:40,pred:'6.2',type:'critical',pct:0},
    {id:'6.2.2',lv:3,name:'اختبار التسريب والتأكد من سهولة التسليك',bd:3,bo:48,pred:'6.2.1',type:'critical',pct:0},
    {id:'6.5.1',lv:3,name:'تركيب مواسير الحريق والصمامات والرشاشات',bd:10,bo:45,pred:'6.5',type:'critical',pct:0},
    {id:'6.5.2',lv:3,name:'اختبار الضغط والتدفق وتشغيل مضخات الحريق',bd:5,bo:60,pred:'6.5.1',type:'critical',pct:0},
    {id:'6.6.1',lv:3,name:'تركيب الدكت والوصلات والأبواب ومخمدات الحريق',bd:8,bo:45,pred:'6.6',type:'normal',pct:0},
    {id:'6.6.2',lv:3,name:'عزل الدكت واختبار التسريب وضبط الهواء',bd:5,bo:55,pred:'6.6.1',type:'normal',pct:0},
    {id:'6.7.1',lv:3,name:'تركيب الوحدات والمواسير النحاسية والصرف',bd:8,bo:60,pred:'6.7',type:'normal',pct:0},
    {id:'6.7.2',lv:3,name:'اختبار التسريب والتفريغ والشحن والتشغيل',bd:4,bo:70,pred:'6.7.1',type:'critical',pct:0},
    {id:'6.8.1',lv:3,name:'تركيب الحساسات ووحدات التحكم وربط BMS',bd:6,bo:70,pred:'6.8',type:'normal',pct:0},
    {id:'6.10.1',lv:3,name:'إجراء اختبارات الضغط والتسريب والتوازن والتوثيق',bd:5,bo:80,pred:'6.10',type:'critical',pct:0},
    {id:'7.1.1',lv:3,name:'إعداد خطط التشغيل والاختبارات لكل نظام',bd:2,bo:85,pred:'7.1',type:'normal',pct:0},
    {id:'7.1.2',lv:3,name:'تشغيل الأنظمة منفردة ثم اختبار التكامل بينها',bd:4,bo:87,pred:'7.1.1',type:'critical',pct:0},
    {id:'7.3.1',lv:3,name:'حصر الملاحظات وتصنيفها وتوزيع المسؤوليات',bd:2,bo:92,pred:'7.3',type:'normal',pct:0},
    {id:'7.3.2',lv:3,name:'إغلاق الملاحظات وإعادة الفحص والتوثيق',bd:5,bo:94,pred:'7.3.1',type:'critical',pct:0},
    {id:'7.4.1',lv:3,name:'تسليم مخططات As-Built وكتيبات O&M والضمانات',bd:3,bo:95,pred:'7.4',type:'normal',pct:0},
    {id:'7.4.2',lv:3,name:'تدريب التشغيل والصيانة وتسليم قطع الغيار',bd:2,bo:98,pred:'7.4.1',type:'normal',pct:0}
  ]},
  compound: {
    name:'كمبوند سكني كامل (موسّع)', type:'كمبوند', icon:'🏘️', desc:'بنية + عمارات أ/ب/ج + فيلات + خدمات مفصّلة + لاندسكيب',
    acts:[
      // ===== 1. تمهيدي =====
      {id:'1.0',lv:1,name:'1. التخطيط والتمهيدي واستلام الموقع',bd:50,bo:0,pred:'',type:'phase',pct:0},
      {id:'1.1',lv:2,name:'استلام الموقع ومحضر التسليم الرسمي',bd:5,bo:0,pred:'',type:'milestone',pct:0},
      {id:'1.2',lv:2,name:'التعبئة (مكاتب – مخازن – سكن عمال – سور مؤقت)',bd:30,bo:0,pred:'1.1',type:'normal',pct:0},
      {id:'1.3',lv:2,name:'الرفع المساحي الشامل وضبط نقاط التحكم',bd:25,bo:5,pred:'1.1',type:'critical',pct:0},
      {id:'1.4',lv:2,name:'اعتماد المخططات التنفيذية والمواصفات والكميات',bd:35,bo:0,pred:'1.1',type:'normal',pct:0},
      {id:'1.5',lv:2,name:'خطة السلامة HSE وخطة الجودة وبرنامج العمل',bd:20,bo:5,pred:'1.1',type:'normal',pct:0},
      {id:'1.6',lv:2,name:'تأمين التصاريح والتراخيص والربط مع الجهات',bd:40,bo:0,pred:'1.1',type:'normal',pct:0},

      // ===== 2. بنية تحتية =====
      {id:'2.0',lv:1,name:'2. البنية التحتية الرئيسية (Infrastructure)',bd:220,bo:35,pred:'1.0',type:'phase',pct:0},
      {id:'2.1',lv:2,name:'الحفر لمسارات الشبكات والطرق',bd:45,bo:40,pred:'1.3',type:'critical',pct:0},
      {id:'2.2',lv:2,name:'شبكات الصرف الصحي (خطوط رئيسية + فرعية + غرف تفتيش)',bd:70,bo:55,pred:'2.1',type:'critical',pct:0},
      {id:'2.3',lv:2,name:'شبكات مياه الشرب والري',bd:55,bo:60,pred:'2.1',type:'critical',pct:0},
      {id:'2.4',lv:2,name:'شبكات الكهرباء الأرضية وغرف التوزيع',bd:60,bo:70,pred:'2.1',type:'critical',pct:0},
      {id:'2.5',lv:2,name:'شبكات الاتصالات والألياف والكاميرات',bd:45,bo:80,pred:'2.1',type:'normal',pct:0},
      {id:'2.6',lv:2,name:'الطرق الرئيسية (قاعدة – رصف – أرصفة – جزر)',bd:80,bo:90,pred:'2.2',type:'critical',pct:0},
      {id:'2.7',lv:2,name:'الطرق الفرعية ومواقف الزوار',bd:50,bo:120,pred:'2.6',type:'normal',pct:0},
      {id:'2.8',lv:2,name:'محطات الكهرباء / المحولات',bd:45,bo:100,pred:'2.4',type:'normal',pct:0},
      {id:'2.9',lv:2,name:'خزانات المياه الأرضية والعلوية ومحطات الرفع',bd:40,bo:110,pred:'2.3',type:'normal',pct:0},
      {id:'2.10',lv:2,name:'شبكة الحريق الخارجية وصناديق الحريق',bd:35,bo:130,pred:'2.3',type:'normal',pct:0},

      // ===== 3. عمارات مرحلة أ =====
      {id:'3.0',lv:1,name:'3. العمارات السكنية — المرحلة أ',bd:320,bo:100,pred:'2.0',type:'phase',pct:0},
      {id:'3.1',lv:2,name:'حفر وأساسات المرحلة أ',bd:50,bo:110,pred:'2.1',type:'critical',pct:0},
      {id:'3.2',lv:2,name:'هيكل خرساني المرحلة أ (بدروم + أدوار متكررة)',bd:160,bo:160,pred:'3.1',type:'critical',pct:0},
      {id:'3.3',lv:2,name:'مباني وقواطع ومحارة المرحلة أ',bd:70,bo:280,pred:'3.2',type:'normal',pct:0},
      {id:'3.4',lv:2,name:'كهرباء وسباكة داخلية المرحلة أ',bd:60,bo:300,pred:'3.2',type:'normal',pct:0},
      {id:'3.5',lv:2,name:'تشطيبات نهائية (أرضيات – دهانات – أبواب) المرحلة أ',bd:90,bo:340,pred:'3.3',type:'normal',pct:0},
      {id:'3.6',lv:2,name:'واجهات ومصاعد المرحلة أ',bd:50,bo:360,pred:'3.2',type:'normal',pct:0},
      {id:'3.7',lv:2,name:'استلام ابتدائي مباني المرحلة أ',bd:15,bo:420,pred:'3.5',type:'milestone',pct:0},

      // ===== 4. عمارات مرحلة ب =====
      {id:'4.0',lv:1,name:'4. العمارات السكنية — المرحلة ب',bd:300,bo:200,pred:'3.1',type:'phase',pct:0},
      {id:'4.1',lv:2,name:'حفر وأساسات المرحلة ب',bd:45,bo:220,pred:'3.1',type:'critical',pct:0},
      {id:'4.2',lv:2,name:'هيكل خرساني المرحلة ب',bd:150,bo:265,pred:'4.1',type:'critical',pct:0},
      {id:'4.3',lv:2,name:'مباني وتشطيبات المرحلة ب',bd:100,bo:380,pred:'4.2',type:'normal',pct:0},
      {id:'4.4',lv:2,name:'MEP داخلية المرحلة ب',bd:55,bo:400,pred:'4.2',type:'normal',pct:0},
      {id:'4.5',lv:2,name:'استلام ابتدائي مباني المرحلة ب',bd:15,bo:500,pred:'4.3',type:'milestone',pct:0},

      // ===== 5. عمارات مرحلة ج =====
      {id:'5.0',lv:1,name:'5. العمارات السكنية — المرحلة ج',bd:280,bo:320,pred:'4.1',type:'phase',pct:0},
      {id:'5.1',lv:2,name:'حفر وأساسات المرحلة ج',bd:40,bo:340,pred:'4.1',type:'critical',pct:0},
      {id:'5.2',lv:2,name:'هيكل خرساني المرحلة ج',bd:140,bo:380,pred:'5.1',type:'critical',pct:0},
      {id:'5.3',lv:2,name:'تشطيبات وMEP المرحلة ج',bd:100,bo:480,pred:'5.2',type:'normal',pct:0},
      {id:'5.4',lv:2,name:'استلام ابتدائي مباني المرحلة ج',bd:15,bo:580,pred:'5.3',type:'milestone',pct:0},

      // ===== 6. فيلات =====
      {id:'6.0',lv:1,name:'6. منطقة الفيلات',bd:260,bo:150,pred:'2.6',type:'phase',pct:0},
      {id:'6.1',lv:2,name:'تجهيز أراضي الفيلات والحفر والأساسات',bd:50,bo:160,pred:'2.1',type:'critical',pct:0},
      {id:'6.2',lv:2,name:'هيكل الفيلات (مجموعة أ)',bd:70,bo:210,pred:'6.1',type:'critical',pct:0},
      {id:'6.3',lv:2,name:'هيكل الفيلات (مجموعة ب)',bd:70,bo:260,pred:'6.2',type:'critical',pct:0},
      {id:'6.4',lv:2,name:'تشطيبات الفيلات الداخلية والخارجية',bd:90,bo:320,pred:'6.2',type:'normal',pct:0},
      {id:'6.5',lv:2,name:'حدائق خاصة وملحقات الفيلات',bd:40,bo:400,pred:'6.4',type:'normal',pct:0},
      {id:'6.6',lv:2,name:'استلام منطقة الفيلات',bd:15,bo:450,pred:'6.4',type:'milestone',pct:0},

      // ===== 7. خدمات ومرافق =====
      {id:'7.0',lv:1,name:'7. الخدمات والمرافق المشتركة (Amenities)',bd:240,bo:180,pred:'2.6',type:'phase',pct:0},
      {id:'7.1',lv:2,name:'الكلوب هاوس / النادي الرياضي (هيكل + تشطيب)',bd:120,bo:200,pred:'2.6',type:'normal',pct:0},
      {id:'7.2',lv:2,name:'المسابح (إنشاء + عزل + تشغيل)',bd:70,bo:280,pred:'7.1',type:'normal',pct:0},
      {id:'7.3',lv:2,name:'الملاعب (تنس – كرة – أطفال)',bd:45,bo:300,pred:'2.6',type:'normal',pct:0},
      {id:'7.4',lv:2,name:'المسجد (هيكل + تشطيب + فرش)',bd:80,bo:220,pred:'2.6',type:'normal',pct:0},
      {id:'7.5',lv:2,name:'المركز التجاري / المحلات الخدمية',bd:90,bo:240,pred:'2.6',type:'normal',pct:0},
      {id:'7.6',lv:2,name:'الحضانة / منطقة الأطفال (إن وُجدت)',bd:50,bo:320,pred:'7.1',type:'normal',pct:0},
      {id:'7.7',lv:2,name:'بوابات الأمن الرئيسية والفرعية والسور',bd:55,bo:280,pred:'2.6',type:'normal',pct:0},
      {id:'7.8',lv:2,name:'غرفة الأمن والكاميرات وأنظمة الدخول',bd:35,bo:340,pred:'7.7',type:'normal',pct:0},
      {id:'7.9',lv:2,name:'موقف سيارات متعدد / جراج مشترك (إن وُجد)',bd:80,bo:250,pred:'2.6',type:'normal',pct:0},

      // ===== 8. لاندسكيب =====
      {id:'8.0',lv:1,name:'8. اللاندسكيب والمناطق المفتوحة',bd:180,bo:350,pred:'2.6',type:'phase',pct:0},
      {id:'8.1',lv:2,name:'أعمال التربة والزراعة والأشجار',bd:80,bo:370,pred:'4.2',type:'normal',pct:0},
      {id:'8.2',lv:2,name:'شبكة الري الأوتوماتيكية',bd:40,bo:390,pred:'8.1',type:'normal',pct:0},
      {id:'8.3',lv:2,name:'الممرات والساحات والبلاط الخارجي',bd:50,bo:400,pred:'2.7',type:'normal',pct:0},
      {id:'8.4',lv:2,name:'البحيرات / النافورات (إن وُجدت)',bd:45,bo:420,pred:'8.1',type:'normal',pct:0},
      {id:'8.5',lv:2,name:'الإنارة الخارجية والديكورية',bd:35,bo:450,pred:'8.3',type:'normal',pct:0},
      {id:'8.6',lv:2,name:'اللافتات الإرشادية والجمالية',bd:20,bo:480,pred:'8.5',type:'normal',pct:0},

      // ===== 9. تسليم =====
      {id:'9.0',lv:1,name:'9. الاختبارات والتشغيل والتسليم المرحلي',bd:150,bo:480,pred:'3.0',type:'phase',pct:0},
      {id:'9.1',lv:2,name:'اختبارات شبكات البنية التحتية والتشغيل',bd:40,bo:490,pred:'2.4',type:'critical',pct:0},
      {id:'9.2',lv:2,name:'اختبارات أنظمة الخدمات (نادي – مسبح – أمن)',bd:30,bo:520,pred:'7.1',type:'normal',pct:0},
      {id:'9.3',lv:2,name:'التسليم الابتدائي — المرحلة أ + جزء البنية',bd:15,bo:480,pred:'3.7',type:'milestone',pct:0},
      {id:'9.4',lv:2,name:'التسليم الابتدائي — المرحلة ب + الفيلات',bd:15,bo:560,pred:'4.5',type:'milestone',pct:0},
      {id:'9.5',lv:2,name:'التسليم الابتدائي — المرحلة ج + الخدمات',bd:15,bo:640,pred:'5.4',type:'milestone',pct:0},
      {id:'9.6',lv:2,name:'Punch List الشامل وإغلاق الملاحظات',bd:40,bo:650,pred:'9.5',type:'critical',pct:0},
      {id:'9.7',lv:2,name:'مستندات As-Built وكتيبات التشغيل',bd:30,bo:660,pred:'9.1',type:'normal',pct:0},
      {id:'9.8',lv:2,name:'التسليم النهائي للكمبوند بالكامل',bd:10,bo:720,pred:'9.6',type:'milestone',pct:0},
    ]
  },

  mall: {
    name:'مول تجاري', type:'مول', icon:'🏬', desc:'بدرومين+أرضي+3 أدوار',
    acts:[
      {id:'1.0',lv:1,name:'1. تمهيدي واستلام',bd:30,bo:0,pred:'',type:'phase',pct:0},
      {id:'1.1',lv:2,name:'استلام الموقع',bd:3,bo:0,pred:'',type:'milestone',pct:0},
      {id:'2.0',lv:1,name:'2. سند جار وحفر',bd:100,bo:20,pred:'1.0',type:'phase',pct:0},
      {id:'2.1',lv:2,name:'خوازيق سند الجار',bd:45,bo:30,pred:'1.1',type:'critical',pct:0},
      {id:'2.2',lv:2,name:'الحفر',bd:40,bo:70,pred:'2.1',type:'critical',pct:0},
      {id:'3.0',lv:1,name:'3. أساسات وبدرومات',bd:150,bo:110,pred:'2.0',type:'phase',pct:0},
      {id:'3.1',lv:2,name:'أساسات + بدروم 2 و 1',bd:120,bo:120,pred:'2.2',type:'critical',pct:0},
      {id:'4.0',lv:1,name:'4. هيكل فوق الأرض',bd:150,bo:250,pred:'3.0',type:'phase',pct:0},
      {id:'4.1',lv:2,name:'أرضي + 3 أدوار + سطح',bd:140,bo:255,pred:'3.1',type:'critical',pct:0},
      {id:'5.0',lv:1,name:'5. تشطيبات وواجهات',bd:200,bo:320,pred:'4.0',type:'phase',pct:0},
      {id:'6.0',lv:1,name:'6. كهرباء وميكانيكا',bd:250,bo:280,pred:'3.1',type:'phase',pct:0},
      {id:'7.0',lv:1,name:'7. تسليم',bd:60,bo:520,pred:'5.0',type:'phase',pct:0},
      {id:'7.1',lv:2,name:'الاستلام النهائي',bd:5,bo:570,pred:'7.0',type:'milestone',pct:0},
    ]
  },
  building: {
    name:'عمارة سكنية', type:'عمارة', icon:'🏢', desc:'بدروم+أرضي+5 أدوار',
    acts:[
      {id:'1.0',lv:1,name:'1. تمهيدي',bd:15,bo:0,pred:'',type:'phase',pct:0},
      {id:'1.1',lv:2,name:'استلام الموقع',bd:2,bo:0,pred:'',type:'milestone',pct:0},
      {id:'2.0',lv:1,name:'2. حفر وأساسات',bd:50,bo:15,pred:'1.0',type:'phase',pct:0},
      {id:'2.1',lv:2,name:'حفر + أساسات',bd:40,bo:15,pred:'1.1',type:'critical',pct:0},
      {id:'3.0',lv:1,name:'3. هيكل',bd:140,bo:60,pred:'2.0',type:'phase',pct:0},
      {id:'3.1',lv:2,name:'بدروم + أرضي + 5 أدوار',bd:130,bo:60,pred:'2.1',type:'critical',pct:0},
      {id:'4.0',lv:1,name:'4. تشطيبات',bd:150,bo:150,pred:'3.0',type:'phase',pct:0},
      {id:'5.0',lv:1,name:'5. تسليم',bd:25,bo:300,pred:'4.0',type:'phase',pct:0},
      {id:'5.1',lv:2,name:'الاستلام',bd:5,bo:320,pred:'5.0',type:'milestone',pct:0},
    ]
  },
  villa: {
    name:'فيلا', type:'فيلا', icon:'🏡', desc:'دورين + سطح',
    acts:[
      {id:'1.0',lv:1,name:'1. تمهيدي',bd:10,bo:0,pred:'',type:'phase',pct:0},
      {id:'1.1',lv:2,name:'استلام',bd:2,bo:0,pred:'',type:'milestone',pct:0},
      {id:'2.0',lv:1,name:'2. أساسات',bd:30,bo:10,pred:'1.0',type:'phase',pct:0},
      {id:'3.0',lv:1,name:'3. هيكل',bd:60,bo:40,pred:'2.0',type:'phase',pct:0},
      {id:'4.0',lv:1,name:'4. تشطيبات',bd:100,bo:80,pred:'3.0',type:'phase',pct:0},
      {id:'5.0',lv:1,name:'5. خارجي وتسليم',bd:30,bo:170,pred:'4.0',type:'phase',pct:0},
      {id:'5.1',lv:2,name:'الاستلام النهائي',bd:3,bo:200,pred:'5.0',type:'milestone',pct:0},
    ]
  },
  factory: {
    name:'مصنع', type:'مصنع', icon:'🏭', desc:'هناجر + مرافق',
    acts:[
      {id:'1.0',lv:1,name:'1. تمهيدي',bd:20,bo:0,pred:'',type:'phase',pct:0},
      {id:'2.0',lv:1,name:'2. أساسات',bd:45,bo:20,pred:'1.0',type:'phase',pct:0},
      {id:'3.0',lv:1,name:'3. هيكل معدني/خرساني',bd:80,bo:60,pred:'2.0',type:'phase',pct:0},
      {id:'4.0',lv:1,name:'4. أنظمة صناعية',bd:100,bo:100,pred:'3.0',type:'phase',pct:0},
      {id:'5.0',lv:1,name:'5. تشغيل وتسليم',bd:40,bo:200,pred:'4.0',type:'phase',pct:0},
      {id:'5.1',lv:2,name:'التسليم',bd:5,bo:240,pred:'5.0',type:'milestone',pct:0},
    ]
  }
};


// ===================== EXTENDED PROJECT TEMPLATE LIBRARY =====================
function buildPhaseTemplate(name,type,icon,desc,phases){
  let acts=[], n=1, cursor=0, prev='';
  phases.forEach((ph,pi)=>{
    const pid=n+'.0';
    acts.push({id:pid,lv:1,name:n+'. '+ph[0],bd:ph[1],bo:cursor,pred:prev,type:'phase',pct:0});
    let sub=1;
    (ph[2]||[]).forEach((x)=>{
      const id=n+'.'+sub++;
      acts.push({id,lv:2,name:x[0],bd:x[1],bo:cursor+x[2],pred:x[3]||pid,type:x[4]||'normal',pct:0});
    });
    const last=acts[acts.length-1];
    prev=last.id;
    cursor+=ph[1]; n++;
  });
  return {name,type,icon,desc,acts};
}
Object.assign(TPL,{
  hospital:buildPhaseTemplate('مستشفى متكامل','مستشفى','🏥','مبنى طبي + غرف عمليات + MEP طبي + اختبارات وتشغيل',[
    ['التمهيدي والتراخيص',45,[['استلام الموقع والرفع المساحي',5,0,'','milestone'],['التصاريح والاعتمادات الطبية',30,0],['المخططات التنفيذية وBIM',35,5],['خطة الجودة والسلامة الطبية',15,10]]],
    ['الحفر والأساسات',70,[['الحفر ونزح المياه',25,0,'1.2','critical'],['الأساسات والعزل',35,20,'2.1','critical'],['البدروم والخدمات الأرضية',45,35,'2.2','critical']]],
    ['الهيكل الخرساني',160,[['هيكل الأدوار المتكررة',140,0,'3.1','critical'],['السلالم والمصاعد',80,50,'3.1'],['غرف المعدات والأسطح',45,110,'3.2']]],
    ['المباني والواجهات',100,[['مباني وقواطع',60,0,'4.1'],['واجهات وعزل',55,20,'4.1'],['أبواب مقاومة للحريق',35,45,'4.2']]],
    ['الأعمال الطبية والميكانيكية',150,[['HVAC طبي وضغط الغرف',90,0,'5.1','critical'],['غازات طبية',55,25,'5.1','critical'],['Plumbing ومكافحة الحريق',80,40,'5.1'],['مصاعد ومعدات رفع',55,70,'5.2']]],
    ['الكهرباء والتيار الخفيف',130,[['MV/LV والمحولات',55,0,'6.1','critical'],['مولدات وUPS',45,20,'6.1'],['Fire Alarm / CCTV / Access',55,35,'6.1'],['BMS وشبكات البيانات',45,55,'6.3']]],
    ['التشطيبات والتجهيز الطبي',120,[['تشطيبات عامة',80,0,'7.1'],['غرف العمليات والتعقيم',55,25,'7.1','critical'],['مطابخ ومغاسل وتجهيزات',45,45,'7.1'],['الأثاث والتجهيزات الطبية',40,65,'7.2']]],
    ['الاختبارات والتشغيل والتسليم',55,[['TAB واختبارات HVAC',20,0,'8.1','critical'],['اختبارات الكهرباء والطوارئ',15,10,'8.1'],['Commissioning طبي',20,20,'8.2','critical'],['التسليم النهائي',5,45,'8.3','milestone']]]
  ]),
  school:buildPhaseTemplate('مدرسة','مدرسة','🏫','مباني تعليمية + ملاعب + خدمات + تسليم',[
    ['التمهيدي',35,[['استلام الموقع',3,0,'','milestone'],['تجهيز الموقع والسور المؤقت',15,0],['اعتماد الرسومات والتراخيص',25,5]]],
    ['الحفر والأساسات',55,[['حفر وردم',25,0,'1.2','critical'],['أساسات وعزل',35,15,'2.1','critical'],['شبكات تحت الأرض',25,30,'2.2']]],
    ['الهيكل',100,[['هيكل المبنى الرئيسي',85,0,'3.1','critical'],['سلالم ومصاعد',35,35,'3.1']]],
    ['المباني والواجهات',70,[['مباني وقواطع',45,0,'4.1'],['واجهات وأعمال عزل',40,15,'4.1']]],
    ['MEP والكهرباء',95,[['HVAC',55,0,'5.1'],['كهرباء وإنارة',55,10,'5.1'],['حريق وبيانات وأمن',45,30,'5.2']]],
    ['التشطيبات',90,[['أرضيات ودهانات وأسقف',65,0,'6.1'],['أعمال النجارة والأبواب',35,25,'6.1'],['تجهيز الفصول والمعامل',40,45,'6.1']]],
    ['الملاعب والخارجيات',55,[['طرق ومواقف',30,0,'7.1'],['ملاعب ومناطق أطفال',35,10,'7.1'],['Landscape وري',30,20,'7.1']]],
    ['الاختبارات والتسليم',30,[['اختبارات الأنظمة',15,0,'8.1'],['Punch List',20,5,'8.1'],['التسليم',3,27,'8.2','milestone']]]
  ]),
  tower:buildPhaseTemplate('برج سكني 12 دور','عمارة سكنية','🏙️','برج سكني متعدد الأدوار + بدروم + MEP + واجهات',[
    ['التمهيدي والحفر',50,[['استلام ورفع مساحي',5,0,'','milestone'],['سند جوانب وحفر',40,5,'1.1','critical'],['نزح المياه',30,10,'1.2']]],
    ['الأساسات والبدروم',90,[['لبشة/خوازيق حسب التصميم',55,0,'2.1','critical'],['بدروم وعزل',65,20,'2.2','critical'],['خزان وغرف خدمات',35,55,'2.3']]],
    ['الهيكل الخرساني',230,[['أدوار 1-4',75,0,'3.1','critical'],['أدوار 5-8',75,55,'3.1','critical'],['أدوار 9-12',75,110,'3.2','critical'],['سطح وغرف خدمات',35,180,'3.3']]],
    ['المباني والواجهات',140,[['مباني داخلية',85,0,'4.1'],['واجهات وعزل',75,25,'4.1','critical'],['مصاعد',45,50,'4.2']]],
    ['MEP',180,[['تمديدات كهرباء',90,0,'5.1'],['Plumbing وصرف',90,10,'5.1'],['HVAC',80,25,'5.1'],['Fire Fighting',65,45,'5.2'],['ELV وBMS',55,70,'5.1']]],
    ['التشطيبات',150,[['تشطيبات الشقق',110,0,'6.1'],['تشطيبات المناطق المشتركة',70,30,'6.1'],['أعمال الواجهات النهائية',45,55,'6.2']]],
    ['الخارجيات والتسليم',60,[['مداخل ومواقف',35,0,'7.1'],['اختبارات وتشغيل',20,20,'7.1'],['Punch List والتسليم',15,40,'7.2','milestone']]]
  ]),
  residential:buildPhaseTemplate('مجمع عمائر سكنية','مجمع سكني','🏘️','عدة عمائر + بنية تحتية + خدمات مشتركة',[
    ['التخطيط والبنية التحتية',180,[['تجهيز الموقع',30,0,'','milestone'],['طرق وصرف ومياه',90,20,'1.1','critical'],['كهرباء واتصالات',70,60,'1.2']]],
    ['عمارات المرحلة A',220,[['أساسات',55,0,'2.1','critical'],['هيكل',120,45,'2.2','critical'],['مباني وMEP',100,100,'2.3'],['تشطيبات',110,135,'2.4']]],
    ['عمارات المرحلة B',220,[['أساسات',55,0,'3.1','critical'],['هيكل',120,45,'3.2','critical'],['مباني وMEP',100,100,'3.3'],['تشطيبات',110,135,'3.4']]],
    ['الخدمات المشتركة',130,[['نادي ومرافق',70,0,'4.1'],['مسبح وملاعب',55,25,'4.1'],['بوابات وأمن',40,50,'4.2']]],
    ['اللاندسكيب',80,[['زراعة وري',50,0,'5.1'],['ممرات وإنارة خارجية',45,20,'5.1']]],
    ['التسليم',35,[['اختبارات',15,0,'6.1'],['Punch List',20,5,'6.1'],['تسليم المجمع',5,30,'6.2','milestone']]]
  ]),
  infrastructure:buildPhaseTemplate('بنية تحتية متكاملة','بنية تحتية','🛣️','طرق وشبكات مياه وصرف وكهرباء واتصالات وأمطار',[
    ['تمهيدي ومساحة',35,[['استلام ورفع مساحي',5,0,'','milestone'],['تحويلات وتأمينات',15,0,'1.1'],['تصاريح ومخططات تنفيذية',25,5,'1.1']]],
    ['شبكات الصرف',80,[['حفر ومسارات',35,0,'1.2','critical'],['خطوط وغرف تفتيش',60,15,'2.1','critical'],['اختبارات وتسريب',15,55,'2.2']]],
    ['المياه والري',65,[['خطوط المياه',45,0,'3.1','critical'],['خزانات ومحطات رفع',40,15,'3.1'],['اختبارات ضغط',10,45,'3.2','milestone']]],
    ['الكهرباء والاتصالات',75,[['كابلات ومحطات',55,0,'4.1','critical'],['اتصالات وألياف',40,20,'4.1'],['إنارة طرق',35,35,'4.1']]],
    ['الطرق والرصف',90,[['تربة وإحلال',35,0,'2.1'],['طبقات أساس',35,20,'5.1','critical'],['أسفلت ورصف',50,40,'5.2','critical'],['بردورات وأرصفة',35,55,'5.3']]],
    ['الأعمال النهائية',40,[['علامات مرورية',15,0,'6.1'],['اختبارات الشبكات',15,5,'5.4'],['التسليم',5,35,'6.2','milestone']]]
  ]),
  superstructure:buildPhaseTemplate('هيكل خرساني فوق الأرض','هيكل خرساني','🏗️','برنامج هيكل متكرر للأدوار والكمرات والأسقف',[
    ['التمهيدي',15,[['استلام المحاور',2,0,'','milestone'],['تجهيز الشدات والمعدات',10,0,'1.1']]],
    ['الأدوار المتكررة',180,[['أعمدة وحوائط',20,0,'2.1','critical'],['كمرات وأسقف',18,12,'2.1','critical'],['حديد وتسليح الدور',12,4,'2.1'],['صب ومعالجة',5,30,'2.2','milestone']]],
    ['السلالم والسطح',35,[['سلالم',15,0,'3.1'],['سطح وغرف خدمات',20,10,'3.2']]],
    ['الاستلام',15,[['اختبارات ومراجعة',10,0,'4.1'],['استلام الهيكل',2,13,'4.1','milestone']]]
  ]),
  road:buildPhaseTemplate('طريق ومحور مروري','طرق','🚧','أعمال طرق وأرصفة وتصريف وإنارة',[
    ['تمهيدي',20,[['استلام ومحاور',3,0,'','milestone'],['تحويلات وتأمين',10,0,'1.1'],['تجهيز الموقع',15,5,'1.2']]],
    ['أعمال التربة',50,[['حفر وإحلال',30,0,'1.3','critical'],['دمك واختبارات',20,20,'2.1','critical']]],
    ['طبقات الطريق',55,[['Subbase',20,0,'2.2','critical'],['Base Course',20,15,'3.1','critical'],['Asphalt',25,30,'3.2','critical']]],
    ['الرصف والخدمات',45,[['بردورات وأرصفة',25,0,'4.1'],['تصريف مياه الأمطار',25,10,'3.2'],['إنارة وعلامات',20,20,'4.1']]],
    ['التسليم',15,[['اختبارات الطريق',8,0,'4.3'],['التسليم',2,13,'5.1','milestone']]]
  ]),
  hotel:buildPhaseTemplate('فندق','فندق','🏨','فندق متكامل وغرف ومطاعم ومرافق',[
    ['تمهيدي وأساسات',80,[['استلام وتراخيص',15,0,'','milestone'],['حفر وأساسات',55,10,'1.1','critical'],['بدروم وخدمات',45,35,'2.2']]],
    ['الهيكل',170,[['هيكل الأدوار',150,0,'2.1','critical'],['سطح وغرف خدمات',35,120,'3.1']]],
    ['الواجهات والمباني',110,[['واجهات',65,0,'3.1'],['مباني وقواطع',70,20,'3.1']]],
    ['MEP',160,[['HVAC',80,0,'4.1'],['Plumbing',75,10,'4.1'],['Electrical/ELV',75,20,'4.2'],['Fire Fighting',55,40,'4.1']]],
    ['التشطيبات والتجهيز',150,[['غرف الفندق',100,0,'5.1'],['مطاعم ومطابخ',65,30,'5.1'],['Lobby وقاعات',55,50,'5.1'],['Pool/Spa',45,70,'5.2']]],
    ['التشغيل والتسليم',45,[['Testing & Commissioning',25,0,'6.1','critical'],['Punch List',20,15,'6.2'],['التسليم',3,42,'6.3','milestone']]]
  ]),
  warehouse:buildPhaseTemplate('مخزن ومركز لوجستي','مخازن ولوجستيات','🏭','مستودعات وهناجر وساحات ومكاتب',[
    ['تمهيدي',25,[['استلام وتجهيز',5,0,'','milestone'],['أعمال الموقع',20,0,'1.1'],['تصاريح',15,5,'1.1']]],
    ['أساسات وأرضيات',60,[['أساسات',35,0,'1.2','critical'],['أرضيات صناعية',35,20,'2.1','critical']]],
    ['الهيكل والهناجر',75,[['Steel Structure',55,0,'2.1','critical'],['Sandwich Panels',40,20,'3.1'],['أبواب صناعية',20,35,'3.2']]],
    ['MEP والسلامة',55,[['كهرباء وإنارة',35,0,'3.1'],['Fire Fighting',35,10,'4.1','critical'],['تهوية وأمن',25,25,'4.1']]],
    ['الساحات والخدمات',45,[['طرق وساحات تحميل',30,0,'2.2'],['مكاتب وخدمات',30,10,'3.2']]],
    ['التشغيل والتسليم',20,[['اختبارات',10,0,'5.1'],['التسليم',2,18,'6.1','milestone']]]
  ]),
  waterPlant:buildPhaseTemplate('محطة مياه / معالجة','محطة مياه','💧','أعمال مدنية وكهروميكانيكية وتشغيل',[
    ['تمهيدي',35,[['استلام ودراسات',10,0,'','milestone'],['تجهيز وتصاريح',20,5,'1.1'],['مخططات تنفيذية',25,10,'1.1']]],
    ['الأعمال المدنية',80,[['حفر وأساسات',35,0,'1.2','critical'],['أحواض وخزانات',55,15,'2.1','critical'],['مباني الخدمة',35,45,'2.2']]],
    ['الكهروميكانيك',110,[['مضخات ومواسير',60,0,'2.2','critical'],['لوحات ومحولات',45,20,'2.1'],['معدات المعالجة',70,35,'3.1','critical']]],
    ['التحكم والكهرباء',55,[['PLC/SCADA',30,0,'3.3'],['كابلات وتحكم',30,10,'4.1'],['إنارة وأمن',20,25,'4.2']]],
    ['الاختبارات والتشغيل',35,[['Testing',15,0,'4.3'],['Commissioning',15,10,'5.1','critical'],['التسليم',3,32,'5.2','milestone']]]
  ]),
  mixedUse:buildPhaseTemplate('مشروع متعدد الاستخدامات','متعدد الاستخدامات','🏙️','تجاري + إداري + سكني + خدمات',[
    ['التمهيدي والبنية',80,[['استلام وتراخيص',15,0,'','milestone'],['تجهيز وتحويلات',25,0,'1.1'],['بنية تحتية أولية',50,20,'1.2','critical']]],
    ['الحفر والأساسات',100,[['سند وحفر',50,0,'2.1','critical'],['أساسات',55,25,'2.2','critical'],['بدرومات',60,45,'2.3']]],
    ['الهيكل',220,[['الهيكل السكني',150,0,'3.1','critical'],['الهيكل التجاري',130,25,'3.1','critical'],['الهيكل الإداري',120,50,'3.2']]],
    ['واجهات ومباني',120,[['واجهات',75,0,'4.1'],['مباني وقواطع',75,15,'4.1']]],
    ['MEP',160,[['HVAC',80,0,'5.1'],['Electrical',80,10,'5.1'],['Plumbing/Fire',80,20,'5.1'],['ELV/BMS',55,45,'5.2']]],
    ['التشطيبات والـFit-out',150,[['سكني',100,0,'6.1'],['تجاري',100,20,'6.1'],['إداري',80,40,'6.2']]],
    ['الخارجيات والتسليم',60,[['طرق ولاندسكيب',40,0,'7.1'],['اختبارات',20,20,'7.1'],['التسليم',5,55,'7.2','milestone']]]
  ]),
  infrastructureSuper:buildPhaseTemplate('بنية تحتية وفوقية متكاملة','بنية + فوقية','🌐','طرق وشبكات ومبانٍ ومنشآت فوقية',[
    ['التخطيط والتصاريح',45,[['استلام ورفع',5,0,'','milestone'],['تصاريح',25,0,'1.1'],['مخططات تنفيذية',35,5,'1.1']]],
    ['البنية التحتية',160,[['صرف ومياه',70,0,'1.2','critical'],['كهرباء واتصالات',60,25,'2.1','critical'],['طرق ورصف',80,55,'2.2','critical'],['أمطار وري',45,75,'2.1']]],
    ['المنشآت فوقية',220,[['أساسات',55,0,'2.3','critical'],['هيكل',120,45,'3.1','critical'],['مباني وواجهات',90,90,'3.2'],['MEP',110,120,'3.3']]],
    ['التشطيبات والخدمات',120,[['تشطيبات',90,0,'4.1'],['مرافق وخدمات',60,25,'4.2'],['Landscape',50,45,'4.1']]],
    ['التشغيل والتسليم',45,[['اختبارات',20,0,'5.1'],['Punch List',20,10,'5.2'],['التسليم النهائي',5,40,'5.3','milestone']]]
  ])
});

// Aliases for common project types
TPL.complex = TPL.mixedUse;
TPL.mallComplex = TPL.mall;
TPL.medical = TPL.hospital;
TPL.education = TPL.school;
TPL.highrise = TPL.tower;

// Template library editor: persist customized templates locally and remove accidental duplicate codes.

// V7: detailed multi-discipline CPM template with explicit predecessors and individual activity durations
TPL.mepDetailed = {name:'برنامج متكامل تفصيلي — كهرباء وميكانيكا وصحي وMEP',type:'مبنى متكامل',icon:'⚡',desc:'أنشطة تفصيلية ومدد مستقلة وروابط سابقة/لاحقة وتداخل تخصصات',scheduleMode:'dependencies',acts:[{"id":"A00","lv":1,"name":"الأعمال التمهيدية والتصميم والتنسيق","bd":1,"bo":0,"pred":"","type":"phase","pct":0},{"id":"A01","lv":2,"name":"اعتماد نطاق الأعمال والمواصفات ومصفوفة المسؤوليات","bd":5,"bo":0,"pred":"","type":"normal","pct":0,"trade":"A"},{"id":"A02","lv":3,"name":"مراجعة الرسومات المعمارية والإنشائية وMEP","bd":7,"bo":0,"pred":"A01","type":"normal","pct":0,"trade":"A"},{"id":"A03","lv":3,"name":"إعداد سجل الرسومات والاستفسارات الفنية RFI","bd":5,"bo":0,"pred":"A02","type":"normal","pct":0,"trade":"A"},{"id":"A04","lv":3,"name":"إعداد واعتماد Shop Drawings للأنظمة","bd":10,"bo":0,"pred":"A03","type":"normal","pct":0,"trade":"A"},{"id":"A05","lv":3,"name":"إعداد واعتماد Material Submittals والعينات","bd":10,"bo":0,"pred":"A04","type":"normal","pct":0,"trade":"A"},{"id":"A06","lv":3,"name":"إعداد واعتماد Method Statements وخطط الفحص ITP","bd":7,"bo":0,"pred":"A05","type":"normal","pct":0,"trade":"A"},{"id":"A07","lv":3,"name":"تنسيق المسارات وفتحات الخدمات وBIM/Clash Detection","bd":8,"bo":0,"pred":"A06","type":"normal","pct":0,"trade":"A"},{"id":"A08","lv":3,"name":"اعتماد مخططات الأسقف المنعكسة RCP","bd":5,"bo":0,"pred":"A07","type":"normal","pct":0,"trade":"A"},{"id":"A09","lv":3,"name":"اعتماد مخططات غرف المعدات واللوحات","bd":5,"bo":0,"pred":"A08","type":"normal","pct":0,"trade":"A"},{"id":"A10","lv":3,"name":"اعتماد مخططات الاختراقات والسليفات والـ Inserts","bd":5,"bo":0,"pred":"A09","type":"normal","pct":0,"trade":"A"},{"id":"A11","lv":3,"name":"اعتماد خطة الاختبارات والتشغيل والتسليم","bd":4,"bo":0,"pred":"A10","type":"normal","pct":0,"trade":"A"},{"id":"B00","lv":1,"name":"الأعمال المدنية وأعمال الموقع والبنية التحتية","bd":1,"bo":0,"pred":"","type":"phase","pct":0},{"id":"B01","lv":2,"name":"توقيع المحاور والمناسيب ونقاط التحكم","bd":3,"bo":0,"pred":"","type":"normal","pct":0,"trade":"B"},{"id":"B02","lv":3,"name":"تحويل الخدمات القائمة وحماية المرافق","bd":5,"bo":0,"pred":"B01","type":"normal","pct":0,"trade":"B"},{"id":"B03","lv":3,"name":"الحفر العام وحفر غرف التفتيش والخزانات","bd":12,"bo":0,"pred":"B02","type":"normal","pct":0,"trade":"B"},{"id":"B04","lv":3,"name":"نزح المياه والتدعيم عند الحاجة","bd":8,"bo":0,"pred":"B03","type":"normal","pct":0,"trade":"B"},{"id":"B05","lv":3,"name":"إحلال التربة والردم على طبقات","bd":8,"bo":0,"pred":"B04","type":"normal","pct":0,"trade":"B"},{"id":"B06","lv":3,"name":"اختبارات الكثافة والدمك والاعتماد","bd":3,"bo":0,"pred":"B05","type":"normal","pct":0,"trade":"B"},{"id":"B07","lv":3,"name":"فرشة النظافة وأعمال الخرسانة العادية","bd":3,"bo":0,"pred":"B06","type":"normal","pct":0,"trade":"B"},{"id":"B08","lv":3,"name":"شبكات الصرف الخارجية وخطوط الجاذبية","bd":8,"bo":0,"pred":"B07,B06","type":"normal","pct":0,"trade":"B"},{"id":"B09","lv":3,"name":"غرف التفتيش والمطابق الخارجية","bd":6,"bo":0,"pred":"B08,B06","type":"normal","pct":0,"trade":"B"},{"id":"B10","lv":3,"name":"شبكات مياه الشرب الخارجية","bd":6,"bo":0,"pred":"B09,B06","type":"normal","pct":0,"trade":"B"},{"id":"B11","lv":3,"name":"شبكات الحريق الخارجية والحلقات الرئيسية","bd":7,"bo":0,"pred":"B10,B06","type":"normal","pct":0,"trade":"B"},{"id":"B12","lv":3,"name":"قنوات الكهرباء والاتصالات وغرف السحب","bd":7,"bo":0,"pred":"B11,B06","type":"normal","pct":0,"trade":"B"},{"id":"B13","lv":3,"name":"شبكات تصريف الأمطار ومصائد المطر","bd":6,"bo":0,"pred":"B12,B06","type":"normal","pct":0,"trade":"B"},{"id":"B14","lv":3,"name":"اختبار وتسريب شبكات الموقع قبل الردم","bd":3,"bo":0,"pred":"B13,B06","type":"normal","pct":0,"trade":"B"},{"id":"B15","lv":3,"name":"الردم حول الشبكات والتحذير والشريط","bd":5,"bo":0,"pred":"B14,B06","type":"normal","pct":0,"trade":"B"},{"id":"B16","lv":3,"name":"طبقات التأسيس والسن والبردورات","bd":8,"bo":0,"pred":"B15,B06","type":"normal","pct":0,"trade":"B"},{"id":"B17","lv":3,"name":"رصف الطرق والأرصفة والتخطيط","bd":10,"bo":0,"pred":"B16,B06","type":"normal","pct":0,"trade":"B"},{"id":"B18","lv":3,"name":"الري والزراعة واللاندسكيب","bd":10,"bo":0,"pred":"B17,B06","type":"normal","pct":0,"trade":"B"},{"id":"C00","lv":1,"name":"الأعمال الإنشائية وواجهات المبنى","bd":1,"bo":0,"pred":"","type":"phase","pct":0},{"id":"C01","lv":2,"name":"الخوازيق واختبارات سلامة/تحميل الخوازيق","bd":15,"bo":0,"pred":"B03","type":"critical","pct":0,"trade":"C"},{"id":"C02","lv":3,"name":"القواعد أو اللبشة والميدات","bd":15,"bo":0,"pred":"C01","type":"critical","pct":0,"trade":"C"},{"id":"C03","lv":3,"name":"عزل الأساسات وحماية العزل","bd":6,"bo":0,"pred":"C02","type":"critical","pct":0,"trade":"C"},{"id":"C04","lv":3,"name":"جدران وأعمدة البدروم","bd":10,"bo":0,"pred":"C03","type":"normal","pct":0,"trade":"C"},{"id":"C05","lv":3,"name":"بلاطات وكمرات البدروم","bd":12,"bo":0,"pred":"C04","type":"normal","pct":0,"trade":"C"},{"id":"C06","lv":3,"name":"الهيكل الخرساني للأدوار المتكررة","bd":30,"bo":0,"pred":"C05","type":"normal","pct":0,"trade":"C"},{"id":"C07","lv":3,"name":"السلالم وغرف المصاعد","bd":12,"bo":0,"pred":"C06","type":"normal","pct":0,"trade":"C"},{"id":"C08","lv":3,"name":"مباني البلوك والقواطيع","bd":18,"bo":0,"pred":"C07","type":"normal","pct":0,"trade":"C"},{"id":"C09","lv":3,"name":"إغلاق الفتحات والسليفات المعتمدة","bd":5,"bo":0,"pred":"C08","type":"normal","pct":0,"trade":"C"},{"id":"C10","lv":3,"name":"تركيب الواجهات والألومنيوم والزجاج","bd":20,"bo":0,"pred":"C09","type":"normal","pct":0,"trade":"C"},{"id":"C11","lv":3,"name":"اختبار رش المياه للواجهات","bd":3,"bo":0,"pred":"C10","type":"critical","pct":0,"trade":"C"},{"id":"D00","lv":1,"name":"الأعمال الكهربائية - القوى والإنارة والتيار الخفيف","bd":1,"bo":0,"pred":"","type":"phase","pct":0},{"id":"D01","lv":2,"name":"تأكيد الأحمال الكهربائية وجدول الأحمال","bd":4,"bo":0,"pred":"A04","type":"critical","pct":0,"trade":"D"},{"id":"D02","lv":3,"name":"اعتماد مخطط مصدر التغذية ومسار الكابلات","bd":5,"bo":0,"pred":"D01","type":"critical","pct":0,"trade":"D"},{"id":"D03","lv":3,"name":"تأسيس مواسير الكهرباء داخل البلاطات قبل الصب","bd":6,"bo":0,"pred":"D02,C05","type":"critical","pct":0,"trade":"D"},{"id":"D04","lv":3,"name":"تركيب علب المفاتيح والبرايز داخل المباني","bd":5,"bo":0,"pred":"D03","type":"normal","pct":0,"trade":"D"},{"id":"D05","lv":3,"name":"تركيب السليفات والـ Inserts ومسارات الأرضي","bd":4,"bo":0,"pred":"D04","type":"normal","pct":0,"trade":"D"},{"id":"D06","lv":3,"name":"تركيب حوامل الكابلات Cable Trays/Trunking","bd":8,"bo":0,"pred":"D05,C06","type":"normal","pct":0,"trade":"D"},{"id":"D07","lv":3,"name":"تركيب مواسير EMT/PVC ومسارات السقف","bd":8,"bo":0,"pred":"D06","type":"normal","pct":0,"trade":"D"},{"id":"D08","lv":3,"name":"تركيب غرف ومحطات/محولات الكهرباء إن وجدت","bd":15,"bo":0,"pred":"D07","type":"normal","pct":0,"trade":"D"},{"id":"D09","lv":3,"name":"تركيب مولد الطوارئ وملحقاته إن وجد","bd":10,"bo":0,"pred":"D08","type":"normal","pct":0,"trade":"D"},{"id":"D10","lv":3,"name":"تركيب ATS ومزامنة المولد","bd":5,"bo":0,"pred":"D09","type":"normal","pct":0,"trade":"D"},{"id":"D11","lv":3,"name":"تركيب اللوحات الرئيسية MDB/SMDB","bd":8,"bo":0,"pred":"D10","type":"normal","pct":0,"trade":"D"},{"id":"D12","lv":3,"name":"تركيب لوحات التوزيع DB","bd":8,"bo":0,"pred":"D11","type":"normal","pct":0,"trade":"D"},{"id":"D13","lv":3,"name":"تركيب قضبان Busduct/Busbar Trunking إن وجدت","bd":8,"bo":0,"pred":"D12","type":"normal","pct":0,"trade":"D"},{"id":"D14","lv":3,"name":"سحب كابلات الجهد المتوسط واختبارها","bd":7,"bo":0,"pred":"D13","type":"normal","pct":0,"trade":"D"},{"id":"D15","lv":3,"name":"تركيب نهايات واختبارات كابلات الجهد المتوسط","bd":4,"bo":0,"pred":"D14","type":"normal","pct":0,"trade":"D"},{"id":"D16","lv":3,"name":"سحب كابلات القوى الرئيسية","bd":10,"bo":0,"pred":"D15","type":"normal","pct":0,"trade":"D"},{"id":"D17","lv":3,"name":"سحب كابلات التغذية الفرعية","bd":10,"bo":0,"pred":"D16","type":"normal","pct":0,"trade":"D"},{"id":"D18","lv":3,"name":"تركيب نظام التأريض وربط الهياكل","bd":6,"bo":0,"pred":"D17","type":"normal","pct":0,"trade":"D"},{"id":"D19","lv":3,"name":"تركيب شبكة مانع الصواعق","bd":5,"bo":0,"pred":"D18","type":"normal","pct":0,"trade":"D"},{"id":"D20","lv":3,"name":"تركيب وحدات الإنارة الداخلية","bd":8,"bo":0,"pred":"D19,I03","type":"normal","pct":0,"trade":"D"},{"id":"D21","lv":3,"name":"تركيب إنارة الطوارئ ولوحات المخارج","bd":5,"bo":0,"pred":"D20","type":"normal","pct":0,"trade":"D"},{"id":"D22","lv":3,"name":"تركيب المفاتيح والبرايز ومخارج القوى","bd":7,"bo":0,"pred":"D21","type":"normal","pct":0,"trade":"D"},{"id":"D23","lv":3,"name":"تغذية المعدات الميكانيكية وعوازل الفصل","bd":6,"bo":0,"pred":"D22","type":"normal","pct":0,"trade":"D"},{"id":"D24","lv":3,"name":"تركيب نظام UPS ومخارج حرجة إن وجد","bd":6,"bo":0,"pred":"D23","type":"normal","pct":0,"trade":"D"},{"id":"D25","lv":3,"name":"تركيب نظام إدارة المبنى BMS - لوحات وتحكم","bd":8,"bo":0,"pred":"D24","type":"normal","pct":0,"trade":"D"},{"id":"D26","lv":3,"name":"تركيب نظام إنذار الحريق FACP والكواشف","bd":10,"bo":0,"pred":"D25","type":"normal","pct":0,"trade":"D"},{"id":"D27","lv":3,"name":"تركيب نظام الصوت العام والإخلاء الصوتي","bd":8,"bo":0,"pred":"D26","type":"normal","pct":0,"trade":"D"},{"id":"D28","lv":3,"name":"تركيب شبكة البيانات والـ Wi-Fi","bd":8,"bo":0,"pred":"D27","type":"normal","pct":0,"trade":"D"},{"id":"D29","lv":3,"name":"تركيب CCTV والكاميرات والتسجيل","bd":7,"bo":0,"pred":"D28","type":"normal","pct":0,"trade":"D"},{"id":"D30","lv":3,"name":"تركيب Access Control والأقفال","bd":6,"bo":0,"pred":"D29","type":"normal","pct":0,"trade":"D"},{"id":"D31","lv":3,"name":"تركيب نظام SMATV/TV والاتصالات","bd":6,"bo":0,"pred":"D30","type":"normal","pct":0,"trade":"D"},{"id":"D32","lv":3,"name":"اختبارات العزل والاستمرارية ومقاومة الأرضي","bd":4,"bo":0,"pred":"D31","type":"normal","pct":0,"trade":"D"},{"id":"D33","lv":3,"name":"اختبارات اللوحات والحماية وحقن المرحلات","bd":5,"bo":0,"pred":"D32","type":"normal","pct":0,"trade":"D"},{"id":"D34","lv":3,"name":"اختبار الإنارة والطوارئ والـ Lux Level","bd":3,"bo":0,"pred":"D33","type":"normal","pct":0,"trade":"D"},{"id":"D35","lv":3,"name":"اختبار تكامل أنظمة الحريق والتيار الخفيف","bd":5,"bo":0,"pred":"D34","type":"critical","pct":0,"trade":"D"},{"id":"E00","lv":1,"name":"الأعمال الميكانيكية والتكييف والتهوية","bd":1,"bo":0,"pred":"","type":"phase","pct":0},{"id":"E01","lv":2,"name":"اعتماد حسابات الأحمال الحرارية واختيار المعدات","bd":7,"bo":0,"pred":"A07","type":"normal","pct":0,"trade":"E"},{"id":"E02","lv":3,"name":"اعتماد مخططات مجاري الهواء والضغط الساكن","bd":6,"bo":0,"pred":"E01","type":"normal","pct":0,"trade":"E"},{"id":"E03","lv":3,"name":"اعتماد مخططات مواسير التبريد والتكثيف","bd":6,"bo":0,"pred":"E02","type":"normal","pct":0,"trade":"E"},{"id":"E04","lv":3,"name":"تجهيز القواعد الخرسانية وعوازل الاهتزاز","bd":5,"bo":0,"pred":"E03,C05","type":"normal","pct":0,"trade":"E"},{"id":"E05","lv":3,"name":"توريد وحدات التكييف الرئيسية AHU/FAHU/FCU","bd":20,"bo":0,"pred":"E04,A05","type":"normal","pct":0,"trade":"E"},{"id":"E06","lv":3,"name":"تركيب وحدات التبريد Chiller/VRF/Package حسب التصميم","bd":15,"bo":0,"pred":"E05","type":"normal","pct":0,"trade":"E"},{"id":"E07","lv":3,"name":"تركيب وحدات AHU وFAHU","bd":10,"bo":0,"pred":"E06","type":"normal","pct":0,"trade":"E"},{"id":"E08","lv":3,"name":"تركيب وحدات FCU/Split/VRF الداخلية","bd":10,"bo":0,"pred":"E07","type":"normal","pct":0,"trade":"E"},{"id":"E09","lv":3,"name":"تركيب مجاري الهواء GI Ducts","bd":15,"bo":0,"pred":"E08","type":"normal","pct":0,"trade":"E"},{"id":"E10","lv":3,"name":"عزل مجاري الهواء وتركيب الكسوة","bd":8,"bo":0,"pred":"E09","type":"normal","pct":0,"trade":"E"},{"id":"E11","lv":3,"name":"تركيب Dampers وFire/Smoke Dampers","bd":6,"bo":0,"pred":"E10","type":"normal","pct":0,"trade":"E"},{"id":"E12","lv":3,"name":"تركيب مخارج الهواء والدفيوزرات والجريلات","bd":7,"bo":0,"pred":"E11,I03","type":"normal","pct":0,"trade":"E"},{"id":"E13","lv":3,"name":"تركيب مواسير المياه المبردة/الفريون","bd":12,"bo":0,"pred":"E12","type":"normal","pct":0,"trade":"E"},{"id":"E14","lv":3,"name":"اختبار ضغط مواسير التبريد قبل العزل","bd":3,"bo":0,"pred":"E13","type":"normal","pct":0,"trade":"E"},{"id":"E15","lv":3,"name":"غسيل الشبكة ومعالجة المياه والتعبئة","bd":4,"bo":0,"pred":"E14","type":"normal","pct":0,"trade":"E"},{"id":"E16","lv":3,"name":"تركيب مواسير صرف التكثيف واختبارها","bd":5,"bo":0,"pred":"E15","type":"normal","pct":0,"trade":"E"},{"id":"E17","lv":3,"name":"تركيب مراوح سحب ودفع الهواء","bd":7,"bo":0,"pred":"E16","type":"normal","pct":0,"trade":"E"},{"id":"E18","lv":3,"name":"تركيب مراوح مواقف السيارات والتحكم CO","bd":6,"bo":0,"pred":"E17","type":"normal","pct":0,"trade":"E"},{"id":"E19","lv":3,"name":"تركيب نظام التحكم HVAC والثرموستات","bd":6,"bo":0,"pred":"E18","type":"normal","pct":0,"trade":"E"},{"id":"E20","lv":3,"name":"موازنة الهواء TAB وقياس معدلات التدفق","bd":7,"bo":0,"pred":"E19","type":"normal","pct":0,"trade":"E"},{"id":"E21","lv":3,"name":"تشغيل تجريبي وضبط درجات الحرارة","bd":5,"bo":0,"pred":"E20","type":"normal","pct":0,"trade":"E"},{"id":"F00","lv":1,"name":"الأعمال الصحية والتغذية والصرف والمضخات","bd":1,"bo":0,"pred":"","type":"phase","pct":0},{"id":"F01","lv":2,"name":"اعتماد مخططات التغذية والصرف والـ Riser","bd":6,"bo":0,"pred":"A07","type":"critical","pct":0,"trade":"F"},{"id":"F02","lv":3,"name":"تحديد مناسيب ومواقع الصرف والسليفات","bd":4,"bo":0,"pred":"F01","type":"critical","pct":0,"trade":"F"},{"id":"F03","lv":3,"name":"تركيب مواسير الصرف المدفونة أسفل الأرضيات","bd":8,"bo":0,"pred":"F02,C05","type":"critical","pct":0,"trade":"F"},{"id":"F04","lv":3,"name":"اختبار مواسير الصرف المدفونة قبل الردم","bd":3,"bo":0,"pred":"F03","type":"normal","pct":0,"trade":"F"},{"id":"F05","lv":3,"name":"تركيب مواسير الصرف داخل الشفتات","bd":8,"bo":0,"pred":"F04","type":"normal","pct":0,"trade":"F"},{"id":"F06","lv":3,"name":"تركيب مواسير التهوية Vent Pipes","bd":6,"bo":0,"pred":"F05","type":"normal","pct":0,"trade":"F"},{"id":"F07","lv":3,"name":"تركيب مواسير مياه باردة داخل الشفتات","bd":8,"bo":0,"pred":"F06","type":"normal","pct":0,"trade":"F"},{"id":"F08","lv":3,"name":"تركيب مواسير مياه ساخنة وراجعها","bd":7,"bo":0,"pred":"F07","type":"normal","pct":0,"trade":"F"},{"id":"F09","lv":3,"name":"تركيب مواسير مياه داخل الحمامات والمطابخ","bd":8,"bo":0,"pred":"F08","type":"normal","pct":0,"trade":"F"},{"id":"F10","lv":3,"name":"تركيب محابس العزل والموازنة وعدم الرجوع","bd":5,"bo":0,"pred":"F09","type":"normal","pct":0,"trade":"F"},{"id":"F11","lv":3,"name":"تركيب عزل مواسير المياه الساخنة","bd":4,"bo":0,"pred":"F10","type":"normal","pct":0,"trade":"F"},{"id":"F12","lv":3,"name":"تركيب خزانات المياه وتجهيز قواعدها","bd":8,"bo":0,"pred":"F11","type":"normal","pct":0,"trade":"F"},{"id":"F13","lv":3,"name":"تركيب مضخات التغذية ومجموعة الضغط","bd":6,"bo":0,"pred":"F12","type":"normal","pct":0,"trade":"F"},{"id":"F14","lv":3,"name":"تركيب مضخات الصرف/الرفع وغرف التجميع","bd":6,"bo":0,"pred":"F13","type":"normal","pct":0,"trade":"F"},{"id":"F15","lv":3,"name":"تركيب سخانات المياه المركزية أو المحلية","bd":5,"bo":0,"pred":"F14","type":"normal","pct":0,"trade":"F"},{"id":"F16","lv":3,"name":"تركيب وحدات معالجة/فلاتر المياه إن وجدت","bd":6,"bo":0,"pred":"F15","type":"normal","pct":0,"trade":"F"},{"id":"F17","lv":3,"name":"اختبار ضغط شبكة المياه والتطهير","bd":4,"bo":0,"pred":"F16","type":"normal","pct":0,"trade":"F"},{"id":"F18","lv":3,"name":"اختبار الصرف بالماء/الدخان وفحص الميول","bd":4,"bo":0,"pred":"F17,I03","type":"normal","pct":0,"trade":"F"},{"id":"F19","lv":3,"name":"تركيب الأدوات الصحية والخلاطات","bd":8,"bo":0,"pred":"F18","type":"normal","pct":0,"trade":"F"},{"id":"F20","lv":3,"name":"تركيب المصارف الأرضية والـ Cleanouts","bd":5,"bo":0,"pred":"F19","type":"normal","pct":0,"trade":"F"},{"id":"F21","lv":3,"name":"تركيب سخانات/مبردات ومخارج خاصة","bd":4,"bo":0,"pred":"F20","type":"normal","pct":0,"trade":"F"},{"id":"F22","lv":3,"name":"اختبار التشغيل والتسريب ودرجات الحرارة","bd":4,"bo":0,"pred":"F21","type":"critical","pct":0,"trade":"F"},{"id":"G00","lv":1,"name":"مكافحة الحريق وأنظمة الحماية","bd":1,"bo":0,"pred":"","type":"phase","pct":0},{"id":"G01","lv":2,"name":"اعتماد الحسابات الهيدروليكية ومخططات الحريق","bd":7,"bo":0,"pred":"A07","type":"critical","pct":0,"trade":"G"},{"id":"G02","lv":3,"name":"تركيب خزان الحريق وغرفة المضخات","bd":12,"bo":0,"pred":"G01,C05","type":"critical","pct":0,"trade":"G"},{"id":"G03","lv":3,"name":"تركيب مجموعة مضخات الحريق الرئيسية والجوكي","bd":8,"bo":0,"pred":"G02","type":"critical","pct":0,"trade":"G"},{"id":"G04","lv":3,"name":"تركيب الشبكة الرئيسية والرايزرات","bd":10,"bo":0,"pred":"G03","type":"normal","pct":0,"trade":"G"},{"id":"G05","lv":3,"name":"تركيب مواسير الرشاشات داخل الأسقف","bd":12,"bo":0,"pred":"G04","type":"normal","pct":0,"trade":"G"},{"id":"G06","lv":3,"name":"تركيب صناديق الحريق وHose Reel","bd":7,"bo":0,"pred":"G05","type":"normal","pct":0,"trade":"G"},{"id":"G07","lv":3,"name":"تركيب صنابير الحريق الخارجية وHydrants","bd":6,"bo":0,"pred":"G06","type":"normal","pct":0,"trade":"G"},{"id":"G08","lv":3,"name":"تركيب Sprinkler Heads بعد إنهاء السقف","bd":6,"bo":0,"pred":"G07,I03","type":"normal","pct":0,"trade":"G"},{"id":"G09","lv":3,"name":"تركيب نظام إطفاء خاص لغرف الكهرباء/السيرفر إن وجد","bd":7,"bo":0,"pred":"G08","type":"normal","pct":0,"trade":"G"},{"id":"G10","lv":3,"name":"اختبار الضغط والغسيل والتدفق","bd":4,"bo":0,"pred":"G09","type":"normal","pct":0,"trade":"G"},{"id":"G11","lv":3,"name":"اختبار مضخات الحريق وقياس التدفق والضغط","bd":3,"bo":0,"pred":"G10","type":"normal","pct":0,"trade":"G"},{"id":"G12","lv":3,"name":"اختبار تكامل إنذار الحريق مع أنظمة الإطفاء","bd":4,"bo":0,"pred":"G11","type":"critical","pct":0,"trade":"G"},{"id":"H00","lv":1,"name":"المصاعد والأنظمة الخاصة","bd":1,"bo":0,"pred":"","type":"phase","pct":0},{"id":"H01","lv":2,"name":"اعتماد رسومات المصاعد والأحمال والتغذية","bd":5,"bo":0,"pred":"A07","type":"normal","pct":0,"trade":"H"},{"id":"H02","lv":3,"name":"تجهيز بئر المصعد والفتحات والحوامل","bd":8,"bo":0,"pred":"H01,C06","type":"normal","pct":0,"trade":"H"},{"id":"H03","lv":3,"name":"تركيب السكك والأبواب والمعدات","bd":15,"bo":0,"pred":"H02","type":"normal","pct":0,"trade":"H"},{"id":"H04","lv":3,"name":"تركيب الكابينة والمحرك ووحدة التحكم","bd":12,"bo":0,"pred":"H03","type":"normal","pct":0,"trade":"H"},{"id":"H05","lv":3,"name":"توصيلات القوى والاتصالات للمصعد","bd":5,"bo":0,"pred":"H04","type":"normal","pct":0,"trade":"H"},{"id":"H06","lv":3,"name":"اختبارات المصعد والحمولة واعتماد جهة الفحص","bd":5,"bo":0,"pred":"H05","type":"normal","pct":0,"trade":"H"},{"id":"H07","lv":3,"name":"تركيب أنظمة إدارة المواقف/البوابات إن وجدت","bd":7,"bo":0,"pred":"H06","type":"normal","pct":0,"trade":"H"},{"id":"H08","lv":3,"name":"تركيب أنظمة مطبخ/غاز/هواء مضغوط حسب المشروع","bd":8,"bo":0,"pred":"H07","type":"normal","pct":0,"trade":"H"},{"id":"I00","lv":1,"name":"التشطيبات والتنسيق وإغلاق الأعمال","bd":1,"bo":0,"pred":"","type":"phase","pct":0},{"id":"I01","lv":2,"name":"اعتماد عينات التشطيبات ونماذج الحمامات","bd":7,"bo":0,"pred":"A05","type":"normal","pct":0,"trade":"I"},{"id":"I02","lv":3,"name":"محارة وطرطشة وإصلاحات حول الخدمات","bd":15,"bo":0,"pred":"I01,C07","type":"normal","pct":0,"trade":"I"},{"id":"I03","lv":3,"name":"عزل الحمامات والمناطق الرطبة واختبار الغمر","bd":6,"bo":0,"pred":"I02,F08","type":"normal","pct":0,"trade":"I"},{"id":"I04","lv":3,"name":"تركيب الأرضيات والحوائط","bd":18,"bo":0,"pred":"I03","type":"normal","pct":0,"trade":"I"},{"id":"I05","lv":3,"name":"تركيب الأسقف المستعارة بعد اعتماد الخدمات فوقها","bd":12,"bo":0,"pred":"I04,D06,E12,F08,G05","type":"normal","pct":0,"trade":"I"},{"id":"I06","lv":3,"name":"تركيب أبواب الصيانة وفتحات الوصول للخدمات","bd":5,"bo":0,"pred":"I05,D32,E20,F18,G10","type":"normal","pct":0,"trade":"I"},{"id":"I07","lv":3,"name":"دهانات وتشطيبات نهائية","bd":12,"bo":0,"pred":"I06","type":"normal","pct":0,"trade":"I"},{"id":"I08","lv":3,"name":"تركيب الأبواب والإكسسوارات والزجاج الداخلي","bd":10,"bo":0,"pred":"I07","type":"normal","pct":0,"trade":"I"},{"id":"I09","lv":3,"name":"تركيب الواجهات النهائية والسدادات","bd":8,"bo":0,"pred":"I08","type":"normal","pct":0,"trade":"I"},{"id":"I10","lv":3,"name":"إغلاق فتحات الحريق Fire Stopping","bd":7,"bo":0,"pred":"I09","type":"normal","pct":0,"trade":"I"},{"id":"I11","lv":3,"name":"وضع الملصقات وترقيم الكابلات والمحابس والمعدات","bd":5,"bo":0,"pred":"I10","type":"normal","pct":0,"trade":"I"},{"id":"I12","lv":3,"name":"تنظيف غرف الخدمات وتسليمها","bd":3,"bo":0,"pred":"I11","type":"normal","pct":0,"trade":"I"},{"id":"J00","lv":1,"name":"الاختبارات والتشغيل والتسليم النهائي","bd":1,"bo":0,"pred":"","type":"phase","pct":0},{"id":"J01","lv":2,"name":"استكمال قوائم الفحص الميكانيكية Pre-commissioning","bd":5,"bo":0,"pred":"D35,E21,F22,G12,H06","type":"critical","pct":0,"trade":"J"},{"id":"J02","lv":3,"name":"اختبار العزل الكهربائي والاستمرارية النهائي","bd":4,"bo":0,"pred":"J01,D31","type":"critical","pct":0,"trade":"J"},{"id":"J03","lv":3,"name":"تشغيل اللوحات والدوائر وتوثيق القياسات","bd":4,"bo":0,"pred":"J02,D32","type":"critical","pct":0,"trade":"J"},{"id":"J04","lv":3,"name":"تشغيل مضخات المياه والصرف وضبط الضغط","bd":4,"bo":0,"pred":"J03,F22","type":"normal","pct":0,"trade":"J"},{"id":"J05","lv":3,"name":"تشغيل التكييف واختبارات الأداء","bd":7,"bo":0,"pred":"J04,E21","type":"normal","pct":0,"trade":"J"},{"id":"J06","lv":3,"name":"اختبارات TAB النهائية واعتماد التقارير","bd":5,"bo":0,"pred":"J05,E20","type":"normal","pct":0,"trade":"J"},{"id":"J07","lv":3,"name":"اختبار متكامل لأنظمة الحريق والإخلاء","bd":4,"bo":0,"pred":"J06,G12,D35","type":"normal","pct":0,"trade":"J"},{"id":"J08","lv":3,"name":"اختبار تكامل BMS مع المعدات والعدادات","bd":5,"bo":0,"pred":"J07,D25,E19","type":"normal","pct":0,"trade":"J"},{"id":"J09","lv":3,"name":"اختبارات الأنظمة منخفضة التيار والشبكات","bd":4,"bo":0,"pred":"J08,D30","type":"normal","pct":0,"trade":"J"},{"id":"J10","lv":3,"name":"اختبار الأحمال الكهربائية والطوارئ والمولد","bd":4,"bo":0,"pred":"J09,D33,D34","type":"normal","pct":0,"trade":"J"},{"id":"J11","lv":3,"name":"اختبارات الأداء المتكاملة IST","bd":5,"bo":0,"pred":"J10,J02,J03,J04,J05,J07,J08","type":"normal","pct":0,"trade":"J"},{"id":"J12","lv":3,"name":"إغلاق الملاحظات Punch List وإعادة الفحص","bd":10,"bo":0,"pred":"J11","type":"normal","pct":0,"trade":"J"},{"id":"J13","lv":3,"name":"تسليم مخططات As-Built لجميع التخصصات","bd":8,"bo":0,"pred":"J12","type":"normal","pct":0,"trade":"J"},{"id":"J14","lv":3,"name":"تسليم O&M Manuals والضمانات وشهادات الاختبار","bd":7,"bo":0,"pred":"J13,J12","type":"normal","pct":0,"trade":"J"},{"id":"J15","lv":3,"name":"تدريب المالك/التشغيل والصيانة","bd":3,"bo":0,"pred":"J14,J12","type":"normal","pct":0,"trade":"J"},{"id":"J16","lv":3,"name":"التسليم الابتدائي ثم النهائي","bd":3,"bo":0,"pred":"J15,J12","type":"critical","pct":0,"trade":"J"}]};
const TPL_ORIGINAL = JSON.parse(JSON.stringify(TPL));
try {
  const saved = JSON.parse(localStorage.getItem('epms_schedule_templates_v6') || '{}');
  Object.keys(saved).forEach(k => { if (TPL[k] && saved[k] && Array.isArray(saved[k].acts)) TPL[k] = saved[k]; });
} catch(e) {}
function escapeHtml(v){return String(v==null?'':v).replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));}
function persistTemplates(){ try { localStorage.setItem('epms_schedule_templates_v6', JSON.stringify(TPL)); } catch(e) { alert('تعذر حفظ القوالب؛ قد تكون مساحة التخزين ممتلئة.'); } renderTemplateGrid(); }
function selectedTemplate(){ return TPL[selectedTpl] || null; }
function renderTplActivitySummary(){ const el=document.getElementById('tplActivitySummary'),t=selectedTemplate(); if(!el||!t)return; el.innerHTML='<b>'+escapeHtml(t.name)+' — '+t.acts.length+' بند</b><br>'+t.acts.slice(0,180).map(a=>'<div style="padding:2px;border-bottom:1px solid var(--bd)"><b>'+escapeHtml(a.id)+'</b> · مستوى '+(a.lv||2)+' · '+escapeHtml(a.name)+' — '+Number(a.bd||a.dur||1)+' يوم</div>').join('')+(t.acts.length>180?'<div>... بقية البنود</div>':''); }
function templateAddActivity(){ const t=selectedTemplate();if(!t)return;const id=prompt('كود البند الجديد:',String(Math.max(0,...t.acts.map(a=>Number(String(a.id).replace(/[^0-9]/g,''))||0))+1));if(id===null)return;if(t.acts.some(a=>String(a.id)===id.trim())){alert('الكود مستخدم بالفعل في هذا القالب');return}const name=prompt('اسم البند / النشاط:');if(!name||!name.trim())return;const dur=prompt('المدة بالأيام:', '5');if(dur===null)return;const lv=prompt('المستوى: 1 رئيسي، 2 فرعي، 3 تفصيلي','3');if(lv===null)return;const pred=prompt('أكواد الأنشطة السابقة مفصولة بفواصل (اختياري):','');t.acts.push({id:id.trim(),lv:Math.max(1,Math.min(3,Number(lv)||3)),name:name.trim(),bd:Math.max(1,Number(dur)||1),bo:0,pred:pred||'',type:'normal',pct:0});persistTemplates();renderTplActivitySummary();toast('تمت إضافة البند إلى القالب'); }
function templateEditActivity(){const t=selectedTemplate();if(!t)return;const id=prompt('اكتب كود البند المراد تعديله:\n'+t.acts.map(a=>a.id+' — '+a.name).join('\n'));if(id===null)return;const a=t.acts.find(x=>String(x.id)===id.trim());if(!a){alert('الكود غير موجود');return}const name=prompt('اسم البند:',a.name);if(name===null)return;const dur=prompt('المدة بالأيام:',a.bd||a.dur||1);if(dur===null)return;const lv=prompt('المستوى: 1 رئيسي، 2 فرعي، 3 تفصيلي',a.lv||2);if(lv===null)return;const pred=prompt('الأنشطة السابقة:',a.pred||'');if(pred===null)return;a.name=name.trim()||a.name;a.bd=Math.max(1,Number(dur)||1);a.dur=a.bd;a.lv=Math.max(1,Math.min(3,Number(lv)||2));a.pred=pred.trim();persistTemplates();renderTplActivitySummary();toast('تم تعديل البند في القالب');}
function templateDeleteActivity(){const t=selectedTemplate();if(!t)return;const id=prompt('اكتب كود البند المراد حذفه:\n'+t.acts.map(a=>a.id+' — '+a.name).join('\n'));if(id===null)return;const a=t.acts.find(x=>String(x.id)===id.trim());if(!a){alert('الكود غير موجود');return}if(!confirm('حذف «'+a.name+'» من القالب الجاهز؟ لن يؤثر ذلك في البرامج المحملة مسبقاً.'))return;t.acts=t.acts.filter(x=>String(x.id)!==id.trim());persistTemplates();renderTplActivitySummary();}
function templateResetSelected(){if(!TPL_ORIGINAL[selectedTpl])return;if(!confirm('استعادة النسخة الأصلية من هذا القالب؟'))return;TPL[selectedTpl]=JSON.parse(JSON.stringify(TPL_ORIGINAL[selectedTpl]));try{const saved=JSON.parse(localStorage.getItem('epms_schedule_templates_v6')||'{}');delete saved[selectedTpl];localStorage.setItem('epms_schedule_templates_v6',JSON.stringify(saved));}catch(e){}renderTemplateGrid();renderTplActivitySummary();}
function templateExportJSON(){const blob=new Blob([JSON.stringify(TPL,null,2)],{type:'application/json;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='EPMS_Schedule_Templates_V8.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function templateImportJSON(ev){const f=ev.target.files&&ev.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const obj=JSON.parse(r.result);Object.keys(obj).forEach(k=>{if(obj[k]&&Array.isArray(obj[k].acts))TPL[k]=obj[k]});persistTemplates();renderTplActivitySummary();alert('تم استيراد القوالب بنجاح')}catch(e){alert('ملف JSON غير صالح')}ev.target.value=''};r.readAsText(f)}
// ===================== MULTI-PROJECT STATE
// projects = { id: { name, type, start, scale, acts, baseline } }
let projects = {};
let currentId = null;
let filter = 'all';
let ganttMode = 'phase';
let selectedTpl = 'compound';

function uid(){ return 'p'+Date.now()+Math.floor(Math.random()*1000) }

function getCur(){ return projects[currentId] || null }
function getActs(){ const c=getCur(); return c ? c.acts : [] }
function setActs(arr){ if(currentId && projects[currentId]) projects[currentId].acts = arr }

// ===================== HELPERS =====================
function parseDate(s){const [y,m,d]=s.split('-').map(Number);return new Date(y,m-1,d)}
function fmt(dt){if(!dt||isNaN(dt))return '—';return dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0')+'-'+String(dt.getDate()).padStart(2,'0')}
function addDays(dt,n){const r=new Date(dt);r.setDate(r.getDate()+Math.round(n));return r}
function daysBetween(a,b){return Math.round((b-a)/86400000)}
function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
function typeLabel(t){return {phase:'مرحلة',critical:'حرج',milestone:'معلم',normal:'نشاط'}[t]||t}

function syncUIFromProject(){
  const c=getCur(); if(!c) return;
  document.getElementById('projName').value = c.name;
  document.getElementById('projType').value = c.type;
  document.getElementById('startDate').value = c.start;
  document.getElementById('scale').value = c.scale || 100;
  document.getElementById('hdrTitle').textContent = 'برنامج زمني — ' + c.name;
  document.getElementById('hdrSub').textContent = c.type + ' | مشروع EPMS: ' + (c.linkedProjectId ? getLinkedProjectName(c.linkedProjectId) : 'غير محدد');
  renderEpmsProjectSelect();
  renderApprovalBadge();
}

function onMetaChange(){
  const c=getCur(); if(!c) return;
  const proposed={
    name:document.getElementById('projName').value,
    type:document.getElementById('projType').value,
    start:document.getElementById('startDate').value,
    scale:parseFloat(document.getElementById('scale').value)||100
  };
  const before={name:c.name,type:c.type,start:c.start,scale:c.scale};
  if(JSON.stringify(before)!==JSON.stringify(proposed)) beginScheduleEdit('تعديل بيانات المشروع');
  c.name=proposed.name; c.type=proposed.type; c.start=proposed.start; c.scale=proposed.scale;
  if(c.approvalStatus!=='معتمد' && JSON.stringify(before)!==JSON.stringify(proposed)) resetScheduleApproval('تم تعديل بيانات المشروع');
  saveAll(); renderProjBar(); updateHeader(); renderApprovalBadge();
}

function updateHeader(){
  const c=getCur();
  if(c){
    document.getElementById('hdrTitle').textContent='برنامج زمني — '+c.name;
    document.getElementById('hdrSub').textContent=c.type+' | مشروع EPMS: '+(c.linkedProjectId?getLinkedProjectName(c.linkedProjectId):'غير محدد');
    renderEpmsProjectSelect();
    renderApprovalBadge();
  }
}

function getStart(){ return parseDate(document.getElementById('startDate').value) }
function getScale(){ return (parseFloat(document.getElementById('scale').value)||100)/100 }

// ===================== PROJECT BINDING / CONTROL =====================
function getEpmsProjects(){
  try{
    if(window.parent && window.parent!==window && window.parent.STATE && Array.isArray(window.parent.STATE.projects)) return window.parent.STATE.projects;
  }catch(e){}
  return [];
}
function getLinkedProjectName(id){
  if(!id) return 'غير محدد';
  const p=getEpmsProjects().find(x=>String(x.id)===String(id));
  return p ? (p.name||p.projectName||p.code||id) : id;
}
function renderEpmsProjectSelect(){
  const el=document.getElementById('epmsProjectSelect'); const c=getCur(); if(!el||!c)return;
  const map=(JSON.parse(localStorage.getItem('epms_schedule_project_links')||'{}')||{});
  if(!c.linkedProjectId && map[currentId]) c.linkedProjectId=map[currentId];
  const ps=getEpmsProjects();
  el.innerHTML='<option value="">— اختر مشروع EPMS —</option>'+ps.map(p=>`<option value="${String(p.id).replace(/"/g,'&quot;')}" ${String(c.linkedProjectId||'')===String(p.id)?'selected':''}>${String(p.name||p.projectName||p.code||p.id).replace(/</g,'&lt;')}</option>`).join('');
  if(c.linkedProjectId && !ps.some(p=>String(p.id)===String(c.linkedProjectId))){
    el.innerHTML += `<option value="${String(c.linkedProjectId).replace(/"/g,'&quot;')}" selected>${getLinkedProjectName(c.linkedProjectId)}</option>`;
  }
}
function setLinkedProject(projectId){
  const c=getCur(); if(!c)return;
  if(String(c.linkedProjectId||'')!==String(projectId||'')) beginScheduleEdit('تغيير المشروع المرتبط');
  c.linkedProjectId=projectId||'';
  const map=JSON.parse(localStorage.getItem('epms_schedule_project_links')||'{}')||{};
  if(projectId) map[currentId]=projectId; else delete map[currentId];
  localStorage.setItem('epms_schedule_project_links',JSON.stringify(map));
  resetScheduleApproval('تغيير المشروع المرتبط');
  saveAll(); updateHeader();
  try{ if(window.parent && window.parent!==window && typeof window.parent.render==='function') window.parent.render(); }catch(e){}
  toast(projectId?'تم ربط البرنامج بالمشروع المحدد':'تم إلغاء ربط المشروع');
}
function renderApprovalBadge(){
  const c=getCur(), b=document.getElementById('scheduleApprovalBadge'), rb=document.getElementById('scheduleRevisionBadge'); if(!c)return;
  const st=c.approvalStatus||'مسودة';
  if(b){
    b.textContent='الحالة: '+st+(c.approvedByName?' — '+c.approvedByName:'');
    b.classList.toggle('on',st==='معتمد');
    b.style.borderColor=st==='معتمد'?'var(--ok)':st==='مرفوض'?'var(--crit)':st==='قيد الاعتماد'?'#d99b00':'var(--bd)';
  }
  if(rb) rb.textContent='الإصدار: Rev '+(Number(c.revision)||0);
}
function cloneScheduleData(c){
  return JSON.parse(JSON.stringify({name:c.name,type:c.type,start:c.start,scale:c.scale,acts:c.acts,baseline:c.baseline,linkedProjectId:c.linkedProjectId}));
}
function approvalLevel(){
  try{
    const p=window.parent;
    if(!p||p===window) return 0;
    const u=p.currentUser;
    if(u&&u.isAdmin) return 4;
    const checks=[
      [4,'ownerApprovalRequests'],
      [3,'adminMgrApprovalRequests'],
      [2,'projectMgrApprovalRequests'],
      [1,'planning']
    ];
    for(const [level,key] of checks){
      try{ if(typeof p.canApprovePerm==='function' && p.canApprovePerm(key)) return level; }catch(e){}
      try{ if(typeof p.canEdit==='function' && p.canEdit(key) && level===1) return 1; }catch(e){}
    }
  }catch(e){}
  return 0;
}
function stageLabel(stage){
  return ({0:'مسودة',1:'مقدم لمدير المشروع',2:'مقدم لمدير المشروعات',3:'مقدم لصاحب الشركة',4:'معتمد نهائياً'}[Number(stage)]||'مسودة');
}
function beginScheduleEdit(reason){
  const c=getCur(); if(!c)return true;
  if(c.approvalStatus==='معتمد'){
    const oldRev=Number(c.revision)||0;
    if(!Array.isArray(c.revisionHistory)) c.revisionHistory=[];
    c.revisionHistory.push({
      revision:oldRev,
      type:'نسخة معتمدة محفوظة قبل التعديل',
      status:'معتمد',
      snapshot:cloneScheduleData(c),
      approvedBy:c.approvedBy||'', approvedByName:c.approvedByName||'', approvedAt:c.approvedAt||'',
      at:new Date().toISOString(), reason:reason||'بدء تعديل'
    });
    if(c.revisionHistory.length>30)c.revisionHistory=c.revisionHistory.slice(-30);
    c.revision=oldRev+1;
    c.approvalStatus='مسودة';
    c.approvalStage=0;
    c.approvedBy=''; c.approvedByName=''; c.approvedAt=''; c.approvalDecision=''; c.approvalNotes='';
    c.approvalRequestNo=''; c.submittedAt='';
    toast('تم فتح إصدار جديد Rev '+c.revision+' للتعديل — النسخة المعتمدة السابقة محفوظة');
    return true;
  }
  return true;
}
function resetScheduleApproval(reason){
  const c=getCur(); if(!c)return;
  if(c.approvalStatus==='معتمد') beginScheduleEdit(reason||'تعديل بعد الاعتماد');
  else {
    if(c.approvalStatus==='مرفوض') c.previousApprovalStatus='مرفوض';
    c.approvalStatus='مسودة'; c.approvalStage=0; c.approvedBy=''; c.approvedByName=''; c.approvedAt=''; c.approvalDecision=''; c.approvalNotes=reason||'';
  }
  renderApprovalBadge();
}
function addApprovalHistory(action,stage,note){
  const c=getCur(); if(!c)return;
  if(!Array.isArray(c.approvalHistory)) c.approvalHistory=[];
  let name='المستخدم الحالي', username='';
  try{const u=window.parent&&window.parent.currentUser; if(u){name=u.name||u.username||name; username=u.username||'';}}catch(e){}
  c.approvalHistory.push({action,stage:Number(stage)||0,by:name,username,at:new Date().toISOString(),note:note||'',revision:Number(c.revision)||0});
  if(c.approvalHistory.length>100)c.approvalHistory=c.approvalHistory.slice(-100);
}
function showApprovalHistory(){
  const c=getCur(); if(!c)return;
  const hist=Array.isArray(c.approvalHistory)?c.approvalHistory:[];
  const revs=Array.isArray(c.revisionHistory)?c.revisionHistory:[];
  const rows=hist.slice().reverse().map(x=>{
    let d=x.at||''; try{d=new Date(x.at).toLocaleString('ar-EG');}catch(e){}
    return `<div style="padding:8px;border-bottom:1px solid var(--bd)"><b>${x.action||'عملية'}</b> — Rev ${x.revision||0} — ${stageLabel(x.stage)}<br><span style="color:var(--mut)">${x.by||'—'} | ${d}</span>${x.note?'<br>'+String(x.note).replace(/</g,'&lt;'):''}</div>`;
  }).join('') || '<div class="note">لا يوجد سجل اعتماد بعد.</div>';
  const rv=revs.slice().reverse().map(x=>`<div style="padding:8px;border-bottom:1px solid var(--bd)"><b>Rev ${x.revision}</b> — ${x.type}<br><span style="color:var(--mut)">المعتمد: ${x.approvedByName||x.approvedBy||'—'} | ${x.approvedAt||'—'}</span><br>${x.reason||''}</div>`).join('');
  document.getElementById('approvalHistoryBody').innerHTML=`<div class="note"><b>المشروع:</b> ${String(c.name).replace(/</g,'&lt;')} — <b>الإصدار الحالي:</b> Rev ${Number(c.revision)||0}</div><h4>سجل القرارات</h4>${rows}<h4 style="margin-top:14px">الإصدارات المعتمدة السابقة</h4>${rv||'<div class="note">لا توجد إصدارات محفوظة.</div>'}`;
  document.getElementById('approvalHistoryModal').classList.add('show');
}
function hideApprovalHistory(){document.getElementById('approvalHistoryModal').classList.remove('show')}
function showApprovalWorkflow(){
  const c=getCur(); if(!c)return;
  const stage=Number(c.approvalStage)||0;
  const steps=[['1','المخطط / التخطيط','تجهيز البرنامج وإرساله'],['2','مدير المشروع','المراجعة والاعتماد الأول'],['3','مدير المشروعات','المراجعة والاعتماد الإداري'],['4','صاحب الشركة / السلطة النهائية','الاعتماد النهائي']];
  document.getElementById('approvalWorkflowBody').innerHTML=`<div class="note"><b>الحالة الحالية:</b> ${c.approvalStatus||'مسودة'} — <b>Rev ${Number(c.revision)||0}</b></div>`+steps.map((s,i)=>{const n=i+1; const cls=Number(stage)>=n?'ok':''; return `<div style="display:flex;gap:10px;align-items:center;padding:12px;border-bottom:1px solid var(--bd)"><span class="chip ${cls}">${s[0]}</span><div><b>${s[1]}</b><div style="color:var(--mut);font-size:.85rem">${s[2]}</div></div>${Number(stage)>=n?'<span style="margin-inline-start:auto">✓</span>':''}</div>`}).join('');
  document.getElementById('approvalWorkflowModal').classList.add('show');
}
function hideApprovalWorkflow(){document.getElementById('approvalWorkflowModal').classList.remove('show')}

function renderProjBar(){
  const el=document.getElementById('projBar'); if(!el)return;
  const ids=Object.keys(projects);
  el.innerHTML=ids.map(id=>{const p=projects[id]||{}; const on=id===currentId; return `<button class="chip ${on?'on':''}" onclick="switchProject('${id}')">${p.name||'مشروع'}${p.approvalStatus==='معتمد'?' ✓':''}</button>`}).join('') || '<span class="note">لا توجد مشاريع محفوظة</span>';
}
function renderStats(){
  const c=getCur(), el=document.getElementById('stats'); if(!c||!el)return;
  const a=Array.isArray(c.acts)?c.acts:[], done=a.filter(x=>Number(x.pct)>=100).length, avg=a.length?(a.reduce((s,x)=>s+(Number(x.pct)||0),0)/a.length).toFixed(1):0;
  el.innerHTML=`<div class="stat"><div class="v">${a.length}</div><div class="l">الأنشطة</div></div><div class="stat"><div class="v">${done}</div><div class="l">مكتمل</div></div><div class="stat"><div class="v">${avg}%</div><div class="l">متوسط الإنجاز</div></div><div class="stat"><div class="v">${a.filter(x=>x.type==='milestone').length}</div><div class="l">المعالم</div></div>`;
}
function activityDates(a,stack){
  const c=getCur(), start=getStart(); const off=Number(a.off!==undefined?a.off:a.bo)||0; const dur=Math.max(1,Number(a.dur!==undefined?a.dur:a.bd)||1);
  if(c && c._cpm && c._cpm[String(a.id)]){const x=c._cpm[String(a.id)];return {s:addDays(start,x.es),e:addDays(start,x.ef-1),dur,es:x.es,ef:x.ef,ls:x.ls,lf:x.lf,totalFloat:x.tf,freeFloat:x.ff,critical:x.critical};}
  if(c && c.scheduleMode==='dependencies' && a.pred){
    stack=stack||[]; if(stack.includes(String(a.id))) return {s:addDays(start,off),e:addDays(addDays(start,off),dur-1),dur};
    const next=stack.concat(String(a.id)); let maxEnd=null;
    String(a.pred).split(',').map(x=>x.trim()).filter(Boolean).forEach(pid=>{const p=(c.acts||[]).find(x=>String(x.id)===pid); if(p){const pd=activityDates(p,next);if(!maxEnd||pd.e>maxEnd)maxEnd=pd.e;}});
    const s=maxEnd?addDays(maxEnd,1):addDays(start,off); const e=addDays(s,dur-1); return {s,e,dur};
  }
  const s=addDays(start,off); const e=addDays(s,dur-1); return {s,e,dur};
}
function renderActs(){
  const c=getCur(), el=document.getElementById('actBody'); if(!c||!el)return;
  let arr=Array.isArray(c.acts)?c.acts:[];
  arr=arr.filter(a=>filter==='all'||(filter==='crit'&&a.type==='critical')||(filter==='ms'&&a.type==='milestone')||(filter==='phase'&&a.type==='phase')||(filter==='open'&&Number(a.pct)<100)||(filter==='done'&&Number(a.pct)>=100));
  el.innerHTML=arr.map((a,i)=>{const d=activityDates(a); const rem=Math.max(0,Math.ceil((d.e-new Date())/86400000)); const pct=Math.max(0,Math.min(100,Number(a.pct)||0)); const base=a.baselineEnd||''; return `<tr class="${a.type==='phase'?'lv1':''}"><td>${i+1}</td><td>${a.id||''}</td><td>${a.name||''}</td><td>${d.dur}</td><td>${rem}</td><td>${pct}</td><td>${fmt(d.s)}</td><td>${fmt(d.e)}</td><td>${base||'—'}</td><td>${a.pred||'—'}</td><td>${typeLabel(a.type)}</td><td><input class="cell pct" type="number" min="0" max="100" value="${pct}" onchange="editPct('${a.id}',this.value)"></td><td><button class="btn btn-o" style="padding:2px 4px" title="تعديل" onclick="editAct('${a.id}')">✎</button><button class="btn btn-d" style="padding:2px 5px" title="حذف" onclick="deleteAct('${a.id}')">×</button></td></tr>`}).join('')||'<tr><td colspan="13" class="empty-row">لا توجد أنشطة</td></tr>';
}
function renderGantt(){
  const c=getCur(), el=document.getElementById('ganttTbl'); if(!c||!el)return;
  const arr=(c.acts||[]).filter(a=>ganttMode==='all'||(ganttMode==='phase'&&a.lv===1)||(ganttMode==='crit'&&(a.type==='critical'||a.type==='milestone')));
  if(!arr.length){el.innerHTML='<tr><td>لا توجد أنشطة</td></tr>';return;}
  const dates=arr.map(a=>activityDates(a)); const min=new Date(Math.min(...dates.map(d=>d.s.getTime()))), max=new Date(Math.max(...dates.map(d=>d.e.getTime()))); const days=Math.max(1,Math.ceil((max-min)/86400000)+1), step=days>120?7:days>60?3:1, cols=Math.ceil(days/step);
  const heads=Array.from({length:cols},(_,i)=>`<th style="min-width:20px">${fmt(addDays(min,i*step))}</th>`).join('');
  const rows=arr.map((a,i)=>{const d=activityDates(a),s=Math.max(0,Math.floor((d.s-min)/86400000/step)),e=Math.min(cols-1,Math.floor((d.e-min)/86400000/step));let cells='';for(let k=0;k<cols;k++){cells+=`<td style="min-width:20px;padding:1px;background:${k>=s&&k<=e?(a.type==='critical'?'#d9534f':a.lv===1?'#1565c0':a.type==='milestone'?'#2e7d32':'#4b9bd5'):'#fff'}" title="${escapeHtml(a.name)} | ${fmt(d.s)} - ${fmt(d.e)} | السابق: ${escapeHtml(a.pred||'—')}"></td>`}return `<tr><td style="min-width:220px;text-align:right">${escapeHtml(a.id)} — ${escapeHtml(a.name)}</td><td>${fmt(d.s)}</td><td>${fmt(d.e)}</td><td>${d.dur}</td><td>${Number(a.pct)||0}%</td><td>${escapeHtml(a.pred||'—')}</td>${cells}</tr>`}).join('');
  el.innerHTML=`<thead><tr><th>النشاط</th><th>البداية</th><th>النهاية</th><th>المدة</th><th>الإنجاز</th><th>السوابق</th>${heads}</tr></thead><tbody>${rows}</tbody>`;
}
function renderMS(){const c=getCur(),el=document.getElementById('msBody');if(!c||!el)return;el.innerHTML=(c.acts||[]).filter(a=>a.type==='milestone').map((a,i)=>{const d=activityDates(a);return `<tr><td>${i+1}</td><td>${a.name}</td><td>${fmt(d.e)}</td><td>${a.baselineEnd||'—'}</td><td>${a.baselineEnd?Math.round((new Date(fmt(d.e))-new Date(a.baselineEnd))/86400000)+' يوم':'—'}</td></tr>`}).join('')||'<tr><td colspan="5">لا توجد معالم</td></tr>'}
function renderLook(){const c=getCur(),el=document.getElementById('lookBody');if(!c||!el)return;const now=getStart();const end=addDays(now,14);el.innerHTML=(c.acts||[]).filter(a=>{const d=activityDates(a);return d.s<=end&&d.e>=now}).map(a=>{const d=activityDates(a);return `<tr><td>${a.id}</td><td>${a.name}</td><td>${fmt(d.s)}</td><td>${fmt(d.e)}</td><td>${a.pct||0}%</td><td>${Math.max(0,Number(a.dur||a.bd||1))}</td></tr>`}).join('')||'<tr><td colspan="6">لا توجد أنشطة في نافذة الـ14 يوماً</td></tr>'}
function renderBase(){const c=getCur(),el=document.getElementById('baseBody');if(!c||!el)return;el.innerHTML=(c.acts||[]).map(a=>{const d=activityDates(a);return `<tr><td>${a.id}</td><td>${a.name}</td><td>${fmt(d.e)}</td><td>${a.baselineEnd||'—'}</td><td>${a.baselineEnd?Math.round((new Date(fmt(d.e))-new Date(a.baselineEnd))/86400000)+' يوم':'—'}</td><td>${a.pct||0}%</td></tr>`}).join('')||'<tr><td colspan="6">لا توجد بيانات</td></tr>'}
function renderPortfolio(){const el=document.getElementById('portBody');if(!el)return;el.innerHTML=Object.keys(projects).map(id=>{const p=projects[id],a=p.acts||[],avg=a.length?(a.reduce((s,x)=>s+(Number(x.pct)||0),0)/a.length).toFixed(1):0;return `<div class="box" style="cursor:pointer" onclick="switchProject('${id}')"><b>${p.name}</b> — ${p.type||'عام'}<br><span style="color:var(--mut)">${a.length} نشاط | ${avg}% | ${p.approvalStatus||'مسودة'} | Rev ${Number(p.revision)||0}</span></div>`}).join('')||'<div class="note">لا توجد مشاريع</div>'}
function parsePredTokens(a){return String(a.pred||'').split(',').map(s=>s.trim()).filter(Boolean).map(raw=>{const m=raw.match(/^([^:]+)(?::(FS|SS|FF|SF))?([+-]\d+(?:\.\d+)?)?$/i);if(!m)return {id:raw,rel:'FS',lag:0};return {id:m[1].trim(),rel:(m[2]||'FS').toUpperCase(),lag:Number((m[3]||''))||0};});}
function runCPM(showAlert){const c=getCur();if(!c)return;const acts=(c.acts||[]),map={};acts.forEach(a=>map[String(a.id)]={a,d:Math.max(1,Number(a.dur!==undefined?a.dur:a.bd)||1),es:Math.max(0,Number(a.bo!==undefined?a.bo:a.off)||0),ef:0,ls:0,lf:0,tf:0,ff:0,critical:false});
 const deps={};acts.forEach(a=>deps[String(a.id)]=parsePredTokens(a).filter(p=>map[p.id]));let cyclic=false;const state={},order=[];function visit(id){if(state[id]===1){cyclic=true;return}if(state[id]===2)return;state[id]=1;(deps[id]||[]).forEach(p=>visit(p.id));state[id]=2;order.push(id)}Object.keys(map).forEach(visit);
 if(cyclic){if(showAlert)alert('يوجد تعارض دائري في العلاقات السابقة. راجع أكواد الأنشطة وعلاقاتها.');return}
 // Forward pass. Relationship lag is in calendar days; ES/EF are zero-based start and exclusive finish.
 order.forEach(id=>{const x=map[id];let es=x.es;(deps[id]||[]).forEach(p=>{const q=map[p.id],lag=p.lag||0;let candidate=0;switch(p.rel){case'SS':candidate=q.es+lag;break;case'FF':candidate=q.ef+lag-x.d;break;case'SF':candidate=q.ef+lag-x.d;break;default:candidate=q.ef+lag;}es=Math.max(es,candidate)});x.es=Math.max(0,es);x.ef=x.es+x.d});
 const projectFinish=Math.max(0,...Object.values(map).map(x=>x.ef));Object.keys(map).forEach(id=>{map[id].lf=projectFinish;map[id].ls=projectFinish-map[id].d});
 order.slice().reverse().forEach(id=>{const x=map[id];(Object.keys(deps)).forEach(sid=>{(deps[sid]||[]).filter(p=>p.id===id).forEach(p=>{const succ=map[sid],lag=p.lag||0;let cand;switch(p.rel){case'SS':cand=succ.ls-lag; x.ls=Math.min(x.ls,cand);x.lf=x.ls+x.d;break;case'FF':cand=succ.lf-lag; x.lf=Math.min(x.lf,cand);x.ls=x.lf-x.d;break;case'SF':cand=succ.lf-lag; x.ls=Math.min(x.ls,cand);x.lf=x.ls+x.d;break;default:cand=succ.ls-lag;x.lf=Math.min(x.lf,cand);x.ls=x.lf-x.d;}})});});
 Object.keys(map).forEach(id=>{const x=map[id];x.tf=Math.max(0,x.ls-x.es);const succs=[];Object.keys(deps).forEach(sid=>(deps[sid]||[]).forEach(p=>{if(p.id===id)succs.push({id:sid,p})}));x.ff=succs.length?Math.max(0,Math.min(...succs.map(s=>{const y=map[s.id],p=s.p;return (p.rel==='SS'?y.es-x.es:(p.rel==='FF'?y.ef-x.ef:(p.rel==='SF'?y.ef-x.es:y.es-x.ef)))-(p.lag||0)}))):Math.max(0,projectFinish-x.ef);x.critical=x.tf===0;x.a.type=(x.critical&&x.a.type!=='milestone'&&x.a.type!=='phase')?'critical':(x.a.type==='critical'?'normal':x.a.type)});
 c._cpm=map;c.scheduleMode='dependencies';saveAll();renderCPMReport(map,projectFinish);renderActs();renderGantt();renderMS();renderLook();renderBase();renderStats();if(showAlert)toast('تم حساب CPM: مدة الشبكة '+projectFinish+' يوم، والأنشطة الحرجة '+Object.values(map).filter(x=>x.critical).length);return map;}
function renderCPMReport(map,finish){const summary=document.getElementById('cpmSummary'),body=document.getElementById('cpmBody');if(!summary||!body)return;const vals=Object.values(map||{});const critical=vals.filter(x=>x.critical).length;summary.innerHTML=[['مدة المشروع المحسوبة',finish+' يوم'],['إجمالي الأنشطة',vals.length],['أنشطة حرجة',critical],['أنشطة غير حرجة',vals.length-critical]].map(x=>'<div class="box" style="padding:10px;background:var(--card);border:1px solid var(--bd);border-radius:8px"><small>'+x[0]+'</small><div style="font-size:1.2rem;font-weight:800;color:var(--p)">'+x[1]+'</div></div>').join('');body.innerHTML=vals.map(x=>'<tr style="background:'+(x.critical?'#ffebee':'transparent')+'"><td>'+escapeHtml(x.a.id)+'</td><td>'+escapeHtml(x.a.name)+'</td><td>'+x.es+'</td><td>'+x.ef+'</td><td>'+x.ls+'</td><td>'+x.lf+'</td><td>'+x.tf+'</td><td>'+x.ff+'</td><td>'+(x.critical?'نعم':'لا')+'</td></tr>').join('');drawSCurve(finish,vals)}
function drawSCurve(finish,vals){const cv=document.getElementById('sCurveCanvas');if(!cv)return;const w=Math.max(320,cv.clientWidth||800),h=220,dpr=window.devicePixelRatio||1;cv.width=w*dpr;cv.height=h*dpr;const ctx=cv.getContext('2d');ctx.scale(dpr,dpr);ctx.clearRect(0,0,w,h);const pad={l:42,r:16,t:16,b:30},pw=w-pad.l-pad.r,ph=h-pad.t-pad.b;ctx.strokeStyle='#9eabb8';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(pad.l,pad.t);ctx.lineTo(pad.l,pad.t+ph);ctx.lineTo(pad.l+pw,pad.t+ph);ctx.stroke();for(let v=0;v<=100;v+=20){const y=pad.t+ph*(1-v/100);ctx.fillStyle='#607080';ctx.font='10px sans-serif';ctx.fillText(v+'%',4,y+3);ctx.strokeStyle='#e5eaf0';ctx.beginPath();ctx.moveTo(pad.l,y);ctx.lineTo(pad.l+pw,y);ctx.stroke()}const points=[];for(let day=0;day<=finish;day++){const planned=vals.reduce((s,x)=>s+(day>=x.ef?x.d:day>x.es?day-x.es:0),0);const total=vals.reduce((s,x)=>s+x.d,0)||1;points.push([pad.l+pw*day/Math.max(1,finish),pad.t+ph*(1-Math.min(100,planned/total*100)/100)])}ctx.strokeStyle='#1565c0';ctx.lineWidth=2;ctx.beginPath();points.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.stroke();ctx.fillStyle='#607080';ctx.fillText('0',pad.l-4,h-8);ctx.fillText(finish+' يوم',pad.l+pw-42,h-8);ctx.fillStyle='#1565c0';ctx.fillText('الإنجاز المخطط التراكمي',pad.l+8,pad.t+12)}
function exportCPMReport(){const c=getCur();if(!c)return;const map=c._cpm||runCPM(false);if(!map)return;const rows=[['Code','Activity','Duration','ES','EF','LS','LF','Total Float','Free Float','Critical','Predecessors'],...Object.values(map).map(x=>[x.a.id,x.a.name,x.d,x.es,x.ef,x.ls,x.lf,x.tf,x.ff,x.critical?'Yes':'No',x.a.pred||''])];const csv=rows.map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\n');const blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=(c.name||'schedule')+'_CPM.csv';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function ensureResourceFields(a){if(!a)return;a.qty=Number(a.qty)||0;a.unit=a.unit||'م³';a.productivity=Number(a.productivity)||0;a.labor=Number(a.labor)||0;a.equipment=a.equipment||'';a.procurement=a.procurement||'غير مطلوب';a.zone=a.zone||'';a.actualQty=Number(a.actualQty)||0;a.baselineStart=a.baselineStart||'';a.baselineEnd=a.baselineEnd||'';a.baselineDur=Number(a.baselineDur)||0;}
function renderResources(){const c=getCur(),body=document.getElementById('resourceBody'),sum=document.getElementById('resourceSummary');if(!c||!body||!sum)return;const acts=c.acts||[];acts.forEach(ensureResourceFields);let qty=0,actual=0,labor=0,eq=0,late=0;const rows=acts.map(a=>{const d=activityDates(a),base=a.resourceBaseline||c.resourceBaseline&&c.resourceBaseline[a.id]||{};const endNow=fmt(d.e),baseEnd=base.end||a.baselineEnd||'';const delta=baseEnd?Math.round((new Date(endNow)-new Date(baseEnd))/86400000):null;qty+=a.qty;actual+=a.actualQty;labor+=a.labor;eq+=a.equipment?1:0;if(delta>0)late++;const remaining=Math.max(0,a.qty-a.actualQty);const calcDur=a.qty>0&&a.productivity>0?Math.ceil(a.qty/a.productivity):Number(a.dur||a.bd||1);return `<tr><td>${escapeHtml(a.id)}</td><td>${escapeHtml(a.name||'')}</td><td>${escapeHtml(a.zone||'—')}</td><td>${a.qty}</td><td>${escapeHtml(a.unit)}</td><td>${a.productivity||'—'}</td><td>${calcDur}</td><td>${a.labor}</td><td>${escapeHtml(a.equipment||'—')}</td><td>${escapeHtml(a.procurement)}</td><td>${baseEnd||'—'}</td><td>${endNow}</td><td style="font-weight:700;color:${delta>0?'#c62828':delta<0?'#2e7d32':'inherit'}">${delta===null?'—':(delta>0?'+':'')+delta}</td><td>${remaining}</td><td><button class="btn btn-o" style="padding:3px 6px" onclick="editResourceById('${String(a.id).replace(/'/g,'\\\'')}')">تعديل</button></td></tr>`}).join('');body.innerHTML=rows||'<tr><td colspan="15">لا توجد أنشطة</td></tr>';sum.innerHTML=[['إجمالي الكميات المخططة',qty.toLocaleString()],['الكميات المنفذة',actual.toLocaleString()],['الكميات المتبقية',Math.max(0,qty-actual).toLocaleString()],['إجمالي العمالة اليومية',labor.toLocaleString()],['أنشطة بها معدات',eq],['أنشطة متأخرة عن خط الأساس',late]].map(x=>'<div class="box" style="padding:10px;background:var(--card);border:1px solid var(--bd);border-radius:8px"><small>'+x[0]+'</small><div style="font-size:1.15rem;font-weight:800;color:var(--p)">'+x[1]+'</div></div>').join('');}
function editResourceActivity(){const c=getCur();if(!c)return;const id=prompt('اكتب كود النشاط المراد إدخال كمياته وموارده:\n'+(c.acts||[]).map(a=>a.id+' — '+a.name).join('\n'));if(id===null)return;editResourceById(id.trim());}
function editResourceById(id){const c=getCur(),a=(c.acts||[]).find(x=>String(x.id)===String(id));if(!a)return;ensureResourceFields(a);const ask=(label,old)=>prompt(label,old==null?'':String(old));let v=ask('الدور / المبنى / المنطقة / القطاع:',a.zone);if(v===null)return;a.zone=v.trim();v=ask('الكمية المخططة:',a.qty);if(v===null)return;a.qty=Math.max(0,Number(v)||0);v=ask('وحدة القياس (م³، م²، م ط، طن، نقطة، جهاز، عدد...):',a.unit);if(v===null)return;a.unit=v.trim()||'عدد';v=ask('الإنتاجية اليومية للفريق:',a.productivity);if(v===null)return;a.productivity=Math.max(0,Number(v)||0);v=ask('عدد العمال/الفريق في اليوم:',a.labor);if(v===null)return;a.labor=Math.max(0,Number(v)||0);v=ask('المعدات المطلوبة:',a.equipment);if(v===null)return;a.equipment=v.trim();v=ask('حالة التوريد (غير مطلوب/لم يطلب/طلب شراء/قيد التوريد/وصل جزئياً/تم التوريد):',a.procurement);if(v===null)return;a.procurement=v.trim()||'غير مطلوب';v=ask('الكمية المنفذة فعلياً:',a.actualQty);if(v===null)return;a.actualQty=Math.max(0,Number(v)||0);if(a.qty>0&&a.productivity>0){a.resourceDuration=Math.ceil(a.qty/a.productivity);if(!a.pct)a.pct=Math.min(100,Math.round(a.actualQty/a.qty*100));}c._cpm=null;saveAll();fullRecalc();toast('تم حفظ بيانات الكميات والموارد');}
function captureResourceBaseline(){const c=getCur();if(!c)return;if(!confirm('سيتم حفظ تواريخ ومدة الأنشطة الحالية كخط أساس للمقارنة، واستبدال خط الأساس السابق. هل تريد المتابعة؟'))return;c.baseline=c.baseline||{};c.resourceBaseline={};(c.acts||[]).forEach(a=>{ensureResourceFields(a);const d=activityDates(a),rec={start:fmt(d.s),end:fmt(d.e),dur:d.dur,qty:a.qty,productivity:a.productivity};c.resourceBaseline[a.id]=rec;a.baselineStart=rec.start;a.baselineEnd=rec.end;a.baselineDur=rec.dur;c.baseline[a.id]={start:rec.start,end:rec.end,dur:rec.dur,pct:Number(a.pct)||0,qty:a.qty};});saveAll();fullRecalc();toast('تم حفظ خط الأساس للأنشطة والكميات');}
function exportResourceReport(){const c=getCur();if(!c)return;const rows=[['Code','Activity','Zone/Floor','Quantity','Unit','Productivity/Day','Calculated Duration','Labor/Day','Equipment','Procurement','Actual Quantity','Remaining Quantity','Baseline Start','Baseline Finish','Current Finish','Variance Days','Progress %'],...(c.acts||[]).map(a=>{ensureResourceFields(a);const d=activityDates(a),b=a.resourceBaseline||c.resourceBaseline&&c.resourceBaseline[a.id]||{},base=b.end||a.baselineEnd||'',cur=fmt(d.e),delta=base?Math.round((new Date(cur)-new Date(base))/86400000):'';return [a.id,a.name,a.zone,a.qty,a.unit,a.productivity,a.qty>0&&a.productivity>0?Math.ceil(a.qty/a.productivity):d.dur,a.labor,a.equipment,a.procurement,a.actualQty,Math.max(0,a.qty-a.actualQty),b.start||a.baselineStart||'',base,cur,delta,a.pct||0]})];const csv=rows.map(r=>r.map(v=>'"'+String(v??'').replace(/"/g,'""')+'"').join(',')).join('\n');const blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=(c.name||'schedule')+'_Resources_Baseline.csv';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function fullRecalc(){renderStats();renderActs();renderGantt();renderMS();renderLook();renderBase();renderResources();renderPortfolio();renderProjBar();renderApprovalBadge();if(getCur()&&getCur()._cpm)renderCPMReport(getCur()._cpm,Math.max(0,...Object.values(getCur()._cpm).map(x=>x.ef)));}
function setFilter(v){filter=v;document.querySelectorAll('[data-f]').forEach(x=>x.classList.toggle('on',x.dataset.f===v));renderActs()}
function setGanttMode(v){ganttMode=v;document.querySelectorAll('[data-g]').forEach(x=>x.classList.toggle('on',x.dataset.g===v));renderGantt()}
function switchProject(id){if(!projects[id])return;currentId=id;syncUIFromProject();fullRecalc();saveAll()}
function showAddModal(){document.getElementById('actModal').classList.add('show')}
function hideActModal(){document.getElementById('actModal').classList.remove('show')}
function showTplModal(){selectedTpl='compound';renderTemplateGrid();renderTplActivitySummary();document.getElementById('tplModal').classList.add('show')}
function hideTplModal(){document.getElementById('tplModal').classList.remove('show')}
function renderTemplateGrid(){const el=document.getElementById('tplGrid');if(!el)return;el.innerHTML=Object.keys(TPL).filter((k,i,a)=>a.indexOf(k)===i).map(k=>{const t=TPL[k];return `<button class="btn btn-o" style="text-align:right;min-height:72px" onclick="selectedTpl='${k}';document.querySelectorAll('#tplGrid button').forEach(b=>b.style.outline='');this.style.outline='2px solid var(--p)';renderTplActivitySummary()"><b>${t.icon||'📋'} ${t.name}</b><small style="display:block;color:var(--mut)">${t.desc||''} — ${(t.acts||[]).length} بند</small></button>`}).join('')}
function applyTemplateByKey(key){if(!TPL[key])return false;selectedTpl=key;return applyTemplate()}
function applyTemplate(){const c=getCur(),t=TPL[selectedTpl];if(!c||!t)return;beginScheduleEdit('تحميل قالب مشروع');c.name=t.name;c.type=t.type;c.scheduleMode='dependencies';c._cpm=null;c.acts=JSON.parse(JSON.stringify(t.acts||[]));c.approvalStatus='مسودة';c.approvalStage=0;c.approvalHistory=[];c.approvalNotes='';c.revision=(Number(c.revision)||0)+1;saveAll();syncUIFromProject();fullRecalc();hideTplModal();toast('تم تحميل قالب: '+t.name)}
function showNewProjModal(){document.getElementById('newProjModal').classList.add('show')}
function hideNewProjModal(){document.getElementById('newProjModal').classList.remove('show')}
function syncNewProjectTypeToTemplate(){
  const typeEl=document.getElementById('npType'), tplEl=document.getElementById('npTpl');
  if(!typeEl||!tplEl)return;
  const opt=typeEl.options[typeEl.selectedIndex];
  const key=opt&&opt.getAttribute('data-tpl');
  if(key && TPL[key]){ tplEl.value=key; }
}

function createProject(){const name=document.getElementById('npName').value.trim()||'مشروع جديد';const typeEl=document.getElementById('npType');const type=typeEl.value||'عام';const start=document.getElementById('npStart').value||new Date().toISOString().slice(0,10);const typeOpt=typeEl.options[typeEl.selectedIndex];const linkedTpl=typeOpt&&typeOpt.getAttribute('data-tpl');const key=linkedTpl||document.getElementById('npTpl').value||'empty';const t=TPL[key]||TPL.empty;const id=uid();projects[id]={name:name,type:type,start:start,scale:100,scheduleMode:t.scheduleMode||'offsets',acts:JSON.parse(JSON.stringify(t.acts||[])),baseline:{},linkedProjectId:'',approvalStatus:'مسودة',approvalStage:0,revision:0,approvalHistory:[],revisionHistory:[]};currentId=id;saveAll();syncUIFromProject();fullRecalc();hideNewProjModal();toast('تم إنشاء المشروع من القالب: '+t.name)}
function saveAll(){try{localStorage.setItem('pm_multi_projects',JSON.stringify(projects));localStorage.setItem('pm_multi_current',currentId||'')}catch(e){}}
function saveBaseline(){const c=getCur();if(!c)return; c.baseline={};(c.acts||[]).forEach(a=>{c.baseline[a.id]={start:fmt(activityDates(a).s),end:fmt(activityDates(a).e),dur:Number(a.dur||a.bd||1),pct:Number(a.pct)||0,qty:Number(a.qty)||0};a.baselineStart=fmt(activityDates(a).s);a.baselineEnd=fmt(activityDates(a).e)});resetScheduleApproval('تحديث Baseline');saveAll();fullRecalc();toast('تم حفظ Baseline')}
function saveActivity(){const c=getCur();if(!c)return;const id=document.getElementById('nId').value.trim()||String((c.acts||[]).length+1);if((c.acts||[]).some(a=>a.id===id)){alert('الكود موجود بالفعل');return}beginScheduleEdit('إضافة نشاط');c._cpm=null;c.acts.push({id,lv:Number(document.getElementById('nLv').value)||2,name:document.getElementById('nName').value.trim()||'نشاط جديد',bd:Number(document.getElementById('nDur').value)||1,bo:Number(document.getElementById('nOff').value)||0,pred:document.getElementById('nPred').value.trim(),type:document.getElementById('nType').value||'normal',pct:0,qty:0,unit:'عدد',productivity:0,labor:0,equipment:'',procurement:'غير مطلوب',zone:'',actualQty:0});resetScheduleApproval('إضافة نشاط');saveAll();hideActModal();fullRecalc()}
function editPct(id,v){const c=getCur(),a=(c.acts||[]).find(x=>x.id===id);if(!a)return;beginScheduleEdit('تعديل نسبة الإنجاز');c._cpm=null;a.pct=Math.max(0,Math.min(100,Number(v)||0));resetScheduleApproval('تعديل نسبة الإنجاز');saveAll();fullRecalc()}
function editDur(id,v){const c=getCur(),a=(c.acts||[]).find(x=>x.id===id);if(!a)return;beginScheduleEdit('تعديل المدة');c._cpm=null;a.bd=Math.max(1,Number(v)||1);resetScheduleApproval('تعديل المدة');saveAll();fullRecalc()}
function deleteAct(id){const c=getCur();if(!c)return;if(!confirm('حذف النشاط؟'))return;beginScheduleEdit('حذف نشاط');c._cpm=null;c.acts=(c.acts||[]).filter(a=>a.id!==id);resetScheduleApproval('حذف نشاط');saveAll();fullRecalc()}
function editAct(id){const c=getCur(),a=(c.acts||[]).find(x=>String(x.id)===String(id));if(!a)return;const name=prompt('تعديل اسم النشاط / البند:',a.name||'');if(name===null)return;const dur=prompt('المدة بالأيام:',Number(a.bd||a.dur||1));if(dur===null)return;const lv=prompt('المستوى: 1 رئيسي، 2 فرعي، 3 تفصيلي',a.lv||2);if(lv===null)return;const pred=prompt('الأنشطة السابقة (أكواد مفصولة بفواصل):',a.pred||'');if(pred===null)return;beginScheduleEdit('تعديل بند البرنامج الزمني');c._cpm=null;a.name=name.trim()||a.name;a.bd=Math.max(1,Number(dur)||1);a.dur=a.bd;a.lv=Math.max(1,Math.min(3,Number(lv)||2));a.pred=pred.trim();resetScheduleApproval('تعديل بند البرنامج الزمني');saveAll();fullRecalc();}
function manageCurrentActivities(){const c=getCur();if(!c)return;const q=prompt('إدارة البنود: اكتب كود النشاط لتعديله، أو اكتب ADD لإضافة نشاط، أو DEL ثم الكود للحذف.\nالأكواد الحالية: '+(c.acts||[]).map(a=>a.id+' '+a.name).join(' | '),'');if(q===null)return;const v=q.trim();if(v.toUpperCase()==='ADD'){showAddModal();return}if(v.toUpperCase().startsWith('DEL ')){deleteAct(v.slice(4).trim());return}if((c.acts||[]).some(a=>String(a.id)===v)){editAct(v);return}alert('لم يتم العثور على الكود. استخدم ADD للإضافة أو DEL <الكود> للحذف.')}
function exportCSV(){const c=getCur();if(!c)return;const rows=[['Code','Activity','Duration','Progress','Predecessor'],...(c.acts||[]).map(a=>[a.id,a.name,a.bd,a.pct,a.pred])];const csv=rows.map(r=>r.map(x=>'"'+String(x).replace(/"/g,'""')+'"').join(',')).join('\n');const blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=(c.name||'schedule')+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function rejectCurrentSchedule(){const c=getCur();if(!c)return;if(!c.linkedProjectId){alert('اختر مشروع EPMS أولاً.');return}const note=prompt('سبب الرفض / إعادة البرنامج للمخطط:');if(note===null)return;if(!note.trim()){alert('يجب كتابة سبب الرفض.');return}c.approvalStatus='مرفوض';c.approvalDecision='رفض';c.approvalNotes=note.trim();addApprovalHistory('رفض / إعادة للمخطط',Number(c.approvalStage)||1,note.trim());c.approvalStage=0;saveAll();fullRecalc();try{if(window.parent&&typeof window.parent.submitScheduleOfficialApproval==='function')window.parent.submitScheduleOfficialApproval(currentId)}catch(e){}alert('تم تسجيل الرفض وإعادة البرنامج للمخطط.')}
function requestOrApproveCurrentSchedule(){const c=getCur();if(!c)return;if(!c.linkedProjectId){alert('اختر مشروع EPMS أولاً.');return}const lvl=approvalLevel();const stage=Number(c.approvalStage)||0;if(stage>=4||c.approvalStatus==='معتمد'){alert('البرنامج معتمد نهائياً.');return}if(stage===0){c.approvalStatus='قيد الاعتماد';c.approvalStage=1;addApprovalHistory('إرسال للاعتماد',1,'إرسال البرنامج للمراجعة');c.submittedAt=new Date().toISOString();saveAll();fullRecalc();try{if(window.parent&&typeof window.parent.submitScheduleOfficialApproval==='function')window.parent.submitScheduleOfficialApproval(currentId)}catch(e){}toast('تم إرسال البرنامج للاعتماد');return}if(lvl<stage){alert('ليس لديك صلاحية اعتماد المرحلة الحالية: '+stageLabel(stage));return}const next=stage+1;if(next>=4){c.approvalStage=4;c.approvalStatus='معتمد';let name='المستخدم الحالي';try{const u=window.parent.currentUser;if(u)name=u.name||u.username||name}catch(e){}c.approvedByName=name;c.approvedAt=new Date().toISOString();c.approvalDecision='اعتماد نهائي';addApprovalHistory('اعتماد نهائي',4,'تم الاعتماد النهائي');}else{c.approvalStage=next;c.approvalStatus='قيد الاعتماد';addApprovalHistory('اعتماد وانتقال للمرحلة التالية',stage,'تم اعتماد المرحلة '+stage+' والانتقال إلى '+stageLabel(next));}saveAll();fullRecalc();try{if(window.parent&&typeof window.parent.submitScheduleOfficialApproval==='function')window.parent.submitScheduleOfficialApproval(currentId)}catch(e){}toast(c.approvalStatus==='معتمد'?'تم الاعتماد النهائي':'تم اعتماد المرحلة الحالية وإرسالها للمرحلة التالية')}

function editCurrentProject(){
  const c=getCur(); if(!c)return;
  beginScheduleEdit('تعديل بيانات المشروع يدوياً');
  const name=prompt('اسم المشروع / البرنامج:',c.name); if(name===null)return;
  const type=prompt('نوع المشروع:',c.type||'عام'); if(type===null)return;
  c.name=name.trim()||c.name; c.type=type.trim()||c.type;
  syncUIFromProject(); fullRecalc(); toast('تم تعديل بيانات المشروع');
}
function deleteCurrentProject(){
  const c=getCur(); if(!c)return;
  const ids=Object.keys(projects); if(ids.length<=1){alert('لا يمكن حذف آخر مشروع. أنشئ مشروعاً آخر أولاً.');return;}
  if(!confirm('سيتم حذف المشروع والبرنامج الزمني الخاص به نهائياً من هذه الأداة. هل تريد المتابعة؟\n\n'+c.name))return;
  const oldId=currentId; delete projects[oldId];
  const map=JSON.parse(localStorage.getItem('epms_schedule_project_links')||'{}')||{}; delete map[oldId]; localStorage.setItem('epms_schedule_project_links',JSON.stringify(map));
  currentId=Object.keys(projects)[0]; saveAll(); syncUIFromProject(); fullRecalc(); toast('تم حذف المشروع');
}
function printCurrentSchedule(){
  const c=getCur(); if(!c)return;
  const old=document.title; document.title='البرنامج الزمني — '+c.name;
  window.print(); setTimeout(()=>document.title=old,500);
}
function canApproveFromParent(){
  try{
    const p=window.parent;
    if(p&&p!==window){
      if(p.currentUser && p.currentUser.isAdmin) return true;
      if(typeof p.canApprovePerm==='function' && p.canApprovePerm('planning')) return true;
      if(typeof p.canEdit==='function' && p.canEdit('planning') && p.currentUser && p.currentUser.isAdmin) return true;
    }
  }catch(e){}
  return false;
}
function printApprovalCover(){
  const c=getCur(); if(!c)return;
  if(!c.linkedProjectId){alert('يجب اختيار مشروع EPMS أولاً.');return;}
  const acts=Array.isArray(c.acts)?c.acts:[]; const avg=acts.length?(acts.reduce((s,a)=>s+(Number(a.pct)||0),0)/acts.length).toFixed(1):'0';
  const ms=acts.filter(a=>a.type==='milestone').length;
  const now=new Date().toLocaleString('ar-EG');
  const status=c.approvalStatus||'مسودة';
  const stages=[['المخطط / التخطيط',Number(c.approvalStage)>=1],['مدير المشروع',Number(c.approvalStage)>=2],['مدير المشروعات',Number(c.approvalStage)>=3],['صاحب الشركة / السلطة النهائية',Number(c.approvalStage)>=4]];
  const rows=stages.map((x,i)=>`<tr><td>${i+1}</td><td>${x[0]}</td><td>${x[1]?'تم':'لم يتم'}</td><td>${x[1]&&i===3?(c.approvedByName||'—'):''}</td></tr>`).join('');
  const w=window.open('','_blank'); if(!w){alert('اسمح بالنوافذ المنبثقة للطباعة.');return;}
  w.document.write(`<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><title>غلاف اعتماد — ${String(c.name).replace(/</g,'')}</title><style>body{font-family:Arial,Tahoma,sans-serif;margin:40px;color:#172b4d}h1{text-align:center;margin-bottom:8px}.sub{text-align:center;color:#667085;margin-bottom:28px}.box{border:1px solid #ccd6e2;border-radius:10px;padding:18px;margin:14px 0}table{width:100%;border-collapse:collapse;margin-top:12px}th,td{border:1px solid #ccd6e2;padding:10px;text-align:right}th{background:#eef4f9}.sign{height:90px;vertical-align:bottom}.ok{font-weight:bold}.foot{margin-top:30px;color:#667085;font-size:12px}@media print{body{margin:20px}}</style></head><body><h1>غلاف اعتماد البرنامج الزمني</h1><div class="sub">نظام إدارة مشاريع شركات المقاولات — البرنامج الزمني المتقدم</div><div class="box"><b>المشروع:</b> ${String(getLinkedProjectName(c.linkedProjectId)).replace(/</g,'&lt;')}<br><b>اسم البرنامج:</b> ${String(c.name).replace(/</g,'&lt;')}<br><b>نوع المشروع:</b> ${String(c.type||'—').replace(/</g,'&lt;')}<br><b>الإصدار:</b> Rev ${Number(c.revision)||0}<br><b>الحالة:</b> ${status}<br><b>تاريخ الطباعة:</b> ${now}</div><div class="box"><b>ملخص البرنامج</b><table><tr><th>عدد الأنشطة</th><th>المعالم</th><th>متوسط الإنجاز</th><th>البداية</th><th>المعتمد النهائي</th></tr><tr><td>${acts.length}</td><td>${ms}</td><td>${avg}%</td><td>${c.start||'—'}</td><td>${c.approvedByName||'—'}</td></tr></table></div><div class="box"><b>دورة الاعتماد</b><table><tr><th>المرحلة</th><th>المسؤول</th><th>الحالة</th><th>المعتمد</th></tr>${rows}</table></div><div class="box sign"><b>ملاحظات الاعتماد:</b><br>${String(c.approvalNotes||'—').replace(/</g,'&lt;')}</div><div class="foot">هذه الصفحة غلاف اعتماد للإصدار المحدد من البرنامج الزمني. النسخة المعتمدة النهائية هي الإصدار الذي يحمل حالة «معتمد».</div><script>window.onload=()=>setTimeout(()=>window.print(),300)<\/script></body></html>`); w.document.close();}


function initScheduleApp(){
  try{const raw=localStorage.getItem('pm_multi_projects');projects=raw?JSON.parse(raw):{}}catch(e){projects={}}
  if(!projects||typeof projects!=='object')projects={};
  const linkMap=(()=>{try{return JSON.parse(localStorage.getItem('epms_schedule_project_links')||'{}')||{}}catch(e){return {}}})();
  Object.keys(projects).forEach(id=>{const p=projects[id]||{};p.name=p.name||'مشروع';p.type=p.type||'عام';p.start=p.start||new Date().toISOString().slice(0,10);p.scale=p.scale||100;p.acts=Array.isArray(p.acts)?p.acts:[];p.revision=Number(p.revision)||0;p.approvalStatus=p.approvalStatus||'مسودة';p.approvalStage=Number(p.approvalStage)||0;p.approvalHistory=Array.isArray(p.approvalHistory)?p.approvalHistory:[];p.revisionHistory=Array.isArray(p.revisionHistory)?p.revisionHistory:[];if(!p.linkedProjectId&&linkMap[id])p.linkedProjectId=linkMap[id];projects[id]=p});
  currentId=localStorage.getItem('pm_multi_current')||Object.keys(projects)[0]||uid();
  if(!projects[currentId])projects[currentId]={name:'مشروع جديد',type:'عام',start:new Date().toISOString().slice(0,10),scale:100,acts:JSON.parse(JSON.stringify(TPL.compound.acts||[])),baseline:{},linkedProjectId:'',approvalStatus:'مسودة',approvalStage:0,revision:0,approvalHistory:[],revisionHistory:[]};
  saveAll();syncUIFromProject();fullRecalc();
}
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('on'));document.querySelectorAll('.panel').forEach(x=>x.classList.remove('on'));t.classList.add('on');document.getElementById('p-'+t.dataset.t).classList.add('on')}));
initScheduleApp();

</script>
</body>
</html>
