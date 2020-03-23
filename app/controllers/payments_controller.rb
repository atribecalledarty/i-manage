require 'pry'

class PaymentsController < ApplicationController

    def create
        payment = Payment.new(
            amount: payments_params[:amount], 
            residency_id: payments_params[:residency_id], 
            transaction_date: Date.today)
        # binding.pry
        if payment.save
            render json: {
                status: 201
            }
        else 
            render json: {
                errors: payment.errors.full_messages
            }
        end
    end

    def payments_params
        params.permit(:amount, :residency_id)
    end
end
