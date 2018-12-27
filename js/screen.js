ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,body,html,p,blockquote,fieldset,input,label,div,dd,dt,dl,table,tr,td { margin:0; padding:0; }

html { overflow-y: scroll; }

div, p, a, li, td { -webkit-text-size-adjust:none; }

body { margin:0; padding:0; background-color:#fff; text-align:center; font:76% Arial, Helvetica, sans-serif; background:url(/common/images/background.png) repeat-x; height:700px; color:#808080; }

a:link, a:visited { color:#808080; text-decoration:none; }	
a:hover, a:active { color:#808080; text-decoration:underline; }	

img  { border:none; }
iframe {clear:both}

/* STYLES h1, h2 custom etc..----------------------------------------------- */	
.red    { color:#F00; }
.grey12 { font-size:12px; }
.grey24 { font-size:24px; }
.grey12_lt { font-size:12px !important; color: #b0b0b1;  }
.grey10_lt { font-size:10px !important; color: #b0b0b1 !important; }

.green { color: #4b9848; }
.greenBd { color: #4b9848; font-weight:bold; }

h2, h3 { font-size:15px; font-weight:normal; text-transform: uppercase; clear:both; }

/* PADDING
----------------------------------------------- */	
.padLe5 {  padding-left:5px; }
.padLe10 {  padding-left:10px; }
.padLe15 {  padding-left:15px; }
.paTo40 {  padding-top:40px; }

.maBo10 {  margin-bottom:10px; }
.maBo20 {  margin-bottom:20px; }

.toys      { color: #725589; }
.baby      { color: #555c89; }
.health    { color: #557a89; }
.beauty    { color: #80b1ab; }
.lingerie  { color: #da9f1b; }
.shoes     { color: #bba635; }
.homewares { color: #aab180; }
.light     { color: #91b180; }

/* PAGE LAYOUT----------------------------------------------- */	
#container { width:968px; margin:0 auto; text-align:left; background-color:#fff; padding:0 18px; }

/* START HEADER ----------------------------------------------- */	
#header { position:relative; width:968px; height:204px; margin: 10px 0 0 0; padding:0; background:url(/common/images/bk-line.gif) 0 179px repeat-x; z-index:100; }

.logo { position:absolute; top:2px; left:0px; }
.logo_tagline { position:absolute; top:91px; left:0px; font-weight:bold; font-size:12px; color: #7a2f6f; text-transform: uppercase; }

.tel_no_1 { position:absolute; top:8px; right:0px; font-size: 18px; }
.tel_no_2 { position:absolute; top:35px; right:0px; font-size: 12px; letter-spacing:-0.3px; }
.mini_basket { position:absolute; width: 240px; height: 37px; top:64px; right:0px; border:#bebebe solid 1px; }
.bag { float:left; position: relative; margin:9px 10px 0 7px; }
.bag_items { float:left; position: relative; font-size:11px; width: 110px; height: 28px; margin:4px 0 0 0; }
.bag_checkout { float:right; position: relative; padding:6px 10px 0 0; }

.cust_nav_1 a, .cust_nav_2 a { font-size:11px; padding:0 4px; } 
.cust_nav_1 { position:absolute; top:105px;right:140px;}
.cust_nav_2 { position:absolute;  top:105px;right:0px;}

.search { position:absolute; top:159px; right:0px; }
.bt_search { border-style: solid solid solid none; border-color: #db5c42; border-width: thin; position: absolute; right: 0; top: 0; width: 16px !important; height: 16px !important; }
.search_input { border-style: solid none solid solid; border-width: thin; border-color: #db5c42; position: absolute; width: 130px; right: 16px; top: 0; color: #db5c42; font-size: 14px; font-family: Arial, Helvetica, sans-serif; height: 16px !important; }
.fl_left { float:left; }
.fl_right { float:left; }
/* END HEADER -------------------------------------------------------------------------------------------------------- */	

/* START MAIN DIV CONTENT ON HOMEPAGE------------------------------------------------------ */

#main { float:left; position:relative; width:968px; margin:0; padding:0; min-height:500px; }
 
.homeBlk {  width:241px;  height:231px;   }
.cat_name { color: #eaeaea; font-size:24px; padding:12px; display:block; }  
.homeBlk img { width: 241px; }
.homeBlk p {display:none; color: #eaeaea; }

.no1 {  position: absolute; left:0; background-color: #725589;  z-index:90; }
.no2 {  position: absolute; left:242px; background-color: #555c89;  z-index:90;  }
.no3 {  position: absolute; left:484px; background-color: #557a89; z-index:90; }
.no4 {  position: absolute; left:726px; background-color: #80b1ab;z-index:90;}
.no5 {  position: absolute; left:0; top: 252px; background-color: #da9f1b; z-index:89;  }
.no6 {  position: absolute; left:242px; top: 252px; background-color: #bba635; z-index:89;  }
.no7 {  position: absolute; left:484px;  top: 252px; background-color: #aab180; z-index:89; }
.no8 {  position: absolute; left:726px;  top: 252px; background-color: #91b180;  z-index:89; }

.homeBlk:hover  { height:367px; }
.homeBlk p a { text-decoration: none; color: #ffffff; font-weight:bold }
.homeBlk p a:hover { text-decoration: underline; color: #ffffff; font-weight:bold }
.homeBlk a:hover {  text-decoration:none; color:#ffffff;   }
.homeBlk:hover p { display: block; padding:10px 30px 0px 14px; }


/* END MAIN ------------------------------------------------------------------------------------*/	

/* START FAVOURITE DIV CONTENT ON HOMEPAGE----------------------------------------------- */	

#home_features { margin-top: 5px ; margin-bottom: 5px ; float: left; width: 723px; }
#home_features h2 { font-size:18px; }
#home_features p { font-size:14px; }
#home_features p a{ color:#db5c42; font-weight:bold; }

#home_features_Srch { position: relative; margin-top:5px; margin-right: 0px; width: 710px; padding-bottom:10px; }
#home_features input.productsearch3 { border-style: solid none solid solid; border-width: thin; border-color: #C0C0C0; width: 460px; color: #db5c42; float: right; height: 16px; }
#home_features .bt_search { border-style: solid solid solid none; border-color: #C0C0C0; border-width: thin; position: absolute; right: 0; top: 0; width: 16px !important; height: 16px !important; }


#favourites { float:left !important; width:730px;}
#favourites h2, #topsellers h2, #topsellersroom h2, #topsellersroom h3 { font-size:18px !important; margin-bottom:0px !important; }

#topsellers {clear:both; float:left; width:968px; margin-top:10px !important; }
#topsellersroom { float:right; width:728px; margin-top:5px; clear:none }

#relatedproducts { float:left; clear: both; width: 728px; margin-bottom:20px; }

.favBlk     {  float:left; width: 178px; margin-right:4px; height:270px; }
.favBlk img { width: 176px; height: 183px; }

.fav_name  {  font-size:12px; padding:5px 12px 0px 12px;  display:block;  /* force a new line after span */  }  
.fav_price { font-size:16px;  padding:12px 12px 0 12px; font-weight:bold; }
.fav_offer { font-size: 10px;padding: 0px 12px 12px 12px;display: block;}

.fav_toys      {  background-color: #725589; }
.fav_baby      {  background-color: #555c89; }
.fav_health    {  background-color: #557a89; }
.fav_beauty    {  background-color: #80b1ab; }
.fav_lingerie  {  background-color: #da9f1b; }
.fav_shoes     {  background-color: #bba635; }
.fav_homewares {  background-color: #aab180; }
.fav_light     {  background-color: #91b180; }

.fav_bd_toys      { border: #725589 solid 1px; }
.fav_bd_baby      { border: #555c89 solid 1px; }
.fav_bd_health    { border: #557a89 solid 1px; }
.fav_bd_beauty    { border: #80b1ab solid 1px; }
.fav_bd_lingerie  { border: #da9f1b solid 1px; }
.fav_bd_shoes     { border: #bba635 solid 1px; }
.fav_bd_homewares { border: #aab180 solid 1px; }
.fav_bd_light     { border: #91b180 solid 1px; }

a:link.favBlk, a:visited.favBlk {  text-decoration: none; color:#fff;  }
a:hover.favBlk, a:active.favBlk  {  text-decoration: underline; color:#fff;  }

/* END FAVOURITE ----------------------------------------------- */	

/* START SPECIAL OFFERS DIV CONTENT ON HOMEPAGE----------------------------------------------- */	

#spOffers { float:right; width:225px; }
#spOffers p { color:#db5c42; margin-bottom:10px;  font-size:15px; font-weight:bold; }

.spOffer { float:left; width: 225px; padding-bottom:10px; border-bottom:#b63d92 solid 1px;  }
.spOffer img     {  float:right; max-width: 120px; }
.spOffer_name    {  font-size:12px; width:225px; padding:3px 0 3px 0;  display:block;   /* force a new line after span */  }  
.spOffer_voucher {  font-size:12px; font-weight:bold;  display:block;  /* force a new line after span */  }  
.spOffer_price   {  font-size:16px;   font-weight:bold; color:#db5c42;  }
.spOffer_more { color:#db5c42 !important; font-weight:bold; font-size:14px !important; float:left; clear:both !important; margin-bottom:20px !important; }

/* END SPECIAL OFFERS--------------------------------------------------------------------------------------*/	

/* START FOOTER DIV CONTENT----------------------------------------------------------------------- */	

#footerWrap { clear:both; background: url(/common/images/bk-footer.gif) repeat-x top #898686; }
#footer { width:968px; margin:0 auto; text-align:left; overflow:hidden; padding-bottom:20px;}

.ft_logo_set { clear:both; float:left; padding-top:12px; }
.ft_col_1 {  float:left; margin-top:30px;  width:210px; }
.ft_col_1 .header { color:#3c3b3b; font-size:18px; padding-bottom:15px;  display:block;}
.ft_col_1 p { color:#fff; font-size:12px; padding-bottom:8px; }
.ft_col_1 p a { color: #fff !important;}
.ft_col_1 .tel,  .ft_col_1 .email{ font-size:18px;   display:block; }
.ft_col_2 {  float:right; margin-top:30px;  width:225px; }
.ft_col_2 .header { color:#fff; font-size:18px; padding-bottom:15px;  display:block;}
.ft_col_2 p {color:#fff; float:left; clear:both; }

#footerWrap a:link, #footerWrap a:visited  { text-decoration: none; color:#fff; }
#footerWrap a:hover, #footerWrap a:active { text-decoration: underline; color:#fff; }
#footerWrap ul { list-style: none; }

.Copyright { clear:both; padding-top:20px; font-size:11px; color: #c4c3c3; display:block; }

/* END FOOTER----------------------------------------------- */	

/* ----------------------------------------------------------------------------------------------------------------------------------- */	

#intro_main { float:left; position:relative; width:100%} 

#intro_main p { clear:both;margin-bottom:10px; }
#intro_main h2 { font-weight:bold ;font-size: 16px ;color: #725589; clear:both}
#intro_main h3 { font-weight:bold ;font-size: 14px ;color: #725589;}

#introHead { float:left; position:relative; background-color:#725589; height:43px; padding-top:16px; width: 956px; padding-left:12px; margin-bottom:20px; }
#introHead .addthis_toolbox { position:absolute; top:0px; right:-50px; width:300px; } 
#introHead .addthis_toolbox a { display: inline-block; padding: 3px; vertical-align:top; width:80px;}
#introHead .addthis_toolbox a.addthis_button_pinterest_pinit { float: left; margin-right:-30px; }


.introBlk {  float:left; width:241px;  height:230px; background-color:#aa99b8; display:block; margin-right:1px; margin-bottom:24px; }
.introBlk img { width: 241px; }
a:hover.introBlk  { background-color:#9481a3; text-decoration:none; }

/* END --------------------------------------------------------------------------------------------------------------------------- */

#introHead h1 {  display: inline; font-size:17px;  text-transform:uppercase; font-weight:normal; color: #fff;line-height:26px; }
#introHead a {  display: inline; font-size:17px; text-transform:uppercase; color:#c7bbd0; }

.bread { color:#fff;margin-top:5px;}

/* START ROOM TEMPLATE---------------------------------------------------------------------------------------------------------- */	

#leftCol { float:left; width:240px; }

#leftNav { float:left; margin-right:18px; width:222px; background-color:#d4ccdb; } /* margin and width to total 240px */ 
#leftNav span {  font-size:24px; color: #725589;  padding: 12px 0 8px 12px; display:block; text-transform: none; }
#leftNav h2 {  font-size:24px; color: #725589;  padding: 12px 0 8px 12px; display:block; text-transform: none; }
#leftNav ul { list-style-type:none; width:222px; }
#leftNav ul a:link, #leftNav ul a:visited { display:block; color:#6d6d6d; background-color:#d4ccdb; border-top:#fff solid 1px; padding: 5px 5px 6px 26px; text-decoration:none; background:url(/common/images/nav-arrow-left.gif) 12px no-repeat; }
#leftNav ul a:hover,#leftNav ul a:active { color:#ffffff; background:url(/common/images/nav-arrow-left-over.png) 12px no-repeat #9481a3; }
#leftNav ul a.this_shlf {color:#ffffff; background:url(/common/images/nav-arrow-left-over.png) 12px no-repeat #9481a3;}

#leftNav span.search_hd { font-size: 22px; color: #725589; margin: 0; padding-top:10px; }

#leftNav .search_nav { width: 100%; border-spacing: 0px;margin-top: 12px;clear:both; }
#leftNav .search_nav td { font-size: 14px; min-width: 50px; padding-bottom: 5px; padding-left: 5px;}
#leftNav .search_nav td select { font-size:10px; width:145px; font-weight:bold}

#leftNav_Srch { position: relative; margin-bottom: 10px; margin-right: 0px; width: 195px; padding-bottom:20px; }
#leftNav_Srch input.productsearch2 { border-style: solid none solid solid; border-width: thin; border-color: #db5c42; width: 195px; color: #db5c42; float:right; height:16px; }

#intro2_main { float:right; padding-left: 16px; width:711px; } /* padding and width to total 727px */
#intro2_main p { padding-bottom:10px; padding-top:10px;  }
#intro2_main h2 { font-size:18px; font-weight:bold; text-transform: none; color: #725589; padding-bottom:12px; }
#intro2_main h3 { font-size:16px; font-weight:bold; text-transform: none; color: #725589; padding-bottom:12px; }
#intro2_main p a { font-weight:bold; color: #725589; }
#intro2_main ul { margin-left:10px; margin-bottom:10px;}
#intro2_main img { margin-left:-16px; }

.showLeft { clear:both; float:left !important; margin-top:25px; }

/* END ROOM TEMPLATE----------------------------------------------- */	

/* START SHELF -------------------------------------------------------------------------------------  */	

#product_main {  float:right; position:relative; width:728px; margin:0; padding:0; }
#product_main p { clear:both; padding:0 0 15px 4px; }
#product_main p a { font-weight:bold }
#product_main h2 { font-size: 22px; font-weight: bold; margin-bottom: 10px; }
#product_main h3 { font-size: 16px;font-weight: bold; margin-bottom: 10px; }
#product_main ul { list-style: disc; list-style-position: inside; padding-left:5px; }

.prodBlk {  float:left; width: 178px; margin-left:4px; height:250px; margin-bottom:15px; }
.prodBlk img { width: 176px; }
.prod_name {  font-size:12px; padding:5px 12px 0px 12px; display:block; min-height:30px; /* force a new line after span */ }  
.prod_price { font-size: 16px; padding: 12px 5px 0 12px; font-weight: bold; }
.prod_offer {font-size: 12px;padding: 0px 12px 12px 12px; display: block;font-weight: bold; color: #FF0000;}
.prod_offer_special {font-size: 12px; padding: 0px 5px 0px 5px; font-weight: bold; color: #FF0000; margin: auto; }
.prod_offer img { height:90px;width: 90px;position:relative; left:76px;bottom:245px; }

.prod_name2 { font-size:12px; min-height: 60px; padding:5px 12px 0px 12px; display:block;  } 
.prod_offer2 {font-size: 12px; padding: 0px 12px 12px 12px; display: block; font-weight: bold; color: #FF0000;}
.prod_offer2 img { height:90px;width: 90px;position:relative; left:76px;bottom:272px; }


a:link.prodBlk, a:visited.prodBlk { text-decoration: none; color:#fff;  }
a:hover.prodBlk, a:active.prodBlk  { text-decoration: underline; color:#fff;  }
 
 /* ----product page controls ----*/
#pagination { float:left; clear:both;  width:728px; } 
#pagination p { padding:12px 0 20px 4px; font-weight:bold; }
#pagination .bt_previous, #pagination .bt_next, #pagination .bt_showall, #pagination .bt_showless, .bt_back { float:left; width:94px; line-height:26px; text-align:center; color:#fff; display:block; margin-left:4px; font-size:12px; background-color:#db5c42; }
#pagination input:hover[type="submit"], #pagination a:hover {background-color:green;}
#pagination span.bt_previous, #pagination span.bt_next, #pagination span.bt_showall, #pagination span.bt_showless { float:left; width:94px; line-height:26px; text-align:center; color:#fff; display:block; margin-left:4px; font-size:12px; background-color:#dddddd; }
#pagination .bt_showall, #pagination .bt_showless { float:right !important;} 

a.bt_back { clear:both; color:#fff; margin-left:0px;}

/* START PRODUCT ----------------------------------------------------------------------  */	

#product_detail { float:right; position:relative; width:728px; margin:0; padding:0; }
#product_detail h2,h3 { padding-bottom:10px}

.product_images { position:relative; float:left; margin-right:20px; }
.prod_thumb { clear:left; width:350px; }
.sku { position: relative; float: left; width: 340px; margin-top:5px; z-index:0}
.sku_name { font-size:16px; margin-top:2px; display:block;  } 
.spOffer_offer {  text-decoration: line-through; font-weight:bold;  display:block; }
.imgLarge { float:left; width: 358px; height:358px; }

.disclaimer { clear:both; margin-bottom:10px; }
.disclaimer a { color: #db5c42 !important ; font-weight:bold ;}

.skuext { position:relative; float:left; width:340px; }

.sku_brand { clear:both; float:left; width:348px; padding:15px 0 20px 0; }
.sku_size { position:relative; clear:both; float:left; width:348px; padding:0px 0 5px 0; }
.sku_size select { margin-top: 10px; max-width:340px}

.submithidden {display:none}

.sku_prices {position: relative; clear: both; float: left; width: 348px; padding: 5px 0 15px 0;}
.sku_price { font-weight: bold; font-size: 26px; }
.sku_price img { position:absolute; right:0; bottom:-1px;  }

.sku_offer { color: #e35837; text-decoration: line-through; padding-left: 5px; }

#sku_reference  { position: relative; clear:both; float:left; width:348px; margin:0px 0 20px 0; }
#sku_reference table td { padding: 3px 0px 3px 0px }

.sku_unit_price {  position: relative;  float:left; width:198px; clear:both;}

.sku_currency { float:left; margin:0px 0 20px 0; }
.sku_currency select { margin-top:3px; }

.sku_add { position: relative; clear:both; float:left;  margin:0px 0 0 0; }
.sku_add .qty { width:25px; margin-right:8px; }
.sku_add .submit { position:absolute; bottom:-1px;  }

.extendInfo { float:left; }

ul.bullSet1  { padding-bottom:20px; overflow:hidden; padding-bottom:10px !important; }
ul.bullSet1 li { margin-left:16px !important; list-style:disc !important; clear:both; padding-bottom:2px; width: 100%; float:none }

ol.bullSet1  { padding-bottom:20px; overflow:hidden; padding-bottom:10px;}
ol.bullSet1 li { margin-left:16px; list-style:disc !important; clear:both; padding-bottom:2px; width: 100%; }

#makeMeScrollable {margin-top:0px; margin-bottom:30px; width:720px; clear:both; height: 185px; position: relative; border-style:solid; border-width:thin;}
#makeMeScrollable div.scrollableArea img { position: relative; float: left; margin: 0; padding: 0; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -o-user-select: none; -user-select: none; }
#makeMeScrollable div.scrollableArea a { display: block; float: left; padding-left: 10px; }
#makeMeScrollable div.scrollableArea p { display: block; float: left; padding-left: 10px; white-space: nowrap;}

.shophomewidth { width:968px !important; }
.roomwidth { width:715px !important; }

#mhra-fmd-placeholder { position: relative; float:left; padding:5px;}
#mhra-fmd-placeholder p { float:right; clear:both; margin-left:10px;}

/* END PRODUCT --------------------------------------------------------------------------------------  */	

/* BUTTONS -----------------------------*/	
/* <a href button  */
a.Btn1,a.Btn1:link,a.Btn1:visited { display:block; clear:both; color:#ffffff !important; background-color:#db5c42; font-size:12px;font-weight:bold; width:85px; height:16px; text-align:center; padding:0; padding-top:5px; padding-bottom:4px; text-decoration:none; margin-left:1px; }
a.Btn1:hover,a.Btn1:active { background-color:#498949; }
/* Form Submit Button 1 */
.formBtn1 { background-color: #db5c42; padding-left: 6px; padding-right: 6px; padding-top: 2px; padding-bottom: 2px; color: #ffffff; border: 1px solid #db5c42; font-size: 12px; font-weight: bold; cursor: pointer; margin-left: 2px; }
.formBtn1:hover { background-color: #498949; border:1px solid #498949; }
.formBtnGreen { background-color: #498949; padding-left: 6px; padding-right: 6px; padding-top: 2px; padding-bottom: 2px; color: #ffffff; border: 1px solid #498949; font-size: 12px; font-weight: bold; cursor: pointer; margin-left: 2px; }

/* END BUTTONS ----------------------- */	

/* START BASKET ---------------------------------------------------------------------------------------------- */	

.basket_nav {position:absolute; top:18px; right:6px; 	font-size:16px; color:#fff;}
#introHead .basket_nav a { color:#fff; padding-left:6px;padding-right:6px; font-size:14px;}

a.postcodelink:link { position:absolute; top:100px ; right:0px; font-size:18px;font-weight:bold }

.flagimg { position:absolute; top:60px ; right:0px; }

table.tblBasket { width:966px; border-spacing: 0; }
table.tb2Basket, table.tb3Basket { border-spacing: 0; }
table tr.tblBasketHd { width:963px; height:30px; font-size:14px; font-weight:bold; color:#808080; }
table tr.tblBasketHd td { border-bottom: 2px solid #84689a;	}
table tr.tblBasketRow td { height:40px; border-bottom: 1px solid #84689a; }
table tr td.tblDelCol { width:50px; text-align:center; }
table tr.tblBasketRow2 td { height:40px; border-bottom: 2px solid #84689a; }
table tr td.tblTotalBasket { font-size:16px; font-weight:bold; text-align:right; color:#725589; padding-right:22px; }
table .qty { width:25px; padding-top:2px; }

.basket_foot { width:963px; height:30px; margin-top:20px; }
.basket_foot a.contShop { position:absolute; right:0; width:110px !important; }
.gift_wrap { position:absolute; left:0; }
.gift_wrap_info { padding-right:8px; }

a.contShop:link { position:absolute; right:0; width:110px !important; }
a.contShop2:link { position:absolute; left:0; }
a.contShop3:link { position:absolute; left:0; width:120px !important}
.voucherFld { padding:1px;  }	



.formstnd { margin-bottom:20px;margin-top:10px; clear:both;}


#checkoutsteps { float: left; position: relative; font-size: 20px; color: #ffffff; background-color: #725589; height: 30px; padding-top: 8px; width: 956px; padding-left: 12px; margin-bottom: 10px; padding-bottom: 8px; margin-top: 10px; }
#checkoutsteps .left {float:left; }
#checkoutsteps .right {float:right; }
#checkoutsteps h1, #checkoutsteps h2 { color:#fff; font-size: 20px; display:inline;}

.del { width:963px; margin-top:40px; clear:both }
.delRow1 {  font-size:18px; color:#725589; padding-bottom:4px;  margin-bottom:20px; }

table tr td.tb2BasketHd { font-size:14px; font-weight:bold; width:145px;}
table.tb3Basket tr { height:10px; } 
table.tb3Basket td { padding-right:10px; min-width:50px; }
table tr td.tb3DelMeth { width: 270px; }
.basketHd  { font-size: 14px;font-weight: bold; padding-top: 10px; }
.delRow2 { font-size:18px; color:#725589; padding-bottom:4px; border-top: 2px solid #84689a; border-bottom: 2px solid #84689a;	margin-top:20px; margin-bottom:6px;  padding:12px 0 12px 0;}
.contChk { float:right; }

#payment {text-align:right; height:20px; float:right}
#payment .formpayment { width:150px; position: relative;  display:inline;}

table.tblcheckout {width: 963px;border-spacing: 0px;margin-top: 10px;clear:both;}
table.tblcheckout td,th { min-width: 300px; text-align:left ;padding:2px;}
table.tblcheckout tr.tblBasketHd td { border-bottom: 2px solid #84689a; }

.deliveryselect { background-color: #db5c42; color: #ffffff; }
.deliveryselect option:hover { background-color: #008000; color: #FFFFFF; }

/* TOP NAVIGATION *****************************************************************************************************************************/

#top_nav { position: absolute; top: 159px; list-style: none; left: 0px; font-size: 15px; z-index: 2000; }
#top_nav li { height: 17px; float: left; text-align: center; position: relative; border-bottom: #dfdfdf solid 4px; margin-right: 15px; padding-bottom: 3px; }
#top_nav li.current { z-index: 1;  border-bottom: #725589 solid 4px; padding-bottom: 3px; text-decoration: none; color: #000; }
#top_nav li:hover { z-index: 1; border-bottom: #725589 solid 4px; padding-bottom: 3px; text-decoration: none; color: #000; }
#top_nav a { color: #808080; outline: 0; text-decoration: none; display: block; }
#top_nav a:hover { color: #725589; outline: 0; text-decoration: none; display: block; }
#top_nav div { position: absolute; left: -999em; margin-top: 1px; width: 320px; padding: 0 10px 10px; border: 1px solid #fff; font-weight: normal; text-align: left; background: #fff; }
#top_nav li:hover div { left: -1px; top: auto; text-decoration: none; }
#top_nav li.dif:hover div { left: -221px; }
#top_nav div h2 { }
#top_nav div p span { color: #725589; font-weight: bold; margin: 10px 0 10px 0; display: block; }
#top_nav div p { float: left; width: 150px; padding-left: 10px; position: relative; }
#top_nav div p a { float: left; clear: left; width: 100%; line-height: 20px; font-size: 12px; }
#top_nav div a:hover, #top_nav div a:focus, #top_nav div a:active { text-decoration: underline; }
#top_nav div .s1, #top_nav div .s2, #top_nav div .s3 { position: absolute; width: 100%; height: 100%; }
#top_nav div .s1 { background: url(/common/images/rightcorner.png) 100% 0 no-repeat; top: 1px; right: -9px; }
#top_nav div .s2 { background: url(/common/images/leftcorner.png) 0 100% no-repeat; bottom: -9px; left: 1px; }
#top_nav div .s3 { background: url(/common/images/shadow.png) 100% 100%; top: 9px; right: -9px; }
#top_nav li:hover .s4 { background: url(/common/images/li-shadow.png) 100% 0 repeat-y; position: absolute; top: 0; right: -9px; height: 100%; padding: 0 8px 0 0; }
#top_nav li:hover .s4 { background: none; }
#top_nav li:hover .dif-s4 { padding-bottom: 9px; }


/*Cookie Bar */

#cookie-bar { background: #725589; height: 24px; line-height: 24px; color: #fff; text-align: center; padding: 3px 0; width:1000px; margin:auto;}
#cookie-bar.fixed {position:fixed; top: 0; left:0; width:100%;}
#cookie-bar p {margin:0; padding:0;}
#cookie-bar a {color:#ffffff; display:inline-block; border-radius:3px; text-decoration:none; padding:0 6px; margin-left:8px;}
#cookie-bar .cb-enable {background:#007700;}
#cookie-bar .cb-enable:hover {background:#009900;}
#cookie-bar .cb-disable {background:#990000;}
#cookie-bar .cb-disable:hover {background:#bb0000;}
#cookie-bar .cb-policy {background:#0033bb;}
#cookie-bar .cb-policy:hover {background:#0055dd;}
