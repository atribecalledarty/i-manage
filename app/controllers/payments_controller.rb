require 'pry'

class PaymentsController < ApplicationController
    def create
        payment = Payment.new(
            amount: payments_params[:amount], 
            residency_id: payments_params[:residency_id], 
            transaction_date: Date.today)
        render json: (payment.save ? { payment: payment } : { errors: payment.errors.full_messages })
    end

    def payments_params
        params.permit(:amount, :residency_id)
    end
end
