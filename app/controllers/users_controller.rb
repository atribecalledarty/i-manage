require 'pry'

class UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(users)
    end

    def create
        @user = User.new(user_params)
        render json: (@user.save ? UserSerializer.new(@user) : { errors: @user.errors.full_messages })
    end

    def create_and_login
        @user = User.new(user_params)
        render json: (@user.save ? UserSerializer.new(@user) : { errors: @user.errors.full_messages })
    end

    def destroy
        User.find(params[:id]).delete
        Residency.find_by(user_id: params[:id]).delete
    end

    def user_params
        params.permit(:username, :first_name, :last_name, :email, :phone_number, :password)
    end
    
    def login!
        session[:user_id] = @user.id
    end
end
