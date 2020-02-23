class UserSerializer
    def initialize (user)
        @user = user
    end

    def to_serialized_json
        options = {
            include: {
                unit: {
                    except: [:updated_at, :created_at, :type_of_unit, :sq_ft, :rent_cost_per_month]
                },
                residency: {
                    except: [:updated_at, :created_at, :user_id, :unit_id]
                }
            },
            except: [:updated_at, :created_at, :password_digest]
        }
        @user.to_json(options)
    end
end