require 'pry'

class ResidenciesController < ApplicationController

    def create
        # binding.pry
        r = Residency.new(user_id: residency_params[:user_id], unit_id: residency_params[:unit_id], start_date: Date.today)
        # binding.pry
        render json: (r.save ? r : { errors: r.errors.full_messages })
    end

    def destroy
        # binding.pry
        r = Residency.find(params[:id]).delete
        render json: r
    end

    def residency_params
        params.require(:residency).permit(:user_id, :unit_id)
    end
end
