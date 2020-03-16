require 'pry'

class ResidenciesController < ApplicationController

    def create
        # binding.pry
        Residency.create(user_id: residency_params[:user_id], unit_id: residency_params[:unit_id], start_date: Date.today)
    end

    def destroy
        # binding.pry
        Residency.find(params[:id]).delete
    end

    def residency_params
        params.require(:residency).permit(:user_id, :unit_id)
    end
end
