# include all files from the transaction directory  
# file will be included from the scenario files

require_relative "setup.rb"
%w[
  sd_users_login.rb
  buy_products.rb
  facebook.rb
  html.class.rb
  product_details.rb
].each {|f| require File.join(File.expand_path("../../"), 'Transaction', f) }
