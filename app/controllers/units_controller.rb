class UnitsController < ApplicationController

    def index
        units = Unit.all
        render json: UnitSerializer.new(units).to_serialized_json
    end

    def show
        unit = Unit.find(params[:id])
        render json: UnitSerializer.new(unit).to_serialized_json
    end
end
