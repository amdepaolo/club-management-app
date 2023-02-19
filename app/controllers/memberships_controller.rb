class MembershipsController < ApplicationController

    def create
        membership = Membership.create!(user_id: session[:user_id], club_id: params[:club_id])
        render json: membership, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {error: invalid.record.errors}, status: :unprocessable_entity
    end

    def destroy
        club = Club.find(params[:club_id])
        membership = club.memberships.find(params[:id])
        membership.destroy
        head :no_content
    rescue ActiveRecord::RecordNotFound
        render json: {error: "Not found"}, status: :not_found
    end
end
