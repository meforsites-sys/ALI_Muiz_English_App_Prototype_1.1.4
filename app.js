const units = [
  {
    "n": 1,
    "title": "Health and lifestyle",
    "lessons": [
      {
        "title": "My toe is bleeding",
        "page": 4
      },
      {
        "title": "I was ice skating, and I fell over",
        "page": 6
      },
      {
        "title": "My friends were all watching,",
        "page": 8
      },
      {
        "title": "Most smokers take it up",
        "page": 10
      },
      {
        "title": "Take some exercise every day",
        "page": 12
      },
      {
        "title": "Life used to be different",
        "page": 14
      },
      {
        "title": "Let’s start with diet",
        "page": 16
      },
      {
        "title": "Using your phone behind",
        "page": 18
      },
      {
        "title": "Against all odds",
        "page": 20
      }
    ]
  },
  {
    "n": 2,
    "title": "Law and order",
    "lessons": [
      {
        "title": "Law and order",
        "page": 28
      },
      {
        "title": "A police officer’s duties",
        "page": 30
      },
      {
        "title": "Airport security",
        "page": 32
      },
      {
        "title": "Applying for a job",
        "page": 34
      },
      {
        "title": "Military jobs",
        "page": 36
      },
      {
        "title": "A robbery",
        "page": 38
      },
      {
        "title": "A safety brochure",
        "page": 40
      },
      {
        "title": "Road safety",
        "page": 42
      },
      {
        "title": "Security technology",
        "page": 44
      }
    ]
  },
  {
    "n": 3,
    "title": "Careers and choices",
    "lessons": [
      {
        "title": "I’d like to work in the",
        "page": 52
      },
      {
        "title": "If you come round tomorrow,",
        "page": 54
      },
      {
        "title": "If you could choose any job …",
        "page": 56
      },
      {
        "title": "She asked when she",
        "page": 58
      },
      {
        "title": "I wish I’d brought my sunglasses",
        "page": 60
      },
      {
        "title": "If I’d been fitter",
        "page": 62
      },
      {
        "title": "Learn English in the UK",
        "page": 64
      },
      {
        "title": "Summer jobs",
        "page": 66
      },
      {
        "title": "Focus on careers –",
        "page": 68
      }
    ]
  },
  {
    "n": 4,
    "title": "Rashid & Rana Designs",
    "lessons": [
      {
        "title": "Rashid & Rana Designs",
        "page": 76
      },
      {
        "title": "People didn’t use to work out",
        "page": 78
      },
      {
        "title": "How to be the best!",
        "page": 80
      },
      {
        "title": "If only …",
        "page": 82
      }
    ]
  },
  {
    "n": 5,
    "title": "Tourism and holidays",
    "lessons": [
      {
        "title": "Let’s do some sightseeing",
        "page": 86
      },
      {
        "title": "Have you ever stayed in",
        "page": 88
      },
      {
        "title": "I’ve been coming here",
        "page": 90
      },
      {
        "title": "I’ve tried it a few times",
        "page": 92
      },
      {
        "title": "We couldn’t get a room",
        "page": 94
      },
      {
        "title": "The atmosphere was",
        "page": 96
      },
      {
        "title": "Beautiful Kerkennah",
        "page": 98
      },
      {
        "title": "Tourism and environment",
        "page": 100
      },
      {
        "title": "Why are holidays so important?",
        "page": 102
      }
    ]
  },
  {
    "n": 6,
    "title": "Money and banking",
    "lessons": [
      {
        "title": "What does it all mean?",
        "page": 110
      },
      {
        "title": "Which account should I get?",
        "page": 112
      },
      {
        "title": "Meet a banker",
        "page": 114
      },
      {
        "title": "Problems",
        "page": 116
      },
      {
        "title": "The big day",
        "page": 118
      },
      {
        "title": "A car loan",
        "page": 120
      },
      {
        "title": "Letters",
        "page": 122
      },
      {
        "title": "I apologize for any",
        "page": 124
      },
      {
        "title": "Making money",
        "page": 126
      }
    ]
  },
  {
    "n": 7,
    "title": "Education and learning",
    "lessons": [
      {
        "title": "What can I study?",
        "page": 134
      },
      {
        "title": "A language school",
        "page": 136
      },
      {
        "title": "Improve your computer skills",
        "page": 138
      },
      {
        "title": "Summer courses",
        "page": 140
      },
      {
        "title": "Volunteers at the",
        "page": 142
      },
      {
        "title": "Learning experiences",
        "page": 144
      },
      {
        "title": "Books and the internet",
        "page": 146
      },
      {
        "title": "Learning languages",
        "page": 148
      },
      {
        "title": "Using the library",
        "page": 150
      }
    ]
  },
  {
    "n": 8,
    "title": "Our natural resources",
    "lessons": [
      {
        "title": "Our natural resources",
        "page": 158
      },
      {
        "title": "Recycling waste",
        "page": 160
      },
      {
        "title": "A renewable resource",
        "page": 162
      },
      {
        "title": "The Euphrates River",
        "page": 164
      }
    ]
  }
];
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function inferLesson(b){
 const u=units.find(x=>x.n===b.unit); if(!u||!b.printed_page)return b.lesson_title_as_extracted||'مراجعة / غير محدد';
 let chosen=null; for(const l of u.lessons){if(l.page<=b.printed_page)chosen=l;else break;}
 return b.lesson_title_as_extracted||chosen?.title||'غير محدد';
}
const allExercises=(window.EXERCISE_INDEX?.blocks||[]).map((b,i)=>({...b,id:i+1,lesson_display:b.source_section||inferLesson(b)}));
let exerciseVisibleLimit=60;
const EXERCISE_NOTES_KEY='ali_muiz_exercise_notes_v1';
function readExerciseNotes(){try{return JSON.parse(localStorage.getItem(EXERCISE_NOTES_KEY)||'{}')}catch{return {}}}
function saveExerciseNote(id,value){const notes=readExerciseNotes();if(value.trim())notes[id]=value;else delete notes[id];try{localStorage.setItem(EXERCISE_NOTES_KEY,JSON.stringify(notes));return true}catch{return false}}
function renderExercises(){
 const unit=document.getElementById('exerciseUnit')?.value||'all';
 const query=(document.getElementById('exerciseSearch')?.value||'').trim().toLowerCase();
 const audit=document.getElementById('exerciseAudit')?.value||'all';
 const filtered=allExercises.filter(b=>(unit==='all'||String(b.unit??'unknown')===unit)&&(audit==='all'||b.pdf_audit_status===audit)&&(!query||[b.source_text_block,b.heading_as_extracted,b.lesson_display,b.exercise_label,b.printed_page,b.unit,b.source_section].join(' ').toLowerCase().includes(query)));
 const out=document.getElementById('exerciseResults'); if(!out)return;
 const exact=allExercises.filter(x=>x.pdf_audit_status==='exact').length, close=allExercises.filter(x=>x.pdf_audit_status==='close').length, review=allExercises.filter(x=>x.pdf_audit_status==='review').length;
 document.getElementById('exerciseCount').textContent=`عرض ${filtered.length} من ${allExercises.length} مقطعاً · مطابق نصياً: ${exact} · قريب: ${close} · يحتاج مراجعة: ${review}`;
 const visible=filtered.slice(0,exerciseVisibleLimit);
 const notes=readExerciseNotes();
 const card=b=>`<details class="exercise-card"><summary><span class="exercise-letter">${esc(b.exercise_label||'—')}</span><span class="exercise-heading">${esc(b.heading_as_extracted||'نص التمرين')}</span><span class="exercise-meta">${b.unit?'Unit '+b.unit:'غير محدد'} · ص ${esc(b.printed_page??'—')}</span></summary><div class="exercise-info"><div><b>الوحدة:</b> ${b.unit?'Unit '+b.unit:'غير محددة'}</div><div><b>الموضوع / الدرس:</b> ${esc(b.lesson_display||'غير محدد')}</div><div><b>حرف التمرين:</b> ${esc(b.exercise_label||'غير واضح')}</div><div><b>الصفحة المطبوعة:</b> ${esc(b.printed_page??'غير متاحة')} <span>· صفحة PDF: ${esc(b.pdf_page??'—')}</span></div><pre>${esc(b.source_text_block||'')}</pre><div class="audit-status"><b>نتيجة المطابقة النصية:</b> ${b.pdf_audit_status==='exact'?'مطابقة نصية كاملة':b.pdf_audit_status==='close'?'تشابه مرتفع — مراجعة بصرية':'يحتاج مراجعة بصرية'} · ${Math.round((b.pdf_token_coverage||0)*100)}%</div><small class="review-flag">النص منقول من الاستخراج الآلي دون إعادة صياغة. راجع بصرياً حدود التمرين وحرفه وتصنيفه قبل الاعتماد.</small><div class="exercise-answer-pad"><label for="studentAnswer${b.id}">مساحة إجابتك الشخصية</label><textarea id="studentAnswer${b.id}" data-answer-id="${b.id}" placeholder="اكتب إجابتك هنا…">${esc(notes[b.id]||'')}</textarea><div class="answer-pad-actions"><button type="button" data-save-answer="${b.id}">حفظ الإجابة</button><span id="answerStatus${b.id}">${notes[b.id]?'إجابة محفوظة على هذا الجهاز':'لم تُحفظ إجابة بعد'}</span></div></div></div></details>`;
 const layout=document.getElementById('exerciseLayout')?.value||'grouped';
 if(layout==='flat') out.innerHTML=visible.map(card).join('');
 else {
  const groups=new Map();
  visible.forEach(b=>{const key=`${b.unit??'x'}::${b.lesson_display||'موضوع غير محدد'}`;if(!groups.has(key))groups.set(key,{unit:b.unit,title:b.lesson_display||'موضوع غير محدد',items:[]});groups.get(key).items.push(b);});
  out.innerHTML=[...groups.values()].map(g=>`<section class="exercise-topic"><div class="exercise-topic-head"><b>${g.unit?'Unit '+g.unit+' · ':''}${esc(g.title)}</b><span>${g.items.length} تمرين</span></div>${g.items.map(card).join('')}</section>`).join('');
 }
 if(filtered.length>visible.length) out.innerHTML+=`<button class="load-more" type="button" onclick="exerciseVisibleLimit+=60;renderExercises()">عرض 60 تمريناً إضافياً (${filtered.length-visible.length} متبقٍ)</button>`;
 if(!filtered.length)out.innerHTML='<div class="empty">لا توجد نتائج مطابقة. جرّب كلمة أخرى أو غيّر الوحدة.</div>';
 out.querySelectorAll('[data-save-answer]').forEach(btn=>btn.addEventListener('click',()=>{const id=btn.dataset.saveAnswer;const field=out.querySelector(`[data-answer-id="${id}"]`);const saved=saveExerciseNote(id,field.value);const status=out.querySelector(`#answerStatus${id}`);if(status)status.textContent=saved?(field.value.trim()?'تم حفظ إجابتك على هذا الجهاز':'حُذفت الإجابة الفارغة'):'تعذر الحفظ في هذا المتصفح؛ انسخ إجابتك قبل مغادرة الصفحة.';}));
}
function showSection(key){
 if(key==='literature'){activeLiteratureView='characters';activeLiteratureWork='all';}
 const panel=document.getElementById('contentPanel'), body=document.getElementById('panelBody');
 panel.hidden=false; document.getElementById('mainGrid').hidden=true; document.querySelector('.section-head').hidden=true; document.querySelector('.hero').hidden=true; document.querySelector('.note').hidden=true;
 const titles={units:"الوحدات الدراسية",grammar:"القواعد",exercises:"التمارين",vocabulary:"المفردات",literature:"الأدب",tests:"الاختبارات",search:"البحث في المحتوى"};
 let html=`<h2 class="panel-title">${titles[key]||"المحتوى"}</h2>`;
 if(key==="units"){
 html+='<p class="panel-sub">فهرس الدروس المستخرج من كتاب النشاط المرفوع. أرقام الصفحات هي الأرقام المطبوعة داخل الكتاب.</p><div class="unit-list">';
 units.forEach(u=>{html+=`<article class="unit-card"><b>Unit ${u.n} · ${esc(u.title)}</b><small>${u.lessons.length} دروس · الصفحات موضحة</small><ol class="lesson-list">${u.lessons.map(x=>`<li>${esc(x.title)} <small>— ص ${x.page}</small></li>`).join('')}</ol><span class="status">من كتاب النشاط</span></article>`}); html+='</div>';
 } else if(key==="exercises"){
 html+=`<p class="panel-sub">فهرس أولي يضم 271 مقطعاً مرشحاً من كتاب النشاط. جُمعت المقاطع حسب الوحدة والدرس مع الحفاظ على ترتيبها ورقم الصفحة وحرف التمرين. يمكنك البحث والتصفية، أو عرضها متسلسلة. اكتب إجابتك في دفتر الإجابة أسفل كل تمرين واحفظها على جهازك؛ لا يوجد تصحيح آلي لهذه الإجابات.</p><div class="exercise-tools"><input id="exerciseSearch" class="searchbox" placeholder="ابحث في نص التمرين أو الدرس أو الصفحة..." oninput="renderExercises()"><select id="exerciseUnit" class="searchbox" onchange="renderExercises()"><option value="all">كل الوحدات والأدب</option>${units.map(u=>`<option value="${u.n}">Unit ${u.n} · ${esc(u.title)}</option>`).join('')}<option value="unknown">الأدب / غير محدد الوحدة</option></select><select id="exerciseLayout" class="searchbox" onchange="renderExercises()"><option value="grouped">تجميع حسب الموضوع والدرس</option><option value="flat">عرض متسلسل</option></select><select id="exerciseAudit" class="searchbox" onchange="renderExercises()"><option value="all">كل نتائج المطابقة</option><option value="exact">مطابقة نصية كاملة</option><option value="close">تشابه مرتفع</option><option value="review">يحتاج مراجعة بصرية</option></select></div><div id="exerciseCount" class="exercise-count"></div><div id="exerciseResults"></div>`;
 } else if(key==="grammar"){
 const gd=window.GRAMMAR_DATA||[];
 html+=`<p class="panel-sub">${gd.length} موضوعاً نحوياً مستخرجاً ومنظماً من كتاب النشاط. اختر الوحدة أو ابحث عن قاعدة. الشرح بالعربية مع المثال الإنكليزي وترجمته.</p><div class="exercise-tools"><input id="grammarSearch" class="searchbox" placeholder="ابحث عن قاعدة أو مصطلح..." oninput="renderGrammar()"><select id="grammarUnit" class="searchbox" onchange="renderGrammar()"><option value="all">كل الوحدات</option>${units.map(u=>`<option value="${u.n}">Unit ${u.n} · ${esc(u.title)}</option>`).join('')}</select></div><div id="grammarResults"></div>`;
 } else if(key==="vocabulary"){
 html+=`<p class="panel-sub">مفردات مختارة من موضوعات الوحدات الثماني، مع المعنى العربي ورقم الوحدة. ابحث بالإنكليزية أو العربية.</p><div class="exercise-tools"><input id="vocabSearch" class="searchbox" placeholder="ابحث عن كلمة أو معنى..." oninput="renderVocabulary()"><select id="vocabUnit" class="searchbox" onchange="renderVocabulary()"><option value="all">كل الوحدات</option>${units.map(u=>`<option value="${u.n}">Unit ${u.n} · ${esc(u.title)}</option>`).join('')}</select></div><div id="vocabCount" class="exercise-count"></div><div id="vocabResults" class="vocab-grid"></div>`;
 } else if(key==="tests"){
 html+=`<p class="panel-sub">اختبار تدريبي قصير من القواعد والمفردات التي أضيفت في هذا الإصدار. اختر الإجابة ثم اعرض التصحيح.</p><div id="quizBox"></div>`;
 } else if(key==="literature"){
 const lit=window.LITERATURE_DATA||[];
 html+='<p class="panel-sub">دليل الأدب وحلول Literature Focus للأقسام الاثني عشر في Pride and Prejudice وAs You Like It. تمت مراجعة الإجابات بمفتاح دليل المدرس ومقابلتها بمقتطفات كتاب الطالب؛ ويظهر مرجع كتاب النشاط والمقتطف ومفتاح المدرس تحت كل إجابة، مع تنبيه المواضع التي تحتاج مراجعة بشرية.</p>';
 html+=`<div class="lit-guide-tabs"><button class="lit-guide-tab active" data-view="characters" onclick="showLiteratureGuide('characters',this)">الشخصيات</button><button class="lit-guide-tab" data-view="relationships" onclick="showLiteratureGuide('relationships',this)">العلاقات</button><button class="lit-guide-tab" data-view="events" onclick="showLiteratureGuide('events',this)">ملخص وتسلسل الأحداث</button><button class="lit-guide-tab" data-view="review" onclick="showLiteratureGuide('review',this)">بطاقات المراجعة</button><button class="lit-guide-tab" data-view="source-notes" onclick="showLiteratureGuide('source-notes',this)">ملاحظات التوثيق</button><button class="lit-guide-tab" data-view="questions" onclick="showLiteratureGuide('questions',this)">أسئلة كتاب النشاط</button><button class="lit-guide-tab" data-view="answers" onclick="showLiteratureGuide('answers',this)">حلول التمارين</button></div>`;
 html+=`<div class="lit-work-grid"><button class="lit-work active" onclick="setLiteratureWork('all',this)"><b>العملان</b><small>رواية ومسرحية</small></button><button class="lit-work" onclick="setLiteratureWork('Pride and Prejudice',this)"><b>Pride and Prejudice</b><small>Jane Austen</small></button><button class="lit-work" onclick="setLiteratureWork('As You Like It',this)"><b>As You Like It</b><small>William Shakespeare</small></button></div>`;
 html+='<div class="literature-guide-tools"><input id="literatureGuideSearch" class="searchbox" placeholder="ابحث عن شخصية أو علاقة أو حدث أو ملحوظة مصدر..." oninput="filterLiteratureGuide()"><div id="literatureGuideCount" class="exercise-count" aria-live="polite"></div></div>';
 html+='<div id="literatureGuideResults"></div><div id="literatureQuestions" hidden><div id="literatureResults">'+lit.map(renderLiteratureCard).join('')+'</div></div><div id="literatureAnswers" hidden></div>';
 html+='<div class="lit-method-note">المصادر التي تمت مراجعتها: كتاب النشاط ص 168–191، كتاب الطالب ص 101–111 و115–125، ودليل المدرس ص 181–205. الشروح إعادة صياغة موجزة، وتظهر سبع ملاحظات للمراجعة البشرية. مهام الكتابة E بقيت مفتوحة، والأسئلة الوزارية غير مدرجة.</div>';
 } else if(key==="search"){
 html+='<p class="panel-sub">ابحث الآن داخل التمارين المفهرسة. يشمل البحث نص التمرين والدرس ورقم الصفحة.</p><input class="searchbox" placeholder="اكتب كلمة أو رقم صفحة..." oninput="document.getElementById(\'exerciseSearch\').value=this.value;showSection(\'exercises\');document.getElementById(\'exerciseSearch\').value=this.value;renderExercises()">';
 } else {
 html+=`<p class="panel-sub">سيُنظّم هذا القسم اعتماداً على ملفات المنهج الأصلية، مع توثيق المصدر.</p><div class="empty">لا يتوفر محتوى إضافي موثق لهذا القسم حالياً.</div>`;
 }
 body.innerHTML=html; if(key==="exercises")renderExercises(); if(key==="grammar")renderGrammar(); if(key==="vocabulary")renderVocabulary(); if(key==="tests")renderQuiz(); if(key==="literature")renderLiteratureGuide(); panel.scrollIntoView({behavior:'smooth',block:'start'});
}
function renderLiteratureCard(item){
 const heading=item.work==='Pride and Prejudice'?'الرواية':'المسرحية';
 return `<details class="literature-card" data-work="${esc(item.work)}" data-section="${item.section}"><summary><span class="lit-number">${item.section}</span><span class="lit-heading"><b>${esc(item.work)}</b><small>${heading} · Literature Focus Section ${item.section}</small></span><span class="lit-meta">كتاب النشاط ص ${item.activity_pages[0]}–${item.activity_pages[1]} · كتاب الطالب ص ${item.student_book_page}</span></summary><div class="literature-body"><div class="lit-source-note">النص التالي من كتاب النشاط · الصفحتان ${item.activity_pages[0]} و${item.activity_pages[1]} · مقتطف كتاب الطالب المشار إليه ص ${item.student_book_page}</div><pre>${esc(item.content)}</pre><div class="lit-answer-space"><b>مساحة للحل والملاحظات</b><div></div></div></div></details>`;
}
let activeLiteratureWork='all',activeLiteratureView='characters';
function setLiteratureWork(work,btn){
 activeLiteratureWork=work;document.querySelectorAll('.lit-work').forEach(x=>x.classList.remove('active'));if(btn)btn.classList.add('active');
 renderLiteratureGuide();
 document.querySelectorAll('#literatureResults .literature-card').forEach(card=>{card.hidden=work!=='all'&&card.dataset.work!==work;});
 if(activeLiteratureView==='answers')renderLiteratureAnswers();
}
function showLiteratureGuide(view,btn){
 activeLiteratureView=view;document.querySelectorAll('.lit-guide-tab').forEach(x=>x.classList.remove('active'));if(btn)btn.classList.add('active');
 const guide=document.getElementById('literatureGuideResults'),questions=document.getElementById('literatureQuestions'),answers=document.getElementById('literatureAnswers');
 if(guide)guide.hidden=view==='questions'||view==='answers';
 if(questions)questions.hidden=view!=='questions';
 if(answers)answers.hidden=view!=='answers';
 renderLiteratureGuide();
 if(view==='answers')renderLiteratureAnswers();
}
function openLiteratureQuestion(section,work){
 const source=(window.LITERATURE_DATA||[]).find(x=>x.section===section&&(work?x.work===work:(activeLiteratureWork==='all'||x.work===activeLiteratureWork)));
 if(!source)return;
 const tab=document.querySelector('.lit-guide-tab[data-view="questions"]');
 showLiteratureGuide('questions',tab);
 const card=[...document.querySelectorAll('#literatureResults .literature-card')].find(x=>x.dataset.work===source.work&&Number(x.dataset.section)===section);
 if(card){card.hidden=false;card.open=true;card.scrollIntoView({behavior:'smooth',block:'start'});}
}
function literatureSourceHtml(ref){
 if(!ref)return '';
 const activity=ref.activity_book_page?`كتاب النشاط ص ${esc(ref.activity_book_page)}`:'';
 const student=ref.student_book_page?`كتاب الطالب ص ${esc(ref.student_book_page)} · القسم ${esc(ref.student_book_section||'—')}`:'';
 const teacher=(ref.teacher_book_pages||[]).length?`${ref.teacher_book_role==='guidance_only'?'إرشادات دليل المدرس':'مفتاح دليل المدرس'} ص ${(ref.teacher_book_pages||[]).map(esc).join('–')}`:'لا يوجد مفتاح إجابة مغلق';
 const related=(ref.supporting_student_book_pages||[]).filter(p=>p!==ref.student_book_page);
 const relatedText=related.length?` · سياق إضافي: كتاب الطالب ص ${related.map(esc).join('، ')}`:'';
 return `<div class="lit-answer-cite"><b>مرجع هذا البند:</b> ${activity} · المقتطف: ${student} · ${teacher}${relatedText}</div>`;
}
function renderLiteratureAnswers(){
 const out=document.getElementById('literatureAnswers');if(!out)return;
 const data=window.LITERATURE_ANSWERS||{};
 const sections=(data.sections||[]).filter(x=>activeLiteratureWork==='all'||x.work===activeLiteratureWork);
 const flags=(data.review_flags||[]).filter(x=>activeLiteratureWork==='all'||x.work===activeLiteratureWork);
 const reviewSummary=flags.length?`<div class="lit-review-summary"><b>مراجعة بشرية مطلوبة في ${flags.length} مواضع</b><span>هذه البنود تحتفظ بإجابة دليل المدرس، لكن يوجد اختلاف أو التباس موضح أسفل الإجابة. لا تعتمدها للتصحيح الآلي الصارم قبل مراجعتها.</span></div>`:'';
 out.innerHTML=`<div class="lit-answer-intro">${esc(data.method_note||'الإجابات موثقة بمصادر المنهج المتاحة.')}</div>${reviewSummary}<div class="lit-answer-tools"><input id="litAnswerSearch" class="searchbox" type="search" placeholder="ابحث في السؤال أو الإجابة أو السبب أو المرجع..." oninput="filterLiteratureAnswers()"><button type="button" onclick="toggleLiteratureAnswers(true)">فتح الكل</button><button type="button" onclick="toggleLiteratureAnswers(false)">طي الكل</button></div><div id="litAnswerCount" class="lit-answer-count"></div>`+sections.map(sec=>{
  const heading=sec.work==='Pride and Prejudice'?'الرواية':'المسرحية';
  const exerciseHtml=sec.exercises.map(ex=>{
   if(ex.open_response)return `<details class="lit-answer-exercise"><summary><span class="lit-answer-letter">${esc(ex.letter)}</span><b>${esc(ex.title)}</b><small>مهمة مفتوحة</small></summary><div class="lit-open-note"><b>لا توجد إجابة نموذجية واحدة</b><p>${esc(ex.note||'تُترك هذه المهمة للطالب؛ لم تتم إضافة نص غير موجود في مفتاح المدرس.')}</p>${literatureSourceHtml(ex.source_ref)}<button class="lit-question-link" type="button" onclick="openLiteratureQuestion(${sec.section}, '${esc(sec.work)}')">عرض سؤال كتاب النشاط</button></div></details>`;
   const rows=(ex.items||[]).map(it=>`<article class="lit-answer-item"><div class="lit-answer-top"><span>سؤال ${esc(it.number)}</span><strong dir="auto">${esc(it.answer)}</strong></div><p><b>السبب:</b> ${esc(it.reason)}</p>${literatureSourceHtml(it.source_ref)}${it.review_note?`<div class="lit-answer-review"><b>ملاحظة مراجعة بشرية:</b> ${esc(it.review_note)}</div>`:''}</article>`).join('');
   return `<details class="lit-answer-exercise"><summary><span class="lit-answer-letter">${esc(ex.letter)}</span><b>${esc(ex.title)}</b><small>${(ex.items||[]).length} إجابة</small></summary>${ex.note?`<p class="lit-answer-instruction">${esc(ex.note)}</p>`:''}<div class="lit-answer-items">${rows}</div><button class="lit-question-link" type="button" onclick="openLiteratureQuestion(${sec.section}, '${esc(sec.work)}')">عرض سؤال كتاب النشاط</button></details>`;
  }).join('');
  return `<section class="lit-answer-work" data-work="${esc(sec.work)}"><div class="lit-answer-workhead"><div><b dir="ltr">${esc(sec.work)}</b><small>${heading} · Literature Focus Section ${sec.section}</small></div><span>مقتطف كتاب الطالب ص ${sec.student_book_page}</span></div><div class="lit-answer-source">الأسئلة: كتاب النشاط ص ${sec.activity_pages[0]}–${sec.activity_pages[1]} · المقتطف: كتاب الطالب ص ${sec.student_book_page} · مفتاح المدرس: ص ${sec.teacher_book_pages[0]}–${sec.teacher_book_pages[1]}</div>${exerciseHtml}</section>`;
 }).join('')||'<div class="empty">لا توجد حلول لهذا الاختيار.</div>';
}
function filterLiteratureAnswers(){
 const q=(document.getElementById('litAnswerSearch')?.value||'').trim().toLocaleLowerCase();let shown=0;
 document.querySelectorAll('#literatureAnswers .lit-answer-work').forEach(work=>{
  let workShown=0;work.querySelectorAll('.lit-answer-exercise').forEach(ex=>{
   const hit=!q||ex.textContent.toLocaleLowerCase().includes(q);
   ex.hidden=!hit;if(hit){workShown++;shown++;}
  });work.hidden=workShown===0;
 });
 const count=document.getElementById('litAnswerCount');if(count)count.textContent=q?`المجموعات المطابقة: ${shown}`:'';
}
function toggleLiteratureAnswers(open){document.querySelectorAll('#literatureAnswers .lit-answer-exercise:not([hidden])').forEach(x=>x.open=open);}
function literatureFormatPages(pages){
 const p=Array.isArray(pages)?pages:(pages==null||pages===''?[]:[pages]);
 if(!p.length)return '';
 if(p.length===1){const s=String(p[0]);return /^\s*\d+\s*[–-]\s*\d+\s*$/.test(s)?s.trim():p[0];}
 const nums=p.map(Number);
 if(nums.length>1&&nums.every((n,i)=>i===0||n===nums[i-1]+1))return `${nums[0]}–${nums[nums.length-1]}`;
 return p.join('، ');
}
function literatureSourceMarkup(sources){
 return (sources||[]).map(src=>{
  const parts=[];
  if(src.student_book_pages?.length)parts.push(`كتاب الطالب ص ${literatureFormatPages(src.student_book_pages)}`);
  if(src.activity_book_pages?.length)parts.push(`كتاب النشاط (موضع التمرين) ص ${literatureFormatPages(src.activity_book_pages)}`);
  if(src.activity_pages?.length)parts.push(`كتاب النشاط ص ${literatureFormatPages(src.activity_pages)} · القسم ${src.section}`);
  if(src.student_book_page&&!src.student_book_pages?.length)parts.push(`مقتطف كتاب الطالب ص ${src.student_book_page}`);
  if(src.teacher_book_pages?.length)parts.push(`${src.teacher_book_role==='guidance_only'?'إرشادات دليل المدرس':'مفتاح دليل المدرس'} ص ${literatureFormatPages(src.teacher_book_pages)}`);
  if(src.section_label)parts.push(esc(src.section_label));
  else if(src.section&&!src.activity_pages?.length)parts.push(`Literature Focus Section ${src.section}`);
  return `<span class="lit-source-chip">${parts.join(' · ')}${src.evidence?`<small>${esc(src.evidence)}</small>`:''}</span>`;
 }).join('');
}
function renderLiteratureGuide(){
 const out=document.getElementById('literatureGuideResults');if(!out||activeLiteratureView==='questions'||activeLiteratureView==='answers')return;
 const works=(window.LITERATURE_GUIDE?.works||[]).filter(w=>activeLiteratureWork==='all'||w.work===activeLiteratureWork);
 out.innerHTML=works.map(w=>{
  const head=`<div class="lit-guide-workhead"><div><b dir="ltr">${esc(w.work)}</b><small>${esc(w.author)} · ${w.type==='Novel'?'رواية':'مسرحية'}</small></div><span>كتاب النشاط ص ${w.activity_range[0]}–${w.activity_range[1]} · كتاب الطالب ص ${w.student_book_range[0]}–${w.student_book_range[1]}</span></div>`;
  const overview=`<article class="lit-overview"><b>ملخص العمل</b><p>${esc(w.summary||'')}</p><div class="lit-citations"><b>المصدر:</b>${literatureSourceMarkup(w.summary_sources)}</div></article>`;
  let items=[];
  if(activeLiteratureView==='characters'){
   items=w.characters.map((item,i)=>`<article class="lit-guide-card"><div class="lit-guide-title"><span class="lit-step">${i+1}</span><div><b>${esc(item.name)}</b><small>${esc(item.role||'')}</small></div></div><ul class="lit-fact-list">${(item.facts||[]).map(f=>`<li>${esc(typeof f==='string'?f:f.text)}${typeof f==='string'?'':`<div class="lit-fact-source">${literatureSourceMarkup(f.sources)}</div>`}</li>`).join('')}</ul>${item.role_sources?.length?`<div class="lit-citations"><b>مصدر تعريف الشخصية:</b>${literatureSourceMarkup(item.role_sources)}</div>`:''}</article>`);
  }else if(activeLiteratureView==='relationships'){
   items=(w.relationships||[]).map((item,i)=>`<article class="lit-guide-card lit-relationship-card"><div class="lit-guide-title"><span class="lit-step">${i+1}</span><div><b>${esc(item.from)} ↔ ${esc(item.to)}</b><small>${esc(item.kind)}</small></div></div><p>${esc(item.description)}</p><div class="lit-citations"><b>المصدر:</b>${literatureSourceMarkup(item.sources)}</div></article>`);
  }else if(activeLiteratureView==='events'){
   items=(w.timeline||w.events||[]).map((item,i)=>`<article class="lit-guide-card lit-timeline-card"><div class="lit-guide-title"><span class="lit-step">${item.section||i+1}</span><div><small>Literature Focus Section ${item.section||i+1}</small><b>${esc(item.title)}</b></div></div><p>${esc(item.summary||item.description||'')}</p><ol class="lit-timeline-steps">${(item.steps||[]).map(st=>`<li>${esc(st.text)}<div class="lit-fact-source">${literatureSourceMarkup(st.sources)}</div></li>`).join('')}</ol><div class="lit-citations"><b>مرجع القسم:</b>${literatureSourceMarkup(item.sources)}</div></article>`);
  }else if(activeLiteratureView==='source-notes'){
   items=(w.source_notes||[]).map((note,i)=>`<article class="lit-guide-card lit-source-note-card"><div class="lit-guide-title"><span class="lit-step">${i+1}</span><div><small>ملاحظة تدقيق</small><b>${esc(note.title)}</b></div></div><p>${esc(note.text)}</p><div class="lit-citations"><b>مواضع التحقق:</b>${literatureSourceMarkup(note.sources)}</div></article>`);
  }else{
   const reviewItems=[...w.characters.map(x=>({...x,reviewKind:'شخصية'})),...(w.relationships||[]).map(x=>({...x,name:`${x.from} ↔ ${x.to}`,facts:[{text:x.description,sources:x.sources}],reviewKind:'علاقة'})),...(w.timeline||[]).map(x=>({...x,name:x.title,facts:[{text:x.summary,sources:x.sources}],reviewKind:'حدث'}))];
   items=reviewItems.map((item,i)=>{const facts=(item.facts||[]).map(f=>`<li>${esc(typeof f==='string'?f:f.text)}${typeof f==='string'?'':`<div class="lit-fact-source">${literatureSourceMarkup(f.sources)}</div>`}</li>`).join('');return `<article class="lit-guide-card lit-review-card"><div class="lit-guide-title"><span class="lit-step">${i+1}</span><div><small>${item.reviewKind}</small><b>${esc(item.name||item.title)}</b></div></div><button class="lit-reveal" type="button" onclick="this.nextElementSibling.hidden=!this.nextElementSibling.hidden;this.textContent=this.nextElementSibling.hidden?'أعرض المعلومة':'أخفِ المعلومة'">أعرض المعلومة</button><div class="lit-review-answer" hidden><ul>${facts}</ul></div></article>`;});
  }
  const sourceMap=activeLiteratureView==='source-notes'?`<article class="lit-source-map"><b>خريطة صفحات الأقسام</b><small>كتاب الطالب: ${esc(w.source_files?.student_book||'كتاب الطالب للصف السادس الإعدادي')} · كتاب النشاط: ${esc(w.source_files?.activity_book||'كتاب النشاط للصف السادس الإعدادي')}</small><div class="lit-source-map-scroll"><table><thead><tr><th>القسم</th><th>كتاب الطالب</th><th>كتاب النشاط</th></tr></thead><tbody>${(w.section_page_map||[]).map(row=>`<tr><td>${row.section}</td><td>${literatureFormatPages(row.student_book_pages)}</td><td>${literatureFormatPages(row.activity_book_pages)}</td></tr>`).join('')}</tbody></table></div><p>${esc(window.LITERATURE_GUIDE?.source_audit?.method||'')}</p></article>`:'';
  return `<section class="lit-guide-work">${head}${activeLiteratureView==='events'?overview:''}${sourceMap}<div class="lit-guide-cards">${items.join('')}</div></section>`;
 }).join('');
 filterLiteratureGuide();
}
function filterLiteratureGuide(){
 const q=(document.getElementById('literatureGuideSearch')?.value||'').trim().toLocaleLowerCase();
 const cards=[...document.querySelectorAll('#literatureGuideResults .lit-guide-card')];let shown=0;
 cards.forEach(card=>{const match=!q||card.textContent.toLocaleLowerCase().includes(q);card.hidden=!match;if(match)shown++;});
 const count=document.getElementById('literatureGuideCount');if(count)count.textContent=q?`النتائج المطابقة: ${shown} من ${cards.length}`:`عدد البطاقات: ${cards.length}`;
}
function goHome(){document.getElementById('contentPanel').hidden=true;document.getElementById('mainGrid').hidden=false;document.querySelector('.section-head').hidden=false;document.querySelector('.hero').hidden=false;document.querySelector('.note').hidden=false;window.scrollTo({top:0,behavior:'smooth'})}
function openStandalone(){window.location.href='ALI_MUIZ_ENGLISH_2027_v1.12.2.html';}
document.getElementById('menuBtn').addEventListener('click',()=>showSection('units'));

function renderGrammar(){
 const q=(document.getElementById('grammarSearch')?.value||'').toLowerCase().trim(), u=document.getElementById('grammarUnit')?.value||'all';
 const arr=(window.GRAMMAR_DATA||[]).filter(x=>(u==='all'||String(x.unit)===u)&&(!q||[x.title,x.ar_title,x.rule,x.example,x.translation,x.pages].join(' ').toLowerCase().includes(q)));
 document.getElementById('grammarResults').innerHTML=arr.map(x=>`<details class="grammar-card"><summary><span class="exercise-letter">${x.unit}</span><b>${esc(x.title)}</b><span class="exercise-meta">${esc(x.pages)}</span></summary><div class="grammar-body"><h4>${esc(x.ar_title)}</h4><p>${esc(x.rule)}</p><div class="example-en" dir="ltr">${esc(x.example)}</div><div class="example-ar">${esc(x.translation)}</div>${x.notes?.length?`<ul>${x.notes.map(n=>`<li>${esc(n)}</li>`).join('')}</ul>`:''}<small>المصدر: كتاب النشاط · ${esc(x.pages)}</small></div></details>`).join('')||'<div class="empty">لا توجد قاعدة مطابقة.</div>';
}
function renderVocabulary(){
 const q=(document.getElementById('vocabSearch')?.value||'').toLowerCase().trim(), u=document.getElementById('vocabUnit')?.value||'all';
 const arr=(window.VOCAB_DATA||[]).filter(x=>(u==='all'||String(x.unit)===u)&&(!q||(x.word+' '+x.meaning).toLowerCase().includes(q)));
 document.getElementById('vocabCount').textContent=`${arr.length} كلمة من أصل ${(window.VOCAB_DATA||[]).length}`;
 document.getElementById('vocabResults').innerHTML=arr.map(x=>`<article class="vocab-card"><span>UNIT ${x.unit}</span><b dir="ltr">${esc(x.word)}</b><small>${esc(x.meaning)}</small></article>`).join('')||'<div class="empty">لا توجد كلمة مطابقة.</div>';
}
const quizItems=[
 {q:'While I ___, the phone rang.',opts:['studied','was studying','am studying'],a:1,why:'الفعل المستمر الأطول يأتي بالماضي المستمر.'},
 {q:'The film was very ___.',opts:['bored','boring','bore'],a:1,why:'نستخدم -ing لوصف الشيء الذي يسبب الشعور.'},
 {q:'I used to ___ to school.',opts:['walk','walking','walked'],a:0,why:'بعد used to نستخدم المصدر.'},
 {q:'If you study hard, you ___ pass.',opts:['would','will','had'],a:1,why:'الشرط الأول: if + present simple ثم will + المصدر.'},
 {q:'The letter ___ yesterday.',opts:['wrote','was written','is writing'],a:1,why:'الماضي المبني للمجهول: was/were + التصريف الثالث.'},
 {q:'She has been ___ for an hour.',opts:['wait','waiting','waited'],a:1,why:'المضارع التام المستمر: has been + verb-ing.'},
 {q:'A person who sees an event is a ___.',opts:['witness','loan','crop'],a:0,why:'witness تعني شاهد.'},
 {q:'Wind is a ___ source of energy.',opts:['renewable','buried','annual'],a:0,why:'renewable تعني متجدداً.'}
];
function renderQuiz(){let i=0,score=0,answered=0;const box=document.getElementById('quizBox');function draw(){if(i>=quizItems.length){box.innerHTML=`<div class="quiz-result"><h3>انتهى الاختبار</h3><b>${score} / ${quizItems.length}</b><p>أجبت عن ${answered} أسئلة.</p><button class="primary" id="restartQuiz">إعادة الاختبار</button></div>`;document.getElementById('restartQuiz').onclick=()=>{i=0;score=0;answered=0;draw()};return;}let x=quizItems[i];box.innerHTML=`<div class="quiz-card"><div class="exercise-count">السؤال ${i+1} من ${quizItems.length}</div><h3 dir="ltr">${esc(x.q)}</h3><div class="quiz-options">${x.opts.map((o,j)=>`<button data-i="${j}" class="quiz-option">${esc(o)}</button>`).join('')}</div><div id="quizFeedback"></div></div>`;box.querySelectorAll('.quiz-option').forEach(b=>b.onclick=()=>{if(box.dataset.done==='1')return;box.dataset.done='1';answered++;let ok=Number(b.dataset.i)===x.a;if(ok)score++;box.querySelectorAll('.quiz-option').forEach((z,j)=>{z.disabled=true;if(j===x.a)z.classList.add('correct');else if(z===b)z.classList.add('wrong')});document.getElementById('quizFeedback').innerHTML=`<p class="quiz-feedback">${ok?'إجابة صحيحة ✓':'الإجابة الصحيحة: '+esc(x.opts[x.a])}<br>${esc(x.why)}</p><button class="primary" id="nextQ">${i===quizItems.length-1?'إنهاء':'السؤال التالي'}</button>`;document.getElementById('nextQ').onclick=()=>{i++;box.dataset.done='0';draw()};});box.dataset.done='0';}draw();}
