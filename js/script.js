const json=[{"head-li-1":"الرئيسية","head-li-2":"من نحن","head-li-3":"الخدمات","head-li-4":"تواصل معنا",about:{"about-title":"من نحن","about-text":"شركة تجارية تتمتع بمواصفات خارقة وخارجة عن الطبيعةنستطيع أن ،ـجار بكل شيء ونتمتع بسلاسة مع الزبون لا للخورفة عنا ونتمتع بربح بسيط في الرأس المال تفعل الآن هلم بك إلينا قبل مانطير شركة تجارية تتمتع بمواصفات خارقة وخارجة عن الطبيعة نستطيع أن ،ـجار بكل شيء ونتمتع بسلاسة مع الزبون لا للخورفة عنا ونتمتع بربح بسيط في الرأس المال ما تفعل الآن هلم بك إلينا قبل مانطي شركة تجارية تتمتع بمواصفات خارقة وخارجة عن الطبيعة نستطيع أن ،ـجار بكل شيء ونتمتع بسلاسة مع الزبون لا للخورفة عنا ونتمتع بربح بسيط في الرأس المال ماا تفعل الآن هلم بك إلينا قبل مانطي شركة تجارية تتمتع بمواصفات خارقة وخارجة عن الطبيعة نستطيع أن ،ـجار بكل شيء ونتمتع بسلاسة مع الزبون لا للخورفة عنا ونتمتع بربح بسيط في الرأس المال م تفعل الآن هلم بك إلينا قبل مانطي "},service:[{"service-title":"الخدمات"},{"service-item-h1":"شحن دولي","service-text":"كننا توصيلك إلىأي مكان أنت تريده كل ماهنالك كن معنا في تدويرك والذهاب","service-btn":"اطلب"},{"service-item-h1":"تجارة عامة","service-text":"كننا توصيلك إلىأي مكان أنت تريده كل ماهنالك كن معنا في تدويرك والذهاب","service-btn":"اطلب"},{"service-item-h1":"تخليص جمركي","service-text":"كننا توصيلك إلىأي مكان أنت تريده كل ماهنالك كن معنا في تدويرك والذهاب","service-btn":"اطلب"},{"service-item-h1":"إستيراد وتصدير","service-text":"كننا توصيلك إلىأي مكان أنت تريده كل ماهنالك كن معنا في تدويرك والذهاب","service-btn":"اطلب"}],contact:[{"contact-title":"تواصل معنا "},{"contact-li":"  حلب-حلب الجديدة "},{"contact-footer-1":"رياض 2020 ©جميع الحقوق محفوظة"},{"contact-footer-2":"تم تطويره بواسطة"},{"contact-btn":"تواصل معنا"},{"contact-mapweb":"خريطة الموقع"}]},{"head-li-1":"Home","head-li-2":"About","head-li-3":"Services","head-li-4":"Contact Us",about:{"about-title":"About","about-text":"Use '13 at 16:07@Phillip what does screen height have to do with anything in this instance? – charlietfl Aug 15 '13 at 16:31 the page is long, and you have a submit button at the bottom of the page, you can scroll to the submit button and stop at the bottom of the user's visible window. – Phillip Senn Aug 15 '13 at 16:57 for this, one of those things I knew but simply forgot how easy it wasUse '13 at 16:07@Phillip what does screen height have to do with anything in this instance? – charlietfl Aug 15 '13 at 16:31 the page is long, and you have a submit button at the bottom of the page, you can scroll to the submit button and stop at the bottom of the user's visible window. – Phillip Senn Aug 15 '13 at 16:57 for this, one of those things I knew but simply forgot how easy "},service:[{"service-title":"Services"},{"service-item-h1":"Customs Clearance","service-text":"Senn Aug 15 '13 at 16:07@Phillip what does screen height have to do with anything in this instance?","service-btn":"request"},{"service-item-h1":"General Trading","service-text":"Senn Aug 15 '13 at 16:07@Phillip what does screen height have to do with anything in this instance?","service-btn":"request"},{"service-item-h1":"international shipping","service-text":"Senn Aug 15 '13 at 16:07@Phillip what does screen height have to do with anything in this instance?","service-btn":"request"},{"service-item-h1":"import and export ","service-text":"Senn Aug 15 '13 at 16:07@Phillip what does screen height have to do with anything in this instance?","service-btn":"request"}],contact:[{"contact-title":"Contact Us"},{"contact-li":"aleppo-halab aljadeeda"},{"contact-footer-1":"riad 2020 ©all rights are save"},{"contact-footer-2":"It was developed by"},{"contact-btn":"Contact Us"},{"contact-mapweb":"Map Web"}]}];$(window).on("scroll load",function(){$("section").each(function(){var t;$(window).scrollTop()>=$(this).offset().top-60&&(t=$(this).attr("id"),$(".nav-item").removeClass("active").addClass("animated"),$('.nav-item[data-sec="'+t+'"]').addClass("active").siblings().removeClass("active").addClass("animated")),0!=$(window).scrollTop()?($(".head").addClass("for-margin"),$(".uper-bar").addClass("for-margin-top")):0==$(window).scrollTop()&&($(".head").removeClass("for-margin"),$(".uper-bar").removeClass("for-margin-top"))})}),$("body").on("click",".nav-item ",function(){var t=$(this).data("sec"),t=$('section[id="'+t+'"]');$("html, body").animate({scrollTop:t.offset().top-50},1e3)}),$("body").on("click","#toggle-lang",function(){$("body").toggleClass("en"),$(this).data("lang")?($(this).data("lang",0),$("#toggle-lang span").text("EN")):($(this).data("lang",1),$("#toggle-lang span").text("AR"));var t=$(this).data("lang");$(".home-id").text(json[t]["head-li-1"]),$(".about-id").text(json[t]["head-li-2"]),$(".service-id").text(json[t]["head-li-3"]),$(".contact-id").text(json[t]["head-li-4"]),$("#about-title-id").text(json[t].about["about-title"]),$("#about-text-id").text(json[t].about["about-text"]),$("#train-title-id").text(json[t].service[0]["service-title"]),$("#train-h4-id").text(json[t].service[1]["service-item-h1"]),$("#train-p-id").text(json[t].service[1]["service-text"]),$("#btn-serv").text(json[t].service[1]["service-btn"]),$("#btn-serv1").text(json[t].service[2]["service-btn"]),$("#btn-serv2").text(json[t].service[3]["service-btn"]),$("#btn-serv3").text(json[t].service[4]["service-btn"]),$("#train-h4-id1").text(json[t].service[2]["service-item-h1"]),$("#train-p-id1").text(json[t].service[2]["service-text"]),$("#train-h4-id2").text(json[t].service[3]["service-item-h1"]),$("#train-p-id2").text(json[t].service[3]["service-text"]),$("#train-h4-id3").text(json[t].service[4]["service-item-h1"]),$("#train-p-id3").text(json[t].service[4]["service-text"]),console.log(json[t].contact[0]["contact-title"]),$("#contact-title-id").text(json[t].contact[0]["contact-title"]),$("#contact-location").text(json[t].contact[1]["contact-li"]),$("#contact-footer-1").text(json[t].contact[2]["contact-footer-1"]),$("#contact-footer-2").text(json[t].contact[3]["contact-footer-2"]),$("#btn-con").text(json[t].contact[4]["contact-btn"]),$("#mapWeb-id").text(json[t].contact[5]["contact-mapweb"])});