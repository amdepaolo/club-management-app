class MembershipsController < ApplicationController

    def create
        membership = Membership.create(user_id: session[:user_id], club_id: params[:club_id])
        render json: membership, status: :created
    end

    def destroy
        membership = Membership.find(params[:id])
        membership.destroy
        head :no_content
    end
end
