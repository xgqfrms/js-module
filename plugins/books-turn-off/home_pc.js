(function(win, doc, $, undefined){


    var $doc = $(doc)
      , $wrapper = $('.book')
      , $magazine = $wrapper.find('#flipbook');


	var util = {

		resizeLayout: function(){
            //magazine
			var mw = 1138;
			var mh = 845;
            //document
			var cw = $doc.width();
			var ch = $doc.height();
            //entry
			var ew = cw - 200;
			var eh = ch - 100;
            //scale
			var s = ( ew/mw < eh/mh ) ? ew/mw : eh/mh;
				//位置
            $wrapper.css({
                'top': ( ch - mh * s ) / 2 + 'px',
                'left': ( cw - mw * s ) / 2 + 'px'
            });
				//缩放比例，基点
			$wrapper.css({
				'transform': 'scale('+s+')',
				'transform-origin': '0 0'
			});

			$('#pagenavi').css({
				'bottom': ( ch - mh * s ) / 4 - 8+ 'px',
				'right': ( cw - mw * s ) / 2 + 'px'
			});

		},
			//键盘事件
        enableKeyboardCtrl: function(){
            $(window).on('keydown', function(e){
                if (e.target && e.target.tagName.toLowerCase() !== 'input'){
                    if (e.keyCode==37){
                        $magazine.turn('previous');
                    }
                    else if (e.keyCode==39){
                        $magazine.turn('next');
                    }
                }
            });
        },
			//页面的翻页按钮
        createTurnButton: function(){
            var ele = '<div class="turn_left"><</div><div class="turn_right">></div>';
            $wrapper.after(ele);

            $('.turn_left').on('click', function(){
                $magazine.turn("previous");
            });

            $('.turn_right').on('click', function(){
                $magazine.turn("next");
            });
        }


	};

    var event = {

        index: function(){
            $(document).on('click', '.page_00b p', function(){
                var e = $(this);
                var turn = e.data('turn');
                $magazine.turn('page', turn);
            });
        },

        signup: function(){
            $(document).on('click', '.signin', function(){
                $('.mask').show();
                $('#signup_form').fadeIn('slow/400/fast');
                $('#events').show();
            });
        }

    };
    

    function before_turning(event, page, corner){
      if (corner=="tl" || corner=="tr") {
          $(this).turn('data').hover = true;
          return false;
      }
    }


    function turning(event, page, newView){
        if ($(this).turn('data').hover) {
            $(this).turn('data').hover = false;
            return false;
        }
    }

    function after_turning(event, page, view){

    }


    function setup(){

        util.resizeLayout();

        $magazine.turn({
            page: 1,
            width: 1138,
            height: 845,
            autoCenter: true,
            when: {
              start: before_turning,
              turning: turning,
              turned: after_turning
            }
        });

        util.createTurnButton();
        util.enableKeyboardCtrl();
        event.index();
        event.signup();
    }

    setup();
/*  */
	$(document).on("click",".clickSignUp",function(){
		 $('.mask').show();
                $('#signup_form').fadeIn('slow/400/fast');
                $('#events').show();
	})
})(window, document, jQuery);