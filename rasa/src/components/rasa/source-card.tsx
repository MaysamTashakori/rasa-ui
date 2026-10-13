'use client'
import './rasa-ui.css'
export function SourceCard({title='عنوان منبع اصلی',url='https://nimaaksoy.com/',description='برای بررسی ادعا، صفحهٔ اصلی را بخوانید.'}:{title?:string;url?:string;description?:string}){let safe='';try{const u=new URL(url);if(u.protocol==='https:')safe=u.href}catch{}return <article className="rui-source"><span>منبع و شواهد</span><h3>{title}</h3><p>{description}</p>{safe&&<a href={safe} target="_blank" rel="noopener noreferrer"><bdi>{new URL(safe).hostname}</bdi><span aria-hidden>↗</span></a>}</article>}
