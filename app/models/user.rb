class User
  include Mongoid::Document
  field :username, type: String
  field :password_salt, type: String
  field :password_hash, type: String
  field :email, type: String
end
