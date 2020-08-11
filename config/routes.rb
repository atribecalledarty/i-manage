Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
  # post '/users/create_and_login', to: 'users#create_and_login'
  
  resources :payments
  resources :residencies
  resources :units
  resources :users

  post '/users/create_and_login', to: 'users#create_and_login'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
