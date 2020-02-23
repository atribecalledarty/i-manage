class UnitsController < ApplicationController
    def index
        units = Unit.all
        render json: UnitSerializer.new(units).to_serialized_json
    end
end
