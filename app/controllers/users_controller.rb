require 'pry'

class UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(users).to_serialized_json
    end

    def create
        user = User.new(user_params)
        if user.save
        # users = User.all
        # binding.pry
            render json: UserSerializer.new(user).to_serialized_json
        else 
            render json: { errors: user.errors.full_messages }
        end
    end

    def user_params
        params.require(:user).permit(:username, :first_name, :last_name, :email, :phone_number, :password)
    end
end
