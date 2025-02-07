"use strict";(self.webpackChunkshop_smart_application=self.webpackChunkshop_smart_application||[]).push([[619],{2619:(n,r,e)=>{e.r(r),e.d(r,{OrderList:()=>T});var t=e(6540),i=e(1468),o=e(7767),c=function(n){return n.orderReducer},l=e(5072),d=e.n(l),s=e(7825),a=e.n(s),u=e(7659),h=e.n(u),p=e(5056),x=e.n(p),j=e(540),f=e.n(j),m=e(1113),y=e.n(m),b=e(4406),v={};v.styleTagTransform=y(),v.setAttributes=x(),v.insert=h().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=f();d()(b.A,v);b.A&&b.A.locals&&b.A.locals;var g=e(1488),A=e(6627),w=e(4112),k=e(4848);function O(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var t,i,o,c,l=[],d=!0,s=!1;try{if(o=(e=e.call(n)).next,0===r){if(Object(e)!==e)return;d=!1}else for(;!(d=(t=o.call(e)).done)&&(l.push(t.value),l.length!==r);d=!0);}catch(n){s=!0,i=n}finally{try{if(!d&&null!=e.return&&(c=e.return(),Object(c)!==c))return}finally{if(s)throw i}}return l}}(n,r)||function(n,r){if(n){if("string"==typeof n)return D(n,r);var e={}.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?D(n,r):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=Array(r);e<r;e++)t[e]=n[e];return t}var C=(0,t.memo)((function(n){var r=n.item,e=O((0,t.useState)(!1),2),o=e[0],c=e[1],l=(0,i.wA)(),d=S(r.orderDate,48)&&"cancelled"!==r.status;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("tr",{onClick:function(){return c((function(n){return!n}))},className:"order-row",children:[(0,k.jsx)("td",{children:r.orderNumber}),(0,k.jsx)("td",{children:(0,g.GP)(new Date(r.orderDate),"MM/dd/yyyy hh:mm a")}),(0,k.jsx)("td",{children:r.items.length}),(0,k.jsx)("td",{children:r.discount?"".concat(r.discount.code," ").concat(r.discount.percentage,"%"):"No Discount"}),(0,k.jsxs)("td",{children:["$",r.totalAmount]}),(0,k.jsx)("td",{children:"cancelled"===r.status||S(r.orderDate,48)?r.status.toUpperCase():"DELIVERED"}),(0,k.jsx)("td",{children:(0,k.jsx)("button",{onClick:function(n){return function(n,r){var e=n._id,t=n.orderNumber,i=n.items;r.stopPropagation(),l(d?(0,A.N4)(e,(function(){return alert("Order ".concat(t," has been cancelled!"))})):(0,A.eM)(i,(function(){return alert("Order ".concat(t," has been reordered and added to your cart!"))})))}(r,n)},children:d?"Cancel":"ReOrder"})})]},r._id),o&&(0,k.jsx)("tr",{children:(0,k.jsx)("td",{colSpan:"7",children:(0,k.jsxs)("table",{className:"order-details",children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{children:"Product"}),(0,k.jsx)("th",{children:"Price"}),(0,k.jsx)("th",{children:"Quantity"}),(0,k.jsx)("th",{children:"Total"}),(0,k.jsx)("th",{children:"Review"})]})}),(0,k.jsx)("tbody",{children:r.items.map((function(n){return(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{children:n.item.desc}),(0,k.jsxs)("td",{children:["$",n.price]}),(0,k.jsx)("td",{children:n.quantity}),(0,k.jsxs)("td",{children:["$",n.price*n.quantity]}),(0,k.jsx)("td",{children:d?"In Process...":(0,k.jsx)(w.E,{product:n.item})})]},n._id)}))})]})})})]})})),S=function(n,r){return new Date-new Date(n)<60*r*60*1e3},T=function(n){var r=n.cancelledOrderOnly,e=void 0!==r&&r,l=(0,i.d4)(c),d=((0,o.Zp)(),(0,t.useMemo)((function(){return e?l.filter((function(n){return"cancelled"===n.status})):l.filter((function(n){return"cancelled"!==n.status}))}),[e,l]));return console.log("displayOrders",d),(0,k.jsx)("div",{style:{margin:"20px"},children:d.length>0?(0,k.jsxs)("table",{className:"col-sm-12 col-md-12",children:[(0,k.jsx)("thead",{children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{children:"Order #"}),(0,k.jsx)("th",{children:"Date"}),(0,k.jsx)("th",{children:"Items #"}),(0,k.jsx)("th",{children:"Coupon"}),(0,k.jsx)("th",{children:"Total"}),(0,k.jsx)("th",{children:"Status"}),(0,k.jsx)("th",{children:"Action"})]})}),(0,k.jsx)("tbody",{children:d.map((function(n){return(0,k.jsx)(C,{item:n},n._id)}))})]}):(0,k.jsx)("h4",{children:"No orders yet!!!"})})}},4112:(n,r,e)=>{e.d(r,{E:()=>l});var t=e(5556),i=e.n(t),o=e(7767),c=(e(7667),e(4848)),l=function(n){var r=n.product,e=(0,o.Zp)();return(0,c.jsx)("div",{children:(0,c.jsx)("button",{onClick:function(n){n.stopPropagation(),n.preventDefault(),e("/review/"+r._id,{state:{product:r}})},children:"Go To Review"})})};l.propTypes={product:i().object.isRequired}},4406:(n,r,e)=>{e.d(r,{A:()=>l});var t=e(1601),i=e.n(t),o=e(6314),c=e.n(o)()(i());c.push([n.id,".order-row {\n  cursor: pointer;\n}\n\n.order-row:hover {\n  background-color: lightblue;\n}\n\n.order-row:active {\n  background-color: lightsalmon;\n}\n",""]);const l=c},5576:(n,r,e)=>{e.d(r,{A:()=>l});var t=e(1601),i=e.n(t),o=e(6314),c=e.n(o)()(i());c.push([n.id,"#cardContainer {\n  ul {\n    list-style-type: none;\n    padding-left: 0; /* Optional, to remove any left padding */\n    margin: 5px;\n    padding: 5px;\n    border: 1px solid black;\n    border-radius: 5px;\n    background-color: lightpink;\n  }\n}\n",""]);const l=c},7667:(n,r,e)=>{var t=e(5072),i=e.n(t),o=e(7825),c=e.n(o),l=e(7659),d=e.n(l),s=e(5056),a=e.n(s),u=e(540),h=e.n(u),p=e(1113),x=e.n(p),j=e(5576),f={};f.styleTagTransform=x(),f.setAttributes=a(),f.insert=d().bind(null,"head"),f.domAPI=c(),f.insertStyleElement=h();i()(j.A,f),j.A&&j.A.locals&&j.A.locals}}]);