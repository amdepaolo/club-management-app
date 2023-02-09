class UsersController < ApplicationController

    def show 
        user = User.find(session[:user_id])
        render json: user
    end

    def create
        user = User.create(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.permit( :email, :first_name, :last_name, :image, :bio, :password, :password_confirmation)
    end
end
