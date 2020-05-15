class ApplicationController < ActionController::API
    # skip_before_action :verify_authenticity_token
    
    # helper_method :login!, :logged_in?, :current_user, :authorized_user?, :logout!

    # private 
    def fallback_index_html
        render :file => 'public/index.html'
    end    
end
