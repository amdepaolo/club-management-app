class ClubsController < ApplicationController

    def index
        clubs = Club.all
        render json: clubs, user_id: session[:user_id]
    end

    def show
        club = Club.find(params[:id])
        render json: club, user_id: session[:user_id]
    end

    def create
        club = Club.new(club_params)
        club.admin_id = session[:user_id]
        club.save!
        render json: club, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

    def update
        club = Club.find(params[:id])
        if club.admin_id == session[:user_id]
            club.update(club_params)
            render json: club, user_id: session[:user_id], status: :accepted
        else 
            render json: {error: "User is not club admin, can't edit"}, status: :unauthorized
        end
    end

    def destroy
        club = Club.find(params[:id])
        if club.admin_id == session[:user_id]
            club.destroy
            head :no_content
        else
            render json: {error: "User is not club admin, can't delete"}, status: :unauthorized
        end
    end

    private

    def club_params
        params.permit(:name, :description, :meeting_area, :meeting_time, :max_membership, :admin_id)
    end
end
