$.fn,pointDrag = function(opt){
	var call = {
		socur:'.conList ul',
		son:'li',
		oh:this.outerHeight(true),
		cdEnd:function(){}
	}

	var option = $.extend({}, call, opt);

	function drag(){
		this.id = [];
		this.self = {zIndex:1};
		this._this;
		this.$img = $('body').find('img');
		if(document.attachEvent) {
			try{
				$img[0].attachEvent('onselectstart',function(){
					return false;
				});
			}catch(e){

			}
		}
	}

	drag.prototype.start = function(ev,obj) {
		ev.preventDefault();
		this.self.moved = $(obj).attr('id');
		this.self._index = $(obj).index();
		this.self._start = true;
		var oEvent = ev || event;
		this.self.disX = oEvent.clientX - obj.offsetLeft;
		this.self.disY = oEvent.clientY - obj.offsetTop;
	}

	
}