(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{228:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return f}));var n=a(238),r=a(0),o=a.n(r),l=a(229),s=a.n(l),i=a(111),u=function(e){e.input;var t=e.meta,a=Object(n.a)(e,["input","meta"]),r=t.touched&&t.error;return o.a.createElement("div",{className:r&&s.a.formControl+" "+s.a.error},a.children,r&&o.a.createElement("span",{className:s.a.formControl+" "+s.a.error},t.error))},c=function(e){var t=e.input,a=(e.meta,Object(n.a)(e,["input","meta"]));return o.a.createElement(u,e,o.a.createElement("textarea",Object.assign({},t,a)))},m=function(e){var t=e.input,a=(e.meta,Object(n.a)(e,["input","meta"]));return o.a.createElement(u,e,o.a.createElement("input",Object.assign({},t,a)))},f=function(e,t,a,n,r,l){return o.a.createElement("span",null," ",o.a.createElement(i.a,{placeholder:e,name:t,component:a,validate:n,type:r})," ",l)}},229:function(e,t,a){e.exports={formControl:"FormsControls_formControl__13IAy",error:"FormsControls_error__KVCLW",formSummaryError:"FormsControls_formSummaryError__3RxXw"}},230:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){if(!e)return"Filed is required"},r=function(e){return function(t){if(t.length>e)return"Max lenght is ".concat(e," symbols")}}},231:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(32),r=a(33),o=a(35),l=a(34),s=a(36),i=a(0),u=a.n(i),c=a(21),m=a(15),f=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(o.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){return this.props.isAuth?u.a.createElement(e,this.props):u.a.createElement(c.a,{to:"/login"})}}]),a}(u.a.Component);return Object(m.b)(f)(t)}},237:function(e,t,a){e.exports=a.p+"static/media/defaultAva.98ebb800.png"},252:function(e,t,a){e.exports={formSummaryError:"Data_formSummaryError__3ZhFq"}},296:function(e,t,a){},297:function(e,t,a){e.exports={userinfo:"UserInfo_userinfo__3eDdA",data:"UserInfo_data__2GpE7"}},298:function(e,t,a){e.exports={avatar:"Avatar_avatar__VQ-aa"}},299:function(e,t,a){e.exports={posts:"MyPosts_posts__3tZ1c",item:"MyPosts_item__R6Jlo",mypost:"MyPosts_mypost__3UHfk",createnewpost:"MyPosts_createnewpost__2vxrl"}},300:function(e,t,a){e.exports={item:"Post_item__ihtu9"}},301:function(e,t,a){e.exports=a.p+"static/media/logo.9b2a91dd.svg"},304:function(e,t,a){"use strict";a.r(t);var n=a(32),r=a(33),o=a(35),l=a(34),s=a(36),i=a(0),u=a.n(i),c=a(296),m=a.n(c);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],n=!0,r=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(i){r=!0,o=i}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}return a}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var p=a(297),b=a.n(p),E=a(298),d=a.n(E);var v=function(e){return u.a.createElement("div",{className:d.a.avatar},u.a.createElement("img",{src:e.avatar}))},h=a(252),O=a.n(h);function g(e){var t=e.profile,a=e.isOwner,n=e.goToEditMode;return u.a.createElement("div",{className:O.a.data},u.a.createElement("b",null,"Name: "),t.fullName," ",u.a.createElement("br",null),u.a.createElement("b",null,"About me: "),t.aboutMe,u.a.createElement("br",null),u.a.createElement("b",null,"Contacts: "),Object.keys(t.contacts).map((function(e){return u.a.createElement(j,{key:e,contactTitle:e,contactValue:t.contacts[e]})})),u.a.createElement("div",null,u.a.createElement("b",null,"Looking for a job: "),t.lookingForAJob?u.a.createElement("span",null,"Yes"):u.a.createElement("span",null,"No")," ",u.a.createElement("br",null),t.lookingForAJob&&u.a.createElement("b",null,"My professional skills: ")+t.lookingForAJobDescription),a&&u.a.createElement("button",{onClick:n},"Edit"))}var j=function(e){var t=e.contactTitle,a=e.contactValue;return u.a.createElement("div",null,u.a.createElement("b",null,t," - ")," ",a," ")},y=a(112),_=a(228),k=a(230),P=Object(k.a)(15),S=Object(k.a)(30),C=Object(y.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,a=e.profile,n=e.error;return u.a.createElement("form",{onSubmit:t},u.a.createElement("b",null,"Name: ")," ",Object(_.a)("FullName","fullName",_.b,[k.b,P],""),u.a.createElement("b",null,"About me: ")," ",u.a.createElement("br",null),Object(_.a)("","aboutMe",_.b,[k.b,S],""),u.a.createElement("b",null,"Contacts: "),Object.keys(a.contacts).map((function(e){return u.a.createElement("div",{className:O.a.contact},u.a.createElement("b",null,e,":"),Object(_.a)(e,"contacts."+e,_.b,[k.b],""))})),u.a.createElement("b",null,"Looking for a job: "),Object(_.a)("","lookingForAJob",_.b,[],"checkbox"),u.a.createElement("b",null,"My professional skills: "),Object(_.a)("My professional skills:","lookingForAJobDescription",_.c,[k.b,S],"checkbox"),n&&u.a.createElement("div",{className:O.a.formSummaryError},n),u.a.createElement("button",null,"Save"))})),w=a(58),N=a(237),A=a.n(N);var x=function(e){var t=f(Object(i.useState)(!1),2),a=t[0],n=t[1],r=f(Object(i.useState)(e.status),2),o=r[0],l=r[1];return Object(i.useEffect)((function(){l(e.status)}),[e.status]),u.a.createElement("div",null,!a&&u.a.createElement("div",null,u.a.createElement("b",null,"Status: "),u.a.createElement("span",{onDoubleClick:function(){n(!0)}},e.status||"NO STATUS")),a&&u.a.createElement("div",null,u.a.createElement("b",null,"Status: "),u.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),e.putStatus(o)},value:o})))};var F=function(e){var t=e.savePhoto,a=e.profile,n=e.putStatus,r=e.status,o=e.isOwner,l=e.saveProfile,s=f(Object(i.useState)(!1),2),c=s[0],m=s[1],p=function(){m(!1)};if(a){return u.a.createElement("div",null,u.a.createElement("div",{className:b.a.userinfo},u.a.createElement(v,{avatar:a.photos.large||A.a}),u.a.createElement("div",null,c?u.a.createElement(C,{initialValues:a,onSubmit:function(e){l(e).then((function(){p()}))},profile:a,goToEditMode:p}):u.a.createElement(g,{profile:a,isOwner:o,goToEditMode:function(){m(!0)}})),u.a.createElement("div",null,o&&u.a.createElement("input",{type:"file",onChange:function(e){return function(e){t(e.target.files[0])}(e)}})),u.a.createElement("br",null),u.a.createElement("div",null,u.a.createElement(x,{putStatus:n,status:r}))))}return u.a.createElement(w.a,null)},M=a(59),T=a(299),D=a.n(T),U=a(300),J=a.n(U),I=a(301),L=a.n(I);var V=function(e){return u.a.createElement("div",{className:J.a.item},u.a.createElement("img",{src:L.a}),e.message,u.a.createElement("div",null,u.a.createElement("span",null,e.likesCount," Like "),u.a.createElement("span",null,e.disslikesCount," DissLike")))},q=Object(k.a)(10),z=u.a.memo((function(e){console.log("render");var t=e.postData.map((function(e){return u.a.createElement(V,{key:e.id,message:e.message,likesCount:e.likesCount,disslikesCount:e.disslikesCount})}));return u.a.createElement("div",{className:D.a.mypost},u.a.createElement("div",{className:D.a.posts},u.a.createElement("h3",null,"My posts"),u.a.createElement(R,{onSubmit:function(t){e.addPost(t.newPost)}})),u.a.createElement("div",{className:D.a.item},t))})),R=Object(y.a)({form:"posAddNewPost"})((function(e){return u.a.createElement("form",{onSubmit:e.handleSubmit},u.a.createElement("div",{className:D.a.item_new_post},Object(_.a)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435","newPost",_.c,[k.b,q],""),u.a.createElement("div",null,u.a.createElement("button",null,"Create new post"))))})),Z=z,B=a(15),G=Object(B.b)((function(e){return{postData:e.profilePage.postData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(M.a)(t))}}}))(Z);var H=function(e){return u.a.createElement("div",{className:m.a.profile},u.a.createElement(F,{saveProfile:e.saveProfile,savePhoto:e.savePhoto,isOwner:e.isOwner,putStatus:e.putStatus,profile:e.profile,status:e.status}),u.a.createElement(G,null))},K=a(21),Q=a(231),W=a(18),X=function(e){function t(){return Object(n.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userid;e||(e=this.props.autorizedUserid),this.props.setUserProfileThunkCreator(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.userid!==e.match.params.userid&&this.refreshProfile()}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,this.props.isFetching?u.a.createElement(w.a,null):null,u.a.createElement(H,Object.assign({},this.props,{saveProfile:this.props.saveProfile,savePhoto:this.props.savePhoto,isOwner:!this.props.match.params.userid,profile:this.props.profile,status:this.props.status,putStatus:this.props.putStatus})))}}]),t}(u.a.Component);t.default=Object(W.d)(Object(B.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorizedUserid:e.auth.userID,isFetching:e.profilePage.isFetching}}),{saveProfile:M.f,setUserProfileThunkCreator:M.g,getStatus:M.c,putStatus:M.d,savePhoto:M.e}),K.f,Q.a)(X)}}]);
//# sourceMappingURL=4.cf7e2989.chunk.js.map