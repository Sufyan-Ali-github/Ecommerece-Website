import{g as d,s as q,u as C,p as g}from"./showToast-BXcVP8Bu.js";const P=(r,e)=>{let c=d().find(l=>l.id===r),a=1;return c&&(a=c.quantity,e=c.price),{quantity:a,price:e}},f=r=>{let e=d();e=e.filter(c=>c.id!==r),localStorage.setItem("cardProductsLS",JSON.stringify(e));let o=document.getElementById(`card${r}`);o&&(o.remove(),q("delete",r)),C(e)},S=()=>{let r=document.querySelector(".productSubTotal"),e=document.querySelector(".productFinalTotal"),a=d().reduce((l,u)=>{let t=parseInt(u.price)||0;return l+t},0);r.textContent=`$${a}`,e.textContent=`$${a+50}`},x=(r,e,o,c)=>{const a=document.querySelector(`#card${e}`),l=a.querySelector(".quantity"),u=a.querySelector(".item-details p");let t=1,n=0,i=d(),m=i.find(s=>s.id===e);m?(t=m.quantity,n=m.price):(n=c,c=c),r.target.className==="quantity-btn-inc"&&(t<o?t+=1:t===o&&(t=o,n=c*o)),r.target.className==="quantity-btn-dec"&&t>1&&(t-=1),n=c*t,n=Number(n.toFixed(2));let y={id:e,quantity:t,price:n};y=i.map(s=>s.id===e?y:s),localStorage.setItem("cardProductsLS",JSON.stringify(y)),l.innerText=t,u.innerText=n,S()};let T=d(),p=g.filter(r=>T.some(e=>e.id===r.id));console.log(p);const $=document.querySelector("#productCartContainer"),b=document.querySelector("#productCartTemplate"),v=()=>{p.forEach(r=>{const{category:e,id:o,image:c,name:a,price:l,stock:u}=r;let t=document.importNode(b.content,!0);const n=P(o,l);t.querySelector("#card1").setAttribute("id",`card${o}`),t.querySelector(".card-category").textContent=e,t.querySelector(".cart-image ").src=c,t.querySelector(".cart-image").alt=a,t.querySelector(".item-details h2").textContent=a,t.querySelector(".item-details p").textContent=`$${n.price}`,t.querySelector(".quantity").textContent=n.quantity,t.querySelector(".quantity-controls").addEventListener("click",i=>{x(i,o,u,l)}),t.querySelector(".remove-btn").addEventListener("click",i=>{f(o)}),$.append(t)})};v();S();
