var map = new UIMap();

map.addPageset({
	name: 'allPages',
	description: 'contains elements common to all pages',
	pathRegexp: '.*'
});

map.addElement('allPages', {
	name: 'animate_welcome',
	description: 'describes animate welcome text at the top',
	locator: "css=.animate_welcome img"
});

map.addElement('allPages', {
	name: 'header',
	description: 'describes header on all pages',
	locator: "id=page_header"
});
	
map.addElement('allPages',{
	name: 'f_how_it_works',
	description: 'describes How It Works link in footer',
	locator: "//div[@id='ft_col_1']/ul[@class='ft_navigation']/li/a[contains(@href,'/how_it_works')]"
});

map.addElement('allPages', {
	name: 'f_the_stylists',
	description: 'describes The Stylists link in footer',
	locator: "//div[@id='ft_col_1']/ul[@class='ft_navigation']/li/a[contains(@href,'/meet_the_stylists')]"
});

map.addElement('allPages', {
	name: 'f_lookbooks',
	description: 'describes Lookbooks link in footer',
	locator: "//div[@id='ft_col_1']/ul[@class='ft_navigation']/li/a[contains(@href,'/features')]"
});

map.addElement('allPages', {
	name: 'f_giftcards',
	description: 'describes Gift Cards link in footer',
	locator: "//div[@id='ft_col_1']/ul[@class='ft_navigation']/li/a[contains(@href,'/gift_cards')]"
});

map.addElement('allPages', {
	name: 'f_dazzledeals',
	description: 'describes Dazzle Deals link in footer',
	locator: "//div[@id='ft_col_1']/ul[@class='ft_navigation']/li/a[contains(@href,'/dazzle_deals')]"
});

map.addElement('allPages', {
	name: 'f_faq',
	description: 'describes FAQ link in footer',
	locator: "//div[@id='ft_col_1']/ul[@class='ft_navigation']/li/a[contains(@href,'/faqs')]"
});

map.addElement('allPages', {
	name: 'f_testimonials',
	description: 'describes Testimonials link in footer',
	locator: "//div[@id='ft_col_2']/ul[@class='ft_navigation']/li/a[contains(@href,'testimonials')]"
});

map.addElement('allPages', {
	name: 'f_about_us',
	description: 'describes About Us link in footer',
	locator: "//div[@id='ft_col_2']/ul[@class='ft_navigation']/li/a[contains(@href,'about_us')]"
});

map.addElement('allPages', {
	name: 'f_press',
	description: 'describes Press link in footer',
	locator: "//div[@id='ft_col_2']/ul[@class='ft_navigation']/li/a[contains(@href,'press')]"
});

map.addElement('allPages', {
	name: 'f_affiliate_program',
	description: 'describes Affiliate Program link in footer',
	locator: "//div[@id='ft_col_2']/ul[@class='ft_navigation']/li/a[target='_blank']"
});

map.addElement('allPages', {
	name: 'f_ts_cs',
	description: 'describes Terms & Conditions link in footer',
	locator: "//div[@id='ft_col_2']/ul[@class='ft_navigation']/li/a[contains(@href,'terms_conditions')]"
});

map.addElement('allPages', {
	name: 'f_privacy_policy',
	description: 'describes Privacy Policy link in foore',
	locator: "//div[@id='ft_col_2']/ul[@class='ft_navigation']/li/a[contains(@href,'privacy_policy')]"
});

map.addElement('allPages', {
	name: 'f_freeshipping_easyreturn',
	description: 'describes Free Shipping & Easy Returns link in footer',
	locator: "css=#ft_col_3 div.ft_shipping a"
});

map.addElement('allPages', {
	name: 'f_contact_us',
	description: 'describes Contact Us link in footer',
	locator:  "css=#ft_col_3 div.ft_contact a"
});

map.addElement('allPages', {
	name: 'f_connect_on_fb',
	description: 'describes Connect On facebook link in footer',
	locator: "css=#ft_col_4 div.ft_facebook a"
});

map.addElement('allPages', {
	name: 'f_follow_us_on_twitter',
	description: 'describes follow us on twitter link in footer',
	locator: "css=#ft_col_4 div.ft_twitter a"
});

map.addElement('allPages', {
	name: 'f_watch_our_channel',
	description: 'decribes watch our channel link in footer',
	locator: "css=#ft_col_4 div.ft_media a"
});

map.addElement('allPages', {
	name: 'f_visit_uk',
	description: 'describes visit uk site link in footer',
	locator: "css=a.ft_country.uk_link"
});

map.addElement('allPages', {
	name: 'f_feedback',
	description: 'describes Love our service? Give feedback! link in footer',
	locator: "css=#ft_col_5 div.ft_stella a"
});

map.addElement('allPages', {
	name: 'f_copyright',
	description: 'describes Copyright text at the footer',
	locator: "css=#ft_col_5 div.ft_copyright"	
});

map.addElement("allPages", {
	name: 'f_note',
	description: 'describes Note text at the footer',
	locator: "css=#ft_col_5 div.ft_footnote"
});

map.addElement('allPages', {
	name: 'h_featured_styles',
	description: 'describes featured styles link in header',
	locator: "css=#navbar ul li a.tn_featuredstyles"
});

map.addElement('allPages', {
	name: 'h_how_it_works',
	description: 'describes how it works link in header',
	locator: "css=#navbar ul li a.tn_howitworks"
});

map.addElement('allPages', {
	name: 'h_our_stylists',
	description: 'describes our stylists link in header',
	locator: "css=#navbar ul li a.tn_ourstylists"
});

map.addElement('allPages', {
	name: 'h_get_started',
	description: 'describes get started link in header', 
	locator: "css=#navbar ul li a.tn_getstarted"
});

map.addElement('allPages', {
	name: 'h_already_member', 
	description: 'describes Already a Member? Sign In link in header',
	locator: "id=login_link"
});

map.addElement('allPages', {
	name: 'sign_in_email',
	description: 'describes Email address field in Sign In pop up',
	locator: "id=user_session_login_dropdown"
});

map.addElement('allPages', {
	name: 'sign_in_mail',
	description: 'describes Email address field in Sign In page',
	locator: "id=user_session_email"
});

map.addElement('allPages', {
	name: 'sign_in_pass',
	description: 'describes Password field in Sign In pop up',
	locator: "id=user_session_password"
});

map.addElement('allPages', {
	name: 'sign_in_rememb_me',
	description: 'describes Remember Me checkbow in Sign In pop up',
	locator: "id=user_session_remember_me"
});

map.addElement('allPages', {
	name: 'sign_in_signinbtn',
	description: 'describes Sign In button in Sign In pop up',
	locator: "css=.cta input[type=image]"
});

map.addElement('allPages', {
	name: 'sign_in_forgot', 
	description: 'describes Forgot your password link in Sign In pop up', 
	locator: "css=#login_dropdown div.login_dropdown_bg div.forgot_password_dropdown a"
});

map.addElement('allPages', {
	name: 'h_logo',
	description: 'describes Shoedazzle logo at the left top corner',
	locator: "css=.tn_left a"
})

map.addElement('allPages', {
	name: 'h_welcome_text', 
	description: 'describes Welcome message at the top',
	locator: "css=p.tn_welcome"
});

map.addElement('allPages', {
	name: 'h_us_link',
	description: 'describes US redirect link which is placed at the top',
	locator: "css=a.us_link"
});

map.addElement('allPages', {
	name: 'h_call_text', 
	description: 'describes text with phone number to call',
	locator: "css=li.tn_phone last"
});

map.addElement('allPages', {
	name: 'h_admin',
	description: 'describes Admin link in header for logged in admins',
	locator: "css=#ndd_menu li.tn_admin a"
});

map.addElement('allPages', {
	name: 'h_invite_friends',
	description: 'describes Invite friends link in header for logged in users',
	locator: "css=.tn_invite_friends a"
});

map.addElement('allPages', {
	name: 'h_my_account',
	description: 'describes My Account link in header for logged in users',
	locator: "css=#ndd_menu li.tn_account.last a.tn_account_link"
});

map.addElement('allPages', {
	name: 'h_account_details', 
	description: 'descibes Account Details link in header for logged in users',
	locator: "css=#ndd_menu li.tn_account.last ul li a"
});

map.addElement('allPages', {
	name: 'h_my_favorites',
	description: 'describes My Favorites link in header for logged in users',
	locator: "css=#ndd_menu li.tn_account.last ul li a.ndd_account_myfavorites"
});

map.addElement('allPages', {
	name: 'h_style_points',
	description: 'describes Style points link in header for logged in users',
	locator: "//ul[@id='ndd_menu']/li[@class='tn_account last']/ul/li[3]/a"
});

map.addElement('allPages', {
	name: 'h_signout',
	description: 'describes Logout link in header for logged in users',
	locator: "css=#ndd_menu li.tn_account.last ul li a.ndd_account_signout.last"
});

map.addElement('allPages', {
	name: 'h_credits',
	description: 'describes Credits number',
	locator: "css=.tn_credits"
});

map.addElement('allPages', {
	name: 'h_my_showroom',
	description: 'describes My Showroom link in header for logged in users',
	locator: "css=a.mn_myshowroom"
});

// map.addElement('allPages', {
// 	name: 'h_features',
// 	description: 'describes Features link in header for logged in users',
// 	locator: "css=a.mn_features"
// });

map.addElement('allPages', {
	name: 'h_lookbooks',
	description: 'describes Lookbooks link in header',
	locator: "css=a.mn_lookbooks"
});

map.addElement('allPages', {
	name: 'h_collections',
	description: 'describes Collections link in header for logged in users',
	locator: "css=a.mn_collections"
});

map.addElement('allPages', {
	name: 'h_dazzledeals',
	description: 'describes DazzleDeals link in header for logged in users',
	locator: "css=a.mn_dazzledeals"
});

map.addElement('allPages', {
	name: 'h_friends_stylists',
	description: 'describes Friends&Stylists link in header for logged in users',
	locator: "css=a.mn_friendsstylists"	
});

map.addElement('allPages', {
	name: 'h_holiday_shop',
	description: 'describes Holiday shop link in header for logged in users',
	locator: "css=a.mn_holidayshop"
});

map.addElement('allPages', {
	name: 'notification',
	description: 'describes clickable Notification area at the top under header',
	locator: "css=.promotion_bar"
});

map.addElement('allPages', {
	name: 'notification_active',
	description: 'describes clickable Notification area at the top under header',
	locator: "css=.promotion_bar div div a"
});

map.addElement('allPages', {
	name: 'notification_carousel',
	description: 'describes Notification carousel at the top ',
	locator: "id=notification_details"
});

map.addElement('allPages', {
	name: 'close_notification',
	description: 'describes cross button on notification carousel',
	locator: "css=#notification_details div.close"
});

// map.addElement('allPages', {
// 	name: 'h_friends_showrooms',
// 	description: 'describes Friends showrooms link in header for logged in users',
// 	locator: "css=a.mn_friendsshowrooms"
// });

// map.addElement('allPages', {
// 	name: 'h_casuals',
// 	description: 'describes Casuals link in header for logged in users',
// 	locator: "css=a.mn_casuals"
// });
// 
// map.addElement('allPages', {
// 	name: 'h_take_two',
// 	description: 'describes Take Two! link in header for logged in user',
// 	locator: "css=a.mn_taketwo.last"
// });

map.addElement('allPages', {
	name: 'redirect_modal',
	description: 'describes US redirect modal which is displayed after pressing redirect button at the top',
	locator: "id=us_uk_redirect"
});

map.addElement('allPages', {
	name: 'take_to',
	description: 'describes redirect button to Uk site',
	locator: "css=#us_uk_redirect a.take_to"
});

map.addElement('allPages', {
	name: 'keep_on',
	description: 'describes redirect button to US site',
	locator: "css=#us_uk_redirect a.keep_on"
});

map.addElement('allPages', {
	name: 'redirect_close',
	description: 'describes close button on redirect modal',
	locator: "id=fmodClose"
});

map.addElement('allPages', {
	name: 'error', 
	description: 'describes Error section at the top',
	locator: "id=errorExplanation"
});

map.addElement('allPages', {
	name: 'h_shopping_bag_link',
	description: 'describes Shopping bag link',
	locator: "css=#shopping_bag_link a"
});

map.addElement('allPages', {
	name: 'h_item_count_link',
	description: 'describes Shopping bag link',
	locator: "css=#item_count_link a"
});

map.addElement('allPages', {
	name: 'shopping_bag_cross',
	description: 'describes cross button on Shopping bag popup',
	locator: "css=#quickview_shopping_bag div.bag_content a.close"
});

map.addElement('allPages', {
	name: 'h_checkout',
	description: 'describes Checkout button in header',
	locator: "css=#shopping_bag a.btn_checkout"
});

map.addElement('allPages', {
	name: 'shopping_bag_continue',
	description: 'describes Continue shopping link on Shopping bag popup',
	locator: "css=#quickview_shopping_bag div.footer p.bttn a.continue"
});

map.addElement('allPages', {
	name: 'shopping_bag_checkout',
	description: 'describes Checkout button on Shopping bag popup',
	locator: "id=shopping_bag_checkout_button"
});

map.addElement('allPages', {
	name: 'quickview',
	description: 'describes quickview popup in all pages',
	locator: "css=div.box_quickview"
});

map.addElement('allPages', {
	name: 'quick_add_to_bag',
	description: 'describes Add to bag button in quickview popup',
	locator: "css=input#add_product_to_cart_submit_button"
});

map.addElement('allPages', {
	name: 'quick_product_image', 
	description: 'describes product image in quickview popup',
	locator: "css=.quick_product div.showroom_sel_cntnr div.showroom_sel_shoe span.tooltip a.track_area_trigger img.product_image"
});

map.addElement('allPages', {
	name: 'quickview_label', 
	description: 'describes quickview label',
	locator: "css=.tooltip a.label_quickview"
});

map.addElement('allPages', {
	name: 'quickview_view_details',
	description: 'describes View details link on Quickview popup',
	locator: "css=.quick_desc a.view_details"
});

map.addElement('allPages', {
	name: 'quickview_add_to_favorites',
	description: 'describes add to favorites link on Quickview modal',
	locator: "css=.quick_desc a.add_favorites"
});

map.addElement('allPages', {
	name: "quickview_cross",
	description: 'describes cross link at quickview modal',
	locator: "css=.box_quickview div.close a"
});

map.addElement('allPages', {
	name: 'quickview_featured_label',
	description: 'describes quickview label for featured product',
	locator: "css=div[id='showroom_sel_bar_inner'][data-area='featured_product'] div.showroom_sel_cntnr div.showroom_sel_shoe span.tooltip a.label_quickview"
});

map.addElement('allPages', {
	name: 'complete_the_look',
	description: 'describe Complete the look modal',
	locator: "id=cross_sell_products"
});

map.addElement('allPages', {
	name: 'close_complete_the_look',
	description: 'describes Cross button on Complete the look modal',
	locator: "css=div[aria-labelledby='ui-dialog-title-cross_sell_products'] div a.ui-dialog-titlebar-close"
});

map.addElement('allPages', {
	name: 'ctl_continue_shopping',
	description: 'describes Continue shopping link on Complete the look modal',
	locator: "css=div#cross_sell_products.dialog a.link_to_showroom"
});

map.addElement('allPages', {
	name: 'ctl_proceed_to_checkout',
	description: 'describes proceeded to checkout button on Complete the look modal',
	locator: "css=div#cross_sell_products.dialog a.btn_proceed_to_checkout"
});

map.addElement('allPages', {
	name: 'wait_list_confirm',
	description: 'describes Wait list confirmation modal',
	locator: "css=#wait_list_confirm form[data-area=wait_list_confirmation]"
});

map.addElement('allPages', {
	name: 'wait_list_continue_shopping',
	description: 'describes Cross button on Wait list confirmation modal',
	locator: "css=div#wait_list_confirm div.titlebar p a img"
});

map.addElement('allPages', {
	name: 'wait_list_proceed_to_checkout',
	description: 'describes Proceed to checkout button on Wait list confirmation modal',
	locator: "css=div#wait_list_confirm form input.btn_proceed_to_checkout"
});

map.addElement('allPages', {
	name: 'wait_list_confirm_item',
	description: 'describe item on Wait list confirmation modal',
	locator: "css=.product.item_waitlist a.track_area_trigger"
});

map.addElement('allPages', {
	name: 'dazzledeal_modal',
	description: 'describes Dazzle Deals modal window',
	locator: "id=dd_modal_container_top"
});

map.addElement('allPages', {
	name: 'close_dazzledeal_modal', 
	description: 'describes Close window link on DazzleDeals modal',
	locator: "css=#closeDD a"
});

map.addElement('allPages', {
	name: 'dazzledeal_modal_image',
	description: 'describes image on DazzleDeals modal',
	locator: "id=dd_dealwaiting"
});

map.addElement('allPages', {
	name: 'show_dazzledeal',
	description: 'describes Show Me My DazzleDeal button',
	locator: "id=dd_cta_button"
});

map.addElement('allPages', {
	name: 'timer',
	description: 'describes timer on DazzleDeal modal',
	locator: "id=dd_clock_container"
});

map.addElement('allPages', {
	name: 'like_us_modal',
	description: 'describes Like Us modal',
	locator: "id=likes_modal"
});

map.addElement('allPages', {
	name: 'close_like_us_modal',
	description: 'describes Cross button on Like Us modal',
	locator: "id=pmodClose"
});

map.addElement('allPages', {
	name: 'sign_in_modal', 
	description: 'describes Sign in modal', 
	locator: "id=login_modal"
});

map.addElement('allPages', {
	name: 'header_signin_modal', 
	description: 'describes header of Member Sign in modal',
	locator: "css=#login_modal div h2"
});

map.addElement('allPages', {
	name: 'email_on_signin_modal',
	description: 'describes Email field on Member sign in modal', 
	locator: "css=#existing_member form fieldset input#user_session_email"
});

map.addElement('allPages', {
	name: 'password_on_signin_modal', 
	description: 'describes Password field on Member sign in modal', 
	locator: "css=#existing_member form fieldset input#user_session_password"
});

map.addElement('allPages', {
	name: 'signin_btn_on_signin_modal', 
	description: 'describes Sign in button on Member Sign in modal', 
	locator: "css=#existing_member form div.cta input"
});

map.addElement('allPages', {
	name: 'join_signin_modal', 
	description: 'describes Join for free button on Member Sign in modal', 
	locator: "css=#new_member div.cta a img"
});

map.addElement('allPages', {
	name: 'new_shipping', 
	description: 'describes New shipping address modal', 
	locator: "id=new_address"
});

map.addElement('allPages', {
	name: 'edit_shipping', 
	description:'describes Edit shipping address modal', 
	locator: "id=edit_address"
});

map.addElement('allPages', {
	name: 'shipping_nickname',
	description: 'describes Address Nickname field in New/Edit Shipping address modal',
	locator: "id=address_address_name"
});

map.addElement('allPages', {
	name: 'shipping_firstname',
	description: 'describes Firstname field in New/Edit Shipping Address modal',
	locator: "id=address_firstname"
});

map.addElement('allPages', {
	name: 'shipping_lastname',
	description: 'describes Lastname field in New/Edit Shipping Address modal',
	locator: "id=address_lastname"
});

map.addElement('allPages', {
	name: 'shipping_address1',
	description: 'describes Address1 field in New/Edit Shipping Address modal',
	locator: "id=address_address1"
});

map.addElement('allPages', {
	name: 'shipping_address2', 
	description: 'describes Address2 field on New/Edit shipping address modal',
	locator: "id=address_address2"
});

map.addElement('allPages', {
	name: 'shipping_country',
	description: 'describes Country dropdown in New/Edit Shipping address modal',
	locator: "id=address_country_id"
});

map.addElement('allPages', {
	name: 'shipping_city',
	description: 'describes City field in New/Edit Shipping Address modal',
	locator: "id=address_city"
});

map.addElement('allPages', {
	name: 'shipping_state',
	description: 'describes State dropdown in New/Edit Shipping Address modal',
	locator: "id=address_state_id"
});

map.addElement('allPages', {
	name: 'shipping_zipcode',
	description: 'describes Zipcode field in New/Edit Shipping Address modal',
	locator: "id=address_zipcode"
});

map.addElement('allPages', {
	name: 'shipping_phone',
	description: 'describes Phone number field in New/Edit Shipping Address modal',
	locator: "id=address_phone"
});

map.addElement('allPages', {
	name: 'make_default_shipping', 
	description: 'describes Make this my default shipping method checkbox on New/Edit Shipping Address modal',
	locator: "id=is_default"
});

map.addElement('allPages', {
	name: 'save_edition',
	description: 'describes Save button on Edit Shipping Address and Payment method modals',
	locator: "css=.button.edit_submit_button a"
});

map.addElement('allPages', {
	name: 'save_creation', 
	description: 'describes Save button on New Shipping Address and Payment method modals',
	locator: "css=.button.new_submit_button a"
});

map.addElement('allPages',{
	name: 'shipping_cancel', 
	description: 'describes Cancel button on New/Edit Shipping Address modal',
	locator: "css=form .button.second_button a"
});

map.addElement('allPages', {
	name: 'yes', 
	description:'describes Yes button on Confirmation modal', 
	locator: "css=#change_order_address_button a"
});

map.addElement('allPages', {
	name: 'no', 
	description:'describes No button on Confirmation modal', 
	locator: "css=#keep_order_address_button a"
});

map.addElement('allPages', {
	name: 'new_billing', 
	description: 'describes New payment method modal on Billing information page', 
	locator: "id=new_payment_method"
});

map.addElement('allPages', {
	name: 'edit_billing', 
	description: 'describes Edit payment method modal on Billing information page', 
	locator: "id=edit_payment_method"
});

map.addElement('allPages', {
	name: 'billing_firstname',
	description: 'describes Firstname field on New/Edit Payment method modal', 
	locator: "id=creditcard_first_name"
});

map.addElement('allPages', {
	name: 'billing_lastname', 
	description: 'describes Lastname field on New/Edit Payment method modal',
	locator: "id=creditcard_last_name"
});

map.addElement('allPages', {
	name: 'billing_card_number', 
	description: 'describes Credit card number field on New/Edit Payment method modal', 
	locator: "id=creditcard_cc_number"
});

map.addElement('allPages', {
	name: 'billing_cvv', 
	description: 'describes CVV field on New/Edit Payment method modal', 
	locator: "id=creditcard_verification_value"
});

map.addElement('allPages', {
	name: 'billing_type', 
	description: 'describes Type drop down on New/Edit Payment method modal', 
	locator: "id=creditcard_cc_type"
});

map.addElement('allPages', {
	name: 'billing_expiration_year', 
	description: 'describes Expiration year drop down field on New/Edit Payment method modal', 
	locator: "id=creditcard_year"
});

map.addElement('allPages', {
	name: 'billing_expiration_month', 
	description: 'describes Expiration month drop down field on New/Edit Payment method modal', 
	locator: "id=creditcard_month"
});

map.addElement('allPages', {
	name: 'billing_address1', 
	description: 'describes Address1 field on New/Edit Payment method modal', 
	locator: "id=creditcard_address_attributes_address1"
});

map.addElement('allPages', {
	name: 'billing_address2', 
	description: 'describes Address2 field on New/Edit Payment method modal', 
	locator: "id=creditcard_address_attributes_address2"
});

map.addElement('allPages', {
	name: 'billing_country', 
	description: 'describes Country drop down field on New/Edit Payment method modal', 
	locator: "id=creditcard_address_attributes_country_id"
});

map.addElement('allPages', {
	name: 'billing_city', 
	description: 'describes City field on New/Edit Payment method modal', 
	locator: "id=creditcard_address_attributes_city"
});

map.addElement('allPages', {
	name: 'billing_state', 
	description: 'describes State drop down field on New/Edit Payment method modal',
	locator: "id=creditcard_address_attributes_state_id"
});

map.addElement('allPages', {
	name: 'billing_zipcode', 
	description: 'describes Zipcode field on New/Edit Payment method modal', 
	locator: "id=creditcard_address_attributes_zipcode"
});

map.addElement('allPages', {
	name: 'billing_phone', 
	description: 'describes Phone number field on New/Edit Payment method modal', 
	locator: "id=creditcard_address_attributes_phone"
});

map.addElement('allPages', {
	name: 'make_default_billing', 
	description: 'describes Make this my default payment method  checkbox', 
	locator: "id=is_default"
});

map.addElement('allPages', {
	name: 'loading',
	description: 'describes circling Loading... ',
	locator: "css=img[alt='Ajax-loader']"
})

/*Login page elements */
map.addPageset({
	name: 'loginPage', 
	description: 'describes elements common to login page', 
	pathRegexp: "login.*"
});

map.addElement('loginPage', {
	name: 'email', 
	description: 'describes Email field', 
	locator: "id=user_session_email"
});

map.addElement('loginPage', {
	name: 'password', 
	description: 'describes Password field', 
	locator: "css=#login_box_inner form fieldset input[id=user_session_password]"
});

map.addElement('loginPage', {
	name: 'signin_btn', 
	description: 'describes Sign in button',
	locator: "css=#login_box_inner form input[type=image]"
});


/* Shoping Bag page elements */
map.addPageset({
	name: 'shopBag',
	description: 'contains elements contained to within the shopping bag',
	pathRegexp: 'shopping_cart/orders.*'
});

map.addElement('shopBag', {
	name: 'error', 
	description: 'describes error message section on Shopping bag page', 
	locator: "css=.errorExplanation"
});

map.addElement('shopBag', {
	name: 'premium_pink_radio',
	description: 'describes premium pink radio shipping options button in shopping bag',
	locator: "id=checkout_shipping_method_id_8"
});

map.addElement('shopBag', {
	name: 'express_pink_radio',
	description: 'describes express pink radio shipping options button in shopping bag',
	locator: "id=checkout_shipping_method_id_9"
});

map.addElement('shopBag', {
	name: 'new_payment',
	description: 'describes New payment method modal on Shopping bag',
	locator: "id=new_creditcard" 
});

map.addElement('shopBag', {
	name: 'edit_payment',
	description: 'describes Edit payment method modal on Shopping bag',
	locator: "css=#generic_dialog_form form.edit_creditcard"
})

map.addElement('shopBag', {
	name: 'sb_edit_shipping_address_link',
	description: 'describes edit shipping address link in shopping bag',
	locator: "css=#edit_shipping_address_button a"
});

map.addElement('shopBag', {
	name: 'edit_address',
	description: 'describes Edit shipping address modal',
	locator: "css=#generic_dialog_form form.edit_address"
});

map.addElement('shopBag', {
	name: 'sb_select_address_byname',
	description: 'describes selector dropdown when selecting shipping addresses by name',
	locator: "select_shipping_address"
});

map.addElement('shopBag', {
	name: 'save', 
	description: 'describes Save button on New/Edit Shipping Address and Payment method modals on Shopping bag page',
	locator: "css=#generic_dialog_submit_button a"
});

map.addElement('shopBag', {
	name: 'sb_select_new_billing',
	description: 'describes select new billing info label in shopping bag',
	locator: "select_payment_method"
});

map.addElement('shopBag', {
	name: 'line_item_image', 
	description: 'describes line item imageon Shopping bag',
	args: [{
		name: 'index',
		description: 'describes index of item image on Shopping bag page',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('cart_items').getElementsByTagName('div');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
 		return "//div[@id='cart_items']/div[" + args.index + "]/a/img";
	}
});

map.addElement('shopBag', {
	name: 'remove_line_item', 
	description: 'describes cross button for line item  on Shopping bag',
	args: [{
		name: 'index',
		description: 'describes index of cross button for item on Shopping bag page',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('cart_items').getElementsByTagName('div');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
 		return "//div[@id='cart_items']/div[" + args.index + "]/div[@class='product_info']/div[@class='product_edit_remove']/a";
	}
});

map.addElement('shopBag', {
	name: 'place_order_right',
	description: 'describes Place order button at the right',
	locator: "id=right-place-order-button"
});

map.addElement('shopBag', {
	name: 'place_order_left', 
 	description: 'describes left checkout button on shopping bag page',
 	locator: "css=.floatleft img.place-order"
});

map.addElement('shopBag', {
	name: 'continue_shopping', 
	description: 'describes Continue Shopping button on Shopping bag page', 
	locator: "css=.left_col_610 div div div.button.second_button a"
});

map.addElement('shopBag', {
	name: 'calculation_section',
	description: 'describes section with calculations',
	locator: "id=calculation_contents"
});

map.addElement('shopBag', {
	name: 'subtotal_value', 
	description: 'desribes Subtotal value', 
	locator: "//div[@id='calculation_contents']/table/tbody/tr/td[2]"
});

map.addElement('shopBag', {
	name: 'discount_value',
	description: 'describes Discount value',
	locator: "//div[@id='calculation_contents']/table/tbody/tr[2]/td[2]"
});

map.addElement('shopBag', {
	name: 'remove_discount', 
	description: 'describes remove discount link',
	locator: "//div[@id='calculation_contents']/table/tbody/tr[2]/td/a"
});

map.addElement('shopBag', {
	name: 'total', 
	description: 'describes Order Total value on Shopping cart page',
	locator: "css=.money.total" 
});

map.addElement('shopBag', {
	name: 'empty_shopping_bag',
	description: 'describes section on Shopping bag which displays when user deletes all items',
	locator: "id=empty_cart"
});

map.addElement('shopBag', {
	name: 'return_to_showroom',
	description: 'describes Return to My Showroom button',
	locator: "css=#empty_cart div a"
});

map.addElement('shopBag', {
	name: 'apply_credits_link',
	description: 'describes Apply credits or Promo codes link',
	locator: "id=checkout_payment_options_link"
});

map.addElement('shopBag', {
	name: 'promo_code_field',
	description: 'describes Promo code field on Payment options modal',
	locator: "id=coupon_code"
});

map.addElement('shopBag', {
	name: 'apply_promo',
	description: 'describes Apply button on Payment options modal',
	locator: "css=#promo_code_submit a"
});

map.addElement('shopBag', {
	name: 'apply_courtesy',
	description: 'describes Apply button for Courtesy discount ',
	locator: "css=#courtesy_code_submit a"
});

map.addElement('shopBag', {
	name: 'cancel_promo',
	description: 'describes Cancel button on Payment options modal',
	locator: "link=Cancel"
});

map.addElement('shopBag', {
	name: 'shipping_options_section',
	description: 'describes Shipping options section on Shopping bag page',
	locator: "id=shipping_options"
});

map.addElement('shopBag', {
	name: 'payment_method_section',
	description: 'describes Payment method section',
	locator: "id=payment_method"
});

map.addElement('shopBag', {
	name: 'shipping_address_section',
	description: 'describes Shipping Address section',
	locator: "id=shipping_address"
});

map.addElement('shopBag', {
	name: 'banner',
	description: 'describes Banner on Shopping bag page',
	locator: "css=.holiday_gift_banner a"
});

map.addElement('shopBag', {
	name: 'items_list',
	description: 'describes Items list on Shopping bag page',
	locator: "id=cart_items"
});

map.addElement('shopBag', {
	name: 'free_shipping_link',
	description: 'describes Free Shipping & Effortless Returns* link',
	locator: "css=#free_shipping_link a.free_shipping_link"
});

map.addElement('shopBag', {
	name: 'free_shipping_modal',
	description: 'describes modal after pressing Free Shipping & Effortless Returns* link',
	locator: "id=free_shipping_modal"
});

map.addElement('shopBag', {
	name: 'residents',
	description: 'describes Proposition 65 (CA Residents) link',
	locator: "css=#prop65_link a.prop_65_link"
});

map.addElement('shopBag', {
	name: 'residents_modal',
	description: 'describes modal after pressing Proposition 65 (CA Residents) link',
	locator: "id=prop_65_modal"
});

map.addElement('shopBag', {
	name: 'close',
	description: 'describes Cross button to close modal',
	locator: "id=qpopClose"
});


/* first purchase Shopping bag elements */
map.addPageset({
	name: 'initial_shopping_bagPage', 
	description: 'describes elements common to initial Shopping bag page',
	pathRegexp: "registrations/.*"
});

map.addElement('initial_shopping_bagPage', {
	name: 'first_purchase_discount_label', 
	description: 'describes first purchase discount label', 
	locator: "//div[@id='calculation_contents]/table/tbody/tr[2]/td"
});

map.addElement('initial_shopping_bagPage', {
	name: 'first_purchase_discount', 
	description: 'describes first purchase discount value', 
	locator: "//div[@id='calculation_contents]/table/tbody/tr[2]/td[@class='money']"
});

map.addElement('initial_shopping_bagPage', {
	name: 'user_firstname', 
	description: 'describes First name field on Profile Info section', 
	locator: "id=user_subscription_attributes_first_name"
});

map.addElement('initial_shopping_bagPage', {
	name: 'user_lastname', 
	description: 'describes Last name field on Profile Info section', 
	locator: "id=user_subscription_attributes_last_name"
});

map.addElement('initial_shopping_bagPage', {
	name: 'user_birthday_month', 
	description: 'describes Birthday month drop down',
	locator: "id=user_subscription_attributes_birthdate_2i"
});

map.addElement('initial_shopping_bagPage', {
	name: 'user_birthday_day', 
	description: 'describes Birthday day drop down ',
	locator: "id=user_subscription_attributes_birthdate_3i"
});

map.addElement('initial_shopping_bagPage', {
	name: 'user_birthday_year',
	description: 'describes Birthday year drop down',
	locator: "id=user_subscription_attributes_birthdate_1i"
});

map.addElement('initial_shopping_bagPage', {
	name: 'creditcard_radio', 
	description: 'describes Credit card radiobutton', 
	locator: "id=use_creditcard"
});

map.addElement('initial_shopping_bagPage', {
	name: 'giftcard_radio', 
	description: 'describes Gift card radiobutton', 
	locator: "id=use_gift_card"
});

map.addElement('initial_shopping_bagPage', {
	name: 'giftcard_code', 
	description: 'describes Gift card code field on Billing info',
	locator: "id=gift_code"
});

map.addElement('initial_shopping_bagPage', {
	name: 'name_on_card', 
	description: 'describes Name on Card field', 
	locator: "id=user_creditcard_attributes_full_name"
});

map.addElement('initial_shopping_bagPage', {
	name: 'card_type', 
	description: 'describes Card Type drop down field', 
	locator: "id=user_creditcard_attributes_cc_type"
});

map.addElement('initial_shopping_bagPage', {
	name: 'creditcard_number', 
	description: 'describes Credit card number', 
	locator: "id=user_creditcard_attributes_cc_number"
});

map.addElement('initial_shopping_bagPage', {
	name: 'expiration_month', 
	description: 'describes month drop down on Expiration date ', 
	locator: "id=user_creditcard_attributes_month"
});

map.addElement('initial_shopping_bagPage', {
	name: 'expiration_year', 
	description: 'describes year drop down on Expiration date', 
	locator: "id=user_creditcard_attributes_year"
});

map.addElement('initial_shopping_bagPage', {
	name: 'cvv',
	description: 'describes CVV field', 
	locator: "id=user_creditcard_attributes_verification_value"
});

map.addElement('initial_shopping_bagPage', {
	name: 'whats_this', 
	description: 'describes Whats this link', 
	locator: "css=a.open_cvv"
});

map.addElement('initial_shopping_bagPage', {
	name: 'billing_address1', 
	description: 'describes Street address 1 field on Billing info', 
	locator: "id=user_bill_address_attributes_address1"
});

map.addElement('initial_shopping_bagPage', {
	name: 'billing_address2', 
	description: 'describes Street Address 2 field on Billing info', 
	locator: "id=user_bill_address_attributes_address2"
});

map.addElement('initial_shopping_bagPage', {
	name: 'billing_city', 
	description: 'describes City field on Billing info',
	locator: "id=user_bill_address_attributes_city"
});

map.addElement('initial_shopping_bagPage', {
	name: 'billing_state', 
	description: 'describes State drop down on Billing info', 
	locator: "id=user_bill_address_attributes_state_id"
});

map.addElement('initial_shopping_bagPage', {
	name: 'billing_zipcode', 
	description: 'describes Postal Code field on Billing info', 
	locator: "id=user_bill_address_attributes_zipcode"
});

map.addElement('initial_shopping_bagPage', {
	name: 'billing_phone', 
	description: 'describes Phone number field on Billing info', 
	locator: "id=user_bill_address_attributes_phone"
});

map.addElement('initial_shopping_bagPage', {
	name: 'same_as_billing_radio',
	description: 'describes The same as Billing address radio button', 
	locator: "id=use_billing"
});

map.addElement('initial_shopping_bagPage', {
	name: 'different_shipping_radio',
	description: 'describes Different Shipping address radio button',
	locator: "id=use_shipping"
});

map.addElement('initial_shopping_bagPage', {
	name: 'shipping_firstname', 
	description: 'describes Firstname field on Shipping Info ',
	locator: "id=user_ship_address_attributes_firstname"
});

map.addElement('initial_shopping_bagPage', {
	name: 'shipping_lastname', 
	description: 'describe Last name field on Shipping info', 
	locator: "id=user_ship_address_attributes_lastname"
});

map.addElement('initial_shopping_bagPage', {
	name: 'shipping_address1', 
	description: 'describes Street address 1 field on Shipping info', 
	locator: "id=user_ship_address_attributes_address1"
});

map.addElement('initial_shopping_bagPage', {
	name: 'shipping_address2', 
	description: 'describes Street Address 2 field on Shipping info', 
	locator: "id=user_ship_address_attributes_address2"
});

map.addElement('initial_shopping_bagPage', {
	name: 'shipping_city', 
	description: 'describes City field on Shipping info', 
	locator: "id=user_ship_address_attributes_city"
});

map.addElement('initial_shopping_bagPage', {
	name: 'shipping_state', 
	description: 'describes State drop down on Shipping info', 
	locator: "id=user_ship_address_attributes_state_id"
});

map.addElement('initial_shopping_bagPage', {
	name: 'shipping_zipcode', 
	description: 'describes Postal code field on Shipping info', 
	locator: "id=user_ship_address_attributes_zipcode"
});

map.addElement('initial_shopping_bagPage', {
	name: 'shipping_phone', 
	description: 'describes Phone Number field on Shipping info ',
	locator: "id=user_ship_address_attributes_phone"
});

map.addElement('initial_shopping_bagPage', {
	name: 'place_order_right', 
	description: 'describes right(displayed under all fields) Place order button', 
	locator: "id=registration-submit"
});

map.addElement('initial_shopping_bagPage', {
	name: 'place_order_left', 
	description: 'describes left Place order button',
	locator: "id=right-place-order-button"
});

map.addElement('initial_shopping_bagPage', {
	name: 'apply_credits_link',
	description: 'describes Apply credits or Promo codes link',
	locator: "id=checkout_payment_options_link"
});

map.addElement('initial_shopping_bagPage', {
	name: 'promo_code_field',
	description: 'describes Promo code field on Payment options modal',
	locator: "id=coupon_code"
});

map.addElement('initial_shopping_bagPage', {
	name: 'apply_promo',
	description: 'describes Apply button on Payment options modal',
	locator: "css=#promo_code_submit a"
});

map.addElement('initial_shopping_bagPage', {
	name: 'cancel_promo',
	description: 'describes Cancel button on Payment options modal',
	locator: "//div[@class='button'][2]/a"
});

/* elements common to page after completion order */
map.addPageset({
	name: 'completed_orderPage', 
	description: 'describes elements common to page after completion order',
	pathRegexp: "orders.*completed.*"
});

map.addElement('completed_orderPage', {
	name: 'thankyou_for_order_modal', 
	description: 'describes Thank you for your order modal',
	locator: "id=referrals_facebook"
});

map.addElement('completed_orderPage', {
	name: 'thankyou_for_order_header',
	description: 'describes header on Thank you for your order modal',
	locator: "css=#referrals_facebook h1 img"
});

map.addElement('completed_orderPage', {
	name: 'close_thankyou_for_order_modal',
	description: 'describes cross button on Thank you for your order modal',
	locator: "css=a.ui-dialog-titlebar-close"
});

map.addElement('completed_orderPage', {
	name: 'thankyou_invite_link',
	description: 'describes Invite link on Thank you for your order modal',
	locator: "css=#order_summary_share div.share_module input.auto_select"
});

map.addElement('completed_orderPage', {
	name: 'thankyou_post_to_wall',
	description: 'describes Post to your wall link',
	locator: "css=#order_summary_share div.share_module a.FBshareLink"
});

map.addElement('completed_orderPage', {
	name: 'print_this_page',
	description: 'describes Print this page link on page after completion order',
 	locator: "//div[@id='hdr_container']/div[2]/div/a"
});

map.addElement('completed_orderPage', {
	name: 'back_to_showroom',
	description: 'describes Back to My Showroom page', 
	locator: "//div[@id='hdr_container']/div[2]/div[2]/a"
});

map.addElement('completed_orderPage', {
	name: 'whats_this',
	description: 'describes Whats this link',
	locator: "css=tooltip.whats_this img"
});

/* Press page elements */
map.addPageset({
	name: 'pressPage',
	description: "contains elements common to Press page",
	pathRegexp: "press/.*"
});

map.addElement('pressPage', {
	name: 'fresh_press',
	description: 'describes carousel image',
	locator: "id=lookbooks_expanded"
});

map.addElement('pressPage', {
	name: 'join_for_free_btn',
	description: "describes Join for Free button",
	locator: "css=img.join_btn"
});

map.addElement('pressPage', {
	name: 'stylist_video_carousel',
	description: 'describes Stylist video carousel',
	locator: "id=stylist_video_carousel"
});

map.addElement('pressPage', {
	name: 'stylist_carousel_next',
	description: "describes next arrow on Stylist video carousel",
	locator: "css=#stylist_video_carousel_container div div div.jcarousel-next"
});

map.addElement('pressPage', {
	name: 'stylist_carousl_prev',
	description: "describes previous arrow on Stylist video carousel",
	locator: "css=#stylist_video_carousel_container div div div.jcarousel-prev"
});

map.addElement('pressPage', {
	name: "logo_collection",
	description: 'describes Press logo collection',
	locator: "css=img[alt='Press_logo_collection']"
})

/* Gift Cards page elements */
map.addPageset({
	name:'gift_cardsPage',
	description: "contains elements common on Gift Cards page",
	pathRegexp: 'gift_cards/.*'
});

// map.addElement('gift_cardsPage', {
// 	name: 'email_giftcard',
// 	description: "describes Email a gift card image link",
// 	locator: "css=#deliveryMethods a[data-method=email]"
// });
// 	
// map.addElement('gift_cardsPage', {
// 	name: 'print_giftcard',
// 	description: "describes Print a gift card image link",
// 	locator: "css=#deliveryMethods a[data-method=print]"
// });
// 	
// map.addElement('gift_cardsPage', {
// 	name: 'mail_giftcard',
// 	description: 'describes Mail a gift card image link',
// 	locator: "css=#deliveryMethods a[data-method=mail]"
// });

map.addElement('gift_cardsPage', {
	name: 'buy_gift_card',
	description: 'describes Buy a gift card button',
	locator: "css=#form_gift_select button[type=submit]"
});

map.addElement('gift_cardsPage', {
	name: 'learn_how_it_works',
	description: 'describes Learn how it works video link',
	locator: "css=.gc_actions div a.video_link"
});

map.addElement('gift_cardsPage', {
	name: 'learn_how_it_works_modal',
	description: 'describes Learn how it works video modal',
	locator: "id=movie"
});

map.addElement('gift_cardsPage', {
	name: 'watch_client_reviews',
	description: 'describes Watch Client reviews video link',
	locator: "//div[@class='gc_actions']/div[3]/a[@class='video_link']"
}); 

map.addElement('gift_cardsPage', {
	name: 'watch_client_reviews_modal',
	description: 'describes Watch Client reviews video modal',
	locator: "id=cv_player"
});

map.addElement('gift_cardsPage', {
	name: 'close_modal',
	description: 'describes Close button on modal',
	locator: "css=#fmodContent div#fmodClose"
});

map.addElement('gift_cardsPage', {
	name: 'redeem_giftcard',
	description: 'describes Redeem gift card link',
	locator: "css=div.redeem_giftcard a"
});

map.addElement('gift_cardsPage', {
	name: 'redeem_giftcard_modal',
	description: 'describes Redeem giftcard modal',
	locator: "css=.redeem_wrapper"
});

map.addElement('gift_cardsPage', {
	name: 'close_redeem_giftcard_modal',
	description: 'describes Cross button to close Redeem giftcard modal',
	locator: "css=.redeem_wrapper a.close"
});

map.addElement('gift_cardsPage', {
	name: 'get_started_button',
	description: 'describes Get Started button on Redeem giftcard modal for non-logged users',
	locator: "css=.redeem_wrapper div.redeem_content a"
});

map.addElement('gift_cardsPage', {
	name: 'sign_in_link',
	description: 'describes Sign in link on Redeem giftcard modal for non-logged users',
	locator: "css=.redeem_wrapper div.redeem_content p a"
});

map.addElement('gift_cardsPage', {
	name: 'terms_and_conds',
	description: 'describes Terms & Conditions link on Gift Cards page',
	locator: "css=.toc_note a.open_terms"
});

map.addElement('gift_cardsPage', {
	name: 'terms_and_conds_popup',
	description: 'describes terms and conditions pop up',
	locator: "id=gift_card_terms"
});

map.addElement('gift_cardsPage', {
	name: 'terms_and_conds_close', 
	description: 'describes Cross button on Terms and Conditions pop up on Gift cards page', 
	locator: "css=#gift_cards_landing div.ui-dialog div.ui-dialog-titlebar a.ui-dialog-titlebar-close"
});

map.addElement('gift_cardsPage', {
	name: 'go_shopping',
	description: 'describes Go Shopping link on Gift Cards page',
	locator: "css=.toc_note p a"
});

/* Giftcards Details page elements */
map.addPageset({
	name: 'giftcards_detailsPage',
	description: 'contains all elements which are placed in page after choosing any gift card type',
	pathRegexp: "giftcards/.*"
});

map.addElement('giftcards_detailsPage', {
	name: 'bcrumb_details',
	description: 'describes Details item on Breadcrumb trail on Gift Cards Details page',
	locator: "id=gcBreadcrumb_1"
});

map.addElement('giftcards_detailsPage', {
	name: 'bcrumb_payment_info',
	description: 'describes Payment Info item on Breadcrumb trail on Gift Cards Details page',
	locator: "id=gcBreadcrumb_2"
});

map.addElement('giftcards_detailsPage', {
	name: 'bcrumb_review',
	description: 'describes Review item on Breadcrumb trail on Gift Cards Details page',
	locator: "id=gcBreadcrumb_3"
});

map.addElement('giftcards_detailsPage', {
	name: 'bcrumb_complete', 
	description: 'describes Complete item on Breadcrumb trail on Gift Cards Details page',
	locator: "id=gcBreadcrumb_4"
});

map.addElement('giftcards_detailsPage', {
	name: 'email_giftcard_tab',
	description: 'describes Email a Gift Card tab on Gift Cards Details page',
	locator: "id=gcTabs_1"
});

map.addElement('giftcards_detailsPage', {
	name: 'print_giftcard_tab',
	description: 'describes Print a Gift Card tab on Gift Cards Details page',
	locator: "id=gcTabs_2"
});

map.addElement('giftcards_detailsPage', {
	name: 'mail_giftcard_tab',
	description: 'describes Mail a Gift Card tab on Gift Cards Details page',
	locator: "id=gcTabs_3"
})
map.addElement('giftcards_detailsPage', {
	name: 'one_item',
	description: 'describes one item image link on Gift Cards Details page',
	locator: "css=#gift_option_1item a img"
});

map.addElement('giftcards_detailsPage', {
	name: 'two_items',
	description: 'describes two items image link on Gift Cards Details page',
	locator: "css=#gift_option_2items a img"
});

map.addElement('giftcards_detailsPage', {
	name: 'three_items',
	description: 'describes three items image link on Gift Cards Details page',
	locator: "css=#gift_option_3items a img"
});

map.addElement('giftcards_detailsPage', {
	name: 'six_items',
	description: 'describes six items image link on Gift Cards Details page',
	locator: "css=#gift_option_7items a img"
});

map.addElement('giftcards_detailsPage', {
	name: "twelve_items", 
	description: 'describes twelve items image link on Gift Cards Details page',
	locator: "css=#gift_option_14items a img"
});

map.addElement('giftcards_detailsPage', {
	name: 'recipient_email',
	description: 'describes Recipient Email field on Gift Cards Details page',
	locator: "id=checkout_gift_card_order_detail_attributes_recipient_email"
});

map.addElement('giftcards_detailsPage', {
	name: 'to_firstname',
	description: 'describes First Name field for recipient on Gift Cards Details page',
	locator: "id=checkout_gift_card_order_detail_attributes_first_name_to"
});

map.addElement('giftcards_detailsPage', {
	name: 'to_lastname',
	description: 'describes Last Name field for recipient on Gift Cards Details page',
	locator: "id=checkout_gift_card_order_detail_attributes_last_name_to"
});

map.addElement('giftcards_detailsPage', {
	name: 'from_firstname',
	description: 'describes First Name field for sender on Gift Cards Details page',
	locator: "id=checkout_gift_card_order_detail_attributes_first_name_from"
});

map.addElement('giftcards_detailsPage', {
	name: 'from_lastname',
	description: 'describes Last Name field for sender on Gift Cards Details page',
	locator: "id=checkout_gift_card_order_detail_attributes_last_name_from"
});

map.addElement('giftcards_detailsPage', {
	name: 'personal_message',
	description: 'describes Personal Message field on Gift Cards Details page',
	locator: "id=checkout_gift_card_order_detail_attributes_message"
});

map.addElement('giftcards_detailsPage', {
	name: 'address1',
	description: 'describes Address 1 field on Gift Cards Details page',
	locator: "id=checkout_ship_address_attributes_address1"
});

map.addElement('giftcards_detailsPage', {
	name: 'address2',
	description: 'describes Address 2 field on Gift Cards Details page',
	locator: "id=checkout_ship_address_attributes_address2"
});

map.addElement('giftcards_detailsPage', {
	name:'city',
	description: 'describes City field on Gift Cards Details Page',
	locator: "id=checkout_ship_address_attributes_city"
});

map.addElement('giftcards_detailsPage', {
	name: 'state_province',
	description: 'describes State/Province field on Gift Cards Details Page',
	locator: "id=checkout_ship_address_attributes_state_id"
});

map.addElement('giftcards_detailsPage', {
	name: 'zipcode',
	description: 'describes  Zip Code field on Gift Cards Details Page',
	locator: "id=checkout_ship_address_attributes_zipcode"
});

map.addElement('giftcards_detailsPage', {
	name: 'phone_number',
	description: 'describes Phone Number field on Gift Cards Details Page',
	locator: "id=checkout_ship_address_attributes_phone"
});

map.addElement('giftcards_detailsPage', {
	name: 'continue_btn',
	description: 'describes Continue button on Gift Cards Details page',
	locator: "css=.gcForm div input[type=image]"
});

map.addElement('giftcards_detailsPage', {
	name: 'creditcard_number',
	description: 'describes Credit Card Number field on Gift Card Payment Info page',
	locator: "id=payment_source_6_cc_number"
});

map.addElement('giftcards_detailsPage', {
	name: "expiration_month",
	description: 'describes Expiration month on Gift Card Payment Info page',
	locator: "id=payment_source_6_month"
});

map.addElement('giftcards_detailsPage', {
	name: 'expiration_year',
	description: 'describes Expiration year drop down on Gift Card Payment Info page',
	locator: "id=payment_source_6_year"
});

map.addElement('giftcards_detailsPage', {
	name: 'cvv',
	description: 'describes CVV field on Gift Card Payment Info page',
	locator: "id=payment_source_6_verification_value"
});

map.addElement('giftcards_detailsPage', {
	name: 'billing_firstname',
	description: 'describes First Name field for Billing Address on Gift Cards Payment Info page',
	locator: "id=checkout_bill_address_attributes_firstname"
});

map.addElement('giftcards_detailsPage', {
	name: 'billing_lastname',
	description: 'describes Last Name field for Billing Address on Gift Cards Payment Info page',
	locator: "id=checkout_bill_address_attributes_lastname"
});

map.addElement('giftcards_detailsPage', {
	name: 'billing_address1',
	description: 'describes Address 1 field for Billing Address on Gift Cards Payment Info page',
	locator: 'id=checkout_bill_address_attributes_address1'
});

map.addElement('giftcards_detailsPage', {
	name: 'billing_address2',
	description: 'describes Address 2 field for Billing Address on Gift Cards Payment Info page',
	locator: "id=checkout_bill_address_attributes_address2"
});

map.addElement('giftcards_detailsPage', {
	name: 'billing_city',
	description: 'describes City field for Billing Address on Gift Cards Payment Info page',
	locator: "id=checkout_bill_address_attributes_city"
});

map.addElement('giftcards_detailsPage', {
	name: 'billing_state_province',
	description: 'describes State/Province drop down for Billing Address on Gift Cards Payment Info page',
	locator: "id=checkout_bill_address_attributes_state_id"
});

map.addElement('giftcards_detailsPage', {
	name: 'billing_zipcode',
	description: 'describes Zip Code field for Billing Address on Gift Cards Payment Info page',
	locator: "id=checkout_bill_address_attributes_zipcode"
});

map.addElement('giftcards_detailsPage', {
	name: 'billing_phone_number',
	description: 'describes Phone Number field for Billing Address on Gift Cards Payment Info page',
	locator: 'id=checkout_bill_address_attributes_phone'
});

map.addElement('giftcards_detailsPage', {
	name: 'billing_email_address',
	description: 'describes Email Address field for Billing Address on Gift Cards Payment Info page',
	locator: "id=checkout_email"
});

map.addElement('giftcards_detailsPage', {
	name: 'billing_continue_btn',
	description: 'describes Continue button on Gift Cards Payment Info page',
	locator: "id=gifting-payment-submit"
});

map.addElement('giftcards_detailsPage', {
	name: 'payment_method',
	description: 'describes Select Payment Method drop down on Gift Cards Payment Info page if logged user has at least 1 billing address',
	locator: "id=select_payment_method"
});

map.addElement('giftcards_detailsPage', {
	name: 'billing_edit',
	description: 'describes Edit link on Gift Cards Payment Info page if logged user has at least 1 billing address',
	locator: "css=.edit a"
});

map.addElement('giftcards_detailsPage', {
	name: 'submit_order_top',
	description: 'describes top Submit Order button on Gift Cards Review page',
	locator: "//form[@id='checkout_form_giftingreview']/div[2]/input"
});

map.addElement('giftcards_detailsPage', {
	name: 'submit_order_bottom',
	description: 'describes bottom Submit Order button on Gift Cards Review page',
	locator: "//form[@id='checkout_form_giftingreview']/div[4]/input"
});

/* Printable order page elements */
map.addPageset({
	name: 'printable_giftcardPage',
	description: 'describes elements common to printable order page',
	pathRegexp: "gift_cards/printable_gift_card/.*"
});

map.addElement('printable_giftcardPage', {
	name: 'print_this_page_top',
	description: 'describes Print this page link',
	locator: "css=#printable_gift_card div.pgc_link a"
});

map.addElement('printable_giftcardPage', {
	name: 'print_this_page_bottom',
	description: 'describes Print this page link at the bottom',
	locator: "//body[@id='printable_gift_card']/div[@class='pgc_link']/a"
});

map.addElement('printable_giftcardPage', {
	name: 'top_left',
	description: 'describes top left section on printable page',
	locator: "css=img[alt='Printable_top_left']"
});

map.addElement('printable_giftcardPage', {
	name: 'top_right',
	description: 'describes top right section on printable page',
	locator: "css=img[alt='Printable_top_right']"
});

map.addElement('printable_giftcardPage', {
	name: 'bottom_left',
	description: 'describes bottom left section on printable page',
	locator: "css=img[alt='Printable_bottom_left']"
});

map.addElement('printable_giftcardPage', {
	name: 'bottom_right',
	description: 'describes bottom right section on printable page',
	locator: "//body[@id='printable_gift_card']/table/tbody/tr[2]/td[2]"
});

map.addElement('printable_giftcardPage', {
	name: 'to_label', 
	description: 'describes to label at the bottom right section on printable page',
	locator: "css=img[alt='label_to']"
});

map.addElement('printable_giftcardPage', {
	name: 'from_label', 
	description: 'describes from label at the bottom right section on printable page',
	locator: "css=img[alt='Label_from']"
});

map.addElement('printable_giftcardPage', {
	name: 'message_label', 
	description: 'describes message label at the bottom right section on printable page',
	locator: "css=img[alt='Label_message']"
});

map.addElement('printable_giftcardPage', {
	name: 'redeemable_for_label', 
	description: 'describes redeemable for label at the bottom right section on printable page',
	locator: "css=img[alt='Label_redeemable_for']"
});

map.addElement('printable_giftcardPage', {
	name: 'giftcode_label', 
	description: 'describes giftcode label at the bottom right section on printable page',
	locator: "css=img[alt='Label_gift_code']"
});

/* Redeem giftcard page elements */
map.addPageset({
	name: 'redeem_giftcardPage',
	description: 'describes elements common to redeem giftcard page',
	pathRegexp: "redeem.*"
});

map.addElement('redeem_giftcardPage', {
	name: 'learn_more',
	description: 'describes Learn more link on Redeem giftcard page',
	locator: "css=#gc_learn_more a"
});

map.addElement('redeem_giftcardPage', {
	name: 'learn_more_modal',
	description: 'describes Learn More modal on Redeem giftcard page',
	locator: "id=gift_card_hiw"
});

map.addElement('redeem_giftcardPage', {
	name: 'close_modal',
	description: 'describes Close button on modal',
	locator: "css=.ui-dialog div.ui-dialog-titlebar a.ui-dialog-titlebar-close"
});

map.addElement('redeem_giftcardPage', {
	name: 'terms_and_conds',
	description: 'describes Terms&Conditions link',
	locator: "css=.toc_note a.open_terms"
});

map.addElement('redeem_giftcardPage', {
	name: 'terms_and_conds_modal',
	description: 'describes terms and conditions modal',
	locator: "id=gift_card_terms"
});

map.addElement('redeem_giftcardPage', {
	name: 'close_terms_and_conds',
	description: 'describes Cross button on Terms and Conditions modal',
	locator: "css=.ui-dialog[aria-labelledby='ui-dialog-title-gift_card_terms'] div.ui-dialog-titlebar a.ui-dialog-titlebar-close"
});

map.addElement('redeem_giftcardPage', {
	name: 'get_started_link',
	description: 'describes Get started link on Redeem giftcard page',
	locator: "css=.ctaContent div.redeemCta a img"
});

map.addElement('redeem_giftcardPage', {
	name: 'signin_link',
	description: 'describes Sign in link on Redeem giftcard page',
	locator: "css=.ctaContent div.redeemCta a img[alt='sign in >']"
});

/* Orders page elements */
map.addPageset({
	name: 'ordersPage', 
	description: 'describes all elements common to page after submitting gift cards',
	pathRegexp: "orders/.*"
});

map.addElement('ordersPage', {
	name: 'thankyou_label', 
	description: 'describes Thank you label on Gift Cards Complete page',
	locator: "css=.left_col_610 h1 img"
});

map.addElement('ordersPage', {
	name: 'buy_another_giftcard_top',
	description: 'describes Buy Another Gift Card button on Gift Cards Complete page',
	locator: "css=.left_col_610 a.floatright img"
});

map.addElement('ordersPage', {
	name: 'buy_another_giftcard_bottom',
	description: 'describes Buy Another Gift Card button on Gift Cards Complete page',
	locator: "css=.left_col_610 div.floatright img"
});

map.addElement('ordersPage', {
	name: 'print_your_giftcard',
	description: 'describes Print Your Gift Card button on Gift Cards Complete page',
	locator: "css=.left_col_610 img.floatright"
});

map.addElement('ordersPage', {
	name: 'print_this_page',
	description: 'describes Print this Page link on Gift Cards Complete page',
	locator: "css=.left_col_610 a.floatright img[alt=Print]"
});

map.addElement('ordersPage', {
	name: 'sent_via_mail_label',
	description: 'describes Gift Card Send Via: Email label on Gift Cards Complete page',
	locator: "//div[@class='left_col_610']/h2[2]"
});

map.addElement('ordersPage', {
	name: 'billing_info_label',
	description: 'describes Billing Info label on Gift Cards Complete page',
	locator: "//div[@class='left_col_610']/h2[4]"
});

map.addElement('ordersPage', {
	name: 'order_confirmation_label',
	description: 'describes Order Confirmation label on Gift Cards Complete page',
	locator: "css=.giftingconfirmation h2 img[alt='Order Confirmation']"
})

map.addElement('ordersPage', {
	name: "order_summary_label",
	description: 'describes Order Summary label on Gift Cards Complete page',
	locator: "//div[@class='left_col_610']/h2[5]"
});

map.addElement('ordersPage', {
	name: 'order_number', 
	description: 'describes order number on Gift cards complete page', 
	locator: "css=.giftingconfirmation div p strong"
})

/* Featured styles page elements */
map.addPageset({
	name: 'featured_stylesPage',
	description: 'describe Featured styles page elements',
	pathRegexp: "featuredstyles.*"
});

map.addElement('featured_stylesPage', {
	name: 'carousel',
	description: 'describes Slide carousel',
	locator: "css=#carousel li.slide"
});

map.addElement('featured_stylesPage', {
	name: 'prev',
	description: 'describes Previous arrow on carousel',
	locator: "css=.jcarousel-prev"
});

map.addElement('featured_stylesPage', {
	name: 'next',
	description: 'describes Next arrow on carousel',
	locator: "css=.jcarousel-next"
});

map.addElement('featured_stylesPage', {
	name: 'pinkbar',
	description: 'describes pink bar under carousel slide',
	locator: "id=pf_pinkbar"
});

map.addElement('featured_stylesPage', {
	name: 'shoedazzle_unboxed',
	description: 'describes Unboxed video link on Featured styles page',
	locator: "css=.learn_more div.watch_coc a.lookbook_link.video_unboxed_link"
});

map.addElement('featured_stylesPage', {
	name: 'shoedazzle_unboxed_modal',
	description: 'describes Unboxed video modal on Featured styles page',
	locator: "id=ul_player"
});

map.addElement('featured_stylesPage', {
	name: 'unboxed_get_started_now',
	description: 'describes Get started now button on Watch How It Works video modal',
	locator: "css=#ul_player div#video_started a"
});

map.addElement('featured_stylesPage', {
	name: 'watch_how_it_works',
	description: 'describes Watch How It Works video ',
	locator: "css=.learn_more div.watch_coc a.lookbook_link.hiw_video_link"
});

map.addElement('featured_stylesPage', {
	name: 'watch_how_it_works_modal',
	description: 'describes Watch How it works video modal',
	locator: "id=hiw_player"
});

map.addElement('featured_stylesPage', {
	name: 'hiw_get_started_now',
	description: 'describes Get started now button on Watch How It Works video modal',
	locator: "css=#hiw_player div#video_started a"
});

map.addElement('featured_stylesPage', {
	name: 'close_modal',
	description: 'describes Close button on modal',
	locator: "css=#fmodContent div#fmodClose"
});

map.addElement('featured_stylesPage', {
	name: 'get_your_style_profile',
	description: 'describes Get Your Style Profile video',
	locator: "css=.learn_more div.get_your_style a.lookbook_link"
});

map.addElement('featured_stylesPage', {
	name: 'take_the_style_quiz',
	description: 'describes Take the style quiz button',
	locator: "css=#pf_pinkbar a"
});

/* How It Works page elements */
map.addPageset({
	name: 'how_it_worksPage',
	description: 'describes elements common to How It Works page',
	pathRegexp: "how_it_works/.*"
});

map.addElement('how_it_worksPage', {
	name: 'membership',
	description: 'describes membership section',
	locator: "id=hiw_b_membership"
});

map.addElement('how_it_worksPage', {
	name: 'learn_more',
	description: 'describes learn more link',
	locator: "css=#hiw_b_membership div.content div.col_2 p a.how_details"
});

map.addElement('how_it_worksPage', {
	name: 'join_for_free_top',
	description: 'describes Join for free button at the top',
	locator: "css=#hiw_b_membership div.content div.col_3 a img[alt='join for free']"
});

map.addElement('how_it_worksPage', {
	name: 'join_for_free_bottom',
	description: 'describes Join for free button at the bottom',
	locator: "css=#hiw_b_cta a img[alt='join for free']"
});

map.addElement('how_it_worksPage', {
	name: 'see_my_showroom_top',
	description: 'describes top See my showroom button',
	locator: "css=#hiw_b_membership div.content div.col_3 a img[alt='see my showroom']"
});

map.addElement('how_it_worksPage', {
	name: 'see_my_showroom_bottom', 
	description: 'describes bottom See my showroom button',
	locator: "css=#hiw_b_cta a img[alt='see my showroom']"
});

map.addElement('how_it_worksPage', {
	name: 'getting_started',
	description: 'describes getting started section',
	locator: "id=hiw_b_gettingstarted"
});

map.addElement('how_it_worksPage', {
	name: 'show_and_tell',
	description: 'describes show & tell section',
	locator: "id=hiw_b_showandtell"
});

map.addElement('how_it_worksPage', {
	name: 'get_more',
	description: 'describes get more section',
	locator: "id=hiw_b_getmore"
});

/* How It Works page elements : AB test:  */
map.addPageset({
	name: 'how_it_works_bPage',
	description: 'describes elements common to How It Works page',
	pathRegexp: "how_it_works_b/.*"
});

map.addElement('how_it_works_bPage', {
	name: 'video',
	description: 'describes Video link',
	locator: "css=a.hiw_video_link"
});

map.addElement('how_it_works_bPage', {
	name: 'get_started_section',
	description: 'describes Get started section on How It Works ',
	locator: "css=.two_col a img.last"
});

map.addElement('how_it_works_bPage', {
	name: 'take_a_quiz_section',
	description: 'describes Take a 3-minute style quiz section',
	locator: "css=.three_col a img.hoverable"
});

map.addElement('how_it_works_bPage', {
	name: 'get_showroom_section',
	description: 'describes Get a personalize showroom section',
	locator: "css=.three_col img"
});

map.addElement('how_it_works_bPage', {
	name: 'shop_favorites_section',
	description: 'describes Shop your favorites section',
	locator: "css=.three_col img.last"
});

map.addElement('how_it_works_bPage', {
	name: 'video_link',
	description: 'describes Not Sure yet? Watch Client Reviews link to see video',
	locator: "css=a.coc_video_link img.hdr.hoverable"
});

/* How It Works page elements: AB tests */
map.addPageset({
	name: 'how_it_works_cPage', 
	description: 'describes elements common to How It Works',
	pathRegexp: "how_it_works_c/.*"
});

map.addElement('how_it_works_cPage', {
	name: 'price',
	description: 'describes Price text at the top of How It Works page',
	locator: "css=.price"
});

map.addElement('how_it_works_cPage', {
	name: 'take_a_quiz_section',
	description: 'describes Take a 3-minute Style quiz section',
	locator: "css=.three_col a img.hoverable"
});

map.addElement('how_it_works_cPage', {
	name: 'get_showroom_section',
	description: 'describes Get a Personal showroom section',
	locator: "css=.three_col img"
});

map.addElement('how_it_works_cPage', {
	name: 'shop_favorites_section',
	description: 'describes Shop your favorites section',
	locator: "css=.three_col img.last"
});

map.addElement('how_it_works_cPage', {
	name: 'get_started_top_btn',
	description: 'describes Get started button',
	locator: "css=.cta a img"
});

map.addElement('how_it_works_cPage', {
	name: 'how_it_works_video',
	description: 'describes How It Works video',
	locator: "css=.two_col a.hiw_video_link"
});

map.addElement('how_it_works_cPage', {
	name: 'clients_reviews_video',
	description: 'describes Watch Client Reviews video',
	locator: "css=.two_col a.coc_video_link"
});

map.addElement('how_it_works_cPage', {
	name: 'get_started_bottom_btn',
	description: 'describes Get Started button at the bottom',
	locator: "//div[@class='cta'][2]/a/img"
})

/* DazzleDeals page elements */
map.addPageset({
	name: 'dazzle_dealsPage',
	description: 'describes elements common to DazzleDeals page which opens from the footer',
	pathRegexp: "dazzle_deals/.*"
});

map.addElement('dazzle_dealsPage', {
	name: 'slideshow',
	description: 'describes area with slides on Dazzle Deals page',
	locator: "css=#dd_slideshow_container div.dd_slideshow_center div.slideshow"
});

map.addElement('dazzle_dealsPage', {
	name: 'slide',
	description: 'describes slide within carousel on Dazzle Deals page',
	args: [{
		name: 'index',
		description: 'describes index of slide',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('dd_slideshow_container').getElementsByClassName('dd_slideshow_center').getElementsByClassName('slideshow').getElementsByClassName('slide');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
 		return "//div[@id='dd_slideshow_container']/div[@class='dd_slideshow_center']/div[@class='slideshow']/div[@class='slide'][" + args.index + "]/img";
	}	
})

map.addElement('dazzle_dealsPage', {
	name: 'prev',
	description: 'describes previous arrow on slider',
	locator: "css=#dd_slideshow_container div.prev"
});

map.addElement('dazzle_dealsPage', {
	name: 'next',
	description: 'describes next arrow on slider',
	locator: "css=#dd_slideshow_container div.next"
});

map.addElement('dazzle_dealsPage', {
	name: 'get_styled',
	description: 'describes get styles button',
	locator: "css=#dd_slideshow_button a img[alt='get styled']"
});

/* Stylists Page elements */
map.addPageset({
	name: 'stylistsPage',
	description: 'describes The Stylists page',
	pathRegexp: "meet_the_stylists/.*"
});

map.addElement('stylistsPage', {
	name: 'stylist_area_item',
	description: 'describes stylist item on The Stylists page',
	args: [{
		name: 'index',
		description: 'describes index of stylists item on The Stylists page',
		getDefaultValues: function(inDocument){
				var container = inDocument.getElementsById('stylist_landing_main').getElementsByTagName('map').getElementsByTagName('area');
				var result = [];
				for (var i=0; i <container.length; i++) result.push(i+1);
				return result;
		}
	}],
	getLocator: function(args){
			return "//div[@id='stylist_landing_main']/map/area[" + args.index + "]"
	}
});

/* Stylist page elements */
map.addPageset({
	name: 'stylistPage',
	description: 'describes elements common to page which opens after choosing stylist on The stylists page',
	pathRegexp: "stylists/.*"
});

map.addElement('stylistPage', {
	name: 'stylist_alt',
	description: 'describes alt attribute ',
	args: [{
		name: 'alt',
		description: 'describes alt text for the element',
		defaultValues: ['Kim Kardashian', 'Anya Sarre', 'Provi Fulp', 'Heather Zweigel', 'Melis Kuris', 'Mal Pearson', 'Merika Rock']
	}],
	getLocator: function(args){
		var type = args['alt'];
 		return "//div[@id='stylists_contents']/img[@alt=" + type + "]";
	}
});

map.addElement('stylistPage', {
	name: 'nav_bar', 
	description: 'describes stylists vertical navigation bar which is placed at the right of the page',
	locator: "css=#stylist_nav ul"
});

map.addElement('stylistPage', {
	name: 'item_on_nav_bar',
	description: 'describe Stylist item on the right navigation bar',
	args: [{
		name: 'index', 
		description: 'describes index for items in right vertical navigation bar',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('stylist_nav').getElementsByTagName('ul').getElementsByTagName('li');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
			return "//div[@id='stylist_nav']/ul/li[" + args.index + "]/div/div[@class='stylist_nav_icon']/a"
	}
});

map.addElement('stylistPage', {
	name: 'see_her_showroom',
	description: 'describes See her showroom button on Stylist page',
	locator: "css=#musthaves_blackbar div#cta a img[alt='Btn_see_her_showroom']"
});

map.addElement('stylistPage', {
	name: 'join_for_free',
	description: 'describes Join for free button for non logged users',
	locator: "css=#musthaves_blackbar div#cta a img[alt='Btn_join_for_free']"
});

map.addElement('stylistPage', {
	name: 'stylist_video_carousel',
	description: 'describes Stylist video carousel at the bottom of stylist page',
	locator: "css=#stylist_video_carousel_container"
});

map.addElement('stylistPage', {
	name: 'stylist_video_carousel_prev',
	description: 'describes Next arrow on stylist video carousel',
	locator: "css=#stylist_video_carousel_container div div div.jcarousel-prev"
});

map.addElement('stylistPage', {
	name: 'stylist_video_carousel_next',
	description: 'describes Next arrow on stylist video carousel',
	locator: "css=#stylist_video_carousel_container div div div.jcarousel-next"
});

map.addElement('stylistPage', {
	name: 'stylist_products_section', 
	description: 'describes stylists products on Stylist page',
	locator: "css=#stylists_products_outer"
});

map.addElement('stylistPage', {
	name: 'stylist_product',
	description: 'describes item on stylist products section on Stylist page',
	args: [{
		name: 'index',
		description: 'describes index of item',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('stylists_products_inner').getElementsByClassName('showroom_sel_cntnr');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
 		return "//div[@id='stylists_products_inner']/div[" + args.index + "]/div/span/a";
	}	
});

/* elements common to AB Test: Stylist Page with Carousel */
map.addElement('stylistsPage', {
	name: 'carousel',
	description: 'describes carousel on stylists page',
	locator: "id=carousel"
});

map.addElement('stylistsPage', {
	name: 'next',
	description: 'describes Next icon on carousel on Stylists page',
	locator: "css=.jcarousel-next"
});

map.addElement('stylistsPage', {
	name: 'prev', 
	description: 'describes Previous icon on carousel on Stylists page',
	locator: "css=.jcarousel-prev"
});

map.addElement('stylistsPage', {
	name: 'slide',
	description: 'describe slide on carousel on Stylists page',
	args: [{
		name: 'index',
		description: 'describes index of slide',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('carousel').getElementsByTagName('li');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
 		return "//ul[@id='carousel']/li[" + args.index + "]/a/img";
	}
});

/* FAQ page elements */
map.addPageset({
	name:'faqPage',
	description: 'describes element common to  FAQ page',
	pathRegexp: "faqs/.*"
});

map.addElement('faqPage', {
	name: 'expand_all',
	description: 'describes Expand All link',
	locator: "css=#faq_options a.expand_all"
});

map.addElement('faqPage', {
	name: 'collapse_all',
	description: 'describes Collapse All link',
	locator: "css=#faq_options a.collapse_all"
});

map.addElement('faqPage', {
	name: 'start_now',
	description: 'describes Start Now link',
	locator: "css=dl.faq dd a"
});

map.addElement('faqPage', {
	name: 'item_link',
	description: 'describes faq item link on FAQ page',
	args: [{
		name: 'index', 
		description: 'describes index of item on FAQ page',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsByClassName('faq').getElementsByTag('dt');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
		return result;
		}
	}],
	getLocator: function(args){
		return "//dl[@class='faq']/dt[" + args.index + "]/a"
	}
});

map.addElement('faqPage', {
	name: 'item_text',
	description: 'describes faq item text on FAQ page',
	args: [{
		name: 'index', 
		description: 'describes index of item on FAQ page',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsByClassName('faq').getElementsByTag('dd');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
		return result;
		}
	}],
	getLocator: function(args){
		return "//dl[@class='faq']/dd[" + args.index + "]"
	}
});

map.addElement('faqPage', {
	name: 'start_now',
	description: 'describes Start now link on 1st opened faq link',
	locator: "//dl[@class='faq']/dd[1]/a"
});

map.addElement('faqPage', {
	name: 'click_here',
	description: 'describes Click here link on 23rd opened faq link',
	locator: "//dl[@class='faq']/dd[23]/a"
});

map.addElement('faqPage', {
	name: 'return_and_exchange_policy',
	description: 'describes Return&Exchange policy link on 27th opened faq link',
	locator: "//dl[@class='faq']/dd[27]/a"
});

/* Testimonials page elements */
map.addPageset({
	name: 'testimonialsPage',
	description: 'describes Testimonials page',
	pathRegexp: "testimonials/.*"
});

map.addElement('testimonialsPage', {
	name: 'record_video',
	description: 'describes recor a video link',
	locator: "css=#already_client a img"
});

map.addElement('testimonialsPage', {
	name: 'see_my_showroom',
	description: 'describes See My showroom button on Testimonials page', 
	locator: "css=#take_the_quiz a img[alt='see my showroom']"
});

map.addElement('testimonialsPage', {
	name: 'take_the_style_quiz',
	description: 'describes Take the style quiz on Testimonials page',
	locator: "css=#take_the_quiz a img[alt='take the style quiz']"
});

map.addElement('testimonialsPage', {
	name: 'openquote',
	description: 'describes quote chars at the left of slide container',
	locator: "id=openquote"
});

map.addElement('testimonialsPage', {
	name: 'slideshow_container',
	description: 'describes Slides container on Testimonials page',
	locator: "id=testimonials_slideshow_container"
});

map.addElement('testimonialsPage', {
	name: 'closequote',
	description: 'describes quote char at the right of slide container',
	locator: "id=closequote"
});

map.addElement('testimonialsPage', {
	name: 'previous_link', 
	description: 'describes Previous link on Testimonials page', 
	locator: "css=#slideshow_nav_container div.prev img"
});

map.addElement('testimonialsPage', {
	name: 'next_link', 
	description: 'describes Next link on Testimonials page', 
	locator: "css=#slideshow_nav_container div.next img"
});

map.addElement('testimonialsPage', {
	name: 'like_btn',
	description: 'describes Like button on Testimonials page',
	locator: "css=a.connect_widget_like_button"
});

map.addElement('testimonialsPage', {
	name: 'like_banner',
	description: 'describes Like banner on Testimonials page',
	locator: "id=like_us_banner"
});

/* About Us page elements */
map.addPageset({
	name: 'about_usPage',
	description: 'describes elements common to About Us page',
	pathRegexp: "about_us/.*"
});

map.addElement('about_usPage', {
	name: 'get_styled_button',
	description: 'describes Get styled button on About Us page',
	locator: "css=div[class=cta] a img"
});

map.addElement('about_usPage', {
	name: 'get_styled_link',
	description: 'describes Get Styles link on About Us page',
	locator: "css=.gs_profile div.gs_txt p a"
})

map.addElement('about_usPage', {
	name: 'watch_client_reviews',
	description: 'describes Watch Client Reviews link on About Us page', 
	locator: "css=#howwedoit div.content div.float_txt p a"
});

map.addElement('about_usPage', {
	name: 'meet_the_stylists',
	description: 'describes Meet the Stylists link on About Us page',
	locator: "css=#ourmission div.content div.float_txt p a"
});

/* Contact Us page elements */
map.addPageset({
	name: 'contact_usPage',
	description: 'describes elements common to Contact us page ',
	pathRegexp: "contact_us/.*"
});

map.addElement('contact_usPage', {
	name: 'map_link',
	description: 'describes map link on Contact us page',
	locator: "css=#bd div div p.address a"
});

map.addElement('contact_usPage', {
	name: 'faqs_link',
	description: 'describes FAQs link on Contact Us page',
	locator: "//div[@id='bd']/div/div/p[2]/a"
});

map.addElement('contact_usPage', {
	name: 'mailto_client_services',
	description: 'describes mailto clientservices@shoedazzle.com link on Contact Us page',
	locator: "//div[@id='bd']/div/div/p[3]/a"
});

map.addElement('contact_usPage', {
	name: 'mailto_marketing',
	description: 'describes mailto marketing@shoedazzle.com link on Contact Us page',
	locator: "//div[@id='bd']/div/div/p[5]/a"
});

map.addElement('contact_usPage', {
	name: 'mailto_pr',
	description: 'describes mail to pr@shoedazzle.com link on Contact Us page',
	locator: "//div[@id='bd']/div/div/p[6]/a"
});

/* Terms and Conditions page elements */
map.addPageset({
	name: 'ts_and_csPage',
	description: 'describes elements common to Terms and Conditions page',
	pathRegexp: "terms_conditions/.*"
});

map.addElement('ts_and_csPage', {
	name: 'client_services_department_link',
	description: 'describes Client Services Department link on terms and conditions page',
	locator: "//div[@id='bd']/div/div/p[3]/a"
});

map.addElement('ts_and_csPage', {
	name: 'privacy_policy_link',
	description: 'describes Privacy Policy link on terms and conditions page', 
	locator: "//div[@id='bd']/div[1]/div/p[5]/a[1]"
});

map.addElement('ts_and_csPage', {
	name: 'shipping_return_exchange_policies_link', 
	description: 'describes Shipping, Return and Exchange Policies link on Terms and Conditins page',
	locator: "//div[@id='bd']/div[1]/div/p[5]/a[2]"
});

map.addElement('ts_and_csPage', {
	name: 'client_services_department_link2',
	description: 'describes Client Services Department link on terms and conditions page',
	locator: "//div[@id='bd']/div/div/p[13]/a"
});

map.addElement('ts_and_csPage', {
	name: 'credit_policy_link',
	description: 'describes Credit Policy link on Terms and Conditions page', 
	locator: "//div[@id='bd']/div[1]/div/p[23]/a[1]"
});

map.addElement('ts_and_csPage', {
	name: 'client_services_link',
	description: 'describes Client Services link on Terms and Conditions page', 
	locator: "//div[@id='bd']/div[1]/div/p[23]/a[2]"
});

map.addElement('ts_and_csPage', {
	name: 'refund_policy_link',
	description: 'describes Refund policy on Terms and Conditions page',
	locator: "//div[@id='bd']/div[1]/div/p[23]/a[3]"
});

map.addElement('ts_and_csPage', {
	name: 'how_it_works_link', 
	description: 'describes How It Works on Terms and Conditions page', 
	locator: "//div[@id='bd']/div[1]/div/p[24]/a"
});

map.addElement('ts_and_csPage', {
	name: 'client_services_link2',
	description: 'describes the 2nd Client Services link on Terms and Conditions page', 
	locator: "//div[@id='bd']/div[1]/div/p[25]/a"
});

map.addElement('ts_and_csPage', {
	name: 'shipping_return_exchange_policies_link2',
	description: 'describes the 2nd Shipping, Return and Exchange Policies link on Terms and Conditions page',
	locator: "//div[@id='bd']/div[1]/div/p[27]/a"
});

map.addElement('ts_and_csPage', {
	name: 'client_services_link3',
	description: 'describes the 3rd Client Services link on Terms and Conditions page', 
	locator: "//div[@id='bd']/div[1]/div/p[36]/a[1]"
});

map.addElement('ts_and_csPage', {
	name: 'client_services_link4',
	description: 'describes the 4th Client Services link on Terms and Conditions page', 
	locator: "//div[@id='bd']/div[1]/div/p[36]/a[2]"
});

map.addElement('ts_and_csPage', {
	name: 'pdf_notice_link',
	description: 'describes pdf link of a form Notice on Terms and Conditions page', 
	locator: "//div[@id='bd']/div[1]/div/p[41]/a[1]"
});

map.addElement('ts_and_csPage', {
	name: 'pdf_3477_link',
	description: 'describes pdf link of a form to initiate arbitration on Terms and Conditions page', 
	locator: "//div[@id='bd']/div[1]/div/p[41]/a[2]"
});

map.addElement('ts_and_csPage', {
	name: 'pdf_3485_link',
	description: 'describes pdf link of a form to initiate arbitration for California residents on Terms and Conditions page', 
	locator: "//div[@id='bd']/div[1]/div/p[41]/a[3]"
});

map.addElement('ts_and_csPage', {
	name: 'pdf_how_to_commence_link',
	description: 'describes pdf link of arbitration process on Terms and Conditions page', 
	locator: "//div[@id='bd']/div[1]/div/p[42]/a"
});

/* Privacy Policy page elements */
map.addPageset({
	name: 'privacy_policyPage', 
	description: 'describes elements common to Privacy Policy page',
	pathRegexp: "privacy_policy/.*"
});

map.addElement('privacy_policyPage', {
	name: 'terms_of_use',
	description: 'describes terms of use link on Privacy policy page',
	locator: "id=tos_link"
});

map.addElement('privacy_policyPage', {
	name: 'mailto_client_services',
	description: 'describes mail to clientservices@shoedazzle.com on Privacy policy page',
	locator: "//div[@id='bd']/div[1]/div/p[8]/a"
});

map.addElement('privacy_policyPage', {
	name: 'mailto_client_services2', 
	description: 'describes 2nd mail to clientservices@shoedazzle.com pn Privacy policy page', 
	locator: "//div[@id='bd']/div[1]/div/p[12]/a"
});

/* Free shipping and Easy returns page elements */
map.addPageset({
	name: 'shipping_returnsPage',
	description: 'describes elements common to Free shipping & Easy returns page',
	pathRegexp: "shipping_returns/.*"
});

/* Invite friends page elements */

map.addPageset({
	name: 'invite_friendsPage',
	description: 'desribes elements common to Invite friends page',
	pathRegexp: "referrals/form.*"
});

map.addElement('invite_friendsPage', {
	name: 'invite_friends_from_addressbook',
	description: 'describes invite friends from your address book link on Invite friends page',
	locator: "css=#referral_form form fieldset a"
});

map.addElement('invite_friendsPage', {
	name: 'import_contacts_from',
	description: 'describes Import Contacts From: link on Invite friends page',
	locator: "//div[@id='email_import_bar']/div[2]/a"
});

map.addElement('invite_friendsPage', {
	name: 'pick_your_friends_btn',
	description: 'describes Pick your friends button on Invite friends page',
	locator: "id=button_pick_friends"
});

map.addElement('invite_friendsPage', {
	name: 'terms_and_conds',
	description: 'describes Terms & Conditions link on Invite friends page',
	locator: "css=div a.term_conditions"
});

map.addElement('invite_friendsPage', {
	name: 'send_invite_btn',
	description: 'describes Send invite button on Invite friends page', 
	locator: "css=div div.floatright input"
});

map.addElement('invite_friendsPage', {
	name: 'personal_invite_link',
	description: 'describes personal invite link',
	locator: "id=invite_url_input"
});

map.addElement('invite_friendsPage', {
	name: 'visit_style_points_tab',
	description: 'describes Visit Your Style Point Tab link on Invite friends page',
	locator: "css=p.already_invited a"
});

map.addElement('invite_friendsPage', {
	name: 'get_free_shoes',
	description: 'describes get free shoes section on Invite friends page',
	locator: "css=#bd img"
});

/* Friends&Stylist page elements */
map.addPageset({
	name: 'friends_stylistsPage',
	description: 'describes elements common to Friends showrooms page',
	pathRegexp: "friends/.*"
});

map.addElement('friends_stylistsPage', {
	name: 'preconnection_view',
	description: 'describes preconnect to FB state',
	locator: "id=preconnect"
});

map.addElement('friends_stylistsPage', {
	name: 'preconnect_text',
	description: 'describes text on preconnect view',
	locator: "css=#preconnect p"
});

map.addElement('friends_stylistsPage', {
	name: 'connect_btn',
	description: 'describes Connect to Fb button',
	locator: "id=connect_button"
});

// map.addElement('friends_stylistsPage', {
// 	name: 'get_free_shoes', 
// 	description: 'describes psst...get free shoes section', 
// 	locator: "css=.sb_sidebar div h1 img"
// });
map.addElement('friends_stylistsPage', {
	name: 'earn_free_shoes',
	description: 'describes Earn free shoes image at the top',
	locator: "id=friends_masthead"
});

map.addElement('friends_stylistsPage', {
	name: 'whats_this_link',
	description: 'describes Whats this link on get free shoes section',
	locator: "css=.tooltip.whats_this"
});
// 
// map.addElement('friends_stylistsPage', {
// 	name: 'refresh_text',
// 	description: 'describes text near Refresh button',
// 	locator: "id=refresh_explanation"
// });
// 
// map.addElement('friends_stylistsPage', {
// 	name: 'refresh_btn',
// 	description: 'describes Refresh button',
// 	locator: "id=refresh_button"
// });

map.addElement('friends_stylistsPage', {
	name: 'friends_stylists_section',
	description: 'describes section with friends and stylists',
	locator: "id=aside_friends_stylists"
});

map.addElement('friends_stylistsPage', {
	name: 'refresh',
	description: 'describes Refresh link',
	locator: "id=facebook_friend_refresh"
});

map.addElement('friends_stylistsPage', {
	name: 'shop_with_friends',
	description: 'describes Facebook friends section',
	locator: "id=facepile_small"
});

map.addElement('friends_stylistsPage', {
	name: 'fb_friends_item',
	description: 'describes one from Facebook friends section',
	args:[{
		name: 'index',
		description: 'describes index of item in FB friends section',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('facepile_small').getElementsTagName('li');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//ul[@id='facepile_small']/li[" + args.index + "]/div/a"
	}
});

map.addElement('friends_stylistsPage', {
	name: 'fb_friends_name',
	description: 'describes friend name of each friends image in Facebook friends section',
	args:[{
		name: 'index',
		description: 'describes index of item in FB friends section',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('facepile_large').getElementsTagName('li');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//ul[@id='facepile_large']/li[" + args.index + "]/a"
	}
});

map.addElement('friends_stylistsPage', {
	name: 'shop_with_stylists',
	description: 'describes Stylists section',
	locator: "id=stylists_facepile_small"
});

map.addElement('friends_stylistsPage', {
	name: 'stylists_item',
	description: 'describes one from Stylists section',
	args:[{
		name: 'index',
		description: 'describes index of item in FB friends section',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('stylists_facepile_small').getElementsTagName('li');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//ul[@id='stylists_facepile_small']/li[" + args.index + "]/div/a"
	}
});

map.addElement('friends_stylistsPage', {
	name: 'invite',
	description: 'describes Invite link which is placed under Shop with friends section',
	locator: "css=#shop_friends_links a.fb_invite"
});

map.addElement('friends_stylistsPage', {
	name: 'view_all_showrooms',
	description: 'describes View All link under Shop with friends section',
	locator: "//div[@id='shop_friends_links']/a[2]"
})

map.addElement('friends_stylistsPage', {
	name: 'style_quiz', 
	description: 'describe Style quiz section on Friends&Stylists page',
	locator: "id=friend_style_quiz"
});

map.addElement('friends_stylistsPage', {
	name: 'quiz_question', 
	description: 'describes Style quiz question on Friends&Stylists page', 
	locator: "id=quiz_invite_question"
});

map.addElement('friends_stylistsPage', {
	name: 'quiz_friend_photo',
	description: 'describes photo of friend in Style quiz',
	locator: "id=quiz_friend_photo_box"
});

map.addElement('friends_stylistsPage', {
	name: 'quiz_friend_name',
	description: 'describes name of friend in Style quiz',
	locator: "id=quiz_friend_name"
});

map.addElement('friends_stylistsPage', {
	name: 'quiz_skip',
	description: 'describes Skip to next friend link',
	locator: "id=quiz_invite_skip_link"
});

map.addElement('friends_stylistsPage', {
	name: 'quiz_container',
	description: 'describes Style quiz container with products',
	locator: "id=quiz_item_container"
});

map.addElement('friends_stylistsPage', {
	name: 'quiz_vote_share',
	description: 'describes Vote&Share button on Style quiz section',
	locator: "id=quiz_invite_share_button"
});

map.addElement('friends_stylistsPage', {
	name: 'send_personal_invites_section',
	description: 'describes Send personal invites section',
	locator: "id=send_personal_invites"
});

map.addElement('friends_stylistsPage', {
	name: 'view_all',
	description: 'describes View all link on Send a personal invites section',
	locator: "css=#friends_hdr_container div a"
});

map.addElement('friends_stylistsPage', {
	name: 'friends_list',
	description: 'describes List of non-connected friends',
	locator: "id=non_connected_facepile_small"
});

map.addElement('friends_stylistsPage', {
	name: 'non_connected_fb_friends_item',
	description: 'describes non connected fb friend',
	args: [{
		name: 'index',
		description: 'describes index of non connected fb friend',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('non_connected_facepile_small').getElementsTagName('li');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//ul[@id='non_connected_facepile_small']/li[" + args.index + "]/a"
	}
});

map.addElement('friends_stylistsPage', {
	name: 'show_off_your_showroom_section',
	description: 'describes Show off your showroom section',
	locator: "id=show_off_your_showroom"
});

map.addElement('friends_stylistsPage', {
	name: 'post_message_container',
	description: 'describes field to post comment',
	locator: "id=share_on_fb_post_container"
});

map.addElement('friends_stylistsPage', {
	name: 'share_on_fb',
	description: 'describes Share on facebook button',
	locator: "id=share_on_fb_button"
});

map.addElement('friends_stylistsPage', {
	name: 'login_to_fb_button',
	description: 'describes Login to facebook button when user does not connect to FB',
	locator: "id=connect_button"
});

map.addElement('friends_stylistsPage', {
	name: 'non_connected_banner',
	description: 'describes top banner for non fb connected users',
	locator: "css=img[alt='Bg_non_connected_users']"
});

map.addElement('friends_stylistsPage', {
	name: 'facebook_connect',
	description: 'describes facebook connect button if user did not connect to fb',
	locator: "css=a.btn_fb_connect.connect"
});

map.addElement('friends_stylistsPage', {
	name: 'shop_with_friends_section',
	description: 'describes shop with friends section',
	locator: "css=.shop_with_friends a"
});

map.addElement('friends_stylistsPage', {
	name: 'access_stylist_showrooms_section',
	description: 'describes Access Stylist Showrooms section',
	locator: "css=.access_stylist_showrooms a"
});

map.addElement('friends_stylistsPage', {
	name: 'show_and_tell_section',
	description: 'describes Show&Tell section ',
	locator: "css=.shop_and_tell a"
});

map.addElement('friends_stylistsPage', {
	name: 'over_3_million',
	description: 'describes Over 3 million connections label',
	locator: "css=.box_3million a"
});

/* Account Details page elements */
map.addPageset({
	name: 'account_detailsPage',
	description: 'describes elements common to Account Details page',
	pathRegexp: "subscriptions/.*"
});

map.addElement('account_detailsPage', {
	name: 'membership_information',
	description: 'describes Membership Information link ',
	locator: "//ul[@class='sidebar_options']/li/a[contains(@href,'subscription')]"
});

map.addElement('account_detailsPage', {
	name: 'shipping_addresses',
	description: 'describes Shipping Addresses link ',
	locator: "//ul[@class='sidebar_options']/li/a[contains(@href,'myaccount/addresses')]"
});

map.addElement('account_detailsPage', {
	name: 'billing_information',
	description: 'describes Billing Information link ',
	locator: "//ul[@class='sidebar_options']/li/a[contains(@href,'myaccount/creditcards')]"
});

map.addElement('account_detailsPage', {
	name: 'order_history',
	description: 'describes Order History link ',
	locator: "//ul[@class='sidebar_options']/li/a[contains(@href,'orders')]"
});

map.addElement('account_detailsPage', {
	name: 'email_preferences',
	description: 'describes Email Preferences link',
	locator: "//ul[@class='sidebar_options']/li/a[contains(@href,'accounts/communication')]"
});

map.addElement('account_detailsPage', {
	name: 'facebook_preferences',
	description: 'describes Facebook Preferences link', 
	locator: "//ul[@class='sidebar_options']/li/a[contains(@href,'accounts/facebook_preferences')]"
});

map.addElement('account_detailsPage', {
	name: 'faqs',
	description: 'describes FAQs link',
	locator: "//ul[@class='sidebar_options']/li/a[contains(@href,'my_account_faq')]"
});

map.addElement('account_detailsPage', {
	name: 'client_services',
	description: 'describes Client Services link',
	locator: "//ul[@class='sidebar_options']/li/a[contains(@href,'client_services')]"
});

map.addElement('account_detailsPage', {
	name: 'save_changes',
	description: 'describes Save changes button on Membership information page',
	locator: "css=div.medium input"
});

map.addElement('account_detailsPage', {
	name: 'shoe_size',
	description: 'describes Shoe size drop down',
	locator: "id=subscription_user_attributes_user_fashion_preference_attributes_shoe_size"
});

map.addElement('account_detailsPage', {
	name: 'firstname',
	description: 'describes firstname field',
	locator: "id=subscription_first_name"
});

map.addElement('account_detailsPage', {
	name: 'lastname',
	description: 'describes lastname field',
	locator: "id=subscription_last_name"
});

map.addElement('account_detailsPage', {
	name: 'birthday_month',
	description: 'describes Birthday month drop down',
	locator: "id=subscription_birthdate_2i"
});

map.addElement('account_detailsPage', {
	name: 'birthday_date',
	description: 'describes Birthday date drop down',
	locator: "id=subscription_birthdate_3i"
});

map.addElement('account_detailsPage', {
	name: 'birthday_year',
	description: 'describes Birthday year drop down',
	locator: "id=subscription_birthdate_1i"
});

map.addElement('account_detailsPage', {
	name: 'email_address',
	description: 'describes Email address field',
	locator: "id=subscription_user_attributes_email"
});

map.addElement('account_detailsPage', {
	name: 'password',
	description: 'describes Password field',
	locator: "id=subscription_user_attributes_password"
});

map.addElement('account_detailsPage', {
	name: 'confirm_password',
	description: 'describes Confirm password field',
	locator: "id=subscription_user_attributes_password_confirmation"
});

map.addElement('account_detailsPage', {
	name: 'questions_phone',
	description: 'describes phone number to ask questions',
	locator: "id=client_services"
});

map.addElement('account_detailsPage', {
	name: 'disconnect_btn',
	description: 'describes Disconnect link',
	locator: "id=disconnect_button"
});

map.addElement('account_detailsPage', {
	name: 'currently_connected',
	description: 'describes Text with currently connected user',
	locator: "id=currently_connected"
});

map.addElement('account_detailsPage', {
	name: 'connect_btn',
	description: 'describes Connect to FB button',
	locator: "id=connect_button"
});

map.addElement('account_detailsPage', {
	name: 'login_to_fb',
	description: 'describes Login to facebook button',
	locator: "id=connect_login_button"
});

map.addElement('account_detailsPage', {
	name: 'switch_btn',
	description: 'describes Switch button in My Account page',
	locator: "id=switch_button"
});

map.addElement('account_detailsPage', {
	name: 'why_fb_connect',
	description: 'describes Why fb connect hint',
	locator: "css=.why_facebook_connect a"
});

/* Account Details page elements */
map.addElement('account_detailsPage', {
 	name: 'ac_delete_button',
 	description: 'describes Delete address/billing option button',
 	locator: "css=a.delete_button"
});
 
map.addElement('account_detailsPage', {
 	name: 'ac_edit_button',
 	description: 'describes edit button address/billing option',
 	locator: "link=Edit"
});

map.addElement('account_detailsPage', {
 	name: 'ac_return_showroom',
 	description: 'describes return to showroom link in my account page',
 	locator: "link=my showroom"
});

/* Shipping Addresses page elements */
map.addPageset({
	name: 'shipping_addressesPage', 
	description: 'describes elements common to Shipping Addresses page', 
	pathRegexp: "myaccount/addresses.*"
});

map.addElement('shipping_addressesPage', {
	name: 'new',
	description: 'describes Add new address button', 
	locator: "css=#add_new_address_button2 a"
});

/* Billing Information page elements */
map.addPageset({
	name: 'billing_infoPage', 
	description: 'describes elements common to Billing Information page', 
	pathRegexp: "myaccount/creditcards.*"
});

map.addElement('billing_infoPage', {
	name: 'new',
	description: 'describes Add new payment method button', 
	locator: "css=#add_new_payment_button2 a"
});

/* Order History page elements */
map.addPageset({
	name: 'order_historyPage', 
	description: 'describes Order History page elements',
	pathRegexp: "users.*orders.*"
});

map.addElement('order_historyPage', {
	name: 'order_history_image',
	description: 'describes Order History image', 
	locator: "css=.left_col_610 h2 img"
});

map.addElement('order_historyPage', {
	name: 'order_date_column_header', 
	description: 'describes Order Date column header',
	locator: "css=.solid_bottom th a"
});

/* Email preferences page elements */
map.addPageset({
	name: 'email_preferencesPage',
	description: 'describes Email preferences page elements',
	pathRegexp: "accounts/communication.*"
});

map.addElement('email_preferencesPage', {
	name: 'header',
	description: 'describes header at the top of the page',
	locator: "css=.left_col_610 h2 img[alt='email preferences']"
});

map.addElement('email_preferencesPage', {
	name: 'text',
	description: 'describes text at the top of the page',
	locator: "css=.left_col_610 p"
});

map.addElement('email_preferencesPage', {
	name: 'dazzledeals_checkbox',
	description: 'describes Dazzle Deals checkbox',
	locator: "id=preferences_8_subscribe"
});

map.addElement('email_preferencesPage', {
	name: 'invite_friends_rewards_checkbox',
	description: 'describes Invite Friends Rewards checkbox',
	locator: "id=preferences_5_subscribe"
});

map.addElement('email_preferencesPage', {
	name: 'showroom_alerts_checkbox',
	description: 'describes Showroom Alerts checkbox',
	locator: "id=preferences_10_subscribe"
});

map.addElement('email_preferencesPage', {
	name: 'stylist_picks_tips_checkbox',
	description: 'describes Stylist picks & tips checkbox',
	locator: "id=preferences_7_subscribe"
});

map.addElement('email_preferencesPage', {
	name: 'style_points_checkbox',
	description: 'describes Style points checkbox',
	locator: "id=preferences_12_subscribe"
});

map.addElement('email_preferencesPage', {
	name: 'stylepulse_newsletter_checkbox',
	description: 'describes Stylepulse newsletter checkbox',
	locator: "id=preferences_6_subscribe"
});

map.addElement('email_preferencesPage', {
	name: 'surveys_checkbox',
	description: 'describes Surveys checkbox',
	locator: "id=preferences_9_subscribe"
});

map.addElement('email_preferencesPage', {
	name: 'save_my_preferences',
	description: 'describes Save my preferences button',
	locator: "css=form[method=post] input[type=image]"
});

/* My favorites page elements */
map.addPageset({
	name: 'favoritesPage',
	description: 'describes elements common to My favorites page',
	pathRegexp: "myfavorites/.*"
});

map.addElement('favoritesPage', {
	name: 'loading', 
	description: 'describes Loading icon on My favorites page',
	locator: "css=.generic_wait_indicator img"
});

map.addElement('favoritesPage',{
	name: 'empty',
	description: 'describes empty block on My favorites page',
	locator: "css=.empty_myfavorites"
});

map.addElement('favoritesPage', {
	name: 'empty_content',
	description: 'describes empty content',
	locator: "css=.empty_myfavorites img"
});

map.addElement('favoritesPage', {
	name: 'pick_your_favorites_btn',
	description: 'describes Pick your favorites button',
	locator: "css=.empty_myfavorites a.btn_pick_favorites"
});

map.addElement('favoritesPage', {
	name: 'perk_alert',
	description: 'describes Perk alert text',
	locator: "css=.empty_myfavorites p.perk_alert"
});

map.addElement('favoritesPage', {
	name: 'shoes_section',
	description: 'describes shoes section',
	locator: "id=shoes_slide_inner_box"
});

map.addElement('favoritesPage', {
	name: 'shoes_item',
	description: 'describes shoes item',
	args: [{
		name: 'index', 
		description: 'describes index of shoe item ',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('shoes_slide_inner_box').getElementsClassName('selections_slide_products').getElementsById('original_selections').getElementsByClassName('showroom_sel_cntnr');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
			return "//ul[@id='shoes_slide_inner_box']/li/div[@id='original_selections']/div[@class='showroom_sel_cntnr'][" + args.index + "]/form/div[@class='showroom_sel_shoe']/span/a"
	}
});

map.addElement('favoritesPage', {
	name: 'delete_shoes',
	description: 'describes delete shoes cross ',
	args: [{
		name: 'index', 
		description: 'describes index of delete shoe icon',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('shoes_slide_inner_box').getElementsClassName('selections_slide_products').getElementsById('original_selections').getElementsByClassName('showroom_sel_cntnr');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
			return "//ul[@id='shoes_slide_inner_box']/li/div[@id='original_selections']/div[@class='showroom_sel_cntnr'][" + args.index + "]/form/div[@class='showroom_sel_shoe']/span/span[@class='del_myfavorites']/a"
	}
});

map.addElement('favoritesPage', {
	name: 'handbags_section',
	description: 'describes handbags section',
	locator: "id=handbags_slide_inner_box"
});

map.addElement('favoritesPage', {
	name: 'handbags_item',
	description: 'describes handbags item',
	args: [{
		name: 'index', 
		description: 'describes index of handbags item ',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('handbags_slide_inner_box').getElementsClassName('selections_slide_products').getElementsById('original_selections').getElementsByClassName('showroom_sel_cntnr');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
			return "//ul[@id='handbags_slide_inner_box']/li/div[@id='original_selections']/div[@class='showroom_sel_cntnr'][" + args.index + "]/form/div[@class='showroom_sel_shoe']/span/a"
	}
});

map.addElement('favoritesPage', {
	name: 'delete_handbags',
	description: 'describes delete handbags cross ',
	args: [{
		name: 'index', 
		description: 'describes index of delete handbags item for cross button',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('handbags_slide_inner_box').getElementsClassName('selections_slide_products').getElementsById('original_selections').getElementsByClassName('showroom_sel_cntnr');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		},
	}],
	getLocator: function(args){
		return "//ul[@id='handbags_slide_inner_box']/li/div[@id='original_selections']/div[@class='showroom_sel_cntnr'][" + args.index + "]/form/div[@class='showroom_sel_shoe']/span/span[@class='del_myfavorites']/a"
	}
});

map.addElement('favoritesPage', {
	name: 'jewelry_section',
	description: 'describes jewelry section',
	locator: "id=jewelry_slide_inner_box"
});

map.addElement('favoritesPage', {
	name: 'jewelry_item',
	description: 'describes jewelry item',
	args: [{
		name: 'index', 
		description: 'describes index of jewelry item ',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('jewelry_slide_inner_box').getElementsClassName('selections_slide_products').getElementsById('original_selections').getElementsByClassName('showroom_sel_cntnr');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//ul[@id='jewelry_slide_inner_box']/li/div[@id='original_selections']/div[@class='showroom_sel_cntnr'][" + args.index + "]/form/div[@class='showroom_sel_shoe']/span/a"
	}
});

map.addElement('favoritesPage', {
	name: 'delete_jewelry',
	description: 'describes delete jewelry cross ',
	args: [{
		name: 'index', 
		description: 'describes index of delete jewelry item for cross button',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('jewelry_slide_inner_box').getElementsClassName('selections_slide_products').getElementsById('original_selections').getElementsByClassName('showroom_sel_cntnr');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		},
	}],
	getLocator: function(args){
		return "//ul[@id='jewelry_slide_inner_box']/li/div[@id='original_selections']/div[@class='showroom_sel_cntnr'][" + args.index + "]/form/div[@class='showroom_sel_shoe']/span/span[@class='del_myfavorites']/a"
	}
});

/* Style points page elements */
map.addPageset({
	name: 'style_pointsPage',
	description: 'describes elements common to Style Points page', 
	pathRegexp: "loyalty/.*"
});

map.addElement('style_pointsPage', {
	name: 'style_points_progress',
	description: 'describes Style points progress section',
	locator: "id=lp_progress_outer_bg"
});

map.addElement('style_pointsPage', {
	name: 'invite_friends',
	description: 'describes Invite friends button on Style Points page',
	locator: "css=#chips_container div.loyalty_chip a "
});

map.addElement('style_pointsPage', {
	name: 'make_purchase',
	description: 'describes Make a purchase button on Style Points page',
	locator: "//div[@id='chips_container']/div[@class='loyalty_chip'][2]/a"
});

map.addElement('style_pointsPage', {
	name: 'find_it_on_fb',
	description: 'describes find it on facebook link',
	locator: "//div[@id='chips_container']/div[@class='loyalty_chip'][3]/a"
});

map.addElement('style_pointsPage', {
	name: 'track_email_invites_label',
	description: 'describes Track my Email Invites label on Style Points page',
	locator: "css=#track_table_top_contents img"
});

map.addElement('style_pointsPage', {
	name: 'track_email_invites_btn',
	description: 'describes Track my Email Invites button on Style Points page',
	locator: "id=track_table_btn" 
});

map.addElement('style_pointsPage', {
	name: 'style_points_history_label',
	description: 'describes My Style Points History label on Style Points page',
	locator: "css=#history_table_top_contents img"
});

map.addElement('style_pointsPage', {
	name: 'style_points_history_btn',
	description: 'describes button on My Style Points History section',
	locator: "id=history_table_btn"
});

map.addElement('style_pointsPage', {
	name: 'terms_and_conds', 
	description: 'describes Terms and Conditions link on Style Points page',
	locator: "css=a.terms-conditions-link"
});

map.addElement('style_pointsPage', {
	name: 'terms_and_conds_popup', 
	description: 'describes Style Points Terms&Conditions pop up',
	locator: "id=stylepoints_terms_modal"
});

map.addElement('style_pointsPage', {
	name: 'terms_and_conds_cross',
	description: 'describes Cross button on terms and conditions modal',
	locator: "css=.ui-dialog-titlebar a.ui-dialog-titlebar-close"
});

/* Lookbooks page elements */
map.addPageset({
	name: 'lookbooksPage', 
	description: 'describes elements common to Collections page', 
	pathRegexp: 'lookbooks/.*'
});

map.addElement('lookbooksPage', {
	name: 'slide', 
	description: 'describes the main slide on Collections page', 
	locator: "css=#carousel li.slide img"
});

map.addElement('lookbooksPage', {
	name: 'prev_arrow', 
	description: 'describes Previous arrow on collections slide',
	locator: "css=#featurettes_expanded div.slideshow_contents div.jcarousel-container div.jcarousel-prev"
});

map.addElement('lookbooksPage', {
	name: 'next_arrow',
	description: 'describes Next arrow on collections slide',
	locator: "css=#featurettes_expanded div.slideshow_contents div.jcarousel-container div.jcarousel-next"
});

map.addElement('lookbooksPage', {
	name: 'big_tooltip_on_slide',
	description: 'describes tooltip on collection slide',
	locator: "css=#carousel li.slide a.tooltip_container"
});

map.addElement('lookbooksPage', {
	name: 'small_tooltip_on_slide', 
	description: 'describes link inside big tooltip on collection slide',
	locator: "css=a.tooltip_container a#tooltip p a"
});

map.addElement('lookbooksPage', {
	name: "featured_label",
	description: 'describes View Featured products label on slide',
	locator: "css=.view_featured_products div.hdr img"
});

map.addElement('lookbooksPage', {
	name: 'featured_list',
	description: 'describes View Featured products area on slide',
	locator: "css=.featured_list"
});

map.addElement('lookbooksPage', {
	name: 'featured_list_item',
	description: 'describes item in Featured list',
	args: [{
		name: 'index',
		description: 'describes index of item',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsByClassName('featured_list').getElementsByTagName('div').getElementsByTagName('ul').getElementsByTagName('li');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//div[@class='featured_list']/div/ul/li[" + args.index + "]/a/img"
	}
});

map.addElement('lookbooksPage', {
	name: 'these_just_in_section',
	description: 'describes These just in section on Collections page',
	locator: "id=these_just_in"
});

map.addElement('lookbooksPage', {
	name: 'these_just_in_item',
	description: 'describes item on These just in section on Collection page',
	args: [{
		name: 'index',
		description: 'describes index of item',
		defaultValues: range(1,2)
	}],
	getLocator: function(args){
 		return "//div[@id='these_just_in']/div[@class='item'][" + args.index + "]/a/img";
	}
});

map.addElement('lookbooksPage', {
	name: 'recently_viewed_section',
	description: 'describes recently viewed section on Collections page',
	locator: "id=recently_viewed"
});

map.addElement('lookbooksPage', {
	name: 'recently_viewed_item',
	description: 'describes item in recently viewed section on Collections page',
	args: [{
		name: 'index',
		description: 'describes index of item',
		defaultValues: range (1,2)
	}],
	getLocator: function(args){
		return "//div[@id='recently_viewed']/div[@class='item'][" + args.index + "]/a/img";
	}
});

map.addElement('lookbooksPage', {
	name: 'return_to_showroom',
	description: 'describes See More in showroom section',
	locator: "css=.return_to_showroom a"
});

/*Onetime showroom page elements */
map.addPageset({
	name: "onetimeshowroomPage", 
	description: "describes elements common to one time  showroom page",
	pathRegexp: "showrooms/.*"
});

map.addElement('onetimeshowroomPage', {
	name: 'discounted_products',
	description: 'describes section with discounter items',
	locator: "id=discounted_products_no_bg"
});

map.addElement('onetimeshowroomPage', {
	name: 'discounted_item',
	description: 'describes item in discounted products section',
	args: [{
		name: 'index', 
		description: 'describes index of product in one time showroom',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('discounted_products_no_bg').getElementsByTagName('div').getElementsByClassName('showroom_sel_cntnr');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//div[@id='discounted_products_no_bg']/div/div[@class='showroom_sel_cntnr'][" + args.index + "]/div/span/a"
	}
});

map.addElement('onetimeshowroomPage', {
	name: 'discounted_item_name',
	description: 'describes item name in discounted products section',
	args: [{
		name: 'index', 
		description: 'describes index of product in one time showroom',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('discounted_products_no_bg').getElementsByTagName('div').getElementsByClassName('showroom_sel_cntnr');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//div[@id='discounted_products_no_bg']/div/div[@class='showroom_sel_cntnr'][" + args.index + "]/div[@class='showroom_shoe_name']/a"
	}
});

map.addElement('onetimeshowroomPage', {
	name: 'lowstock_label', 
	description: 'describes low stock label at the left top corner',
	locator: "css=span.tooltip a img.overlay_top_left"
});

map.addElement("onetimeshowroomPage", {
	name: 'reveal_your_profile',
	description: 'describes reveal your profile image link to style profile modal with possibility to share',
	locator: "css=#survey_results_pod img"
});

map.addElement('onetimeshowroomPage', {
	name: 'like_btn', 
	description: 'describes like Shoedazzle button',
	// locator: "css=td.connect_widget_vertical_center div.connect_button_slider div.connect_button_container a.connect_widget_like_button span.liketext"
	// locator: "css=#LikeboxPluginPagelet div div.fbConnectWidgetTopmost div div div.fan_box div div div.connect_action div div.connect_widget table tbody tr td div div a.connect_widget_like_button"
	locator: "css=#LikeboxPluginPagelet div div.fbConnectWidgetTopmost div div div.fan_box div div div div div.connect_widget table tbody tr td div div a.connect_widget_like_button"
});

map.addElement('onetimeshowroomPage', {
	name: 'fan_box', 
	description: 'describes fan box with fb like button which is placed under styly your profile section',
	locator: "css=.fan_box"
});

map.addElement('onetimeshowroomPage', {
	name: 'video_image',
	description: 'describes unboxed Video image',
	locator: "id=unboxed_video_image"
});

map.addElement('onetimeshowroomPage', {
	name: 'watch_the_video',
	description: 'describes Watch the video link under unboxed video image',
	locator: "css=#unboxed_module p a.unboxed_video_link"
});

map.addElement('onetimeshowroomPage', {
	name: 'welcome_banner',
	description: 'describes Welcome banner at the top of showroom page',
	locator: "id=welcome_banner_7868"
});

map.addElement('onetimeshowroomPage', {
	name: 'pink_banner',
	description: 'describes pink banner under welcome banner at the top of showroom page',
	locator: "id=ots_pink_banner"
});

map.addElement('onetimeshowroomPage', {
	name: 'bestsellers_section',
	description: 'describes Bestsellers section at the top of showroom page',
	locator: "id=bestsellers"
});

map.addElement('onetimeshowroomPage', {
	name: 'bestseller_item',
	description: 'describes item on Bestsellers section',
	args: [{
		name: 'index',
		description: 'describes index of item',
		defaultValues: range (1,5)
	}],
	getLocator: function(args){
		return "//div[@id='bestsellers']/ul[@class='items track_area_box_with_triggers']/li[" + args.index + "]/div/a";
	}
})

map.addElement('onetimeshowroomPage', {
	name: 'recommended_products',
	description: 'describes recommended products section at the bottom',
	locator: "css=.recommended_products"
});

map.addElement('onetimeshowroomPage', {
	name: 'recommended_product_item',
	description: 'describes item on Stylist Must haves section',
	args: [{
		name: 'index',
		description: 'describes index of item',
		defaultValues: range (1,3)
	}],
	getLocator: function(args){
		return "//div[@class='recommended_products clearAfter']/div[@class='showroom_sel_cntnr'][" + args.index + "]/div/a/img";
	}
})
 
map.addElement('onetimeshowroomPage', {
	name: 'most_liked',
	description: 'describes Most likes section',
	locator: "css=.products_block_container"
});

map.addElement('onetimeshowroomPage', {
	name: 'most_liked_item',
	description: 'describes item on Most likes section',
	args: [{
		name: 'index',
		description: 'describes index of item',
		defaultValues: range (1,3)
	}],
	getLocator: function(args){
		return "//div[@class='recommended_products products_to_block clearAfter']/div[@class='showroom_sel_cntnr'][" + args.index + "]/div/a/img";
	}
})

map.addElement('onetimeshowroomPage', {
	name: 'blocked_header',
	description: 'describes header of most liked section when it is blocked',
	locator: "css=.products_blocked_hdr"
});

map.addElement('onetimeshowroomPage', {
	name: 'unblocked_header',
	description: 'describes header of most liked section when it is unlocked',
	locator: "css=.products_unblocked_hdr"
});

map.addElement('onetimeshowroomPage', {
	name: 'block_overlay',
	description: 'describes overlay above Most liked section when it is locked',
	locator: "css=.blockUI.blockOverlay"
});

map.addElement('onetimeshowroomPage', {
	name: 'like_us_to_unlock',
	description: 'describes Like button on Most liked section',
	locator: "//div[2][@id='LikeboxPluginPagelet']/div/div/div/div/div/div[2]/div/table/tbody/tr/td/div/div/a"
});

map.addElement('onetimeshowroomPage', {
	name: 'note',
	description: 'describes Note at the bottom of page',
	locator: "css=.note"
});

map.addElement('onetimeshowroomPage', {
	name: 'unboxed_video_modal',
	description: 'describes Unboxed video modal',
	locator: "id=video6"
});

map.addElement('onetimeshowroomPage', {
	name: 'close_modal',
	description: 'describes Cross icon to close modal',
	locator: "css=div[class='ui-dialog ui-widget ui-widget-content ui-corner-all  ui-draggable'][aria-labelledby='ui-dialog-title-video6'] a.ui-dialog-titlebar-close"
});

map.addElement('onetimeshowroomPage', {
	name: 'reveal_style_profile_modal',
	description: 'describes modal which displays after pressing Reveal style profile',
	locator: "id=survey_results_modal"
});

map.addElement('onetimeshowroomPage', {
	name: 'close_reveal_modal',
	description: 'describes Cross button on Reveal your style profile modal',
	locator: "id=qpopClose"
});

/* My Showroom page elements */
map.addPageset({
	name: 'showroomPage', 
	description: 'describes elements common to My Showroom page',
	pathRegexp: "showroom.*"
});
// map.addElement('showroomPage', {
// 	name: 'lowstock_label', 
// 	description: 'describes low stock label',
// 	locator: "css=span.tooltip a span.label_lowstock"
// });
// 
// map.addElement('showroomPage', {
// 	name: 'soldout_label', 
// 	description: 'describes sold out label above product item',
// 	locator: "css=.tooltip a div.item_soldout span"
// });
// 
// 

map.addElement('showroomPage', {
	name: 'showroom_modal',
	description: 'describes modal which displays on My Showroom page',
	locator: "id=first_time_showroom_modal"
});

map.addElement('showroomPage', {
	name: 'close_showroom_modal',
	description: 'describes close button on showroom modal',
	locator: "css=div[aria-labelledby='ui-dialog-title-first_time_showroom_modal'] div a.ui-dialog-titlebar-close"
});

map.addElement('showroomPage', {
	name: 'enter_my_showroom',
	description: 'describes Enter my showroom button on Showroom modal',
	// locator: "id=enter_my_showroom_button"
	locator: "css=.welcome_wrapper div.welcome_content div.promo a.close_link"
});

map.addElement('showroomPage', {
	name: 'dazzledeals_section',
	description: 'describes DazzleDeals section',
	locator: "id=dd_dazzledeal"
});

map.addElement('showroomPage', {
	name: 'view_deal_btn', 
	description: 'describes View deal button on Dazzle Deals section in My Showroom page',
	locator: "css=div.dd_details a.view_deal"
});

map.addElement('showroomPage', {
	name: 'view_deal_swatch',
	description: 'describes Swatch icon for item in dazzle deal',
	locator: "css=div.dd_product_details ul li a img.mini"
});

map.addElement('showroomPage', {
	name: 'shoes_section',
	description: 'describes Shoes section in My Showroom page',
	locator: "css=ul#shoes_slide_inner_box.selections_slide"
});

map.addElement('showroomPage', {
	name: 'shoe_item',
	description: 'describes shoe item in My Showroom page',
	args: [{
		name: 'index',
		description: 'describes index of item in shoes line',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('shoes_slide_inner_box').getElementsByTagName('li').getElementsByTagName('div').getElementsByClassName('showroom_sel_cntnr');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//ul[@id='shoes_slide_inner_box']/li/div/div[@class='showroom_sel_cntnr'][" + args.index + "]/div/span/a/img"
	}
});

map.addElement('showroomPage', {
	name: 'see_more_shoes_btn',
	description: 'describes See more shoes button on My Showroom page',
	locator: "css=#show_next_best_shoes div.alternate_target a"
});

map.addElement('showroomPage', {
	name: 'request_alternative_shoes',
	description: 'describes Request alternative shoes link on My Showroom page',
	locator: "css=a.request_alternate.alt_shoes"
});

map.addElement('showroomPage', {
	name: 'bags_section',
	description: 'describes Handbags section',
	locator: "css=ul#bags_slide_inner_box.selections_slide"
});

map.addElement('showroomPage', {
	name: 'bag_item',
	description: 'describes bag item in My Showroom page',
	args: [{
		name: 'index',
		description: 'describes index of item in bags line',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('bags_slide_inner_box').getElementsByClassName('selections_slide_products').getElementsByClassName('original_selections').getElementsByClassName('showroom_sel_cntnr')
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//ul[@id='bags_slide_inner_box']/li/div/div[@class='showroom_sel_cntnr'][" + args.index + "]/div/span/a/img"
	}
});

map.addElement('showroomPage', {
	name: 'request_alternative_bags',
	description: "describes Request alternative handbags link on My Showroom page",
	locator: "css=a.request_alternate.alt_bags"
});

map.addElement('showroomPage', {
	name: 'jewelry_section',
	description: 'describes Handbags section',
	locator: "css=ul#accessories_slide_inner_box.selections_slide"
});

map.addElement('showroomPage', {
	name: 'jewelry_item',
		description: 'describes jewelry item in My Showroom page',
		args: [{
			name: 'index',
			description: 'describes index of item in jewelry line',
			getDefaultValues: function(inDocument){
				var container = inDocument.getElementsById('accessories_slide_inner_box').getElementsByClassName('selections_slide_products').getElementsByClassName('original_selections').getElementsByClassName('showroom_sel_cntnr')
				for (var i=0; i <container.length; i++) result.push(i+1);
				return result;
			}
		}],
		getLocator: function(args){
			return "//ul[@id='accessories_slide_inner_box']/li/div/div[@class='showroom_sel_cntnr'][" + args.index + "]/div/span/a/img"
		}
});

map.addElement('showroomPage', {
	name: 'request_alternative_jewelry',
	description: 'describes request alternative jewelry link on My Showroom page',
	locator: "css=a.request_alternate.alt_accessories"
});

map.addElement('showroomPage', {
	name: 'welcome',
	description: 'describes Welcome top message',
	locator: "id=top_message"
});

map.addElement('showroomPage', {
	name: 'top_promo',
	description: 'describes top promo',
	locator: "id=tm_promo"
});

map.addElement('showroomPage', {
	name: 'lookbooks_section',
	description: 'describes Lookbooks section',
	locator: "id=lookbooks_page"
});

map.addElement('showroomPage', {
	name: 'navigation',
	description: 'describes navigation element',
	locator: "css=#persistent_nav ul"
});

map.addElement('showroomPage', {
	name: 'nav_dazzledeals',
	description: 'describes dazzle deals item on navigation element',
	locator: "css=.pn_dazzledeals a"
});

map.addElement('showroomPage', {
	name: 'nav_lookbooks',
	description: 'describes lookbooks item on navigation element',
	locator: "css=.pn_lookbooks a"
});

map.addElement('showroomPage', {
	name: 'nav_shoes',
	description: 'describes shoes item on navigation element',
	locator: "css=.pn_shoes a"
});

map.addElement('showroomPage', {
	name: 'nav_handbags',
	description: 'describes handbags item on navigation element',
	locator: "css=.pn_handbags a"
});

map.addElement('showroomPage', {
	name: 'nav_jewelry',
	description: 'describes jewelry item on navigation element',
	locator: "css=.pn_jewelry a"
});

map.addElement('showroomPage', {
	name: 'top_five',
	description: 'describes Almost made you top five shoes link on My Showroom page',
	locator: "id=nb_hdr"
});

map.addElement('showroomPage', {
	name: 'invite_friends_image', 
	description: 'describes invite friends image which is placed at the bottom',
	locator: "css=.sft_invitefriends div.sft_img a"
});

map.addElement('showroomPage', {
	name: 'invite_friends_link',
	description: 'describes invite friends link which is placed under invite friends image',
	locator: "css=.sft_invitefriends div.sft_hdr a"
});

map.addElement('showroomPage', {
	name: 'shop_friendshowroom_image',
	description: 'describes Shop friends showroom image which is placed at the bottom ',
	locator: "css=.sft_friendsshowrooms div.sft_img a"
});

map.addElement('showroomPage', {
	name: "shop_friendshowroom_link",
	description: 'describes Shop friends showroom link which is placed under shop friends showroom image',
	locator: "css=.sft_friendsshowrooms div.sft_hdr a"
});

map.addElement('showroomPage', {
	name: 'earn_points_image', 
	description: 'describes Earn style points image which is placed at the bottom',
	locator: "css=.sft_stylepoints div.sft_img a"
});

map.addElement('showroomPage', {
	name: 'earn_points_link',
	description: 'describes Earn style points link which is placed under earn style points image',
	locator: "css=.sft_stylepoints div.sft_hdr a"
});

map.addElement('showroomPage', {
	name: 'shop_giftcards_image',
	description: 'describes shop giftcards image which is placed at the bottom',
	locator: "css=.sft_shopgiftcards div.sft_img a"
});

map.addElement('showroomPage', {
	name: 'shop_giftcards_link',
	description: 'describes shop giftcards link which is placed under shop giftcards image',
	locator: "css=.sft_shopgiftcards div.sft_hdr a"
});

map.addElement('showroomPage', {
	name: 'redeem_giftcards',
	description: 'describes redeem giftcards section at the bottom',
	locator: "css=.sft_redeemgiftcards"
});

map.addElement('showroomPage', {
	name: 'enter_code_field',
	description: 'describes Enter code field',
	locator: "id=gift_code"
});

map.addElement('showroomPage', {
	name: 'go_btn',
	description: 'describes Go button near Enter code textfield',
	locator: 'id=gift_card_submit_div'
});

/*showroom without featured products elements */
map.addElement('showroomPage', {
	name: 'header',
	description: 'describes showroom header if there is features tab',
	locator: "css=.showroom_header"
})
map.addElement('showroomPage', {
	name: 'shop_featured_styles',
	description: 'describes Shop featured styles button',
	locator: "css=#showroom_contents div.alternate_target"
});

map.addElement('showroomPage', {
	name: 'promotion',
	description: 'describes promotion at the bottom of showroom without featured products',
	locator: "css=.cross_promotion"
});

map.addElement('showroomPage', {
	name: 'promotion_image',
	description: 'describes promotion image in showroom without featured products',
	locator: "css=.cross_promotion div h3 img"
});

// map.addElement('showroomPage', {
// 	name: 'promotion_shop_features',
// 	description: 'describes Shop features section link in promotion section at the bottom of showroom without featured products',
// 	locator: "css=.cross_promotion div div.browse_featured_styles a"
// });
// 
// map.addElement('showroomPage', {
// 	name: 'promotion_shop_with_friends',
// 	description: 'describes Shop with friends section link in promotion section at the bottom of showroom without featured products',
// 	locator: "css=.cross_promotion div div.shop_with_friends a"
// });
// 
// map.addElement('showroomPage', {
// 	name: 'promotion_shop_collections',
// 	description: 'describes Shop features section link in promotion section at the bottom of showroom without featured products',
// 	locator: "css=.cross_promotion div div.check_out_collection a"
// });

map.addElement('showroomPage', {
	name: 'promotion_left',
	description: 'describes Left promotion section at the bottom of showroom without featured products',
	locator: "//div[@class='cross_promotion shop_more_style clearAfter']/div/div/a"
});

map.addElement('showroomPage', {
	name: 'promotion_center',
	description: 'describes Center promotion section at the bottom of showroom without featured products',
	locator: "//div[@class='cross_promotion shop_more_style clearAfter']/div/div[2]/a"
});

map.addElement('showroomPage', {
	name: 'promotion_right',
	description: 'describes Right promotion section at the bottom of showroom without featured products',
	locator: "//div[@class='cross_promotion shop_more_style clearAfter']/div/div[3]/a"
});

map.addElement('showroomPage', {
	name: 'shop_lookbooks',
	description: 'describes Shop lookbooks button at the bottom of showroom without featured products',
	locator: "css=.cross_promotion div a img"
});

/* Features page elements */
map.addPageset({
	name: 'featuresPage',
	description: 'describes Features page elements',
	pathRegexp: "features/.*"
});

map.addElement('featuresPage', {
	name: 'header',
	description: 'describes header on Features page', 
	locator: "css=.header"
});

map.addElement('featuresPage', {
	name: 'lookbooks_section', 
	description: 'describes Lookbooks section', 
	locator: "id=lookbooks_page"
});

map.addElement('featuresPage', {
	name: 'large_lookbook',
	description: 'describes expanded lookbook',
	locator: "id=lookbooks_expanded"
});

map.addElement('featuresPage', {
	name: 'close_large_lookbooks',
	description: 'describes cross button to get small lookbooks carousel',
	locator: "css=#lookbooks_expanded div.close"
});

map.addElement('featuresPage', {
	name: 'small_lookbooks',
	description: 'describes small lookbooks carousel',
	locator: "id=lookbooks_collapsed"
});

map.addElement('featuresPage', {
	name: 'all_featured_styles_section',
	description: 'describes All featured styles section',
	locator: "id=showroom_sel_bar_inner"
});

map.addElement('featuresPage', {
	name: 'visit_showroom',
	description: 'describes Visit your showroom button',
	locator: "css=.alternate_target a"
});

map.addElement('featuresPage', {
	name: 'promotion',
	description: 'describes promotion at the bottom of showroom without featured products',
	locator: "css=.cross_promotion"
});

map.addElement('featuresPage', {
	name: 'promotion_image',
	description: 'describes promotion image in showroom without featured products',
	locator: "css=.cross_promotion div h3 img"
});

map.addElement('featuresPage', {
	name: 'shop_your_showroom',
	description: 'describes Shop your showroom section link in promotion section at the bottom of showroom without featured products',
	locator: "css=.cross_promotion div div.shop_your_showroom a"
});

map.addElement('featuresPage', {
	name: 'shop_with_friends',
	description: 'describes Shop with friends section link in promotion section at the bottom of showroom without featured products',
	locator: "css=.cross_promotion div div.shop_with_your_girls a"
});

map.addElement('featuresPage', {
	name: 'shop_collections',
	description: 'describes Shop features section link in promotion section at the bottom of showroom without featured products',
	locator: "css=.cross_promotion div div.check_out_collection a"
});

map.addElement('showroomPage', {
	name: "promo_slider_invite",
	description: 'describes promo slider to invite friends on My showroom page',
	locator: "css=.box_slider div[class='content_slider invite_slider'] a[class=' ai track_area_trigger']"
});

map.addElement('showroomPage', {
	name: 'promo_slider',
	description: 'describes promo slider on My Showroom page',
	locator: "css=div.box_slider a[class=' ai track_area_trigger']"
});

/* Collections page element */
map.addPageset({
	name: 'collectionsPage',
	description: 'describes elements common to Collections page',
	pathRegexp: "collections.*"
});

map.addElement('collectionsPage', {
	name: 'title',
	description: 'describes Collections title',
	locator: "css=.collections_title"
});

map.addElement('collectionsPage', {
	name: 'slides',
	description: 'describes slides on Collections page',
	locator: "css=.collections_landing_page  div.collections_slides"
});

map.addElement('collectionsPage', {
	name: 'menu',
	description: 'describes navigation menu on Collections page',
	locator: "css=.nav_menu"
});

map.addElement('collectionsPage', {
	name: 'menu_item',
	description: 'describes navigation menu item on Collections page',
	args: [{
		name: 'index',
		description: 'describes index of menu item',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsByClassName('nav_menu').getElementsByTagName('li');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//div[@class='nav_menu']/div/ul/li[" + args.index + "]/a"
	}
});

/* Separate collection page elements */
map.addPageset({
	name: 'collectionPage',
	description: 'describes separate collection Page elements',
	pathRegexp: "/collections.*"
});

map.addElement('collectionPage', {
	name: 'banner',
	description: 'describes Banner at the top of Collections page',
	locator: "css=.collections_wrapper div.banner"
});

map.addElement('collectionPage', {
	name: 'carousel',
	description: 'describes top carousel on separate collection page',
	locator: "id=activate_carousel"
});

map.addElement('collectionPage', {
	name: 'back_to_collections',
	description: 'describes Back to Collections link',
	locator: "css=a.back_to_collections"
});

map.addElement('collectionPage', {
	name: 'visit_your_showroom_section',
	description: 'describes Visit your showroom section on separate collection page',
	locator: "css=.cross_promotion div div.shop_your_showroom a"
});

map.addElement('collectionPage', {
	name: 'shop_with_your_girls_section',
	description: 'describes Shop with your girls section on separate collection page',
	locator: "css=.cross_promotion div div.shop_with_your_girls a"
});

map.addElement('collectionPage', {
	name: 'browse_lookbooks_section',
	description: 'describes Browser lookbooks section',
	locator: "css=.cross_promotion div div.shop_lookbooks"
});

map.addElement('collectionPage', {
	name: 'items_list',
	description: 'describes items list for separate collection',
	locator: "css=#bd div.collections"
});

/* DazzleDeals page elements */
map.addPageset({
	name: 'dazzledealsPage',
	description: 'describes elements common to DazzleDeals Page which is opened from header',
	pathRegexp: "dazzledeals.*"
});

map.addElement('dazzledealsPage', {
	name: 'next_dazzledeal_promo',
	description: 'describes next dazzle deal promo image',
	locator: "id=dd_slides_null_state"
});

map.addElement('dazzledealsPage', {
	name: 'slides',
	description: 'describes dazzledeals slide',
	locator: "css=#dd_dazzle_deal div.dd_slides"
});

// map.addElement('dazzledealsPage', {
// 	name: 'info',
// 	description: 'describes next dazzledeal info',
// 	locator: "css=#dd_dazzle_deal div.dd_states div.dd_info"
// });

map.addElement('dazzledealsPage', {
	name: 'timer',
	description: 'describes timer on DazzleDeals page',
	locator: "id=ddTimer"
});

map.addElement('dazzledealsPage', {
	name: 'soldout',
	description: 'describes Sold out text instead of timer',
	locator: "css=#ddTimer i.expired"
});

map.addElement('dazzledealsPage', {
	name: 'banner', 
	description: 'describes dazzle deals banner if dazzledeals is opened',
	locator: "css=#dd_dazzle_deal div.dd_banner img"
});

map.addElement('dazzledealsPage', {
	name: 'large_image',
	description: 'describes large image of dazzle deal',
	locator: "css=.product_image_wrapper div.product_image_data div#wrap a img"
});

map.addElement('dazzledealsPage', {
	name: 'product_name',
	description: 'describes product name',
	locator: "css=.product_name_wrapper"
});

map.addElement('dazzledealsPage', {
	name: 'product_description',
	description: 'describes Product description',
	locator: "css=.product_description_wrapper"
});

map.addElement('dazzledealsPage', {
	name: 'colors',
	description: 'describes Select color section',
	locator: "css=.colors"
});

map.addElement('dazzledealsPage', {
	name: 'add_to_bag_btn',
	description: 'describes Add to bag button',
	locator: "id=add_product_to_cart_submit_button"
});

map.addElement('dazzledealsPage', {
	name: 'product_recommendation',
	description: 'describes Product recommendation section',
	locator: "css=.product_recommended_by_wrapper"
})

map.addElement('dazzledealsPage', {
	name: 'product_media_bar',
	description: 'describes Product media bar under large image',
	locator: "css=.product_media_bar"
});

map.addElement('dazzledealsPage', {
	name: 'product_image_gallery',
	description: 'describes product image gallery',
	locator: "css=.product_image_gallery_data"
});

map.addElement('dazzledealsPage', {
	name: 'product_media_buttons',
	description: 'describes button under large image',
	locator: "id=product_media_buttons_wrapper"
});

map.addElement('dazzledealsPage', {
	name: 'info',
	description: 'describes Info button under large image',
	locator: "css=.pm_properties a"
});

map.addElement('dazzledealsPage', {
	name: 'comment',
	description: 'describes Comment button under large image',
	locator: "css=.pm_comments a"
});

map.addElement('dazzledealsPage', {
	name: 'recently_viewed_section',
	description: 'describes recently viewed section on DazzleDeals page',
	locator: "id=recently_viewed"
});

map.addElement('dazzledealsPage', {
	name: 'invite_friends_section',
	description: 'describes Invite friends section on DazzleDeals page if there are no recently viewed items',
	locator: "id=invite_friends"
});

map.addElement('dazzledealsPage', {
	name: 'recently_viewed_item',
	description: 'describes item in recently viewed section on DazzleDeals page',
	args: [{
		name: 'index',
		description: 'describes index of item',
		defaultValues: range (1,2)
	}],
	getLocator: function(args){
		return "//div[@id='recently_viewed']/div[2]/div[@class='showroom_sel_cntnr'][" + args.index + "]/div/a";
	}
});

map.addElement('dazzledealsPage', {
	name: 'most_favorites_section',
	description: 'describes most favorites section on DazzleDeals page',
	locator: "id=dd_most_favorited"
});

map.addElement('dazzledealsPage', {
	name: 'most_favorites_item',
	description: 'describes item in most favorites section on DazzleDeals page',
	args: [{
		name: 'index',
		description: 'describes index of item',
		defaultValues: range (1,3)
	}],
	getLocator: function(args){
		return "//div[@id='dd_most_favorited']/div[2]/div[@class='showroom_sel_cntnr'][" + args.index + "]/div/a";
	}
});

map.addElement('dazzledealsPage', {
	name: 'browse_our_lookbooks_section',
	description: 'describes browse our lookbooks section',
	locator: "css=.browse_our_lookbooks"
});

map.addElement('dazzledealsPage', {
	name: 'browse_our_lookbooks_item',
	description: 'describes item on browse our lookbooks section',
	args: [{
		name: 'index',
		description: 'describes index of item in browse our lookbooks section',
		defaultValues: range(1,3)
	}],
	getLocator: function(args){
		return "//div/ul[@id='browse_lookbooks']/li["+args.index+"]/a"
	}
})

/* Product Details page elements */
map.addPageset({
	name: 'pdPage',
	description: 'describes elements common to Product Details page',
	pathRegexp: "products/.*"
});

map.addElement('pdPage', {
	name: 'size_carousel',
	description: 'describes Size carousel',
	locator: "css=.carousel-viewport"
});

map.addElement('pdPage', {
	name: 'default_size',
	description: 'describes default selected size number',
	locator: "css=.default a"
});

map.addElement('pdPage', {
	name: 'unavailable_default_selected', 
	description: 'describes shoe size which is default selected and unavailable',
	locator: "css=li.unavailable.default.selected a"
});

map.addElement('pdPage', {
	name: 'available_size',
	description: 'describes unavailable size of shoe',
	locator: "css=div.carousel-viewport ul.product_variant_choices li[class=''] a"
});

map.addElement('pdPage', {
	name: 'unavailable_color', 
	description: 'describes unavailable color of product',
	locator: "css=a.color-swatch img.unavailable"
});

map.addElement('pdPage', {
	name: 'pd_rv_section',
	description:'describes Recently viewed label on Product Details page', 
	locator: "id=recently_viewed"	
});

map.addElement('pdPage', {
	name: 'pd_recently_viewed_item',
	description: 'describes 1st item in Recently viewed section on Product Details page',
	args: [{
		name: 'index',
		description: 'describes index of item',
		defaultValues: range(1,2)
	}],
	getLocator: function(args){
 		return "//div[@id='recently_viewed']/div[2]/div[@class='showroom_sel_cntnr'][" + args.index + "]/div/a/img";
	}
});

map.addElement('pdPage', {
	name: 'pd_add_to_bag_logged',
	description: 'describes Add to bag button on Product Details page for logged in user',
	locator: "id=add_product_to_cart_submit_button"
});

map.addElement('pdPage', {
	name: 'pd_add_to_bag_logout',
	description: 'describes Add to bag button on Product Details page for logged out user',
	locator: "css=div.cart_actions a.login_modal img"
});

map.addElement('pdPage', {
	name: 'pd_add_to_favorite',
	description: 'describes Add to favorite heart near product name',
	locator: "css=#favorite_state"
});

map.addElement('pdPage', {
	name: 'pd_more_link',
	description: 'describes More link to see full description of product',
	locator: "css=#more_button"
});

map.addElement('pdPage', {
	name: 'pd_description', 
	description: 'describes product description',
	locator: "css=.first_description"
});

map.addElement('pdPage', {
	name: 'pd_more_description',
	description: 'describes additional description to product',
	locator: "css=.more_description"
});

map.addElement('pdPage', {
	name: 'pd_hide_link',
	description: 'describes Hide link to hide additional  description',
	locator: "css=p.more_description a.show_hide_description"
});

map.addElement('pdPage', {
	name: 'pd_add_to_favorite_btn',
	description: 'describes Add to favorites link under Add to bag button',
	locator: "css=.favorite_link_button_title"
});

map.addElement('pdPage', {
	name: 'pd_like_btn', 
	description: 'describes Like button on Product Details page',
	locator: "css=.liketext"
});

map.addElement('pdPage', {
	name: "pd_add_to_waitlist_logged",
	description: 'describes add to waitlist button on Product Details page',
	locator: "css=div#product_waitlist_wrapper img.add_to_wait_list"
});

map.addElement('pdPage', {
	name: 'pd_ymal_section', 
	description: 'describes you might also like section on Product Details page', 
	locator: "id=you_might_also_like"
});

map.addElement('pdPage', {
	name: 'pd_ymal_item',
	description: 'describes 1st item in yaml section on Product details page',
	args: [{
		name: 'index',
		description: 'describes index of item',
		defaultValues: range(1,3)
	}],
	getLocator: function(args){
 		return "//div[@id='you_might_also_like']/div[2]/div[@class='showroom_sel_cntnr'][" + args.index + "]/div/a/img";
	}
});

map.addElement('pdPage', {
	name: "pd_featurettes_section", 
	description: 'describes Browse our featurettes section on Product Details page',
	locator: "css=div.browse_our_featurettes"
});

map.addElement('pdPage', {
	name:'pd_featurettes_item',
	description: 'describes item in Browse our featurettes on Product Details page',
	args: [{
		name: 'index',
		description: 'describes index of item in Browse our featurettes section',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsById('browse_our_featurettes').getElementsByTagName('li');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//ul[@id='browse_featurettes']/li[" + args.index + "]/a/img"
	}
});

map.addElement('pdPage', {
	name: 'join_for_free', 
	description: 'describes Join for free button on Product Details page when user does not login',
	locator: "//div[@id='product_content']/div[2]/a/img"
});

map.addElement('pdPage', {
	name: 'sold_out_image',
	description: 'describes Sold out image on product image',
	locator: "css=img.overlay_top_right.ribbon_image.out_of_stock"
});

/* Casuals page elements */
map.addPageset({
	name: 'casualsPage',
	description: 'describes elements common to Casuals page',
	pathRegexp: "casuals/.*"
});

map.addElement('casualsPage', {
	name: 'personal_casualshoes_select_section',
	description: 'describes shoes items on casuals page',
	locator: "//div[1]/div[@id='showroom_sel_bar_inner']"
});

map.addElement('casualsPage', {
	name: 'featured_casualshoes_section',
	description: 'describes items on featured section on casuals page',
	locator: "//div[2]/div[@id='showroom_sel_bar_inner']"
});

map.addElement('casualsPage', {
	name: 'casuals_item',
	description: 'describes item in Your personal selection section on casuals page',
	args: [{
		name: 'index',
		description: 'describes index of item in Browse our featurettes section',
		getDefaultValues: function(inDocument){
				var container = inDocument.getElementsByClassName('showroom_box').getElementsById('showroom_sel_bar_inner').getElementByClassName('showroom_sel_cntnr');
				var result = [];
				for (var i=0; i <container.length; i++) result.push(i+1);
				return result;
			}
	}],
	getLocator: function(args){
			return "//div[1]/div[@id='showroom_sel_bar_inner']/div[@class='showroom_sel_cntnr'][" + args.index + "]/div/span/a"
	}
});

map.addElement('casualsPage', {
	name: 'casuals_featured_item',
	description: 'describes item in Featured this month section on casuals page',
	args: [{
		name: 'index',
		description: 'describes index of item in Browse our featurettes section',
		getDefaultValues: function(inDocument){
				var container = inDocument.getElementsByClassName('showroom_box').getElementsById('showroom_sel_bar_inner').getElementByClassName('showroom_sel_cntnr');
				var result = [];
				for (var i=0; i <container.length; i++) result.push(i+1);
				return result;
			}
	}],
	getLocator: function(args){
			return "//div[2]/div[@id='showroom_sel_bar_inner']/div[@class='showroom_sel_cntnr'][" + args.index + "]/div/span/a"
	}
});

map.addElement('casualsPage', {
	name: 'casual_footer',
	description: 'describes casuals footer',
	locator: "css=.casual_footer"
});

map.addElement('casualsPage', {
	name: 'casuals_video_link', 
	description: 'describes Video link on Casuals page',
	locator: "css=a.video_casual_chic_link"
});

map.addElement('casualsPage', {
	name: 'casuals_quote_text', 
	description: 'describes text at the left of casuals footer',
	locator: "css=.quote"
});

map.addElement('casualsPage', {
	name: 'casuals_invite_friends_image', 
	description: 'describes invite friends image which is placed at the bottom on Casuals page',
	locator: "css=.sft_invitefriends div.sft_img a"
});

map.addElement('casualsPage', {
	name: 'casuals_invite_friends_link',
	description: 'describes invite friends link which is placed under invite friends image',
	locator: "css=.sft_invitefriends div.sft_hdr a"
});

map.addElement('casualsPage', {
	name: 'casuals_shop_friendshowroom_image',
	description: 'describes Shop friends showroom image which is placed at the bottom on Casuals page',
	locator: "css=.sft_friendsshowrooms div.sft_img a"
});

map.addElement('casualsPage', {
	name: "casuals_shop_friendshowroom_link",
	description: 'describes Shop friends showroom link which is placed under shop friends showroom image',
	locator: "css=.sft_friendsshowrooms div.sft_hdr a"
});

map.addElement('casualsPage', {
	name: 'casuals_earn_points_image', 
	description: 'describes Earn style points image which is placed at the bottom on Casuals page',
	locator: "css=.sft_stylepoints div.sft_img a"
});

map.addElement('casualsPage', {
	name: 'casuals_earn_points_link',
	description: 'describes Earn style points link which is placed under earn style points image',
	locator: "css=.sft_stylepoints div.sft_hdr a"
});

map.addElement('casualsPage', {
	name: 'casuals_shop_giftcards_image',
	description: 'describes shop giftcards image which is placed at the bottom on Casuals page',
	locator: "css=.sft_shopgiftcards div.sft_img a"
});

map.addElement('casualsPage', {
	name: 'casuals_shop_giftcards_link',
	description: 'describes shop giftcards link which is placed under shop giftcards image',
	locator: "css=.sft_shopgiftcards div.sft_hdr a"
});

map.addElement('casualsPage', {
	name: 'casuals_redeem_giftcards',
	description: 'describes redeem giftcards section at the bottom on Casuals page',
	locator: "css=.sft_redeemgiftcards"
});

/* Take-Two page elements */
map.addPageset({
	name: 'taketwoPage',
	description: 'describes elements common to Take two page',
	pathRegexp: "take-two/.*"
});

map.addElement('taketwoPage', {
	name: 'tt_left_featured',
	description: 'describes first todays featured shoe',
	locator: "//div[@id='hd']/div[3]/div/div[2]/div/span[1]/a[1]/img"
});

/* Stylist showroom page elements */
map.addPageset({
	name: 'stylistshowroomPage', 
	description: 'describes all elements common to Stylists showroom page',
	pathRegexp: "thestylists/.*"
});

map.addElement('stylistshowroomPage', {
	name: "stylist_showroom_banner",
	description: 'describes Top banner on stylists showroom page',
	locator: "id=stylist_showroom_banner"
});

map.addElement('stylistshowroomPage', {
	name: 'fb_connect_area',
	description: 'describes FB connect area with fb connect button under banner',
	locator: "css=.fb_connect"
});

map.addElement('stylistshowroomPage', {
	name: 'facebook_connect_btn',
	description: 'describes Facebook connect button on area under banner',
	locator: "css=a.btn_fb_connect"
});

map.addElement('stylistshowroomPage', {
	name: 'stylist_friend_avatar',
	description: 'describes stylist avatar',
	locator: "id=friend_avatar"
});

map.addElement('stylistshowroomPage', {
	name: 'stylists_list',
	description: 'describes stylists list on Stylists showroom page',
	locator: "id=stylists_facepile_small"
});

map.addElement('stylistshowroomPage', {
	name: 'friends_list',
	description: 'describes stylists list on Stylists showroom page',
	locator: "id=facepile_small"
});

map.addElement('stylistshowroomPage', {
	name: 'invite_link',
	description: 'describes Invite link under friends list',
	locator: "css=#shop_friends_links a.fb_invite"
});

map.addElement('stylistshowroomPage', {
	name: 'friends_view_all',
	description: 'describes View All link above friends list on Stylists showroom page',
	locator: "//div[@id='shop_friends_links']/a[2]"
});

map.addElement('stylistshowroomPage', {
	name: "item",
	description: 'describes item on Stylists showroom',
	args: [{
		name: 'index', 
		description: 'describes index of item in Stylist showroom',
		getDefaultValues: function(inDocument){
				var container = inDocument.getElementsById('friend_showroom').getElementsByClassName('showroom_sel_cntnr');
				var result = [];
				for (var i=0; i <container.length; i++) result.push(i+1);
				return result;
		}
	}],
	getLocator: function(args){
			return "//div[@id='friend_showroom']/div[@class='showroom_sel_cntnr'][" + args.index + "]/div[@class='showroom_sel_shoe']/a"
	}
});

map.addElement('stylistshowroomPage', {
	name: "inactive_item",
	description: 'describes disable item on Stylists showroom',
	args: [{
		name: 'index', 
		description: 'describes index of disable item in Stylist showroom',
		getDefaultValues: function(inDocument){
				var container = inDocument.getElementsById('friend_showroom').getElementsByClassName('showroom_sel_cntnr inactive');
				var result = [];
				for (var i=0; i <container.length; i++) result.push(i+1);
				return result;
		}
	}],
	getLocator: function(args){
			return "//div[@id='friend_showroom']/div[@class='showroom_sel_cntnr inactive'][" + args.index + "]/div[@class='showroom_sel_shoe']/a"
	}
});

map.addElement('stylistshowroomPage', {
	name: "item_view_link",
	description: 'describes item on Stylists showroom',
	args: [{
		name: 'index', 
		description: 'describes index of item in Stylist showroom',
		getDefaultValues: function(inDocument){
				var container = inDocument.getElementsById('friend_showroom').getElementsByClassName('showroom_sel_cntnr');
				var result = [];
				for (var i=0; i <container.length; i++) result.push(i+1);
				return result;
		}
	}],
	getLocator: function(args){
			return "//div[@id='friend_showroom']/div[@class='showroom_sel_cntnr'][" + args.index + "]/div[@class='showroom_shoe_links']/a[1]"
	}
});

map.addElement('stylistshowroomPage', {
	name: "item_buy_link",
	description: 'describes item on Stylists showroom',
	args: [{
		name: 'index', 
		description: 'describes index of item in Stylist showroom',
		getDefaultValues: function(inDocument){
				var container = inDocument.getElementsById('friend_showroom').getElementsByClassName('showroom_sel_cntnr');
				var result = [];
				for (var i=0; i <container.length; i++) result.push(i+1);
				return result;
			}
	}],
	getLocator: function(args){
			return "//div[@id='friend_showroom']/div[@class='showroom_sel_cntnr'][" + args.index + "]/div[@class='showroom_shoe_links']/a[2]"
	}
});

map.addElement('stylistshowroomPage', {
	name: "item_comment_link",
	description: 'describes item on Stylists showroom',
	args: [{
		name: 'index', 
		description: 'describes index of item in Stylist showroom',
		getDefaultValues: function(inDocument){
				var container = inDocument.getElementsById('friend_showroom').getElementsByClassName('showroom_sel_cntnr');
				var result = [];
				for (var i=0; i <container.length; i++) result.push(i+1);
				return result;
			}
	}],
	getLocator: function(args){
			return "//div[@id='friend_showroom']/div[@class='showroom_sel_cntnr'][" + args.index + "]/div[@class='showroom_shoe_links']/a[3]"
	}
});

/* Invite page elements */
map.addPageset({
	name: 'invitePage', 
	description: 'describes elements common to invite page for non-logged user',
	pathRegexp: "invite/.*"
});

map.addElement('invitePage', {
	name: 'get_style_showroom',
	description: 'describes get My Style Showroom button on invite page',
	locator: "css=#ul_formContainer_content div a img"
});

/* Friends showroom page elements */
map.addPageset({
	name: 'friendshowroomPage', 
	description: 'describes elements common to friend showroom page',
	pathRegexp: "friends/.*"
});

map.addElement('friendshowroomPage', {
	name: 'avatar',
	description: 'describes Friend avatar image',
	locator: "id=friend_avatar"
});

map.addElement('friendshowroomPage', {
	name: 'shop_with_stylists',
	description: 'describes Shop with Stylists section',
	locator: "id=stylists_facepile_small"
});

map.addElement('friendshowroomPage', {
	name: 'shop_with_friends',
	description: 'describes Shop with friends section',
	locator: "id=facepile_small"
});

map.addElement('friendshowroomPage', {
	name: 'invite',
	description: 'describes Invite link under shop with friends section',
	locator: "css=#shop_friends_links a.fb_invite"
});

map.addElement('friendshowroomPage', {
	name: 'view_all',
	description: 'describes View all link under shop with friends section',
	locator: "//div[@id='shop_friends_links']/a[2]"
})

map.addElement('friendshowroomPage', {
	name: 'pending_showroom', 
	description: 'describes banner on friend showroom which is being created',
	locator: "id=pending_showroom"
});

map.addElement('friendshowroomPage', {
	name: 'items_list',
	description: 'describes List of items in friends showroom',
	locator: "id=friend_showroom"
});

map.addElement('friendshowroomPage', {
	name: "item",
	description: 'describes item on Friends showroom',
	args: [{
		name: 'index', 
		description: 'describes index of item in Friends showroom',
		getDefaultValues: function(inDocument){
				var container = inDocument.getElementsById('friend_showroom').getElementsByTagName('div').getElementsByClassName('showroom_sel_cntnr');
				var result = [];
				for (var i=0; i <container.length; i++) result.push(i+1);
				return result;
		}
	}],
	getLocator: function(args){
			return "//div[@id='friend_showroom']/div/div[@class='showroom_sel_cntnr'][" + args.index + "]/div[@class='showroom_sel_shoe']/a"
	}
});

map.addElement('friendshowroomPage', {
	name: "item_view_link",
	description: 'describes item on Friends showroom',
	args: [{
		name: 'index', 
		description: 'describes index of item in Friends showroom',
		getDefaultValues: function(inDocument){
				var container = inDocument.getElementsById('friend_showroom').getElementsByTagName('div').getElementsByClassName('showroom_sel_cntnr');
				var result = [];
				for (var i=0; i <container.length; i++) result.push(i+1);
				return result;
		}
	}],
	getLocator: function(args){
			return "//div[@id='friend_showroom']/div/div[@class='showroom_sel_cntnr'][" + args.index + "]/div[@class='showroom_shoe_links']/a[1]"
	}
});

map.addElement('friendshowroomPage', {
	name: "item_buy_link",
	description: 'describes item on Friends showroom',
	args: [{
		name: 'index', 
		description: 'describes index of item in Friends showroom',
		getDefaultValues: function(inDocument){
				var container = inDocument.getElementsById('friend_showroom').getElementsByTagName('div').getElementsByClassName('showroom_sel_cntnr');
				var result = [];
				for (var i=0; i <container.length; i++) result.push(i+1);
				return result;
			}
	}],
	getLocator: function(args){
			return "//div[@id='friend_showroom']/div/div[@class='showroom_sel_cntnr'][" + args.index + "]/div[@class='showroom_shoe_links']/a[2]"
	}
});

map.addElement('friendshowroomPage', {
	name: "item_comment_link",
	description: 'describes item on Friends showroom',
	args: [{
		name: 'index', 
		description: 'describes index of item in Friends showroom',
		getDefaultValues: function(inDocument){
				var container = inDocument.getElementsById('friend_showroom').getElementsByTagName('div').getElementsByClassName('showroom_sel_cntnr');
				var result = [];
				for (var i=0; i <container.length; i++) result.push(i+1);
				return result;
			}
	}],
	getLocator: function(args){
			return "//div[@id='friend_showroom']/div/div[@class='showroom_sel_cntnr'][" + args.index + "]/div[@class='showroom_shoe_links']/a[3]"
	}
});

/* Admin pages elements */
map.addPageset({
	name: 'adminPages', 
	description: 'describes elements common to admin pages',
	pathRegexp: "admin/.*"
});

map.addElement('adminPages', {
	name: 'h_overview', 
	description: 'describes Overview link in top menu', 
	locator: "link=Overview"
});

map.addElement('adminPages', {
	name: 'h_members',
	description: 'describes Members tab at the top',
	locator: "link=Members"
});

map.addElement('adminPages', {
	name: 'h_orders', 
	description: 'describes Order link in top menu', 
	locator: "link=Orders"
});

map.addElement('adminPages', {
	name: 'h_giftorders', 
	description: 'describes Gift Orders link in top menu',
	locator: "link=Gift Orders"
});

map.addElement('adminPages', {
	name: 'h_products', 
	description: 'describes Products link in top menu', 
	locator: "link=Products"
});

map.addElement('adminPages', {
	name: 'h_fulfillment', 
	description: 'describes Fullfilment link in top menu',
	locator: "link=Fulfillment"
})

map.addElement('adminPages', {
	name: 'h_logout',
	description: 'describes Logout link',
	locator: "//ul[@id='login-nav']/li[3]/a"
});

map.addElement('adminPages', {
	name: 'loading',
	description: 'describes Loading text',
	locator: "id=progress"
})

/* Members page elements */
map.addPageset({
	name: 'membersPage',
	description: 'describes elements common to Members page',
	pathRegexp: "admin/subscriptions.*"
});

map.addElement('membersPage', {
	name: 'member_details_link',
	description: 'describes Member Details link',
	locator: "css=ul.sidebar li a"
});

map.addElement('membersPage', {
	name: 'account_history_link',
	description: 'describes Account History link at the right',
	locator: "//li/a[contains(@href,'account_history')]"
});

map.addElement('membersPage', {
	name: 'address_history_link',
	description: 'describes Address History link at the right',
	locator: "//li/a[contains(@href,'address_history')]"
});

map.addElement('membersPage', {
	name: 'credit_card_history_link',
	description: 'describes Credit card history link',
	locator: "//li/a[contains(@href,'cc_history')]"
})

map.addElement('membersPage', {
	name: 'order_history_link',
	description: 'describes Order History link at the right',
	locator: "link=Order History"
});

map.addElement('membersPage', {
	name: 'showroom_history_link', 
	description: 'describes Showroom History link at the right',
	locator: "//li/a[contains(@href,'showrooms')]"
});

map.addElement('membersPage', {
	name: 'loyalty_points_link',
	description: 'describes Loyalty points link',
	locator: "//li/a[contains(@href,'loyalty_points')]"
});

map.addElement('membersPage', {
	name: 'comments_link', 
	description: 'describes Comments link at the right',
	locator: "//li/a[contains(@href,'comments')]"
});

map.addElement('membersPage', {
	name: 'likes_link',
	description: 'describes Likes link at the right',
	locator: "//li/a[contains(@href,'likes')]"
});

map.addElement('membersPage', {
	name: 'popup',
	description: 'describes popup which opens after pressing phone number on Member Details',
	locator: "id=generic_popup_dialog"
});

map.addElement('membersPage', {
	name: 'popup_firstname',
	description: 'describes Firstname field on Change Address Info popup',
	locator: "id=address_firstname"
});

map.addElement('membersPage', {
	name: 'popup_lastname',
	description: 'describes Lastname field on Change Address Info popup',
	locator: "id=address_lastname"
});

map.addElement('membersPage', {
	name: 'popup_address1',
	description: 'describes Address1 field on Change Address Info popup',
	locator: "id=address_address1"
});

map.addElement('membersPage', {
	name: 'popup_address2',
	description: 'describes Address2 field on Change Address Info popup',
	locator: "id=address_address2"
});

map.addElement('membersPage', {
	name: 'popup_city',
	description: 'describes City field on Change Address Info popup',
	locator: "id=address_city"
});

map.addElement('membersPage', {
	name: 'popup_state',
	description: 'describes State drop down on Change Address Info popup',
	locator: "id=address_state_id"
});

map.addElement('membersPage', {
	name: 'popup_zip',
	description: 'describes Zip field on Change Address Info popup',
	locator: "id=address_zipcode"
});

map.addElement('membersPage', {
	name: 'popup_phone',
	description: 'describes Phone phone on Change Address Info popup',
	locator: "id=address_phone"
});

map.addElement('membersPage', {
	name: 'popup_save',
	description: 'describes Save button on Change Address Info popup',
	locator: "id=submit_address"
});

map.addElement('membersPage', {
	name: 'popup_cancel',
	description: 'describes Cancel on Change Address Info popup',
	locator: "css=.button.second_button a"
});

map.addElement('membersPage', {
	name: 'popup_close',
	description: 'describes Cross button on Change Address Info popup',
	locator: "css=a.ui-dialog-titlebar-close span.ui-icon"
})

map.addElement('membersPage', {
	name: 'email',
	description: 'describes email field on Members page ',
	locator: "id=search_user_email_begins_with"
});

map.addElement('membersPage', {
	name: 'search_btn',
	description: 'describes Search button on Members page',
	locator: "css=p button[type=submit]"
});

map.addElement('membersPage', {
	name: 'member_id_link',
	description: 'describes Member id link',
	locator: "id=display_sku_0"
});

map.addElement('membersPage', {
	name: 'update_info', 
	description: 'describes Update Info link in opened page of user details',
	locator: "css=.adr h3 span a"
});

map.addElement('membersPage', {
	name: 'phone_link',
	description: 'describes Phone link on opened user details page',
	locator: "//table[@class='index']/tbody/tr[5]/td/a"
});

map.addElement('membersPage', {
	name: 'account_status_link',
	description: 'describes Account Status link on Member details page',
	locator: "id=account_status_word"
});

map.addElement('membersPage', {
	name: 'edit_status_popup',
	description: 'describes Edit account status popup',
	locator: "id=edit_account_status_dialog"
});

map.addElement('membersPage', {
	name: 'status', 
	description: 'describes Account Status drop down field on Change Status popup',
	locator: "id=subscription_account_status_id"
});

map.addElement('membersPage', {
	name: 'save_status', 
	description: 'describes Save button on Change Status popup',
	locator: "id=submit_account_status"
});

map.addElement('membersPage', {
	name: 'cancel_status',
	description: 'describes Cancel button on Change Status popup',
	locator: "css=.button.second_button a"
});

map.addElement('membersPage', {
	name: 'credits_link',
	description: 'describes Credits link ',
	locator: "//tr[12]/td[2]/a"
});

map.addElement('membersPage', {
	name: 'current_coupon_code',
	description: 'describes Current Coupon Code value',
	locator: "//table[@class='index']/tbody/tr[13]/td[2]"
});

map.addElement('membersPage', {
	name: 'current_discount_text',
	description: 'describes Current Discount text',
	locator: "id=coupon_code"
});

map.addElement('membersPage', {
	name: 'discount_20',
	description: 'describes button to set on/off 20 per cent discount',
	locator: "css=#coupon_20_code span a"
});

map.addElement('membersPage', {
	name: 'discount_50',
	description: 'describes button to set on/off 50 per cent discount',
	locator: "css=#coupon_50_code span a"
});

map.addElement('membersPage', {
	name: 'discount_100',
	description: 'describes button to set on/off 100 per cent discount',
	locator: "css=#coupon_100_code span a"
});

map.addElement('membersPage', {
	name: 'billing_phone_link',
	description: 'describes first Phone link in Payment method section',
	locator: "css=.adr table.index tbody tr td div a"
});

map.addElement('membersPage', {
	name: 'add_cc_link', 
	description: 'describes Add CC link in Billing and Shipping info', 
	locator: "//div[@class='adr'][2]/h3/span/a"
});

map.addElement('membersPage', {
	name: 'add_address_link', 
	description: 'describes Add address link in Billing/Shipping info page',
	locator: "//div[@class='adr'][2]/h3/span/a[2]"
});

map.addElement('membersPage', {
	name: 'edit_cc',
	description: 'describes Edit credit card link',
	locator: "//div[@class='adr'][2]/table/tbody/tr/td/div[contains(@style,'margin-bottom')]/a"
});

map.addElement('membersPage', {
	name: 'remove_cc',
	description: 'describes Remove link',
	locator: "//div[@class='adr'][2]/table/tbody/tr/td/div/a[2]"
});

map.addElement('membersPage', {
	name: 'edit_address',
	description: 'describes Edit address link',
	locator: "//div[@class='adr'][2]/table/tbody/tr/td[2]/div[contains(@style,'margin-bottom')]/a"
});

map.addElement('membersPage', {
	name: 'remove_address',
	description: 'describes Remove address link',
	locator: "//div[@class='adr'][2]/table/tbody/tr/td[2]/div/a[2]"
});

map.addElement('membersPage', {
	name: 'update_preferences', 
	description: 'describes Update Preferences link',
	locator: "//div[@id='content']/table/tbody/tr/td[2]/div[@class='adr']/h3/span/a"
});

map.addElement('membersPage', {
	name: 'add_account_note',
	description: 'describes Add account note link',
	locator: "//div[@id='content']/table/tbody/tr/td[2]/div[@class='adr'][2]/h3/span/a"
});

/* Member Details page elements */
map.addPageset({
	name: 'member_detailsPage', 
	description: 'describes Member Details page elements',
	pathRegexp: "admin/members/subscriptions.*/edit"
})
map.addElement('member_detailsPage', {
	name: 'firstname',
	description: 'describes Member Firstname field on Update Info page',
	locator: "id=user_subscription_attributes_first_name"
});

map.addElement('member_detailsPage', {
	name: 'lastname',
	description: 'describes Member Lastname field on Update Info page',
	locator: "id=user_subscription_attributes_last_name"
});

map.addElement('member_detailsPage', {
	name: 'email',
	description: 'describes Email field on Update Info page',
	locator: "id=user_email"
});

map.addElement('member_detailsPage', {
	name: 'save',
	description: 'describes Save changes button on Update Info page',
	locator: "css=#content form input[type=submit]"
});

map.addElement('member_detailsPage', {
	name: 'back',
	description: 'describes Back button on Update Info page',
	locator: "css=#content div.button a"
});

map.addElement('membersPage', {
	name: 'member_details',
	description: 'describes Member Details link',
	locator: "//div[@id='sidebar']/ul[@class='sidebar']/li/a"
});

map.addElement('membersPage', {
	name: 'store_credit_history',
	description: 'describes Store Credit History link',
	locator: "//div[@id='sidebar']/ul[@class='sidebar']/li[8]/a"
});

/* admin Order History page elements */
map.addPageset({
	name: 'admin_orderhistoryPage',
	description: 'describes Order History page elements in admin',
	pathRegexp: "admin/subscriptions.*orders"
});

map.addElement('admin_orderhistoryPage',{
	name: 'new_order',
	description: 'describes New order button',
	locator: "css=a.button span img"
});

/* Showroom History page elements */
map.addPageset({
	name: 'showroom_historyPage', 
	description: 'describes Showroom History page elements',
	pathRegexp: "admin/subscriptions.*showrooms"
});

map.addElement('showroom_historyPage', {
	name: 'edit_showroom',
	description: 'describes Edit Showroom link',
	locator: "//div[@id='content']/div/a"
});

map.addElement('showroom_historyPage', {
	name: 'place_order',
	description: 'describes Place order link',
	locator: "//div[@id='content']/div/a[2]"
});

map.addElement('showroom_historyPage', {
	name: 'submit_alternate_request',
	description: 'describes Submit Alternate request link',
	locator: "//div[@id='content']/div/a[3]"
});

map.addElement('showroom_historyPage', {
	name: 'alternate_request_popup',
	description: 'describes Alternate request popup',
	locator: "id=alternate_request"
});

map.addElement('showroom_historyPage', {
	name: 'cancel_request',
	description: 'describes Cancel Shoe Request button on Alternate request popup',
	locator: "css=#alternate_request form a"
});

map.addElement('showroom_historyPage', {
	name: 'submit',
	description: 'describes Send Me 5 New Shoes button',
	locator: "css=#alternate_request form input[type=submit]"
});

map.addElement('showroom_historyPage', {
	name: 'comments',
	description: 'describes Comments field on Alternate request popup',
	locator: "css=#alternate_request ol li textarea"
});

map.addElement('showroom_historyPage', {
	name: 'question1',
	description: 'describes answer to question 1 on Alternate request popup',
	args: [{
		name: 'index',
		description: 'describes number of answer',
		defaultValues: range(1,3)
	}],
	getLocator: function(args){
 		return "//div[@id='alternate_request']/form/ol/li/input[@name='style_options[]'][" + args.index + "]";
	}
});

map.addElement('showroom_historyPage', {
	name: 'question2',
	description: 'describes answer to question 2 on Alternate request popup',
	args: [{
		name: 'index',
		description: 'describes number of answer',
		defaultValues: range(1,3)
	}],
	getLocator: function(args){
 		return "//div[@id='alternate_request']/form/ol/li[2]/input[@name='style_options[]'][" + args.index + "]";
	}
});

map.addElement('showroom_historyPage', {
	name: 'question3',
	description: 'describes answer to question 3 on Alternate request popup',
	args: [{
		name: 'index',
		description: 'describes number of answer',
		defaultValues: range(1,5)
	}],
	getLocator: function(args){
 		return "//div[@id='alternate_request']/form/ol/li[3]/input[@name='style_options[]'][" + args.index + "]";
	}
});

map.addElement('showroom_historyPage', {
	name: 'question4',
	description: 'describes answer to question 4 on Alternate request popup',
	args: [{
		name: 'index',
		description: 'describes number of answer',
		defaultValues: range(1,3)
	}],
	getLocator: function(args){
 		return "//div[@id='alternate_request']/form/ol/li[4]/input[@name='style_options[]'][" + args.index + "]";
	}
});

map.addElement('showroom_historyPage', {
	name: 'confirm_request',
	description: 'describes popup with Alternate shoe requests have been submitted for the user. text',
	locator: "id=ajax_response"
});

map.addElement('showroom_historyPage', {
	name: 'close_confirm_request',
	description: 'describes close button on popup with Alternate shoe requests have been submitted for the user. text',
	locator: "//body[@class='yui-skin-sam admin']/div[4]/div/a/span[@class='ui-icon ui-icon-closethick']"
});

/* Edit showroom page elements */
map.addPageset({
	name: 'edit_showroomPage', 
	description: 'describes Edit showroom page elements',
	pathRegexp: "admin/subscriptions.*showrooms.*edit"
});

map.addElement('edit_showroomPage', {
	name: 'shoes_tab',
	description: 'describes Shoes tab',
	locator: "css=a[title='admin_showroom_shoes_tab']"
});

map.addElement('edit_showroomPage', {
	name: 'handbags_tab',
	description: 'describes Handbags tab',
	locator: "css=a[title='admin_showroom_bags_tab']"
});

map.addElement('edit_showroomPage', {
	name: 'accessories_tab',
	description: 'describes Accessories tab',
	locator: "css=a[title='admin_showroom_accessories_tab']"
});

/*New/Edit Credit card data page elements */
map.addPageset({
	name: 'admin_creditcardsPage', 
	description: 'describes New/Edit Credit Card page ',
	pathRegexp: "admin/subscriptions.*creditcards.*(new|edit)"
});

map.addElement('admin_creditcardsPage', {
	name: 'nickname', 
	description: 'describes Card Nickname field', 
	locator: "id=creditcard_card_name"
});

map.addElement('admin_creditcardsPage', {
	name: 'type',
	description: 'describes Type drop down field',
	locator: "id=creditcard_cc_type"
})

map.addElement('admin_creditcardsPage', {
	name: 'firstname', 
	description: 'describes First name field',
	locator: "id=creditcard_first_name"
});

map.addElement('admin_creditcardsPage', {
	name: 'lastname',
	description: 'describes Lastname field',
	locator: "id=creditcard_last_name"
});

map.addElement('admin_creditcardsPage', {
	name: 'card_number',
	description: 'describes Card Number field',
	locator: "id=creditcard_cc_number"
});

map.addElement('admin_creditcardsPage', {
	name: 'expiration_month',
	description: 'describes Expiration month drop down field',
	locator: "id=creditcard_month"
});

map.addElement('admin_creditcardsPage', {
	name: 'expiration_year',
	description: 'describes Expiration year drop down field',
	locator: "id=creditcard_year"
});

map.addElement('admin_creditcardsPage', {
	name: 'cvv',
	description: 'describes CVV field',
	locator: "id=creditcard_verification_value"
});

map.addElement('admin_creditcardsPage', {
	name: 'billing_firstname',
	description: 'describes Firstname field on Billing section',
	locator: "id=creditcard_address_attributes_firstname"
});

map.addElement('admin_creditcardsPage', {
	name: 'billing_lastname',
	description: 'describes Lastname field on Billing section',
	locator: "id=creditcard_address_attributes_lastname"
});

map.addElement('admin_creditcardsPage', {
	name: 'billing_address1',
	description: 'describes Address Line1 field on Billing section',
	locator: "id=creditcard_address_attributes_address1"
});

map.addElement('admin_creditcardsPage', {
	name: 'billing_address2',
	description: 'describes Address Line2 field on Billing section',
	locator: "id=creditcard_address_attributes_address2"
});

map.addElement('admin_creditcardsPage', {
	name: 'billing_city',
	description: 'describes City field on Billing section',
	locator: "id=creditcard_address_attributes_city"
});

map.addElement('admin_creditcardsPage', {
	name: 'billing_state',
	description: 'describes State field on Billing section',
	locator: "id=creditcard_address_attributes_state_id"
});

map.addElement('admin_creditcardsPage', {
	name: 'billing_zipcode',
	description: 'describes Zipcode field on Billing section',
	locator: "id=creditcard_address_attributes_zipcode"
});

map.addElement('admin_creditcardsPage', {
	name: 'billing_country',
	description: 'describes Country field on Billing section',
	locator: "id=creditcard_address_attributes_country_id"
});

map.addElement('admin_creditcardsPage', {
	name: 'billing_phone',
	description: 'describes Phone field on Billing section',
	locator: "id=creditcard_address_attributes_phone"
});

map.addElement('admin_creditcardsPage', {
	name: 'billing_set_as_default',
	description: 'describes Set as default Credit card on Billing section',
	locator: "id=is_default"
});

map.addElement('admin_creditcardsPage', {
	name: 'update_creditcard',
	description: 'describes Update Credit card button on Billing section',
	locator: "css=button[type=submit] span"
});

map.addElement('admin_creditcardsPage', {
	name: 'cancel',
	description: 'describes Cancel button on Billing section',
	locator: "css=#new_creditcard a"
});

/* Add/Edit shipping address page elements */
map.addPageset({
	name: 'admin_shippingPage',
	description: 'describes Add/Edit Shipping address page elements ',
	pathRegexp: "admin/subscriptions.*(new|edit)_address.*"
});

map.addElement('admin_shippingPage', {
	name: 'nickname', 
	description: 'describes Card Nickname field', 
	locator: "id=address_address_name"
});

map.addElement('admin_shippingPage', {
	name: 'firstname',
	description: 'describes Firstname field on Shipping section',
	locator: "id=address_firstname"
});

map.addElement('admin_shippingPage', {
	name: 'lastname',
	description: 'describes Lastname field on Shipping section',
	locator: "id=address_lastname"
});

map.addElement('admin_shippingPage', {
	name: 'address1',
	description: 'describes Address Line1 field on Shipping section',
	locator: "id=address_address1"
});

map.addElement('admin_shippingPage', {
	name: 'address2',
	description: 'describes Address Line2 field on Shipping section',
	locator: "id=address_address2"
});

map.addElement('admin_shippingPage', {
	name: 'city',
	description: 'describes City field on Shipping section',
	locator: "id=address_city"
});

map.addElement('admin_shippingPage', {
	name: 'state',
	description: 'describes State field on Shipping section',
	locator: "id=address_state_id"
});

map.addElement('admin_shippingPage', {
	name: 'zipcode',
	description: 'describes Zipcode field on Shipping section',
	locator: "id=address_zipcode"
});

map.addElement('admin_shippingPage', {
	name: 'country',
	description: 'describes Country field on Shipping section',
	locator: "id=address_country_id"
});

map.addElement('admin_shippingPage', {
	name: 'phone',
	description: 'describes Phone field on Shipping section',
	locator: "id=address_phone"
});

map.addElement('admin_shippingPage', {
	name: 'set_as_default',
	description: 'describes Set as default on Shipping section',
	locator: "id=is_default"
});

map.addElement('admin_shippingPage', {
	name: 'update',
	description: 'describes Add/Update button on Shipping section',
	locator: "css=button[type=submit] span"
});

map.addElement('admin_shippingPage', {
	name: 'cancel',
	description: 'describes Cancel button on New/Edit Shipping section',
	locator: "css=#new_address a"
});

/* Update Preferences page elements */
map.addPageset({
	name: 'preferencesPage', 
	description: 'describes elements common to Update Preferences page',
	pathRegexp: "admin/members/subscriptions.*preferences/edit"
});

map.addElement('preferencesPage', {
	name: 'birthday',
	description: 'describes Birthday field',
	locator: 'id=subscription_birthdate'
});

map.addElement('preferencesPage', {
	name: 'shoe_size', 
	description: 'describes Shoe size drop down',
	locator: "id=subscription_user_attributes_user_fashion_preference_attributes_shoe_size"
});

map.addElement('preferencesPage', {
	name: 'profile_code',
	description: 'describes Profile Code drop down',
	locator: "id=subscription_user_attributes_user_fashion_preference_attributes_reset_fashion_profile_code"
});

map.addElement('preferencesPage', {
	name: 'save',
	description: 'describes Save changes button',
	locator: "css=#submit_user input[type=submit]"
});

map.addElement('preferencesPage', {
	name: 'back', 
	description: 'describes Back button',
	locator: "css=.button a"
});

map.addElement('preferencesPage', {
	name: 'dazzledeals',
	description: 'describes switch on/off near DazzleDeals ',
	locator: "css=#communication_8 a img"
});

map.addElement('preferencesPage', {
	name: 'invite_friends_rewards',
	description: 'describes switch on/off near Invite Friends Rewards ',
	locator: "css=#communication_5 a img"
});

map.addElement('preferencesPage', {
	name: 'showroom_alerts',
	description: 'describes switch on/off near Showroom Alerts ',
	locator: "css=#communication_10 a img"
});

map.addElement('preferencesPage', {
	name: 'stylist_picks_tips',
	description: 'describes switch on/off near Stylist Picks & Tips ',
	locator: "css=#communication_7 a img"
});

map.addElement('preferencesPage', {
	name: 'style_points',
	description: 'describes switch on/off near Style Points ',
	locator: "css=#communication_12 a img"
});

map.addElement('preferencesPage', {
	name: 'style_pulse_newsletter',
	description: 'describes switch on/off near StylePulse Newsletter ',
	locator: "css=#communication_6 a img"
});

map.addElement('preferencesPage', {
	name: 'surveys',
	description: 'describes switch on/off near Surveys ',
	locator: "css=#communication_9 a img"
});

/* Loyalty points page elements */
map.addPageset({
	name: 'loyalty_pointsPage',
	description: 'describes Loyalty points page elements',
	pathRegexp: "admin/subscriptions.*loyalty_points"
});

map.addElement('loyalty_pointsPage', {
	name: 'points',
	description: 'describes Points field',
	locator: "id=points"
});

map.addElement('loyalty_pointsPage', {
	name: 'comment',
	description: 'describes Comments field',
	locator: "id=comments"
});

map.addElement('loyalty_pointsPage', {
	name: 'update', 
	description: 'describes Update button',
	locator: "css=input[type=submit]"
});

/* Comments page elements */
map.addPageset({
	name: 'commentsPage', 
	description: 'describes Comments page elements',
	pathRegexp: "admin/subscriptions.*comments"
});

map.addElement('commentsPage', {
	name: 'type',
	description: 'describes Type drop down', 
	locator: "id=comment_comment_type_id"
});

map.addElement('commentsPage', {
	name: 'is_issue',
	description: 'describes IsIssue checkbox',
	locator: "id=comment_is_issue"
});

map.addElement('commentsPage', {
	name: 'comment_text', 
	description: 'describes Comment textfield',
	locator: "id=comment_comment"
});

map.addElement('commentsPage', {
	name: 'add_comment', 
	description: 'describes Add comment button',
	locator: "css=button[type=submit]"
});

map.addElement('commentsPage', {
	name: 'edit_link',
	description: 'describes Edit link',
	locator: "css=#comment_list tbody tr td a"
});

/* Edit Comments page elements */
map.addPageset({
	name: 'edit_commentsPage', 
	description: 'describes Comments page elements',
	pathRegexp: "admin/comments.*edit"
});

map.addElement('edit_commentsPage', {
	name: 'type',
	description: 'describes Type drop down', 
	locator: "id=comment_comment_type_id"
});

map.addElement('edit_commentsPage', {
	name: 'status',
	description: 'describes Status drop down',
	locator: "id=comment_status"
});

map.addElement('edit_commentsPage', {
	name: 'comment_text', 
	description: 'describes Comment textfield',
	locator: "id=comment_comment"
});

map.addElement('edit_commentsPage', {
	name: 'edit_comment', 
	description: 'describes Add comment button',
	locator: "css=button[type=submit]"
});

/* Store credit history page elements */
map.addPageset({
	name: 'store_creditsPage',
	description: 'describes elements common to Store credit history page',
	pathRegexp: "admin.*storecredits"
});

map.addElement('store_creditsPage', {
	name: 'new_btn',
	description: 'describes New button',
	locator: "css=#content div.button a"
});

map.addElement('store_creditsPage', {
	name: 'back_btn',
	description: 'describes Back button',
	locator: "//div[@id='content']/div[@class='button']/a"
});

map.addElement('store_creditsPage', {
	name: 'store_creadits_list', 
	description: 'describes list of store credits',
	locator: "id=subscribers_credits"
});

map.addElement('store_creditsPage', {
	name: 'name_link',
	description: 'describes name link on list of comments',
	locator: "css=.green_row_ plain_ td a"
});

map.addElement('store_creditsPage', {
	name: 'edit_link',
	description: 'describes name link on list of comments',
	locator: "//tr[@class='green_row_ plain_']/td[6]/a"
});

/* Store credit new page elements */
map.addPageset({
	name: 'new_store_creditsPage',
	description: 'describes Store Credits new page',
	pathRegexp: "admin/.*storecredits/new"
});

map.addElement('new_store_creditsPage', {
	name: 'type',
	description: 'describes Type drop down',
	locator: "id=storecredit_storecredit_type_id"
});

map.addElement('new_store_creditsPage', {
	name: 'comment',
	description: 'describes Comment field',
	locator: "id=storecredit_note"
});

map.addElement('new_store_creditsPage', {
	name: 'add_btn',
	description: 'describes Add button',
	locator: "css=.button input[value='Add']"
});

map.addElement('new_store_creditsPage', {
	name: 'back_btn',
	description: 'describes Back button',
	locator: "css=.button a"
});

/* edit Store Credit page elements */
map.addPageset({
	name: 'edit_storecreditPage',
	description: 'describes edit store credits page elements',
	pathRegexp: "admin/members/subscriptions.*storecredits.*edit"
});

map.addElement('edit_storecreditPage', {
	name: 'reason',
	description: 'describes Reason drop down field',
	locator: "id=storecredit_storecredit_usage_type_id"
});

map.addElement('edit_storecreditPage', {
	name: 'comment',
	description: 'describes Comment field',
	locator: "id=storecredit_note"
});

map.addElement('edit_storecreditPage', {
	name: 'update',
	description: 'describes Update button', 
	locator: "css=.button input[type=submit]"
});

map.addElement('edit_storecreditPage', {
	name: 'back',
	description: 'describes Back button',
	locator: "css=.button a"
});

/* Admin Orders page elements */
map.addPageset( {
	name: 'admin_ordersPage',
	description: 'describes all elements common to Orders page in admin part', 
	pathRegexp: "admin/orders.*"
});

map.addElement('admin_ordersPage', {
	name: 'email', 
	description: 'describes Email field at the right', 
	locator: "id=search_checkout_email_begins_with"
});

map.addElement('admin_ordersPage', {
	name: 'search_btn', 
	description: 'describes Search button at the right', 
	locator: "css=#sidebar div.box form p button[type=submit]"
});

map.addElement('admin_ordersPage', {
	name: 'edit', 
	description: 'describes Edit link near line item', 
	args: [{
		name: 'index', 
		description: 'describes index of item in orders list',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsByTagName('table').getElementsByTagName('tbody').getElementsByTagName('tr');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//table[@class='index']/tbody/tr[" + args.index + "]/td/a[@class='icon_link']/img"
	} 
});

map.addElement('admin_ordersPage', {
	name: 'member_details_link', 
	description: 'describes Member Details link at the right',
	locator: "//ul[@class='sidebar']/li/a[contains(@href,'admin/subscriptions')]"
})
map.addElement('admin_ordersPage', {
	name: 'shipments', 
	description: 'describe Shipments link at the right bar', 
	locator: "//ul[@class='sidebar']/li[8]/a"
});

/* Customer Details page elements */
map.addPageset({
	name: 'customer_detailsPage',
	description: 'describes Customer Details page elements',
	pathRegexp: "admin/orders.*checkout/edit.*"
});

map.addElement('customer_detailsPage', {
	name: 'continue',
	description: 'describes Continue button',
	locator: "css=.form-buttons button[type=submit]"
});

/* Shipments page elements*/
map.addPageset({
	name: 'shipmentsPage', 
	description: 'describes elements common to Shipments page', 
	pathRegexp: "admin/orders.*shipments"
});

map.addElement('shipmentsPage', {
	name: 'edit',
	description: 'describes Edit link', 
	locator: "css=#content table tbody tr td.actions a.icon_link"
});

/* Edit shipment page elements */
map.addPageset({
	name: 'edit_shipmentsPage', 
	description: 'describes elements common to Edit Shipments page', 
	pathRegexp: "admin/orders.*shipments.*edit"
});

map.addElement('edit_shipmentsPage', {
	name: 'ship', 
	description: 'describes Ship button', 
	locator: "css=#content ul.actions li a.button"
});

map.addElement('edit_shipmentsPage', {
	name: 'state', 
	description: 'describes Shipping state', 
	locator: "//form/table[3]/tbody/tr[3]/td[2]"
});

/* Gift Card order page elements */
map.addPageset({
	name: 'admin_orders_giftcardPage', 
	description: 'describes Gift cards details page elements', 
	pathRegexp: "admin/orders.*gift_card"
});

map.addElement('admin_orders_giftcardPage', {
	name: 'giftcard_info', 
	description: 'describes Gift Card data', 
	locator: "//div[@id='content']/div[@class='adr'][3]/p"
});

/* GiftOrders page elements */
map.addPageset({
	name: 'giftordersPage', 
	description: 'describes elements common to GiftOrders page ',
	pathRegexp: "admin/gift_card_orders.*"
});

map.addElement('giftordersPage', {
	name: 'recipient_name', 
	description: 'describes Recipient name field on GiftOrders page', 
	locator: "id=search_checkout_gift_card_order_detail_find_by_full_name"
});

map.addElement('giftordersPage', {
	name: 'order_number', 
	description: 'describes Order Number field on GiftOrders page', 
	locator: "id=search_number"
});

map.addElement('giftordersPage', {
	name: 'sender_email', 
	description: 'describes Sender email field on GiftOrders page', 
	locator: "id=search_checkout_find_by_sender_email"
});

map.addElement('giftordersPage', {
	name: 'recipient_email',
	description: 'describes Recipient email field on GiftOrders page', 
	locator: "id=search_checkout_gift_card_order_detail_find_by_recipient_email"
});

map.addElement('giftordersPage', {
	name: 'order_status', 
	description: 'describes Order status drop down on GiftOrders page', 
	locator: "id=search_state_equals"
});

map.addElement('giftordersPage', {
	name: 'package', 
	description: 'describes Package drop down field on GiftOrders page', 
	locator: "id=search_by_option_value_name"
});

map.addElement('giftordersPage', {
	name: 'type',
	description: 'describes Type of giftcard drop down field on GiftOrders page', 
	locator: "id=search_checkout_gift_card_order_detail_ship_by_equals"
});

map.addElement('giftordersPage', {
	name: 'awaiting_assignment', 
	description: 'describes Awaiting assignment checkbox on GiftOrders page', 
	locator: "id=search_without_gift_card_assigned"
});

map.addElement('giftordersPage', {
	name: 'search_btn',
	description: 'describes Search button on GiftOrders page', 
	locator: "css=#sidebar div.box form p button[type=submit]"
});

map.addElement('giftordersPage', {
	name: 'ordernumber_link', 
	description: 'describes Order number link ',
	locator: "css=tr.gift_card_order td a"
});

/*Fulfillments page elements */
map.addPageset({
	name: 'fulfillmentsPage', 
	description: 'desribes fulfillments page elements', 
	pathRegexp: "admin/fulfillments.*"
});

map.addElement('fulfillmentsPage', {
	name: 'scan_shipments', 
	description: 'describes Scan Shipments link at the right menu', 
	locator: "//ul[@class='sidebar']/li/a"
});

map.addElement('fulfillmentsPage', {
	name: 'past_pick_waves', 
	description: 'describes Past Pick Waves link at the right menu', 
	locator: "//ul[@class='sidebar']/li[2]/a"
});

map.addElement('fulfillmentsPage', {
	name: 'backordered_product', 
	description: 'describes Backordered Product link at the right menu', 
	locator: "//ul[@class='sidebar']/li[3]/a"
});

/* Scan Shipments page element */
map.addPageset({
	name: 'scan_shipmentsPage', 
	description: 'describes Scan Shipments page elements', 
	pathRegexp: "admin/fulfillments/scan_shipments.*"
})

/* Survey registrations page elements */
map.addPageset({
	name: 'survey_registrationPage',
	description: 'describes all elements common to survey registrations page',
	pathRegexp: "stylist_surveys/registration.*"
});

map.addElement('survey_registrationPage', {
	name: 'question', 
	description: 'describes Survey question',
	locator: "css=.survey div.question"
});

map.addElement('survey_registrationPage', {
	name: 'choice',
	description: 'describes choice item',
	args: [{
		name: 'index', 
		description: 'describes index of item in choices',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsByClassName('choices threeCol clearAfter').getElementsByClassName('answer col');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//div[@class='choices threeCol clearAfter']/div[@class='answer col'][" + args.index + "]/label/img"
	}
});

map.addElement('survey_registrationPage', {
	name: 'back',
	description: 'describes Back link on Survey registration page',
	locator: "css=.jcarousel-prev"
});

map.addElement('survey_registrationPage', {
	name: 'skip',
	description: 'describes Skip link on Survey registration page',
	locator: "css=.jcarousel-next"
});

map.addElement('survey_registrationPage', {
	name: 'size',
	description: 'describes size number',
	args: [{
		name: 'number',
		description: 'describes number of size',
		defaultValues: [5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 11.0]
	}],
	getLocator: function(args){
		var item = args['number'];
		var array = [5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 11.0];
		var index=0;
		for (var i=0; i<=array.length; i++){
			if (array[i] == item) {
				index = i+2;
				break;
			}
		}
 		return "//div[@class='choices multiCol ssCol clearAfter']/div[" + index + "]";	
	}
});

map.addElement('survey_registrationPage', {
	name: 'age_range',
	description: 'describes age range',
	args: [{
		name: 'range',
		description: 'describes age range',
		defaultValues: ['18-23', '24-29', '30-35', '36-45', '46+']
	}],
	getLocator: function(args){
		var item = args['range'];
		var array = ['18-23', '24-29', '30-35', '36-45', '46+'];
		var index=0;
		for (var i=0; i<=array.length; i++){
			if (array[i] == item) {
				index = i+2;
				break;
			}
		}
 		return "//div[@class='choices multiCol ssCol clearAfter'][2]/div[" + index + "]";	
	}
});

map.addElement('survey_registrationPage', {
	name: 'dress_size',
	description: 'describes dress size',
	args: [{
		name: 'size',
		description: 'describes dress size',
		defaultValues: ['0-4', '6-8', '10-12', '14-16', '18+']
	}],
	getLocator: function(args){
		var item = args['size'];
		var array = ['0-4', '6-8', '10-12', '14-16', '18+'];
		var index=0;
		for (var i=0; i<=array.length; i++){
			if (array[i] == item) {
				index = i+2;
				break;
			}
		}
 		return "//div[@class='choices multiCol ssCol clearAfter'][3]/div[" + index + "]";	
	}
});

map.addElement('survey_registrationPage', {
	name: 'continue',
	description: 'describes Continue button',
	locator: "css=.button_left input"
});

map.addElement('survey_registrationPage', {
	name: 'terms_and_conds',
	description: 'describes Terms&Conditions link',
	locator: "css=.note p a"
});

/* Registration survey page elements:  AB test */
map.addPageset({
	name: 'survey_registrationsPage', 
	description: 'describes all elements common to Registration page',
	pathRegexp: "stylist_surveys/registrations.*"
});

map.addElement('survey_registrationsPage', {
	name: 'question1', 
	description: 'describes answer item',
	args: [{
		name: 'index', 
		description: 'describes index of item in choices',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsByClassName('survey_left_col').getElementsByClassName('survey').getElementsByClassName('threeCol clearAfter').getElementsByTagName('div');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//div[@class='survey_left_col']/div[@class='survey']/div[@class='threeCol clearAfter']/div[" + args.index + "]/a"
	}
});

map.addElement('survey_registrationsPage', {
	name: 'question2', 
	description: 'describes answer item',
	args: [{
		name: 'index', 
		description: 'describes index of item in choices',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsByClassName('survey_left_col').getElementsByClassName('survey').getElementsByClassName('threeCol clearAfter').getElementsByTagName('div');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//div[@class='survey_left_col']/div[@class='survey'][2]/div[@class='threeCol clearAfter']/div[" + args.index + "]/a"
	}
});

map.addElement('survey_registrationsPage', {
	name: 'question3', 
	description: 'describes answer item',
	args: [{
		name: 'index', 
		description: 'describes index of item in choices',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsByClassName('survey_left_col').getElementsByClassName('survey').getElementsByClassName('threeCol clearAfter').getElementsByTagName('div');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//div[@class='survey_left_col']/div[@class='survey'][3]/div[@class='threeCol clearAfter']/div[" + args.index + "]/a"
	}
});

map.addElement('survey_registrationsPage', {
	name: 'question4', 
	description: 'describes answer item',
	args: [{
		name: 'index', 
		description: 'describes index of item in choices',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsByClassName('survey_left_col').getElementsByClassName('survey').getElementsByClassName('threeCol clearAfter').getElementsByTagName('div');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
		return "//div[@class='survey_left_col']/div[@class='survey'][4]/div[@class='threeCol clearAfter']/div[" + args.index + "]/a"
	}
});

map.addElement('survey_registrationsPage', {
	name: 'size',
	description: 'describes size number',
	args: [{
		name: 'number',
		description: 'describes number of size',
		defaultValues: [5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 11.0]
	}],
	getLocator: function(args){
		var item = args['number'];
		var array = [5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10.0, 11.0];
		var index=0;
		for (var i=0; i<=array.length; i++){
			if (array[i] == item) {
				index = i+1;
				break;
			}
		}
 		return "//div[@class='multiCol ssCol clearAfter']/div[" + index + "]/a/img";	
	}
});

map.addElement('survey_registrationsPage', {
	name: 'age_range',
	description: 'describes age range',
	args: [{
		name: 'range',
		description: 'describes age range',
		defaultValues: ['18-23', '24-29', '30-35', '36-45', '46+']
	}],
	getLocator: function(args){
		var item = args['range'];
		var array = ['18-23', '24-29', '30-35', '36-45', '46+'];
		var index=0;
		for (var i=0; i<=array.length; i++){
			if (array[i] == item) {
				index = i+1;
				break;
			}
		}
 		return "//div[@class='multiCol ageCol clearAfter']/div[" + index + "]/a/img";	
	}
});

map.addElement('survey_registrationsPage', {
	name: 'dress_size',
	description: 'describes dress size',
	args: [{
		name: 'size',
		description: 'describes dress size',
		defaultValues: ['0-4', '6-8', '10-12', '14-16', '18+']
	}],
	getLocator: function(args){
		var item = args['size'];
		var array = ['0-4', '6-8', '10-12', '14-16', '18+'];
		var index=0;
		for (var i=0; i<=array.length; i++){
			if (array[i] == item) {
				index = i+1;
				break;
			}
		}
 		return "//div[@class='multiCol dsCol clearAfter']/div[" + index + "]/a/img";	
	}
});

map.addElement('survey_registrationsPage', {
	name: 'continue_btn', 
	description: 'describes Continue button at the footer', 
	locator: "css=.survey_footer div.survey_submit input"
});

map.addElement('survey_registrationsPage', {
	name: 'last_continue', 
	description: 'describes last Continue button',
	locator: "css=.button_right input"
});

/* New user page elements */
map.addPageset({
	name: 'new_userPage',
	description: 'describes elements common to page which is opened after completion survey',
	pathRegexp: "users.*"
});

map.addElement('new_userPage', {
	name: 'email',
	description: 'describes email field on New user page', 
	locator: "id=user_email"
});

map.addElement('new_userPage', {
	name: 'password',
	description: 'describes Password field on New user page',
	locator: "id=user_password"
});

map.addElement('new_userPage', {
	name: 'confirm_password', 
	description: 'describes Confirm password field on New user page', 
	locator: "id=user_password_confirmation"
});

map.addElement('new_userPage', {
	name: 'join_for_free', 
	description: 'describes Join for free button on New user page',
	locator: "css=.button_right_new input"
});

/* Holiday Shop page elements */
map.addPageset({
	name: 'holiday_shopPage',
	description: 'describes elements common to Holiday shop page',
	pathRegexp: "/HolidayShop.*"
});

map.addElement('holiday_shopPage', {
	name: 'banner',
	description: 'describes banner at the top of Holiday Shop page',
	locator: "id=activate_carousel"
});

map.addElement('holiday_shopPage', {
	name: 'holiday_nav_bar',
	description: 'describes navigation bar at the left on Holiday shop page',
	locator: "css=.holiday_shop_nav ul"
});

map.addElement('holiday_shopPage', {
	name: 'navigation_item',
	description: 'describes navigation bar item on Holiday Shop page',
	args: [{
		name: 'index',
		description: 'describes index of item image on Sholiday Shop page',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsByClassName('holiday_shop_nav').getElementsByTagName('ul').getElementsByTagName('li');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
 		return "//div[@class='holiday_shop_nav']/ul/li[" + args.index + "]/a";
	}
});

map.addElement('holiday_shopPage', {
	name: 'products_list',
	description: 'describes list of products on Holiday shop page',
	locator: "css=.holiday_shop_container"
});

map.addElement('holiday_shopPage', {
	name: 'product_item',
	description: 'describes product item on list on Holiday shop page',
	args: [{
		name: 'index',
		description: 'describes index of item image on Sholiday Shop page',
		getDefaultValues: function(inDocument){
			var container = inDocument.getElementsByClassName('holiday_shop_container').getElementsById('showroom_sel_bar_inner').getElementsByClassName('showroom_sel_cntnr');
			var result = [];
			for (var i=0; i <container.length; i++) result.push(i+1);
			return result;
		}
	}],
	getLocator: function(args){
 		return "//div[@class='holiday_shop_container']/div[@id='showroom_sel_bar_inner']/div[@class='showroom_sel_cntnr'][" + args.index + "]/div/span/a";
	}
});

map.addElement('holiday_shopPage', {
	name: 'featured_product',
	description: 'describes featured product section at the left under navigation bar',
	locator: "css=.featured_product div div span a"
});

map.addElement('holiday_shopPage', {
	name: 'shop_giftcards',
	description: 'describes Gift Cards - Shop now link',
	locator: "css=.holiday_shop_gf"
});

map.addElement('holiday_shopPage', {
	name: 'lookbook_carousel',
	description: 'describes Carousel with lookbooks',
	locator: "id=lookbook_carousel"
});

map.addElement('holiday_shopPage', {
	name: 'prev',
	description: 'describes previous arrow on lookbooks carousel',
	locator: "css=#lookbooks div.carousel-container div.carousel-prev"
});

map.addElement('holiday_shopPage', { 
	name: 'close',
	description: 'describes close lookbook button',
	locator: "css=#lookbooks div.close"
});

map.addElement('holiday_shopPage', {
	name: 'next',
	description: 'describes Next arrow button',
	locator: "css=#lookbooks div.carousel-container div.carousel-next"
});