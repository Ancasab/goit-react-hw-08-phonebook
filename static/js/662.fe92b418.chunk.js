"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[662],{1662:function(n,e,r){r.r(e),r.d(e,{default:function(){return Dn}});var i,t,o,a,c,s,l,d,p,u,x,f,b,g,h,m,Z,v,w,k,j,y,z,C,F,N,E,A,P,B,D,I,L,M,S,Y=r(9439),_=r(2791),X=r(4420),$=r(1892),q=function(n){return n.contacts.items},K=function(n){return n.contacts.isLoading},O=function(n){return n.contacts.error},R=function(n){return n.filters},T=r(168),G=r(7526),J=G.Z.section(i||(i=(0,T.Z)(["\nmargin: auto;\npadding: 30px 0;\nbackground: radial-gradient(circle, #FFD700, #FF6B6B, #3E8AC5);\nborder: 2px solid red; \nborder-radius: 15px; \nbox-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); \n"]))),W=G.Z.h2(t||(t=(0,T.Z)(["\nfont-size: 37px;\ntext-align: center;\nposition: relative;\n"]))),H=r(3329),Q=function(n){var e=n.title,r=n.children;return(0,H.jsxs)(J,{children:[e&&(0,H.jsx)(W,{children:e}),r]})},U=r(3071),V=(0,G.Z)(U.Bj$)(o||(o=(0,T.Z)(["\n  width: 20px;\n  height: 20px;\n  fill: black;\n"]))),nn=G.Z.form(a||(a=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px;\n"]))),en=G.Z.label(c||(c=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 12px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),rn=G.Z.input(s||(s=(0,T.Z)(["\nwidth: 250px;\npadding: 25px 30px;\ncolor: #000000;\nbackground: #efefef;\nborder-radius: 18px;\nborder: 1px solid #efefef;\n:placeholder {\n  color: #757575;\n}\ntransition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n:hover,\n:focus {\n  border: 1px solid #000000;\n}\n"]))),tn=G.Z.button(l||(l=(0,T.Z)(["\nfont-weight: 600;\nfont-size: 20px;\ndisplay: flex;\nalign-items: center;\ngap: 14px;\nwidth: fit-content;\npadding: 10px;\nmargin-top: 15px;\nmargin-left: 15px;\nmargin-right: 20px;\nbackground-color: whitesmoke;\nborder: 1px solid black;\nborder-radius: 10px;\ncursor: pointer;\ntransition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\ntransition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\ntransition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\ntransition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n:hover,\n:focus {\n  color: red;\n  background-color: black;\n  border: 1px solid #000000;\n  > svg {\n    fill: red;\n  }\n}\n"]))),on=r(7694),an=function(n){var e=n.onCloseModal,r=(0,X.I0)(),i=(0,X.v9)(q);return(0,H.jsxs)(nn,{onSubmit:function(n){n.preventDefault();var t=n.target,o=n.target.elements.name.value,a=n.target.elements.number.value;return i.some((function(n){return n.name===o}))?alert("".concat(o," is already in your contacts.")):i.some((function(n){return n.number===a}))?alert("".concat(a," is already in your contacts.")):(r((0,$.uK)({name:o,number:a.toString()})).unwrap().then((function(n){on.Notify.success("".concat(n.name,"  has been successfully added"))})).catch((function(){on.Notify.failure("Oops something's wrong")})),e(),void t.reset())},autoComplete:"off",children:[(0,H.jsxs)(en,{children:["Name",(0,H.jsx)(rn,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Enter name",value:i.name})]}),(0,H.jsxs)(en,{children:["Number",(0,H.jsx)(rn,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter number",value:i.number})]}),(0,H.jsxs)(tn,{type:"submit",children:[(0,H.jsx)(V,{}),"New contact"]})]})},cn=r(4636),sn=G.Z.label(d||(d=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),ln=G.Z.input(p||(p=(0,T.Z)(["\nwidth: 250px;\npadding: 25px 30px;\ncolor: #000000;\nbackground: #efefef;\nborder-radius: 18px;\nborder: 1px solid #efefef;\n:placeholder {\n  \n  color: #757575;\n}\ntransition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n:hover,\n:focus {\n  border: 1px solid #000000;\n}\n"]))),dn=function(){var n=(0,X.I0)(),e=(0,X.v9)(R);return(0,H.jsx)(sn,{children:(0,H.jsx)(ln,{type:"text",name:"filter",placeholder:"Enter your contact name",value:e,onChange:function(e){var r=e.currentTarget.value;n((0,cn.p)(r))}})})},pn=(0,G.Z)(U.Xws)(u||(u=(0,T.Z)(["\n  padding: 8px;\n  width: 20px;\n  height: 20px;\n  fill: black;\n  border-radius: 50%;\n  background-color: whitesmoke;\n  &:hover,\n  &:focus {\n    background-color: black;\n    fill: red;\n    \n  }\n"]))),un=(0,G.Z)(U.DNl)(x||(x=(0,T.Z)(["\n  padding: 8px;\n  width: 20px;\n  height: 20px;\n  fill: black;\n  border-radius: 50%;\n  background-color: whitesmoke;\n  &:hover,\n  &:focus {\n    background-color: black;\n    fill: red;\n    \n  }\n"]))),xn=(0,G.Z)(U.dIY)(f||(f=(0,T.Z)(["\n  width: 50px;\n  height: 20px;\n  fill: black;\n"]))),fn=G.Z.li(b||(b=(0,T.Z)(["\nwidth: 400px;\n  display: flex;\n  flex-direction: center;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 15px;\n  padding: 20px 20px;\n  border-radius: 24px;\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);\n"]))),bn=G.Z.p(g||(g=(0,T.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin: 0;\n  font-weight: 500;\n"]))),gn=G.Z.p(h||(h=(0,T.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin: 0;\n "]))),hn=G.Z.button(m||(m=(0,T.Z)(["\nfont-weight: 600;\nfont-size: 20px;\ndisplay: flex;\nalign-items: center;\ngap: 5px;\nwidth: fit-content;\npadding: 10px;\nbackground-color: whitesmoke;\nborder: 1px solid black;\nborder-radius: 10px;\ncursor: pointer;\ntransition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\ntransition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\ntransition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\ntransition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n:hover,\n:focus {\n  color: red;\n  background-color: black;\n  border: 1px solid #000000;\n  > svg {\n    fill: red;\n  }\n}\n"]))),mn=function(n){var e=n.id,r=n.name,i=n.number,t=(0,X.I0)();return(0,H.jsxs)(fn,{children:[(0,H.jsxs)(bn,{children:[(0,H.jsx)(pn,{}),r]}),(0,H.jsxs)(gn,{children:[(0,H.jsx)(un,{}),i]}),(0,H.jsxs)(hn,{onClick:function(){return n=e,void t((0,$.GK)(n)).unwrap().then((function(n){on.Notify.success("".concat(n.name," has been deleted successfully"))})).catch((function(){on.Notify.failure("Oops something's wrong")}));var n},children:[(0,H.jsx)(xn,{}),"Delete"]})]},e)},Zn=r(5867),vn=Zn.ZP.ul(Z||(Z=(0,T.Z)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  // gap: 20px;\n"]))),wn=(Zn.ZP.li(v||(v=(0,T.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  // margin-bottom: 10px;\n"]))),Zn.ZP.p(w||(w=(0,T.Z)(["\n  display: inline-block;\n  min-width: 300px;\n"]))),Zn.ZP.p(k||(k=(0,T.Z)(["\n  font-size: 25px;\n  margin-right: 10px;\n"]))),Zn.ZP.button(j||(j=(0,T.Z)(["\n  padding: 5px 20px;\n  margin-left: 20px;  \n  font-size: 17px;\n  border-radius: 6px;\n  border: 1px solid #ccc;\n  cursor: pointer;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: #007bff;\n    color: #fff;\n  }\n  \n"]))),(0,Zn.F4)(y||(y=(0,T.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),kn=(Zn.ZP.div(z||(z=(0,T.Z)(["\n  border: 4px solid rgba(0, 0, 0, 0.1);\n  border-top-color: #333;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  margin-bottom: 20px;\n  margin-left: 70px;\n\n  animation: "," 1s ease-in-out infinite;\n"])),wn),function(){var n=(0,X.v9)(q),e=(0,X.v9)(R),r=n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}));return(0,H.jsx)(H.Fragment,{children:r.length>0&&(0,H.jsx)(vn,{children:r.map((function(n){var e=n.name,r=n.number,i=n.id;return(0,H.jsx)(mn,{id:i,name:e,number:r},i)}))})})}),jn=(0,G.Z)(U.Bj$)(C||(C=(0,T.Z)(["\n  width: 20px;\n  height: 20px;\n\n  fill: black;\n"]))),yn=G.Z.div(F||(F=(0,T.Z)(["\n  padding: 20px 20px;\n  height: 100vh;\n\n \n  background: radial-gradient(circle, #FFD700, #FF6B6B, #3E8AC5);\n"]))),zn=G.Z.div(N||(N=(0,T.Z)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 28px;\n"]))),Cn=G.Z.h2(E||(E=(0,T.Z)(["\nfont-family: 'Rubik Wet Paint', cursive; \n  font-weight: 700;\n  font-size: 50px;\n\n  margin-left: 20px;\n"]))),Fn=G.Z.div(A||(A=(0,T.Z)(["\n  display: flex;\n  margin-left: auto;\n"]))),Nn=(G.Z.form(P||(P=(0,T.Z)([""]))),G.Z.label(B||(B=(0,T.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  margin-top: 12px;\n  font-size: 16px;\n  font-weight: 500;\n"]))),G.Z.input(D||(D=(0,T.Z)(["\nwidth: 250px;\npadding: 25px 30px;\ncolor: #000000;\nbackground: #efefef;\nborder-radius: 18px;\nborder: 1px solid #efefef;\n:placeholder {\n  color: #757575;\n}\ntransition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n:hover,\n:focus {\n  border: 1px solid #000000;\n}\n"]))),G.Z.button(I||(I=(0,T.Z)(["\n  font-weight: 600;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  width: fit-content;\n  padding: 10px;\n  margin-left: 15px;\n  margin-right: 20px;\n  background-color: whitesmoke;\n  border: 1px solid black;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  :hover,\n  :focus {\n    color: red;\n    background-color: black;\n    border: 1px solid #000000;\n    > svg {\n      fill: red;\n    }\n  }\n"])))),En=G.Z.div(L||(L=(0,T.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(138.13deg, #22343c75 25.87%, #1f2e3572 100%);\n  z-index: 1200;\n"]))),An=G.Z.div(M||(M=(0,T.Z)(["\nposition: relative;\n  border-radius: 15px;\n  overflow: hidden;\n\n  max-width: calc(100vw - 50px);\n  max-height: calc(100vh - 24px);\n\n  padding-left: 2px;\n  padding-right: 2px;\n  background-color: red;\n"]))),Pn=(0,G.Z)(U.zYX)(S||(S=(0,T.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 20px;\n  color: black;\n  cursor: pointer;\n  transition: color 0.3s ease-in-out;\n\n  &:hover {\n    color: red;\n  }\n"]))),Bn=function(n){var e=n.children,r=n.onCloseModal,i=(0,_.useState)(!0),t=(0,Y.Z)(i,2),o=t[0],a=t[1];(0,_.useEffect)((function(){var n=function(n){"Escape"===n.code&&r()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[r]);return o&&(0,H.jsx)(En,{onClick:function(n){var e=n.target;n.currentTarget===e&&r()},children:(0,H.jsxs)(An,{children:[e,(0,H.jsx)(Pn,{onClick:function(){a(!1),r()},children:(0,H.jsx)(U.zYX,{})})]})})},Dn=function(){var n=(0,X.I0)(),e=(0,X.v9)(K),r=(0,X.v9)(O),i=(0,_.useState)(!1),t=(0,Y.Z)(i,2),o=t[0],a=t[1];(0,_.useEffect)((function(){n((0,$.yF)())}),[n]);var c=function(){a((function(n){return!n}))};return(0,H.jsxs)(yn,{children:[(0,H.jsxs)(Q,{children:[(0,H.jsxs)(zn,{children:[(0,H.jsx)(Cn,{children:"Your contacts:"}),(0,H.jsxs)(Fn,{children:[(0,H.jsx)(dn,{}),(0,H.jsxs)(Nn,{type:"button",onClick:c,children:[(0,H.jsx)(jn,{}),"Add New Contact"]})]})]}),e&&!r&&(0,H.jsx)("b",{children:"Request in progress"}),(0,H.jsx)(kn,{})]}),o&&(0,H.jsx)(Bn,{children:(0,H.jsx)(Q,{title:"Add New Contact",children:(0,H.jsx)(an,{onCloseModal:c})}),onCloseModal:c})]})}}}]);
//# sourceMappingURL=662.fe92b418.chunk.js.map