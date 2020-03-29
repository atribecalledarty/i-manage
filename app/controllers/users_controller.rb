require 'pry'

class UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(users).to_serialized_json
    end

    def create
        @user = User.new(user_params)
        # binding.pry
        if @user.save
            login!
            render json: {
                logged_in: true,
                user: @user
            }
        else 
            render json: { errors: @user.errors.full_messages }
        end
    end

    def destroy
        User.find(params[:id]).delete
        Residency.find_by(user_id: params[:id]).delete
        # binding.pry
    end

    def user_params
        params.permit(:username, :first_name, :last_name, :email, :phone_number, :password)
    end
    
    def login!
        session[:user_id] = @user.id
    end
end
