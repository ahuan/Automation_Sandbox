module ProductDetails
  
  def close_complete_the_look_modal 
    if @selenium.is_element_present "ui=allPages::complete_the_look()"
      sleep 5
      if @selenium.is_visible "ui=allPages::complete_the_look()"
        @selenium.click "ui=allPages::close_complete_the_look()"
      end
    end
  end
  
  def add_product_shoe
   # @selenium.click "//img[@alt='Scarlet']"
    if @selenium.is_element_present "ui=showroomPage::shoes_section()"
      @selenium.click "ui=showroomPage::shoe_item(index=1)"
    else
      @selenium.click "ui=onetimeshowroomPage::discounted_item(index=1)"
    end
    @selenium.wait_for_page_to_load "3000"
    @selenium.click "ui=pdPage::pd_add_to_bag_logged()"
    sleep 2
    close_complete_the_look_modal
  end
  
  def add_product_bag
    #@selenium.click "ui=allPages::prod_bag()"
    # @selenium.click "//img[@alt='Magnolia']"
    if @selenium.is_element_present "ui=showroomPage::bags_section()"
      @selenium.click "ui=showroomPage::bag_item(index=1)"
    else
      @selenium.click "ui=onetimeshowroomPage::discounted_item(index=7)"
    end
    @selenium.wait_for_page_to_load "3000"
    @selenium.click "ui=pdPage::pd_add_to_bag_logged()"
    sleep 2
    close_complete_the_look_modal
  end

  def add_product_accessory
    #@selenium.click "ui=allPages::prod_jewel()"
    # @selenium.click "//img[@alt='Tangled Treasure']"
    if @selenium.is_element_present "ui=showroomPage::jewelry_section()"
      @selenium.click "ui=showroomPage::jewelry_item(index=1)"
    else
      @selenium.click "ui=onetimeshowroomPage::discounted_item(index=9)"
    end
    @selenium.wait_for_page_to_load "3000"
    @selenium.click "ui=pdPage::pd_add_to_bag_logged()"
    sleep 2
    close_complete_the_look_modal
  end
   
  def add_second_product
    if @selenium.is_element_present "ui=showroomPage::shoes_section()"
      @selenium.click "ui=showroomPage::shoe_item(index=1)"
    else
      @selenium.click "ui=onetimeshowroomPage::discounted_item(index=1)"
    end
    @selenium.wait_for_page_to_load "3000"
    @selenium.click "ui=pdPage::pd_add_to_bag_logged()"
    sleep 2
    close_complete_the_look_modal
    if @selenium.is_visible "ui=allPages::shopping_bag_checkout()"
      follow_checkout_button
      @selenium.wait_for_page_to_load "30000"
    else 
      @selenium.click "ui=allPages::h_checkout()"
      @selenium.wait_for_page_to_load "30000"
    end
  end
  
  def add_to_bag
    if @selenium.is_visible "ui=pdPage::sold_out_image()"
      if @selenium.is_element_present "ui=pdPage::size_carousel()"
        if @selenium.is_visible "ui=pdPage::size_carousel()"
          if @selenium.is_element_present "ui=pdPage::available_size()"
            @selenium.click "ui=pdPage::available_size()"
            @selenium.wait_for_no_element "ui=pdPage::unavailable_default_selected()"
            @selenium.click "ui=pdPage::pd_add_to_bag_logged()"
            sleep 2
            close_complete_the_look_modal
          end
        end
      else
        @html.add_to_report(true, 'Completely sold out product', 'cannot be bought', 'cannot be bought')
        @selenium.click "ui=pdPage::pd_add_to_bag_logged()"
        sleep 2
        close_complete_the_look_modal
      end
    else
      @selenium.click "ui=pdPage::pd_add_to_bag_logged()"
      sleep 2
      close_complete_the_look_modal
    end
  end
  
  def follow_checkout_button
    if @selenium.is_visible "ui=allPages::shopping_bag_checkout()"
      @selenium.click "ui=allPages::shopping_bag_checkout()"
    else 
      @selenium.click "ui=allPages::h_checkout()"
    end
    @selenium.wait_for_page_to_load "3000"
  end
  
end