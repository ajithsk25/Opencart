$(document).ready(function() {
	
	$('.btn-toggle').click(function() {
		$(this).find('.btn').toggleClass('btn-success active');  
	});
	
	//======= Create Dropdown as Select =======
	$("ul.store_dropdown li").each(function() {
		var ua = navigator.userAgent,
		event = (ua.match(/iPad/i)) ? "touchstart" : "click";
		
		$(this).bind(event, function(){
			var selText = $(this).children().text();
			$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
			
			$("ul.store_dropdown li").removeClass("active");
			$(this).addClass("active");
			
			$(".tab-content-main").find('> .tab-pane').removeClass('active');
			$($(this).find('a').attr('href')).addClass('active');
			
		});
	});
	
	//======= Create Cookies ======= 
	var store_id ='';
	$('.main_tabs_vertical li a').bind('click', function(){
		menuTabs = $(this).attr('href').replace('#', '').replace ('tab-', '');
		storeId = menuTabs.substr(menuTabs.length - 1);
		$.cookie('main_tabs_vertical',menuTabs);
		$.cookie('store_id',storeId);
		
	});
	
	
	main_tabs = $.cookie('main_tabs_vertical');
	store_id = $.cookie('store_id');
	
	if (main_tabs) changeMainTabs(main_tabs,store_id);
	
	//This function puts all of the params into a js object
	url = window.location.href;
	params = getParams(url);
	
	//Check value from the URL parameter?
	if (params) {
		var values = Object.keys(params);
		$.each( values, function( key, value ) {
			addValue = params[value];
			store_id = 0;
			if(value=='market') {
				changeMainTabs(addValue,store_id);
			}
		});
	}

	
	$('.store_dropdown li a').bind('click', function(){
		$.cookie('stores',$(this).attr('href').replace('#', '').replace ('tab-', ''));
	});
	store_tabs = $.cookie('stores');
	if (store_tabs) dropdownStore(store_tabs);
	
	
	//======= Font Setting======= 
	$(".fonts-change").each( function(){
		var $this = this;
		$(".items-font",$this).hide();  
		$(".font-"+$(".type-fonts:checked",$this).val(), this).show();
	 
		$(".type-fonts", this).change( function(){
			$(".items-font",$this).hide();
			$(".font-"+$(this).val(), $this).show();
		} );
	});
	
	
	
})

function getParams(u){
    var theURL = u; 
    var params = {}; 
    var splitURL = theURL.split('?'); 
	
    if (splitURL.length>1 ){ 
        var splitVars = splitURL[1].split('&'); 
        for(var i = 0; i < splitVars.length; i++){ 
            splitPair = splitVars[i].split('='); 
            params[splitPair[0]] = splitPair[1]; }

        return params;
    }
    return false;
}


function dropdownStore($menuItem){
	$(".store_dropdown > li").each(function() {
		if($(this).find('a').attr('href').indexOf($menuItem)!= -1){
			var selText = $(this).children().text();
			$(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
		}
	});
	$(".store_dropdown").find('> li').removeClass('active');
	$(".store_dropdown > li").each(function() {
		if($(this).find('a').attr('href').indexOf($menuItem)!= -1) $(this).addClass('active');
	});
	$(".tab-content-main  > .tab-pane").removeClass('active');
	$(".tab-content-main  > .tab-pane").each(function() {
		$("#tab-" + $menuItem).addClass('active');
		
	});
}

function changeMainTabs($menuItem,$store_id){
	$store_tab = 'tab-store'+$store_id;
	
	$('#'+$store_tab+' .main_tabs_vertical').find('> li').removeClass('active');
	$('#'+$store_tab+' .main_tabs_vertical > li').each(function() {
		if($(this).find('a').attr('href').indexOf($menuItem)!= -1) $(this).addClass('active');
	});
	$('#'+$store_tab+' .sidebar +.tab-content').find('> .tab-pane').removeClass('active');
	
	$('#'+$store_tab+' .sidebar +.tab-content > .tab-pane').each(function() {
		$("#tab-" + $menuItem).addClass('active');
		
	});
}

