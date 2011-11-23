require "test/unit" 
require "rubygems"
gem "selenium-client"
require "selenium/client"
require_relative "include_transaction"

class BuyingProducts < Test::Unit::TestCase
  include Setup
  include SDUsersLogin
  include BuyProducts
  
  def test_buying_products
    setup_test
    #need logic to detemine n number of sample to run
    #need logic to read data from xls file and number of iteration(s)
    login("ahuang@shoedazzle.com", "sh03dazz73")
    test_buy_products
    #showroom()
    #checkout()
    #my_account()
    #logout()    
  end
   
end


