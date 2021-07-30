(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),i=n(3),l=n.n(i),r=(n(8),n(9),n(10),n(0));var o=({totalPosts:t,likedPosts:e})=>Object(r.jsxs)("div",{className:"app-header d-flex",children:[Object(r.jsx)("h2",{children:"UserName"}),Object(r.jsxs)("h3",{children:[t," posts, ",e," liked"]})]});n(12);class c extends s.Component{constructor(t){super(t),this.state={inputValue:""},this.changeInputHandler=this.changeInputHandler.bind(this)}changeInputHandler(t){this.setState((()=>({inputValue:t.target.value}))),this.props.onChangeInput(t.target.value)}render(){return Object(r.jsx)("input",{type:"text",className:"form-control search-input",name:"search-panel",placeholder:"Find Post",value:this.state.inputValue,onChange:this.changeInputHandler})}}var d=c;n(13);const h=[{title:"All",filterValue:"all"},{title:"Liked",filterValue:"like"}];var u=({filter:t,onFilterSelect:e})=>{const n=h.map((({title:n,filterValue:s})=>{const a=s===t?"btn-secondary":"btn-outline-secondary";return Object(r.jsx)("button",{type:"button",className:`btn ${a}`,onClick:()=>e(s),children:n},n+Math.random().toFixed(10))}));return Object(r.jsx)("div",{className:"btn-group",children:n})},p=n.p+"static/media/star-fill.f291972e.svg",m=n.p+"static/media/trash-fill.bec657fd.svg",b=n.p+"static/media/heart-fill.41ffa23d.svg";n(14);var g=({title:t,important:e,like:n,onRemovePost:s,onToggleImportant:a,onToggleLiked:i})=>{let l="app-list-item d-flex justify-content-between";return e&&(l+=" important"),n&&(l+=" like"),Object(r.jsxs)("li",{className:l,children:[Object(r.jsx)("span",{className:"app-list-item-label",onClick:i,children:t}),Object(r.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(r.jsx)("button",{type:"button",className:"btn-star btn-sm",onClick:a,children:Object(r.jsx)("img",{src:p,alt:"#"})}),Object(r.jsx)("button",{type:"button",className:"btn-trash btn-sm",onClick:s,children:Object(r.jsx)("img",{src:m,alt:"#"})}),Object(r.jsx)("button",{type:"button",className:"btn-heart btn-sm",children:Object(r.jsx)("img",{src:b,alt:"#"})})]})]})};n(15);var j=({posts:t,onRemovePost:e,onToggleImportant:n,onToggleLiked:s})=>{const a=t.filter((t=>"object"===typeof t&&Object.keys(t).length>0)).map((t=>{const{id:a,...i}=t;return Object(r.jsx)(g,{...i,onRemovePost:()=>e(a),onToggleImportant:()=>n(a),onToggleLiked:()=>s(a)},a)}));return Object(r.jsx)("ul",{className:"app-list list-group",children:a})};n(16);class f extends s.Component{constructor(t){super(t),this.state={formInputValue:""},this.changeInputHandler=this.changeInputHandler.bind(this),this.submitFormHandler=this.submitFormHandler.bind(this)}changeInputHandler(t){this.setState((()=>({formInputValue:t.target.value})))}submitFormHandler(t){t.preventDefault(),this.state.formInputValue&&(this.props.onSubmitAddPost(this.state.formInputValue),this.setState((()=>({formInputValue:""}))))}render(){return Object(r.jsxs)("form",{className:"bottom-panel d-flex",onSubmit:this.submitFormHandler,children:[Object(r.jsx)("input",{type:"text",placeholder:"What are you thinking right now?",className:"form-control new-post-label",onChange:this.changeInputHandler,value:this.state.formInputValue}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add Post"})]})}}var x=f;const H=[{title:"Very Short Text",important:!0,like:!1,id:Math.random()},{title:"Very Medium Title Record Text",important:!1,like:!0,id:Math.random()},{title:"Very very Long long Text Title Record",important:!1,like:!1,id:Math.random()}];n(17);class I extends s.Component{constructor(t){super(t),this.state={data:H,searchPanelInputValue:"",postStatusFilterValue:"all"},this.addPostHandler=this.addPostHandler.bind(this),this.removePostHandler=this.removePostHandler.bind(this),this.changeInputHandler=this.changeInputHandler.bind(this),this.toggleImportantHandler=this.toggleImportantHandler.bind(this),this.toggleLikedHandler=this.toggleLikedHandler.bind(this),this.filterSelectHandler=this.filterSelectHandler.bind(this)}addPostHandler(t){const e={title:t,important:!1,like:!1,id:Math.random()};this.setState((({data:t})=>({data:[...t,e]})))}removePostHandler(t){this.setState((({data:e})=>({data:[...e].filter((e=>e.id!==t))})))}findPost(t,e){return 0===e.length?t:t.filter((t=>t.title.toLowerCase().indexOf(e.toLowerCase())>-1))}changeInputHandler(t){this.setState((()=>({searchPanelInputValue:t})))}changeStateByProp(t,e){this.setState((({data:n})=>{const s=n.findIndex((e=>e.id===t)),a=n[s],i={...a,[e]:!a[e]},l=[...n];return l.splice(s,1,i),{data:l}}))}toggleImportantHandler(t){this.changeStateByProp(t,"important")}toggleLikedHandler(t){this.changeStateByProp(t,"like")}filterPosts(t,e){switch(e){case"like":return t.filter((t=>t.like));default:return t}}filterSelectHandler(t){this.setState((()=>({postStatusFilterValue:t})))}render(){const{data:t,searchPanelInputValue:e,postStatusFilterValue:n}=this.state,s=t.length,a=[...t].filter((t=>t.like)).length,i=this.filterPosts(this.findPost(t,e),n);return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)("h1",{children:"React-favorite-list"}),Object(r.jsx)("hr",{}),Object(r.jsx)(o,{totalPosts:s,likedPosts:a}),Object(r.jsxs)("div",{className:"search-panel d-flex",children:[Object(r.jsx)(d,{onChangeInput:this.changeInputHandler}),Object(r.jsx)(u,{filter:n,onFilterSelect:this.filterSelectHandler})]}),Object(r.jsx)(j,{posts:i,onRemovePost:this.removePostHandler,onToggleImportant:this.toggleImportantHandler,onToggleLiked:this.toggleLikedHandler}),Object(r.jsx)(x,{onSubmitAddPost:this.addPostHandler})]})}}var O=I;l.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.d0c287eb.chunk.js.map