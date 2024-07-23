import doctorLists from"~/assets/js/doctor";import addressLists from"~/assets/js/address";import{useAppState}from"~/stores/appState";const appState=useAppState();export const getDoctorDetail=s=>{let n=!1,a={};for(let t=0;t<doctorLists.length;t++)if(!n){let e=doctorLists[t].find(n=>n.id==s);e&&(a=e,n=!0)}return a};export const getAddressDetail=s=>{let n=!1,a={};for(let t=0;t<addressLists.length;t++)if(!n){let e=addressLists[t].find(n=>n.id==s);e&&(a=e,n=!0)}return a};export const renderingDome=(s,n)=>{const a=s||"",t=(new DOMParser).parseFromString(a,"text/html");let e=t.getElementsByClassName("content-doctor"),i=t.getElementsByClassName("content-address");if(e&&e.length)for(r=0;r<e.length;r++){const s=Array.from(e[r].classList).find(s=>s.startsWith("doctor-did-"));if(s){const n=s.replace("doctor-did-",""),a=getDoctorDetail(n);let i="";if(a.tags&&a.tags.length)for(d=0;d<a.tags.length;d++)i+=`<span>${a.tags[d]}</span>`;let l="";a.newOrg&&""!==a.newOrg&&(l=`<div class="detail-2"><span>${a.newOrg}</span></div>`);let c="";if(a.newJobs&&a.newJobs.length)for(var d=0;d<a.newJobs.length;d++)c+=`<span>${a.newJobs[d]}</span>`;const o=`<div class="index-doctorTeam-detail index-doctorTeam-con" id="d${a.id}">\n          <div class="index-doctorTeam-detail-l">\n            <div class="index-doctorTeam-detail-l-in">\n              <img srcset="https://static.cmereye.com/imgs/2024/02/3305056d2ab78db8.webp 768w, https://static.cmereye.com/imgs/2024/02/d9ed594b3c173297.webp" src="https://static.cmereye.com/imgs/2024/02/d9ed594b3c173297.webp" alt="">\n              <img srcset="${a.mbImg} 768w, ${a.imgUrl}" :src="${a.imgUrl}" alt="${a.name}" title="${a.name}">\n            </div>\n            <div class="index-doctorTeam-detail-l-btn">\n              <div class="animbtntypetwo">\n                <a href="https://wa.me/85269338128?text=Hello愛康健,我想查詢牙科服務" class="animbtntypetwo-in" alt="whatsapp" title="whatsapp">\n                  <span>線上咨詢</span>\n                </a>\n              </div>\n            </div>\n          </div>\n          <div class="index-doctorTeam-detail-r">\n            <div class="detail-1">\n              <span>${a.name}</span>\n              <span>${a.text}</span>\n            </div>\n            ${l}\n            <div class="detail-3">\n              ${c}\n            </div>\n            <div class="detail-4">\n              <span>擅長項目：</span>\n              <span>\n                ${a.newSkilled}\n              </span>\n            </div>\n            <div class="detail-5">\n              ${i}  \n            </div>\n            <div class="detail-6">\n              <div class="animbtntypetwo">\n                <a href="https://wa.me/85269338128?text=Hello愛康健,我想查詢牙科服務" class="animbtntypetwo-in" alt="whatsapp" title="whatsapp">\n                  <span>線上咨詢</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>`,p=t.createElement("div");p.className=e[r].className,p.innerHTML=o,e[r].parentNode.replaceChild(p,e[r])}}if(i&&i.length){for(var r=0;r<i.length;r++){const s=Array.from(i[r].classList).find(s=>s.startsWith("address-did-"));if(s){const a=s.replace("address-did-",""),e=getAddressDetail(a);let d="";if(e.imgLists&&e.imgLists.length)for(var l=0;l<e.imgLists.length;l++)d+=`<div><img src="${e.imgLists[l]}" alt="${n(e.name)}" onclick="handleClickAddressRImg(event)"></div>`;let o="";if(e.imgLists&&e.imgLists.length)for(var c=0;c<e.imgLists.length;c++)o+=`<div class="address-r-img-swiper-slide"><img src="${e.imgLists[c]}" alt="${n(e.name)}"></div>`;const p=`<div class="address">\n                          <div class="address-l">\n                            <img src="${e.imgLists[0]}" alt="${n(e.name)}" />\n                          </div>\n                          <div class="address-r">\n                            <div class="address-r-img">\n                              ${d}\n                            </div>\n                            <div class="address-r-img mbimg">\n                              <div class="address-r-img-swiper">\n                                ${o}\n                              </div>\n                            </div>\n                            <div class="address-r-name">\n                              <span class="pcname">${n(e.name)}</span>\n                              <span class="mbname">${n(appState.areaTabs[appState.areaTabCurNum])} ${n(e.tabname)}</span>\n                            </div>\n                            <div class="address-r-content">\n                              <div>\n                                <span>${n("contactUs.hospital_address")}</span>\n                                <span>${n(e.address)}</span>\n                              </div>\n                              <div>\n                                <span>${n("contactUs.hours_of_Operation")}</span>\n                                <span>${n(e.time)}</span>\n                              </div>\n                              <div>\n                                <span>${n("contactUs.check_the_phone")}</span>\n                                <span>${e.phone}</span>\n                              </div>\n                            </div>\n                            <div class="address-r-btn">\n                              <div class="address-r-btn-lx">\n                                <span onClick="handleClicklx(event)" id="aid-${e.id}">${n("contactUs.traffic_route")}</span>\n                                <div class="lx-box">\n                                  <div class="lx-box-l">\n                                    <span>${n("contactUs.bus_route")}</span>\n                                    <span>${n(e.busRoutes)}</span>\n                                  </div>\n                                  <div class="lx-box-r">\n                                    <span>${n("contactUs.metro_lines")}</span>\n                                    <span>${n(e.metroRoutes)}</span>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class="address-r-btn-bd">\n                                <a href="${e.baiduMap}">${n("contactUs.baidu_map")}</a>\n                              </div>\n                            </div>\n                          </div>\n                        </div>`,m=t.createElement("div");m.className=i[r].className,m.innerHTML=p,i[r].parentNode.replaceChild(m,i[r])}}const s=t.createElement("script");s.type="text/javascript",s.src="./common.js",t.body.appendChild(s)}return t.documentElement.innerHTML};