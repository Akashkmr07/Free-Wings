"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[804],{804:(w,c,n)=>{n.r(c),n.d(c,{ReviewsPageModule:()=>R});var g=n(177),u=n(4341),s=n(4742),o=n(70),e=n(4438),p=n(1391);const l=()=>["/hotels"],v=()=>[];function d(t,i){if(1&t&&e.nrm(0,"ion-icon",11),2&t){const r=i.index,a=e.XpG().$implicit;e.Y8G("name",r<a.rating?"star":"star-outline")("color",r<a.rating?"warning":"")}}function h(t,i){if(1&t&&(e.j41(0,"ion-item")(1,"ion-avatar",1),e.nrm(2,"img",8),e.k0s(),e.j41(3,"ion-label")(4,"h2"),e.EFF(5),e.k0s(),e.j41(6,"div",9),e.DNE(7,d,1,2,"ion-icon",10),e.k0s(),e.j41(8,"p"),e.EFF(9),e.k0s()()()),2&t){const r=i.$implicit;e.R7$(2),e.Y8G("src",r.userImage,e.B4B),e.R7$(3),e.JRh(r.userName),e.R7$(2),e.Y8G("ngForOf",e.lJ4(4,v).constructor(5)),e.R7$(2),e.JRh(r.comment)}}const f=[{path:"",component:(()=>{var t;class i{constructor(a){this.route=a,this.reviews=[],this.selectedHotelId=null,this.hotels=[{id:1,reviews:[{userName:"Akash",rating:5,comment:"Amazing stay!",userImage:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.741767623.1696865084&semt=ais_hybrid"},{userName:"Rohan",rating:4,comment:"Great service!",userImage:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.741767623.1696865084&semt=ais_hybrid"}]},{id:2,reviews:[{userName:"Deepanshu",rating:3,comment:"Average experience.",userImage:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.741767623.1696865084&semt=ais_hybrid"},{userName:"Rishav",rating:5,comment:"Loved it!",userImage:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.741767623.1696865084&semt=ais_hybrid"},{userName:"om",rating:3,comment:"Average experience.",userImage:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.741767623.1696865084&semt=ais_hybrid"},{userName:"Aditya",rating:5,comment:"Loved it!",userImage:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.741767623.1696865084&semt=ais_hybrid"}]},{id:3,reviews:[{userName:"Deepanshu",rating:3,comment:"Average experience.",userImage:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.741767623.1696865084&semt=ais_hybrid"},{userName:"Rishav",rating:5,comment:"Loved it!",userImage:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.741767623.1696865084&semt=ais_hybrid"},{userName:"om",rating:3,comment:"Average experience.",userImage:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.741767623.1696865084&semt=ais_hybrid"},{userName:"Aditya",rating:5,comment:"Loved it!",userImage:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.741767623.1696865084&semt=ais_hybrid"}]},{id:4,reviews:[{userName:"Deepanshu",rating:3,comment:"Average experience.",userImage:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.741767623.1696865084&semt=ais_hybrid"},{userName:"Rishav",rating:5,comment:"Loved it!",userImage:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.741767623.1696865084&semt=ais_hybrid"},{userName:"om",rating:3,comment:"Average experience.",userImage:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.741767623.1696865084&semt=ais_hybrid"},{userName:"Aditya",rating:5,comment:"Loved it!",userImage:"https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.1.741767623.1696865084&semt=ais_hybrid"}]}]}ngOnInit(){this.route.params.subscribe(a=>{this.selectedHotelId=+a.id;const m=this.hotels.find(y=>y.id===this.selectedHotelId);m&&(this.reviews=m.reviews)})}getStars(a){return Array(Math.round(a)).fill(1)}getEmptyStars(a){return Array(5-Math.round(a)).fill(1)}}return(t=i).\u0275fac=function(a){return new(a||t)(e.rXU(o.nX))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-reviews"]],decls:14,vars:5,consts:[[3,"translucent"],["slot","start"],["defaultHref","/hotels","text","Back","icon","arrow-back-outline",3,"routerLink"],[2,"font-weight","bold","font-size","18px","color","#0099ff","text-align","center"],["src","../../assets/icon2.png","height","40px",2,"margin-left","-20px"],[3,"fullscreen"],[4,"ngFor","ngForOf"],[1,"mt-5"],["alt","User Image",3,"src"],[1,"star-rating"],["class","star-icon",3,"name","color",4,"ngFor","ngForOf"],[1,"star-icon",3,"name","color"]],template:function(a,m){1&a&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title",3),e.nrm(5,"img",4),e.EFF(6," FREE WINGS "),e.k0s()()(),e.j41(7,"ion-content",5)(8,"ion-list"),e.DNE(9,h,10,5,"ion-item",6),e.k0s(),e.nrm(10,"br")(11,"br"),e.j41(12,"ion-footer",7),e.nrm(13,"app-footer"),e.k0s()()),2&a&&(e.Y8G("translucent",!0),e.R7$(3),e.Y8G("routerLink",e.lJ4(4,l)),e.R7$(4),e.Y8G("fullscreen",!0),e.R7$(2),e.Y8G("ngForOf",m.reviews))},dependencies:[g.Sq,s.mC,s.QW,s.W9,s.M0,s.eU,s.iq,s.uz,s.he,s.nf,s.BC,s.ai,s.el,s.N7,o.Wk,p.n],styles:[".dropdown-menu[_ngcontent-%COMP%]{display:none}.dropdown-menu-visible[_ngcontent-%COMP%]{display:block}.star-rating[_ngcontent-%COMP%]{display:flex}.star-icon[_ngcontent-%COMP%]{font-size:20px;margin-right:2px}"]}),i})()}];let j=(()=>{var t;class i{}return(t=i).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[o.iI.forChild(f),o.iI]}),i})();var b=n(5295);let R=(()=>{var t;class i{}return(t=i).\u0275fac=function(a){return new(a||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[g.MD,u.YN,s.bv,j,b.n]}),i})()}}]);