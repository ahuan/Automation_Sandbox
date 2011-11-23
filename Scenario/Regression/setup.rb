module Setup
  
  def setup_test
    @verification_errors = []
    @selenium = Selenium::Client::Driver.new( 
      :host => "localhost",
      :port => 4444,
      #:browser => "*iexplore",
      #:browser => "*chrome",
      :browser => "*firefox",
      #:browser => "*Firefox on Windows",
      #:browser => "*safari",
      #:browser => "*custom /Application/Firefox.app",
      #:url => "http://www.google.com",
      :url => "https://qa-one.shoedazzle.com",
      #:url => "https://qa-two.shoedazzle.com",
      #:url => "https://stage-one.shoedazzle.com",
      #:url => "http://qa-three.shoedazzle.com",
      :timeout_in_second => 60)

    @extJs = File.read(File.expand_path("../../") + '/user-extensions.js')
    @selenium.set_extension_js(@extJs)
    
    @selenium.start_new_browser_session
  end
  
  def teardown
    @selenium.close_current_browser_session
    assert_equal [], @verification_errors
  end
 
end