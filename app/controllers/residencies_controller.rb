require 'pry'

class ResidenciesController < ApplicationController

    def create
        binding.pry
    end

    def residency_params
        # params.permit(:)
    end
end
