'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import './rasa-ui.css'
export function AsyncAction({run=()=>Promise.resolve(),label='اجرای نمونه'}:{run?:()=>Promise<void>;label?:string}){const [state,setState]=useState<'idle'|'busy'|'done'|'error'>('idle');return <div className="rui-action-wrap"><Button className="rui-action" disabled={state==='busy'} onClick={async()=>{setState('busy');try{await run();setState('done')}catch{setState('error')}}}>{state==='busy'?'در حال اجرا…':state==='done'?'✓ انجام شد':state==='error'?'تلاش دوباره':label}</Button><span role="status">{state==='done'?'اجرای نمونه کامل شد.':state==='error'?'عملیات انجام نشد.':''}</span></div>}
