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
        club = Club.create(club_params)
        render json: club, status: :created
    end

    def update
        club = Club.find(params[:id])
        club.update(club_params)
        render json: club, user_id: session[:user_id], status: :accepted
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
        params.permit(:name, :description, :meeting_area, :meeting_time, :max_membership)
    end
end
