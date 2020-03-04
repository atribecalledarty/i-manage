require 'pry'

class ResidenciesController < ApplicationController

    def create
        binding.pry
        Residency.create(residency_params)
        users = User.all
        units = Unit.all
        render json: { users: UserSerializer.new(users).to_serialized_json, units: UserSerializer.new(units).to_serialized_json }
    end

    def residency_params
        params.require(:residency).permit(:user_id, :unit_id)
    end
end
