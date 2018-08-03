class AuthController < ApplicationController

  before_action :only_for_anonymous #check if user is known

  def new; end

  def create
    session[:username] = params[:username]
    # redirects to chat window when username saved from params
    redirect_to root_path
  end

  private

  def only_for_anonymous
    redirect_to_root_path if session[:username] #known user redirected straight to chat
  end
end
