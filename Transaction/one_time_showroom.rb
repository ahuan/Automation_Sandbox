module Showroom
 
class OneTimeShowroom
   
  def shoe_detail_page
    @selenium.open "/products/ambrosia"
    @selenium.wait_for_page_to_load "30000"
  end

  def bag_detail_page
    @selenium.open "/products/MOSCOW"
    @selenium.wait_for_page_to_load "30000"
  end

  def jewel_detail_page
    @selenium.open "/products/multi-faceted"
    @selenium.wait_for_page_to_load "30000"
  end

  def assert_shoe_one_time_showroom
    assert @selenium.is_text_present("Ambrosia")
  end

  def assert_bag_one_time_showroom
    assert @selenium.is_text_present("Moscow")
    assert @selenium.is_element_present("//img[@alt='Moscow']")
  end

  def assert_jewel_one_time_showroom
    assert @selenium.is_text_present("Multi Faceted")
    assert @selenium.is_element_present("//img[@alt='Multi Faceted']")
  end
  
  def onetimeshowroom_view
    assert @selenium.is_element_present "ui=onetimeshowroomPage::bestsellers_section()"
    assert @selenium.is_element_present "ui=onetimeshowroomPage::discounted_products()"
    assert @selenium.is_element_present "ui=onetimeshowroomPage::reveal_your_profile()"
    assert @selenium.is_element_present "ui=onetimeshowroomPage::like_btn()"
    assert @selenium.is_element_present "ui=onetimeshowroomPage::fan_box()"
    assert @selenium.is_element_present "ui=onetimeshowroomPage::video_image()"
    assert @selenium.is_element_present "ui=onetimeshowroomPage::watch_the_video()"
    assert @selenium.is_element_present "ui=onetimeshowroomPage::recommended_products()"
    assert @selenium.is_element_present "ui=onetimeshowroomPage::note()"
    assert @selenium.is_element_present "ui=onetimeshowroomPage::most_liked()"
    assert @selenium.is_element_present "ui=onetimeshowroomPage::blocked_header()"
    assert @selenium.is_element_present "ui=onetimeshowroomPage::block_overlay()"
    assert @selenium.is_element_present "ui=onetimeshowroomPage::like_us_to_unlock()"
  end
  
  def test_onetimeshowroom
    logout_from_facebook
    @selenium.open "/"
    @selenium.wait_for_page_to_load "3000"
    @selenium.click "ui=allPages::h_get_started()"
    @selenium.wait_for_page_to_load "3000"
    complete_survey(2, 7)
    register_new_user
    # login("test499641@test.com", "P@ssword123")
    onetimeshowroom_view
    @selenium.click "ui=onetimeshowroomPage::video_image()"
    @selenium.wait_for_visible "ui=onetimeshowroomPage::unboxed_video_modal()"
    @selenium.click "ui=onetimeshowroomPage::close_modal()"
    @selenium.wait_for_not_visible "ui=onetimeshowroomPage::unboxed_video_modal()"
    @selenium.click "ui=onetimeshowroomPage::watch_the_video()"
    @selenium.wait_for_visible "ui=onetimeshowroomPage::unboxed_video_modal()"
    @selenium.click "ui=onetimeshowroomPage::close_modal()"
    @selenium.wait_for_not_visible "ui=onetimeshowroomPage::unboxed_video_modal()"
    @selenium.click "ui=onetimeshowroomPage::reveal_your_profile()"
    @selenium.wait_for_visible "ui=onetimeshowroomPage::reveal_style_profile_modal()"
    @selenium.click "ui=onetimeshowroomPage::close_reveal_modal()"
    @selenium.wait_for_not_visible "ui=onetimeshowroomPage::reveal_style_profile_modal()"
    @selenium.click "ui=onetimeshowroomPage::like_us_to_unlock()"
    fb_login("peter.dazzle@tut.by", "12381238")
    assert @selenium.is_visible "ui=onetimeshowroomPage::unblocked_header()"
    assert !(@selenium.is_element_present "ui=onetimeshowroomPage::block_overlay()")
    
  end
  
  def test_shoe_product_detail_survey_email
    shoe_detail_page
    @selenium.click "ui=pdPage::pd_add_to_bag_logout()"
    assert !60.times{ break if (@selenium.is_element_present "ui=allPages::header_signin_modal()" rescue false); sleep 1 }
    @selenium.click "ui=allPages::join_signin_modal()"
    @selenium.wait_for_page_to_load "30000"
    complete_survey(2, 7)
    register_new_user
    # assert_shoe_one_time_showroom
  end

  def test_bag_product_detail_survey_email
    bag_detail_page
    @selenium.click "ui=pdPage::pd_add_to_bag_logout()"
    assert !60.times{ break if (@selenium.is_element_present "ui=allPages::header_signin_modal()" rescue false); sleep 1 }
    @selenium.click "ui=allPages::join_signin_modal()"
    @selenium.wait_for_page_to_load "30000"
    complete_survey(1, 8)
    register_new_user
    # assert_bag_one_time_showroom
  end

  def test_jewel_product_detail_survey_email
    jewel_detail_page
    # follow Join for free button in corresponding sectio
    @selenium.click "ui=pdPage::join_for_free()"
    @selenium.wait_for_page_to_load "30000"
    complete_survey(3, 9)
    register_new_user
    # assert_jewel_one_time_showroom
  end
 
end  
end