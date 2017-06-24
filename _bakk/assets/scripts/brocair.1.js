var brocair = {
	dropDownElm: document.getElementById("dropDownPerspective"),
	dropDownServices: document.getElementById("dropDownServices"),
	dropDownResearch: document.getElementById("dropDownResearch"),
	dropDownGlobal: document.getElementById("dropDownGlobal"),
	dropDownAbout: document.getElementById("dropDownAbout"),
	$firstNavLi: $("header nav ul li:first"),
	$secondNavLi: $("header nav ul li:nth-child(2)"),
	$thirdNavLi: $("header nav ul li:nth-child(3)"),
	$fourthNavLi: $("header nav ul li:nth-child(4)"),
	$sixthNavLi: $("header nav ul li:nth-child(6)"),
	$about: $(".about"),
	globalSection: {
		$summary: $("#content .global div.summary div"),
		$lit:$("#content .global section div"),
		$stats:$("#content .global section ul")
	},
	init: function () {
		var self = this,
			search = window.location.search.replace("?","");
		self.$firstNavLi.bind("mouseover",
			function() {
				//hide other dropdowns (I'll think of a cleaner way to do this later) -Steven
				self.dropDownServices.style.display = "none";
				self.$secondNavLi[0].style.backgroundColor = "";
				self.dropDownResearch.style.display = "none";
				self.$thirdNavLi[0].style.backgroundColor = "";
				self.dropDownGlobal.style.display = "none";
				self.$fourthNavLi[0].style.backgroundColor = "";
				self.dropDownAbout.style.display = "none";
				self.$sixthNavLi[0].style.backgroundColor = "";
				//show the first dropdown
				self.dropDownElm.style.left = (self.$firstNavLi.offset().left+"px");
				self.dropDownElm.style.display = "block";
				self.$firstNavLi[0].style.backgroundColor = "#E2E9ED";
			}
		);
		self.$secondNavLi.bind("mouseover",
			function() {
				self.dropDownElm.style.display = "none";
				self.$firstNavLi[0].style.backgroundColor = "";
				self.dropDownResearch.style.display = "none";
				self.$thirdNavLi[0].style.backgroundColor = "";
				self.dropDownGlobal.style.display = "none";
				self.$fourthNavLi[0].style.backgroundColor = "";
				self.dropDownAbout.style.display = "none";
				self.$sixthNavLi[0].style.backgroundColor = "";
				
				self.dropDownServices.style.left = (self.$secondNavLi.offset().left+"px");
				self.dropDownServices.style.display = "block";
				self.$secondNavLi[0].style.backgroundColor = "#E2E9ED";
			}
		);
		self.$thirdNavLi.bind("mouseover",
			function() {
				self.dropDownElm.style.display = "none";
				self.$firstNavLi[0].style.backgroundColor = "";
				self.dropDownServices.style.display = "none";
				self.$secondNavLi[0].style.backgroundColor = "";
				self.dropDownGlobal.style.display = "none";
				self.$fourthNavLi[0].style.backgroundColor = "";
				self.dropDownAbout.style.display = "none";
				self.$sixthNavLi[0].style.backgroundColor = "";
				
				self.dropDownResearch.style.left = (self.$thirdNavLi.offset().left+"px");
				self.dropDownResearch.style.display = "block";
				self.$thirdNavLi[0].style.backgroundColor = "#E2E9ED";
			}
		);
		self.$fourthNavLi.bind("mouseover",
			function() {
				self.dropDownElm.style.display = "none";
				self.$firstNavLi[0].style.backgroundColor = "";
				self.dropDownServices.style.display = "none";
				self.$secondNavLi[0].style.backgroundColor = "";
				self.dropDownResearch.style.display = "none";
				self.$thirdNavLi[0].style.backgroundColor = "";
				self.dropDownAbout.style.display = "none";
				self.$sixthNavLi[0].style.backgroundColor = "";
				
				self.dropDownGlobal.style.left = (self.$fourthNavLi.offset().left+"px");
				self.dropDownGlobal.style.display = "block";
				self.$fourthNavLi[0].style.backgroundColor = "#E2E9ED";
			}
		);
		self.$sixthNavLi.bind("mouseover",
			function() {
				self.dropDownElm.style.display = "none";
				self.$firstNavLi[0].style.backgroundColor = "";
				self.dropDownServices.style.display = "none";
				self.$secondNavLi[0].style.backgroundColor = "";
				self.dropDownResearch.style.display = "none";
				self.$thirdNavLi[0].style.backgroundColor = "";
				self.dropDownGlobal.style.display = "none";
				self.$fourthNavLi[0].style.backgroundColor = "";
				
				self.dropDownAbout.style.left = (self.$sixthNavLi.offset().left+"px");
				self.dropDownAbout.style.display = "block";
				self.$sixthNavLi[0].style.backgroundColor = "#E2E9ED";
			}
		);
		$("header .dropDown").bind("mouseleave",
			function () {
				self.dropDownElm.style.display = "none";
				self.$firstNavLi[0].style.backgroundColor = "";
				self.dropDownServices.style.display = "none";
				self.$secondNavLi[0].style.backgroundColor = "";
				self.dropDownResearch.style.display = "none";
				self.$thirdNavLi[0].style.backgroundColor = "";
				self.dropDownGlobal.style.display = "none";
				self.$fourthNavLi[0].style.backgroundColor = "";
				self.dropDownAbout.style.display = "none";
				self.$sixthNavLi[0].style.backgroundColor = "";
			}
		);
		$(window).bind("resize",function(){
			self.dropDownElm.style.left = (self.$firstNavLi.offset().left+"px");
			self.dropDownServices.style.left = (self.$secondNavLi.offset().left+"px");
			self.dropDownResearch.style.left = (self.$thirdNavLi.offset().left+"px");
			self.dropDownGlobal.style.left = (self.$fourthNavLi.offset().left+"px");
			self.dropDownAbout.style.left = (self.$sixthNavLi.offset().left+"px");
		});
		if (search && location.href.indexOf("global.htm")+1) {
			self.gcUpdate(search);
		}
		var $aside_li = $("aside li a")
		$aside_li.click(function(){
			$aside_li.parent().removeClass("active");
			$(this).parent().addClass("active");
		});
	},
	gcUpdate: function (country) {
		var self = this,
			country = ((typeof country === "string" && country.length)? country : ""),
			countryClass = "." + country;

		if (window.location.search.replace("?","") == country) {
			$("header .dropDown li").removeClass("active");
			$("#dropDownGlobal a."+country).parent().addClass("active");
			$("#content aside.globalLinks ."+country).parent().addClass("active");
			$("#content aside ."+country)[0].style.color = "#0078AE";
			//document.getElementById("countrybb").style.backgroundImage = "url(assets/images/" + country + "_bb.jpg)"
			self.globalSection.$summary.css("display","none").parent()	.find(countryClass+"Sum").css("display","block");
			self.globalSection.$lit.css("display","none").parent()		.find(countryClass+"Lit").css("display","block");
			self.globalSection.$stats.css("display","none").parent()	.find(countryClass+"Stats").css("display","block");	
			
			
		} else {
			location.href = "global.html?"+country;
		}
		
		if(country != "us"){
			$(".hcSpendingGraph").css("display","none");
		}else{
			$(".hcSpendingGraph").css("display","block");
		}
	},
	globalRoll: function () {
		var country;
		$("#map a, .globalLinks li a")
			.hover(
				function(){
					country = $(this)
								.attr("href")
								.replace("javascript:brocair.gcUpdate('","")
								.replace("')","");
					document.getElementById("rollMap").style.backgroundImage = "url(assets/images/" + country + "_roll.png)";
					$("#content aside.globalLinks ."+country).parent().addClass("active");
					
				},
				function() {
					document.getElementById("rollMap").style.backgroundImage = "";
					$("#content aside.globalLinks ."+country).parent().removeClass("active");
				}
			)
	},
	toMember: function (member) {
		var $about = this.$about;
	    document.getElementById("aboutFront").style.display = "none";
	    $("#memberLit").fadeIn("fast");
	    $("#members").fadeIn("fast");
	    $(".teamHeader",this.$about).css("display","block");
	    $(".locationsHeader",this.$about).css("display","none");
		$("header .dropDown li").removeClass("active");
		$("aside li").removeClass("active");
		$("aside a."+member).parent().addClass("active");
		$("#dropDownAbout a."+member).parent().addClass("active");
		$(".story header .billboard").css("background","url('assets/images/newyork_bb.jpg')");
	    $("#memberLit div").css("display","none");
	    $("#members div").css("display","none");
	    $("."+member.replace("member ",""),$about).css("display","block");
	    $(".location",$about).css("display","none");
	},
	toLocation: function (location) {
		var $about = this.$about;
	    document.getElementById("aboutFront").style.display = "none";
	    document.getElementById("memberLit").style.display = "none";
	    document.getElementById("members").style.display = "none";
		$(".story header .billboard").css("background","url('assets/images/"+location+"_bb.jpg')");
		$("header .dropDown li").removeClass("active");
	    $("aside li").removeClass("active");
		$("aside a."+location).parent().addClass("active");
		$("#dropDownAbout a."+location).parent().addClass("active");
	    $(".teamHeader",$about).css("display","none");
	    $(".locationsHeader",$about).fadeIn("fast");
	    $(".location",$about).css("display","none");
	    $("."+location,$about).fadeIn("fast");
	},
	toTeam: function () {
		var $about = this.$about;
	    $("#aboutFront").fadeIn("fast");
	    $(".teamHeader",$about).css("display","block");
	    $(".locationsHeader",$about).css("display","none");
	    $(".location",$about).css("display","none");
		$("#dropDownAbout a.team").parent().addClass("active");
		$(".story header .billboard").css("background","url('assets/images/newyork_bb.jpg')");
	    document.getElementById("memberLit").style.display = "none";
	    document.getElementById("members").style.display = "none";
	},
	toService: function (service) {
		$(".story header .billboard").css("background","url('assets/images/serv_" + service + "_bb.jpg')");
		$(".services .summary h1").css("display","none");
		$(".services .serviceSection").not(".summary").css("display","none");
		$("header .dropDown li").removeClass("active");
		$("aside li").removeClass("active");
		$("aside a."+service).parent().addClass("active");
		$("#dropDownServices a."+service).parent().addClass("active");
		$(".services ."+service).fadeIn(150);
	},
	toPerspective: function (perspective) {
		if(perspective == "focus"){
			$(".story header .billboard").css("display","none");
			$(".story header .rotatingHeader").css("display","block");
			$(".story header .rotatingHeader .slides_control").css("height","205px");
		}else{
			$(".story header .billboard").css("display","block");
			$(".story header .rotatingHeader").css("display","none");
			$(".story header .billboard").css("background","url('assets/images/pers_" + perspective + "_bb.jpg')");
		}
		$(".perspective .summary h1").css("display","none");
		$(".perspective .perspectiveSection").css("display","none");
		$("header .dropDown li").removeClass("active");
		$("aside li").removeClass("active");
		$("aside a."+perspective).parent().addClass("active");
		$("#dropDownPerspective a."+perspective).parent().addClass("active");
		$(".perspective ."+perspective).fadeIn(150);
	},
	toInsight: function (insight) {
		//loading header image... some pages don't have images so I guess we'll have to put the default image in their place
		if(insight == "foley"){
			$(".story header .billboard").css("background","url('assets/images/research_blake_bb.jpg')");
		}else{
			$(".story header .billboard").css("background","url('assets/images/research_" + insight + "_bb.jpg')");
		}
		$(".insight .summary div").css("display","none");
		$(".insight .insightSection").css("display","none");
		$("header .dropDown li").removeClass("active");
		$("aside li").removeClass("active");
		$("aside a."+insight).parent().addClass("active");
		$("#dropDownResearch a."+insight).parent().addClass("active");
		$(".insight ."+insight).fadeIn(150);
	}
}
brocair.init();