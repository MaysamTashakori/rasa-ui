'use client'
import { useId,useState } from 'react'
import './rasa-ui.css'
export function ScopeSlider({min=1,max=12,initial=4,onChange}:{min?:number;max?:number;initial?:number;onChange?:(value:number)=>void}){const [value,setValue]=useState(initial),id=useId();return <div className="rui-slider"><label htmlFor={id}>تعداد بخش‌ها<output htmlFor={id}>{new Intl.NumberFormat('fa-IR').format(value)}</output></label><input id={id} type="range" min={min} max={max} value={value} onChange={e=>{const n=Number(e.target.value);setValue(n);onChange?.(n)}}/><div><span>متمرکز</span><span>جامع</span></div></div>}
