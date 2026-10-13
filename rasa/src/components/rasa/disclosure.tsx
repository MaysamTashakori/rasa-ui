'use client'
import './rasa-ui.css'
export function Disclosure({question='این کامپوننت چطور شخصی‌سازی می‌شود؟',answer='کد در اختیار شماست. رنگ‌ها با توکن، متن‌ها با پراپ و چیدمان با CSS منطقی قابل تغییرند.'}:{question?:string;answer?:string}){return <details className="rui-disclosure"><summary>{question}<span aria-hidden>+</span></summary><p>{answer}</p></details>}
