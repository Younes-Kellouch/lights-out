(this["webpackJsonplights-out"]=this["webpackJsonplights-out"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),r=n(1),c=n(7),i=n.n(c),o=(n(14),n(2)),a=n(3),l=n(5),u=n(4),h=n(8),d=(n(15),function(e){var t="Cell"+(e.isLit?" Cell-lit":"");return Object(s.jsx)("td",{className:t,onClick:function(){e.clicked(e.indexRow,e.indexCol)}})}),b=(n(16),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={hasWon:!1,cellsLit:e.createBoard()},e.flippCellsAround=function(t,n){var s=e.props.nbrRows,r=e.props.nbrColumns,c=Object(h.a)(e.state.cellsLit);function i(e,t){e>=0&&e<s&&t>=0&&t<r&&(c[e][t]=!c[e][t])}i(t,n),i(t+1,n),i(t-1,n),i(t,n+1),i(t,n-1);var o=c.every((function(e){return e.every((function(e){return!e}))}));e.setState({hasWon:o,cellsLit:c})},e}return Object(a.a)(n,[{key:"createBoard",value:function(){for(var e=[],t=0;t<this.props.nbrRows;t++){for(var n=[],s=0;s<this.props.nbrColumns;s++)n.push(Math.random()<this.props.chanceToBeLit);e.push(n)}return e}},{key:"render",value:function(){if(this.state.hasWon)return Object(s.jsxs)("div",{className:"winner",children:[Object(s.jsx)("div",{className:"neon-orange",children:"YOU"}),Object(s.jsx)("div",{className:"neon-blue",children:"WON !"})]});for(var e=[],t=0;t<this.props.nbrRows;t++){for(var n=[],r=0;r<this.props.nbrColumns;r++)n.push(Object(s.jsx)(d,{isLit:this.state.cellsLit[t][r],flippCellsAround:this,indexRow:t,indexCol:r,clicked:this.flippCellsAround,nbrRows:this.props.nbrRows},t+"-"+r));e.push(Object(s.jsx)("tr",{children:n},t))}return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"Board-Title",children:[Object(s.jsx)("div",{className:"neon-orange",children:"Lights"}),Object(s.jsx)("div",{className:"neon-blue",children:"Out"})]}),Object(s.jsx)("table",{className:"Board",children:Object(s.jsx)("tbody",{children:e})})]})}}]),n}(r.Component));b.defaultProps={nbrRows:5,nbrColumns:5,chanceToBeLit:.25};var p=b,j=(n(17),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)(p,{})})}}]),n}(r.Component));i.a.render(Object(s.jsx)(j,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.633a1118.chunk.js.map