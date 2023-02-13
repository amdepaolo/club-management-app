class UsersController < ApplicationController

    def show 
        user = User.find(session[:user_id])
        render json: user
    rescue ActiveRecord::RecordNotFound
        render json: {errors: ["no user logged in"]}, status: :unprocessable_entity
    end

    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit( :email, :first_name, :last_name, :image, :bio, :password, :password_confirmation)
    end
end
