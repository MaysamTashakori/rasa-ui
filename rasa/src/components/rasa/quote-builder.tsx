'use client'
import { useState } from 'react'
import './rasa-ui.css'
export function QuoteBuilder({base=1000000,onChange}:{base?:number;onChange?:(quote:number)=>void}){const [extra,setExtra]=useState(false);const total=Math.round(base*(extra?1.2:1));return <div className="rui-quote"><span>محاسبه‌گر نمونه</span><strong>{new Intl.NumberFormat('fa-IR').format(total)} <small>تومان</small></strong><label><input type="checkbox" checked={extra} onChange={e=>{setExtra(e.target.checked);onChange?.(Math.round(base*(e.target.checked?1.2:1)))}}/>نسخهٔ دو زبانه · ۲۰٪</label><p>برآورد نمایشی؛ پرداخت و قیمت قطعی سمت سرور محاسبه شود.</p></div>}
