class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  @neighborhoods = Neighborhood.all

end
