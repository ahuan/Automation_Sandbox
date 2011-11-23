module SDUsersLogin
  
  def login(email, password)
    @selenium.open "/"
    @selenium.wait_for_page_to_load "30000"
    @selenium.click "ui=allPages::h_already_member()"
    @selenium.type "ui=allPages::sign_in_email()", email   
    @selenium.type "ui=allPages::sign_in_pass()", password
    @selenium.click "ui=allPages::sign_in_signinbtn()"
    @selenium.wait_for_page_to_load "30000"
  end
  
end  
