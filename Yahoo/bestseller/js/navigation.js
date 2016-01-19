$(function() {
			$('#nav__tops').click(function(){
				$('.main__items').toggle(false);
				$('.tops').toggle(true);
				$('.main__category-title-sp').toggle(false);
				$('#spTitleTops').toggle(true);
				$('#nav__outers').removeClass("active-black");
				$('#nav__bottoms').removeClass("active-black");
				$('#nav__accesories').removeClass("active-black");
				$(this).addClass("active-black");
			});

			$('#nav__outers').click(function(){
				$('.main__items').toggle(false);
				$('.outers').toggle(true);
				$('.main__category-title-sp').toggle(false);
				$('#spTitleOuter').toggle(true);
				$('.active-black').toggle(true);
				$('#nav__tops').removeClass("active-black");
				$('#nav__bottoms').removeClass("active-black");
				$('#nav__accesories').removeClass("active-black");
				$(this).addClass("active-black");
			});

			$('#nav__bottoms').click(function(){
				$('.main__items').toggle(false);
				$('.bottoms').toggle(true);
				$('.main__category-title-sp').toggle(false);
				$('#spTitleBottom').toggle(true);
				$('#nav__outers').removeClass("active-black");
				$('#nav__tops').removeClass("active-black");
				$('#nav__accesories').removeClass("active-black");
				$(this).addClass("active-black");
			});

			$('#nav__accesories').click(function(){
				$('.main__items').toggle(false);
				$('.accesories').toggle(true);
				$('.main__category-title-sp').toggle(false);
				$('#spTitleAccesories').toggle(true);
				$('#nav__outers').removeClass("active-black");
				$('#nav__bottoms').removeClass("active-black");
				$('#nav__tops').removeClass("active-black");
				$(this).addClass("active-black");
			});

			$('#nav__others').click(function(){
				$('.main__items').toggle(false);
				$('.others').toggle(true);
				$('.main__category-title-sp').toggle(false);
				$('#spTitleOthers').toggle(true);
				$('#nav__outers').removeClass("active-black");
				$('#nav__bottoms').removeClass("active-black");
				$('#nav__accesories').removeClass("active-black");
				$(this).addClass("active-black");
			});

			$('#large-images-sizing').click(function(){
				$('.items-box').removeClass("two-columns");
				$('.items-box').removeClass("four-columns");
				$('.items-box').removeClass("six-columns");
				$('.items-box').addClass("two-columns");
				$('#large-images-sizing').removeClass("active-black-for-size");
				$('#mid-images-sizing').removeClass("active-black-for-size");
				$('#small-images-sizing').removeClass("active-black-for-size");
				$(this).addClass("active-black-for-size");
			});

			$('#mid-images-sizing').click(function(){
				$('.items-box').removeClass("two-columns");
				$('.items-box').removeClass("four-columns");
				$('.items-box').removeClass("six-columns");
				$('.items-box').addClass("four-columns");
				$('#large-images-sizing').removeClass("active-black-for-size");
				$('#mid-images-sizing').removeClass("active-black-for-size");
				$('#small-images-sizing').removeClass("active-black-for-size");
				$(this).addClass("active-black-for-size");
			});

			$('#small-images-sizing').click(function(){
				$('.items-box').removeClass("two-columns");
				$('.items-box').removeClass("four-columns");
				$('.items-box').removeClass("six-columns");
				$('.items-box').addClass("six-columns");
				$('#large-images-sizing').removeClass("active-black-for-size");
				$('#mid-images-sizing').removeClass("active-black-for-size");
				$('#small-images-sizing').removeClass("active-black-for-size");
				$(this).addClass("active-black-for-size");
			});

		});
