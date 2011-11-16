require "test/unit" 
require "rubygems"
gem "selenium-client"
require "selenium/client"

class TestLogin < Test::Unit::TestCase

  def setup
    @verification_errors = []
    @selenium = Selenium::Client::Driver.new(
      :host => "localhost",
      :port => 4444,
      :browser => "*chrome",
      :url => "http://qa-one.shoedazzle.com/",
      :timeout_in_second => 60)

    @selenium.start_new_browser_session
  end
  
  def teardown
    @selenium.close_current_browser_session
    assert_equal [], @verification_errors
  end
  
  def test
    @selenium.open "/"
    @selenium.click "css=img[alt=\"ShoeDazzle - Style. Personalized.\"]"
    @selenium.wait_for_page_to_load "30000"
    @selenium.click "id=login_link"
    @selenium.type "id=user_session_login_dropdown", "ahuang@shoedazzle.com"
    @selenium.type "id=user_session_password", "$HOedazz73"
    @selenium.click "css=input[type=\"image\"]"
    @selenium.wait_for_page_to_load "30000"
  end
  
puts "I am here"
end
