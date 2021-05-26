(this["webpackJsonpmy-react-expenses"]=this["webpackJsonpmy-react-expenses"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),s=(n(14),n(2)),l=n(1),i=(n(15),n(16),n(0));var r=function(e){var t="card "+e.className;return Object(i.jsx)("div",{className:t,children:e.children})},u=(n(18),function(e){return Object(i.jsx)("div",{className:"expenses-filter",children:Object(i.jsxs)("div",{className:"expenses-filter__control",children:[Object(i.jsx)("label",{children:"Filter by year"}),Object(i.jsxs)("select",{value:e.selected,onChange:function(t){e.onFilterredYear(t.target.value)},children:[Object(i.jsx)("option",{value:"2022",children:"2022"}),Object(i.jsx)("option",{value:"2021",children:"2021"}),Object(i.jsx)("option",{value:"2020",children:"2020"}),Object(i.jsx)("option",{value:"2019",children:"2019"})]})]})})});n(19);var j=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(i.jsxs)("div",{className:"expense-date",children:[Object(i.jsx)("div",{className:"expense-date__month",children:t}),Object(i.jsx)("div",{className:"expense-date__year",children:a}),Object(i.jsx)("div",{className:"expense-date__day",children:n})]})};n(20);var o=function(e){return Object(i.jsxs)(r,{className:"expense-item",children:[Object(i.jsx)(j,{date:e.date}),Object(i.jsxs)("div",{className:"expense-item__description",children:[Object(i.jsx)("h2",{children:e.title}),Object(i.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})},d=(n(21),function(e){return 0===e.transactions.length?Object(i.jsx)("h2",{className:"expenses-list__fallback",children:"No Expenses Found."}):Object(i.jsx)("ul",{className:"expense-list",children:e.transactions.map((function(e){return Object(i.jsx)(o,{id:e.id,title:e.title,amount:e.amount,date:e.date},e.id)}))})}),b=n(8),x=n(9),v=(n(22),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(i.jsxs)("div",{className:"chart-bar",children:[Object(i.jsx)("div",{className:"chart-bar__inner",children:Object(i.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(i.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),O=(n(23),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(x.a)(t));return Object(i.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(i.jsx)(v,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(b.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(i.jsx)(O,{dataPoints:n})};var m=function(e){var t=Object(l.useState)("2021"),n=Object(s.a)(t,2),a=n[0],c=n[1],j=e.data.filter((function(e){if(e.date.getFullYear().toString()===a)return e}));return Object(i.jsx)("li",{children:Object(i.jsxs)(r,{className:"expenses",children:[Object(i.jsx)(u,{selected:a,onFilterredYear:function(e){c(e)}}),Object(i.jsx)(h,{expenses:j}),Object(i.jsx)(d,{transactions:j})]})})},p=n(6),f=(n(24),function(e){var t=Object(l.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],r=Object(l.useState)(""),u=Object(s.a)(r,2),j=u[0],o=u[1],d=Object(l.useState)(""),b=Object(s.a)(d,2),x=b[0],v=b[1];return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:a,date:new Date(x),amount:j};e.onSaveNewExpense(n),v(""),c(""),o("")},children:[Object(i.jsxs)("div",{className:"new-expense__controls",children:[Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Title"}),Object(i.jsx)("input",{ref:"name",type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Amount"}),Object(i.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:j,onChange:function(e){o(e.target.value)}})]}),Object(i.jsxs)("div",{className:"new-expense__control",children:[Object(i.jsx)("label",{children:"Date"}),Object(i.jsx)("input",{type:"date",min:"2019-0101",max:"2022-12-31",value:x,onChange:function(e){v(e.target.value)}})]})]}),Object(i.jsxs)("div",{className:"new-expense__actions",children:[Object(i.jsx)("button",{className:"button",onClick:e.closeForm,children:"Cancel"}),Object(i.jsx)("button",{className:"sumbit",children:"Add Expense"})]})]})}),N=(n(25),function(e){var t=Object(l.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(i.jsxs)("div",{className:"new-expense",children:[!a&&Object(i.jsx)("button",{onClick:function(){return c(!0)},children:"Add New Expense"}),a&&Object(i.jsx)(f,{onSaveNewExpense:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onNewExpense(n),c(!1)},closeForm:function(){return c(!1)}})]})}),_=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450.09,date:new Date(2021,5,12)}];var g=function(){var e=Object(l.useState)(_),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:"head-h2",children:"My React Expenses Component!"}),Object(i.jsx)(N,{onNewExpense:function(e){a((function(t){return[e].concat(_)}))}}),Object(i.jsx)(m,{data:n})]})};c.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.352b9c1b.chunk.js.map