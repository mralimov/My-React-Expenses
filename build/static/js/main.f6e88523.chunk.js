(this["webpackJsonpmy-react-expenses"]=this["webpackJsonpmy-react-expenses"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(4),c=n.n(a),s=(n(9),n(10),n(0));var i=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(s.jsxs)("div",{className:"expense-date",children:[Object(s.jsx)("div",{className:"expense-date__month",children:t}),Object(s.jsx)("div",{className:"expense-date__year",children:a}),Object(s.jsx)("div",{className:"expense-date__day",children:n})]})};n(12);var d=function(e){var t="card "+e.className;return Object(s.jsx)("div",{className:t,children:e.children})};n(13);var l=function(e){return Object(s.jsxs)(d,{className:"expense-item",children:[Object(s.jsx)(i,{date:e.date}),Object(s.jsxs)("div",{className:"expense-item__description",children:[Object(s.jsx)("h2",{children:e.title}),Object(s.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})};n(14);var j=function(e){return Object(s.jsxs)(d,{className:"expenses",children:[Object(s.jsx)(l,{title:e.data[0].title,amount:e.data[0].amount,date:e.data[0].date}),Object(s.jsx)(l,{title:e.data[1].title,amount:e.data[1].amount,date:e.data[1].date}),Object(s.jsx)(l,{title:e.data[2].title,amount:e.data[2].amount,date:e.data[2].date}),Object(s.jsx)(l,{title:e.data[3].title,amount:e.data[3].amount,date:e.data[3].date})]})},r=n(2),o=n(1),u=(n(15),function(){var e=Object(o.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(o.useState)(""),i=Object(r.a)(c,2),d=i[0],l=i[1],j=Object(o.useState)(""),u=Object(r.a)(j,2),x=u[0],b=u[1];return Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:n,date:new Date(x),amount:d};console.log(t)},children:[Object(s.jsxs)("div",{className:"new-expense__controls",children:[Object(s.jsxs)("div",{className:"new-expense__control",children:[Object(s.jsx)("label",{children:"Title"}),Object(s.jsx)("input",{typr:"text",onChange:function(e){a(e.taget.value)}})]}),Object(s.jsxs)("div",{className:"new-expense__control",children:[Object(s.jsx)("label",{children:"Amount"}),Object(s.jsx)("input",{typr:"number",min:"0.01",step:"0.01",onChange:function(e){l(e.taget.value)}})]}),Object(s.jsxs)("div",{className:"new-expense__control",children:[Object(s.jsx)("label",{children:"Date"}),Object(s.jsx)("input",{typr:"date",min:"2019-0101",max:"2022-12-31",onChange:function(e){b(e.taget.value)}})]})]}),Object(s.jsx)("div",{className:"new-expense__actions",children:Object(s.jsx)("button",{className:"sumbit",children:"Add Expense"})})]})}),x=(n(16),function(){return Object(s.jsx)("div",{className:"new-expense",children:Object(s.jsx)(u,{})})});var b=function(){var e=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450.09,date:new Date(2021,5,12)}];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"My React Expenses Component!"}),Object(s.jsx)(x,{}),Object(s.jsx)(j,{data:e})]})};c.a.render(Object(s.jsx)(b,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.f6e88523.chunk.js.map