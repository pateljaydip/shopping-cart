(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[20],{79:function(e,t,c){"use strict";c.r(t);var r=c(8),a=c.n(r),s=c(2),n=c(12),i=c(3),l=c(1),o=c(4),u=c(5),d=c(14),b=c(0);t.default=function(){var e=Object(u.b)(),t=Object(i.a)(e,2),c=t[0].isAdmin,r=t[1],j=Object(l.useState)([]),p=Object(i.a)(j,2),f=p[0],h=p[1],x=Object(l.useState)([]),O=Object(i.a)(x,2),m=O[0],v=O[1],y=Object(l.useState)({}),g=Object(i.a)(y,2),k=g[0],w=g[1],S=Object(l.useRef)(),_=Object(l.useRef)({});function P(){return(P=Object(n.a)(a.a.mark((function e(){var t,c,n,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(),e.next=3,Object(d.a)("/api/orgs");case 3:if(t=e.sent,c=t.status,n=t.data,i=t.message,console.log("[orgs] status(".concat(c,") message(").concat(i,") SignupDetails loadPage():"),n),c){e.next=11;break}return r({type:"USER_LOGOUT",message:i}),e.abrupt("return");case 11:Object.keys(n).forEach((function(e){_.current[e]&&(_.current[e].value=n[e]||"")})),Object.keys(n.financial).forEach((function(e){_.current["f_".concat(e)]&&(_.current["f_".concat(e)].value=n.financial[e])})),w(Object(s.a)({},n)),v(n.financial.currencyISO);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(){return K.apply(this,arguments)}function K(){return(K=Object(n.a)(a.a.mark((function e(){var t,c,s,n,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)("/api/financial/currencies");case 2:if(t=e.sent,c=t.status,s=t.currencies,n=t.message,c){e.next=9;break}return r({type:"ALERT_MESSAGE",message:n}),e.abrupt("return");case 9:i=Object.keys(s).map((function(e){return"".concat(s[e]," (").concat(e,")")})),h(i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(n.a)(a.a.mark((function e(t){var c,n,i,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),S.current.checkValidity()){e.next=5;break}return S.current.classList.add("was-validated"),console.log(".. !x failed validation, returning."),e.abrupt("return");case 5:return c=Object(s.a)({},k),Object.keys(_.current).forEach((function(e){"f_"===e.substr(0,2)?(console.log("saveData.financial:",c.financial),console.log("saveData.financial[".concat(e.substr(2),"] = '").concat(_.current[e].value,"'")),c.financial[e.substr(2)]=_.current[e]?_.current[e].value:""):c[e]=_.current[e]?_.current[e].value:""})),e.next=9,Object(d.a)("/api/orgs","put",c);case 9:if(n=e.sent,i=n.status,l=n.message,i){e.next=15;break}return r({type:"ALERT_MESSAGE",message:l}),e.abrupt("return");case 15:r({type:"USER_SESSION_ADMIN",data:{org:c},message:l}),w(Object(s.a)({},c)),S.current.classList.remove("was-validated");case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(l.useEffect)((function(){c&&function(){P.apply(this,arguments)}()}),[c]),Object(b.jsx)("form",{ref:S,id:"mainForm",encType:"multipart/form-data",method:"post",children:Object(b.jsxs)("div",{class:"card",children:[Object(b.jsx)("div",{class:"card-header",children:Object(b.jsx)("h4",{children:"Account Settings"})}),Object(b.jsxs)("div",{class:"card-body",children:[Object(b.jsx)("div",{class:"card-subtitle pb-4",children:Object(b.jsxs)("ul",{class:"nav nav-pills card-header-tabs",children:[Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)(o.c,{to:"/admin/settings/user",className:"nav-link",activeClassName:"active",children:"Profile"})}),Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)(o.c,{to:"/admin/settings/org",className:"nav-link",activeClassName:"active",children:"Organization"})}),Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)(o.c,{to:"/admin/settings/affiliate",className:"nav-link",activeClassName:"active",children:"Affiliate Invites"})}),Object(b.jsx)("li",{class:"nav-item",children:Object(b.jsx)(o.c,{to:"/admin/settings/financial",className:"nav-link",activeClassName:"active",children:"Financial"})})]})}),Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"timezone",children:"Base Currency"}),Object(b.jsxs)("div",{class:"input-group mb-3",children:[Object(b.jsx)("input",{ref:function(e){return _.current.f_currencyDesc=e},onChange:function(e){var t=e.target.value,c=t.substr(t.length-4,3);v(c),w(Object(s.a)(Object(s.a)({},k),{financial:{currencyISO:c}}))},id:"currency",list:"currencyList",type:"text",class:"form-control",pattern:"[\\w() ]{10,}",placeholder:"USD",required:!0}),Object(b.jsxs)("span",{class:"input-group-text",children:[Object(b.jsx)("i",{class:"fas fa-money-bill-wave-alt"}),"\xa0",m]})]}),Object(b.jsx)("div",{class:"invalid-feedback",children:"Please choose the key currency you are using."}),Object(b.jsx)("datalist",{id:"currencyList",children:f.map((function(e){return Object(b.jsx)("option",{value:e})}))})]}),Object(b.jsxs)("div",{class:"mb-5",children:[Object(b.jsx)("label",{for:"taxRate",class:"form-label",children:"Default Tax Name & Rate"}),Object(b.jsxs)("div",{class:"input-group mb-3",children:[Object(b.jsx)("input",{ref:function(e){return _.current.f_taxName=e},id:"taxName",type:"text",class:"form-control",placeholder:"Sales Tax"}),Object(b.jsx)("input",{ref:function(e){return _.current.f_taxRate=e},id:"taxRate",type:"text",class:"form-control",pattern:"[0-9\\.]{0,4}",placeholder:"13"}),Object(b.jsx)("span",{class:"input-group-text",children:"%"})]}),Object(b.jsx)("div",{class:"invalid-feedback",children:"If online payments enabled, payment processor tax rate is used. This tax rate is shown in the initial guidance pricing, most useful when no payment processor enabled, for onsite payment."})]}),Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsxs)("h4",{children:["Online Payments ",Object(b.jsx)("i",{class:"fab fa-cc-stripe text-warning"})]}),Object(b.jsxs)("div",{class:"form-check text-muted",children:[Object(b.jsx)("input",{onClick:function(){return w(Object(s.a)(Object(s.a)({},k),{},{isRequireOnline:!k.isRequireOnline}))},defaultChecked:k.isRequireOnline,id:"isRequireOnline",class:"form-check-input",type:"checkbox"}),Object(b.jsx)("label",{class:"form-check-label text-primary",for:"isRequireOnline",children:Object(b.jsx)("b",{children:"Require Order Pre-Payments"})})]}),Object(b.jsxs)("div",{class:"alert alert-warning",children:["To receive payments, you'll need to register on Stripe:",Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"https://dashboard.stripe.com/register",tabIndex:"-1",rel:"noreferrer",target:"_blank",children:"dashboard.stripe.com/register"})]})]}),Object(b.jsxs)("div",{className:k.isRequireOnline?"":"d-none",children:[k.isRequireOnline,Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"stripePubKey",class:"form-label",children:"Stripe Publishable Key"}),Object(b.jsx)("input",{ref:function(e){return _.current.f_stripePubKey=e},id:"stripePubKey",type:"text",class:"form-control",pattern:"[\\w_]{24,}",placeholder:"ex. pk_52IIQ5TFksB71gtFmTQuyIG2knRZNqhFDwOL10JhcjUxYZ",required:!0}),Object(b.jsxs)("div",{class:"invalid-feedback",children:["Please register with Stripe and put the ",Object(b.jsx)("b",{children:"public"})," key in here."]})]}),Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"stripePrivKey",class:"form-label",children:"Stripe Private Key"}),Object(b.jsx)("input",{ref:function(e){return _.current.f_stripePrivKey=e},id:"stripePrivKey",type:"password",class:"form-control",pattern:"[\\w_]{24,}",required:!0}),Object(b.jsxs)("div",{class:"invalid-feedback",children:["Please register with Stripe and put the ",Object(b.jsx)("b",{children:"private"})," (secret) key in here."]})]}),Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"stripeTaxKey",class:"form-label",children:"Stripe Tax-Rate Key(s)"}),Object(b.jsx)("input",{ref:function(e){return _.current.f_stripeTaxKey=e},id:"stripeTaxKey",type:"text",class:"form-control",pattern:"[\\w_]{24,}",placeholder:"ex. txr_23e8VNkqrFDwOL10JhcjUxYZ",required:!0}),Object(b.jsxs)("div",{class:"invalid-feedback",children:["Enter the Stripe key for the tax code(s). If one code given, it will be applied to all; if multiple given, it will match the code to the buyers shipping location or credit-card location. See: ",Object(b.jsx)("a",{href:"https://stripe.com/docs/payments/checkout/taxes",target:"_blank",rel:"noreferrer",children:"https://stripe.com/docs/payments/checkout/taxes"})]})]}),Object(b.jsxs)("div",{class:"mb-3",children:[Object(b.jsx)("label",{for:"stripeProductKey",class:"form-label",children:"Product Item Key"}),Object(b.jsx)("input",{ref:function(e){return _.current.f_stripeProductKey=e},id:"stripeProductKey",type:"text",class:"form-control",pattern:"[\\w_]{14,}",placeholder:"ex. prod_J1njkdj6m0m8Yg",required:!0}),Object(b.jsxs)("div",{class:"invalid-feedback",children:["In the Stripe ",Object(b.jsx)("u",{children:"Products"})," menu create a product (and give it a name 'Order Total', price $1, no description)"]})]})]})]}),Object(b.jsx)("div",{class:"card-footer",children:Object(b.jsx)("button",{onClick:function(e){return N.apply(this,arguments)},class:"btn btn-primary mx-1",children:"Update Financial"})})]})})}}}]);
//# sourceMappingURL=20.7b59ab6e.chunk.js.map