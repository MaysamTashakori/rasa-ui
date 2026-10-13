'use client'
import { useState } from 'react'
import './rasa-ui.css'
export function AgentFlow({steps=['تعریف مسئله','بررسی شواهد','ساخت پیش‌نویس','تأیید انسانی']}:{steps?:string[]}){const [active,setActive]=useState(0);return <div className="rui-flow"><ol>{steps.map((s,i)=><li key={s} data-state={i<active?'done':i===active?'current':'waiting'}><span>{i<active?'✓':new Intl.NumberFormat('fa-IR').format(i+1)}</span><b>{s}</b></li>)}</ol><button onClick={()=>setActive(v=>(v+1)%steps.length)}>{active===steps.length-1?'شروع دوبارهٔ نمونه':'نمایش مرحلهٔ بعد'}</button><p role="status">نمونهٔ فرایند؛ ایجنت واقعی اجرا نمی‌شود.</p></div>}
