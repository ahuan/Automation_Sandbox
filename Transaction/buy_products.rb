module BuyProducts
    
  def test_buy_products
    @selenium.open "/#156"
    @selenium.click "link=my showroom"
    @selenium.wait_for_page_to_load "30000"
    @selenium.click "link=view originals"
    #@selenium.click "allPages::quick_product_image"
    #@selenium.click "//ul[@id='shoes_slide_inner_box']/li[2]/div/div/div/span/a/img[2]"
    @selenium.wait_for_page_to_load "30000"
    @selenium.click "id=add_product_to_cart_submit_button"
    #@selenium.click "ui=allPages::complete_the_look"
    #@selenium.click "ui=allPages::ctl_continue_shopping()"
    @selenium.click "link=Continue Shopping"
    @selenium.wait_for_page_to_load "50000"
    @selenium.click "link=my showroom"
    @selenium.wait_for_page_to_load "30000"
    @selenium.click "//ul[@id='bags_slide_inner_box']/li/div/div/div/span/a/img[2]"
    @selenium.wait_for_page_to_load "50000"
    @selenium.click "id=add_product_to_cart_submit_button"
    @selenium.click "link=my showroom"
    @selenium.wait_for_page_to_load "50000"
    @selenium.click "//ul[@id='accessories_slide_inner_box']/li/div/div/div/span/a/img[2]"
    @selenium.wait_for_page_to_load "50000"
    @selenium.click "id=add_product_to_cart_submit_button"
    @selenium.click "ui=allPages::ctl_continue_shopping()"
    @selenium.wait_for_page_to_load "30000"
    #begin
     #   assert @selenium.is_text_present("(3)")
    #rescue Test::Unit::AssertionFailedError
     #   @verification_errors << $!
    #end
  end
end
