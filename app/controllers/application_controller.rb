class ApplicationController < ActionController::Base
  # protects against Cross-Site Request Forgery CSRF
  protect_from_forgery with: :exception
  # tells controllers to find ERB partials in frontend folder
  prepend_view_path Rails.root.join("frontend")
end
