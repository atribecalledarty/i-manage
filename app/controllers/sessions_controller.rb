require 'pry'

class SessionsController < ApplicationController
  def create
    @user = User.find_by(email: session_params[:email])
    if @user && @user.authenticate(session_params[:password])
      login!
      render json: UserSerializer.new(@user).to_serialized_json 
    else
      render json: { errors: ["Invalid combination of email and password. Try again"] }
    end
  end

  def is_logged_in?
    if logged_in? && current_user
      render json: UserSerializer.new(current_user).to_serialized_json
    else
      render json: { logged_in: false }
    end
  end

  def destroy
      logout!
      render json: { status: 200, logged_out: true }
  end

  private
    
    def session_params
      params.require(:user).permit(:username, :email, :password)
    end
    
    def login!
      session[:user_id] = @user.id
    end

    def logged_in?
      !!session[:user_id]
    end

    def current_user
      @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end

    def authorized_user?
      @user == current_user
    end

    def logout!
      session.clear
    end
end