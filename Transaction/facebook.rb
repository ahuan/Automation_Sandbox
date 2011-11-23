module Facebook
  
  def fb_login(email, pass)
    while @selenium.get_all_window_titles.size() != 1
      titles = @selenium.get_all_window_titles
      @selenium.set_speed "5000"
      if (titles[1] == "Log In | Facebook")
        login_facebook_window(email, pass)
      end
      if (titles[1] == "Request for Permission")
        request_for_permission_window
      end
      if (titles[1] == "XD Proxy")
        @selenium.select_window "XD Proxy"
        @selenium.window_focus
        @selenium.close
        @selenium.select_window ""
        @selenium.refresh
      end
    end
    @selenium.wait_for_page_to_load "3000"
  end
  
  def login_facebook_window(email, pass)
    @selenium.select_window "Log In | Facebook"
    @selenium.window_focus
    @selenium.type "id=email", email
    @selenium.type "id=pass", pass
    @selenium.click "login"
    @selenium.select_window ""
  end
  
  def login_to_fb(email, pass)
    @selenium.open "http://www.facebook.com"
    @selenium.wait_for_page_to_load "3000"
    if !(@selenium.is_element_present "id=login_form")
      @selenium.click "id=navAccountLink"
      @selenium.wait_for_visible "id=logout_form"
      @selenium.click "css=#logout_form label.uiLinkButton input[type=submit]"
      @selenium.wait_for_page_to_load "3000"
    end
    @selenium.type "id=email", email
    @selenium.type "id=pass", pass
    @selenium.click "css=input[value='Log In']"
    @selenium.wait_for_page_to_load "3000"
  end
  
  def request_for_permission_window
    @selenium.select_window "Request for Permission"
    @selenium.window_focus
    @selenium.click "css=input[type=submit]"
    @selenium.select_window ""
  end
  
  def logout_from_facebook
    @selenium.open "http://www.facebook.com"
    @selenium.wait_for_page_to_load "3000"
    if !(@selenium.is_element_present "id=login_form")
      @selenium.click "id=navAccountLink"
      @selenium.wait_for_visible "id=logout_form"
      @selenium.click "css=#logout_form label.uiLinkButton input[type=submit]"
      @selenium.wait_for_page_to_load "3000"
    end
  end
  
  def facebook_connect(email, pass)
    while @selenium.get_all_window_titles.size() != 1
      titles = @selenium.get_all_window_titles
      @selenium.set_speed "5000"
      if (titles[1] == "Log In | Facebook")
        login_facebook_window(email, pass)
      end
      if (titles[1] == "Request for Permission")
        request_for_permission_window
      end
      if (titles[1] == "XD Proxy")
        @selenium.select_window "XD Proxy"
        @selenium.window_focus
        @selenium.close
        @selenium.select_window ""
        @selenium.refresh
      end
    end
    @selenium.wait_for_page_to_load "3000"
  end
  
end