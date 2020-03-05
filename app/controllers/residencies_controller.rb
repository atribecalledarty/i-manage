require 'pry'

class ResidenciesController < ApplicationController

    def create
        # binding.pry
        Residency.create(residency_params)
    end

    def residency_params
        params.require(:residency).permit(:user_id, :unit_id)
    end
end
