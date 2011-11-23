require "test/unit" 
require "rubygems"
gem "selenium-client"
require "selenium/client"
require_relative "include_transaction"


class Login < Test::Unit::TestCase
  include Setup
  include SDUsersLogin
  
  def testing_login_page
    setup_test
    #need logic to detemine n number of sample to run
    #need logic to read data from xls file and number of iteration(s)
    login("ahuang@shoedazzle.com", "sh03dazz73")
  end
  
end
  