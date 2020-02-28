require 'pry'

class UsersController < ApplicationController
    def index
        users = User.all
        render json: UserSerializer.new(users).to_serialized_json
    end

    def create
        user = User.create(
            username: params[:username],
            first_name: params[:first_name],
            last_name: params[:last_name],
            email: params[:email],
            phone_number: params[:phone_number],
            password: params[:password]
        )
        users = User.all
        binding.pry
        render json: UserSerializer.new(users).to_serialized_json
    end


end
