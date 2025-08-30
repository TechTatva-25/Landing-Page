"use strict";(()=>{var e={};e.id=796,e.ids=[796],e.modules={5890:e=>{e.exports=require("better-sqlite3")},399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},7790:e=>{e.exports=require("assert")},7702:e=>{e.exports=require("events")},2615:e=>{e.exports=require("http")},8791:e=>{e.exports=require("https")},9801:e=>{e.exports=require("os")},6624:e=>{e.exports=require("querystring")},6162:e=>{e.exports=require("stream")},4175:e=>{e.exports=require("tty")},7360:e=>{e.exports=require("url")},1764:e=>{e.exports=require("util")},1568:e=>{e.exports=require("zlib")},9377:(e,r,t)=>{t.r(r),t.d(r,{originalPathname:()=>q,patchFetch:()=>I,requestAsyncStorage:()=>N,routeModule:()=>R,serverHooks:()=>L,staticGenerationAsyncStorage:()=>m});var a={};t.r(a),t.d(a,{GET:()=>g,PUT:()=>A,dynamic:()=>d});var s=t(9303),i=t(8716),o=t(670),n=t(5890),u=t.n(n),p=t(7410),T=t(8706);let d="force-dynamic",E=u()(T.MW);E.prepare(`CREATE TABLE IF NOT EXISTS queries (
	  id INTEGER PRIMARY KEY AUTOINCREMENT,
	  name TEXT NOT NULL,
	  email TEXT NOT NULL,
	  query TEXT NOT NULL,
	  resolved BOOLEAN NOT NULL DEFAULT false,
	  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
	)`).run(),E.prepare(`CREATE TRIGGER IF NOT EXISTS update_queries_updatedAt
	AFTER UPDATE ON queries
	FOR EACH ROW
	BEGIN
	  UPDATE queries
	  SET updatedAt = CURRENT_TIMESTAMP
	  WHERE id = OLD.id;
	END;`).run(),E.prepare(`CREATE TABLE IF NOT EXISTS logs (
	  id INTEGER PRIMARY KEY AUTOINCREMENT,
	  ip TEXT NOT NULL,
	  isp TEXT NOT NULL,
	  location TEXT NOT NULL,
	  userAgent TEXT NOT NULL,
	  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
	)`).run();let l=p.z.object({id:p.z.string().max(10).optional(),name:p.z.string().max(500).optional(),email:p.z.string().max(500).optional(),query:p.z.string().max(1e3).optional(),resolved:p.z.boolean().optional(),page:p.z.coerce.number().min(1).default(1),perPage:p.z.coerce.number().min(1).default(10)}),c=p.z.object({id:p.z.number().min(1),resolved:p.z.boolean()});async function g(e){try{let{ip:r,isp:t,location:a}=await (0,T.TQ)(e),s=e.headers.get("user-agent")??"";E.prepare(`
			INSERT INTO logs (ip, isp, location, userAgent)
			VALUES (?, ?, ?, ?)
		  `).run(r,t,a,s);let i=new URL(e.url).searchParams,o={id:i.get("id")??"",name:i.get("name"),email:i.get("email"),query:i.get("query"),resolved:i.get("resolved")?.toLowerCase()==="true"||i.get("resolved")?.toLowerCase()!=="false"&&void 0,page:i.get("page"),perPage:i.get("perPage")},n=l.safeParse(o);if(!n.success)return(0,T.VR)(n.error.errors[0].message,"",400);let{id:u,name:p,email:d,query:c,resolved:g,page:A,perPage:R}=n.data,N="1=1",m=[];u&&(N+=" AND id = ?",m.push(u.toString())),p&&(N+=" AND name LIKE ?",m.push(`%${p}%`)),d&&(N+=" AND email LIKE ?",m.push(`%${d}%`)),c&&(N+=" AND query LIKE ?",m.push(`%${c}%`)),void 0!==g&&(N+=" AND resolved = ?",m.push(g?"1":"0"));let L=(A-1)*R,q=E.prepare(`SELECT COUNT(*) as total FROM queries WHERE ${N}`).all(...m)[0].total,I=E.prepare(`SELECT * FROM queries WHERE ${N}
		  ORDER BY createdAt DESC
		  LIMIT ? OFFSET ?`).all(...m,R,L),h=Math.ceil(q/R);return(0,T.Xj)({queries:I,pagination:{currentPage:A,perPage:R,totalRecords:q,totalPages:h}})}catch(e){return(0,T.VR)("Failed to fetch queries","",500)}}async function A(e){if(!e.body)return(0,T.VR)("Invalid data","Request body is empty",400);let r=await e.json(),t=c.safeParse(r);if(!t.success)return(0,T.VR)(t.error.errors[0].message,"",400);let{id:a,resolved:s}=r;try{if(!E.prepare(`
		  UPDATE queries SET resolved=? WHERE id=?
		`).run(s?1:0,a).changes)return(0,T.VR)("Query not found","",404);return(0,T.Xj)({message:"Query status updated"})}catch(e){return(0,T.VR)("Failed to update query; please try again later","",500)}}let R=new s.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/v1/admin/route",pathname:"/api/v1/admin",filename:"route",bundlePath:"app/api/v1/admin/route"},resolvedPagePath:"D:\\TechTatva\\Landing-Page\\src\\app\\api\\v1\\admin\\route.ts",nextConfigOutput:"",userland:a}),{requestAsyncStorage:N,staticGenerationAsyncStorage:m,serverHooks:L}=R,q="/api/v1/admin/route";function I(){return(0,o.patchFetch)({serverHooks:L,staticGenerationAsyncStorage:m})}},8706:(e,r,t)=>{t.d(r,{MW:()=>o,TQ:()=>p,VR:()=>u,Xj:()=>n});var a=t(8566),s=t.n(a),i=t(7070);let o=process.env.SQLITE_DB_PATH??"landing_page_queries.db";function n(e,r){let t=i.NextResponse.json({ok:!0,data:e},{status:r?.status||200});return r?.headers&&Object.entries(r.headers).forEach(([e,r])=>{t.headers.set(e,r)}),t}function u(e,r,t){return i.NextResponse.json({ok:!1,message:e},{status:t})}async function p(e){let r=e.headers.get("x-forwarded-for"),t=r?.split(/, /)[0]??"";try{let e=await s()(t);if(e.bogon)return{ip:t,isp:"N/A",location:"N/A"};let r=e.org??"",a=`${e.city??""}${e.city?", ":""}${e.region??""}${e.region?", ":""}${e.country??""}`;return{ip:t,isp:r,location:a}}catch(e){return{ip:t,isp:"N/A",location:"N/A"}}}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[276,437,410],()=>t(9377));module.exports=a})();